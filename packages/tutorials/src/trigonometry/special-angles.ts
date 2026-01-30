import { Tutorial } from '../types';

export const specialAnglesTutorial: Tutorial = {
  id: 'special-angles',
  title: '特殊角を見る',
  description: '30°, 45°, 60°の三角関数の値を視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '暗記しなくていい',
      content:
        '30°, 45°, 60° の三角関数の値は「暗記」するものだと思っていませんか？\n\n実は、正三角形と正方形の対角線から自然に導けます。暗記ではなく「見て」理解しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#4fc3f7', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'special-angles-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '特殊角を確認',
      content:
        '単位円上で30°、45°、60°の位置に点を動かしてみましょう。\n\nそれぞれの座標(cosθ, sinθ)を確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'special-angles-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'drag-unit-circle',
        initialAngle: 0.524,
      },
    },
    {
      id: 'example-1',
      title: '45°：正方形の対角線',
      content:
        '1辺1の正方形の対角線は√2。\n\n直角二等辺三角形の辺の比は 1 : 1 : √2。\n斜辺を1（単位円）にすると各辺は 1/√2 = √2/2。\n\nだから:\nsin(45°) = √2/2 ≈ 0.707\ncos(45°) = √2/2 ≈ 0.707\ntan(45°) = 1\n\nsin = cos になる唯一の鋭角が45°です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '30°と60°：正三角形を半分に',
      content:
        '1辺2の正三角形を半分に切ると、辺の比 1 : √3 : 2 の直角三角形ができます。\n\n斜辺を1（単位円）にすると:\n\n30°の場合:\nsin(30°) = 1/2, cos(30°) = √3/2\n\n60°の場合:\nsin(60°) = √3/2, cos(60°) = 1/2\n\n30°と60°でsinとcosが入れ替わります。これは2つの角が補角（合計90°）だからです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        '特殊角の値を思い出しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'tan(60°) の値は？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '√3/2', correct: false },
          { id: 'c', label: '√3', correct: true },
          { id: 'd', label: '1/√3', correct: false },
        ],
        explanation:
          'tan(60°) = sin(60°)/cos(60°) = (√3/2)/(1/2) = √3 ≈ 1.73\n\n60°の直線はかなり急な傾きです。',
      },
    },
    {
      id: 'alternate',
      title: '覚え方のコツ',
      content:
        'sin の値を角度順に並べると:\nsin(0°) = 0, sin(30°) = 1/2, sin(45°) = √2/2, sin(60°) = √3/2, sin(90°) = 1\n\n分子だけ見ると: √0/2, √1/2, √2/2, √3/2, √4/2\n\nつまり √0, √1, √2, √3, √4 を2で割ったもの！\n\ncosはこの逆順。この規則を知っていれば一瞬で思い出せます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '特殊角の三角関数:\n\n| 角度 | sin | cos | tan |\n| 30° | 1/2 | √3/2 | 1/√3 |\n| 45° | √2/2 | √2/2 | 1 |\n| 60° | √3/2 | 1/2 | √3 |\n\nこれらは正方形と正三角形から導けます。暗記よりも「なぜその値になるのか」を理解しておけば、いつでも導き直せます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'special-angles-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
