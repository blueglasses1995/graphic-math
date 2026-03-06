import { useState } from 'react';

interface Chapter1BerkeleyProps {
  onComplete: () => void;
}

/**
 * 第1章: バークリー司教の批判（1734年）
 *
 * 目標: ニュートンの方法の論理的問題を理解
 * 重要: 「計算は合ってるが、論理的には曖昧」
 */
export default function Chapter1Berkeley({ onComplete }: Chapter1BerkeleyProps) {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Step 1: バークリー登場 */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">👨‍⚖️</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              1734年、アイルランド
            </h1>
            <h2 className="text-3xl text-red-400 font-bold">
              ジョージ・バークリー司教の批判
            </h2>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-8">
              <h3 className="text-red-400 font-bold text-2xl mb-6 text-center">
                「消えゆく量の亡霊」
              </h3>
              <blockquote className="text-xl text-slate-300 italic mb-6 text-center">
                "The Analyst" (1734年の著書より)
              </blockquote>
              <div className="bg-slate-900 rounded-lg p-6 space-y-4">
                <p className="text-lg text-slate-300">
                  ニュートンの計算では、Δx は：
                </p>
                <ul className="space-y-3 text-slate-300 ml-6">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">1.</span>
                    <span>
                      最初は<strong className="text-white">ゼロではない</strong>
                      （だから割り算ができる）
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">2.</span>
                    <span>
                      最後には<strong className="text-white">ゼロになる</strong>
                      （だから極限）
                    </span>
                  </li>
                </ul>
                <p className="text-2xl text-red-400 font-bold text-center mt-6">
                  どっちなんだ！？
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            具体例で見てみる →
          </button>
        </div>
      )}

      {/* Step 2: 0で割る問題 */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            💥 問題1: ゼロで割っていいの？
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
              <h3 className="text-blue-400 font-bold mb-4">
                例：f(x) = x² の微分を計算
              </h3>
              <div className="bg-slate-900 rounded-lg p-6 space-y-4 font-mono">
                <div className="text-slate-300">
                  f'(x) = lim<sub>Δx→0</sub> (f(x+Δx) - f(x)) / Δx
                </div>
                <div className="text-slate-300">
                  = lim<sub>Δx→0</sub> ((x+Δx)² - x²) / Δx
                </div>
                <div className="text-slate-300">
                  = lim<sub>Δx→0</sub> (2x·Δx + Δx²) / Δx
                </div>
                <div className="text-yellow-400">
                  = lim<sub>Δx→0</sub> (2x + Δx){' '}
                  <span className="text-slate-500">← Δxで約分</span>
                </div>
                <div className="text-green-400 text-xl">
                  = 2x{' '}
                  <span className="text-slate-500 text-sm">← Δx=0を代入</span>
                </div>
              </div>
            </div>

            <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-6">
              <h3 className="text-red-400 font-bold mb-4 flex items-center">
                <span className="text-2xl mr-2">⚠️</span>
                バークリーの指摘
              </h3>
              <div className="space-y-4 text-lg text-slate-300">
                <p className="flex items-start">
                  <span className="text-red-400 mr-2 font-bold">矛盾1:</span>
                  <span>
                    約分するときは <strong className="text-white">Δx ≠ 0</strong> でないとダメ
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-400 mr-2 font-bold">矛盾2:</span>
                  <span>
                    でも最後は <strong className="text-white">Δx = 0</strong> を代入してる
                  </span>
                </p>
                <p className="text-center text-2xl text-red-400 font-bold mt-6">
                  「都合よく使い分けている！」
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            もう一つの問題 →
          </button>
        </div>
      )}

      {/* Step 3: 時間概念の問題 */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            ⏰ 問題2: 「限りなく近づく」は動詞
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-purple-400 font-bold text-xl mb-4">
                ニュートンの表現
              </h3>
              <p className="text-xl text-slate-300 text-center mb-4">
                「Δx を限りなく小さくしていくと...」
              </p>
              <div className="flex items-center justify-center gap-4 text-2xl">
                <span className="text-blue-400">Δx = 1</span>
                <span className="text-slate-500">→</span>
                <span className="text-blue-400">0.1</span>
                <span className="text-slate-500">→</span>
                <span className="text-blue-400">0.01</span>
                <span className="text-slate-500">→</span>
                <span className="text-blue-400">...</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6">
                <h4 className="text-blue-400 font-bold mb-3">
                  物理学者の視点
                </h4>
                <p className="text-slate-300">
                  「近づく」= プロセス、時間的変化<br />
                  <strong className="text-green-400">直感的で分かりやすい</strong>
                </p>
              </div>

              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
                <h4 className="text-red-400 font-bold mb-3">
                  数学者の視点
                </h4>
                <p className="text-slate-300">
                  「近づく」= 動詞、時間的概念<br />
                  <strong className="text-red-400">数学的に定義できない</strong>
                </p>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-6">
              <h3 className="text-yellow-400 font-bold mb-3">
                💡 数学に必要なもの
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• 時間を使わない「静的な」定義</li>
                <li>• 「いつ止めるか」を明確にする</li>
                <li>• 論理的に証明可能</li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            どうすれば解決できる？ →
          </button>
        </div>
      )}

      {/* Step 4: 100年の準備へ */}
      {step === 4 && (
        <div className="animate-fadeIn text-center">
          <div className="text-6xl mb-8">⏳</div>
          <h2 className="text-4xl font-bold text-white mb-8">
            そして100年以上の時が流れる...
          </h2>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-12 mb-8">
            <p className="text-2xl text-slate-300 mb-8">
              ニュートンの微積分は使われ続けたが、<br />
              論理的基盤は曖昧なままだった
            </p>

            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-8">
              <h3 className="text-blue-400 font-bold text-2xl mb-6">
                解決のために必要だったもの
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="text-3xl mb-2">🔢</div>
                  <div className="font-bold text-white mb-2">実数の厳密化</div>
                  <div className="text-slate-400 text-sm">
                    デデキント、カントール
                  </div>
                </div>
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-bold text-white mb-2">集合論</div>
                  <div className="text-slate-400 text-sm">
                    カントール
                  </div>
                </div>
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="text-3xl mb-2">🧠</div>
                  <div className="font-bold text-white mb-2">論理学</div>
                  <div className="text-slate-400 text-sm">
                    フレーゲ、ラッセル
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white font-bold py-6 px-16 rounded-xl text-2xl transition-all shadow-2xl transform hover:scale-105"
          >
            📚 第2章へ：基礎の整備
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
