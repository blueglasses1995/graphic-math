import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const eulerFormulaComplexTutorial: Tutorial = {
  id: 'euler-formula-complex',
  title: 'オイラーの公式',
  description: 'e^(iθ) = cosθ + i sinθ というオイラーの公式の意味と導出',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '数学で最も美しい公式',
      content:
        'オイラーの公式:\n\ne^(iθ) = cos θ + i sin θ\n\n指数関数・三角関数・虚数単位を1つの等式で結びつけます。\n\nこの公式は数学で最も美しいと言われることがあります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'taylor',
      title: 'テイラー展開による導出',
      content:
        'eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ...\n\nx に iθ を代入すると:\ne^(iθ) = 1 + iθ + (iθ)²/2! + (iθ)³/3! + ...\n= 1 + iθ - θ²/2! - iθ³/3! + θ⁴/4! + ...\n\n実部: 1 - θ²/2! + θ⁴/4! - ... = cos θ\n虚部: θ - θ³/3! + θ⁵/5! - ... = sin θ\n\nよって e^(iθ) = cos θ + i sin θ',
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
      id: 'meaning',
      title: '幾何学的意味',
      content:
        'e^(iθ) は単位円上の点です。\n\nθが増えると、点は単位円上を反時計回りに動きます。\n\nθ = 0 → e⁰ = 1（右）\nθ = π/2 → e^(iπ/2) = i（上）\nθ = π → e^(iπ) = -1（左）\nθ = 3π/2 → e^(i3π/2) = -i（下）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z0', vector: new Vector3(1, 0, 0), color: '#ff4444', label: 'θ=0' },
          { id: 'z1', vector: new Vector3(0, 1, 0), color: '#44ff44', label: 'θ=π/2' },
          { id: 'z2', vector: new Vector3(-1, 0, 0), color: '#4444ff', label: 'θ=π' },
          { id: 'z3', vector: new Vector3(0, -1, 0), color: '#ffff44', label: 'θ=3π/2' },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'オイラーの公式を体験',
      content:
        'θを変化させて、e^(iθ) が単位円上をどう動くか観察してみましょう。\n\ncos θ と sin θ の値が実部と虚部に対応していることを確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: { type: 'angle-slider', initialAngle: 0 },
    },
    {
      id: 'polar-connection',
      title: '極形式との関係',
      content:
        'オイラーの公式を使うと、極形式がさらに簡潔になります。\n\nz = r(cos θ + i sin θ) = re^(iθ)\n\nこの表記は計算を劇的に簡単にします:\n\nz₁z₂ = r₁e^(iθ₁) × r₂e^(iθ₂) = r₁r₂e^(i(θ₁+θ₂))\n\n指数法則がそのまま使えます！',
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
      id: 'quiz',
      title: '確認クイズ',
      content: 'オイラーの公式を使って計算しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'e^(iπ/3) の実部と虚部は？',
        options: [
          { id: 'a', label: '実部 = 1/2, 虚部 = √3/2', correct: true },
          { id: 'b', label: '実部 = √3/2, 虚部 = 1/2', correct: false },
          { id: 'c', label: '実部 = √2/2, 虚部 = √2/2', correct: false },
          { id: 'd', label: '実部 = 0, 虚部 = 1', correct: false },
        ],
        explanation:
          'e^(iπ/3) = cos(π/3) + i sin(π/3) = 1/2 + (√3/2)i です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'オイラーの公式:\n\n・e^(iθ) = cos θ + i sin θ\n・テイラー展開から導かれる\n・e^(iθ) は単位円上の点\n・極形式を z = re^(iθ) と書ける\n・指数法則が掛け算・割り算に使える\n\n次はオイラーの等式を見ましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
