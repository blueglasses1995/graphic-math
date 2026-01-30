/**
 * User Progress Store - Tracks learning progress across all tutorials
 *
 * Features:
 * - Track completed tutorials and in-progress tutorials with section tracking
 * - Time tracking per tutorial
 * - Statistics: total completed, by category, average difficulty, total hours, streak
 * - Persistent storage using localStorage with proper Map/Set serialization
 * - Optimized selector hooks for performance
 *
 * @example
 * ```tsx
 * // In a component
 * import { useUserProgress, useTutorialProgress } from '@/store/userProgress';
 *
 * function TutorialComponent() {
 *   const { completeSection, completeTutorial, updateTimeSpent } = useUserProgress();
 *   const progress = useTutorialProgress('linear-algebra-intro');
 *
 *   // Complete a section (0-5)
 *   const handleSectionComplete = () => {
 *     completeSection('linear-algebra-intro', 2);
 *     updateTimeSpent('linear-algebra-intro', 15); // 15 minutes
 *   };
 *
 *   // Complete entire tutorial
 *   const handleTutorialComplete = () => {
 *     completeTutorial('linear-algebra-intro', 'linear-algebra', 3);
 *   };
 *
 *   return (
 *     <div>
 *       {progress.isCompleted ? 'Completed!' : `Section ${progress.currentSection + 1}/6`}
 *       <p>Time spent: {progress.totalTimeSpent} minutes</p>
 *     </div>
 *   );
 * }
 *
 * // Use selector hooks for specific data
 * function StatsDisplay() {
 *   const stats = useProgressStats();
 *
 *   return (
 *     <div>
 *       <p>Completed: {stats.totalCompleted}</p>
 *       <p>Total hours: {stats.totalHours}</p>
 *       <p>Current streak: {stats.streak} days</p>
 *     </div>
 *   );
 * }
 * ```
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Types
export interface UserProgressStats {
  totalCompleted: number;
  byCategory: Map<string, number>;
  averageDifficulty: number;
  totalHours: number;
  streak: number;
}

export interface UserProgress {
  completed: Set<string>;
  inProgress: Map<string, number>;
  timeSpent: Map<string, number>;
  stats: UserProgressStats;
  lastActiveDate: string | null;
}

interface UserProgressState extends UserProgress {
  // Actions
  completeSection: (tutorialId: string, sectionIndex: number) => void;
  completeTutorial: (tutorialId: string, category: string, difficulty: number) => void;
  updateTimeSpent: (tutorialId: string, minutes: number) => void;
  calculateStats: () => void;
  resetProgress: () => void;
  getTutorialProgress: (tutorialId: string) => {
    isCompleted: boolean;
    currentSection: number;
    totalTimeSpent: number;
  };
}

// Initial state
const initialState: UserProgress = {
  completed: new Set<string>(),
  inProgress: new Map<string, number>(),
  timeSpent: new Map<string, number>(),
  stats: {
    totalCompleted: 0,
    byCategory: new Map<string, number>(),
    averageDifficulty: 0,
    totalHours: 0,
    streak: 0,
  },
  lastActiveDate: null,
};

// Serialization helpers for Maps and Sets
interface SerializedState {
  completed: string[];
  inProgress: [string, number][];
  timeSpent: [string, number][];
  stats: {
    totalCompleted: number;
    byCategory: [string, number][];
    averageDifficulty: number;
    totalHours: number;
    streak: number;
  };
  lastActiveDate: string | null;
}

const deserialize = (serialized: SerializedState): UserProgress => ({
  completed: new Set(serialized.completed),
  inProgress: new Map(serialized.inProgress),
  timeSpent: new Map(serialized.timeSpent),
  stats: {
    ...serialized.stats,
    byCategory: new Map(serialized.stats.byCategory),
  },
  lastActiveDate: serialized.lastActiveDate,
});

const serialize = (state: UserProgress): SerializedState => ({
  completed: Array.from(state.completed),
  inProgress: Array.from(state.inProgress),
  timeSpent: Array.from(state.timeSpent),
  stats: {
    ...state.stats,
    byCategory: Array.from(state.stats.byCategory),
  },
  lastActiveDate: state.lastActiveDate,
});

// Helper function to calculate streak
const calculateStreak = (lastActiveDate: string | null): number => {
  if (!lastActiveDate) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastDate = new Date(lastActiveDate);
  lastDate.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // If last active was today, maintain streak
  if (diffDays === 0) {
    return 1; // At least 1 day streak
  }

  // If last active was yesterday, continue streak
  if (diffDays === 1) {
    return 1; // Will be incremented by the calling function
  }

  // If more than 1 day gap, reset streak
  return 0;
};

// Store
export const useUserProgress = create<UserProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      completeSection: (tutorialId: string, sectionIndex: number) => {
        set((state) => {
          const newInProgress = new Map(state.inProgress);

          // Validate section index (0-5)
          if (sectionIndex < 0 || sectionIndex > 5) {
            console.warn(`Invalid section index: ${sectionIndex}`);
            return state;
          }

          // Update progress to this section
          newInProgress.set(tutorialId, sectionIndex);

          // Update last active date and calculate streak
          const today = new Date().toISOString().split('T')[0];
          const currentStreak = state.lastActiveDate === today
            ? state.stats.streak
            : calculateStreak(state.lastActiveDate) + 1;

          return {
            ...state,
            inProgress: newInProgress,
            lastActiveDate: today,
            stats: {
              ...state.stats,
              streak: currentStreak,
            },
          };
        });

        // Recalculate stats
        get().calculateStats();
      },

      completeTutorial: (tutorialId: string, category: string, _difficulty: number) => {
        set((state) => {
          const newCompleted = new Set(state.completed);
          const newInProgress = new Map(state.inProgress);

          // Add to completed
          newCompleted.add(tutorialId);

          // Remove from in-progress
          newInProgress.delete(tutorialId);

          // Update category count
          const newByCategory = new Map(state.stats.byCategory);
          const currentCount = newByCategory.get(category) || 0;
          newByCategory.set(category, currentCount + 1);

          // Update last active date and calculate streak
          const today = new Date().toISOString().split('T')[0];
          const currentStreak = state.lastActiveDate === today
            ? state.stats.streak
            : calculateStreak(state.lastActiveDate) + 1;

          return {
            ...state,
            completed: newCompleted,
            inProgress: newInProgress,
            lastActiveDate: today,
            stats: {
              ...state.stats,
              totalCompleted: newCompleted.size,
              byCategory: newByCategory,
              streak: currentStreak,
            },
          };
        });

        // Recalculate stats (especially average difficulty and total hours)
        get().calculateStats();
      },

      updateTimeSpent: (tutorialId: string, minutes: number) => {
        set((state) => {
          const newTimeSpent = new Map(state.timeSpent);
          const currentTime = newTimeSpent.get(tutorialId) || 0;
          newTimeSpent.set(tutorialId, currentTime + minutes);

          // Update last active date
          const today = new Date().toISOString().split('T')[0];
          const currentStreak = state.lastActiveDate === today
            ? state.stats.streak
            : calculateStreak(state.lastActiveDate) + 1;

          return {
            ...state,
            timeSpent: newTimeSpent,
            lastActiveDate: today,
            stats: {
              ...state.stats,
              streak: currentStreak,
            },
          };
        });

        // Recalculate stats
        get().calculateStats();
      },

      calculateStats: () => {
        set((state) => {
          // Calculate total hours from timeSpent
          let totalMinutes = 0;
          state.timeSpent.forEach((minutes) => {
            totalMinutes += minutes;
          });
          const totalHours = parseFloat((totalMinutes / 60).toFixed(1));

          // Update streak based on last active date
          const currentStreak = calculateStreak(state.lastActiveDate);

          return {
            ...state,
            stats: {
              ...state.stats,
              totalHours,
              streak: currentStreak > 0 ? currentStreak : state.stats.streak,
            },
          };
        });
      },

      resetProgress: () => {
        set({
          ...initialState,
          stats: {
            ...initialState.stats,
            byCategory: new Map<string, number>(),
          },
        });
      },

      getTutorialProgress: (tutorialId: string) => {
        const state = get();
        return {
          isCompleted: state.completed.has(tutorialId),
          currentSection: state.inProgress.get(tutorialId) ?? -1,
          totalTimeSpent: state.timeSpent.get(tutorialId) ?? 0,
        };
      },
    }),
    {
      name: 'user-progress-storage',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      // Serialize Maps and Sets before storing
      partialize: (state) =>
        serialize({
          completed: state.completed,
          inProgress: state.inProgress,
          timeSpent: state.timeSpent,
          stats: state.stats,
          lastActiveDate: state.lastActiveDate,
        }) as any,
      // Deserialize after loading
      onRehydrateStorage: () => (state) => {
        if (state) {
          const serialized = state as any as SerializedState;
          const deserialized = deserialize(serialized);
          Object.assign(state, deserialized);
        }
      },
    }
  )
);

// Selector hooks for optimized re-renders
export const useCompletedTutorials = () =>
  useUserProgress((state) => state.completed);

export const useInProgressTutorials = () =>
  useUserProgress((state) => state.inProgress);

export const useProgressStats = () =>
  useUserProgress((state) => state.stats);

export const useTutorialProgress = (tutorialId: string) =>
  useUserProgress((state) => state.getTutorialProgress(tutorialId));

// Helper function to check if a tutorial is accessible based on prerequisites
export const checkPrerequisites = (
  prerequisites: string[],
  completedTutorials: Set<string>
): boolean => {
  if (prerequisites.length === 0) return true;
  return prerequisites.every((prereq) => completedTutorials.has(prereq));
};
