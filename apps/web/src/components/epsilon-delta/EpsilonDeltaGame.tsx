import { useState } from 'react';

interface FunctionConfig {
  name: string;
  f: (x: number) => number;
  derivative: (x: number) => number;
  a: number; // 極限を取る点
  L: number; // 極限値
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  hint: string;
}

interface EpsilonDeltaGameProps {
  config: FunctionConfig;
  onComplete: () => void;
}

/**
 * 汎用的なε-δゲームコンポーネント
 *
 * 任意の関数に対応可能
 */
export default function EpsilonDeltaGame({
  config,
  onComplete,
}: EpsilonDeltaGameProps) {
  const [epsilon, setEpsilon] = useState(0.4);
  const [delta, setDelta] = useState(0.2);
  const [testX, setTestX] = useState(config.a - 0.1);
  const [isTestMode, setIsTestMode] = useState(false);
  const [successCount, setSuccessCount] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const { f, derivative, a, L, xMin, xMax, yMin, yMax } = config;

  // テスト位置での関数値
  const testY = f(testX);

  // δの範囲内か（絶対値：両側）
  const isInDeltaRange = Math.abs(testX - a) < delta && testX !== a;

  // y がε範囲内か
  const isInEpsilonRange = Math.abs(testY - L) < epsilon;

  // 最適なδ（微分係数から計算）
  const slope = Math.abs(derivative(a));
  const optimalDelta = epsilon / slope;
  const isValidDelta = delta <= optimalDelta * 1.1; // 10%の余裕

  const handleTest = () => {
    setIsTestMode(true);

    // ランダムなx位置でテスト（δ範囲内）
    const randomOffset = (Math.random() - 0.5) * delta * 1.8;
    const randomX = a + randomOffset;
    setTestX(randomX);

    setTimeout(() => {
      if (isInDeltaRange && isInEpsilonRange) {
        setSuccessCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            setTimeout(() => {
              onComplete();
            }, 2000);
          }
          return newCount;
        });
      }
    }, 500);
  };

  const handleNewChallenge = () => {
    const newEpsilon = parseFloat((Math.max(0.1, Math.random() * 0.6)).toFixed(2));
    setEpsilon(newEpsilon);
    setDelta(parseFloat((newEpsilon / slope / 2).toFixed(2)));
    setIsTestMode(false);
  };

  // 座標変換関数
  const toScreenX = (x: number) => {
    return 8 + ((x - xMin) / (xMax - xMin)) * (100 - 16);
  };

  const toScreenY = (y: number) => {
    return 8 + ((y - yMin) / (yMax - yMin)) * (100 - 16);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          {config.name}
        </h1>
        <p className="text-2xl text-slate-300 mb-2">
          目標：lim<sub>x→{a}</sub> f(x) = {L} を証明
        </p>
        <p className="text-sm text-yellow-400 font-bold">
          ⚡ |x - {a}| {'<'} δ ⇒ |f(x) - {L}| {'<'} ε
        </p>
      </div>

      {/* 現在の挑戦 */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-red-400 font-bold">👤 挑戦者の要求</h4>
            <span className="text-2xl font-bold text-red-400">ε = {epsilon}</span>
          </div>
          <p className="text-slate-300 text-sm">
            |y - {L}| {'<'} {epsilon} に入ればOK
          </p>
        </div>

        <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-blue-400 font-bold">🛡️ あなたの作戦</h4>
            <span className="text-2xl font-bold text-blue-400">δ = {delta}</span>
          </div>
          <p className="text-slate-300 text-sm">
            |x - {a}| {'<'} {delta} に保つ（両側！）
          </p>
        </div>
      </div>

      {/* メイングラフ */}
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 mb-6">
        <div
          className="relative bg-slate-900 rounded-xl p-8 mb-6"
          style={{ height: '500px' }}
        >
          {/* Y軸 */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-600" />
          {/* X軸 */}
          <div className="absolute left-8 right-8 bottom-8 h-0.5 bg-slate-600" />

          {/* 軸ラベル */}
          <div className="absolute left-2 top-8 text-slate-400 text-xs">{yMax}</div>
          <div className="absolute left-2 top-1/2 text-slate-400 text-xs">
            {(yMin + yMax) / 2}
          </div>
          <div className="absolute left-2 bottom-8 text-slate-400 text-xs">{yMin}</div>
          <div className="absolute left-8 bottom-2 text-slate-400 text-xs">{xMin}</div>
          <div className="absolute right-8 bottom-2 text-slate-400 text-xs">{xMax}</div>

          {/* 関数曲線 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d={(() => {
                const points = [];
                for (let x = xMin; x <= xMax; x += 0.05) {
                  const y = f(x);
                  if (y >= yMin && y <= yMax) {
                    points.push(
                      `${toScreenX(x)},${100 - toScreenY(y)}`
                    );
                  }
                }
                return `M ${points.join(' L ')}`;
              })()}
              stroke="#94a3b8"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
              opacity="0.8"
            />
          </svg>

          {/* ε帯（Y軸方向） */}
          <div
            className="absolute left-8 right-8 bg-red-500/10 border-t-2 border-b-2 border-red-500 transition-all"
            style={{
              bottom: `${toScreenY(L - epsilon)}%`,
              height: `${toScreenY(L + epsilon) - toScreenY(L - epsilon)}%`,
            }}
          >
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-400 text-xs font-bold">
              挑戦ゾーン →<br />
              |y-{L}|{'<'}{epsilon}
            </div>
          </div>

          {/* δ帯（X軸方向）- 両側性を強調 */}
          <div
            className="absolute top-8 bottom-8 bg-blue-500/10 border-l-2 border-r-2 border-blue-500 transition-all"
            style={{
              left: `${toScreenX(a - delta)}%`,
              width: `${toScreenX(a + delta) - toScreenX(a - delta)}%`,
            }}
          >
            {/* 左側のδ */}
            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 text-blue-400 text-xs font-bold whitespace-nowrap pr-2">
              ← δ
            </div>
            {/* 中央 */}
            <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-blue-400 text-xs font-bold whitespace-nowrap">
              安全地帯<br />|x-{a}|{'<'}{delta}
            </div>
            {/* 右側のδ */}
            <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 text-blue-400 text-xs font-bold whitespace-nowrap pl-2">
              δ →
            </div>
          </div>

          {/* ゴール（必ず関数線上、両帯の中心） */}
          <div
            className="absolute w-8 h-8 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 z-10 animate-pulse border-4 border-yellow-600"
            style={{
              left: `${toScreenX(a)}%`,
              bottom: `${toScreenY(L)}%`,
              transform: 'translate(-50%, 50%)',
            }}
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-yellow-400 text-sm font-bold text-center">
              ⭐ ゴール<br />({a}, {L})
            </div>
          </div>

          {/* テスト位置 */}
          {isTestMode && (
            <div
              className={`absolute w-6 h-6 rounded-full transition-all duration-500 z-20 ${
                isInEpsilonRange
                  ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-bounce'
                  : 'bg-red-400 shadow-lg shadow-red-400/50'
              }`}
              style={{
                left: `${toScreenX(testX)}%`,
                bottom: `${toScreenY(testY)}%`,
                transform: 'translate(-50%, 50%)',
              }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-bold">
                テスト
              </div>
            </div>
          )}
        </div>

        {/* δコントロール */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <label className="text-white font-medium">
              🛡️ δ（安全地帯の幅）を決める
            </label>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-blue-400">δ = {delta}</span>
              {isValidDelta ? (
                <span className="text-green-400 text-sm font-bold">✓ 良い作戦！</span>
              ) : (
                <span className="text-yellow-400 text-sm font-bold">
                  ⚠ δ ≤ {optimalDelta.toFixed(3)} 推奨
                </span>
              )}
            </div>
          </div>

          <input
            type="range"
            min="0.01"
            max={epsilon}
            step="0.01"
            value={delta}
            onChange={(e) => {
              setDelta(parseFloat(e.target.value));
              setIsTestMode(false);
            }}
            className="w-full h-4 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-blue"
          />

          <div className="flex justify-between text-xs text-slate-400">
            <span>↑ 狭い（確実だが厳しい）</span>
            <span className="text-yellow-400">← 最適: δ ≈ ε/{slope}</span>
            <span>広い（楽だが危険）↑</span>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex gap-4">
          <button
            onClick={handleTest}
            disabled={!isValidDelta}
            className={`flex-1 font-bold py-4 px-6 rounded-lg transition-all ${
              isValidDelta
                ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            ⚔️ 作戦をテストする
          </button>

          <button
            onClick={handleNewChallenge}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-colors"
          >
            🔄 新しいε
          </button>

          <button
            onClick={() => setShowHint(!showHint)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
          >
            💡
          </button>
        </div>

        {/* テスト結果 */}
        {isTestMode && (
          <div
            className={`mt-6 rounded-lg p-6 animate-slideUp ${
              isInEpsilonRange
                ? 'bg-green-900/50 border-2 border-green-500'
                : 'bg-red-900/50 border-2 border-red-500'
            }`}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">{isInEpsilonRange ? '✅' : '❌'}</div>
              <h3
                className={`text-2xl font-bold ${
                  isInEpsilonRange ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {isInEpsilonRange ? '成功！' : '失敗...'}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-900 rounded p-3">
                <div className="text-slate-400">テストx:</div>
                <div className="text-white font-bold">{testX.toFixed(3)}</div>
                <div className="text-slate-500 text-xs">
                  |x - {a}| = {Math.abs(testX - a).toFixed(3)}
                </div>
              </div>
              <div className="bg-slate-900 rounded p-3">
                <div className="text-slate-400">結果y:</div>
                <div className="text-white font-bold">{testY.toFixed(3)}</div>
                <div className="text-slate-500 text-xs">
                  |y - {L}| = {Math.abs(testY - L).toFixed(3)}
                </div>
              </div>
              <div
                className={`col-span-2 p-3 rounded ${
                  Math.abs(testX - a) < delta ? 'bg-blue-900/50' : 'bg-slate-900'
                }`}
              >
                <div className="text-slate-400 text-xs">x はδ範囲内？</div>
                <div className="font-bold">
                  {Math.abs(testX - a).toFixed(3)} {'<'} {delta}:{' '}
                  {Math.abs(testX - a) < delta ? '✓ はい' : '✗ いいえ'}
                </div>
              </div>
              <div
                className={`col-span-2 p-3 rounded ${
                  isInEpsilonRange ? 'bg-green-900/50' : 'bg-red-900/50'
                }`}
              >
                <div className="text-slate-400 text-xs">y はε範囲内？</div>
                <div className="font-bold">
                  {Math.abs(testY - L).toFixed(3)} {'<'} {epsilon}:{' '}
                  {isInEpsilonRange ? '✓ はい' : '✗ いいえ'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ヒント */}
        {showHint && (
          <div className="mt-6 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-6 animate-slideDown">
            <h4 className="text-yellow-400 font-bold mb-3">💡 {config.hint}</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>
                点 x = {a} での微分係数（傾き）: <strong>{slope}</strong>
              </p>
              <p>
                最適なδ: <strong>ε / {slope} ≈ {optimalDelta.toFixed(3)}</strong>
              </p>
              <p className="text-yellow-400 font-bold">
                傾きが大きいほど、δは小さく必要！
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 進捗 */}
      {successCount > 0 && (
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="text-center">
            <p className="text-slate-400 mb-2">成功回数</p>
            <div className="flex justify-center gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all ${
                    i <= successCount ? 'bg-green-400 scale-125' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            {successCount >= 3 && (
              <p className="text-green-400 font-bold mt-4 animate-pulse">
                完璧！次の章へ...
              </p>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
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
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .slider-blue::-webkit-slider-thumb {
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          cursor: pointer;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
          transition: all 0.2s;
        }

        .slider-blue::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.9);
        }
      `}</style>
    </div>
  );
}
