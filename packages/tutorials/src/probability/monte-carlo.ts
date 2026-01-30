import { Tutorial } from '../types';

export const monteCarloTutorial: Tutorial = {
  id: 'monte-carlo',
  title: '【実践】モンテカルロ法',
  description: '乱数で数学的な問題を解くモンテカルロ法',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '乱数で円周率を求める',
      content:
        '正方形の中にランダムに点を打ち、円の中に入った割合から円周率πを推定できます。こんな大胆な方法がモンテカルロ法です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'pi-estimation',
      title: 'πの推定',
      content:
        '1×1の正方形に半径1の四分円を描く:\n\n四分円の面積 = π/4\n正方形の面積 = 1\n\nランダムに点を打って:\nπ ≒ 4 × (円内の点の数 / 全点の数)\n\n点が多いほどπの推定は正確になります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'convergence',
      title: '収束速度',
      content:
        'モンテカルロ法の誤差は 1/√n のペースで減少します。\n\n• 100点: 精度 ≒ 1桁\n• 10000点: 精度 ≒ 2桁\n• 1000000点: 精度 ≒ 3桁\n\n精度を1桁上げるには100倍の点が必要。遅いですが、高次元でも使えるのが強みです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'πを推定しよう',
      content:
        '点の数を増やして、πの推定値がどう変化するか確認しましょう。点が増えるほど3.14159...に近づいていきます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'モンテカルロ法の精度を10倍にするには点の数を何倍にする？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '精度を10倍にするために必要な点の数は？',
        options: [
          { id: 'a', label: '10倍', correct: false },
          { id: 'b', label: '100倍', correct: true },
          { id: 'c', label: '1000倍', correct: false },
          { id: 'd', label: '√10倍', correct: false },
        ],
        explanation:
          '誤差は 1/√n に比例。精度を10倍にするには誤差を1/10にするので、n を100倍にする必要があります。',
      },
    },
    {
      id: 'applications',
      title: '応用分野',
      content:
        'モンテカルロ法の応用:\n\n• 金融: オプション価格の計算\n• 物理: 粒子シミュレーション\n• AI: 強化学習（モンテカルロ木探索）\n• 工学: 信頼性解析\n• 統計: ベイズ推定（MCMC）\n\n高次元の問題では解析的手法より効率的な場合があります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'モンテカルロ法:\n\n• 乱数で数値計算を行う手法\n• 誤差は 1/√n で減少\n• 高次元問題に強い（次元の呪いに強い）\n• 金融・物理・AIまで幅広く応用\n\n「ランダムが秩序を生む」不思議なアプローチです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
