import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const unitCircleTutorial: Tutorial = {
  id: 'unit-circle',
  title: '単位円とは',
  description: '半径1の円の上を点が動く。その座標がsin, cosになる',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '円の上を歩く',
      content:
        '白い点が円の上を動いています。\n\n赤い線と緑の線が伸びたり縮んだりしていますね。\n\nこの赤と緑の長さが、数学で最も重要な関数 ── cosとsin ── の正体です。\n\n再生ボタンを押してアニメーションを見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'trig-sync-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '白い点をドラッグして動かしてみてください。\n\n何が起きますか？\n\n自由に触って、感覚をつかんでください。説明はまだしません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-unit-circle',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-0deg',
      title: '角度0°の場合',
      content:
        '最もシンプルなケースから始めましょう。\n\n角度0°では、点は真横にあります。座標は (1, 0) です。\n\n赤い線（横の成分）は最大の 1、緑の線（縦の成分）は 0。\n\nつまり cos 0° = 1、sin 0° = 0 です。\n\n「横にどれだけいるか」が cos、「上にどれだけいるか」が sin。この2つの数が、円上の点の住所です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0°: cos=1, sin=0',
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
      id: 'example-45deg',
      title: '角度45°の場合',
      content:
        '角度を45°にすると、点は対角線の方向に移動します。\n\n座標は (0.71, 0.71)。横も縦もまったく同じ長さです。\n\ncos 45° ≈ 0.71、sin 45° ≈ 0.71。\n\nなぜ 0.5 ではなく 0.71 なのでしょうか？\n(0.5, 0.5) だと原点からの距離は約0.71で、1になりません。円上にいるためには距離が必ず1なので、(0.71, 0.71) が正解です。',
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
            id: 'a45',
            vector: new Vector3(
              Math.cos(Math.PI / 4),
              Math.sin(Math.PI / 4),
              0
            ),
            color: '#ffff44',
            label: '45°: (0.71, 0.71)',
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
      id: 'predict-90deg',
      title: '予測してみよう',
      content:
        '0°では (1, 0)、45°では (0.71, 0.71) でした。\n\nでは90°ではどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-unit-circle',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '角度90°のとき、cosとsinの値は？',
        options: [
          { id: 'a', label: 'cos=1, sin=0', correct: false },
          { id: 'b', label: 'cos=0.5, sin=0.5', correct: false },
          { id: 'c', label: 'cos=0, sin=1', correct: true },
          { id: 'd', label: 'cos=0.71, sin=0.71', correct: false },
        ],
        explanation:
          '正解は cos=0, sin=1 です。\n\n90°は真上の位置。横の成分（cos）はゼロ、縦の成分（sin）が最大の1になります。\n\n0°では cos=1, sin=0 でした。90°ではちょうど逆。「横から縦へ」成分が移り変わったのです。',
      },
    },
    {
      id: 'alternate-shadow',
      title: '影で考える',
      content:
        '懐中電灯で横から照らすことを想像してみてください。\n\n壁にできる影の高さが sin です。\n上から照らしたときに床にできる影の長さが cos です。\n\n点が回転すると影が伸びたり縮んだりします。これが三角関数の本質です。\n\ncos²θ + sin²θ = 1 という公式も、「影2つの長さの二乗和が必ず1になる」というピタゴラスの定理の言い換えでしかありません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'r',
            vector: new Vector3(
              Math.cos(Math.PI / 3),
              Math.sin(Math.PI / 3),
              0
            ),
            color: '#ffffff',
            label: '半径 = 1',
            showComponents: true,
          },
          {
            id: 'cos-shadow',
            vector: new Vector3(Math.cos(Math.PI / 3), 0, 0),
            color: '#ff4444',
            label: 'cos = 横の影',
          },
          {
            id: 'sin-shadow',
            vector: new Vector3(0, Math.sin(Math.PI / 3), 0),
            color: '#44ff44',
            label: 'sin = 縦の影',
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
        '単位円（半径1の円）の上を点が動くと、その座標が (cosθ, sinθ) になります。\n\ncos は「横にどれだけいるか」── 壁への影の長さ\nsin は「上にどれだけいるか」── 床への影の高さ\n\nよくある誤解: sinがX座標だと思ってしまうこと。\ncos が横（X）、sin が縦（Y）です。\n\n次の単元で、cosの動きを詳しく見ていきます。もう一度自由にドラッグして遊んでみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-unit-circle',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
