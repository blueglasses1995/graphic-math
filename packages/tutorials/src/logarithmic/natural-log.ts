import { Tutorial } from '../types';

export const naturalLogTutorial: Tutorial = {
  id: 'natural-log',
  title: '自然対数',
  description: '底がeの対数（ln）の意味と自然界での登場を理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: 'なぜ e が自然なのか',
      content:
        'e ≈ 2.71828...。100%の利率で連続複利をかけると、1年後に元本は e 倍になります。この自然に現れる数を底にした対数が自然対数 ln です。',
      customScene: 'natural-log-animation',
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
      title: '触ってみよう',
      content:
        '値を変えて ln(x) の値を確認してください。ln(1) = 0、ln(e) = 1 が基本です。',
      customScene: 'natural-log-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ln(e) = 1',
      content:
        'e¹ = e なので ln(e) = 1。自然対数の底は e 自身。ln は「e を何回かけたか」を意味します。',
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
      title: 'ln(e²) = 2',
      content:
        'e² ≈ 7.389 なので ln(7.389) ≈ 2。e を2回かけた数の自然対数は2。ln と指数関数 e^x は互いに打ち消し合います。',
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
        'ln(1) の値はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ln(1) はいくつ？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: 'e', correct: false },
          { id: 'd', label: '-1', correct: false },
        ],
        explanation:
          'e⁰ = 1 なので ln(1) = 0。どんな底でも log_a(1) = 0 です。',
      },
    },
    {
      id: 'alternate',
      title: '微積分との相性',
      content:
        '自然対数が「自然」と呼ばれる理由は微積分にあります。\n\nd/dx ln(x) = 1/x\n\nこれほどシンプルな導関数を持つ対数は ln だけ。常用対数の導関数には 1/ln(10) という係数がつきます。数学では ln が最も扱いやすい対数です。',
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
        '自然対数 ln は底が e の対数。ln(1) = 0、ln(e) = 1。微積分で最もシンプルな形を持ち、自然界の成長現象に直結します。\n\n自由に値を変えて ln の挙動を確認してください。',
      customScene: 'natural-log-summary',
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
