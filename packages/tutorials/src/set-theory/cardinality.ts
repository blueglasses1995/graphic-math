import { Tutorial } from '../types';

export const cardinalityTutorial: Tutorial = {
  id: 'cardinality',
  title: '【実践】集合のカーディナリティ',
  description: '集合の大きさ（濃度）を比較する方法を実践的に学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '大きさを比べる',
      content:
        '様々な集合が並んでいます。\n\n有限集合なら数えれば比較できます。でも無限集合は？\n\n「全単射が作れるか」── それが無限の大きさを比べる唯一の方法です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '対応をつけてみよう',
      content:
        '2つの集合の間に線を引いて、全単射を作ってみましょう。\n\n全単射が作れれば「同じ大きさ」です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-cardinal',
      title: 'カーディナリティの定義',
      content:
        '集合Aのカーディナリティ |A| は、Aの「大きさ」を表す概念です。\n\n|A| = |B| ⟺ A から B への全単射が存在\n|A| ≤ |B| ⟺ A から B への単射が存在\n|A| < |B| ⟺ 単射は存在するが全単射は存在しない\n\n重要な結果（カントール＝ベルンシュタインの定理）：\n|A| ≤ |B| かつ |B| ≤ |A| ならば |A| = |B|',
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
      id: 'example-hierarchy',
      title: '濃度の階層',
      content:
        '主な濃度の階層：\n\n0 < 1 < 2 < ... < ℵ₀ < 2^ℵ₀ < 2^(2^ℵ₀) < ...\n\n具体例：\n|∅| = 0\n|{a}| = 1\n|ℕ| = |ℤ| = |ℚ| = ℵ₀\n|ℝ| = |P(ℕ)| = 2^ℵ₀ = 𝔠\n|P(ℝ)| = 2^𝔠\n\n有理数と自然数が同じ大きさ、実数は厳密に大きい。\nこれが集合論の最も驚くべき結果の一つです。',
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
      content: '次の集合を濃度の小さい順に並べると？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '濃度が最も大きいのはどれ？',
        options: [
          { id: 'a', label: '自然数 ℕ', correct: false },
          { id: 'b', label: '有理数 ℚ', correct: false },
          { id: 'c', label: '実数 ℝ', correct: false },
          { id: 'd', label: 'ℝ の冪集合 P(ℝ)', correct: true },
        ],
        explanation:
          '正解は P(ℝ) です。\n\n|ℕ| = |ℚ| = ℵ₀ < |ℝ| = 2^ℵ₀ < |P(ℝ)| = 2^(2^ℵ₀)\n\nカントールの定理: |A| < |P(A)| が常に成り立つので、P(ℝ) が最大です。',
      },
    },
    {
      id: 'alternate',
      title: 'シュレーダー＝ベルンシュタインの定理',
      content:
        '2つの集合の濃度を比較する実践的な方法：\n\nA → B の単射と B → A の単射が両方あれば |A| = |B|\n\n例: (0,1) と ℝ が同じ濃度であることの証明\n・(0,1) → ℝ: f(x) = x（恒等写像、単射）\n・ℝ → (0,1): g(x) = 1/(1+e⁻ˣ)（シグモイド関数、単射）\n\n両方向の単射が存在するので、同じ濃度です。\n全単射を直接構成しなくてもよいのがこの定理の力です。',
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
        'カーディナリティのポイント：\n\n・全単射の存在で「同じ大きさ」を定義\n・ℵ₀ < 2^ℵ₀ < 2^(2^ℵ₀) < ... の階層\n・|ℕ| = |ℤ| = |ℚ| < |ℝ|\n・シュレーダー＝ベルンシュタイン定理で比較\n\n集合論の全30チュートリアルを完了しました！数学の基礎となる強力な道具を手に入れました。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
