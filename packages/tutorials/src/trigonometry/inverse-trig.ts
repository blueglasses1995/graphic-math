import { Tutorial } from '../types';

export const inverseTrigTutorial: Tutorial = {
  id: 'inverse-trig',
  title: '逆関数：角度を求める',
  description: 'arcsin, arccos, arctanの意味と使い方を視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '値から角度へ',
      content:
        'sin(30°) = 0.5 は知っています。では「sinが0.5になる角度は？」と聞かれたら？\n\n逆三角関数は「値 → 角度」の逆引き。arcsin(0.5) = 30°。\n\nsin/cos/tanの矢印をひっくり返す関数です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#4fc3f7', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'inverse-trig-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '逆引きを体験',
      content:
        'y軸上の値を動かして、対応する角度がどう変わるか確認しましょう。\n\narcsinの値域は -90° ～ 90°。なぜ範囲を制限する必要があるのでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'inverse-trig-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'value', min: -1, max: 1, step: 0.01, initial: 0.5 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '具体例：arcsin',
      content:
        'arcsin(x) は「sinがxになる角度」を返します。\n\narcsin(0) = 0°\narcsin(0.5) = 30°\narcsin(√2/2) = 45°\narcsin(1) = 90°\n\n値域: -90° ≤ arcsin(x) ≤ 90°\n定義域: -1 ≤ x ≤ 1\n\nsinの値は-1～1なので、それ以外の入力はエラーです。',
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
      title: '具体例：arctan',
      content:
        'arctan(x) は「tanがxになる角度」を返します。\n\narctan(0) = 0°\narctan(1) = 45°\narctan(√3) = 60°\n\n値域: -90° < arctan(x) < 90°\n定義域: すべての実数\n\ntanの値に制限はないので、どんな数でもarctanに入れられます。プログラミングでの座標→角度変換によく使います（atan2関数）。',
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
        '逆三角関数の値を考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'arccos(0) はいくつ？',
        options: [
          { id: 'a', label: '0°', correct: false },
          { id: 'b', label: '45°', correct: false },
          { id: 'c', label: '90°', correct: true },
          { id: 'd', label: '180°', correct: false },
        ],
        explanation:
          'cos(90°) = 0 なので arccos(0) = 90°。\n\narccos の値域は 0° ～ 180° です。',
      },
    },
    {
      id: 'alternate',
      title: 'なぜ範囲を制限する？',
      content:
        'sin(30°) = 0.5 だけど sin(150°) = 0.5 でもあります。\n\n「sinが0.5になる角度」は無限にあります。逆関数として一つの値を返すには、範囲を制限する必要があります。\n\narcsin: -90°～90°（右半分）\narccos: 0°～180°（上半分）\narctan: -90°～90°（右半分）\n\nこの制限を「主値」と呼びます。',
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
        '逆三角関数は「値 → 角度」の変換:\n\n・arcsin(x): sinがxになる角度（-90°～90°）\n・arccos(x): cosがxになる角度（0°～180°）\n・arctan(x): tanがxになる角度（-90°～90°）\n\n複数の答えがあり得るため「主値」に限定して返します。プログラミングや工学で座標を角度に変換する場面で大活躍します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'inverse-trig-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
