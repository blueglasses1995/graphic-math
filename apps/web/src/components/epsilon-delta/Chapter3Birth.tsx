import { useState } from 'react';

interface Chapter3BirthProps {
  onComplete: () => void;
}

/**
 * 第3章: ε-δ論法の誕生（1861年）
 *
 * ワイエルシュトラスによる完璧な定義
 * 全ての準備が整った瞬間
 */
export default function Chapter3Birth({ onComplete }: Chapter3BirthProps) {
  const [step, setStep] = useState(1);
  const [revealedParts, setRevealedParts] = useState<number[]>([]);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const revealPart = (part: number) => {
    if (!revealedParts.includes(part)) {
      setRevealedParts([...revealedParts, part]);
    }
  };

  const definitionParts = [
    {
      id: 1,
      symbol: '∀ε > 0',
      meaning: 'どんな正の数εでも',
      uses: '実数（完備性）',
    },
    {
      id: 2,
      symbol: '∃δ > 0',
      meaning: 'ある正の数δが存在して',
      uses: '論理（後出し）',
    },
    {
      id: 3,
      symbol: '0 < |x - a| < δ',
      meaning: 'xがaにδより近い（a自身を除く）',
      uses: '集合（近傍）',
    },
    {
      id: 4,
      symbol: '⇒',
      meaning: 'ならば',
      uses: '論理（含意）',
    },
    {
      id: 5,
      symbol: '|f(x) - L| < ε',
      meaning: 'f(x)がLにεより近い',
      uses: '実数（距離）',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Step 1: ワイエルシュトラス登場 */}
      {step === 1 && (
        <div className="animate-fadeIn text-center">
          <div className="text-6xl mb-8">🎓</div>
          <h1 className="text-5xl font-bold text-white mb-6">
            1861年、ベルリン
          </h1>
          <h2 className="text-3xl text-green-400 font-bold mb-8">
            カール・ワイエルシュトラス
          </h2>

          <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl p-12 mb-8">
            <p className="text-2xl text-slate-300 mb-8">
              100年以上かかって、<br />
              ついに全ての道具が揃った
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-900/50 rounded-lg p-4">
                <div className="text-3xl mb-2">🔢</div>
                <div className="text-white font-bold">実数</div>
                <div className="text-green-400 text-xs">✓</div>
              </div>
              <div className="bg-purple-900/50 rounded-lg p-4">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-white font-bold">集合</div>
                <div className="text-green-400 text-xs">✓</div>
              </div>
              <div className="bg-green-900/50 rounded-lg p-4">
                <div className="text-3xl mb-2">🧠</div>
                <div className="text-white font-bold">論理</div>
                <div className="text-green-400 text-xs">✓</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/40 to-green-900/40 border-2 border-yellow-500/50 rounded-xl p-8">
              <p className="text-2xl text-yellow-400 font-bold">
                ワイエルシュトラスは、<br />
                完璧に厳密な定義を作り上げた
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-bold py-6 px-16 rounded-xl text-2xl transition-all shadow-2xl transform hover:scale-105"
          >
            その定義を見る →
          </button>
        </div>
      )}

      {/* Step 2: 定義の提示 */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            ✨ ε-δ論法の完全な定義
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-500 rounded-xl p-10 mb-6">
              <h3 className="text-blue-400 font-bold text-2xl mb-6 text-center">
                lim<sub>x→a</sub> f(x) = L の定義
              </h3>

              <div className="bg-slate-900 rounded-lg p-8 font-mono text-xl text-center">
                <div className="text-green-400 mb-3">
                  ∀ε {'>'} 0, ∃δ {'>'} 0
                </div>
                <div className="text-yellow-400 mb-3">
                  s.t. 0 {'<'} |x - a| {'<'} δ
                </div>
                <div className="text-3xl my-4 text-white">⇒</div>
                <div className="text-purple-400">
                  |f(x) - L| {'<'} ε
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-6">
              <h3 className="text-yellow-400 font-bold mb-4 text-center">
                この定義の革命性
              </h3>
              <ul className="space-y-3 text-lg text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    <strong className="text-white">時間なし：</strong>
                    「近づく」という動詞を排除
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    <strong className="text-white">曖昧さゼロ：</strong>
                    全て数値と論理記号
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    <strong className="text-white">検証可能：</strong>
                    真偽を論理的に証明できる
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    <strong className="text-white">普遍的：</strong>
                    あらゆる関数に適用可能
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            各パーツの役割 →
          </button>
        </div>
      )}

      {/* Step 3: パーツごとの解説 */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🔍 定義の各パーツ
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <p className="text-slate-300 mb-6 text-center">
              クリックして各パーツの役割を見よう
            </p>

            <div className="space-y-4">
              {definitionParts.map((part) => (
                <div
                  key={part.id}
                  onClick={() => revealPart(part.id)}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    revealedParts.includes(part.id)
                      ? 'bg-blue-900/30 border-blue-500'
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-2xl font-mono text-white mb-2">
                        {part.symbol}
                      </div>
                      {revealedParts.includes(part.id) && (
                        <div className="animate-slideDown">
                          <div className="text-slate-300 mb-2">{part.meaning}</div>
                          <div className="text-sm text-blue-400">
                            使用: {part.uses}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-2xl">
                      {revealedParts.includes(part.id) ? '✓' : '❔'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {revealedParts.length === definitionParts.length && (
              <div className="mt-8 bg-gradient-to-r from-green-900/50 to-blue-900/50 border-2 border-green-500 rounded-xl p-8 text-center animate-scaleIn">
                <div className="text-4xl mb-4">🎉</div>
                <p className="text-2xl text-green-400 font-bold">
                  全てのパーツが理解できた！
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            実践へ →
          </button>
        </div>
      )}

      {/* Step 4: 実践へ */}
      {step === 4 && (
        <div className="animate-fadeIn text-center">
          <div className="text-6xl mb-8">⚔️</div>
          <h2 className="text-4xl font-bold text-white mb-8">
            さあ、実践しよう！
          </h2>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-500 rounded-2xl p-12 mb-8">
            <p className="text-2xl text-slate-300 mb-6">
              理論は理解した。<br />
              次は実際にε-δ論法を使ってみよう！
            </p>

            <div className="bg-slate-900/50 rounded-xl p-6">
              <h3 className="text-yellow-400 font-bold text-xl mb-4">
                これから体験すること
              </h3>
              <ul className="space-y-2 text-left text-slate-300">
                <li>• 1次関数、2次関数、3次関数でε-δゲーム</li>
                <li>• 傾きとδの関係を発見</li>
                <li>• 微分への応用</li>
                <li>• 最後にガリレオの問題を厳密に解決</li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold py-6 px-20 rounded-2xl text-2xl transition-all shadow-2xl transform hover:scale-105"
          >
            🎮 第4章へ：実践編
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
