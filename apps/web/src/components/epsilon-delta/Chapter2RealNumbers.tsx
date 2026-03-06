import { useState } from 'react';

interface Chapter2RealNumbersProps {
  onComplete: () => void;
}

/**
 * 第2章-1: 実数の必要性
 *
 * なぜε-δに必要か: 「任意のε>0」を言うため
 * 有理数だけでは「隙間」があり、連続性が保証できない
 */
export default function Chapter2RealNumbers({
  onComplete,
}: Chapter2RealNumbersProps) {
  const [step, setStep] = useState(1);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Step 1: なぜ実数が必要か */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <div className="bg-amber-900/30 border-2 border-amber-500/50 rounded-xl p-6 mb-8 text-center">
            <div className="text-4xl mb-3">⏰</div>
            <p className="text-xl text-amber-400 font-bold mb-2">
              ※ 時代は1872年に進みます
            </p>
            <p className="text-slate-300">
              ディリクレの関数定義（1837年）から35年後、<br />
              集合論（1874年）の2年前
            </p>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔢</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              第3-2章: 実数の厳密化
            </h1>
            <h2 className="text-2xl text-purple-400 font-bold mb-2">
              リヒャルト・デデキント（41歳）
            </h2>
            <p className="text-xl text-slate-300">
              ブラウンシュヴァイク工科大学教授
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
              <h3 className="text-blue-400 font-bold mb-3">デデキントの背景</h3>
              <div className="text-slate-300 space-y-2 text-sm">
                <p>• ガウスの最後の弟子</p>
                <p>• 整数論、代数学の研究者</p>
                <p>• 1858年、授業で連続性を説明しようとして困惑</p>
                <p className="text-yellow-400 font-bold">
                  • 「実数とは何か？」という根本問題に直面
                </p>
              </div>
            </div>

            <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
              <h3 className="text-purple-400 font-bold mb-3">デデキントの洞察</h3>
              <p className="text-slate-300 mb-3">
                実数を「<strong className="text-yellow-400">切断</strong>」として定義
              </p>
              <p className="text-slate-400 text-sm">
                数直線を2つに切る → その境界が実数<br />
                これにより、√2 や π も厳密に定義できる
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-blue-400 font-bold text-xl mb-4 text-center">
                ε-δ論法の定義を思い出そう
              </h3>
              <div className="bg-slate-900 rounded-lg p-6 font-mono text-lg text-center">
                <div className="text-green-400">
                  <strong className="text-2xl">∀ε {'>'} 0</strong>, ∃δ {'>'} 0
                  <br />
                  s.t. |x - a| {'<'} δ ⇒ |f(x) - L| {'<'} ε
                </div>
              </div>
            </div>

            <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-6">
              <h3 className="text-red-400 font-bold text-xl mb-4">
                ⚠️ 問題：「任意のε {'>'} 0」って何？
              </h3>
              <ul className="space-y-3 text-lg text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>
                    εは<strong className="text-white">どんな正の数でもいい</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>
                    ε = 0.5 でも、0.001 でも、0.00000001 でも...
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>
                    <strong className="text-yellow-400">
                      「正の数」が全部揃っていないと、この定義が書けない！
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
            有理数だけでは不十分 →
          </button>
        </div>
      )}

      {/* Step 2: 有理数の限界 */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            📏 有理数の「隙間」問題
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-slate-900 rounded-xl p-8 mb-6">
              <h3 className="text-white font-bold mb-4">数直線を想像してみよう</h3>

              {/* インタラクティブ数直線 */}
              <div className="relative h-32 bg-slate-800 rounded-lg p-4">
                {/* 数直線 */}
                <div className="absolute left-8 right-8 top-1/2 h-1 bg-slate-600" />

                {/* 有理数の点 */}
                {[0, 0.5, 1, 1.5, 2].map((val) => (
                  <div
                    key={val}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: `${8 + (val / 2) * (100 - 16)}%`,
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap">
                      {val}
                    </div>
                  </div>
                ))}

                {/* √2 の位置 */}
                <div
                  className="absolute w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:scale-150 transition-transform"
                  style={{
                    left: `${8 + (Math.sqrt(2) / 2) * (100 - 16)}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => setSelectedPoint(Math.sqrt(2))}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-red-400 font-bold whitespace-nowrap">
                    √2 = ?
                  </div>
                </div>
              </div>

              {selectedPoint && (
                <div className="mt-6 bg-red-900/30 border border-red-500/50 rounded-lg p-4 animate-slideDown">
                  <p className="text-slate-300">
                    √2 ≈ 1.41421356...<br />
                    <strong className="text-red-400">
                      有理数（分数）では表せない！
                    </strong>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-6 mb-6">
              <h3 className="text-yellow-400 font-bold mb-3">
                💡 有理数だけでは不十分
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• √2, π, e などは有理数ではない</li>
                <li>• 数直線に「隙間」がある</li>
                <li>• 「連続性」が保証できない</li>
              </ul>
            </div>

            <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
              <h3 className="text-green-400 font-bold mb-3">
                ✓ 実数の定義（1872年）
              </h3>
              <p className="text-slate-300 mb-3">
                デデキント、カントールが実数を厳密に定義
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <strong>完備性</strong>：隙間がない</li>
                <li>• <strong>連続性</strong>：どんな小さな範囲にも実数がある</li>
                <li>• <strong>順序</strong>：大小関係が明確</li>
              </ul>
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
            🎯 ε-δ論法での実数の役割
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="space-y-6">
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold mb-3">
                  1. 「任意のε {'>'} 0」が言える
                </h3>
                <p className="text-slate-300">
                  実数が完備だから、どんなに小さい正の数も存在する<br />
                  ε = 10<sup>-100</sup> でもOK！
                </p>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
                <h3 className="text-purple-400 font-bold mb-3">
                  2. 「限りなく近づく」を静的に表現
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-400 font-bold mb-2">✗ ニュートン</div>
                    <div className="text-slate-300 text-sm">
                      「Δxを小さくしていく」<br />
                      → 時間的概念（動詞）
                    </div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-400 font-bold mb-2">✓ ε-δ</div>
                    <div className="text-slate-300 text-sm">
                      「どんなεでも」<br />
                      → 静的な命題
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
                <h3 className="text-green-400 font-bold mb-3">
                  3. 距離の概念
                </h3>
                <p className="text-slate-300">
                  |x - a| {'<'} δ という「距離」が定義できる<br />
                  実数の順序と演算が必要
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            次：集合論 →
          </button>
        </div>
      )}

      {/* Step 4: まとめ */}
      {step === 4 && (
        <div className="animate-fadeIn text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-white mb-6">
            実数の準備、完了！
          </h2>

          <div className="max-w-3xl mx-auto bg-green-900/30 border border-green-500/50 rounded-xl p-8 mb-8">
            <p className="text-xl text-slate-300">
              これで「任意のε」が言える基盤ができた。<br />
              次は「範囲」を表現する集合論へ！
            </p>
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all shadow-lg"
          >
            📊 第2章-2へ：集合論
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
