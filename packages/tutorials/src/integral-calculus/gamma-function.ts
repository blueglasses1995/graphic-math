import { Tutorial } from '../types';

export const gammaFunctionTutorial: Tutorial = {
  id: 'gamma-function',
  title: '【実践】ガンマ関数',
  description: '階乗を実数に拡張する ── 広義積分の美しい応用',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '0.5! は何？',
      content:
        '3! = 6、4! = 24。では 0.5! は？\n\n階乗は自然数でしか定義されていません。\n\nでもガンマ関数を使えば、実数（さらには複素数）にまで拡張できます。\n\nΓ(n+1) = n! を満たす関数 ── それが広義積分で定義されます。',
      customScene: 'gamma-function-animation',
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
        'ガンマ関数のグラフを見てみましょう。\n\n自然数のところで Γ(n) = (n-1)! の値を取っています。\n\nその間を滑らかにつないだのがガンマ関数です。',
      customScene: 'gamma-function-interactive',
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
      title: 'ガンマ関数の定義',
      content:
        'Γ(s) = ∫₀∞ t^(s-1) · e^(-t) dt　（s > 0）\n\nこれは広義積分です（区間が [0, ∞)）。\n\n部分積分で Γ(s+1) = s · Γ(s) を示せます。\n\nΓ(1) = ∫₀∞ e^(-t) dt = 1 なので、\nΓ(2) = 1·Γ(1) = 1、Γ(3) = 2·Γ(2) = 2、Γ(4) = 3·Γ(3) = 6 = 3!',
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
      title: 'Γ(1/2) = √π',
      content:
        'Γ(1/2) = ∫₀∞ t^(-1/2) · e^(-t) dt\n\nu = √t と置換すると Γ(1/2) = 2∫₀∞ e^(-u²) du = √π\n\nこれはガウス積分 ∫₋∞∞ e^(-x²) dx = √π の半分です。\n\nよって 0.5! = Γ(3/2) = (1/2)·Γ(1/2) = √π/2 ≈ 0.886\n\n階乗の「半整数値」に π が現れる ── 美しい結果です。',
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
        'Γ(5) はいくつでしょう？ Γ(n) = (n-1)! を使ってください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'Γ(5) は？',
        options: [
          { id: 'a', label: '5', correct: false },
          { id: 'b', label: '24', correct: true },
          { id: 'c', label: '120', correct: false },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          '正解は 24 です。\n\nΓ(5) = 4! = 4 × 3 × 2 × 1 = 24\n\nΓ(n) = (n-1)! なので Γ(5) = 4! です。',
      },
    },
    {
      id: 'alternate',
      title: 'ガンマ関数の応用',
      content:
        'ガンマ関数は数学・統計のあちこちに登場します：\n\n・確率分布（ガンマ分布、t 分布、F 分布）\n・二項係数の一般化 C(n, k) = Γ(n+1)/[Γ(k+1)Γ(n-k+1)]\n・物理学（量子力学、統計力学）\n・解析的整数論（ゼータ関数との関係）\n\n広義積分一つで、これほど豊かな世界が広がります。',
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
        'ガンマ関数 Γ(s) = ∫₀∞ t^(s-1)·e^(-t) dt は階乗の一般化です。\n\nΓ(n+1) = n!、Γ(1/2) = √π。\n\n広義積分の力で、整数から実数への拡張が実現しました。\n\nグラフを操作して、ガンマ関数の形を探ってみてください。',
      customScene: 'gamma-function-summary',
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
