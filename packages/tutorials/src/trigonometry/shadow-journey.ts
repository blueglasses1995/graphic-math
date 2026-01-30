import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const shadowJourneyTutorial: Tutorial = {
  id: 'shadow-journey',
  title: '影の旅：一周の物語',
  description: '円を一周すると影の向きが変わる。プラスとマイナスは影の方向転換',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '影の旅を見届けよう',
      content:
        '点が円を一周します。赤い影（cos）と緑の影（sin）が伸び縮みし、向きも変わります。影の"旅"を見届けましょう。',
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
      title: '4つの象限を探検しよう',
      content:
        'ドラッグして4つの象限を自由に探検してください。各象限で赤と緑の影がどちらを向いているか注目しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        highlightElements: ['quadrants'],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'interactive-unit-circle',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-q1',
      title: '第1象限（右上）',
      content:
        '第1象限（右上）の30°を見ましょう。点は右上にあるので、横の影は右（正）、縦の影は上（正）。cos=0.87, sin=0.5。両方プラスです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'q1',
            vector: new Vector3(
              Math.cos(Math.PI / 6),
              Math.sin(Math.PI / 6),
              0
            ),
            color: '#ffff44',
            label: '30°: cos=0.87, sin=0.5',
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
      id: 'example-q2',
      title: '第2象限（左上）',
      content:
        '第2象限（左上）の150°です。点は左上に移動したので、横の影は左を向いています。cos=-0.87。一方、縦の影はまだ上を向いているので sin=0.5。cosだけがマイナスに変わりました。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'q1-faded',
            vector: new Vector3(
              Math.cos(Math.PI / 6),
              Math.sin(Math.PI / 6),
              0
            ),
            color: '#ffff4466',
            label: '30°',
          },
          {
            id: 'q2',
            vector: new Vector3(
              Math.cos((5 * Math.PI) / 6),
              Math.sin((5 * Math.PI) / 6),
              0
            ),
            color: '#ff8844',
            label: '150°: cos=-0.87, sin=0.5',
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
      id: 'predict-q3',
      title: '予測してみよう',
      content:
        '第1象限は両方プラス、第2象限はcosだけマイナスでした。\n\nでは第3象限（左下、210°）ではどうなるでしょう？',
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
        question: '第3象限（左下、210°）では cosとsinはそれぞれ正？負？',
        options: [
          { id: 'a', label: 'cos+, sin+', correct: false },
          { id: 'b', label: 'cos-, sin+', correct: false },
          { id: 'c', label: 'cos-, sin-', correct: true },
          { id: 'd', label: 'cos+, sin-', correct: false },
        ],
        explanation:
          '第3象限は左下。横の影は左（cos<0）、縦の影は下（sin<0）。両方マイナスです。影がどちらを向いているかで符号が決まります。',
      },
    },
    {
      id: 'alternate-map',
      title: 'マップの方角で考える',
      content:
        'マップアプリの方角で考えましょう。北東（第1象限）は東にも北にもプラス。北西（第2象限）は西にマイナス、北にプラス。南西（第3象限）は両方マイナス。南東（第4象限）は東にプラス、南にマイナス。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ne',
            vector: new Vector3(
              Math.cos(Math.PI / 4),
              Math.sin(Math.PI / 4),
              0
            ),
            color: '#44ff44',
            label: '第1: cos+, sin+',
            showComponents: true,
          },
          {
            id: 'nw',
            vector: new Vector3(
              Math.cos((3 * Math.PI) / 4),
              Math.sin((3 * Math.PI) / 4),
              0
            ),
            color: '#ff8844',
            label: '第2: cos-, sin+',
            showComponents: true,
          },
          {
            id: 'sw',
            vector: new Vector3(
              Math.cos((5 * Math.PI) / 4),
              Math.sin((5 * Math.PI) / 4),
              0
            ),
            color: '#ff4444',
            label: '第3: cos-, sin-',
            showComponents: true,
          },
          {
            id: 'se',
            vector: new Vector3(
              Math.cos((7 * Math.PI) / 4),
              Math.sin((7 * Math.PI) / 4),
              0
            ),
            color: '#4488ff',
            label: '第4: cos+, sin-',
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
        '象限ごとの符号まとめ：\n第1象限（右上）: cos + / sin +\n第2象限（左上）: cos - / sin +\n第3象限（左下）: cos - / sin -\n第4象限（右下）: cos + / sin -\n\n覚え方はシンプル。右にいればcosは正、上にいればsinは正。それだけです。\n\nよくある誤解: 符号を暗記しようとすること。位置を見れば自然にわかります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        highlightElements: ['quadrants'],
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
