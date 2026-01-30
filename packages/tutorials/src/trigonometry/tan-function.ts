import { Tutorial } from '../types';

export const tanFunctionTutorial: Tutorial = {
  id: 'tan-function',
  title: 'tanの正体',
  description: 'tan(θ)の意味をsin/cosとの関係から視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: 'tanって何者？',
      content:
        'sin、cosは単位円の座標でした。では tan(θ) とは何でしょう？\n\n実は tan(θ) = sin(θ) / cos(θ)。つまり「傾き」です。\n\n単位円の点から原点への直線の傾きがtan(θ)。アニメーションで確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '傾きを感じよう',
      content:
        '単位円上の点を動かしてみましょう。\n\n角度が大きくなると傾きはどう変わりますか？ 90°に近づくとどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'drag-unit-circle',
        initialAngle: 0,
      },
    },
    {
      id: 'example-1',
      title: '具体例：tan(45°)',
      content:
        'θ = 45° のとき:\nsin(45°) = √2/2 ≈ 0.707\ncos(45°) = √2/2 ≈ 0.707\n\ntan(45°) = sin(45°) / cos(45°) = 1\n\n45°の直線は傾き1。つまりy = xの線です。\n\n原点から右上45°に伸びる直線の傾きが1であることは、直感的にも納得できますね。',
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
      title: '具体例：tan(60°)とtan(90°)',
      content:
        'θ = 60° のとき:\ntan(60°) = sin(60°)/cos(60°) = (√3/2)/(1/2) = √3 ≈ 1.73\n\n傾きが急になっています。\n\nθ = 90° のとき:\ncos(90°) = 0 なので tan(90°) = sin(90°)/0 → 定義できない！\n\n垂直な線には「傾き」がありません。これがtan(θ)のグラフに縦の漸近線が現れる理由です。',
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
        'tan(θ) = sin(θ)/cos(θ) を使って考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'tan(0°) の値はいくつ？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: '定義できない', correct: false },
          { id: 'd', label: '-1', correct: false },
        ],
        explanation:
          'tan(0°) = sin(0°)/cos(0°) = 0/1 = 0\n\n0°の直線は水平なので傾きは0です。',
      },
    },
    {
      id: 'alternate',
      title: '接線としてのtan',
      content:
        'tanは英語で「tangent（接線）」。実は単位円の x=1 の接線上での長さとしても解釈できます。\n\n単位円上の点(cosθ, sinθ)から原点を通る直線を引き、x=1の直線との交点のy座標がtan(θ)です。\n\nこの「接線上の長さ」が名前の由来。幾何学的にも美しい関係です。',
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
        'tan(θ) = sin(θ) / cos(θ) = 直線の傾き\n\n・tan(0°) = 0（水平）\n・tan(45°) = 1（45度の傾き）\n・tan(90°) = 定義できない（垂直）\n\n周期はπ（180°）で、90°ごとに漸近線があります。sin/cosとの関係を覚えておけば、tanの値はいつでも計算できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
