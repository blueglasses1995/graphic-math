import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const solvingSystemsTutorial: Tutorial = {
  id: 'solving-systems',
  title: '連立方程式を行列で解く',
  description: '連立方程式を行列形式 Ax = b で表し、逆行列を使って解く方法を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '方程式を一瞬で解く',
      content:
        '2x + 3y = 8\n' +
        'x + 4y = 9\n\n' +
        '中学で学ぶ連立方程式。代入法や消去法で解きますよね。\n\n' +
        'でも行列を使えば、もっとエレガントに解けます。\n' +
        'しかも変数が100個、1000個になっても同じ方法が使えるのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'solving-systems-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '行列形式にしてみよう',
      content:
        '2x + 3y = 8, x + 4y = 9 を行列で書くと：\n\n' +
        '[[2, 3], [1, 4]] × [[x], [y]] = [[8], [9]]\n\n' +
        'つまり Ax = b の形です。\n' +
        'A = [[2,3],[1,4]], x = [[x],[y]], b = [[8],[9]]\n\n' +
        '解き方：x = A⁻¹b\n\n' +
        '逆行列さえ求められれば、掛け算1回で解が出ます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'solving-systems-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '実際に解いてみよう',
      content:
        'A = [[2, 3], [1, 4]], b = [[8], [9]]\n\n' +
        'Step 1: det(A) = 2×4 - 3×1 = 5 ≠ 0 → 解は1つ\n\n' +
        'Step 2: A⁻¹ = (1/5)[[4, -3], [-1, 2]]\n\n' +
        'Step 3: x = A⁻¹b = (1/5)[[4×8+(-3)×9], [(-1)×8+2×9]]\n' +
        '       = (1/5)[[32-27], [-8+18]]\n' +
        '       = (1/5)[[5], [10]]\n' +
        '       = [[1], [2]]\n\n' +
        '答え：x = 1, y = 2\n' +
        '検算：2(1)+3(2) = 8 ✓、1(1)+4(2) = 9 ✓',
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
      title: '幾何学的な意味',
      content:
        '連立方程式を幾何学的に見ると：\n\n' +
        '2x + 3y = 8 → 直線1\n' +
        'x + 4y = 9 → 直線2\n\n' +
        '解 (x, y) = (1, 2) は2本の直線の交点です。\n\n' +
        '行列の視点では：\n' +
        'Ax = b は「変換Aの下で、bに変換される点xはどこ？」という問いです。\n\n' +
        'det(A) ≠ 0 なら交点は1つ。\n' +
        'det(A) = 0 なら平行（解なし）か一致（無数の解）。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：連立方程式',
      content: '行列を使った連立方程式の解法を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '連立方程式 Ax = b で det(A) = 0 のとき、何が言えますか？',
        options: [
          { id: 'a', label: '解はちょうど1つ存在する', correct: false },
          { id: 'b', label: '解は必ず存在しない', correct: false },
          { id: 'c', label: '解がないか、無数にある', correct: true },
          { id: 'd', label: '解は常に零ベクトル', correct: false },
        ],
        explanation:
          'det(A) = 0 では逆行列が存在しないため、唯一解はありません。bが列空間に含まれれば無数の解、含まれなければ解なしです。',
      },
    },
    {
      id: 'alternate',
      title: 'クラメルの公式',
      content:
        '逆行列以外にも、行列式を使う解法があります。クラメルの公式です。\n\n' +
        'Ax = b の第i成分は：\n' +
        'xᵢ = det(Aᵢ) / det(A)\n\n' +
        'ここでAᵢは、Aの第i列をbで置き換えた行列です。\n\n' +
        '例：x = det([[8,3],[9,4]]) / det([[2,3],[1,4]])\n' +
        '   = (32-27) / (8-3) = 5/5 = 1\n\n' +
        '理論的に美しい公式ですが、大きな行列では計算量が膨大になるため、' +
        '実用ではガウス消去法やLU分解が使われます。',
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
      title: 'まとめ：連立方程式と行列',
      content:
        'この章のポイント：\n\n' +
        '1. 連立方程式 → Ax = b の行列形式\n' +
        '2. det(A) ≠ 0 → 唯一解 x = A⁻¹b\n' +
        '3. det(A) = 0 → 解なし or 無数の解\n' +
        '4. 幾何学的には直線（平面）の交点\n' +
        '5. クラメルの公式：行列式で各成分を計算\n\n' +
        '行列は方程式を解くための強力なツールです。' +
        '次は列空間と零空間を学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'solving-systems-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
