import { Tutorial } from '../types';

export const phaseShiftTutorial: Tutorial = {
  id: 'phase-shift',
  title: '位相シフト',
  description: 'sin(θ + φ) の位相パラメータφが波を横にずらす仕組みを理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '波を横にずらす',
      content:
        'sin(θ) と sin(θ + π/2) は同じ形の波ですが、横にπ/2だけずれています。\n\nこの「ずれ」を位相（phase）と呼びます。\n\nsin(θ + φ) のφが位相シフト。φを変えると波がスライドします。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#4fc3f7', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'phase-shift-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '位相を変えてみよう',
      content:
        'スライダーで位相φを変えてみましょう。\n\nφ = 0: 標準のsin波\nφ = π/2: cos波と同じ！\nφ = π: -sin波と同じ！\n\n波の形は変わらず、開始位置だけが変わることを確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'phase-shift-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'phase', min: 0, max: 6.28, step: 0.1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '具体例：交流電源',
      content:
        '家庭の電源は交流（AC）。三相交流では3つの波が120°（2π/3）ずつずれています:\n\nV₁ = sin(ωt)\nV₂ = sin(ωt + 2π/3)\nV₃ = sin(ωt + 4π/3)\n\n3つの波の和は常に0。これにより送電が効率的になります。位相のずれが実用的に重要な例です。',
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
      title: 'ずらし方のルール',
      content:
        'y = sin(θ + φ) で:\n・φ > 0: 左にシフト（早く始まる）\n・φ < 0: 右にシフト（遅く始まる）\n\n注意: y = sin(B(θ - C)) の形では C が右シフト量。\n\n例: y = sin(2θ - π) = sin(2(θ - π/2))\nこれは周期πの波を右にπ/2ずらしたもの。Bを先にくくり出すのがポイントです。',
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
        '位相シフトについて考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(θ + π) は何と等しい？',
        options: [
          { id: 'a', label: 'sin(θ)', correct: false },
          { id: 'b', label: 'cos(θ)', correct: false },
          { id: 'c', label: '-sin(θ)', correct: true },
          { id: 'd', label: '-cos(θ)', correct: false },
        ],
        explanation:
          'sin(θ + π) = sinθ cosπ + cosθ sinπ = sinθ(-1) + cosθ(0) = -sinθ\n\nπ（180°）の位相シフトは波を上下反転させます。',
      },
    },
    {
      id: 'alternate',
      title: '位相差と干渉',
      content:
        '2つの波の位相差が重要です:\n\n・位相差 0: 強め合い（振幅が2倍）\n・位相差 π: 打ち消し合い（振幅が0）\n\nノイズキャンセリングヘッドホンは、騒音と逆位相の波を出して打ち消します。\n\nsin(θ) + sin(θ + π) = sin(θ) - sin(θ) = 0\n\n位相は波の「タイミング」。合わせると強まり、ずらすと弱まります。',
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
        'y = sin(θ + φ) の位相シフト:\n\n・φ > 0: 波が左にずれる\n・φ < 0: 波が右にずれる\n・φ = π/2 → cos波\n・φ = π → -sin波\n\n波の形は変わらず「タイミング」だけが変わります。交流電源やノイズキャンセリングなど、位相の制御は実用的にも非常に重要です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'phase-shift-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
