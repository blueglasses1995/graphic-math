import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const cosineTutorial: Tutorial = {
  id: 'cosine',
  title: 'cosは横の影',
  description: 'cosは回転する点のX軸への射影。横の影の長さを追いかける',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '横の影が波を作る',
      content:
        '円の上を点が動くと、赤い線（横の影）が伸び縮みします。この赤い影の長さを角度ごとに記録したものが、cosのグラフです。再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'cos-graph',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '白い点をドラッグして、赤い影がどう変わるか観察してください。緑の線（sin）は隠してあります。cosだけに集中しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-cos',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-60deg',
      title: 'cos 60° = 0.5',
      content:
        'cos 60° = 0.5 です。これは斜辺（半径1）の50%の長さ。"半分だけ横にいる"状態です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff444466',
            label: '0°',
          },
          {
            id: 'a60',
            vector: new Vector3(
              Math.cos(Math.PI / 3),
              Math.sin(Math.PI / 3),
              0
            ),
            color: '#ff4444',
            label: '60°: cos=0.5',
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
      id: 'example-0deg',
      title: 'cos 0° = 1',
      content:
        'cos 0° = 1。真横を向いているので、横の影は最大です。半径と同じ長さの1。cosが最も大きくなる瞬間です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0°: cos=1',
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
      id: 'predict-180deg',
      title: '予測してみよう',
      content:
        'cos 0° = 1（真右）、cos 60° = 0.5、cos 90° = 0（真上）と来ました。\n\nでは cos 180° はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-cos',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'cos 180° はいくつ？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '0', correct: false },
          { id: 'c', label: '-1', correct: true },
          { id: 'd', label: '-0.5', correct: false },
        ],
        explanation:
          '180°は真左。横の影は最大ですが、左に出ているのでマイナスです。右が+、左が-。位置の方向が符号を決めます。',
      },
    },
    {
      id: 'alternate-clock',
      title: '時計で考える',
      content:
        '時計で考えましょう。3時の位置が cos=1（真右）。12時が cos=0（真上、横成分なし）。9時が cos=-1（真左）。時計の針が回ると、横方向の位置が cos なのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'v0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '3時: cos=1',
            showComponents: true,
          },
          {
            id: 'v90',
            vector: new Vector3(0, 1, 0),
            color: '#ff8844',
            label: '12時: cos=0',
            showComponents: true,
          },
          {
            id: 'v180',
            vector: new Vector3(-1, 0, 0),
            color: '#ff44aa',
            label: '9時: cos=-1',
            showComponents: true,
          },
          {
            id: 'v270',
            vector: new Vector3(0, -1, 0),
            color: '#ffaa44',
            label: '6時: cos=0',
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
        'cosは横の影。右にいれば正、左にいれば負。最大値は1（0°）、最小値は-1（180°）。角度が増えると横の影は滑らかに変化します。\n\nよくある誤解: cosは「隣辺 / 斜辺」の公式だけだと思うこと。本当は、円上の点のX座標そのものです。\n\n自由にドラッグして確かめてみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-cos',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
