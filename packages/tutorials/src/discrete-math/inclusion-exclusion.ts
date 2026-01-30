import { Tutorial } from '../types';

export const inclusionExclusionTutorial: Tutorial = {
  id: 'inclusion-exclusion',
  title: '包除原理',
  description: '重複を正しく除いて数える方法を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '重複を数えてしまう問題',
      content:
        'クラスで数学が好きな人が20人、理科が好きな人が15人います。\n\n数学または理科が好きな人は何人でしょうか？\n\n20 + 15 = 35 ではありません。両方好きな人を2回数えてしまっているからです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'two-sets',
      title: '2集合の場合',
      content:
        '2つの集合の和集合の大きさ：\n\n|A ∪ B| = |A| + |B| - |A ∩ B|\n\n重複部分（共通部分）を1回引くことで修正します。\n\n例：数学好き20人、理科好き15人、両方好き8人\n→ 20 + 15 - 8 = 27人',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'three-sets',
      title: '3集合の場合',
      content:
        '3つの集合になると少し複雑です：\n\n|A ∪ B ∪ C| = |A| + |B| + |C|\n  - |A∩B| - |A∩C| - |B∩C|\n  + |A∩B∩C|\n\n足して、引いて、また足す。\n「包除」の名前は「含めて（inclusion）、除いて（exclusion）」から来ています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'general',
      title: '一般の包除原理',
      content:
        'n個の集合の場合：\n\n|A₁ ∪ ... ∪ Aₙ| = Σ|Aᵢ| - Σ|Aᵢ∩Aⱼ| + Σ|Aᵢ∩Aⱼ∩Aₖ| - ...\n\n奇数個の交差は足し、偶数個の交差は引きます。\n\n項の数は 2^n - 1 個になるため、集合が多いと計算量が爆発します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '包除原理を使って計算しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1〜100で3の倍数または5の倍数はいくつ？',
        options: [
          { id: 'a', label: '33 + 20 = 53', correct: false },
          { id: 'b', label: '33 + 20 - 6 = 47', correct: true },
          { id: 'c', label: '33 + 20 - 15 = 38', correct: false },
          { id: 'd', label: '33 × 20 = 660', correct: false },
        ],
        explanation:
          '正解は47です。3の倍数は33個、5の倍数は20個、15の倍数（両方）は6個。包除原理より 33 + 20 - 6 = 47 です。',
      },
    },
    {
      id: 'derangement',
      title: '完全順列（攪乱順列）',
      content:
        '包除原理の有名な応用：完全順列（derangement）\n\nn人がプレゼント交換で、誰も自分のプレゼントを受け取らない方法の数は？\n\nD(n) = n! × Σ(-1)^k / k!（k=0からn）\n\nD(n)/n! は nが大きくなると 1/e ≈ 0.368 に収束します。\n\n約37%の確率で誰も自分のものを引かないのです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '・包除原理：重複を正しく除いて数える\n・2集合：|A∪B| = |A| + |B| - |A∩B|\n・一般化：奇数交差は+、偶数交差は-\n・完全順列への応用\n\n「数えすぎたら引き、引きすぎたら足す」── この単純な原理は組合せ論の柱です。\n\n次は、命題論理を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
