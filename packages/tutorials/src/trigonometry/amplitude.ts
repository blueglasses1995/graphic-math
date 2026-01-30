import { Tutorial } from '../types';

export const amplitudeTutorial: Tutorial = {
  id: 'amplitude',
  title: '振幅と高さ',
  description: 'A·sin(θ) の振幅パラメータの意味を視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '波の高さを変える',
      content:
        'sin(θ) は -1 から 1 の間を振動します。\n\nでは 3·sin(θ) は？ -3 から 3 の間を振動します。\n\n前の係数A（振幅）が波の高さを決めます。Aを変えるとどうなるか見てみましょう。',
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
      title: '振幅を変えてみよう',
      content:
        'スライダーで振幅Aを変えてみましょう。\n\nA = 1 が標準のsin波。A = 2 で2倍の高さ。A = 0.5 で半分の高さ。\n\nAが負のときはどうなるでしょう？',
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
          { name: 'amplitude', min: -3, max: 3, step: 0.1, initial: 1 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '具体例：音の大きさ',
      content:
        '音波は空気の振動です。振幅が大きい = 音が大きい。\n\ny = A·sin(θ) で:\n・A = 1: 普通の音量\n・A = 2: 2倍の振動幅 → 大きな音\n・A = 0.5: 半分の振動幅 → 小さな音\n\n音量を2倍にしても周波数（音の高さ）は変わりません。波の形は同じで、高さだけが変わります。',
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
      title: '具体例：A が負のとき',
      content:
        'A = -1 のとき: y = -sin(θ)\n\nこれはsin波を上下反転したものです。\n\n-sin(θ) = sin(θ + 180°) なので、実は位相を180°ずらしたのと同じ。\n\n振幅は |A| = 1（絶対値で考えます）。符号は「ひっくり返す」操作に対応します。',
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
        '振幅について考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = 5sin(θ) の最小値はいくつ？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '-1', correct: false },
          { id: 'c', label: '-5', correct: true },
          { id: 'd', label: '5', correct: false },
        ],
        explanation:
          'sin(θ)の最小値は-1なので、5 × (-1) = -5。\n\ny = A·sin(θ) の値域は [-|A|, |A|] = [-5, 5] です。',
      },
    },
    {
      id: 'alternate',
      title: 'エネルギーと振幅',
      content:
        '物理では波のエネルギーは振幅の2乗に比例します。\n\nE ∝ A²\n\n振幅を2倍にするとエネルギーは4倍。音で言えば「2倍大きい音」は4倍のエネルギーを持ちます。\n\nだからデシベル（dB）という対数スケールを使うのです。人間の感覚と物理量のギャップを対数が埋めます。',
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
        'y = A·sin(θ) の振幅:\n\n・|A| = 波の最大の高さ\n・Aが大きい → 波が高い（音なら大きい）\n・Aが負 → 波が反転（180°位相シフト）\n・エネルギー ∝ A²\n\n振幅は波の「強さ」を決めるパラメータ。周波数や位相とは独立に変えられます。',
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
