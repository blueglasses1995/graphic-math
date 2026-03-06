import { useState } from 'react';

interface Chapter2LogicProps {
  onComplete: () => void;
}

/**
 * 第2章-3: 論理学の必要性
 *
 * なぜε-δに必要か: 時間概念を排除し、後出しジャンケンを形式化
 * 量化子の順序が全て
 */
export default function Chapter2Logic({ onComplete }: Chapter2LogicProps) {
  const [step, setStep] = useState(1);
  const [gameMode, setGameMode] = useState<'correct' | 'wrong'>('correct');
  const [epsilon, setEpsilon] = useState(0.5);
  const [fixedDelta] = useState(0.3);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  // 間違った順序: ∃δ∀ε（δを先に固定）
  const canWinWrong = epsilon <= fixedDelta * 2; // 固定されたδでは大きいεにしか対応できない

  return (
    <div className="max-w-5xl mx-auto">
      {/* Step 1: 時間の排除 */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🧠</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              第2章-3: 論理学（量化子）
            </h1>
            <p className="text-xl text-slate-300">
              なぜε-δ論法に論理学が必要なのか？
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
                <h3 className="text-red-400 font-bold mb-3">
                  ✗ ニュートンの表現
                </h3>
                <p className="text-slate-300 mb-3">
                  「Δx を<strong>小さくしていく</strong>と...」
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• 「〜していく」= 動詞</li>
                  <li>• 時間的プロセス</li>
                  <li>• いつ止める？</li>
                  <li className="text-red-400 font-bold">• 数学的に定義不可能</li>
                </ul>
              </div>

              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
                <h3 className="text-green-400 font-bold mb-3">
                  ✓ ε-δの表現
                </h3>
                <p className="text-slate-300 mb-3">
                  「<strong>どんなεでも</strong>、適切なδが存在」
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• 動詞なし</li>
                  <li>• 静的な命題</li>
                  <li>• 真偽が明確</li>
                  <li className="text-green-400 font-bold">• 数学的に証明可能</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
              <h3 className="text-blue-400 font-bold mb-3">
                💡 量化子の導入
              </h3>
              <div className="space-y-3 text-slate-300">
                <p>
                  <strong className="text-green-400 font-mono text-xl">∀</strong>（全称量化子）:{' '}
                  「全ての」「任意の」「どんな〜でも」
                </p>
                <p>
                  <strong className="text-blue-400 font-mono text-xl">∃</strong>（存在量化子）:{' '}
                  「ある」「存在する」「〜が見つかる」
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            順序が重要！ →
          </button>
        </div>
      )}

      {/* Step 2: 順序の重要性（ゲーム） */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            ⚡ 後出しジャンケンの本質
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <p className="text-xl text-slate-300 mb-6 text-center">
              順序を変えるとどうなるか、ゲームで体験しよう
            </p>

            {/* モード切替 */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setGameMode('correct')}
                className={`flex-1 p-6 rounded-xl transition-all ${
                  gameMode === 'correct'
                    ? 'bg-green-900/50 border-2 border-green-500'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                <div className="text-2xl mb-2">✓</div>
                <div className="font-bold text-white mb-2">正しい順序</div>
                <div className="text-green-400 font-mono">∀ε∃δ</div>
                <div className="text-slate-400 text-sm mt-2">
                  「どんなεでも、それに応じたδを選べる」
                </div>
              </button>

              <button
                onClick={() => setGameMode('wrong')}
                className={`flex-1 p-6 rounded-xl transition-all ${
                  gameMode === 'wrong'
                    ? 'bg-red-900/50 border-2 border-red-500'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                <div className="text-2xl mb-2">✗</div>
                <div className="font-bold text-white mb-2">間違った順序</div>
                <div className="text-red-400 font-mono">∃δ∀ε</div>
                <div className="text-slate-400 text-sm mt-2">
                  「あるδで、どんなεでも対応」
                </div>
              </button>
            </div>

            {/* ゲームエリア */}
            <div
              className={`rounded-xl p-8 ${
                gameMode === 'correct'
                  ? 'bg-green-900/30 border border-green-500/50'
                  : 'bg-red-900/30 border border-red-500/50'
              }`}
            >
              <h3
                className={`font-bold text-xl mb-4 text-center ${
                  gameMode === 'correct' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {gameMode === 'correct' ? '✓ 正しい順序' : '✗ 間違った順序'}
              </h3>

              <div className="bg-slate-900 rounded-lg p-6 mb-4">
                {gameMode === 'correct' ? (
                  <div className="space-y-4">
                    <p className="text-white">
                      <span className="text-red-400 font-bold">挑戦者:</span>{' '}
                      「ε = {epsilon} で挑戦！」
                    </p>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.1"
                      value={epsilon}
                      onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <p className="text-white">
                      <span className="text-blue-400 font-bold">あなた:</span>{' '}
                      「じゃあ δ = {(epsilon / 2).toFixed(1)} で対応！」
                    </p>
                    <div className="text-center text-green-400 font-bold text-xl mt-4">
                      ✓ εを見てからδを決められる = 常に勝てる！
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-white">
                      <span className="text-blue-400 font-bold">あなた:</span>{' '}
                      「δ = {fixedDelta} で決めた！」
                    </p>
                    <p className="text-slate-500 text-sm">
                      （δを先に固定してしまった...）
                    </p>
                    <p className="text-white mt-4">
                      <span className="text-red-400 font-bold">挑戦者:</span>{' '}
                      「じゃあ ε = {epsilon} で挑戦！」
                    </p>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.1"
                      value={epsilon}
                      onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <div
                      className={`text-center font-bold text-xl mt-4 ${
                        canWinWrong ? 'text-blue-400' : 'text-red-400'
                      }`}
                    >
                      {canWinWrong
                        ? '今回はたまたまOK'
                        : '✗ δが小さすぎて対応できない！'}
                    </div>
                    <p className="text-red-400 text-sm text-center">
                      εを小さくされたら負ける...
                    </p>
                  </div>
                )}
              </div>

              <div
                className={`p-4 rounded-lg ${
                  gameMode === 'correct'
                    ? 'bg-green-900/50'
                    : 'bg-red-900/50'
                }`}
              >
                <p className="text-slate-300 text-center">
                  {gameMode === 'correct' ? (
                    <>
                      <strong className="text-green-400">∀ε∃δ</strong>:{' '}
                      εを見てから選べる = <strong>必ず勝てる</strong>
                    </>
                  ) : (
                    <>
                      <strong className="text-red-400">∃δ∀ε</strong>:{' '}
                      δを先に固定 = <strong>小さいεで負ける</strong>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            時間の排除 →
          </button>
        </div>
      )}

      {/* Step 3: 時間概念の排除 */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            ⏰ 時間概念の排除
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
                <h3 className="text-red-400 font-bold mb-3">
                  ✗ 時間的表現
                </h3>
                <div className="space-y-3 text-slate-300">
                  <p>「εを選ぶ」</p>
                  <p className="text-center">↓ その後</p>
                  <p>「δを選ぶ」</p>
                  <p className="text-center">↓ さらに</p>
                  <p>「判定する」</p>
                </div>
                <div className="mt-4 text-red-400 text-sm">
                  → 時系列、プロセス
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
                <h3 className="text-green-400 font-bold mb-3">
                  ✓ 論理的表現
                </h3>
                <div className="bg-slate-900 rounded p-4 font-mono text-sm mb-3">
                  <div className="text-green-400">∀ε {'>'} 0,</div>
                  <div className="text-blue-400 ml-4">∃δ {'>'} 0</div>
                  <div className="text-purple-400 ml-8">s.t. P(ε,δ)</div>
                </div>
                <p className="text-slate-300 text-sm">
                  全てが<strong className="text-white">同時に</strong>成立する命題
                </p>
                <div className="mt-4 text-green-400 text-sm">
                  → 時間なし、静的
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
              <h3 className="text-purple-400 font-bold mb-3">
                💡 これが数学と物理の違い
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-blue-400 font-bold mb-2">物理学</div>
                  <p className="text-slate-300">
                    時間的プロセスを扱う<br />
                    「近づく」でOK
                  </p>
                </div>
                <div>
                  <div className="text-purple-400 font-bold mb-2">数学</div>
                  <p className="text-slate-300">
                    時間を排除した真理<br />
                    論理的命題が必要
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            順序の重要性 →
          </button>
        </div>
      )}

      {/* Step 4: まとめ */}
      {step === 4 && (
        <div className="animate-fadeIn text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-white mb-6">
            基礎の準備、完了！
          </h2>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              揃った道具
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-900/30 rounded-lg p-6">
                <div className="text-4xl mb-3">🔢</div>
                <div className="font-bold text-white mb-2">実数</div>
                <div className="text-slate-400 text-sm">
                  → 「任意のε」が言える
                </div>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-6">
                <div className="text-4xl mb-3">📊</div>
                <div className="font-bold text-white mb-2">集合</div>
                <div className="text-slate-400 text-sm">
                  → 「範囲内の全て」が言える
                </div>
              </div>
              <div className="bg-green-900/30 rounded-lg p-6">
                <div className="text-4xl mb-3">🧠</div>
                <div className="font-bold text-white mb-2">論理</div>
                <div className="text-slate-400 text-sm">
                  → 時間なしで表現できる
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-900/40 to-green-900/40 border-2 border-yellow-500/50 rounded-xl p-8">
              <h4 className="text-yellow-400 font-bold text-2xl mb-4">
                1861年、ついに...
              </h4>
              <p className="text-xl text-slate-300">
                ワイエルシュトラスがこれらの道具を使い、<br />
                <strong className="text-green-400 text-2xl">
                  完璧に厳密なε-δ論法
                </strong>
                を作り上げた！
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-bold py-6 px-16 rounded-xl text-2xl transition-all shadow-2xl transform hover:scale-105"
          >
            ✨ 第3章へ：ε-δ論法の誕生
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
