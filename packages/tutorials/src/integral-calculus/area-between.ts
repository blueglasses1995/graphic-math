import { Tutorial } from '../types';

export const areaBetweenTutorial: Tutorial = {
  id: 'area-between',
  title: '【実践】面積で比べる',
  description: '2つの曲線に挟まれた領域の面積を積分で求める',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '2つの曲線の間',
      content:
        'y = x² と y = x の間に挟まれた領域の面積はいくつでしょう？\n\n「上の曲線 - 下の曲線」を積分すれば求められます。\n\nアニメーションで2つの曲線の間の領域を見てみましょう。',
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
        '2つの関数を変えて、間の面積がどう変わるか確かめてみましょう。\n\n交点の位置が積分区間を決めます。',
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
      title: '面積の公式',
      content:
        'f(x) ≥ g(x) のとき、2曲線間の面積は：\n\nA = ∫ₐᵇ [f(x) - g(x)] dx\n\n交点を求めて区間 [a, b] を決定します。\n\n例：y = x と y = x² の交点は x = 0 と x = 1。\n[0, 1] では x ≥ x² なので：\n\nA = ∫₀¹ (x - x²) dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6',
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
      title: '上下が入れ替わる場合',
      content:
        '区間内で f と g の上下が入れ替わる場合は注意が必要です。\n\n|f(x) - g(x)| を積分するか、区間を分割して計算します。\n\n例：y = sin x と y = 0 で [0, 2π] の面積\n[0, π] では sin x ≥ 0、[π, 2π] では sin x ≤ 0\n\nA = ∫₀π sin x dx + ∫π²π |sin x| dx = 2 + 2 = 4',
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
        'y = x² と y = 2x で囲まれた面積は？ まず交点を求めてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = x² と y = 2x で囲まれた面積は？',
        options: [
          { id: 'a', label: '1/3', correct: false },
          { id: 'b', label: '2/3', correct: false },
          { id: 'c', label: '4/3', correct: true },
          { id: 'd', label: '2', correct: false },
        ],
        explanation:
          '正解は 4/3 です。\n\n交点：x² = 2x → x = 0, 2。[0, 2] で 2x ≥ x²。\nA = ∫₀² (2x - x²) dx = [x² - x³/3]₀² = 4 - 8/3 = 4/3',
      },
    },
    {
      id: 'alternate',
      title: 'y で積分する方法',
      content:
        'x = f(y) の形にして y で積分すると簡単になる場合もあります。\n\n例：x = y² と x = y + 2 の間の面積\ny で積分すると1回の積分で済みますが、x で積分すると区間の分割が必要です。\n\nどちらの変数で積分するか ── 状況に応じて使い分けましょう。',
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
        '2曲線間の面積 A = ∫ₐᵇ |f(x) - g(x)| dx\n\n手順：交点を求める → 上下を確認 → 積分する。\n\n関数を変えて、さまざまな形の面積を求めてみてください。',
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
