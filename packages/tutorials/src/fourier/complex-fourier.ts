import { Tutorial } from '../types';

export const complexFourierTutorial: Tutorial = {
  id: 'complex-fourier',
  title: '複素フーリエ級数',
  description: 'オイラーの公式を用いた複素フーリエ級数の美しい表現を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '回転する矢印で絵を描く',
      content:
        '複素平面上で異なる速さで回転する矢印を繋げると、\n驚くほど複雑な図形を描くことができます。\n\nこれが複素フーリエ級数の幾何学的な意味です。\nアニメーションで回転する矢印が文字を描く様子を見ましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'complex-fourier-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '回転する矢印を操作',
      content:
        '矢印の本数（項数）を変えて、描かれる図形がどう変わるか確認しましょう。\n\n項数が多いほど精密な図形が描けます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'complex-fourier-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'terms', min: 1, max: 30, step: 1, initial: 3 },
          { name: 'speed', min: 0.1, max: 3.0, step: 0.1, initial: 1.0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'オイラーの公式から複素フーリエへ',
      content:
        'オイラーの公式: e^(iθ) = cosθ + i sinθ\n\nこれを使うと:\ncosθ = (e^(iθ) + e^(-iθ)) / 2\nsinθ = (e^(iθ) - e^(-iθ)) / 2i\n\n三角関数のフーリエ級数を複素指数で書き直すと:\nf(t) = Σ[n=-∞→∞] cₙ e^(inωt)\n\nたった一つの式で全てを表現できます。',
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
      title: '複素フーリエ係数',
      content:
        '複素フーリエ係数:\ncₙ = (1/T) ∫₀ᵀ f(t) e^(-inωt) dt\n\n実フーリエ係数との関係:\ncₙ = (aₙ - ibₙ) / 2  (n > 0)\nc₋ₙ = (aₙ + ibₙ) / 2  (n > 0)\nc₀ = a₀/2\n\n|cₙ| は第n次高調波の振幅を、\narg(cₙ) は位相を表します。',
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
      content: '複素フーリエ級数の性質について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '実数値関数 f(t) の複素フーリエ係数 cₙ と c₋ₙ の関係は？',
        options: [
          { id: 'a', label: 'cₙ = c₋ₙ', correct: false },
          { id: 'b', label: 'cₙ = -c₋ₙ', correct: false },
          { id: 'c', label: 'cₙ = c₋ₙの複素共役', correct: true },
          { id: 'd', label: 'cₙ + c₋ₙ = 1', correct: false },
        ],
        explanation:
          '実数値関数の場合、c₋ₙ = cₙ*（複素共役）が成り立ちます。これにより虚部が打ち消し合い、結果が実数になることが保証されます。',
      },
    },
    {
      id: 'alternate',
      title: '幾何学的な意味',
      content:
        'e^(inωt) は複素平面上で角速度 nω で回転する単位ベクトルです。\n\ncₙ e^(inωt) は振幅 |cₙ|、初期位相 arg(cₙ) の回転です。\n\nn > 0: 反時計回り\nn < 0: 時計回り\nn = 0: 静止（定数項）\n\nこれらを全て足し合わせると、\n矢印のチェーンが複雑な軌跡を描きます。',
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
      title: 'まとめ：複素フーリエ級数',
      content:
        '複素フーリエ級数は回転する矢印の重ね合わせです。\n\n項数と速度を調整して、複素平面上の軌跡を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'complex-fourier-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'terms', min: 1, max: 30, step: 1, initial: 5 },
          { name: 'time', min: 0, max: 6.28, step: 0.01, initial: 0 },
        ],
      },
    },
  ],
};
