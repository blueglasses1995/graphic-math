import { useState } from 'react';
import PersonCard from './PersonCard';
import GlossaryPanel from './GlossaryPanel';
import SupplementPanel from './SupplementPanel';

interface PrologueProps {
  onComplete: () => void;
}

/**
 * 序章: ガリレオ〜ニュートンの時代
 *
 * 目標: 瞬間速度の問題とニュートンの「成功」を理解
 * 時間: 5分
 */
export default function Prologue({ onComplete }: PrologueProps) {
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
      {/* Step 1: ガリレオの問題 */}
      {step === 1 && (
        <div className="text-center animate-fadeIn">
          <div className="text-6xl mb-8">🏛️</div>
          <h1 className="text-5xl font-bold text-white mb-6">
            1638年、イタリア・ピサ
          </h1>
          <div className="text-2xl text-slate-300 mb-8">
            ガリレオ・ガリレイ（74歳）
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-amber-900/30 border border-amber-500/50 rounded-xl p-6 mb-6">
              <h3 className="text-amber-400 font-bold mb-3">ガリレオの人生</h3>
              <div className="text-slate-300 space-y-2 text-sm">
                <p>• ピサの斜塔での落下実験で有名</p>
                <p>• 「それでも地球は動く」で宗教裁判</p>
                <p>• 晩年、軟禁状態で著書『新科学対話』を執筆</p>
                <p className="text-yellow-400 font-bold">• そこで提起した問題が、200年後の数学を変えることに...</p>
              </div>
            </div>

            <div className="bg-blue-900/30 border-2 border-blue-500/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-blue-400 font-bold mb-4 text-xl">ガリレオの疑問</h3>
              <blockquote className="text-2xl text-slate-200 italic mb-4">
                「落下する石の、<br />
                <strong className="text-yellow-400 text-3xl">今この瞬間の速さ</strong>は<br />
                どうやって測るのか？」
              </blockquote>
              <p className="text-slate-400 text-sm">
                この問いは、当時の数学では答えられなかった。<br />
                なぜなら...
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors shadow-lg"
          >
            何が難しいのか？ →
          </button>
        </div>
      )}

      {/* Step 2: パラドックス */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            ⚠️ 瞬間速度のパラドックス
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="space-y-6">
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold mb-3">
                  速度の普通の定義
                </h3>
                <div className="text-xl text-slate-300 text-center">
                  速度 = 移動距離 ÷ かかった時間
                </div>
              </div>

              <div className="text-center text-2xl text-white">↓</div>

              <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6">
                <h3 className="text-red-400 font-bold mb-3 flex items-center justify-center">
                  <span className="text-2xl mr-2">💥</span>
                  「瞬間」では測れない！
                </h3>
                <div className="space-y-3 text-lg text-slate-300">
                  <p>
                    「瞬間」= 時間の幅がゼロ → Δt = 0
                  </p>
                  <p>
                    Δt = 0 なら距離も移動しない → Δs = 0
                  </p>
                  <p className="text-red-400 font-bold text-2xl">
                    速度 = 0 / 0 = <span className="text-4xl">???</span>
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
                <div className="text-center text-slate-300">
                  <p className="text-lg mb-2">でも実際には...</p>
                  <p className="text-2xl text-yellow-400 font-bold">
                    落ちている石は「速い」ことは分かる！
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            ニュートンの解決策 →
          </button>
        </div>
      )}

      {/* Step 3: ニュートンの成功 */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🍎</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              1687年、イギリス
            </h2>
            <h3 className="text-3xl text-green-400 font-bold">
              アイザック・ニュートン（44歳）
            </h3>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
              <h3 className="text-blue-400 font-bold mb-3">ニュートンの背景</h3>
              <div className="text-slate-300 space-y-2 text-sm">
                <p>• ケンブリッジ大学の数学教授</p>
                <p>• 1665年、ペスト流行中に田舎に避難</p>
                <p>• そこで「奇跡の年」：微積分、万有引力、光学を発見</p>
                <p>• 1687年『プリンキピア』出版 - 科学史上最も重要な本</p>
                <p className="text-yellow-400 font-bold">• しかし、彼自身も微積分の基礎が曖昧なことを知っていた...</p>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-green-400 font-bold text-2xl mb-4 text-center">
                ニュートンの解決：「流率法」
              </h3>
              <div className="bg-slate-900 rounded-lg p-6 mb-4">
                <div className="text-center space-y-3">
                  <div className="text-xl text-slate-400">瞬間速度の定義</div>
                  <div className="text-2xl text-white font-mono">
                    v = dy/dx = lim<sub>Δx→0</sub> Δy/Δx
                  </div>
                  <div className="text-slate-400 text-sm">
                    「Δx を限りなく小さく（でもゼロじゃない）していく」
                  </div>
                </div>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4">
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">ニュートンの天才性：</strong><br />
                  論理的には曖昧でも、<strong className="text-green-400">計算手順</strong>を作った。<br />
                  この手順が、物理の問題を次々と解いていく。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-900/50 border border-green-500 rounded-lg p-6">
                <h4 className="text-green-400 font-bold mb-3 text-xl">
                  ✓ 驚異的な成功
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• ケプラーの惑星運動の法則を導出</li>
                  <li>• 月の軌道を予測（誤差 1% 以下）</li>
                  <li>• 潮汐、彗星の軌道を説明</li>
                  <li>• <strong className="text-yellow-400">実験と完全に一致！</strong></li>
                </ul>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-6">
                <h4 className="text-yellow-400 font-bold mb-3 text-xl">
                  ⚠️ しかし問題も...
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• 「無限小」って何？数？ゼロ？</li>
                  <li>• 「限りなく」って、どこまで？</li>
                  <li>• ゼロで割っているのでは？</li>
                  <li>• <strong className="text-red-400">論理的な証明ができない</strong></li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
              <h4 className="text-purple-400 font-bold mb-3">
                💡 ニュートン自身の悩み
              </h4>
              <p className="text-slate-300 italic">
                「私の方法は実用的だが、厳密ではない。<br />
                いつか誰かが、より良い基礎を与えてくれるだろう」
              </p>
              <p className="text-slate-400 text-sm mt-2">
                - ニュートンの手紙より（推測的再構成）
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="block mx-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
          >
            そして批判が起こる... →
          </button>
        </div>
      )}

      {/* Step 4: 時間経過 */}
      {step === 4 && (
        <div className="animate-fadeIn text-center">
          <div className="text-6xl mb-8">⏳</div>
          <h2 className="text-4xl font-bold text-white mb-8">
            50年後...
          </h2>
          <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl p-12">
            <p className="text-2xl text-slate-300 mb-8">
              ニュートンの微積分は物理で大成功を収めていたが、<br />
              数学の厳密性という観点からは...<br />
              <strong className="text-red-400 text-3xl">問題だらけだった</strong>
            </p>
          </div>

          <button
            onClick={handleNext}
            className="mt-8 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors shadow-lg"
          >
            バークリー司教の批判 →
          </button>
        </div>
      )}

      {/* Step 5: 移行メッセージ */}
      {step === 5 && (
        <div className="animate-fadeIn text-center">
          <div className="text-6xl mb-8">📖</div>
          <h2 className="text-3xl font-bold text-white mb-6">
            第1章へ
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            バークリー司教の鋭い批判を見てみよう
          </p>
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold py-6 px-16 rounded-xl text-2xl transition-all shadow-2xl transform hover:scale-105"
          >
            第1章へ進む
          </button>
        </div>
      )}

      {/* 人物・用語集・補足（全ステップで表示） */}
      <div className="mt-12 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <PersonCard personId="galileo" inline={true} />
          <PersonCard personId="newton" inline={true} />
        </div>

        <GlossaryPanel termIds={['infinitesimal', 'fluxion', 'limit']} />

        <SupplementPanel contentIds={['why-not-earlier', 'physics-vs-math']} />
      </div>

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
