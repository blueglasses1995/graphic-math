import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const sineTutorial: Tutorial = {
  id: 'sine',
  title: 'sinは縦の影',
  description: 'sinは回転する点のY軸への射影。縦の影の長さを追いかける',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '縦の影が波を作る',
      content:
        '円の上を点が動くと、緑の線（縦の影）が伸び縮みします。この緑の影の長さを角度ごとに記録したものが、sinのグラフです。再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sin-graph',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '白い点をドラッグして、緑の影がどう変わるか観察してください。赤い線（cos）は隠してあります。sinだけに集中しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-sin',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-30deg',
      title: 'sin 30° = 0.5',
      content:
        'sin 30° = 0.5。斜辺の半分の高さ。"少しだけ上にいる"状態です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#44ff4466',
            label: '0°',
          },
          {
            id: 'a30',
            vector: new Vector3(
              Math.cos(Math.PI / 6),
              Math.sin(Math.PI / 6),
              0
            ),
            color: '#44ff44',
            label: '30°: sin=0.5',
            showComponents: true,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-90deg',
      title: 'sin 90° = 1',
      content:
        'sin 90° = 1。真上を向いているので、縦の影は最大。sinが最も大きくなる瞬間です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#44ff44',
            label: '90°: sin=1',
            showComponents: true,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict-270deg',
      title: '予測してみよう',
      content:
        'sin 0° = 0、sin 90° = 1、sin 180° = 0 と来ました。\n\nでは sin 270° はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-sin',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin 270° はいくつ？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '0', correct: false },
          { id: 'c', label: '-1', correct: true },
          { id: 'd', label: '0.5', correct: false },
        ],
        explanation:
          '270°は真下。縦の影は最大ですが、下に出ているのでマイナスです。上が+、下が-。',
      },
    },
    {
      id: 'alternate-elevator',
      title: 'エレベーターで考える',
      content:
        'エレベーターで考えましょう。1階（sin=0）から最上階（sin=1）に上がり、また1階に戻り、地下（sin=-1）まで降りる。sinは階数の変化です。\n\n0° → 1階（出発）\n90° → 最上階\n180° → 1階に戻る\n270° → 地下\n360° → また1階\n\nこの上下の動きが、sinの波の正体です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'v0',
            vector: new Vector3(1, 0, 0),
            color: '#44ff44',
            label: '0°: sin=0',
            showComponents: true,
          },
          {
            id: 'v90',
            vector: new Vector3(0, 1, 0),
            color: '#88ff44',
            label: '90°: sin=1',
            showComponents: true,
          },
          {
            id: 'v180',
            vector: new Vector3(-1, 0, 0),
            color: '#44ff88',
            label: '180°: sin=0',
            showComponents: true,
          },
          {
            id: 'v270',
            vector: new Vector3(0, -1, 0),
            color: '#44ffaa',
            label: '270°: sin=-1',
            showComponents: true,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'sinは縦の影。上にいれば正、下にいれば負。最大値は1（90°）、最小値は-1（270°）。\n\nよくある誤解: sinとcosの違いが曖昧になること。sinは縦（Y）、cosは横（X）。エレベーターの階数がsin、左右の位置がcosです。\n\n自由にドラッグして確かめてみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-sin',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
