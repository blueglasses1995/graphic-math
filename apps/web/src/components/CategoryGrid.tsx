import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, type Category } from '@learnmath/tutorials/categories';

interface CategoryCardProps {
  category: Category;
  completed: number;
  total: number;
  onClick: () => void;
}

function CategoryCard({ category, completed, total, onClick }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const progressPercentage = (completed / total) * 100;

  // Generate star rating based on difficulty (1-5 scale, baseDifficulty is 1-9)
  const stars = Math.min(5, Math.ceil(category.baseDifficulty / 2));
  const starDisplay = '★'.repeat(stars) + '☆'.repeat(5 - stars);

  return (
    <div
      className="relative bg-slate-800 rounded-xl p-6 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl group overflow-hidden"
      style={{
        borderTop: `4px solid ${category.color}`,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${category.color} 0%, transparent 100%)`,
        }}
      />

      {/* Foundational badge */}
      {category.isFoundational && (
        <div className="absolute top-4 right-4 bg-amber-500 text-amber-950 text-xs font-bold px-2 py-1 rounded-full">
          CORE
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Name */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="text-5xl font-bold transition-transform duration-300 group-hover:scale-110"
            style={{ color: category.color }}
          >
            {category.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-opacity-90 transition-all">
              {category.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-yellow-400">{starDisplay}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
          {category.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-400">Progress</span>
            <span className="text-xs font-semibold" style={{ color: category.color }}>
              {completed}/{total} completed
            </span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-500 ease-out rounded-full"
              style={{
                width: `${progressPercentage}%`,
                backgroundColor: category.color,
                transform: isHovered ? 'scaleY(1.2)' : 'scaleY(1)',
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Difficulty:</span>
            <span className="font-semibold text-white">{category.baseDifficulty}/9</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-400">{category.estimatedHours}h</span>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span style={{ color: category.color }}>Explore category</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: category.color }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface CategoryGridProps {
  onCategoryClick?: (category: Category) => void;
}

export default function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  const navigate = useNavigate();

  // Mock progress data - replace with actual user progress later
  const getMockProgress = (categoryId: string) => {
    const progressMap: Record<string, { completed: number; total: number }> = {
      'set-theory': { completed: 12, total: 30 },
      'trigonometry': { completed: 8, total: 30 },
      'exponential': { completed: 15, total: 30 },
      'logarithmic': { completed: 0, total: 34 },
      'complex-numbers': { completed: 3, total: 30 },
      'linear-algebra': { completed: 20, total: 60 },
      'probability': { completed: 10, total: 30 },
      'statistics': { completed: 5, total: 35 },
      'differential-calculus': { completed: 18, total: 30 },
      'integral-calculus': { completed: 22, total: 30 },
      'discrete-math': { completed: 0, total: 60 },
      'graph-theory': { completed: 0, total: 60 },
      'algebra': { completed: 0, total: 64 },
      'fourier': { completed: 0, total: 30 },
      'laplace': { completed: 0, total: 30 },
      'ode': { completed: 0, total: 30 },
      'pde': { completed: 0, total: 30 },
      'category-theory': { completed: 0, total: 30 },
      'topology': { completed: 0, total: 30 },
    };

    return progressMap[categoryId] || { completed: 0, total: 30 };
  };

  const handleCategoryClick = (category: Category) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    } else {
      // Navigate to category detail page (placeholder route for now)
      navigate(`/category/${category.id}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Math Categories
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore 19 comprehensive math categories, from foundational concepts to advanced topics
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category) => {
          const progress = getMockProgress(category.id);
          return (
            <CategoryCard
              key={category.id}
              category={category}
              completed={progress.completed}
              total={progress.total}
              onClick={() => handleCategoryClick(category)}
            />
          );
        })}
      </div>

      {/* Footer Stats */}
      <div className="bg-slate-800 rounded-xl p-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold text-white mb-2">19</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">690+</div>
            <div className="text-sm text-gray-400">Tutorials</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">380+</div>
            <div className="text-sm text-gray-400">Estimated Hours</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500 mb-2">6</div>
            <div className="text-sm text-gray-400">Core Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
}
