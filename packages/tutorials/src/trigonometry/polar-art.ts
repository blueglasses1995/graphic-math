import { Tutorial } from '../types';

export const polarArtTutorial: Tutorial = {
  id: 'polar-art',
  title: '【実践】極座標アート',
  description: '極座標と三角関数を使って美しい曲線を描く',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '数式が描く花',
      content:
        'r = cos(3θ) という式を極座標でプロットすると、3枚の花びらが現れます。\n\n三角関数と極座標を組み合わせると、驚くほど美しい曲線が生まれます。アニメーションで花が咲く様子を見てみましょう。',
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
      title: '花びらの数を変えよう',
      content:
        'r = cos(nθ) の n を変えてみましょう。\n\nn = 2: 4枚の花びら\nn = 3: 3枚の花びら\nn = 4: 8枚の花びら\nn = 5: 5枚の花びら\n\nnが奇数のときn枚、偶数のとき2n枚。なぜでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'petals', min: 1, max: 12, step: 1, initial: 3 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '極座標の基本',
      content:
        '極座標では点を (r, θ) で表します。\n・r: 原点からの距離\n・θ: x軸からの角度\n\n直交座標への変換:\nx = r·cosθ\ny = r·sinθ\n\n例: (r, θ) = (2, 45°)\nx = 2cos(45°) = √2 ≈ 1.41\ny = 2sin(45°) = √2 ≈ 1.41\n\n円は r = 一定、直線は θ = 一定 で表せます。',
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
      title: '有名な極座標曲線',
      content:
        'バラ曲線: r = cos(nθ)\n花びらのような美しい曲線。\n\nカージオイド: r = 1 + cosθ\nハート形の曲線。マイクの指向性にも登場。\n\nアルキメデスの螺旋: r = θ\n角度に比例して広がる渦巻き。レコードの溝の形。\n\nリマソン: r = a + b·cosθ\na/bの比で形が変わる。カージオイドはa = bの特殊ケース。',
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
        '極座標曲線について考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'r = cos(5θ) の花びらは何枚？',
        options: [
          { id: 'a', label: '10枚', correct: false },
          { id: 'b', label: '5枚', correct: true },
          { id: 'c', label: '15枚', correct: false },
          { id: 'd', label: '25枚', correct: false },
        ],
        explanation:
          'r = cos(nθ) で n が奇数のとき花びらは n 枚。\nn = 5（奇数）なので 5 枚です。\n\n偶数のとき（例: n = 4）は 2n = 8 枚になります。',
      },
    },
    {
      id: 'alternate',
      title: 'スピログラフ',
      content:
        '子供のおもちゃ「スピログラフ」も三角関数で表せます:\n\nx = (R-r)cosθ + d·cos((R-r)θ/r)\ny = (R-r)sinθ − d·sin((R-r)θ/r)\n\nR: 外円の半径、r: 内円の半径、d: ペンの位置\n\nパラメータの比が整数比だと閉じた曲線に。無理数比だと永遠に閉じない曲線になります。三角関数は「美」をも生み出すのです。',
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
        '極座標 + 三角関数 = 美しい曲線:\n\n・極座標: 点を (r, θ) で表す\n・変換: x = r cosθ, y = r sinθ\n・バラ曲線 r = cos(nθ): 花びら模様\n・カージオイド r = 1 + cosθ: ハート形\n\n数式が芸術を生み出す。三角関数の創造的な一面をぜひ楽しんでください。',
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
