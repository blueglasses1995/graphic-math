import { Tutorial } from '../types';

export const inclusionExclusion3Tutorial: Tutorial = {
  id: 'inclusion-exclusion-3',
  title: '【実践】3つのベン図',
  description: '3つの集合での包除原理をマスターする',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '3つの円が重なる',
      content:
        '3つの円が重なり合い、8つの領域が生まれます。\n\n2つのときより複雑ですが、同じ原理で数えられます。\n\n足して、引いて、また足す ── 包除の交互パターンです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'inclusion-exclusion-3-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '8つの領域を探そう',
      content:
        '3つの円のベン図で、8つの領域それぞれに数を入れてみましょう。\n\nどの領域がどの集合に属するか、色で確認できます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'inclusion-exclusion-3-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-formula',
      title: '包除原理（3集合）',
      content:
        '|A ∪ B ∪ C| = |A| + |B| + |C|\n  - |A∩B| - |A∩C| - |B∩C|\n  + |A∩B∩C|\n\n足して、引いて、足す。交互のパターンです。\n\n2集合の重なりを引きすぎたので、3集合の重なりを足し戻します。',
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
      id: 'example-concrete',
      title: '具体例',
      content:
        '100人の学生: 数学50人, 物理35人, 化学30人\n数学∩物理=15, 数学∩化学=10, 物理∩化学=8\n3科目すべて=3人\n\n|A∪B∪C| = 50+35+30-15-10-8+3 = 85人\n\nどれも選ばない: 100 - 85 = 15人\n\n数学だけ: 50-15-10+3 = 28人\n物理だけ: 35-15-8+3 = 15人\n化学だけ: 30-10-8+3 = 15人',
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
      id: 'predict',
      title: '練習問題',
      content: '上の例で、ちょうど2科目だけ選んでいる人は何人？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ちょうど2科目の学生は何人？（数物15,数化10,物化8,全部3）',
        options: [
          { id: 'a', label: '24人', correct: true },
          { id: 'b', label: '27人', correct: false },
          { id: 'c', label: '33人', correct: false },
          { id: 'd', label: '30人', correct: false },
        ],
        explanation:
          '正解は24人です。\n\n「ちょうど2科目」= 2科目以上の重なりから3科目の重なりを除く\n= (15-3) + (10-3) + (8-3) = 12 + 7 + 5 = 24人',
      },
    },
    {
      id: 'alternate',
      title: '一般の包除原理',
      content:
        'n個の集合に拡張できます。\n\n|A₁ ∪ ... ∪ Aₙ| = Σ|Aᵢ| - Σ|Aᵢ∩Aⱼ| + Σ|Aᵢ∩Aⱼ∩Aₖ| - ...\n\n符号が交互に変わり、最後は (-1)ⁿ⁺¹|A₁∩...∩Aₙ| です。\n\nこのパターンは確率論、組合せ論、数論（オイラー関数）でも登場します。',
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
        '3つのベン図のポイント：\n\n・8つの排反な領域がある\n・包除原理: 足す→引く→足す\n・「ちょうどk個」の計算も可能\n・n個に一般化できる\n\n次は「条件で集合を作る」方法を実践します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'inclusion-exclusion-3-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
