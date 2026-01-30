import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const reflectionTutorial: Tutorial = {
  id: 'reflection',
  title: '【実践】鏡映と対称',
  description: '鏡映変換を行列で表し、対称性の数学的な扱いを学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '鏡の中の世界',
      content:
        '鏡を見ると、左右が入れ替わります。右手が左手に見える。\n\n' +
        'この「鏡映（リフレクション）」も線形変換です。\n' +
        '行列で表すと、回転との違いが鮮明にわかります。\n\n' +
        '最大の違い：行列式が -1 になること。\n' +
        '空間の「向き」が反転するのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ref-original',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: '元のベクトル',
          },
          {
            id: 'ref-mirror',
            vector: new Vector3(-2, 1, 0),
            color: '#44aaff',
            label: 'Y軸で鏡映',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '鏡映を体験しよう',
      content:
        'X軸に関する鏡映：Y座標の符号を反転\n' +
        'Mx = [[1, 0], [0, -1]]\n' +
        '(2, 3) → (2, -3)\n\n' +
        'Y軸に関する鏡映：X座標の符号を反転\n' +
        'My = [[-1, 0], [0, 1]]\n' +
        '(2, 3) → (-2, 3)\n\n' +
        '原点に関する鏡映（= 180°回転）：\n' +
        'Mo = [[-1, 0], [0, -1]]\n' +
        '(2, 3) → (-2, -3)',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ref-v',
            vector: new Vector3(2, 3, 0),
            color: '#ff4444',
            label: '(2, 3)',
          },
          {
            id: 'ref-mx',
            vector: new Vector3(2, -3, 0),
            color: '#44ff44',
            label: 'X軸鏡映 (2, -3)',
          },
          {
            id: 'ref-my',
            vector: new Vector3(-2, 3, 0),
            color: '#44aaff',
            label: 'Y軸鏡映 (-2, 3)',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '任意の直線に関する鏡映',
      content:
        '原点を通る角度θの直線に関する鏡映：\n\n' +
        'M(θ) = [[cos2θ, sin2θ], [sin2θ, -cos2θ]]\n\n' +
        'θ = 0°（X軸）→ M = [[1, 0], [0, -1]] ✓\n' +
        'θ = 45°（y=x）→ M = [[0, 1], [1, 0]]\n' +
        '  (2, 3) → (3, 2)  xとyが入れ替わります！\n\n' +
        '鏡映行列の性質：\n' +
        '・det(M) = -1（向き反転）\n' +
        '・M² = I（2回反転で元に戻る）\n' +
        '・M = M⁻¹ = Mᵀ（自分自身が逆行列）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'any-v',
            vector: new Vector3(2, 3, 0),
            color: '#ff4444',
            label: '(2, 3)',
          },
          {
            id: 'any-ref',
            vector: new Vector3(3, 2, 0),
            color: '#44aaff',
            label: 'y=x鏡映 (3, 2)',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '回転と鏡映の関係',
      content:
        '面白い関係があります：\n\n' +
        '鏡映 × 鏡映 = 回転！\n\n' +
        '角度αの軸で鏡映した後、角度βの軸で鏡映すると、\n' +
        '結果は2(β-α)の回転になります。\n\n' +
        '例：X軸で鏡映 → Y軸で鏡映\n' +
        '= [[1,0],[0,-1]] × [[-1,0],[0,1]] = [[-1,0],[0,-1]]\n' +
        '= 180°回転\n\n' +
        '2本の鏡の間で物が回転して見える現象の数学的説明です。',
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
      title: 'クイズ：鏡映変換',
      content: '鏡映変換の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '鏡映行列の行列式はいくつですか？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '-1', correct: true },
          { id: 'c', label: '0', correct: false },
          { id: 'd', label: '直線の角度による', correct: false },
        ],
        explanation:
          '鏡映は面積を保存しますが向きを反転するため、det = -1 です。これが回転（det = 1）との根本的な違いです。',
      },
    },
    {
      id: 'alternate',
      title: '対称性と群論',
      content:
        '鏡映と回転を組み合わせると「対称群」が生まれます。\n\n' +
        '正三角形の対称群D₃には6つの操作があります：\n' +
        '・0°, 120°, 240° の回転（3つ）\n' +
        '・3つの軸に関する鏡映（3つ）\n\n' +
        '雪の結晶（D₆）、正方形（D₄）…自然界の対称性は' +
        '行列の群として数学的に記述できます。\n\n' +
        '群論と線形代数の交差点に、物理学や化学の深い理論があります。',
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
      title: 'まとめ：鏡映と対称',
      content:
        'この章のポイント：\n\n' +
        '1. 鏡映 = 軸に関して反転する変換\n' +
        '2. det(M) = -1（向き反転）\n' +
        '3. M² = I（2回で元に戻る）\n' +
        '4. 鏡映 × 鏡映 = 回転\n' +
        '5. 対称群：回転と鏡映の組み合わせ\n\n' +
        '次はせん断変形を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-orig',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: '元',
          },
          {
            id: 'sum-ref',
            vector: new Vector3(-2, 1, 0),
            color: '#44aaff',
            label: '鏡映',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
