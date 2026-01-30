import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const sinWaveTutorial: Tutorial = {
  id: 'sin-wave',
  title: 'sinの波',
  description: 'sinを角度の関数として見ると波になる',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '縦の影が波を描く',
      content:
        '縦の影（sin）を角度ごとにグラフにすると、滑らかな波になります。円の回転が生み出す、もうひとつの波を見てみましょう。',
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
        'ドラッグして、円上の位置とsinグラフの関係を確かめましょう。',
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
      id: 'example-ascent',
      title: '0°から90°：上り坂',
      content:
        '角度が増えると点は上に移動し、縦の影は伸びます。sin 0° = 0 から sin 90° = 1 へ、グラフでは上り坂です。cosが下り坂だったのと対照的ですね。',
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
            id: 'v45',
            vector: new Vector3(
              Math.cos(Math.PI / 4),
              Math.sin(Math.PI / 4),
              0
            ),
            color: '#66ff44',
            label: '45°: sin≈0.71',
            showComponents: true,
          },
          {
            id: 'v90',
            vector: new Vector3(0, 1, 0),
            color: '#88ff44',
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
      id: 'example-descent',
      title: '90°から180°：山を下る',
      content:
        '山頂（sin=1）を過ぎると、点は左に移動しながら降りていきます。sin 180° = 0。縦の影は再びゼロに。グラフの山がひとつ完成しました。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'v90',
            vector: new Vector3(0, 1, 0),
            color: '#88ff4466',
            label: '90°: sin=1',
            showComponents: true,
          },
          {
            id: 'v135',
            vector: new Vector3(
              Math.cos((3 * Math.PI) / 4),
              Math.sin((3 * Math.PI) / 4),
              0
            ),
            color: '#66ff66',
            label: '135°: sin≈0.71',
            showComponents: true,
          },
          {
            id: 'v180',
            vector: new Vector3(-1, 0, 0),
            color: '#44ff88',
            label: '180°: sin=0',
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
      id: 'predict-start',
      title: '予測してみよう',
      content:
        'cosの波は1から始まりました。\n\nsinの波はどこから始まるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'sin-graph',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sinの波はどの値から始まる？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: '-1', correct: false },
          { id: 'd', label: '0.5', correct: false },
        ],
        explanation:
          'sin 0° = 0 です。cosは1から始まりますが、sinは0から始まります。同じ波の形ですが、スタート地点が90°ずれています。',
      },
    },
    {
      id: 'alternate-waves',
      title: '海の波で考える',
      content:
        '波打ち際で海面の高さを測ると sin のグラフになります。\n\n平らな水面（sin=0）から波が盛り上がり（sin=1）、元に戻り（sin=0）、谷に沈み（sin=-1）、また平らに戻る（sin=0）。\n\nこの繰り返しが、sinの波の本質です。海の波も、音の波も、光の波も、すべてsinで記述できます。',
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
        'sinのグラフは360°周期の波。0から始まり、1に上がり、0に戻り、-1に下がり、また0に戻ります。\n\nよくある誤解: sinの波とcosの波は別物だと思うこと。実は同じ形で、90°ずれているだけです。\n\n再生して波の形を確認しましょう。',
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
  ],
};
