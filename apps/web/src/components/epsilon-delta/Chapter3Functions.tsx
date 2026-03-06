import { useState } from 'react';

interface Chapter3FunctionsProps {
  onComplete: () => void;
}

/**
 * 第3-1章: 関数概念の再定義（1837年、ディリクレ）
 *
 * ※時代は1837年に戻ります
 * なぜ必要: f(x)を厳密に扱うため
 */
export default function Chapter3Functions({
  onComplete,
}: Chapter3FunctionsProps) {
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
      {/* Step 1: 時代の注釈 */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <div className="bg-amber-900/30 border-2 border-amber-500/50 rounded-xl p-6 mb-8 text-center">
            <div className="text-4xl mb-3">⏰</div>
            <p className="text-xl text-amber-400 font-bold mb-2">
              ※ 時代は1837年に戻ります
            </p>
            <p className="text-slate-300">
              コーシーの定義（1821年）から16年後、<br />
              ワイエルシュトラスの完成（1861年）の24年前
            </p>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📐</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              1837年、ドイツ
            </h1>
            <h2 className="text-3xl text-blue-400 font-bold mb-2">
              ペーター・グスタフ・ディリクレ（32歳）
            </h2>
            <p className="text-xl text-slate-300">
              ベルリン大学教授
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
              <h3 className="text-blue-400 font-bold mb-3">ディリクレの問題意識</h3>
              <div className="text-slate-300 space-y-2 text-sm">
                <p>• ニュートン以来、「関数」の定義が曖昧</p>
                <p>• 関数 = 式？それとも対応関係？</p>
                <p>• 不連続な関数は関数なのか？</p>
                <p className="text-yellow-400 font-bold">
                  • f(x) を厳密に扱わないと、極限も定義できない
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
                <h4 className="text-red-400 font-bold mb-3">
                  ✗ それまでの「関数」
                </h4>
                <div className="text-slate-300 space-y-2 text-sm">
                  <p>• 関数 = 式</p>
                  <p>• y = x², y = sin(x) など</p>
                  <p>• 「滑らかな」ものだけ</p>
                  <p className="text-red-400">
                    • f(x) が「何か」が不明確
                  </p>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
                <h4 className="text-green-400 font-bold mb-3">
                  ✓ ディリクレの定義
                </h4>
                <div className="text-slate-300 space-y-2 text-sm">
                  <p>• 関数 = 対応関係</p>
                  <p>• f: A → B（写像）</p>
                  <p>• 式でなくてもOK</p>
                  <p className="text-green-400 font-bold">
                    • 各xに対してただ一つのf(x)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            具体例で見る →
          </button>
        </div>
      )}

      {/* Step 2: ディリクレ関数 */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            💡 ディリクレの関数（衝撃的な例）
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-purple-400 font-bold text-xl mb-4 text-center">
                式では書けない関数
              </h3>
              <div className="bg-slate-900 rounded-lg p-6">
                <div className="text-center space-y-3">
                  <p className="text-slate-400">ディリクレ関数:</p>
                  <div className="text-white text-lg">
                    f(x) = {'{'}
                    <div className="ml-8">
                      1 （x が有理数のとき）
                      <br />0 （x が無理数のとき）
                    </div>
                    {'}'}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6">
                <h4 className="text-blue-400 font-bold mb-3">これは関数か？</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="text-green-400">✓ 各xに対して値が決まる</li>
                  <li className="text-green-400">✓ 一意に定まる</li>
                  <li className="text-yellow-400">• でも式で書けない</li>
                  <li className="text-yellow-400">• グラフも描けない</li>
                </ul>
                <p className="text-green-400 font-bold mt-3 text-center">
                  → はい、関数です！
                </p>
              </div>

              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
                <h4 className="text-red-400 font-bold mb-3">
                  ニュートンの定義では？
                </h4>
                <p className="text-slate-300 text-sm mb-3">
                  「関数 = 式」だと、<br />
                  この関数は表現できない
                </p>
                <p className="text-red-400 font-bold">
                  → 定義が不十分！
                </p>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
              <h4 className="text-green-400 font-bold mb-3">
                ✓ ディリクレの洞察
              </h4>
              <p className="text-slate-300">
                関数とは「式」ではなく、<br />
                <strong className="text-yellow-400 text-xl">
                  定義域の各点に値域の点を対応させるルール
                </strong><br />
                であればよい
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            ε-δでなぜ必要？ →
          </button>
        </div>
      )}

      {/* Step 3: ε-δでの役割 */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🎯 ε-δ論法での関数の役割
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-blue-400 font-bold mb-4 text-center">
                ε-δ論法で書きたいこと
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-center">
                <div className="text-white">
                  |<strong className="text-yellow-400">f(x)</strong> - L| {'<'} ε
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
                <h4 className="text-purple-400 font-bold mb-3">
                  ディリクレの定義が必要な理由
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">1.</span>
                    <span>
                      <strong>f(x) が一意に定まる</strong>ことの保証<br />
                      <span className="text-sm text-slate-400">
                        → 各xに対して、f(x)が1つだけ
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">2.</span>
                    <span>
                      <strong>定義域と値域</strong>の明確化<br />
                      <span className="text-sm text-slate-400">
                        → f: ℝ → ℝ のように書ける
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">3.</span>
                    <span>
                      <strong>どんな関数でも</strong>扱える<br />
                      <span className="text-sm text-slate-400">
                        → 連続・不連続、式で書ける・書けない、全て対象
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-6">
                <h4 className="text-yellow-400 font-bold mb-3">
                  💡 これがないと...
                </h4>
                <p className="text-slate-300">
                  「f(x) の極限」と言っても、<br />
                  そもそも f(x) が何かが曖昧では、<br />
                  極限を定義しようがない！
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            まとめ →
          </button>
        </div>
      )}

      {/* Step 4: まとめ */}
      {step === 4 && (
        <div className="animate-fadeIn text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-white mb-6">
            関数の準備、完了！
          </h2>

          <div className="max-w-3xl mx-auto bg-green-900/30 border border-green-500/50 rounded-xl p-8 mb-8">
            <div className="mb-6">
              <h3 className="text-green-400 font-bold text-xl mb-3">
                ディリクレの貢献
              </h3>
              <p className="text-slate-300">
                関数 = <strong className="text-yellow-400">写像 f: A → B</strong>
                <br />
                → これで f(x) を厳密に扱える
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm">
                この定義により、ε-δ論法の<br />
                「|f(x) - L| {'<'} ε」が意味を持つようになった
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all shadow-lg"
          >
            🔢 次：実数の厳密化
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
