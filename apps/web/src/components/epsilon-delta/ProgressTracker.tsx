interface PhaseProgress {
  phase: number;
  completed: boolean;
  unlocked: boolean;
}

interface ProgressTrackerProps {
  currentPhase: number;
  phaseProgress: PhaseProgress[];
  onPhaseChange: (phase: number) => void;
}

const phaseNames = [
  { number: 1, name: '近さを感じる', icon: '🎯' },
  { number: 2, name: '挑戦者登場', icon: '👤' },
  { number: 3, name: '作戦を立てる', icon: '🛡️' },
  { number: 4, name: 'ε-δバトル', icon: '⚔️' },
  { number: 5, name: '数学記号', icon: '📐' },
];

/**
 * 学習進捗を可視化するトラッカーコンポーネント
 * 認知負荷理論：7±2アイテムの制限内（5段階）
 */
export default function ProgressTracker({
  currentPhase,
  phaseProgress,
  onPhaseChange,
}: ProgressTrackerProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* デスクトップビュー */}
        <div className="hidden md:flex items-center justify-between">
          {phaseNames.map((phase, index) => {
            const progress = phaseProgress.find((p) => p.phase === phase.number);
            const isActive = currentPhase === phase.number;
            const isCompleted = progress?.completed;
            const isLocked = !progress?.unlocked;

            return (
              <div key={phase.number} className="flex items-center flex-1">
                {/* フェーズボタン */}
                <button
                  onClick={() => !isLocked && onPhaseChange(phase.number)}
                  disabled={isLocked}
                  className={`
                    relative group flex flex-col items-center justify-center
                    w-20 h-20 rounded-full transition-all duration-300
                    ${
                      isActive
                        ? 'bg-blue-500 scale-110 shadow-lg shadow-blue-500/50'
                        : isCompleted
                        ? 'bg-green-500 hover:scale-105'
                        : isLocked
                        ? 'bg-slate-700 cursor-not-allowed opacity-50'
                        : 'bg-slate-600 hover:bg-slate-500 hover:scale-105'
                    }
                  `}
                >
                  {/* アイコン */}
                  <span className="text-2xl mb-1">{phase.icon}</span>

                  {/* チェックマーク（完了時） */}
                  {isCompleted && !isActive && (
                    <div className="absolute -top-1 -right-1 bg-white rounded-full w-6 h-6 flex items-center justify-center">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                  )}

                  {/* ロックアイコン（未解放時） */}
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800/70 rounded-full">
                      <span className="text-2xl">🔒</span>
                    </div>
                  )}

                  {/* ツールチップ */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-slate-900 text-white text-xs px-3 py-1 rounded shadow-lg">
                      {phase.name}
                    </div>
                  </div>
                </button>

                {/* 接続線 */}
                {index < phaseNames.length - 1 && (
                  <div className="flex-1 h-1 mx-2">
                    <div
                      className={`h-full transition-all duration-500 ${
                        progress?.completed
                          ? 'bg-green-500'
                          : isActive
                          ? 'bg-blue-500'
                          : 'bg-slate-700'
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* モバイルビュー */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-white font-bold">
              {phaseNames[currentPhase - 1].icon}{' '}
              {phaseNames[currentPhase - 1].name}
            </h2>
            <span className="text-sm text-slate-400">
              {currentPhase} / {phaseNames.length}
            </span>
          </div>

          {/* プログレスバー */}
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-500 h-full transition-all duration-500"
              style={{
                width: `${
                  (phaseProgress.filter((p) => p.completed).length /
                    phaseNames.length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
