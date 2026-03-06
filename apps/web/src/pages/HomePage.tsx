import { Link } from 'react-router-dom';
import { useState } from 'react';
import { allCategories, Tutorial } from '@learnmath/tutorials';

// Type for category objects that include tutorials
interface CategoryWithTutorials {
  id: string;
  name: string;
  description: string;
  tutorials: Tutorial[];
}

export default function HomePage() {
  // Cast allCategories to the correct runtime type
  const categoriesWithTutorials = allCategories as unknown as CategoryWithTutorials[];

  // 各カテゴリの展開状態を管理
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">LearnMath</h1>
      <p className="text-xl text-gray-400 text-center mb-12">数学を視覚的に学ぶ</p>

      {/* 特集：ε-δ論法 */}
      <div className="mb-12">
        <Link
          to="/epsilon-delta"
          className="block bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-500 rounded-2xl p-8 hover:scale-105 transition-transform shadow-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="text-6xl">📚</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">
                ε-δ論法への旅
              </h2>
              <p className="text-blue-300 mb-3">
                350年の歴史を辿る、インタラクティブな学習体験
              </p>
              <div className="flex gap-4 text-sm">
                <span className="bg-blue-600 px-3 py-1 rounded-full">
                  全12章
                </span>
                <span className="bg-purple-600 px-3 py-1 rounded-full">
                  約95分
                </span>
                <span className="bg-green-600 px-3 py-1 rounded-full">
                  ガリレオ→ニュートン→ワイエルシュトラス
                </span>
              </div>
            </div>
            <div className="text-4xl text-blue-400">→</div>
          </div>
        </Link>
      </div>

      {/* カテゴリ一覧（折りたたみ式） */}
      <div className="grid gap-4">
        {categoriesWithTutorials.map((category) => {
          const isExpanded = expandedCategories.has(category.id);

          return (
            <div key={category.id} className="bg-slate-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
              >
                <div className="text-left">
                  <h2 className="text-2xl font-semibold mb-1">{category.name}</h2>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-400">
                    {category.tutorials.length}個の教材
                  </span>
                  <span
                    className={`text-2xl text-blue-400 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 pt-2 animate-slideDown">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.tutorials.map((tutorial) => (
                      <Link
                        key={tutorial.id}
                        to={`/tutorial/${tutorial.id}`}
                        className="block bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-colors"
                      >
                        <h3 className="text-lg font-medium">{tutorial.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {tutorial.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/sandbox"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-medium transition-colors"
        >
          サンドボックスで実験する
        </Link>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 2000px;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
