import { useState } from 'react';

interface Phase5SymbolizationProps {
  onComplete: () => void;
}

interface SymbolMapping {
  experience: string;
  symbol: string;
  explanation: string;
  revealed: boolean;
}

/**
 * 段階5: 記号化フェーズ「数学者の言葉で表現」
 *
 * 目標：体験を数学記号に変換し、ε-δ論法の完全な定義を理解
 * 認知負荷：高（記号の導入、但し段階的開示で管理）
 * 歴史統合：ワイエルシュトラスの厳密化（1861年）
 */
export default function Phase5Symbolization({
  onComplete,
}: Phase5SymbolizationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  const symbolMappings: SymbolMapping[] = [
    {
      experience: '挑戦ゾーン',
      symbol: 'ε',
      explanation: 'イプシロン：どれくらい近ければOKかを表す正の数',
      revealed: false,
    },
    {
      experience: '安全地帯',
      symbol: 'δ',
      explanation: 'デルタ：εに対応するxの範囲を表す正の数',
      revealed: false,
    },
    {
      experience: 'どんな挑戦でも',
      symbol: '∀ε > 0',
      explanation: '全称量化子：任意の正の数εに対して',
      revealed: false,
    },
    {
      experience: '作戦がある',
      symbol: '∃δ > 0',
      explanation: '存在量化子：あるδ > 0が存在して',
      revealed: false,
    },
    {
      experience: 'x が安全地帯なら',
      symbol: '0 < |x - a| < δ',
      explanation: 'xがaにδより近い（ただしa自身は除く）',
      revealed: false,
    },
    {
      experience: '必ず成功',
      symbol: '|f(x) - L| < ε',
      explanation: 'f(x)がLにεより近い',
      revealed: false,
    },
  ];

  const [mappings, setMappings] = useState(symbolMappings);

  const revealNext = () => {
    if (currentStep < mappings.length) {
      setMappings((prev) =>
        prev.map((m, i) => (i === currentStep ? { ...m, revealed: true } : m))
      );
      setCurrentStep((prev) => prev + 1);
    }
  };

  const allRevealed = currentStep >= mappings.length;

  const historyTimeline = [
    {
      year: '1600年代',
      person: 'ニュートン・ライプニッツ',
      icon: '⚗️',
      contribution: '微分積分を発明',
      description: '「無限小」という曖昧な概念で計算。実用的だが論理的に不完全。',
      color: 'from-amber-900',
    },
    {
      year: '1734年',
      person: 'バークリー司教',
      icon: '⚠️',
      contribution: '批判「消えゆく量の亡霊」',
      description: '無限小の矛盾を指摘。数学の基礎が揺らぐ。',
      color: 'from-red-900',
    },
    {
      year: '1821年',
      person: 'コーシー',
      icon: '📝',
      contribution: '極限を言葉で定式化',
      description: '「限りなく近づく」を説明しようと試みたが、まだ厳密ではなかった。',
      color: 'from-blue-900',
    },
    {
      year: '1861年',
      person: 'ワイエルシュトラス',
      icon: '🎓',
      contribution: 'ε-δ論法の確立',
      description:
        '記号を使って完全に厳密な定義を作成。100年以上かかった数学の基礎を完成。',
      color: 'from-green-900',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          📐 ステップ5/5: 数学者の言葉で表現する
        </h1>
        <p className="text-xl text-slate-300 mb-4">
          今まで体験してきたことを、数学の記号で書いてみよう
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-amber-400 hover:text-amber-300 underline text-sm"
          >
            📜 なぜ100年もかかったのか？
          </button>
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="text-blue-400 hover:text-blue-300 underline text-sm"
          >
            ⏰ 歴史タイムラインを見る
          </button>
        </div>
      </div>

      {/* 歴史的背景 */}
      {showHistory && (
        <div className="bg-amber-900/30 border border-amber-500/50 rounded-2xl p-8 mb-8 animate-slideDown">
          <div className="flex items-start gap-6">
            <div className="text-6xl">🎓</div>
            <div className="flex-1">
              <h2 className="text-amber-400 font-bold text-2xl mb-4">
                1861年: ワイエルシュトラスの革命
              </h2>

              <div className="space-y-4 text-slate-300">
                <p>
                  カール・ワイエルシュトラスは、それまで曖昧だった「極限」の概念を、
                  <strong className="text-white">完全に記号化</strong>しました。
                </p>

                <div className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-amber-500">
                  <h4 className="text-amber-400 font-bold mb-2">なぜ時間がかかったのか？</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">1.</span>
                      <span>
                        <strong>直感と厳密さのギャップ：</strong>
                        「限りなく近づく」は直感的にわかるが、論理的に表現するのは極めて困難
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">2.</span>
                      <span>
                        <strong>量化子の順序：</strong>
                        「∀ε∃δ」の順序が重要と気づくまで時間がかかった
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">3.</span>
                      <span>
                        <strong>実数の定義：</strong>
                        そもそも実数が何かが明確でなかった（デデキント、カントールの貢献）
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm italic text-slate-400">
                  あなたが今5つのステップで学んだことを、数学の歴史は100年以上かけて構築したのです。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* タイムライン */}
      {showTimeline && (
        <div className="bg-slate-800 rounded-2xl p-8 mb-8 animate-slideDown">
          <h3 className="text-white font-bold text-2xl mb-6 text-center">
            📅 極限概念の歴史（250年の旅）
          </h3>
          <div className="relative">
            {/* タイムライン線 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-blue-500 to-green-500 transform -translate-x-1/2" />

            {/* イベント */}
            <div className="space-y-8">
              {historyTimeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${event.color} to-slate-900 border-2 border-slate-700 rounded-xl p-6 inline-block max-w-md animate-fadeIn`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{event.icon}</span>
                      <div>
                        <div className="text-slate-400 text-sm font-bold">
                          {event.year}
                        </div>
                        <div className="text-white font-bold">{event.person}</div>
                      </div>
                    </div>
                    <h4 className="text-yellow-400 font-bold mb-2">
                      {event.contribution}
                    </h4>
                    <p className="text-slate-300 text-sm">{event.description}</p>
                  </div>

                  {/* タイムライン上のドット */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-slate-900 z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* メイン：体験→記号の変換 */}
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 mb-8">
        <h3 className="text-white font-bold text-xl mb-6 text-center">
          🔄 あなたの体験 → 数学記号
        </h3>

        <div className="space-y-4 mb-8">
          {mappings.map((mapping, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                mapping.revealed ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div
                className={`border-2 rounded-xl p-6 ${
                  mapping.revealed
                    ? 'bg-blue-900/30 border-blue-500'
                    : 'bg-slate-900 border-slate-700'
                }`}
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* 体験 */}
                  <div className="text-center">
                    <div className="text-slate-400 text-sm mb-2">あなたの体験</div>
                    <div className="text-xl font-bold text-white">
                      {mapping.experience}
                    </div>
                  </div>

                  {/* 矢印 */}
                  <div className="text-center text-4xl text-blue-400">→</div>

                  {/* 記号 */}
                  <div className="text-center">
                    <div className="text-slate-400 text-sm mb-2">数学記号</div>
                    {mapping.revealed ? (
                      <div className="animate-scaleIn">
                        <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">
                          {mapping.symbol}
                        </div>
                        <div className="text-slate-300 text-sm">
                          {mapping.explanation}
                        </div>
                      </div>
                    ) : (
                      <div className="text-2xl text-slate-600">???</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 次へボタン */}
        {!allRevealed && (
          <div className="text-center">
            <button
              onClick={revealNext}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors shadow-lg hover:shadow-xl"
            >
              次の記号を見る ({currentStep + 1}/{mappings.length})
            </button>
          </div>
        )}
      </div>

      {/* 完全な定義 */}
      {allRevealed && (
        <div className="bg-gradient-to-br from-green-900 to-blue-900 border-2 border-green-500 rounded-2xl p-10 mb-8 animate-scaleIn">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-3xl font-bold text-white mb-2">
              完成！ε-δ論法の定義
            </h2>
            <p className="text-slate-300">
              これが100年以上かけて完成した、極限の厳密な定義です
            </p>
          </div>

          {/* 定義のボックス */}
          <div className="bg-slate-900 rounded-xl p-8 mb-6">
            <div className="text-center mb-6">
              <div className="text-slate-400 text-sm mb-2">
                lim<sub>x→a</sub> f(x) = L の定義
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 font-mono text-2xl text-center">
              <div className="text-green-400 mb-4">
                ∀ε &gt; 0,{' '}
                <span className="text-slate-500 text-sm">(どんな挑戦でも)</span>
              </div>
              <div className="text-blue-400 mb-4">
                ∃δ &gt; 0{' '}
                <span className="text-slate-500 text-sm">(作戦がある)</span>
              </div>
              <div className="text-yellow-400 mb-2">
                s.t. 0 &lt; |x - a| &lt; δ{' '}
                <span className="text-slate-500 text-sm">(安全地帯なら)</span>
              </div>
              <div className="text-4xl my-4">⇒</div>
              <div className="text-purple-400">
                |f(x) - L| &lt; ε{' '}
                <span className="text-slate-500 text-sm">(必ず成功)</span>
              </div>
            </div>
          </div>

          {/* 解説 */}
          <div className="bg-white/10 rounded-lg p-6">
            <h4 className="text-yellow-400 font-bold mb-3">この定義の美しさ</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>
                  <strong>後出しジャンケン：</strong>
                  ∀εが先、∃δが後（順序が重要！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>
                  <strong>曖昧さゼロ：</strong>
                  「限りなく」「近づく」などの曖昧な言葉を使わない
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>
                  <strong>構成的：</strong>
                  実際にδを計算できる（あなたが体験した通り）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>
                  <strong>普遍的：</strong>
                  この定義から連続性、微分、積分が全て導かれる
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* 完了ボタン */}
      {allRevealed && (
        <div className="text-center">
          <button
            onClick={onComplete}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-6 px-16 rounded-2xl text-2xl transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            🎉 学習完了！
          </button>
          <p className="text-slate-400 mt-4 text-sm">
            おめでとうございます！ε-δ論法を完全にマスターしました
          </p>
        </div>
      )}

      {/* 前提知識へのリンク */}
      <div className="mt-8 bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
        <h3 className="text-blue-400 font-bold mb-3">
          📚 さらに深く学ぶために
        </h3>
        <p className="text-slate-300 mb-4">
          ε-δ論法を完全に理解するための前提知識を学びましょう：
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="/tutorial/real-numbers"
            className="block bg-slate-800 hover:bg-slate-700 rounded-lg p-4 transition-colors"
          >
            <div className="text-2xl mb-2">🔢</div>
            <div className="font-bold text-white mb-1">実数とは何か</div>
            <div className="text-slate-400 text-sm">
              実数の性質、稠密性、完備性
            </div>
          </a>
          <a
            href="/tutorial/logic"
            className="block bg-slate-800 hover:bg-slate-700 rounded-lg p-4 transition-colors"
          >
            <div className="text-2xl mb-2">🧠</div>
            <div className="font-bold text-white mb-1">論理学の基礎</div>
            <div className="text-slate-400 text-sm">
              量化子、命題論理、証明の技法
            </div>
          </a>
          <a
            href="/tutorial/sets"
            className="block bg-slate-800 hover:bg-slate-700 rounded-lg p-4 transition-colors"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-bold text-white mb-1">集合論入門</div>
            <div className="text-slate-400 text-sm">
              集合、関数、近傍の概念
            </div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
