import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const complexPlaneTutorial: Tutorial = {
  id: 'complex-plane',
  title: '複素平面',
  description: '複素数を2次元平面上の点として視覚化する',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '数を平面に置く',
      content:
        '実数は数直線（1次元）上の点でした。\n\n複素数は a + bi の2つの成分を持つので、2次元の平面上の点として表せます。\n\nこの平面を「複素平面」または「ガウス平面」と呼びます。\n\n横軸が実部、縦軸が虚部です。',
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
      id: 'axes',
      title: '実軸と虚軸',
      content:
        '横軸を「実軸」（Real axis）、縦軸を「虚軸」（Imaginary axis）と呼びます。\n\n例えば z = 3 + 2i は、実軸方向に3、虚軸方向に2の位置にある点です。\n\nこれはベクトル (3, 2) と同じ位置です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'z1',
            vector: new Vector3(3, 2, 0),
            color: '#44ff44',
            label: 'z = 3 + 2i',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'examples',
      title: 'いくつかの例',
      content:
        'いくつかの複素数を複素平面にプロットしてみましょう。\n\n・z₁ = 3 + 2i（第1象限）\n・z₂ = -2 + i（第2象限）\n・z₃ = -1 - 2i（第3象限）\n・z₄ = 2 - i（第4象限）\n\n複素平面は実数の平面と同じ4つの象限を持ちます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z1', vector: new Vector3(3, 2, 0), color: '#ff4444', label: '3+2i' },
          { id: 'z2', vector: new Vector3(-2, 1, 0), color: '#44ff44', label: '-2+i' },
          { id: 'z3', vector: new Vector3(-1, -2, 0), color: '#4444ff', label: '-1-2i' },
          { id: 'z4', vector: new Vector3(2, -1, 0), color: '#ffff44', label: '2-i' },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '複素平面を触ってみよう',
      content:
        '平面上の点をドラッグして、実部と虚部がどう変わるか観察してみてください。\n\n横に動かすと実部が変わり、縦に動かすと虚部が変わります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: { type: 'drag-unit-circle' },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '複素平面上の点の位置を読み取ってみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '複素平面上で実軸方向に-1、虚軸方向に3の点が表す複素数は？',
        options: [
          { id: 'a', label: '3 - i', correct: false },
          { id: 'b', label: '-1 + 3i', correct: true },
          { id: 'c', label: '-3 + i', correct: false },
          { id: 'd', label: '1 - 3i', correct: false },
        ],
        explanation:
          '横（実軸）が-1、縦（虚軸）が3なので、-1 + 3i です。座標 (a, b) は複素数 a + bi に対応します。',
      },
    },
    {
      id: 'vector-analogy',
      title: 'ベクトルとの関係',
      content:
        '複素数 a + bi は、2次元ベクトル (a, b) と同じ位置を指します。\n\nしかし複素数にはベクトルにない特別な性質があります。それは「掛け算」です。\n\n複素数の掛け算は回転と拡大を表します。これは後のチュートリアルで詳しく学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'z',
            vector: new Vector3(2, 1, 0),
            color: '#ff8844',
            label: '2 + i',
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
      id: 'summary',
      title: 'まとめ',
      content:
        '複素平面のポイント:\n\n・横軸 = 実軸、縦軸 = 虚軸\n・z = a + bi は点 (a, b) に対応\n・実数は実軸上の点、純虚数は虚軸上の点\n・複素数はベクトルのように足せるが、さらに掛け算もできる\n\n次は複素数の足し算を学びましょう。',
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
