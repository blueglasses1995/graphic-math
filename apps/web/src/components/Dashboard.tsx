import { useMemo } from 'react';
import { categories, getCategoryById } from '@learnmath/tutorials/categories';
import { allCategories, getTutorialById } from '@learnmath/tutorials';
import { useProgressStats, useCompletedTutorials, useInProgressTutorials } from '../store/userProgress';

/**
 * Dashboard Component - Displays user learning progress and statistics
 *
 * Features:
 * - Hero stats section with key metrics
 * - Category completion grid with progress bars
 * - Average difficulty meter
 * - Recent activity timeline
 * - Recommended next tutorials based on prerequisites
 * - Responsive grid layout using Tailwind CSS
 */

// Local interfaces for the dashboard
interface CategoryWithTutorials {
  id: string;
  name: string;
  description: string;
  tutorials: any[];
}

interface RecentActivity {
  tutorialId: string;
  tutorialTitle: string;
  categoryName: string;
  categoryColor: string;
  timestamp: Date;
  type: 'completed' | 'started';
}

interface CategoryProgress {
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
  completed: number;
  total: number;
  percentage: number;
  difficulty: number;
}

interface RecommendedTutorial {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  difficulty: number;
  estimatedMinutes: number;
  prerequisitesMet: boolean;
}

// Simple bar chart component using CSS
function SimpleBarChart({ data }: { data: CategoryProgress[] }) {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.categoryId}>
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-2xl">{item.categoryIcon}</span>
              <span className="text-sm font-medium text-gray-300">{item.categoryName}</span>
            </div>
            <span className="text-xs font-semibold text-gray-400">
              {item.completed}/{item.total}
            </span>
          </div>
          <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${Math.min((item.percentage / 100) * 100, 100)}%`,
                backgroundColor: item.categoryColor,
              }}
            />
          </div>
          <div className="text-right text-xs text-gray-500 mt-0.5">
            {item.percentage.toFixed(0)}%
          </div>
        </div>
      ))}
    </div>
  );
}

// Difficulty meter component
function DifficultyMeter({ averageDifficulty }: { averageDifficulty: number }) {
  const maxDifficulty = 10;
  const percentage = (averageDifficulty / maxDifficulty) * 100;

  // Color gradient based on difficulty
  let meterColor = '#10B981'; // green (easy)
  if (averageDifficulty > 5) meterColor = '#F59E0B'; // amber (medium)
  if (averageDifficulty > 7) meterColor = '#EF4444'; // red (hard)

  const getDifficultyLabel = (difficulty: number) => {
    if (difficulty <= 2) return 'Beginner';
    if (difficulty <= 4) return 'Foundation';
    if (difficulty <= 6) return 'Intermediate';
    if (difficulty <= 8) return 'Advanced';
    return 'Expert';
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">Learning Level</span>
        <span className="text-lg font-bold" style={{ color: meterColor }}>
          {getDifficultyLabel(averageDifficulty)}
        </span>
      </div>
      <div className="relative h-4 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: meterColor,
          }}
        />
      </div>
      <div className="text-xs text-gray-400">
        Average Difficulty: {averageDifficulty.toFixed(1)}/10
      </div>
    </div>
  );
}

// Recent activity timeline component
function RecentActivityTimeline({ activities }: { activities: RecentActivity[] }) {
  if (activities.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 text-sm">No recent activity yet. Start a tutorial to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {activities.slice(0, 5).map((activity, index) => (
        <div key={`${activity.tutorialId}-${index}`}
          className="flex items-center gap-3 pb-3 border-b border-slate-700 last:border-b-0">
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: activity.categoryColor }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-300">
              <span className="font-medium">{activity.tutorialTitle}</span>
              {activity.type === 'completed' && (
                <span className="text-green-400 ml-2">✓ completed</span>
              )}
              {activity.type === 'started' && (
                <span className="text-blue-400 ml-2">→ started</span>
              )}
            </p>
            <p className="text-xs text-gray-500">{activity.categoryName}</p>
          </div>
          <span className="text-xs text-gray-500 flex-shrink-0">
            {activity.timestamp.toLocaleDateString()}
          </span>
        </div>
      ))}
    </div>
  );
}

// Recommended tutorials section
function RecommendedTutorials({ tutorials }: { tutorials: RecommendedTutorial[] }) {
  if (tutorials.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 text-sm">Complete some tutorials to get personalized recommendations!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {tutorials.slice(0, 3).map((tutorial) => (
        <div
          key={tutorial.id}
          className="bg-slate-700 hover:bg-slate-600 rounded-lg p-4 cursor-pointer transition-colors duration-200"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-200 truncate">{tutorial.title}</p>
              <p className="text-xs text-gray-400 mt-1">{tutorial.category}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-1 bg-slate-600 text-gray-300 rounded">
                  {tutorial.estimatedMinutes} min
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{
                  backgroundColor: `${tutorial.categoryColor}20`,
                  color: tutorial.categoryColor,
                }}>
                  Difficulty: {tutorial.difficulty}/10
                </span>
              </div>
            </div>
            {tutorial.prerequisitesMet && (
              <div className="text-green-400 text-lg flex-shrink-0">✓</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Dashboard Component
export default function Dashboard() {
  const stats = useProgressStats();
  const completedTutorials = useCompletedTutorials();
  const inProgressTutorials = useInProgressTutorials();

  // Calculate category progress
  const categoryProgressData = useMemo(() => {
    const categoriesWithTutorials = allCategories as unknown as CategoryWithTutorials[];

    return categories
      .map((category) => {
        const categoryTutorials = categoriesWithTutorials
          .find((c) => c.id === category.id)
          ?.tutorials ?? [];

        const completed = categoryTutorials.filter((t: any) =>
          completedTutorials.has(t.id)
        ).length;

        return {
          categoryId: category.id,
          categoryName: category.name,
          categoryIcon: category.icon,
          categoryColor: category.color,
          completed,
          total: categoryTutorials.length,
          percentage: categoryTutorials.length > 0 ? (completed / categoryTutorials.length) * 100 : 0,
          difficulty: category.baseDifficulty,
        };
      })
      .sort((a, b) => b.percentage - a.percentage);
  }, [completedTutorials]);

  // Calculate average difficulty from completed tutorials
  const averageDifficulty = useMemo(() => {
    if (completedTutorials.size === 0) return 0;

    let totalDifficulty = 0;
    let count = 0;
    completedTutorials.forEach((tutorialId) => {
      const tutorial = getTutorialById(tutorialId);
      if (tutorial && tutorial.difficulty !== undefined) {
        totalDifficulty += tutorial.difficulty;
        count++;
      }
    });

    return count > 0 ? totalDifficulty / count : 0;
  }, [completedTutorials]);

  // Get recent activity
  const recentActivity = useMemo(() => {
    const activities: RecentActivity[] = [];

    // Add completed tutorials (most recent first)
    completedTutorials.forEach((tutorialId) => {
      const tutorial = getTutorialById(tutorialId);
      if (tutorial) {
        const category = getCategoryById(tutorial.category);
        activities.push({
          tutorialId,
          tutorialTitle: tutorial.title,
          categoryName: category?.name ?? tutorial.category,
          categoryColor: category?.color ?? '#666',
          timestamp: new Date(), // In a real app, you'd track actual timestamps
          type: 'completed',
        });
      }
    });

    // Add in-progress tutorials
    inProgressTutorials.forEach((_sectionIndex, tutorialId) => {
      const tutorial = getTutorialById(tutorialId);
      if (tutorial) {
        const category = getCategoryById(tutorial.category);
        activities.push({
          tutorialId,
          tutorialTitle: tutorial.title,
          categoryName: category?.name ?? tutorial.category,
          categoryColor: category?.color ?? '#666',
          timestamp: new Date(),
          type: 'started',
        });
      }
    });

    return activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [completedTutorials, inProgressTutorials]);

  // Get recommended tutorials based on prerequisites
  const recommendedTutorials = useMemo(() => {
    const categoriesWithTutorials = allCategories as unknown as CategoryWithTutorials[];
    const recommendations: RecommendedTutorial[] = [];

    categoriesWithTutorials.forEach((category) => {
      category.tutorials.forEach((tutorial: any) => {
        // Skip already completed tutorials
        if (completedTutorials.has(tutorial.id)) return;

        // Check if prerequisites are met (handle both old and new format)
        let prerequisitesMet = true;
        if (tutorial.prerequisite) {
          prerequisitesMet = completedTutorials.has(tutorial.prerequisite);
        } else if (tutorial.prerequisites && tutorial.prerequisites.length > 0) {
          prerequisitesMet = tutorial.prerequisites.every((prereq: string) =>
            completedTutorials.has(prereq)
          );
        }

        const categoryData = getCategoryById(tutorial.category);

        if (categoryData) {
          recommendations.push({
            id: tutorial.id,
            title: tutorial.title,
            category: categoryData.name,
            categoryColor: categoryData.color,
            difficulty: tutorial.difficulty ?? 5,
            estimatedMinutes: tutorial.estimatedMinutes ?? 20,
            prerequisitesMet,
          });
        }
      });
    });

    // Sort: prerequisites met first, then by difficulty (ascending), then by relevance
    return recommendations
      .sort((a, b) => {
        if (a.prerequisitesMet !== b.prerequisitesMet) {
          return a.prerequisitesMet ? -1 : 1;
        }
        return a.difficulty - b.difficulty;
      });
  }, [completedTutorials]);

  // Calculate total tutorials
  const totalTutorials = useMemo(() => {
    const categoriesWithTutorials = allCategories as unknown as CategoryWithTutorials[];
    return categoriesWithTutorials.reduce((sum, category) => sum + category.tutorials.length, 0);
  }, []);

  // Determine hero stat colors
  const getStreakColor = (streak: number) => {
    if (streak === 0) return 'text-gray-400';
    if (streak < 7) return 'text-blue-400';
    if (streak < 30) return 'text-green-400';
    return 'text-purple-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Learning Dashboard
          </h1>
          <p className="text-gray-400">Track your progress across 690 math tutorials</p>
        </div>

        {/* Hero Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Total Completed Card */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 text-sm font-semibold">Total Completed</h3>
              <span className="text-2xl">📚</span>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stats.totalCompleted}
              <span className="text-xl text-gray-400 font-normal ml-2">/ {totalTutorials}</span>
            </div>
            <div className="text-sm text-gray-500">
              {((stats.totalCompleted / totalTutorials) * 100).toFixed(1)}% of curriculum complete
            </div>
          </div>

          {/* Streak Days Card */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 text-sm font-semibold">Learning Streak</h3>
              <span className="text-2xl">🔥</span>
            </div>
            <div className={`text-4xl font-bold mb-2 ${getStreakColor(stats.streak)}`}>
              {stats.streak}
              <span className="text-xl text-gray-400 font-normal ml-2">days</span>
            </div>
            <div className="text-sm text-gray-500">
              Keep it up! Continue your daily learning
            </div>
          </div>

          {/* Total Hours Card */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 text-sm font-semibold">Time Invested</h3>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stats.totalHours}
              <span className="text-xl text-gray-400 font-normal ml-2">hours</span>
            </div>
            <div className="text-sm text-gray-500">
              {stats.totalHours > 0 ? `${(stats.totalHours / Math.max(stats.totalCompleted, 1)).toFixed(1)} avg per tutorial` : 'Start learning now'}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Category Progress - Left Column (Larger) */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-6">Category Progress</h2>
              <SimpleBarChart data={categoryProgressData} />
            </div>
          </div>

          {/* Difficulty Meter - Right Column */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Your Progress Level</h2>
            <DifficultyMeter averageDifficulty={averageDifficulty} />

            {/* Stats breakdown */}
            <div className="mt-8 pt-6 border-t border-slate-700 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">In Progress</span>
                <span className="font-semibold text-blue-400">{inProgressTutorials.size}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Categories</span>
                <span className="font-semibold text-purple-400">{categories.length}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Categories Started</span>
                <span className="font-semibold text-green-400">
                  {categoryProgressData.filter(c => c.completed > 0).length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Recommended - Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <RecentActivityTimeline activities={recentActivity} />
          </div>

          {/* Recommended Tutorials */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Recommended Next</h2>
            <RecommendedTutorials tutorials={recommendedTutorials} />
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-bold text-white mb-4">Learning Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">{stats.totalCompleted}</p>
              <p className="text-xs text-gray-400 mt-1">Tutorials Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">{stats.streak}</p>
              <p className="text-xs text-gray-400 mt-1">Day Streak</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">
                {((stats.totalCompleted / totalTutorials) * 100).toFixed(0)}%
              </p>
              <p className="text-xs text-gray-400 mt-1">Progress</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-400">
                {categoryProgressData.filter(c => c.percentage === 100).length}
              </p>
              <p className="text-xs text-gray-400 mt-1">Mastered Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
