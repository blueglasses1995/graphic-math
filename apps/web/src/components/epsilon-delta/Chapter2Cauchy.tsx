import { useState } from 'react';

interface Chapter2CauchyProps {
  onComplete: () => void;
}

/**
 * 第2章: コーシーの挑戦（1821年）
 *
 * 極限の厳密化への最初の試み
 * 成功と失敗、そして何が足りなかったか
 */
export default function Chapter2Cauchy({ onComplete }: Chapter2CauchyProps) {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Step 1: コーシー登場 */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">👨‍🏫</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              1821年、フランス・パリ
            </h1>
            <h2 className="text-3xl text-blue-400 font-bold mb-2">
              オーギュスタン=ルイ・コーシー（32歳）
            </h2>
            <p className="text-xl text-slate-300">
              エコール・ポリテクニークの教授
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
              <h3 className="text-blue-400 font-bold mb-3">コーシーの動機</h3>
              <div className="text-slate-300 space-y-2 text-sm">
                <p>• バークリーの批判から約90年、問題は未解決のまま</p>
                <p>• 微積分は使われているが、論理的基礎は脆弱</p>
                <p>• 学生に教えるために、厳密な教科書が必要</p>
                <p className="text-yellow-400 font-bold">
                  • 「極限を曖昧さなく定義できないか？」
                </p>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-8">
              <h3 className="text-green-400 font-bold text-xl mb-4 text-center">
                コーシーの革新：εを使った定義
              </h3>
              <div className="bg-slate-900 rounded-lg p-6 mb-4">
                <p className="text-slate-300 mb-3 text-center italic">
                  『解析教程』（1821年）より：
                </p>
                <blockquote className="text-lg text-white text-center leading-relaxed">
                  「変数が一定の値に限りなく近づき、<br />
                  ついにはその差を<strong className="text-green-400">与えられたどんな数よりも小さく</strong>できるとき、<br />
                  その一定の値を極限という」
                </blockquote>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4">
                <p className="text-slate-300 text-sm">
                  <strong className="text-yellow-400">画期的：</strong>
                  「与えられたどんな数」= εの原型！
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            何が画期的だったのか →
          </button>
        </div>
      )}

      {/* Step 2: コーシーの貢献 */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            ✨ コーシーの3つの貢献
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="space-y-6">
              <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
                <h3 className="text-green-400 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">1.</span>
                  εの導入
                </h3>
                <p className="text-slate-300">
                  「与えられたどんな数」→ これがεになる<br />
                  <strong className="text-yellow-400">
                    任意の正の数で極限をテストするアイデア
                  </strong>
                </p>
              </div>

              <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">2.</span>
                  「限りなく近づく」の言語化
                </h3>
                <p className="text-slate-300">
                  「差を小さくできる」という表現<br />
                  動詞から離れようとした（完全ではないが）
                </p>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
                <h3 className="text-purple-400 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">3.</span>
                  教科書の刷新
                </h3>
                <p className="text-slate-300">
                  初めて「厳密さ」を重視した解析学の教科書<br />
                  次世代の数学者（ワイエルシュトラスも）がこれで学んだ
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            でも、まだ問題があった... →
          </button>
        </div>
      )}

      {/* Step 3: コーシーの限界 */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            ⚠️ コーシーの定義の問題点
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-yellow-900/30 border-2 border-yellow-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-yellow-400 font-bold text-xl mb-4">
                コーシーの定義（再掲）
              </h3>
              <p className="text-slate-300 text-center">
                「差を<strong>与えられたどんな数よりも小さくできる</strong>とき」
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
                <h4 className="text-green-400 font-bold mb-3">✓ 良かった点</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• εの概念を導入</li>
                  <li>• 数値的な基準を示した</li>
                  <li>• 「どんな数でも」という普遍性</li>
                </ul>
              </div>

              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
                <h4 className="text-red-400 font-bold mb-3">✗ 問題点</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• 「できる」= まだ時間的概念</li>
                  <li>• δが明示されていない</li>
                  <li>• 記号化されていない</li>
                  <li>• 論理的順序が不明確</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
              <h4 className="text-purple-400 font-bold mb-3 text-xl">
                何が足りなかったのか？
              </h4>
              <p className="text-slate-300 mb-4">
                コーシーの時代（1821年）には、以下がまだ整備されていなかった：
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-slate-900 rounded p-3 text-sm">
                  <div className="text-red-400 font-bold mb-1">実数の定義</div>
                  <div className="text-slate-400">→ 1872年まで待つ必要</div>
                </div>
                <div className="bg-slate-900 rounded p-3 text-sm">
                  <div className="text-red-400 font-bold mb-1">集合論</div>
                  <div className="text-slate-400">→ 1874年まで待つ必要</div>
                </div>
                <div className="bg-slate-900 rounded p-3 text-sm">
                  <div className="text-red-400 font-bold mb-1">記号論理学</div>
                  <div className="text-slate-400">→ 1879年まで待つ必要</div>
                </div>
                <div className="bg-slate-900 rounded p-3 text-sm">
                  <div className="text-blue-400 font-bold mb-1">関数概念</div>
                  <div className="text-slate-400">→ 1837年に整備される</div>
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

      {/* Step 4: コーシーとε-δの比較 */}
      {step === 4 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            📊 比較：コーシー vs ワイエルシュトラス
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-900/30 border-2 border-blue-500 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold text-xl mb-4">
                  コーシー（1821）
                </h3>
                <div className="bg-slate-900 rounded-lg p-4 mb-4">
                  <p className="text-slate-300 text-sm italic">
                    「差を与えられたどんな数εよりも小さく<strong className="text-yellow-400">できる</strong>」
                  </p>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>εは登場</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>δが明示されていない</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>「できる」= 時間的</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>記号論理なし</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-900/30 border-2 border-green-500 rounded-xl p-6">
                <h3 className="text-green-400 font-bold text-xl mb-4">
                  ワイエルシュトラス（1861）
                </h3>
                <div className="bg-slate-900 rounded-lg p-4 mb-4 font-mono text-sm">
                  <div className="text-green-400">
                    ∀ε{'>'}0, ∃δ{'>'}0
                    <br />
                    s.t. |x-a|{'<'}δ
                    <br />⇒ |f(x)-L|{'<'}ε
                  </div>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>εとδの両方</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>順序が明確（∀ε∃δ）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>時間なし（静的命題）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>完全に記号化</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
              <h4 className="text-purple-400 font-bold mb-3">
                💡 コーシーの功績
              </h4>
              <p className="text-slate-300">
                完璧ではなかったが、<strong className="text-yellow-400">正しい方向</strong>を示した。<br />
                εという概念は、ワイエルシュトラスにそのまま受け継がれた。<br />
                <strong className="text-green-400">
                  失敗から学び、40年後に完成する
                </strong>
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            なぜ完成できなかった？ →
          </button>
        </div>
      )}

      {/* Step 5: 必要な道具の欠如 */}
      {step === 5 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🔧 コーシーに足りなかった道具
          </h2>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 mb-8">
            <p className="text-xl text-slate-300 mb-8 text-center">
              コーシーのアイデアを完成させるには、<br />
              これから整備される4つの道具が必要だった
            </p>

            <div className="space-y-4">
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-blue-400 font-bold">1. 関数概念の再定義</h4>
                  <span className="text-slate-400 text-sm">1837年（16年後）</span>
                </div>
                <p className="text-slate-300 text-sm">
                  ディリクレが f: A → B という写像として定義<br />
                  → f(x) を厳密に扱える
                </p>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-purple-400 font-bold">2. 実数の厳密化</h4>
                  <span className="text-slate-400 text-sm">1872年（51年後）</span>
                </div>
                <p className="text-slate-300 text-sm">
                  デデキント、カントールが実数を定義<br />
                  → 「任意のε{'>'}0」が言える
                </p>
              </div>

              <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-green-400 font-bold">3. 集合論</h4>
                  <span className="text-slate-400 text-sm">1874年（53年後）</span>
                </div>
                <p className="text-slate-300 text-sm">
                  カントールが集合論を創始<br />
                  → 「範囲内の全て」が表現できる
                </p>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-yellow-400 font-bold">4. 記号論理学</h4>
                  <span className="text-slate-400 text-sm">1879年（58年後）</span>
                </div>
                <p className="text-slate-300 text-sm">
                  フレーゲが量化子 ∀, ∃ を形式化<br />
                  → 時間を排除、順序を明確化
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-amber-900/40 to-blue-900/40 border-2 border-amber-500/50 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">⏳</div>
              <p className="text-2xl text-slate-300 mb-4">
                これらの道具が揃うまで、<br />
                <strong className="text-yellow-400 text-3xl">40年以上</strong>
                かかった
              </p>
              <p className="text-slate-400">
                次の章で、一つずつ見ていこう
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-6 px-16 rounded-xl text-2xl transition-all shadow-2xl transform hover:scale-105"
          >
            📚 第3章へ：基礎の整備
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
