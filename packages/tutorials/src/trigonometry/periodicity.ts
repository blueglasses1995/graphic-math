import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const periodicityTutorial: Tutorial = {
  id: 'periodicity',
  title: '波は繰り返す',
  description: '360°で同じ値に戻る。周期性こそ三角関数の根幹',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '終わりのない旅',
      content:
        '点が円を2周します。cosとsinの波が繰り返されるのを見届けましょう。1周目と2周目、まったく同じ波が現れます。',
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
      title: '360°を超えてみよう',
      content:
        'ドラッグして360°を超えてみてください。同じ座標に戻ることを体感しましょう。何周しても、同じ場所に帰ってきます。',
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
    {
      id: 'example-sin390',
      title: 'sin 30° = sin 390°',
      content:
        'sin 30° = 0.5 です。では sin 390° は？\n\n390° = 360° + 30°。つまり1周して30°の位置に戻っています。だから sin 390° = sin 30° = 0.5。\n\n360°を足しても値は変わりません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'v30',
            vector: new Vector3(
              Math.cos(Math.PI / 6),
              Math.sin(Math.PI / 6),
              0
            ),
            color: '#44ff44',
            label: '30° (= 390°): sin=0.5',
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
      id: 'example-cos720',
      title: 'cos 0° = cos 720°',
      content:
        'cos 0° = 1 です。cos 720° は？\n\n720° = 360° × 2。2周してスタート地点に戻っています。だから cos 720° = cos 0° = 1。\n\n何周足しても、余りが同じなら値は同じです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'v0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0° (= 720°): cos=1',
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
      id: 'predict-1000',
      title: '予測してみよう',
      content:
        '360°を足しても値は変わらないことがわかりました。\n\nでは sin 1000° を求めるにはどうすればよいでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin 1000° を求めるには？',
        options: [
          { id: 'a', label: '電卓で直接計算するしかない', correct: false },
          { id: 'b', label: '1000 ÷ 360 の余り 280° を使い、sin 280° を求める', correct: true },
          { id: 'c', label: '1000 ÷ 180 の余り を使う', correct: false },
          { id: 'd', label: 'sin 100° と同じ', correct: false },
        ],
        explanation:
          '1000 ÷ 360 = 2 余り 280。つまり sin 1000° = sin 280° です。360°で割った余りだけが意味を持つのが周期性の力です。',
      },
    },
    {
      id: 'alternate-seasons',
      title: '季節で考える',
      content:
        '1年は365日で季節が繰り返します。sin/cosは360°で値が繰り返します。どちらも周期現象です。\n\n地球の公転も、振り子の揺れも、心臓の鼓動も、繰り返すものはすべて三角関数の仲間です。\n\n「今年の7月」と「来年の7月」の気温がほぼ同じように、sin 30° と sin 390° は同じ値です。',
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
        'sin と cos は360°ごとに同じ値に戻ります。これが周期性です。\n\nどんなに大きな角度でも、360°で割った余りだけで値が決まります。\n\nよくある誤解: 360°を超えた角度には意味がないと思うこと。何周でも同じルールが適用されます。円は終わりのないループです。\n\nドラッグして何周か回してみましょう。',
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
