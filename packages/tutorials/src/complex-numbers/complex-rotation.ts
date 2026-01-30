import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const complexRotationTutorial: Tutorial = {
  id: 'complex-rotation',
  title: '【実践】複素数と回転行列',
  description: '複素数による回転と2×2回転行列の等価性',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '2つの回転表現',
      content:
        '2次元の回転を表す方法は2つあります:\n\n1. 回転行列:\n   [cos θ  -sin θ]\n   [sin θ   cos θ]\n\n2. 複素数の掛け算:\n   z × e^(iθ) = z(cos θ + i sin θ)\n\nこの2つは実は同じものです！',
      customScene: 'complex-rotation-animation',
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
      id: 'equivalence',
      title: '等価性の証明',
      content:
        '点 (x, y) を角度θだけ回転させるとき:\n\n行列: [x\'] = [cos θ  -sin θ][x]\n      [y\']   [sin θ   cos θ][y]\n\n複素数: (x + yi)(cos θ + i sin θ)\n= (x cos θ - y sin θ) + (x sin θ + y cos θ)i\n\n結果は完全に同じ！ x\' = x cos θ - y sin θ, y\' = x sin θ + y cos θ',
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
      id: 'advantage',
      title: '複素数の利点',
      content:
        '連続回転（θ₁ の後に θ₂ 回転）:\n\n行列: R(θ₂)R(θ₁) = R(θ₁+θ₂)（行列の積）\n複素数: e^(iθ₂) × e^(iθ₁) = e^(i(θ₁+θ₂))（数の積）\n\n複素数の方が:\n・4つの成分ではなく2つ（実部と虚部）だけ\n・行列積ではなく普通の掛け算\n・逆回転は共役を取るだけ（e^(-iθ) = cos θ - i sin θ）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'before',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: '回転前',
          },
          {
            id: 'after',
            vector: new Vector3(
              2 * Math.cos(Math.PI / 3) - Math.sin(Math.PI / 3),
              2 * Math.sin(Math.PI / 3) + Math.cos(Math.PI / 3),
              0
            ),
            color: '#44ff44',
            label: '60°回転後',
          },
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
      title: '回転を体験',
      content:
        '回転角を変えて、点がどう動くか観察してみましょう。\n\n複素数 e^(iθ) を掛けることが、回転行列を適用することと同じであることを確認してください。',
      customScene: 'complex-rotation-interactive',
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
      id: 'quiz',
      title: '確認クイズ',
      content: '複素数と回転の関係を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '点 1+i を90°回転させるには、何を掛ける？',
        options: [
          { id: 'a', label: '-1', correct: false },
          { id: 'b', label: 'i', correct: true },
          { id: 'c', label: '-i', correct: false },
          { id: 'd', label: '1+i', correct: false },
        ],
        explanation:
          '90°回転は e^(iπ/2) = i を掛けることです。(1+i)×i = i+i² = i-1 = -1+i。点(1,1)が(-1,1)に移動し、確かに90°回転しています。',
      },
    },
    {
      id: 'quaternion',
      title: '3次元への拡張',
      content:
        '2次元: 複素数で回転を表現\n3次元: 四元数（クォータニオン）で回転を表現\n\nq = a + bi + cj + dk （i² = j² = k² = ijk = -1）\n\n四元数は複素数の3次元版で、3Dゲームやロボティクスで使われています。\n\n複素数の「掛け算 = 回転」という発想の自然な拡張です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '複素数と回転行列:\n\n・e^(iθ) を掛ける = θ回転行列を適用\n・複素数は行列より簡潔（2成分 vs 4成分）\n・連続回転 = 指数の足し算\n・逆回転 = 共役を取る\n・3次元への拡張 = 四元数\n\n複素数は回転を最もエレガントに表現する方法です。',
      customScene: 'complex-rotation-summary',
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
