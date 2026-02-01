import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TutorialStatus = 'completed' | 'in-progress' | 'locked' | 'available';

interface TutorialProgress {
  tutorialId: string;
  status: TutorialStatus;
  completedAt?: Date;
  lastAccessedAt?: Date;
  progress?: number; // 0-100
}

interface UserProgressState {
  tutorialProgress: Record<string, TutorialProgress>;
  markCompleted: (tutorialId: string) => void;
  markInProgress: (tutorialId: string, progress?: number) => void;
  getTutorialStatus: (tutorialId: string, hasPrerequisites?: boolean) => TutorialStatus;
  reset: () => void;
}

export const useUserProgressStore = create<UserProgressState>()(
  persist(
    (set, get) => ({
      tutorialProgress: {},

      markCompleted: (tutorialId: string) =>
        set((state) => ({
          tutorialProgress: {
            ...state.tutorialProgress,
            [tutorialId]: {
              tutorialId,
              status: 'completed',
              completedAt: new Date(),
              lastAccessedAt: new Date(),
              progress: 100,
            },
          },
        })),

      markInProgress: (tutorialId: string, progress = 0) =>
        set((state) => ({
          tutorialProgress: {
            ...state.tutorialProgress,
            [tutorialId]: {
              ...state.tutorialProgress[tutorialId],
              tutorialId,
              status: 'in-progress',
              lastAccessedAt: new Date(),
              progress,
            },
          },
        })),

      getTutorialStatus: (tutorialId: string, hasPrerequisites = false): TutorialStatus => {
        const progress = get().tutorialProgress[tutorialId];
        if (progress?.status === 'completed') return 'completed';
        if (progress?.status === 'in-progress') return 'in-progress';
        if (hasPrerequisites) return 'locked';
        return 'available';
      },

      reset: () => set({ tutorialProgress: {} }),
    }),
    {
      name: 'user-progress-storage',
    }
  )
);

// Helper hooks for filtering tutorials by status
export const useCompletedTutorials = () => {
  const tutorialProgress = useUserProgressStore((state) => state.tutorialProgress);
  return new Set(
    Object.entries(tutorialProgress)
      .filter(([, progress]) => progress.status === 'completed')
      .map(([id]) => id)
  );
};

export const useInProgressTutorials = () => {
  const tutorialProgress = useUserProgressStore((state) => state.tutorialProgress);
  return new Set(
    Object.entries(tutorialProgress)
      .filter(([, progress]) => progress.status === 'in-progress')
      .map(([id]) => id)
  );
};
