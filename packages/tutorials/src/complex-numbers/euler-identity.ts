import { Tutorial } from '../types';

export const eulerIdentityTutorial: Tutorial = {
  id: 'euler-identity',
  title: 'オイラーの等式',
  description: 'e^(iπ) + 1 = 0 という数学で最も美しい等式',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '5つの定数',
      content:
        '数学の5大定数:\n\ne（自然対数の底）≈ 2.718\ni（虚数単位）\nπ（円周率）≈ 3.14159\n1（乗法の単位元）\n0（加法の単位元）\n\nこの5つがたった1つの等式に集約されます。',
      customScene: 'euler-identity-animation',
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
      id: 'derivation',
      title: '導出',
      content:
        'オイラーの公式 e^(iθ) = cos θ + i sin θ で θ = π とすると:\n\ne^(iπ) = cos π + i sin π = -1 + 0i = -1\n\nよって:\ne^(iπ) + 1 = 0\n\nこれがオイラーの等式です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'geometric',
      title: '幾何学的意味',
      content:
        'e^(iπ) = -1 は、複素平面上で次のことを意味します:\n\n1 から始めて、π（180°）だけ回転すると -1 に到達する。\n\n半周分の回転。これは単位円上で1の正反対にある点です。\n\n「e の iπ 乗は -1 である」── 指数関数で回転を表すことの最もシンプルな例です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'beauty',
      title: 'なぜ美しいのか',
      content:
        'オイラーの等式が美しいと言われる理由:\n\n1. 異なる分野の5大定数が1つに集約\n2. 基本的な演算（加法、乗法、累乗）だけで構成\n3. 等号で結ばれ、結果が 0\n4. 不要な定数や係数がない\n\nリチャード・ファインマンは「数学で最も驚くべき公式」と呼びました。',
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
      id: 'quiz',
      title: '確認クイズ',
      content: 'オイラーの等式に関する理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'e^(i2π) = ?',
        options: [
          { id: 'a', label: '-1', correct: false },
          { id: 'b', label: '0', correct: false },
          { id: 'c', label: '1', correct: true },
          { id: 'd', label: 'i', correct: false },
        ],
        explanation:
          'e^(i2π) = cos 2π + i sin 2π = 1 + 0i = 1 です。一周回って元に戻ります。',
      },
    },
    {
      id: 'variations',
      title: 'バリエーション',
      content:
        'オイラーの公式からいくつかの有用な関係が導かれます:\n\ne^(iπ/2) = i（四分の一周 = i）\ne^(-iπ/2) = -i\ne^(i2π) = 1（一周 = 元に戻る）\n\nまた、三角関数を指数関数で表すこともできます:\ncos θ = (e^(iθ) + e^(-iθ)) / 2\nsin θ = (e^(iθ) - e^(-iθ)) / (2i)',
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
        'オイラーの等式:\n\n・e^(iπ) + 1 = 0\n・5大定数（e, i, π, 1, 0）を結ぶ\n・幾何学的には半周の回転\n・三角関数を指数関数で表せる\n\n次は複素指数関数をもう少し深く学びましょう。',
      customScene: 'euler-identity-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
