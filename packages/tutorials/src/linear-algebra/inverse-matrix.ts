import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const inverseMatrixTutorial: Tutorial = {
  id: 'inverse-matrix',
  title: '逆行列：変換を巻き戻す',
  description: '逆行列の概念と計算方法を理解し、変換の「取り消し」を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '変換を巻き戻せるか？',
      content:
        '動画の巻き戻しボタン。Ctrl+Z（元に戻す）。\n\n' +
        '線形変換にも「元に戻す」操作があります。それが逆行列です。\n\n' +
        '行列Aで変換した後、A⁻¹で変換すると元に戻る。\n' +
        'A⁻¹A = I（単位行列）= 何もしない変換\n\n' +
        'ただし、すべての変換に「巻き戻し」があるわけではありません…',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'inverse-matrix-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '逆変換を体験しよう',
      content:
        '行列Aで空間を変換し、A⁻¹で元に戻します。\n\n' +
        '例：A = [[2, 0], [0, 3]]（X方向2倍、Y方向3倍）\n' +
        'A⁻¹ = [[1/2, 0], [0, 1/3]]（X方向1/2倍、Y方向1/3倍）\n\n' +
        'AA⁻¹ = [[1, 0], [0, 1]] = I ← 元通り！\n\n' +
        '逆行列は「各操作の逆をする」行列です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'inverse-matrix-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '2×2逆行列の公式',
      content:
        'A = [[a, b], [c, d]] の逆行列は：\n\n' +
        'A⁻¹ = (1/det(A)) × [[d, -b], [-c, a]]\n\n' +
        '具体例：A = [[3, 1], [2, 4]]\n' +
        'det(A) = 3×4 - 1×2 = 10\n\n' +
        'A⁻¹ = (1/10) × [[4, -1], [-2, 3]]\n' +
        '     = [[0.4, -0.1], [-0.2, 0.3]]\n\n' +
        '検算：AA⁻¹を計算すると単位行列になります。\n' +
        'ポイント：det(A) ≠ 0 でないと 1/det(A) が計算できません！',
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
      title: '逆行列が存在しない場合',
      content:
        'A = [[1, 2], [2, 4]] の逆行列を求めてみましょう。\n\n' +
        'det(A) = 1×4 - 2×2 = 0\n\n' +
        '1/0 は計算できません！ 逆行列は存在しません。\n\n' +
        'なぜ？ この行列は平面を直線に潰します。\n' +
        '直線から平面を復元することは不可能です。\n\n' +
        '例えば点(3, 6)は、元の平面で(3,0)からも(1,1)からも来た可能性があります。\n' +
        'どちらだったか特定できない。情報が失われているのです。',
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
      title: 'クイズ：逆行列',
      content: '逆行列について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '行列 [[1, 2], [0, 1]] の逆行列はどれですか？',
        options: [
          { id: 'a', label: '[[1, -2], [0, 1]]', correct: true },
          { id: 'b', label: '[[1, 2], [0, -1]]', correct: false },
          { id: 'c', label: '[[0, 1], [1, 2]]', correct: false },
          { id: 'd', label: '逆行列は存在しない', correct: false },
        ],
        explanation:
          'det = 1×1 - 2×0 = 1。公式より A⁻¹ = [[1, -2], [0, 1]]。AA⁻¹ = I を確認してみてください。',
      },
    },
    {
      id: 'alternate',
      title: '逆行列の性質',
      content:
        '逆行列にはいくつかの便利な性質があります。\n\n' +
        '1. (A⁻¹)⁻¹ = A（逆の逆は元に戻る）\n' +
        '2. (AB)⁻¹ = B⁻¹A⁻¹（順序が逆転！）\n' +
        '3. det(A⁻¹) = 1/det(A)\n\n' +
        '性質2は直感的です。靴を履いて靴下を履いた場合、\n' +
        '脱ぐときは靴下→靴の逆順になります。\n\n' +
        '変換の合成の逆 = 各逆変換を逆順に適用',
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
      title: 'まとめ：逆行列',
      content:
        'この章のポイント：\n\n' +
        '1. 逆行列A⁻¹ = Aの変換を「巻き戻す」行列\n' +
        '2. AA⁻¹ = A⁻¹A = I（単位行列）\n' +
        '3. det(A) ≠ 0 のときのみ存在\n' +
        '4. 2×2公式：(1/det) × [[d,-b],[-c,a]]\n' +
        '5. (AB)⁻¹ = B⁻¹A⁻¹（順序の逆転）\n\n' +
        '逆行列は連立方程式を解く鍵です。次の章で学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'inverse-matrix-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
