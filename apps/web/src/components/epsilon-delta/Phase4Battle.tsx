import { useState, useEffect } from 'react';

interface Phase4BattleProps {
  onComplete: () => void;
}

interface Round {
  roundNumber: number;
  epsilon: number;
  delta: number | null;
  result: 'pending' | 'success' | 'failure';
}

/**
 * 段階4: 対戦フェーズ「ε-δバトル」
 *
 * 目標：リアルタイムで対戦形式で理解を深める
 * 認知負荷：中〜高（全体の流れを統合）
 * ゲーム性：連続5ラウンドで緊張感を演出
 */
export default function Phase4Battle({ onComplete }: Phase4BattleProps) {
  const [currentRound, setCurrentRound] = useState(1);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [epsilon, setEpsilon] = useState(0.3);
  const [delta, setDelta] = useState(0.15);
  const [isCalculating, setIsCalculating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [score, setScore] = useState({ player: 0, challenger: 0 });
  const [showVictory, setShowVictory] = useState(false);

  const totalRounds = 5;
  const targetX = 3.0;
  const targetY = 6.0;
  const f = (x: number) => 2 * x;

  // 新しいラウンド開始
  const startNewRound = () => {
    // ランダムなεを生成（段々難しくなる）
    const difficulty = currentRound / totalRounds;
    const newEpsilon = parseFloat((0.5 - difficulty * 0.4).toFixed(2));
    setEpsilon(newEpsilon);

    // 自動でδを計算（または手動）
    if (autoPlay) {
      setTimeout(() => {
        calculateDelta(newEpsilon);
      }, 1000);
    }
  };

  // δを計算して判定
  const calculateDelta = (currentEpsilon: number) => {
    setIsCalculating(true);

    setTimeout(() => {
      // f(x) = 2x なので δ = ε/2 が最適
      const calculatedDelta = currentEpsilon / 2;
      setDelta(calculatedDelta);

      // テスト実行
      setTimeout(() => {
        testStrategy(currentEpsilon, calculatedDelta);
      }, 500);
    }, 800);
  };

  // 戦略をテスト
  const testStrategy = (eps: number, dlt: number) => {
    // ランダムに10個のxをテスト
    let allSuccess = true;
    for (let i = 0; i < 10; i++) {
      const testX = targetX + (Math.random() - 0.5) * dlt * 1.9;
      const testY = f(testX);
      const yDistance = Math.abs(testY - targetY);

      if (
        Math.abs(testX - targetX) < dlt &&
        testX !== targetX &&
        yDistance >= eps
      ) {
        allSuccess = false;
        break;
      }
    }

    const result: Round = {
      roundNumber: currentRound,
      epsilon: eps,
      delta: dlt,
      result: allSuccess && dlt <= eps / 2 ? 'success' : 'failure',
    };

    setRounds((prev) => [...prev, result]);

    if (result.result === 'success') {
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else {
      setScore((prev) => ({ ...prev, challenger: prev.challenger + 1 }));
    }

    setIsCalculating(false);

    // 次のラウンドへ
    if (currentRound < totalRounds) {
      setTimeout(() => {
        setCurrentRound((prev) => prev + 1);
      }, 2000);
    } else {
      // 完了
      setTimeout(() => {
        if (score.player >= 3) {
          setShowVictory(true);
          setTimeout(() => {
            onComplete();
          }, 3000);
        }
      }, 1500);
    }
  };

  // ラウンド開始時
  useEffect(() => {
    if (currentRound <= totalRounds && rounds.length < currentRound) {
      startNewRound();
    }
  }, [currentRound]);

  const handleManualDefend = () => {
    if (!isCalculating) {
      calculateDelta(epsilon);
    }
  };

  const currentRoundData = rounds[currentRound - 1];

  return (
    <div className="max-w-5xl mx-auto">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          ⚔️ ステップ4/5: ε-δバトル
        </h1>
        <p className="text-xl text-slate-300 mb-4">
          挑戦者と5ラウンド対戦！3勝で次のステップへ
        </p>

        {/* スコアボード */}
        <div className="inline-flex items-center gap-8 bg-slate-800 rounded-full px-8 py-4 shadow-lg">
          <div className="text-center">
            <div className="text-blue-400 font-bold text-sm mb-1">あなた</div>
            <div className="text-4xl font-bold text-blue-400">{score.player}</div>
          </div>
          <div className="text-3xl text-slate-500">VS</div>
          <div className="text-center">
            <div className="text-red-400 font-bold text-sm mb-1">挑戦者</div>
            <div className="text-4xl font-bold text-red-400">
              {score.challenger}
            </div>
          </div>
        </div>
      </div>

      {/* ラウンド表示 */}
      <div className="text-center mb-6">
        <div className="inline-block bg-purple-900/50 border-2 border-purple-500 rounded-lg px-6 py-3">
          <span className="text-purple-400 font-bold text-lg">
            ラウンド {currentRound} / {totalRounds}
          </span>
        </div>
      </div>

      {/* メインバトルエリア */}
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 mb-6">
        {/* 挑戦者の攻撃 */}
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border-2 border-red-500 rounded-xl p-6 mb-6 animate-pulse-slow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">😈</div>
              <div>
                <h3 className="text-red-400 font-bold text-2xl mb-1">
                  挑戦者の攻撃！
                </h3>
                <p className="text-slate-300">
                  「<span className="text-red-400 font-bold text-xl">ε = {epsilon}</span>」
                  で挑戦してきた！
                </p>
              </div>
            </div>
            <div className="text-6xl font-bold text-red-400 tabular-nums">
              {epsilon}
            </div>
          </div>
        </div>

        {/* あなたの防御 */}
        <div
          className={`border-2 rounded-xl p-6 mb-6 transition-all ${
            isCalculating
              ? 'bg-blue-900/20 border-blue-500 animate-pulse'
              : currentRoundData?.result === 'success'
              ? 'bg-green-900/40 border-green-500'
              : currentRoundData?.result === 'failure'
              ? 'bg-red-900/40 border-red-500'
              : 'bg-slate-900/40 border-slate-600'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🛡️</div>
              <div>
                <h3 className="text-blue-400 font-bold text-2xl mb-1">
                  あなたの防御
                </h3>
                {isCalculating ? (
                  <p className="text-yellow-400 animate-pulse">計算中...</p>
                ) : (
                  <p className="text-slate-300">
                    「<span className="text-blue-400 font-bold text-xl">δ = {delta}</span>」
                    で防御！
                  </p>
                )}
              </div>
            </div>
            <div className="text-6xl font-bold text-blue-400 tabular-nums">
              {isCalculating ? '...' : delta}
            </div>
          </div>

          {!autoPlay && !currentRoundData && !isCalculating && (
            <button
              onClick={handleManualDefend}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors"
            >
              ⚔️ 防御する
            </button>
          )}
        </div>

        {/* ビジュアライゼーション */}
        <div className="relative bg-slate-900 rounded-xl p-8 mb-6" style={{ height: '350px' }}>
          {/* 軸 */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-600" />
          <div className="absolute left-8 right-8 bottom-8 h-0.5 bg-slate-600" />

          {/* ε帯 */}
          <div
            className="absolute left-8 right-8 bg-red-500/20 border-t-2 border-b-2 border-red-500"
            style={{
              bottom: `${((targetY - epsilon) / 8) * 100}%`,
              height: `${((epsilon * 2) / 8) * 100}%`,
            }}
          >
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-400 text-sm font-bold">
              攻撃ゾーン →
            </div>
          </div>

          {/* δ帯 */}
          {delta && (
            <div
              className={`absolute top-8 bottom-8 border-l-2 border-r-2 transition-all ${
                currentRoundData?.result === 'success'
                  ? 'bg-green-500/20 border-green-500'
                  : currentRoundData?.result === 'failure'
                  ? 'bg-red-500/20 border-red-500'
                  : 'bg-blue-500/20 border-blue-500'
              }`}
              style={{
                left: `${8 + ((targetX - delta) / 4) * (100 - 16)}%`,
                width: `${((delta * 2) / 4) * (100 - 16)}%`,
              }}
            >
              <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-blue-400 text-sm font-bold whitespace-nowrap">
                ↑ 防御ゾーン
              </div>
            </div>
          )}

          {/* ゴール */}
          <div
            className="absolute w-6 h-6 bg-yellow-400 rounded-full shadow-lg z-10 animate-pulse"
            style={{
              left: `${8 + (targetX / 4) * (100 - 16)}%`,
              bottom: `${8 + (targetY / 8) * (100 - 16)}%`,
              transform: 'translate(-50%, 50%)',
            }}
          />
        </div>

        {/* 結果表示 */}
        {currentRoundData && (
          <div
            className={`rounded-xl p-8 text-center animate-scaleIn ${
              currentRoundData.result === 'success'
                ? 'bg-green-900/50 border-2 border-green-500'
                : 'bg-red-900/50 border-2 border-red-500'
            }`}
          >
            <div className="text-6xl mb-4">
              {currentRoundData.result === 'success' ? '✅' : '❌'}
            </div>
            <h3
              className={`text-3xl font-bold mb-2 ${
                currentRoundData.result === 'success'
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {currentRoundData.result === 'success' ? '防御成功！' : '防御失敗...'}
            </h3>
            <p className="text-slate-300 text-lg">
              {currentRoundData.result === 'success'
                ? `δ = ${currentRoundData.delta} で全てのxに対応できた！`
                : 'δが大きすぎた...'}
            </p>
          </div>
        )}
      </div>

      {/* ラウンド履歴 */}
      <div className="bg-slate-800 rounded-xl p-6 mb-6">
        <h3 className="text-white font-bold mb-4">📊 対戦履歴</h3>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((roundNum) => {
            const roundData = rounds.find((r) => r.roundNumber === roundNum);
            return (
              <div
                key={roundNum}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  roundNum === currentRound
                    ? 'bg-blue-900/50 border-2 border-blue-500'
                    : roundData
                    ? roundData.result === 'success'
                      ? 'bg-green-900/30'
                      : 'bg-red-900/30'
                    : 'bg-slate-900/50'
                }`}
              >
                <span className="text-slate-400 font-medium">
                  ラウンド {roundNum}
                </span>
                {roundData ? (
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300 text-sm">
                      ε={roundData.epsilon} → δ={roundData.delta}
                    </span>
                    <span className="text-xl">
                      {roundData.result === 'success' ? '✅' : '❌'}
                    </span>
                  </div>
                ) : roundNum === currentRound ? (
                  <span className="text-yellow-400 text-sm animate-pulse">
                    進行中...
                  </span>
                ) : (
                  <span className="text-slate-600 text-sm">未プレイ</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* モード切替 */}
      <div className="bg-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold mb-1">自動モード</h4>
            <p className="text-slate-400 text-sm">
              AIが自動的に最適なδを計算します
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoPlay}
              onChange={(e) => setAutoPlay(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* 勝利画面 */}
      {showVictory && score.player >= 3 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-yellow-500 via-green-500 to-blue-500 rounded-3xl p-16 shadow-2xl animate-scaleIn text-center max-w-2xl">
            <div className="text-8xl mb-6">🏆</div>
            <h2 className="text-5xl font-bold text-white mb-4">完全勝利！</h2>
            <p className="text-2xl text-white/90 mb-6">
              ε-δの対戦を制覇した！
            </p>
            <div className="bg-white/20 rounded-xl p-6">
              <p className="text-white text-lg">
                あなたは挑戦者がどんなεを出しても、<br />
                適切なδで対応できることを証明しました。
                <br />
                <strong className="text-yellow-200">
                  これが極限の存在証明です！
                </strong>
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
