import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const polarFormTutorial: Tutorial = {
  id: 'polar-form',
  title: '極形式',
  description: '複素数を絶対値と偏角で表す極形式 r(cosθ + i sinθ)',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '2つの表し方',
      content:
        '複素数には2つの表し方があります。\n\n直交形式: z = a + bi（実部と虚部）\n極形式: z = r(cos θ + i sin θ)（絶対値と偏角）\n\nここで r = |z|、θ = arg(z) です。\n\n直交座標と極座標の関係と同じです。',
      customScene: 'polar-form-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'z',
            vector: new Vector3(Math.cos(Math.PI / 4) * 2, Math.sin(Math.PI / 4) * 2, 0),
            color: '#ff4444',
            label: 'r=2, θ=45°',
            showComponents: true,
          },
        ],
        circles: [{ radius: 2, color: '#8888ff33', plane: 'xy' }],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'conversion',
      title: '変換公式',
      content:
        '直交形式 → 極形式:\nr = √(a² + b²)\nθ = atan2(b, a)\n\n極形式 → 直交形式:\na = r cos θ\nb = r sin θ\n\n例: z = 1 + √3 i\nr = √(1+3) = 2、θ = atan2(√3, 1) = π/3\nz = 2(cos π/3 + i sin π/3)',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'z',
            vector: new Vector3(1, Math.sqrt(3), 0),
            color: '#ff4444',
            label: '1+√3i = 2∠60°',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'cis-notation',
      title: 'cis記法',
      content:
        'cos θ + i sin θ を短く cis θ と書くことがあります。\n\nz = r cis θ\n\n「cis」は cosine + i × sine の略です。\n\n後で学ぶオイラーの公式を使えば、さらに簡潔に z = re^(iθ) と書けます。',
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
      id: 'interactive',
      title: '極形式を体験',
      content:
        'rとθを変えて、複素数がどう動くか観察しましょう。\n\nrを変えると原点からの距離が変わり、θを変えると方向が変わります。',
      customScene: 'polar-form-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'r', min: 0, max: 3, step: 0.1, initial: 1 },
          { name: 'θ', min: 0, max: 6.28, step: 0.1, initial: 0 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '極形式への変換を練習しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'z = -1 の極形式は？',
        options: [
          { id: 'a', label: '1(cos 0 + i sin 0)', correct: false },
          { id: 'b', label: '1(cos π + i sin π)', correct: true },
          { id: 'c', label: '1(cos π/2 + i sin π/2)', correct: false },
          { id: 'd', label: '-1(cos 0 + i sin 0)', correct: false },
        ],
        explanation:
          'z = -1 は実軸の負の方向にあるので、r = 1、θ = π です。注意: r は常に非負です。',
      },
    },
    {
      id: 'advantage',
      title: '極形式の利点',
      content:
        '極形式は掛け算・割り算・累乗で威力を発揮します。\n\n掛け算: r₁ cis θ₁ × r₂ cis θ₂ = r₁r₂ cis(θ₁ + θ₂)\n\n「絶対値は掛け算、偏角は足し算」\n\nこの美しい法則のおかげで、複素数の乗算が直感的に理解できます。',
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
        '極形式のポイント:\n\n・z = r(cos θ + i sin θ) = r cis θ\n・r = |z|（絶対値）、θ = arg(z)（偏角）\n・直交 ↔ 極の変換は三角関数で\n・掛け算では「絶対値は積、偏角は和」\n\n次は極形式での掛け算を詳しく見ましょう。',
      customScene: 'polar-form-summary',
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
