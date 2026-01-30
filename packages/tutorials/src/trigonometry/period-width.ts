import { Tutorial } from '../types';

export const periodWidthTutorial: Tutorial = {
  id: 'period-width',
  title: '周期と幅',
  description: 'sin(Bθ) の周波数パラメータBが周期に与える影響を理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '波を伸ばす・縮める',
      content:
        'sin(θ) の1周期は 2π。では sin(2θ) は？ 2倍速く振動するので周期は π。\n\ny = sin(Bθ) の周期は 2π/B。Bが大きいほど波が「ぎゅっと圧縮」されます。\n\nアニメーションで確認しましょう。',
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
      title: '周波数を変えてみよう',
      content:
        'Bの値を変えて波の変化を観察しましょう。\n\nB = 1: 標準のsin波（周期 2π）\nB = 2: 2倍速い振動（周期 π）\nB = 0.5: 半分の速さ（周期 4π）',
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
          { name: 'frequency', min: 0.5, max: 5, step: 0.1, initial: 1 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '具体例：音の高さ',
      content:
        '音波では B = 周波数に対応します。\n\nピアノの中央のラ（A4）: 440 Hz → 1秒に440回振動\n1オクターブ上のラ（A5）: 880 Hz → 周波数が2倍\n\n周波数が2倍 = 周期が半分。つまりBを2倍にすると波が2倍速く振動して、音が1オクターブ上がります。',
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
      title: '周期と周波数の関係',
      content:
        'y = sin(Bθ) のとき:\n・周期 T = 2π/B\n・周波数 f = B/(2π)（1秒あたりの振動回数）\n\n具体例:\nsin(3θ): B = 3, 周期 = 2π/3, 周波数 = 3/(2π)\nsin(πθ): B = π, 周期 = 2, 周波数 = 1/2\n\n周期と周波数は逆数の関係: T = 1/f。一方が大きくなれば他方は小さくなります。',
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
        '周期の公式を使いましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = sin(4θ) の周期は？',
        options: [
          { id: 'a', label: '4π', correct: false },
          { id: 'b', label: '2π', correct: false },
          { id: 'c', label: 'π/2', correct: true },
          { id: 'd', label: 'π', correct: false },
        ],
        explanation:
          '周期 = 2π/B = 2π/4 = π/2。\n\nBが4なので、標準のsin波の4倍速く振動します。2πの区間に4周期分入ります。',
      },
    },
    {
      id: 'alternate',
      title: '角周波数ω',
      content:
        '物理では B のことを角周波数 ω（オメガ）と呼びます。\n\ny = sin(ωt)\n\nωは「1秒あたりに回転する角度（ラジアン）」。\n\nω = 2πf（fは通常の周波数 Hz）\n\n時計の秒針: ω = 2π/60 ≈ 0.105 rad/s（1分で1周）\n地球の自転: ω = 2π/86400 ≈ 7.27×10⁻⁵ rad/s',
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
        'y = sin(Bθ) の周期:\n\n・周期 T = 2π/B\n・Bが大きい → 波が圧縮（高い音）\n・Bが小さい → 波が伸張（低い音）\n・周波数 f = 1/T = B/(2π)\n\n振幅(A)が「縦」の変化なら、周波数(B)は「横」の変化。この2つのパラメータで波の基本的な形が決まります。',
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
