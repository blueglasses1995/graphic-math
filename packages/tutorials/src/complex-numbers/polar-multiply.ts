import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const polarMultiplyTutorial: Tutorial = {
  id: 'polar-multiply',
  title: '極形式での掛け算',
  description: '極形式における掛け算の幾何学的意味を視覚的に理解する',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '回転と拡大',
      content:
        '極形式での掛け算は驚くほどシンプルです。\n\nz₁ = r₁(cos θ₁ + i sin θ₁)\nz₂ = r₂(cos θ₂ + i sin θ₂)\n\nz₁ × z₂ = r₁r₂(cos(θ₁+θ₂) + i sin(θ₁+θ₂))\n\n絶対値は掛け算、偏角は足し算！',
      customScene: 'polar-multiply-animation',
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
      id: 'proof',
      title: 'なぜそうなるか',
      content:
        '加法定理を使えば証明できます:\n\n(cos θ₁ + i sin θ₁)(cos θ₂ + i sin θ₂)\n= cos θ₁ cos θ₂ - sin θ₁ sin θ₂\n  + i(sin θ₁ cos θ₂ + cos θ₁ sin θ₂)\n= cos(θ₁+θ₂) + i sin(θ₁+θ₂)\n\n三角関数の加法定理が自然に現れます！',
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
      id: 'example',
      title: '具体例',
      content:
        'z₁ = 2(cos 30° + i sin 30°)  →  r₁=2, θ₁=30°\nz₂ = 3(cos 45° + i sin 45°)  →  r₂=3, θ₂=45°\n\nz₁ × z₂ = 6(cos 75° + i sin 75°)\n\n絶対値: 2 × 3 = 6\n偏角: 30° + 45° = 75°',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'z1',
            vector: new Vector3(2 * Math.cos(Math.PI / 6), 2 * Math.sin(Math.PI / 6), 0),
            color: '#ff4444',
            label: 'z₁: r=2, 30°',
          },
          {
            id: 'z2',
            vector: new Vector3(3 * Math.cos(Math.PI / 4), 3 * Math.sin(Math.PI / 4), 0),
            color: '#4444ff',
            label: 'z₂: r=3, 45°',
          },
          {
            id: 'product',
            vector: new Vector3(6 * Math.cos(5 * Math.PI / 12), 6 * Math.sin(5 * Math.PI / 12), 0),
            color: '#ffff44',
            label: 'z₁z₂: r=6, 75°',
          },
        ],
        cameraPosition: [0, 0, 10],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '掛け算を体験',
      content:
        '2つの複素数の偏角と絶対値を変えて、積がどう変わるか実験してみましょう。\n\n偏角が足し算、絶対値が掛け算になることを確認してください。',
      customScene: 'polar-multiply-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 6],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'θ₁', min: 0, max: 6.28, step: 0.1, initial: 0.5 },
          { name: 'θ₂', min: 0, max: 6.28, step: 0.1, initial: 0.8 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '極形式の掛け算を練習しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'z₁ = 2∠60°、z₂ = 3∠90° のとき、z₁z₂ の偏角は？',
        options: [
          { id: 'a', label: '30°', correct: false },
          { id: 'b', label: '150°', correct: true },
          { id: 'c', label: '5400°', correct: false },
          { id: 'd', label: '6°', correct: false },
        ],
        explanation:
          '偏角は足し算なので 60° + 90° = 150° です。絶対値は 2 × 3 = 6 になります。',
      },
    },
    {
      id: 'unit-circle-multiply',
      title: '単位円上の掛け算',
      content:
        '|z| = 1 の場合、掛け算は純粋な回転になります。\n\n1∠θ₁ × 1∠θ₂ = 1∠(θ₁+θ₂)\n\n絶対値は 1 × 1 = 1 のまま、偏角だけが変化。\n\nこれが「回転行列」の代わりに複素数を使える理由です。',
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
      id: 'summary',
      title: 'まとめ',
      content:
        '極形式での掛け算:\n\n・r₁∠θ₁ × r₂∠θ₂ = r₁r₂∠(θ₁+θ₂)\n・絶対値は積、偏角は和\n・加法定理から自然に導かれる\n・|z|=1 なら純粋な回転\n\n次は極形式での割り算を学びましょう。',
      customScene: 'polar-multiply-summary',
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
