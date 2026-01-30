import { Tutorial } from '../types';

export const arcLengthTutorial: Tutorial = {
  id: 'arc-length',
  title: '弧長',
  description: '曲線の長さ（弧長）を積分で求める方法',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '曲線の長さを測る',
      content:
        '直線の長さは簡単に測れます。でも曲線の長さは？\n\n曲線を短い線分で近似して、それらを足し合わせます。\n\n線分を無限に細かくした極限が「弧長」です。\n\nこれもまた積分で表現できます。',
      customScene: 'arc-length-animation',
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
        '曲線を折れ線で近似しています。\n\n分割数を増やすと、折れ線が曲線に近づいていきます。\n\n折れ線の長さの合計が弧長に収束していきます。',
      customScene: 'arc-length-interactive',
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
      title: '弧長の公式',
      content:
        'y = f(x) の弧長は：\n\nL = ∫ₐᵇ √(1 + [f\'(x)]²) dx\n\n微小区間での線分の長さは √(dx² + dy²) = √(1 + (dy/dx)²) · dx。\n\nこれを足し合わせると弧長になります。\n\nピタゴラスの定理が微小レベルで使われているのです。',
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
      title: '具体例：y = x^(3/2)',
      content:
        'y = x^(3/2) の [0, 4] での弧長を求めます。\n\nf\'(x) = (3/2)x^(1/2)\n[f\'(x)]² = (9/4)x\n\nL = ∫₀⁴ √(1 + 9x/4) dx\n\nu = 1 + 9x/4 と置換すると：\nL = (4/9) · (2/3)[u^(3/2)]₁¹⁰ = (8/27)(10√10 - 1) ≈ 9.07\n\n直線距離（約 8.94）より少しだけ長いですね。',
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
        'y = x の [0, 1] での弧長はいくつでしょう？\n直線なので幾何学的にも求められます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = x の [0, 1] での弧長は？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '√2', correct: true },
          { id: 'c', label: '2', correct: false },
          { id: 'd', label: 'π/2', correct: false },
        ],
        explanation:
          '正解は √2 です。\n\nf\'(x) = 1 なので L = ∫₀¹ √(1+1) dx = √2。\n\n(0,0) から (1,1) までの直線距離と一致しますね。',
      },
    },
    {
      id: 'alternate',
      title: 'パラメトリック曲線の弧長',
      content:
        'x = x(t), y = y(t) のパラメトリック曲線の場合：\n\nL = ∫ₜ₁ᵗ² √([x\'(t)]² + [y\'(t)]²) dt\n\n例：円 x = cos t, y = sin t の周長\nL = ∫₀²π √(sin²t + cos²t) dt = ∫₀²π 1 dt = 2π\n\n円周 = 2πr（r=1）が積分で導けました。',
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
        '弧長 L = ∫ₐᵇ √(1 + [f\'(x)]²) dx\n\n微小なピタゴラスの定理を積み上げるイメージです。\n\n分割数を変えて、折れ線近似が弧長に収束する様子を確かめてみてください。',
      customScene: 'arc-length-summary',
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
