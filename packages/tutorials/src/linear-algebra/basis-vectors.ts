import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const basisVectorsTutorial: Tutorial = {
  id: 'basis-vectors',
  title: '基底ベクトル',
  description: '標準基底ベクトル i, j, k を理解し、任意のベクトルが基底の線形結合であることを学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'basis-intro',
      title: '基底ベクトルとは？',
      content:
        '基底ベクトルは座標空間の「基本方向」を定義します。3D空間では、i（x方向）、j（y方向）、k（z方向）の3つの基底ベクトルが標準基底を構成します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'basis-i',
      title: '基底ベクトル i',
      content:
        'ベクトル i = (1, 0, 0) はx軸の正方向を指す単位ベクトルです。赤い矢印で表示されています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
            showComponents: false,
          },
        ],
        cameraPosition: [3, 2, 2],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'basis-j',
      title: '基底ベクトル j',
      content:
        'ベクトル j = (0, 1, 0) はy軸の正方向を指す単位ベクトルです。緑の矢印で表示されています。',
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
        ],
        cameraPosition: [3, 2, 2],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'basis-k',
      title: '基底ベクトル k',
      content:
        'ベクトル k = (0, 0, 1) はz軸の正方向を指す単位ベクトルです。青い矢印で表示されています。これで3つの標準基底が揃いました。',
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
      id: 'basis-linear-combination',
      title: '線形結合',
      content:
        '任意のベクトル v = (2, 3, 1) は基底ベクトルの線形結合として表現できます: v = 2i + 3j + 1k。各成分が基底ベクトルのスカラー倍であることを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-2i',
            vector: Vector3.i().scale(2),
            color: '#ff4444',
            label: '2i',
            showComponents: true,
          },
          {
            id: 'vec-3j',
            vector: Vector3.j().scale(3),
            color: '#44ff44',
            label: '3j',
            showComponents: true,
          },
          {
            id: 'vec-1k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: '1k',
            showComponents: true,
          },
          {
            id: 'vec-v',
            vector: new Vector3(2, 3, 1),
            color: '#ffaa00',
            label: 'v = (2,3,1)',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'basis-summary',
      title: 'まとめ',
      content:
        '標準基底ベクトル i, j, k は3D空間のすべてのベクトルを表現するための土台です。任意のベクトルは、これらの基底の線形結合（スカラー倍の和）として一意に表せます。この概念が線形代数の出発点となります。',
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
  ],
};
