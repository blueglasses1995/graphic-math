import { useState, useEffect } from 'react';

interface Phase1IntuitionProps {
  onComplete: () => void;
}

/**
 * 段階1: 直感構築フェーズ「近さを感じる」
 *
 * 目標：数式なしで「近づく」概念を体験
 * 認知負荷：低（記号なし、1つの変数のみ）
 */
export default function Phase1Intuition({ onComplete }: Phase1IntuitionProps) {
  const [x, setX] = useState(2.0);
  const [attempts, setAttempts] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const targetX = 3.0;
  const targetY = 6.0;

  // f(x) = 2x
  const f = (x: number) => 2 * x;
  const y = f(x);

  // ゴールまでの距離
  const distance = Math.abs(y - targetY);
  const isClose = distance < 0.3;
  const isVeryClose = distance < 0.1;

  // フィードバックメッセージ
  const getFeedback = () => {
    if (isVeryClose) return '完璧！ 🎉';
    if (isClose) return 'もうちょっと！ 😊';
    if (distance < 1.0) return 'いい感じ！ 👍';
    if (distance < 2.0) return '近づいてきた！ 📍';
    return 'ゴールを目指そう！ 🎯';
  };

  // スライダー変更時
  useEffect(() => {
    setAttempts((prev) => prev + 1);

    if (isVeryClose && attempts > 5) {
      setSuccessCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= 3) {
          // 3回成功で完了
          setShowCelebration(true);
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
        return newCount;
      });
    }
  }, [x]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          📍 ステップ1/5: 「近さ」を感じる
        </h1>
        <p className="text-xl text-slate-300">
          まずは数式なしで、関数の「近づく」感覚をつかもう
        </p>
      </div>

      {/* メインビジュアライゼーション */}
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 mb-6">
        {/* グラフエリア */}
        <div className="relative bg-slate-900 rounded-xl p-8 mb-6" style={{ height: '400px' }}>
          {/* Y軸 */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-600" />
          <div className="absolute left-2 top-8 text-slate-400 text-sm">8</div>
          <div className="absolute left-2 top-1/4 text-slate-400 text-sm">6</div>
          <div className="absolute left-2 top-1/2 text-slate-400 text-sm">4</div>
          <div className="absolute left-2 top-3/4 text-slate-400 text-sm">2</div>
          <div className="absolute left-2 bottom-8 text-slate-400 text-sm">0</div>

          {/* X軸 */}
          <div className="absolute left-8 right-8 bottom-8 h-0.5 bg-slate-600" />
          <div className="absolute left-8 bottom-2 text-slate-400 text-sm">0</div>
          <div className="absolute left-1/4 bottom-2 text-slate-400 text-sm">1</div>
          <div className="absolute left-1/2 bottom-2 text-slate-400 text-sm">2</div>
          <div className="absolute left-3/4 bottom-2 text-slate-400 text-sm">3</div>
          <div className="absolute right-8 bottom-2 text-slate-400 text-sm">4</div>

          {/* ゴール位置 */}
          <div
            className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse"
            style={{
              left: `${((targetX / 4) * 100)}%`,
              bottom: `${((targetY / 8) * 100)}%`,
              transform: 'translate(-50%, 50%)',
            }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-yellow-400 font-bold">
              ⭐ ゴール！
            </div>
          </div>

          {/* 現在位置 */}
          <div
            className={`absolute w-6 h-6 rounded-full transition-all duration-300 ${
              isVeryClose
                ? 'bg-green-400 shadow-lg shadow-green-400/50 scale-125'
                : isClose
                ? 'bg-blue-400 shadow-lg shadow-blue-400/50'
                : 'bg-red-400'
            }`}
            style={{
              left: `${((x / 4) * 100)}%`,
              bottom: `${((y / 8) * 100)}%`,
              transform: 'translate(-50%, 50%)',
            }}
          >
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-white text-sm font-medium">
              あなたの位置
            </div>
          </div>

          {/* 接続線 */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ left: 0, top: 0 }}
          >
            <line
              x1={`${((x / 4) * 100)}%`}
              y1={`${100 - ((y / 8) * 100)}%`}
              x2={`${((targetX / 4) * 100)}%`}
              y2={`${100 - ((targetY / 8) * 100)}%`}
              stroke={isVeryClose ? '#4ade80' : isClose ? '#60a5fa' : '#f87171'}
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* コントロール */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-white font-medium text-lg">
              🎯 x の位置を動かそう
            </label>
            <span className="text-2xl font-bold text-blue-400">x = {x.toFixed(2)}</span>
          </div>

          {/* スライダー */}
          <input
            type="range"
            min="0"
            max="4"
            step="0.01"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
            className="w-full h-4 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right,
                #3b82f6 0%,
                #3b82f6 ${(x / 4) * 100}%,
                #475569 ${(x / 4) * 100}%,
                #475569 100%)`,
            }}
          />

          {/* 距離表示 */}
          <div className="bg-slate-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400">ゴールまでの距離:</span>
              <span
                className={`text-2xl font-bold ${
                  isVeryClose
                    ? 'text-green-400'
                    : isClose
                    ? 'text-blue-400'
                    : 'text-red-400'
                }`}
              >
                {distance.toFixed(2)}
              </span>
            </div>

            {/* フィードバック */}
            <div className="text-center py-3">
              <p
                className={`text-xl font-bold transition-all duration-300 ${
                  isVeryClose
                    ? 'text-green-400 scale-110'
                    : isClose
                    ? 'text-blue-400'
                    : 'text-white'
                }`}
              >
                {getFeedback()}
              </p>
            </div>

            {/* 進捗表示 */}
            {successCount > 0 && successCount < 3 && (
              <div className="mt-4 text-center">
                <p className="text-slate-400 text-sm mb-2">
                  成功回数: {successCount} / 3
                </p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i <= successCount ? 'bg-green-400' : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ヒント */}
      <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
        <h3 className="text-blue-400 font-bold mb-2 flex items-center">
          💡 ヒント
        </h3>
        <p className="text-slate-300">
          x を 3.0 に近づけると、y は自動的に 6.0 に近づくよ。
          <br />
          この「近づく」感覚が、極限の基礎になるんだ！
        </p>
      </div>

      {/* お祝いアニメーション */}
      {showCelebration && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-12 shadow-2xl animate-scaleIn">
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold text-white mb-4">完璧！</h2>
              <p className="text-xl text-white/90">
                「近づく」感覚がつかめたね！
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          transition: all 0.2s;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          transition: all 0.2s;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
