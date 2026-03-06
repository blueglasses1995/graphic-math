import { useState } from 'react';

interface Chapter2SetsProps {
  onComplete: () => void;
}

/**
 * 第2章-2: 集合論の必要性
 *
 * なぜε-δに必要か: 「範囲内の全てのx」を表現するため
 * 近傍の概念が集合論なしでは書けない
 */
export default function Chapter2Sets({ onComplete }: Chapter2SetsProps) {
  const [step, setStep] = useState(1);
  const [delta, setDelta] = useState(0.5);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const a = 3.0;
  const pointsInRange = [2.6, 2.8, 3.0, 3.2, 3.4].filter(
    (x) => Math.abs(x - a) < delta && x !== a
  );

  return (
    <div className="max-w-5xl mx-auto">
      {/* Step 1: なぜ集合論が必要か */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📊</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              第2章-2: 集合論の必要性
            </h1>
            <p className="text-xl text-slate-300">
              なぜε-δ論法に集合が必要なのか？
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-blue-400 font-bold text-xl mb-4 text-center">
                ε-δ論法でやりたいこと
              </h3>
              <p className="text-xl text-slate-300 text-center mb-4">
                「|x - a| {'<'} δ の範囲内の<br />
                <strong className="text-yellow-400 text-2xl">全てのx</strong>に対して」
              </p>
            </div>

            <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-6">
              <h3 className="text-red-400 font-bold mb-4">
                ⚠️ 問題：「全てのx」をどう表現する？
              </h3>
              <ul className="space-y-3 text-lg text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>
                    x = 2.9, x = 2.99, x = 2.999, ... <strong>全部</strong>列挙できない
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>
                    「この範囲の全部」を<strong>一言で</strong>表す方法が必要
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>
                    <strong className="text-yellow-400">
                      これが集合論！
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            集合の記法 →
          </button>
        </div>
      )}

      {/* Step 2: 集合の記法 */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🎯 集合で「範囲」を表現する
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-green-400 font-bold text-xl mb-4 text-center">
                近傍の定義
              </h3>
              <div className="bg-slate-900 rounded-lg p-6 mb-4">
                <div className="text-center text-2xl text-white font-mono">
                  N<sub>δ</sub>(a) = {'{'} x : |x - a| {'<'} δ {'}'}
                </div>
              </div>
              <p className="text-slate-300 text-center">
                「a を中心とする、半径δの近傍」<br />
                = <strong className="text-yellow-400">範囲内の全ての点</strong>
              </p>
            </div>

            {/* インタラクティブ視覚化 */}
            <div className="bg-slate-900 rounded-xl p-8">
              <h4 className="text-white font-bold mb-4 text-center">
                🔬 実験：δを変えてみよう
              </h4>

              <div className="relative h-32 bg-slate-800 rounded-lg p-4 mb-6">
                {/* 数直線 */}
                <div className="absolute left-8 right-8 top-1/2 h-1 bg-slate-600" />

                {/* a の位置 */}
                <div
                  className="absolute w-4 h-4 bg-yellow-400 rounded-full z-10"
                  style={{
                    left: `${8 + ((a - 2) / 2) * (100 - 16)}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-yellow-400 font-bold">
                    a = {a}
                  </div>
                </div>

                {/* δ範囲 */}
                <div
                  className="absolute h-12 bg-blue-500/30 border-l-2 border-r-2 border-blue-500"
                  style={{
                    left: `${8 + ((a - delta - 2) / 2) * (100 - 16)}%`,
                    width: `${((delta * 2) / 2) * (100 - 16)}%`,
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />

                {/* 範囲内の点 */}
                {pointsInRange.map((x) => (
                  <div
                    key={x}
                    className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"
                    style={{
                      left: `${8 + ((x - 2) / 2) * (100 - 16)}%`,
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
              </div>

              {/* δスライダー */}
              <div className="mb-4">
                <label className="text-white block mb-2">δの大きさ</label>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.1"
                  value={delta}
                  onChange={(e) => setDelta(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-xl font-bold text-blue-400 mt-2">
                  δ = {delta}
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                <p className="text-slate-300 text-center">
                  N<sub>{delta}</sub>({a}) に含まれる点の数:{' '}
                  <strong className="text-green-400 text-xl">無限個</strong>
                  <br />
                  <span className="text-sm text-slate-400">
                    （緑の点は例示。実際は連続的に無限個存在）
                  </span>
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            ε-δでどう使う？ →
          </button>
        </div>
      )}

      {/* Step 3: ε-δでの使用 */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🎯 ε-δ論法での集合の役割
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-purple-400 font-bold text-xl mb-4 text-center">
                言い換え
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="text-slate-400 text-sm mb-2">元の表現</div>
                  <div className="text-white">
                    「|x - a| {'<'} δ なら |f(x) - L| {'<'} ε」
                  </div>
                </div>
                <div className="text-center text-2xl">↓</div>
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="text-slate-400 text-sm mb-2">集合を使うと</div>
                  <div className="text-green-400 font-mono">
                    「x ∈ N<sub>δ</sub>(a) \ {'{'}a{'}'} なら f(x) ∈ N<sub>ε</sub>(L)」
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
              <h3 className="text-green-400 font-bold mb-3">
                ✓ 集合論で可能になること
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  • <strong>無限個の点</strong>を一つの対象として扱える
                </li>
                <li>
                  • <strong>「範囲」</strong>を数学的対象として定義
                </li>
                <li>
                  • <strong>包含関係</strong>（⊂）で論理的に議論できる
                </li>
                <li>
                  • <strong>写像</strong> f: N<sub>δ</sub>(a) → N<sub>ε</sub>(L) として表現
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all shadow-lg"
          >
            🧠 第2章-3へ：論理学
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
