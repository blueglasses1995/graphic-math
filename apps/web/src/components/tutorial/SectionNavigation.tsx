type SectionType = 'hook' | 'concept' | 'visualization' | 'examples' | 'exercises' | 'summary';

interface SectionNavigationProps {
  sections: SectionType[];
  currentSection: SectionType;
  currentIndex: number;
  totalSections: number;
  onSectionClick: (section: SectionType) => void;
}

const SECTION_LABELS: Record<SectionType, string> = {
  hook: 'フック',
  concept: '概念',
  visualization: 'ビジュアル',
  examples: '例題',
  exercises: '練習問題',
  summary: 'まとめ',
};

export function SectionNavigation({
  sections,
  currentSection,
  currentIndex,
  totalSections,
  onSectionClick,
}: SectionNavigationProps) {
  const progressPercentage = ((currentIndex + 1) / totalSections) * 100;

  return (
    <div className="bg-slate-800 rounded-lg p-4 mb-6">
      {/* Header with progress */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-400">セクション</h3>
        <span className="text-sm font-medium text-indigo-400">
          {currentIndex + 1}/{totalSections}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Section tabs */}
      <div className="flex flex-wrap gap-2">
        {sections.map((section, index) => {
          const isActive = section === currentSection;
          const isCompleted = index < currentIndex;

          return (
            <button
              key={section}
              onClick={() => onSectionClick(section)}
              className={`
                relative px-4 py-2 rounded-lg font-medium text-sm transition-all
                ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
                    : isCompleted
                      ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                }
              `}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute inset-0 rounded-lg bg-indigo-400/20 animate-pulse" />
              )}

              {/* Completed checkmark */}
              {isCompleted && !isActive && (
                <svg
                  className="w-4 h-4 inline mr-1 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              <span className="relative z-10">{SECTION_LABELS[section]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
