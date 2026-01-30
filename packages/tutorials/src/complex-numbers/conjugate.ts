import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const conjugateTutorial: Tutorial = {
  id: 'conjugate',
  title: '共役複素数',
  description: '共役複素数の定義と性質、割り算への応用',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '鏡に映した複素数',
      content:
        'z = a + bi の共役複素数は、虚部の符号を反転させた数です。\n\nz̄ = a - bi\n\n複素平面では、実軸に関して鏡像の位置にあります。\n\n例: z = 3 + 2i → z̄ = 3 - 2i',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z', vector: new Vector3(3, 2, 0), color: '#ff4444', label: 'z = 3+2i' },
          { id: 'zbar', vector: new Vector3(3, -2, 0), color: '#4444ff', label: 'z̄ = 3-2i' },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'product',
      title: '共役の積',
      content:
        'z × z̄ = (a + bi)(a - bi) = a² + b²\n\n共役複素数の積は必ず実数（しかも非負）になります！\n\n例: (3+2i)(3-2i) = 9 + 4 = 13\n\nこの性質は、割り算で分母を実数化するのに使います。',
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
      id: 'division',
      title: '割り算への応用',
      content:
        '複素数の割り算は、分母に共役を掛けて実数化します。\n\n(2+i)/(1+i) = (2+i)(1-i) / (1+i)(1-i)\n= (2-2i+i-i²) / (1+1)\n= (3-i) / 2\n= 3/2 - i/2',
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
      id: 'properties',
      title: '共役の性質',
      content:
        '共役には便利な性質があります:\n\n・z̄̄ = z（2回共役を取ると元に戻る）\n・z + z̄ = 2Re(z)（実部の2倍）\n・z - z̄ = 2i·Im(z)（虚部の2i倍）\n・(z₁ + z₂)の共役 = z̄₁ + z̄₂\n・(z₁ × z₂)の共役 = z̄₁ × z̄₂',
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
      content: '共役複素数の性質を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'z = 4 - 3i のとき、z × z̄ = ?',
        options: [
          { id: 'a', label: '7', correct: false },
          { id: 'b', label: '25', correct: true },
          { id: 'c', label: '1', correct: false },
          { id: 'd', label: '7 - 24i', correct: false },
        ],
        explanation:
          'z × z̄ = (4-3i)(4+3i) = 16 + 9 = 25 です。一般に z × z̄ = a² + b² = |z|² となります。',
      },
    },
    {
      id: 'real-condition',
      title: '実数になる条件',
      content:
        'z = z̄ ⟺ z は実数\n\nつまり共役が自分自身と等しい複素数は実数です。\n\n逆に z = -z̄ ならば z は純虚数です。\n\nこのように共役は、複素数が実数か虚数かを判定する道具にもなります。',
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
        '共役複素数のポイント:\n\n・z̄ は虚部の符号を反転（実軸に関する鏡像）\n・z × z̄ = |z|²（常に非負の実数）\n・割り算は分母に共役を掛けて実数化\n・z = z̄ ⟺ z は実数\n\n次は絶対値（モジュラス）を学びましょう。',
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
