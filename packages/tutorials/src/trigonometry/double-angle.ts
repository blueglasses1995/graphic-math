import { Tutorial } from '../types';

export const doubleAngleTutorial: Tutorial = {
  id: 'double-angle',
  title: '【実践】2倍角の公式',
  description: 'sin(2θ)とcos(2θ)をグラフで見ると公式が見える',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '角度を2倍にすると',
      content:
        'θが動くとき、2θはその2倍の速さで動きます。\n\n黄色がθ、紫が2θの動き。下のグラフではsin(θ)（薄緑）とsin(2θ)（紫）を重ねています。\n\n再生して波の違いを見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '速さの違いを感じよう',
      content:
        '再生と一時停止で、2つの点の動きの違いを確認してください。\n\nθが半周（180°）したとき、2θはどこにいますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-sin2',
      title: 'sin(2θ) = 2sin(θ)cos(θ)',
      content:
        'グラフを見ると、sin(2θ)はsin(θ)の2倍の周波数（2倍速い振動）です。\n\nでも振幅は同じ1。なぜ「2倍」が付くのに高さが変わらないのか？\n\nsin(2θ) = 2·sin(θ)·cos(θ)\n\n2倍するけど、sin(θ)とcos(θ)を掛けている。掛け算は値を「小さくする」方向にも働くので、結果的に-1〜1に収まります。\n\n具体例: θ=45°のとき sin(90°) = 1 = 2 × 0.71 × 0.71 ✓',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-cos2',
      title: 'cos(2θ) = cos²θ − sin²θ',
      content:
        'cos(2θ)はcos²θとsin²θの差です。\n\n具体例: θ=60°\ncos(120°) = cos²(60°) − sin²(60°)\n= 0.25 − 0.75 = −0.5 ✓\n\ncos²θ + sin²θ = 1 を使うと別の形にもなります:\ncos(2θ) = 2cos²θ − 1\ncos(2θ) = 1 − 2sin²θ\n\n同じ公式の3つの顔です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'sin(2θ) = 2sin(θ)cos(θ) を使って考えてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(2θ) が最大値1をとるのは θ = ？',
        options: [
          { id: 'a', label: 'θ = 90°', correct: false },
          { id: 'b', label: 'θ = 45°', correct: true },
          { id: 'c', label: 'θ = 60°', correct: false },
          { id: 'd', label: 'θ = 30°', correct: false },
        ],
        explanation:
          'sin(2θ) = 1 となるのは 2θ = 90° のとき、つまり θ = 45°。\n\n2sin(45°)cos(45°) = 2 × 0.71 × 0.71 = 2 × 0.5 = 1 ✓\n\nsin(θ)とcos(θ)が等しくなる45°で、その積が最大になります。',
      },
    },
    {
      id: 'alternate',
      title: '回転行列との関係',
      content:
        '線形代数で学ぶ回転行列 R(θ) を2回かけると R(2θ) になります。\n\nR(θ)·R(θ) = R(2θ)\n\nこの行列の掛け算を成分で書き下すと、2倍角の公式がそのまま出てきます。\n\nつまり2倍角の公式 = 「2回回転すること」の数式表現。公式が覚えにくくても、「2回回す」と考えれば自然に導けます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'sin(2θ) = 2sin(θ)cos(θ)\ncos(2θ) = cos²θ − sin²θ\n\n2倍角は「2倍速い波」。周波数が2倍で振幅は同じ。公式は「回転を2回重ねる」ことの表現です。\n\nよくある誤解: sin(2θ) = 2sin(θ) だと思うこと。sin(60°) = 0.87 だけど sin(120°) = 0.87 ≠ 2 × 0.87。cosが掛かっています。\n\nもう一度アニメーションで確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
