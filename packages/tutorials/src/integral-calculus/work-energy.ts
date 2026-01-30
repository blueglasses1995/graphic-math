import { Tutorial } from '../types';

export const workEnergyTutorial: Tutorial = {
  id: 'work-energy',
  title: '【実践】仕事とエネルギー',
  description: '力を積分して仕事を求める ── エネルギーの計算',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '力 × 距離 = 仕事',
      content:
        '一定の力 F で距離 d だけ動かすと、仕事 W = Fd です。\n\nでは力が位置によって変わるときは？\n\nW = ∫ₐᵇ F(x) dx ── 微小な仕事を積分で足し合わせます。\n\nバネを引っ張る例で見てみましょう。',
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
        'バネを引っ張ってみてください。\n\n伸ばすほど力が大きくなります（フックの法則）。\n\n力のグラフの下の面積が「仕事」です。',
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
      title: 'バネの仕事',
      content:
        'フックの法則：F(x) = kx（k はバネ定数）\n\nバネを 0 から d まで伸ばすときの仕事：\n\nW = ∫₀ᵈ kx dx = [kx²/2]₀ᵈ = kd²/2\n\nこれがバネに蓄えられる弾性エネルギーです。\n\nk = 100 N/m、d = 0.1 m なら W = 100(0.01)/2 = 0.5 J。',
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
      title: '重力に逆らう仕事',
      content:
        '質量 m の物体を高さ h まで持ち上げる仕事：\n\n力 F = mg（一定）なので W = ∫₀ʰ mg dx = mgh\n\nこれが重力ポテンシャルエネルギーの公式です。\n\n力が一定なら積分は単なる掛け算。\n力が変わる場合に積分の真価が発揮されます。',
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
        'バネ定数 k = 200 N/m のバネを 0.3 m 伸ばすときの仕事は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'W = ∫₀⁰·³ 200x dx は？',
        options: [
          { id: 'a', label: '30 J', correct: false },
          { id: 'b', label: '60 J', correct: false },
          { id: 'c', label: '9 J', correct: true },
          { id: 'd', label: '18 J', correct: false },
        ],
        explanation:
          '正解は 9 J です。\n\nW = kd²/2 = 200 × 0.09 / 2 = 9 J\n\nまたは ∫₀⁰·³ 200x dx = [100x²]₀⁰·³ = 100 × 0.09 = 9 J',
      },
    },
    {
      id: 'alternate',
      title: 'エネルギー保存則',
      content:
        '仕事は「エネルギーの移動」です。\n\nバネにした仕事 → 弾性エネルギーとして蓄えられる\n重力に逆らった仕事 → 位置エネルギーとして蓄えられる\n\nエネルギー保存則は、積分の観点から自然に理解できます。\n\n∫F dx = ΔKE（運動エネルギーの変化）── これが仕事-エネルギー定理です。',
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
        '仕事 W = ∫ₐᵇ F(x) dx ── 力を距離で積分します。\n\nバネのエネルギー kd²/2、位置エネルギー mgh は積分の結果です。\n\nバネを操作して、仕事とエネルギーの関係を体感してみてください。',
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
