import { Vector3, Matrix3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const eigenvaluesTutorial: Tutorial = {
  id: 'eigenvalues',
  title: '固有値と固有ベクトル',
  description: '線形変換で方向が変わらないベクトル（固有ベクトル）と、その伸縮率（固有値）を理解する',
  category: 'linear-algebra',
  prerequisites: ['basis-vectors', 'linear-transforms', 'matrix-meaning'],
  steps: [
    {
      id: 'eigen-intro',
      title: '固有ベクトルとは？',
      content:
        '線形変換を適用したとき、方向が変わらない（スカラー倍になるだけの）ベクトルを固有ベクトルと呼びます。その倍率が固有値です。Av = λv の関係が成り立ちます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-sample',
            vector: new Vector3(1, 1, 0),
            color: '#ffaa00',
            label: 'v',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'eigen-scale-example',
      title: 'スケーリングの固有ベクトル',
      content:
        'スケーリング行列 [[2,0,0],[0,3,0],[0,0,1]] では、i, j, k がすべて固有ベクトルです。i の固有値は2、j の固有値は3、k の固有値は1です。各軸方向のベクトルは方向が変わりません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'λ=2',
            showComponents: true,
          },
          {
            id: 'eigen-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'λ=3',
            showComponents: true,
          },
          {
            id: 'eigen-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'λ=1',
          },
        ],
        transform: new Matrix3([2, 0, 0, 0, 3, 0, 0, 0, 1]),
        animateTransform: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'eigen-shear-example',
      title: 'せん断の固有ベクトル',
      content:
        'せん断行列 [[1,1,0],[0,1,0],[0,0,1]] の固有ベクトルは i 方向 (1,0,0) のみです（固有値1）。他のベクトルはすべて方向が変化します。黄色のベクトルがせん断で方向が変わる様子を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-vec',
            vector: Vector3.i(),
            color: '#ff4444',
            label: '固有ベクトル (λ=1)',
          },
          {
            id: 'non-eigen',
            vector: new Vector3(0, 1, 0),
            color: '#ffaa00',
            label: '非固有ベクトル',
          },
        ],
        transform: new Matrix3([1, 1, 0, 0, 1, 0, 0, 0, 1]),
        animateTransform: true,
        highlightElements: ['eigenvector'],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'eigen-geometric',
      title: '固有値の幾何学的意味',
      content:
        '固有値 λ > 1 なら固有ベクトル方向に伸び、0 < λ < 1 なら縮み、λ < 0 なら向きが反転します。λ = 0 は固有ベクトルがゼロに潰れることを意味します。この行列では (1,1,0) 方向が固有ベクトル（λ=2）です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-stretch',
            vector: new Vector3(1, 1, 0).normalize(),
            color: '#ff4444',
            label: 'λ=2 (伸びる)',
            showComponents: true,
          },
          {
            id: 'eigen-shrink',
            vector: new Vector3(1, -1, 0).normalize(),
            color: '#44aaff',
            label: 'λ=0.5 (縮む)',
            showComponents: true,
          },
        ],
        transform: Matrix3.fromColumns(
          new Vector3(1.25, 0.75, 0),
          new Vector3(0.75, 1.25, 0),
          Vector3.k()
        ),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'eigen-summary',
      title: 'まとめ',
      content:
        '固有ベクトルは線形変換の「特別な方向」で、変換しても方向が変わりません。固有値はその方向の伸縮率です。固有分解は物理学（振動モード）、データ分析（主成分分析）、機械学習など多くの分野で重要な役割を果たします。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-1',
            vector: new Vector3(1, 1, 0).normalize(),
            color: '#ff4444',
            label: '固有ベクトル 1',
          },
          {
            id: 'eigen-2',
            vector: new Vector3(1, -1, 0).normalize(),
            color: '#44aaff',
            label: '固有ベクトル 2',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
  ],
};
