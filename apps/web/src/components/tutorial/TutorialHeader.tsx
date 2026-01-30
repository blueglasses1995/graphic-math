interface TutorialHeaderProps {
  title: string;
  description: string;
  difficulty: number;
  estimatedMinutes: number;
  tags: string[];
}

export function TutorialHeader({
  title,
  description,
  difficulty,
  estimatedMinutes,
  tags,
}: TutorialHeaderProps) {
  // Generate difficulty stars (10-star system)
  const stars = Array.from({ length: 10 }, (_, i) => i < difficulty);

  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-6">
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="text-gray-300 text-lg mb-4">{description}</p>

      <div className="flex flex-wrap items-center gap-6">
        {/* Difficulty */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">難易度:</span>
          <div className="flex items-center gap-1">
            {stars.map((filled, i) => (
              <span
                key={i}
                className={`text-xl ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
              >
                ★
              </span>
            ))}
            <span className="text-sm text-gray-400 ml-2">
              {difficulty}/10
            </span>
          </div>
        </div>

        {/* Estimated time */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-gray-400"
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
          <span className="text-sm text-gray-400">推定時間: {estimatedMinutes}分</span>
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-indigo-600/30 text-indigo-300 rounded-full border border-indigo-500/50"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
