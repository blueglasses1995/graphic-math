import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const cosWaveTutorial: Tutorial = {
  id: 'cos-wave',
  title: 'cosの波',
  description: 'cosを角度の関数として見ると美しい波になる',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '円が波を生む',
      content:
        '横の影（cos）を角度ごとにグラフにすると、美しい波になります。円が回る動きが、波を生み出すのです。',
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
        'ドラッグして、円上の位置とグラフの関係を確かめましょう。',
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
      id: 'example-descent',
      title: '0°から90°：下り坂',
      content:
        '角度が増えると点は上に移動し、横の影は縮みます。グラフでは下り坂です。cos 0° = 1 から cos 90° = 0 へ、滑らかに降りていきます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'v0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0°: cos=1',
            showComponents: true,
          },
          {
            id: 'v45',
            vector: new Vector3(
              Math.cos(Math.PI / 4),
              Math.sin(Math.PI / 4),
              0
            ),
            color: '#ff6644',
            label: '45°: cos≈0.71',
            showComponents: true,
          },
          {
            id: 'v90',
            vector: new Vector3(0, 1, 0),
            color: '#ff8844',
            label: '90°: cos=0',
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
      id: 'example-valley',
      title: '90°から180°：谷の底へ',
      content:
        '横の影がゼロになった後、今度は左に出始めます。グラフはさらに下がって谷の底（-1）に達します。cos 90° = 0 から cos 180° = -1 へ。マイナスの世界に突入します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'v90',
            vector: new Vector3(0, 1, 0),
            color: '#ff884466',
            label: '90°: cos=0',
            showComponents: true,
          },
          {
            id: 'v135',
            vector: new Vector3(
              Math.cos((3 * Math.PI) / 4),
              Math.sin((3 * Math.PI) / 4),
              0
            ),
            color: '#ff6688',
            label: '135°: cos≈-0.71',
            showComponents: true,
          },
          {
            id: 'v180',
            vector: new Vector3(-1, 0, 0),
            color: '#ff4488',
            label: '180°: cos=-1',
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
      id: 'predict-period',
      title: '予測してみよう',
      content:
        'cosの波は1から始まり、0を経て-1に下がりました。ここから上昇して、また1に戻るはずです。\n\n何度で最初の値に戻るでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'cos-graph',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'cosの波は何度で最初の値に戻る？',
        options: [
          { id: 'a', label: '180°', correct: false },
          { id: 'b', label: '270°', correct: false },
          { id: 'c', label: '360°', correct: true },
          { id: 'd', label: '720°', correct: false },
        ],
        explanation:
          '360°で一周して元の位置に戻るので、cos(0°) = cos(360°) = 1。cosの波は360°周期です。',
      },
    },
    {
      id: 'alternate-tuning-fork',
      title: '音叉で考える',
      content:
        '音叉を横から見ていると想像してください。プロング（先端）が左右に振動する。その横方向の動きがcosです。\n\n右に最大（cos=1）→ 中央を通過（cos=0）→ 左に最大（cos=-1）→ 中央に戻る（cos=0）→ 右に最大（cos=1）。\n\nこのリズムが、cosの波そのものです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
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
        'cosのグラフは360°周期の波。1から始まり、0を経て-1に下がり、また0を経て1に戻ります。\n\nよくある誤解: cosの波とsinの波は同じ形だが、スタート地点が違う。cosは1から、sinは0から始まります。\n\n再生して波の形を目に焼き付けましょう。',
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
  ],
};
