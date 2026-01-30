import { Tutorial } from '../types';

export const commonLogTutorial: Tutorial = {
  id: 'common-log',
  title: '常用対数',
  description: '底が10の対数（log₁₀）の意味と桁数との関係を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '桁数を数える道具',
      content:
        'log₁₀(1000) = 3。1000は4桁の数で、0が3つ。常用対数は「10を何回かけたか」を表し、数の桁数と直結します。',
      customScene: 'common-log-animation',
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
        '数値を変えて log₁₀ の値を観察してください。10倍するたびに対数が1増えるのがわかります。',
      customScene: 'common-log-interactive',
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
      title: 'log₁₀(100) = 2',
      content:
        '10² = 100 なので log₁₀(100) = 2。100は3桁の数で、常用対数は2。桁数は「整数部分 + 1」で求められます。',
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
      title: 'log₁₀(500) ≈ 2.699',
      content:
        '500は10²(=100)と10³(=1000)の間なので、log₁₀(500)は2と3の間。実際には約2.699です。整数部分が2なので、500は3桁の数とわかります。',
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
        'log₁₀(10000) の値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₁₀(10000) はいくつ？',
        options: [
          { id: 'a', label: '3', correct: false },
          { id: 'b', label: '4', correct: true },
          { id: 'c', label: '5', correct: false },
          { id: 'd', label: '10', correct: false },
        ],
        explanation:
          '10⁴ = 10000 なので log₁₀(10000) = 4 です。',
      },
    },
    {
      id: 'alternate',
      title: '記法について',
      content:
        '常用対数は底の10を省略して「log」とだけ書くことが多いです。\n\nlog 100 = log₁₀(100) = 2\n\n電卓の「log」ボタンは常用対数です。工学・化学・地震学など幅広い分野で使われています。',
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
        '常用対数 log₁₀ は「10を何回かけたか」を表し、桁数と密接に関わります。10倍で+1、100倍で+2。\n\n数値を変えて log₁₀ の挙動を確かめてみてください。',
      customScene: 'common-log-summary',
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
