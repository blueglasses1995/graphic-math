import { Tutorial } from '../types';

export const probabilityDensityTutorial: Tutorial = {
  id: 'probability-density',
  title: '【実践】確率密度と積分',
  description: '確率密度関数を積分して確率を計算する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '確率は面積',
      content:
        'サイコロのように離散的な確率なら数えられます。\n\nでも「身長が 170cm から 175cm の確率」のような連続的な確率は？\n\n確率密度関数 f(x) の面積で計算します。\n\nP(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx',
      customScene: 'probability-density-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '区間 [a, b] を動かして、面積（確率）がどう変わるか観察してみましょう。\n\n密度が高い部分の面積は大きく、密度が低い部分は小さくなります。',
      customScene: 'probability-density-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '期待値',
      content:
        '連続確率変数 X の期待値（平均）は：\n\nE[X] = ∫₋∞∞ x·f(x) dx\n\n「各値 x にその確率密度 f(x) をかけて合計する」── 離散の場合の Σxᵢpᵢ の連続版です。\n\n例：一様分布 U(0,1) の期待値\nE[X] = ∫₀¹ x·1 dx = [x²/2]₀¹ = 1/2',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '分散',
      content:
        '分散は「ばらつきの度合い」を測ります：\n\nVar(X) = ∫₋∞∞ (x - μ)²·f(x) dx = E[X²] - (E[X])²\n\n例：一様分布 U(0,1) の分散\nE[X²] = ∫₀¹ x² dx = 1/3\nVar(X) = 1/3 - (1/2)² = 1/3 - 1/4 = 1/12\n\n期待値も分散も、すべて積分で定義されています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        '確率密度関数 f(x) = 2x（0 ≤ x ≤ 1）のとき、P(X ≤ 0.5) は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x) = 2x で P(X ≤ 0.5) は？',
        options: [
          { id: 'a', label: '0.5', correct: false },
          { id: 'b', label: '0.25', correct: true },
          { id: 'c', label: '0.75', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          '正解は 0.25 です。\n\nP(X ≤ 0.5) = ∫₀⁰·⁵ 2x dx = [x²]₀⁰·⁵ = 0.25\n\n密度が右側で高いので、左半分の確率は 0.5 より小さくなります。',
      },
    },
    {
      id: 'alternate',
      title: '正規分布の 68-95-99.7 規則',
      content:
        '正規分布 N(μ, σ²) では：\n\nP(μ-σ ≤ X ≤ μ+σ) ≈ 68.3%\nP(μ-2σ ≤ X ≤ μ+2σ) ≈ 95.4%\nP(μ-3σ ≤ X ≤ μ+3σ) ≈ 99.7%\n\nこれらはすべて積分 ∫ f(x) dx の結果です。\n\n閉じた形の式はないため、数値積分や表で求めます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
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
        '連続確率では、確率 = 密度関数の積分（面積）です。\n\n期待値 E[X] = ∫ x·f(x) dx\n分散 Var(X) = ∫ (x-μ)²·f(x) dx\n\n積分は確率論の言語です。区間を操作して確率を体感してみてください。',
      customScene: 'probability-density-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
