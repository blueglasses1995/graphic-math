import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const unitCircleTutorial: Tutorial = {
  id: 'unit-circle',
  title: '単位円と三角関数',
  description: '単位円を使ってsin, cos, tanの意味を視覚化する',
  category: 'trigonometry',
  steps: [
    {
      id: 'intro', title: '単位円とは',
      content: '半径1の円を「単位円」と呼びます。三角関数のすべてはこの円から始まります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false, nextCondition: 'click'
    },
    {
      id: 'cos-sin', title: 'cosとsin',
      content: '角度θの点の座標は (cos θ, sin θ) です。X座標がcos、Y座標がsinです。',
      sceneConfig: {
        showGrid: true, showAxes: true,
        vectors: [
          { id: 'radius', vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0), color: '#ff44ff', label: '(cos θ, sin θ)' },
          { id: 'cos', vector: new Vector3(Math.cos(Math.PI / 4), 0, 0), color: '#ff4444', label: 'cos θ', showComponents: false },
          { id: 'sin', vector: new Vector3(0, Math.sin(Math.PI / 4), 0), color: '#44ff44', label: 'sin θ', showComponents: false }
        ],
        cameraPosition: [0, 0, 4]
      },
      interactive: true, nextCondition: 'click'
    },
    {
      id: 'angles', title: '主要な角度',
      content: '0°, 30°, 45°, 60°, 90° の値を覚えると、三角関数が直感的にわかります。',
      sceneConfig: {
        showGrid: true, showAxes: true,
        vectors: [
          { id: 'a0', vector: new Vector3(1, 0, 0), color: '#ff4444', label: '0°' },
          { id: 'a30', vector: new Vector3(Math.cos(Math.PI/6), Math.sin(Math.PI/6), 0), color: '#ff8844', label: '30°' },
          { id: 'a45', vector: new Vector3(Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0), color: '#ffff44', label: '45°' },
          { id: 'a60', vector: new Vector3(Math.cos(Math.PI/3), Math.sin(Math.PI/3), 0), color: '#44ff44', label: '60°' },
          { id: 'a90', vector: new Vector3(0, 1, 0), color: '#4444ff', label: '90°' }
        ],
        cameraPosition: [0, 0, 4]
      },
      interactive: true, nextCondition: 'click'
    },
    {
      id: 'identity', title: '基本公式',
      content: 'sin²θ + cos²θ = 1 は、単位円上の点から原点までの距離が常に1であることを意味します。',
      sceneConfig: {
        showGrid: true, showAxes: true,
        vectors: [
          { id: 'radius', vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0), color: '#ff44ff', label: 'r = 1', showComponents: true }
        ],
        cameraPosition: [0, 0, 4]
      },
      interactive: true, nextCondition: 'click'
    },
    {
      id: 'summary', title: 'まとめ',
      content: '単位円は三角関数の土台です。角度を回転と捉え、座標がcosとsinを表します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false, nextCondition: 'click'
    }
  ]
};
