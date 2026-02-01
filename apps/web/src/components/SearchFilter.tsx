import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Tutorial,
  allCategories
} from '@learnmath/tutorials';
import { useCompletedTutorials, useInProgressTutorials } from '../store/userProgress';

// Type for category objects that include tutorials
interface CategoryWithTutorials {
  id: string;
  name: string;
  description: string;
  tutorials: Tutorial[];
}

// Types
type CompletionStatus = 'not-started' | 'in-progress' | 'completed';
type SortOption = 'difficulty-asc' | 'difficulty-desc' | 'time-asc' | 'time-desc' | 'recently-added';

interface FilterState {
  searchQuery: string;
  difficultyRange: [number, number];
  selectedCategories: Set<string>;
  selectedTags: Set<string>;
  completionStatus: Set<CompletionStatus>;
  sortBy: SortOption;
}

interface CategoryOption {
  id: string;
  name: string;
  count: number;
}

const CATEGORY_LABELS: Record<string, string> = {
  'trigonometry': '三角関数',
  'linear-algebra': '線形代数',
  'differential-calculus': '微分',
  'integral-calculus': '積分',
  'exponential': '指数',
  'logarithmic': '対数',
  'set-theory': '集合論',
  'topology': 'トポロジー',
  'probability': '確率',
  'statistics': '統計',
  'algebra': '代数学',
  'discrete-math': '離散数学',
  'complex-numbers': '複素数',
  'graph-theory': 'グラフ理論',
  'category-theory': '圏論',
  'ode': '常微分方程式',
  'pde': '偏微分方程式',
  'laplace': 'ラプラス変換',
  'fourier': 'フーリエ解析',
};

// Get all tutorials from all categories
const getAllTutorials = (): Tutorial[] => {
  // Cast allCategories to the correct runtime type
  const categoriesWithTutorials = allCategories as unknown as CategoryWithTutorials[];
  return categoriesWithTutorials.flatMap(category => category.tutorials);
};

// Get all unique tags from tutorials
const getAllTags = (): string[] => {
  const tags = new Set<string>();
  getAllTutorials().forEach(tutorial => {
    tutorial.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

const SearchFilter = () => {
  const navigate = useNavigate();
  const completedTutorials = useCompletedTutorials();
  const inProgressTutorials = useInProgressTutorials();

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    difficultyRange: [1, 10],
    selectedCategories: new Set(),
    selectedTags: new Set(),
    completionStatus: new Set(),
    sortBy: 'recently-added',
  });

  // UI state
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [tagInput, setTagInput] = useState('');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [filters.searchQuery]);

  // Get completion status for a tutorial
  const getTutorialStatus = useCallback((tutorialId: string): CompletionStatus => {
    if (completedTutorials.has(tutorialId)) return 'completed';
    if (inProgressTutorials.has(tutorialId)) return 'in-progress';
    return 'not-started';
  }, [completedTutorials, inProgressTutorials]);

  // Get all available category options with counts
  const categoryOptions = useMemo((): CategoryOption[] => {
    const categoriesWithTutorials = allCategories as unknown as CategoryWithTutorials[];
    return categoriesWithTutorials.map(category => ({
      id: category.id,
      name: CATEGORY_LABELS[category.id] || category.name,
      count: category.tutorials.length,
    }));
  }, []);

  // Get all available tags
  const allTags = useMemo(() => getAllTags(), []);

  // Filter and sort tutorials
  const filteredTutorials = useMemo(() => {
    let results = getAllTutorials();

    // Search filter
    if (debouncedSearch) {
      const query = debouncedSearch.toLowerCase();
      results = results.filter(tutorial =>
        tutorial.title.toLowerCase().includes(query) ||
        tutorial.description.toLowerCase().includes(query) ||
        tutorial.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Difficulty range filter
    results = results.filter(tutorial => {
      const difficulty = tutorial.difficulty ?? 5;
      return difficulty >= filters.difficultyRange[0] && difficulty <= filters.difficultyRange[1];
    });

    // Category filter
    if (filters.selectedCategories.size > 0) {
      results = results.filter(tutorial =>
        filters.selectedCategories.has(tutorial.category)
      );
    }

    // Tags filter
    if (filters.selectedTags.size > 0) {
      results = results.filter(tutorial =>
        tutorial.tags?.some(tag => filters.selectedTags.has(tag))
      );
    }

    // Completion status filter
    if (filters.completionStatus.size > 0) {
      results = results.filter(tutorial =>
        filters.completionStatus.has(getTutorialStatus(tutorial.id))
      );
    }

    // Sort
    results = [...results].sort((a, b) => {
      switch (filters.sortBy) {
        case 'difficulty-asc':
          return (a.difficulty ?? 5) - (b.difficulty ?? 5);
        case 'difficulty-desc':
          return (b.difficulty ?? 5) - (a.difficulty ?? 5);
        case 'time-asc':
          return (a.estimatedMinutes ?? 30) - (b.estimatedMinutes ?? 30);
        case 'time-desc':
          return (b.estimatedMinutes ?? 30) - (a.estimatedMinutes ?? 30);
        case 'recently-added':
        default:
          return 0; // Keep original order
      }
    });

    return results;
  }, [debouncedSearch, filters, getTutorialStatus]);

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      searchQuery: '',
      difficultyRange: [1, 10],
      selectedCategories: new Set(),
      selectedTags: new Set(),
      completionStatus: new Set(),
      sortBy: 'recently-added',
    });
    setTagInput('');
  };

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    setFilters(prev => {
      const newCategories = new Set(prev.selectedCategories);
      if (newCategories.has(categoryId)) {
        newCategories.delete(categoryId);
      } else {
        newCategories.add(categoryId);
      }
      return { ...prev, selectedCategories: newCategories };
    });
  };

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setFilters(prev => {
      const newTags = new Set(prev.selectedTags);
      if (newTags.has(tag)) {
        newTags.delete(tag);
      } else {
        newTags.add(tag);
      }
      return { ...prev, selectedTags: newTags };
    });
    setTagInput('');
  };

  // Toggle completion status
  const toggleStatus = (status: CompletionStatus) => {
    setFilters(prev => {
      const newStatus = new Set(prev.completionStatus);
      if (newStatus.has(status)) {
        newStatus.delete(status);
      } else {
        newStatus.add(status);
      }
      return { ...prev, completionStatus: newStatus };
    });
  };

  // Get filtered tag suggestions
  const tagSuggestions = useMemo(() => {
    if (!tagInput) return [];
    const query = tagInput.toLowerCase();
    return allTags
      .filter(tag => tag.toLowerCase().includes(query) && !filters.selectedTags.has(tag))
      .slice(0, 5);
  }, [tagInput, allTags, filters.selectedTags]);

  // Render difficulty stars
  const renderStars = (difficulty: number) => {
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`text-xs ${
              i < difficulty ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Render status badge
  const renderStatusBadge = (status: CompletionStatus) => {
    const styles = {
      'not-started': 'bg-gray-100 text-gray-600',
      'in-progress': 'bg-blue-100 text-blue-700',
      'completed': 'bg-green-100 text-green-700',
    };

    const labels = {
      'not-started': '未開始',
      'in-progress': '進行中',
      'completed': '完了',
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">チュートリアル検索</h1>
          <p className="text-gray-600">
            {filteredTutorials.length} 件のチュートリアルが見つかりました
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="チュートリアルを検索..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">フィルター</h2>
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              すべてクリア
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Difficulty Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                難易度: {filters.difficultyRange[0]} - {filters.difficultyRange[1]}
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={filters.difficultyRange[0]}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    difficultyRange: [Number(e.target.value), prev.difficultyRange[1]]
                  }))}
                  className="w-full"
                />
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={filters.difficultyRange[1]}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    difficultyRange: [prev.difficultyRange[0], Number(e.target.value)]
                  }))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                カテゴリー
              </label>
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="w-full px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-between"
              >
                <span className="text-sm text-gray-700">
                  {filters.selectedCategories.size > 0
                    ? `${filters.selectedCategories.size} 選択中`
                    : 'カテゴリーを選択'}
                </span>
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showCategoryDropdown && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {categoryOptions.map(category => (
                    <label
                      key={category.id}
                      className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filters.selectedCategories.has(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="mr-3 h-4 w-4 text-blue-600 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        {category.name} ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Tags Input with Autocomplete */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                タグ
              </label>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onFocus={() => setShowTagDropdown(true)}
                onBlur={() => setTimeout(() => setShowTagDropdown(false), 200)}
                placeholder="タグを検索..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {showTagDropdown && tagSuggestions.length > 0 && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {tagSuggestions.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
              {filters.selectedTags.size > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.from(filters.selectedTags).map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700"
                    >
                      {tag}
                      <button
                        onClick={() => toggleTag(tag)}
                        className="ml-1 hover:text-blue-900"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Completion Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                完了状態
              </label>
              <div className="space-y-2">
                {(['not-started', 'in-progress', 'completed'] as CompletionStatus[]).map(status => (
                  <label key={status} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.completionStatus.has(status)}
                      onChange={() => toggleStatus(status)}
                      className="mr-2 h-4 w-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      {status === 'not-started' && '未開始'}
                      {status === 'in-progress' && '進行中'}
                      {status === 'completed' && '完了'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Sort Options */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              並び替え
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as SortOption }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="recently-added">最近追加された順</option>
              <option value="difficulty-asc">難易度: 低い順</option>
              <option value="difficulty-desc">難易度: 高い順</option>
              <option value="time-asc">所要時間: 短い順</option>
              <option value="time-desc">所要時間: 長い順</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {filteredTutorials.length === 0 ? (
          // Empty State
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              チュートリアルが見つかりませんでした
            </h3>
            <p className="text-gray-600 mb-4">
              検索条件を変更するか、フィルターをクリアしてみてください。
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              フィルターをクリア
            </button>
          </div>
        ) : (
          // Results List
          <div className="space-y-4">
            {filteredTutorials.map(tutorial => {
              const status = getTutorialStatus(tutorial.id);
              const difficulty = tutorial.difficulty ?? 5;
              const timeEstimate = tutorial.estimatedMinutes ?? 30;

              return (
                <div
                  key={tutorial.id}
                  onClick={() => navigate(`/tutorial/${tutorial.id}`)}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {tutorial.title}
                        </h3>
                        {renderStatusBadge(status)}
                      </div>
                      <p className="text-gray-600 mb-4">
                        {tutorial.description}
                      </p>
                      <div className="flex items-center gap-6">
                        {/* Difficulty Stars */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">難易度:</span>
                          {renderStars(difficulty)}
                        </div>
                        {/* Time Estimate */}
                        <div className="flex items-center gap-2">
                          <svg
                            className="h-4 w-4 text-gray-400"
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
                          <span className="text-sm text-gray-600">
                            約 {timeEstimate} 分
                          </span>
                        </div>
                        {/* Category Badge */}
                        <div>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                            {CATEGORY_LABELS[tutorial.category] || tutorial.category}
                          </span>
                        </div>
                      </div>
                      {/* Tags */}
                      {tutorial.tags && tutorial.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {tutorial.tags.slice(0, 5).map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {tutorial.tags.length > 5 && (
                            <span className="px-2 py-1 text-gray-500 text-xs">
                              +{tutorial.tags.length - 5} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    {/* Arrow Icon */}
                    <svg
                      className="h-6 w-6 text-gray-400 flex-shrink-0 ml-4"
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
