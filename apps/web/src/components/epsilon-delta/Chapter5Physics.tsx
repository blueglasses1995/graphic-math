import { useState } from 'react';

interface Chapter5PhysicsProps {
  onComplete: () => void;
}

/**
 * 第5章: 物理法則への応用（伏線回収）
 *
 * 目標: ガリレオの問題に戻り、ε-δで厳密に解決
 * 時間: 15分
 */
export default function Chapter5Physics({ onComplete }: Chapter5PhysicsProps) {
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(2.0);
  const [epsilon, setEpsilon] = useState(0.5);
  const [delta, setDelta] = useState(0.05);
  const [testH, setTestH] = useState(0.03);

  const g = 9.8; // 重力加速度
  const s = (t: number) => 0.5 * g * t * t; // 位置
  const v = (t: number) => g * t; // 速度（微分）

  // 微分の定義: v(t) = lim[h→0] (s(t+h) - s(t)) / h
  const averageVelocity = (s(time + testH) - s(time)) / testH;
  const instantVelocity = v(time);
  const error = Math.abs(averageVelocity - instantVelocity);

  const isProofValid = delta <= epsilon / g; // v'(t) = g

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {step === 1 && (
        <div className="text-center animate-fadeIn">
          <div className="text-6xl mb-8">🔄</div>
          <h1 className="text-4xl font-bold text-white mb-6">
            🚀 第5章: 物理法則への応用
          </h1>
          <h2 className="text-3xl text-yellow-400 mb-8">
            伏線回収：ガリレオの問題に戻る
          </h2>

          <div className="bg-gradient-to-r from-amber-900/40 to-blue-900/40 border-2 border-yellow-500/50 rounded-2xl p-10 mb-8">
            <div className="text-4xl mb-4">🏛️</div>
            <p className="text-2xl text-slate-300 mb-4">
              1638年、ガリレオが問いかけた：
            </p>
            <blockquote className="text-3xl text-yellow-400 italic mb-6">
              「落下する石の、<br />
              今この瞬間の速さは？」
            </blockquote>
            <div className="text-xl text-slate-300">
              あなたは今、この問いに<br />
              <strong className="text-green-400 text-2xl">完璧に厳密な答え</strong>
              を持っている
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-bold py-6 px-16 rounded-xl text-2xl transition-all shadow-2xl transform hover:scale-105"
          >
            答えを示す →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            📐 瞬間速度の厳密な定義
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-6">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
              <h3 className="text-blue-400 font-bold mb-4 text-xl">
                微分の定義（ε-δ版）
              </h3>
              <div className="bg-slate-900 rounded-lg p-6 font-mono text-lg">
                <div className="mb-4">
                  v(t) = lim<sub>h→0</sub> (s(t+h) - s(t)) / h
                </div>
                <div className="text-slate-500 text-sm mb-4">↓ ε-δで厳密化すると</div>
                <div className="space-y-2 text-green-400">
                  <div>∀ε {'>'} 0, ∃δ {'>'} 0</div>
                  <div className="pl-4">
                    s.t. 0 {'<'} |h| {'<'} δ
                  </div>
                  <div className="pl-8">
                    ⇒ |(s(t+h) - s(t))/h - v(t)| {'<'} ε
                  </div>
                </div>
              </div>
            </div>

            {/* インタラクティブ証明 */}
            <div className="bg-slate-900 rounded-xl p-6">
              <h4 className="text-white font-bold mb-4">
                🧪 実験：t = {time}秒での瞬間速度を証明
              </h4>

              {/* 時刻選択 */}
              <div className="mb-6">
                <label className="text-slate-300 block mb-2">時刻 t</label>
                <input
                  type="range"
                  min="0.5"
                  max="3.5"
                  step="0.1"
                  value={time}
                  onChange={(e) => setTime(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-xl font-bold text-blue-400 mt-2">
                  t = {time.toFixed(1)} 秒
                </div>
              </div>

              {/* ε設定 */}
              <div className="mb-6">
                <label className="text-slate-300 block mb-2">
                  挑戦者のε（速度の許容誤差）
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="2.0"
                  step="0.1"
                  value={epsilon}
                  onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-xl font-bold text-red-400 mt-2">
                  ε = {epsilon.toFixed(1)} m/s
                </div>
              </div>

              {/* δ設定 */}
              <div className="mb-6">
                <label className="text-slate-300 block mb-2">
                  あなたのδ（時間の幅）
                </label>
                <input
                  type="range"
                  min="0.01"
                  max="0.5"
                  step="0.01"
                  value={delta}
                  onChange={(e) => setDelta(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-xl font-bold text-blue-400 mt-2">
                  δ = {delta.toFixed(2)} 秒
                </div>
              </div>

              {/* テスト */}
              <div className="mb-6">
                <label className="text-slate-300 block mb-2">
                  テスト：hをδ範囲内で選ぶ
                </label>
                <input
                  type="range"
                  min={-delta}
                  max={delta}
                  step="0.001"
                  value={testH}
                  onChange={(e) => setTestH(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-lg font-bold text-purple-400 mt-2">
                  h = {testH.toFixed(3)} 秒
                </div>
              </div>

              {/* 結果 */}
              <div
                className={`rounded-lg p-6 ${
                  error < epsilon
                    ? 'bg-green-900/50 border-2 border-green-500'
                    : 'bg-red-900/50 border-2 border-red-500'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <div className="text-slate-400">平均速度（計算値）</div>
                    <div className="text-2xl font-bold text-white">
                      {averageVelocity.toFixed(2)} m/s
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400">瞬間速度（真の値）</div>
                    <div className="text-2xl font-bold text-yellow-400">
                      {instantVelocity.toFixed(2)} m/s
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-slate-700">
                  <div className="text-slate-400 text-sm">誤差</div>
                  <div
                    className={`text-3xl font-bold ${
                      error < epsilon ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {error.toFixed(3)} m/s
                  </div>
                  <div className="mt-2">
                    {error < epsilon ? (
                      <span className="text-green-400 font-bold">
                        ✓ ε範囲内！証明成功
                      </span>
                    ) : (
                      <span className="text-red-400 font-bold">
                        ✗ ε範囲外...δを小さく
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {isProofValid && (
                <div className="mt-4 bg-green-900/30 border border-green-500/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎉</div>
                  <p className="text-green-400 font-bold">
                    δ = {delta} は有効！（δ ≤ ε/g = {(epsilon / g).toFixed(3)}）
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
            >
              次へ：ニュートンの法則 →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            ⚖️ ニュートンの第2法則
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 mb-6">
            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-purple-400 font-bold text-2xl mb-4 text-center">
                F = ma
              </h3>
              <div className="text-xl text-slate-300 space-y-4">
                <p>
                  <strong className="text-white">F</strong> = 力（ニュートン）
                </p>
                <p>
                  <strong className="text-white">m</strong> = 質量（kg）
                </p>
                <p>
                  <strong className="text-yellow-400">a = dv/dt</strong> ={' '}
                  <strong className="text-green-400">加速度</strong>
                </p>
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
              <h4 className="text-blue-400 font-bold mb-4">
                加速度の厳密な定義
              </h4>
              <div className="bg-slate-900 rounded-lg p-6 font-mono">
                <div className="text-white mb-4">
                  a(t) = dv/dt = lim<sub>Δt→0</sub> (v(t+Δt) - v(t)) / Δt
                </div>
                <div className="text-slate-500 text-sm mb-4">
                  ↓ ε-δで厳密化
                </div>
                <div className="text-green-400 text-sm">
                  ∀ε {'>'} 0, ∃δ {'>'} 0 s.t. 0 {'<'} |Δt| {'<'} δ
                  <br />⇒ |(v(t+Δt) - v(t))/Δt - a(t)| {'<'} ε
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
              <h4 className="text-green-400 font-bold mb-3">
                🎯 これで何が可能になったのか
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    <strong>厳密な物理法則：</strong>
                    「瞬間加速度」が数学的に定義できる
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    <strong>予測可能性：</strong>
                    ロケットの軌道を正確に計算できる
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    <strong>普遍的基盤：</strong>
                    すべての物理学がこの定義の上に成り立つ
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors"
            >
              最終ステップへ →
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6">🏆</div>
            <h1 className="text-5xl font-bold text-white mb-6">
              完璧！旅の完了
            </h1>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-blue-900 border-2 border-purple-500 rounded-2xl p-10 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              あなたが達成したこと
            </h2>

            <div className="space-y-6 text-lg text-slate-300">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🏛️</span>
                <div>
                  <strong className="text-yellow-400">1638年のガリレオの疑問</strong>
                  を理解した
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">📐</span>
                <div>
                  <strong className="text-blue-400">ε-δ論法</strong>
                  で極限を厳密に定義できるようになった
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">📈</span>
                <div>
                  1次、2次、3次関数で
                  <strong className="text-green-400">適切なδを見つける力</strong>
                  を身につけた
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">∂</span>
                <div>
                  微分と積分が
                  <strong className="text-purple-400">極限の応用</strong>
                  だと理解した
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">🚀</span>
                <div>
                  物理法則（F=ma）の数学的基盤が
                  <strong className="text-orange-400">ε-δ論法</strong>
                  だと知った
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/30 border border-amber-500/50 rounded-xl p-8 mb-8">
            <h3 className="text-amber-400 font-bold text-2xl mb-4 text-center">
              📜 350年の旅
            </h3>
            <div className="text-center text-slate-300">
              <p className="text-xl mb-4">
                1638年（ガリレオ）→ 1988年（あなた）
              </p>
              <p className="text-lg">
                350年間、数学者たちが追い求めた厳密さを、<br />
                あなたは70分で体験した。
              </p>
              <p className="text-yellow-400 font-bold mt-4 text-xl">
                おめでとうございます！
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onComplete}
              className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-500 hover:via-blue-500 hover:to-purple-500 text-white font-bold py-6 px-20 rounded-2xl text-2xl transition-all shadow-2xl transform hover:scale-105"
            >
              🎓 学習完了
            </button>
          </div>
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
