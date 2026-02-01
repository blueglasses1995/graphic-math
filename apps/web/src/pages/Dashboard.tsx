import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserProgressStore } from '../store/userProgressStore';
import { categories } from '@learnmath/tutorials/categories';
import { getTutorialById } from '@learnmath/tutorials';

/**
 * Dashboard component showing user learning progress
 * Displays:
 * - Overall completion statistics
 * - Progress by category
 * - Recent activity
 * - Learning streaks and achievements
 * - Recommended next tutorials
 */
export default function Dashboard() {
  const tutorialProgress = useUserProgressStore((state) => state.tutorialProgress);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Calculate statistics
  const stats = useMemo(() => {
    const completed = Object.values(tutorialProgress).filter(
      (p) => p.status === 'completed'
    ).length;
    const inProgress = Object.values(tutorialProgress).filter(
      (p) => p.status === 'in-progress'
    ).length;
    const total = 690;

    return {
      completed,
      inProgress,
      total,
      completionPercentage: Math.round((completed / total) * 100),
      hoursSpent: Math.round(completed * 0.5), // Approximate
    };
  }, [tutorialProgress]);

  // Get progress by category
  const progressByCategory = useMemo(() => {
    return categories.map((category) => {
      // Get tutorials for this category from progress store
      const categoryTutorials = Object.values(tutorialProgress).filter(
        (p) => {
          const tutorial = getTutorialById(p.tutorialId);
          return tutorial?.category === category.id;
        }
      );

      const completedCount = categoryTutorials.filter(
        (t) => t.status === 'completed'
      ).length;
      const inProgressCount = categoryTutorials.filter(
        (t) => t.status === 'in-progress'
      ).length;

      // Approximate total based on category metadata (30 tutorials per category on average)
      const estimatedTotal = Math.round(category.estimatedHours * 2); // ~2 tutorials per hour

      return {
        categoryId: category.id,
        categoryName: category.name,
        categoryColor: category.color,
        total: estimatedTotal,
        completed: completedCount,
        inProgress: inProgressCount,
        percentage: estimatedTotal > 0 ? Math.round((completedCount / estimatedTotal) * 100) : 0,
      };
    });
  }, [tutorialProgress]);

  // Get recently completed tutorials
  const recentlyCompleted = useMemo(() => {
    return Object.values(tutorialProgress)
      .filter((p) => p.status === 'completed' && p.completedAt)
      .sort((a, b) => {
        const dateA = new Date(a.completedAt || 0).getTime();
        const dateB = new Date(b.completedAt || 0).getTime();
        return dateB - dateA;
      })
      .slice(0, 5);
  }, [tutorialProgress]);

  // Get in-progress tutorials
  const inProgressTutorials = useMemo(() => {
    return Object.values(tutorialProgress)
      .filter((p) => p.status === 'in-progress')
      .sort((a, b) => {
        const dateA = new Date(a.lastAccessedAt || 0).getTime();
        const dateB = new Date(b.lastAccessedAt || 0).getTime();
        return dateB - dateA;
      })
      .slice(0, 5);
  }, [tutorialProgress]);

  // Filter category progress if one is selected
  const filteredCategories = selectedCategory
    ? progressByCategory.filter((c) => c.categoryId === selectedCategory)
    : progressByCategory;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Learning Dashboard</h1>
        <p className="text-gray-400">
          Track your progress across all math categories
        </p>
      </div>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard
          title="Completed"
          value={stats.completed}
          subtext={`of ${stats.total} tutorials`}
          icon="✓"
          color="bg-green-500/10"
        />
        <StatCard
          title="In Progress"
          value={stats.inProgress}
          subtext="Currently learning"
          icon="▶"
          color="bg-blue-500/10"
        />
        <StatCard
          title="Completion"
          value={`${stats.completionPercentage}%`}
          subtext="Overall progress"
          icon="◈"
          color="bg-purple-500/10"
        />
        <StatCard
          title="Hours Spent"
          value={stats.hoursSpent}
          subtext="Approximate learning time"
          icon="⏱"
          color="bg-amber-500/10"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Category Progress */}
        <div className="lg:col-span-2">
          {/* Category Filter Buttons */}
          <div className="mb-6 flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              All Categories
            </button>
          </div>

          {/* Category Progress Cards */}
          <div className="space-y-4">
            {filteredCategories.map((cat) => (
              <CategoryProgressCard
                key={cat.categoryId}
                category={cat}
                onClick={() => setSelectedCategory(cat.categoryId)}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Recent Activity */}
        <div className="space-y-8">
          {/* In Progress Section */}
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">▶</span>
              In Progress
            </h3>
            {inProgressTutorials.length > 0 ? (
              <div className="space-y-3">
                {inProgressTutorials.map((tutorial) => (
                  <ActivityItem
                    key={tutorial.tutorialId}
                    title={`Tutorial ${tutorial.tutorialId}`}
                    progress={tutorial.progress || 0}
                    href={`/tutorial/${tutorial.tutorialId}`}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">
                No tutorials in progress. Start learning!
              </p>
            )}
          </div>

          {/* Recently Completed Section */}
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">✓</span>
              Recently Completed
            </h3>
            {recentlyCompleted.length > 0 ? (
              <div className="space-y-3">
                {recentlyCompleted.map((tutorial) => (
                  <div key={tutorial.tutorialId} className="text-sm">
                    <p className="text-gray-300 font-medium line-clamp-2">
                      {tutorial.tutorialId}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {tutorial.completedAt
                        ? new Date(tutorial.completedAt).toLocaleDateString()
                        : 'Recently'}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">
                Complete tutorials to see them here
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Learning Streak and Goals */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Learning Streak */}
        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-8 border border-amber-500/20">
          <h3 className="text-2xl font-bold mb-4">🔥 Learning Streak</h3>
          <div className="text-5xl font-bold text-amber-400 mb-2">0</div>
          <p className="text-gray-400 mb-6">
            Keep learning to build your streak!
          </p>
          <Link
            to="/search"
            className="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg font-medium transition-colors"
          >
            Continue Learning
          </Link>
        </div>

        {/* Learning Goals */}
        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-8 border border-indigo-500/20">
          <h3 className="text-2xl font-bold mb-4">🎯 Weekly Goal</h3>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">
                {stats.inProgress} of 5 tutorials
              </span>
              <span className="text-indigo-400 font-bold">
                {Math.min(100, (stats.inProgress / 5) * 100)}%
              </span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                style={{ width: `${Math.min(100, (stats.inProgress / 5) * 100)}%` }}
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            {5 - stats.inProgress > 0
              ? `${5 - stats.inProgress} more to reach your goal!`
              : 'Great job! Goal reached!'}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * StatCard component for overview statistics
 */
interface StatCardProps {
  title: string;
  value: string | number;
  subtext: string;
  icon: string;
  color: string;
}

function StatCard({ title, value, subtext, icon, color }: StatCardProps) {
  return (
    <div className={`${color} rounded-xl p-6 border border-slate-700`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <div className="text-3xl font-bold mt-2">{value}</div>
        </div>
        <div className="text-3xl opacity-50">{icon}</div>
      </div>
      <p className="text-xs text-gray-500">{subtext}</p>
    </div>
  );
}

/**
 * CategoryProgressCard component
 */
interface CategoryProgressCardProps {
  category: {
    categoryId: string;
    categoryName: string;
    categoryColor: string;
    total: number;
    completed: number;
    inProgress: number;
    percentage: number;
  };
  onClick: () => void;
}

function CategoryProgressCard({
  category,
  onClick,
}: CategoryProgressCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-6 text-left transition-colors group"
      style={{ borderTopColor: category.categoryColor, borderTopWidth: '4px' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold group-hover:text-indigo-400 transition-colors">
            {category.categoryName}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {category.completed} of {category.total} completed
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold" style={{ color: category.categoryColor }}>
            {category.percentage}%
          </div>
          {category.inProgress > 0 && (
            <p className="text-xs text-blue-400 mt-1">
              {category.inProgress} in progress
            </p>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-300 rounded-full"
          style={{
            width: `${category.percentage}%`,
            backgroundColor: category.categoryColor,
          }}
        />
      </div>
    </button>
  );
}

/**
 * ActivityItem component for in-progress and completed lists
 */
interface ActivityItemProps {
  title: string;
  progress: number;
  href: string;
}

function ActivityItem({ title, progress, href }: ActivityItemProps) {
  return (
    <Link
      to={href}
      className="block p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
    >
      <p className="text-sm font-medium group-hover:text-indigo-400 transition-colors">
        {title}
      </p>
      {progress > 0 && (
        <div className="mt-2 h-1 bg-slate-600 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </Link>
  );
}
