import { Vector3, Transforms } from '@learnmath/core';
import { Tutorial } from '../types';

export const linearTransformsTutorial: Tutorial = {
  id: 'linear-transforms',
  title: '線形変換',
  description: 'スケーリング、回転、せん断など、代表的な線形変換を視覚的に体験する',
  category: 'linear-algebra',
  prerequisites: ['basis-vectors'],
  steps: [
    {
      id: 'transform-intro',
      title: '線形変換とは？',
      content:
        '線形変換は、ベクトルを別のベクトルに写す関数です。原点を動かさず、直線を直線に保ち、平行線を平行に保つという性質があります。行列を使って表現できます。',
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
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'transform-scale',
      title: 'スケーリング変換',
      content:
        'スケーリングは各軸方向にベクトルを伸縮させます。この例ではx方向に2倍、y方向に0.5倍にスケーリングしています。グリッドの変形に注目してください。',
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
        transform: Transforms.scale(2, 0.5, 1),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'transform-rotation',
      title: '回転変換',
      content:
        '回転変換はベクトルの長さを保ったまま方向を変えます。ここではz軸周りに45度（π/4ラジアン）回転させています。基底ベクトル i, j がどのように移動するか観察しましょう。',
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
        transform: Transforms.rotationZ(Math.PI / 4),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'transform-shear',
      title: 'せん断変換',
      content:
        'せん断（シア）変換は、ある軸方向に別の軸の成分に比例してずらす変換です。x方向にy成分の0.5倍だけずらしています。長方形が平行四辺形に変形する様子を観察しましょう。',
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
        transform: Transforms.shearXY(0.5),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'transform-composition',
      title: '変換の合成',
      content:
        '複数の線形変換を順に適用することを「合成」と呼びます。行列の積で表現できます。ここでは回転の後にスケーリングを適用しています。合成の順序が結果に影響することに注意しましょう。',
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
        transform: Transforms.scale(1.5, 1.5, 1).compose(
          Transforms.rotationZ(Math.PI / 6)
        ),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
  ],
};
