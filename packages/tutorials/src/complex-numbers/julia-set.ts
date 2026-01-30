import { Tutorial } from '../types';

export const juliaSetTutorial: Tutorial = {
  id: 'julia-set',
  title: '【実践】ジュリア集合',
  description: 'マンデルブロ集合の「断面」としてのジュリア集合',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: 'マンデルブロの親戚',
      content:
        'ジュリア集合は、マンデルブロ集合と同じ z → z² + c を使いますが、視点が異なります。\n\nマンデルブロ: c を変えて z₀=0 を固定\nジュリア: c を固定して z₀ を変える\n\nつまり「初期値 z₀ が発散するかどうか」で集合を定義します。',
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
      id: 'connected',
      title: '連結と不連結',
      content:
        'c がマンデルブロ集合の内部にある場合、ジュリア集合は「連結」（一つながり）です。\n\nc がマンデルブロ集合の外部にある場合、ジュリア集合は「カントール集合のような塵」になります。\n\nマンデルブロ集合の境界上の c では、最も複雑なジュリア集合が生まれます。',
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
      id: 'examples',
      title: '美しい例',
      content:
        'いくつかの有名なジュリア集合:\n\n・c = -0.7 + 0.27i → 渦巻き模様\n・c = -0.8 + 0.156i → 竜の形\n・c = 0.285 + 0.01i → 花火のような形\n・c = -0.4 + 0.6i → ウサギのような形（Douady rabbit）\n\nパラメータ c をわずかに変えるだけで、全く異なる図形が現れます。',
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
      id: 'interactive',
      title: 'ジュリア集合を探索',
      content:
        'パラメータ c を動かして、ジュリア集合の形がどう変化するか観察してみましょう。\n\nマンデルブロ集合の境界付近で最も美しいパターンが見られます。',
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
          { name: 'Re(c)', min: -2, max: 2, step: 0.01, initial: -0.7 },
          { name: 'Im(c)', min: -2, max: 2, step: 0.01, initial: 0.27 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: 'ジュリア集合の性質を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'c がマンデルブロ集合の外部にあるとき、ジュリア集合はどうなる？',
        options: [
          { id: 'a', label: '一つながりの図形になる', correct: false },
          { id: 'b', label: '完全に消えてなくなる', correct: false },
          { id: 'c', label: 'ばらばらの塵のようになる', correct: true },
          { id: 'd', label: '円になる', correct: false },
        ],
        explanation:
          'c がマンデルブロ集合の外部にある場合、ジュリア集合は全不連結（カントール集合的な塵）になります。これは Fatou-Julia の定理として知られています。',
      },
    },
    {
      id: 'symmetry',
      title: '対称性',
      content:
        'ジュリア集合は原点に関して点対称です。\n\nこれは z² + c の反復において、z と -z が同じ運命をたどるためです:\n(-z)² + c = z² + c\n\nまた、ジュリア集合はそれ自身のフラクタル次元を持ち、通常は1と2の間の非整数値です。',
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
        'ジュリア集合:\n\n・z → z² + c で c を固定、z₀ を変える\n・マンデルブロ集合の「断面」\n・c がマンデルブロ内 → 連結、外 → 塵\n・原点に関して対称\n・パラメータ c により無限の多様性\n\nフラクタルは複素数の反復のダイナミクスを美しく可視化した例です。',
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
