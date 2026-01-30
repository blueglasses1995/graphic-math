import { Tutorial } from '../types';

export const markovChainTutorial: Tutorial = {
  id: 'markov-chain',
  title: '【実践】マルコフ連鎖',
  description: '現在の状態だけで未来が決まる確率過程',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '天気の予測',
      content:
        '今日が晴れなら明日も晴れの確率は70%、雨の確率は30%。今日が雨なら明日晴れは40%、雨は60%。このように「現在の状態だけで次が決まる」のがマルコフ連鎖です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: 'マルコフ性',
      content:
        'マルコフ性（無記憶性）:\n\nP(Xₙ₊₁ | Xₙ, Xₙ₋₁, ..., X₀) = P(Xₙ₊₁ | Xₙ)\n\n未来は現在の状態のみに依存し、過去の経緯は関係しない。\n\n天気の例では、昨日の天気は明日の予測に影響しません（モデル上は）。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'transition',
      title: '遷移行列',
      content:
        '遷移確率を行列で表現:\n\n     晴→  雨→\n晴 [ 0.7  0.3 ]\n雨 [ 0.4  0.6 ]\n\nn日後の確率は: πₙ = π₀ × Pⁿ\n\n行列の累乗で将来の状態分布が計算できます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '遷移をシミュレーション',
      content:
        '遷移確率を変えて、状態の変化を観察しましょう。長い時間が経つと、ある定常分布に収束することが分かります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '上の天気モデルの定常分布で晴れの確率は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '定常分布での晴れの確率は？',
        options: [
          { id: 'a', label: '4/7 ≒ 0.571', correct: true },
          { id: 'b', label: '0.5', correct: false },
          { id: 'c', label: '0.7', correct: false },
          { id: 'd', label: '3/7 ≒ 0.429', correct: false },
        ],
        explanation:
          'π = πP を解くと: π晴 = 0.4/(0.3+0.4) = 4/7 ≒ 0.571。初期状態に関わらずこの比率に収束します。',
      },
    },
    {
      id: 'applications',
      title: '応用',
      content:
        'マルコフ連鎖の応用:\n\n• PageRank（Google検索のランキング）\n• 自然言語処理（テキスト生成）\n• 金融（株価モデル）\n• 生物学（DNA配列解析）\n• MCMC法（ベイズ推定）',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'マルコフ連鎖:\n\n• 現在の状態だけで次が決まる（マルコフ性）\n• 遷移行列で確率を記述\n• 定常分布に収束する場合が多い\n• 検索エンジンからAIまで幅広く応用\n\nシンプルなルールから豊かな振る舞いが生まれます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
