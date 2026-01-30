import { Tutorial } from '../types';

export const geometricDistTutorial: Tutorial = {
  id: 'geometric-dist',
  title: '幾何分布',
  description: '初めて成功するまでの回数を記述する幾何分布',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '何回目に当たる？',
      content:
        'くじ引きで当たりが出るまで引き続けます。何回目に初めて当たるでしょうか？このような「初めて成功するまでの試行回数」を記述するのが幾何分布です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'formula',
      title: '幾何分布の式',
      content:
        'X ~ Geo(p) のとき（k回目に初成功）:\n\nP(X = k) = (1-p)ᵏ⁻¹ × p\n\np: 1回の試行での成功確率\nk-1回失敗した後、k回目に成功する確率です。\n\n例: サイコロで6が出るまで → P(X=3) = (5/6)²×(1/6) ≒ 0.116',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'mean-var',
      title: '期待値と分散',
      content:
        'X ~ Geo(p) のとき:\n\n• E[X] = 1/p\n• Var(X) = (1-p)/p²\n\nサイコロで6を出すまでの平均回数: E = 1/(1/6) = 6回\n\n直感的にも納得できますね。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'シミュレーション',
      content:
        '成功確率pを変えて、初成功までの回数の分布を確認しましょう。pが小さいほど分布は右に広がり、待ち時間が長くなります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '当選確率10%のくじを引き続けるとき、5回以内に当たる確率は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'p=0.1で5回以内に当たる確率に最も近いのは？',
        options: [
          { id: 'a', label: '約 0.41', correct: true },
          { id: 'b', label: '約 0.50', correct: false },
          { id: 'c', label: '約 0.10', correct: false },
          { id: 'd', label: '約 0.90', correct: false },
        ],
        explanation:
          'P(X≤5) = 1 - P(X>5) = 1 - (0.9)⁵ = 1 - 0.590 ≒ 0.410。余事象で計算すると簡単です。',
      },
    },
    {
      id: 'memoryless',
      title: '無記憶性',
      content:
        '幾何分布には無記憶性があります:\n\nP(X > s+t | X > s) = P(X > t)\n\n「既に5回失敗した」という情報は、今後の確率に影響しません。各試行が独立であることの帰結です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '幾何分布 Geo(p) のポイント:\n\n• P(X=k) = (1-p)ᵏ⁻¹p\n• E[X] = 1/p\n• 初めて成功するまでの試行回数\n• 無記憶性を持つ唯一の離散分布\n\n待ち行列や信頼性工学で重要な分布です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
