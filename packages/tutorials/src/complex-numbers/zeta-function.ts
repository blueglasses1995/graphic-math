import { Tutorial } from '../types';

export const zetaFunctionTutorial: Tutorial = {
  id: 'zeta-function',
  title: '【実践】ζ関数と素数',
  description: 'リーマンのゼータ関数と素数分布の深い関係',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '素数と複素数の意外な関係',
      content:
        '素数の分布── 数学最大の謎の一つ── は、実は複素数と深く関わっています。\n\nリーマンのゼータ関数:\nζ(s) = 1 + 1/2ˢ + 1/3ˢ + 1/4ˢ + ...\n\nここで s は複素数です。\n\nこの関数の「零点」（ζ(s)=0 となる s）が、素数の分布の秘密を握っています。',
      customScene: 'zeta-function-animation',
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
      id: 'euler-product',
      title: 'オイラー積',
      content:
        'ζ関数は素数の積としても書けます:\n\nζ(s) = Π 1/(1 - p⁻ˢ)\n\nここで Π はすべての素数 p について積を取ります。\n\nこれは「すべての自然数の和」と「すべての素数の積」が等しいという驚くべき等式です。\n\nオイラーが発見したこの関係は、解析的整数論の出発点です。',
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
      id: 'analytic-continuation',
      title: '解析接続',
      content:
        '元の級数は Re(s) > 1 でしか収束しません。\n\nしかし「解析接続」により、ζ(s) を複素平面全体（s=1を除く）に拡張できます。\n\nζ(-1) = -1/12 という驚きの結果も得られます。\n\n「1+2+3+4+... = -1/12」はこの文脈で意味を持ちます。',
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
      id: 'riemann-hypothesis',
      title: 'リーマン予想',
      content:
        'ζ(s) = 0 の「非自明な零点」は、すべて Re(s) = 1/2 の直線上にある？\n\nこれがリーマン予想── 1859年に提唱され、今なお未解決の問題です。\n\nミレニアム懸賞問題の一つで、証明には100万ドルの賞金が懸けられています。\n\n数十億個の零点が計算で確認されていますが、証明には至っていません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'Im(s)', min: 0, max: 50, step: 0.5, initial: 14.1 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: 'ゼータ関数の基礎を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'リーマン予想で問題になっているのは？',
        options: [
          { id: 'a', label: 'ζ関数の最大値', correct: false },
          { id: 'b', label: 'ζ関数の非自明な零点の位置', correct: true },
          { id: 'c', label: 'ζ関数の収束半径', correct: false },
          { id: 'd', label: 'ζ関数の特異点の数', correct: false },
        ],
        explanation:
          'リーマン予想は「非自明な零点はすべて Re(s)=1/2 の直線上にある」という主張です。これが証明されれば素数の分布に関する多くの結果が確定します。',
      },
    },
    {
      id: 'prime-counting',
      title: '素数計数関数との関係',
      content:
        'π(x) を x 以下の素数の個数とすると:\n\nπ(x) ≈ Li(x) + Σ Li(x^ρ)\n\nここで ρ はζ関数の零点を渡ります。\n\n零点の位置が素数の分布の「補正項」を与えるのです。\n\nリーマン予想が正しければ、素数定理の誤差項を最も精密に評価できます。',
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
        'ζ関数と素数:\n\n・ζ(s) = Σ 1/nˢ = Π 1/(1-p⁻ˢ)\n・s は複素数（解析接続で全複素平面に拡張）\n・零点の位置が素数の分布を支配\n・リーマン予想: 非自明な零点は Re(s)=1/2 上\n・160年以上未解決の数学最大の難問\n\n複素数なしには素数の神秘に迫ることすらできません。',
      customScene: 'zeta-function-summary',
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
