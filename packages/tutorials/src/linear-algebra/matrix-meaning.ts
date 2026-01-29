import { Vector3, Matrix3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const matrixMeaningTutorial: Tutorial = {
  id: 'matrix-meaning',
  title: '行列の意味',
  description: '行列の各列が基底ベクトルの行き先を表すことを理解する',
  category: 'linear-algebra',
  prerequisites: ['basis-vectors', 'linear-transforms'],
  steps: [
    {
      id: 'matrix-intro',
      title: '行列は何を意味するのか？',
      content:
        '3x3行列の各列は、標準基底ベクトル i, j, k がどこに移動するかを示しています。つまり、行列を「読む」ことで変換の幾何学的意味がわかります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'matrix-columns',
      title: '列ベクトルとしての行列',
      content:
        'この行列 [[2,0,0],[0,1,0],[0,0,1]] の第1列は (2,0,0) です。これは i が (2,0,0) に移動することを意味します。j と k はそのまま。結果としてx方向に2倍のスケーリングになります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i-dest',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: "i' = (2,0,0)",
            showComponents: true,
          },
          {
            id: 'vec-j-dest',
            vector: Vector3.j(),
            color: '#44ff44',
            label: "j' = (0,1,0)",
          },
          {
            id: 'vec-k-dest',
            vector: Vector3.k(),
            color: '#4444ff',
            label: "k' = (0,0,1)",
          },
        ],
        transform: new Matrix3([2, 0, 0, 0, 1, 0, 0, 0, 1]),
        animateTransform: true,
        highlightElements: ['column-1'],
        cameraPosition: [3, 3, 3],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'matrix-rotation-columns',
      title: '回転行列を列で読む',
      content:
        '90度回転の行列 [[0,-1,0],[1,0,0],[0,0,1]] を列で読むと: i は (0,1,0) へ、j は (-1,0,0) へ移動します。基底ベクトルが反時計回りに90度回転していることが見て取れます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i-dest',
            vector: new Vector3(0, 1, 0),
            color: '#ff4444',
            label: "i' = (0,1,0)",
            showComponents: true,
          },
          {
            id: 'vec-j-dest',
            vector: new Vector3(-1, 0, 0),
            color: '#44ff44',
            label: "j' = (-1,0,0)",
            showComponents: true,
          },
          {
            id: 'vec-k-dest',
            vector: Vector3.k(),
            color: '#4444ff',
            label: "k' = (0,0,1)",
          },
        ],
        transform: new Matrix3([0, -1, 0, 1, 0, 0, 0, 0, 1]),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'matrix-summary',
      title: 'まとめ: 行列を視覚的に理解する',
      content:
        '行列の各列は基底ベクトルの「行き先」です。この視点を持つと、行列を見ただけで変換の意味を直感的に理解できるようになります。行列式（determinant）は基底ベクトルが作る平行六面体の体積変化率を表します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        transform: Matrix3.fromColumns(
          new Vector3(1, 0.5, 0),
          new Vector3(-0.5, 1, 0),
          Vector3.k()
        ),
        animateTransform: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
  ],
};
