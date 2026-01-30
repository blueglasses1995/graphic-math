import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const complexMultiplicationTutorial: Tutorial = {
  id: 'complex-multiplication',
  title: '複素数の掛け算',
  description: '複素数の乗法が回転と拡大を表すことを視覚的に理解する',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '掛け算の計算',
      content:
        '複素数の掛け算は、分配法則で展開します。\n\n(a + bi)(c + di) = ac + adi + bci + bdi²\n= ac + adi + bci + bd(-1)\n= (ac - bd) + (ad + bc)i\n\n例: (2 + 3i)(1 + i) = (2-3) + (2+3)i = -1 + 5i',
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
      id: 'geometric',
      title: '幾何学的な意味',
      content:
        '複素数の掛け算には美しい幾何学的意味があります。\n\n2つの複素数を掛けると:\n・絶対値は掛け算される\n・偏角は足し算される\n\nつまり「回転」と「拡大」を同時に行う操作なのです！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z1', vector: new Vector3(2, 1, 0), color: '#ff4444', label: 'z₁' },
          { id: 'z2', vector: new Vector3(0, 1, 0), color: '#4444ff', label: 'z₂ = i' },
          { id: 'product', vector: new Vector3(-1, 2, 0), color: '#ffff44', label: 'z₁×z₂' },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'rotation',
      title: 'iを掛ける = 90°回転',
      content:
        'z = a + bi に i を掛けてみましょう。\n\nz × i = (a + bi) × i = ai + bi² = -b + ai\n\n点 (a, b) が (-b, a) に移動。これは反時計回りに90°の回転です！\n\n例: (3 + 2i) × i = -2 + 3i\n点 (3, 2) → (-2, 3)',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z', vector: new Vector3(3, 2, 0), color: '#ff4444', label: '3+2i' },
          { id: 'zi', vector: new Vector3(-2, 3, 0), color: '#44ff44', label: '-2+3i (×i)' },
        ],
        circles: [{ radius: 1, color: '#8888ff33', plane: 'xy' }],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '掛け算を体験',
      content:
        '複素数を掛けたとき、ベクトルがどう回転・拡大するか観察してみましょう。\n\n点をドラッグして、掛け算の幾何学的効果を確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 6],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: { type: 'drag-unit-circle' },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '複素数の掛け算を練習しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(1 + i)(1 - i) = ?',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '2', correct: true },
          { id: 'c', label: '2i', correct: false },
          { id: 'd', label: '1 - i²', correct: false },
        ],
        explanation:
          '(1+i)(1-i) = 1 - i + i - i² = 1 - (-1) = 2 です。これは共役複素数の積の特別な例です。',
      },
    },
    {
      id: 'division-preview',
      title: '割り算の予告',
      content:
        '複素数の割り算は、分母の共役を掛けて実数化します。\n\n(a+bi)/(c+di) = (a+bi)(c-di) / (c+di)(c-di)\n= (a+bi)(c-di) / (c²+d²)\n\n共役複素数については次のチュートリアルで詳しく学びます。',
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
        '複素数の掛け算:\n\n・(a+bi)(c+di) = (ac-bd) + (ad+bc)i\n・幾何学的意味: 回転 + 拡大\n・iを掛ける = 90°回転\n・絶対値は積、偏角は和になる\n\n次は共役複素数を学びましょう。',
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
