import { useState } from 'react';

interface Phase2EpsilonIntroProps {
  onComplete: () => void;
}

/**
 * 段階2: ε導入フェーズ「挑戦者が登場」
 *
 * 目標：εを「挑戦者が決める許容範囲」として理解
 * 認知負荷：中（εの概念を追加、まだδは登場しない）
 * 歴史的文脈：コーシーの時代（1821年）の言葉による定式化
 */
export default function Phase2EpsilonIntro({
  onComplete,
}: Phase2EpsilonIntroProps) {
  const [x, setX] = useState(2.8);
  const [epsilon, setEpsilon] = useState(0.5);
  const [challengeLevel, setChallengeLevel] = useState(1);
  const [successStreak, setSuccessStreak] = useState(0);
  const [showHistory, setShowHistory] = useState(false);

  const targetX = 3.0;
  const targetY = 6.0;
  const f = (x: number) => 2 * x;
  const y = f(x);

  const distance = Math.abs(y - targetY);
  const isSuccess = distance < epsilon;

  const challenges = [
    { level: 1, epsilon: 0.5, name: '優しい挑戦', icon: '😊' },
    { level: 2, epsilon: 0.3, name: '普通の挑戦', icon: '🙂' },
    { level: 3, epsilon: 0.1, name: '難しい挑戦', icon: '😤' },
    { level: 4, epsilon: 0.05, name: '超難しい挑戦', icon: '😱' },
  ];

  const handleNextChallenge = () => {
    if (isSuccess) {
      const newSuccessCount = successStreak + 1;
      setSuccessStreak(newSuccessCount);

      if (challengeLevel < 4) {
        setChallengeLevel((prev) => prev + 1);
        setEpsilon(challenges[challengeLevel].epsilon);
        setX(2.8); // リセット
      } else {
        // 全クリア - すべてのチャレンジが完了
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          👤 ステップ2/5: 挑戦者が登場
        </h1>
        <p className="text-xl text-slate-300 mb-4">
          挑戦者が「これくらいの範囲に入れて！」と要求してくる
        </p>

        {/* 歴史ボタン */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="text-blue-400 hover:text-blue-300 underline text-sm"
        >
          📜 歴史を見る（1821年: コーシーの時代）
        </button>
      </div>

      {/* 歴史パネル */}
      {showHistory && (
        <div className="bg-amber-900/30 border border-amber-500/50 rounded-xl p-6 mb-6 animate-slideDown">
          <div className="flex items-start gap-4">
            <div className="text-4xl">👨‍🏫</div>
            <div>
              <h3 className="text-amber-400 font-bold mb-2">
                1821年: コーシーの言葉による定式化
              </h3>
              <p className="text-slate-300 mb-2">
                オーギュスタン=ルイ・コーシーは、極限を言葉で説明しました：
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-400">
                「変数がある値に限りなく近づくとき、その関数も一定の値に限りなく近づく」
              </blockquote>
              <p className="text-slate-300 mt-2 text-sm">
                まだ記号は使われていませんでしたが、「限りなく近づく」という概念を明確にしようとしました。
                あなたが今体験している「挑戦者の要求」がこの「限りなく」の感覚です！
              </p>
            </div>
          </div>
        </div>
      )}

      {/* メインビジュアライゼーション */}
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 mb-6">
        {/* 挑戦者の顔 */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{challenges[challengeLevel - 1].icon}</div>
              <div>
                <h3 className="text-red-400 font-bold text-xl">
                  挑戦者からの要求
                </h3>
                <p className="text-slate-300">
                  「ゴールから <span className="text-red-400 font-bold">±{epsilon}</span>{' '}
                  の範囲に入れてみて！」
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-slate-400 text-sm">難易度</div>
              <div className="text-white font-bold">
                {challenges[challengeLevel - 1].name}
              </div>
            </div>
          </div>
        </div>

        {/* グラフエリア */}
        <div className="relative bg-slate-900 rounded-xl p-8 mb-6" style={{ height: '400px' }}>
          {/* Y軸 */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-600" />
          <div className="absolute left-2 top-8 text-slate-400 text-sm">8</div>
          <div className="absolute left-2 top-1/4 text-slate-400 text-sm">6</div>
          <div className="absolute left-2 top-1/2 text-slate-400 text-sm">4</div>
          <div className="absolute left-2 top-3/4 text-slate-400 text-sm">2</div>

          {/* X軸 */}
          <div className="absolute left-8 right-8 bottom-8 h-0.5 bg-slate-600" />

          {/* 関数 f(x) = 2x の線 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1="8%"
              y1="92%"
              x2="92%"
              y2="8%"
              stroke="#94a3b8"
              strokeWidth="3"
              strokeDasharray="5,5"
              opacity="0.6"
            />
          </svg>

          {/* ε帯（許容範囲） */}
          <div
            className="absolute left-8 right-8 bg-red-500/20 border-t-2 border-b-2 border-red-500 transition-all duration-300"
            style={{
              bottom: `${8 + ((targetY - epsilon) / 8) * (100 - 16)}%`,
              height: `${((epsilon * 2) / 8) * (100 - 16)}%`,
            }}
          >
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-400 text-xs font-bold whitespace-nowrap">
              ← 挑戦ゾーン（|y - 6.0| {'<'} {epsilon}）
            </div>
          </div>

          {/* ゴール（関数線上、ε帯の中心） */}
          <div
            className="absolute w-6 h-6 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 z-10 animate-pulse"
            style={{
              left: `${8 + (targetX / 4) * (100 - 16)}%`,
              bottom: `${8 + (targetY / 8) * (100 - 16)}%`,
              transform: 'translate(-50%, 50%)',
            }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-yellow-400 text-xs font-bold">
              ⭐ ゴール
            </div>
          </div>

          {/* 現在位置 */}
          <div
            className={`absolute w-6 h-6 rounded-full transition-all duration-300 z-20 ${
              isSuccess
                ? 'bg-green-400 shadow-lg shadow-green-400/50 scale-125 animate-pulse'
                : 'bg-blue-400'
            }`}
            style={{
              left: `${8 + (x / 4) * (100 - 16)}%`,
              bottom: `${8 + (y / 8) * (100 - 16)}%`,
              transform: 'translate(-50%, 50%)',
            }}
          />
        </div>

        {/* コントロール */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-white font-medium">x の位置</label>
            <span className="text-xl font-bold text-blue-400">x = {x.toFixed(2)}</span>
          </div>

          <input
            type="range"
            min="2"
            max="4"
            step="0.01"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
            className="w-full h-4 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
          />

          {/* 結果表示 */}
          <div
            className={`rounded-lg p-6 transition-all duration-300 ${
              isSuccess
                ? 'bg-green-900/50 border-2 border-green-500'
                : 'bg-slate-900'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-400">y の値:</span>
              <span className="text-2xl font-bold text-white">{y.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-400">ゴールからの距離:</span>
              <span className={`text-2xl font-bold ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                {distance.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">許容範囲 (ε):</span>
              <span className="text-2xl font-bold text-red-400">{epsilon}</span>
            </div>

            {/* 判定 */}
            <div className="mt-4 pt-4 border-t border-slate-700 text-center">
              {isSuccess ? (
                <>
                  <div className="text-3xl mb-2">✅</div>
                  <p className="text-green-400 font-bold text-xl mb-4">成功！</p>
                  {challengeLevel < 4 ? (
                    <button
                      onClick={handleNextChallenge}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      次の挑戦へ →
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleNextChallenge}
                        className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-12 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 mb-4"
                      >
                        🎉 全ステージクリア！次へ進む
                      </button>
                      <p className="text-yellow-400 text-sm animate-pulse">
                        おめでとうございます！
                      </p>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="text-3xl mb-2">❌</div>
                  <p className="text-red-400 font-bold">
                    範囲外！もっと近づけよう
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 進捗表示 */}
      <div className="bg-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold">挑戦の進捗</h3>
          <span className="text-slate-400">
            {successStreak} / {challenges.length} クリア
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {challenges.map((challenge) => (
            <div
              key={challenge.level}
              className={`p-3 rounded-lg text-center transition-all ${
                challenge.level < challengeLevel
                  ? 'bg-green-900/50 border-2 border-green-500'
                  : challenge.level === challengeLevel
                  ? 'bg-blue-900/50 border-2 border-blue-500 scale-105'
                  : 'bg-slate-900 border-2 border-slate-700'
              }`}
            >
              <div className="text-2xl mb-1">{challenge.icon}</div>
              <div className="text-xs text-slate-400">{challenge.name}</div>
              <div className="text-sm font-bold text-white mt-1">ε={challenge.epsilon}</div>
              {challenge.level < challengeLevel && (
                <div className="text-green-400 text-xs mt-1">✓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 学習ポイント */}
      <div className="mt-6 bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
        <h3 className="text-blue-400 font-bold mb-2 flex items-center">
          💡 ここで学んだこと
        </h3>
        <ul className="text-slate-300 space-y-2">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>
              <strong className="text-white">ε（イプシロン）</strong>
              は「どれくらい近ければOK？」を決める数
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>
              挑戦者がεを<strong className="text-white">後から決める</strong>のがポイント
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>
              εが小さいほど「厳しい要求」= 難しい挑戦
            </span>
          </li>
        </ul>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
