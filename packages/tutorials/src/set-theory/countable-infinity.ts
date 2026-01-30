import { Tutorial } from '../types';

export const countableInfinityTutorial: Tutorial = {
  id: 'countable-infinity',
  title: '可算無限',
  description: '自然数と1対1対応がつく「可算無限」の概念を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '数え上げられる無限',
      content:
        '自然数が1, 2, 3, ... と流れていきます。\n\n同時に整数も ..., -2, -1, 0, 1, 2, ... と並んでいます。\n\n整数の方が「多そう」に見えますが、実は同じ「大きさ」の無限です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'countable-infinity-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '対応をつけてみよう',
      content:
        '自然数と整数を線で結んでみましょう。\n\nすべての整数に自然数の番号をつけられますか？\n\n0→1, 1→2, -1→3, 2→4, -2→5, ... のように工夫してみてください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'countable-infinity-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-definition',
      title: '可算無限とは',
      content:
        '自然数 ℕ = {1, 2, 3, ...} と1対1対応がつく集合を「可算無限」といいます。\n\nつまり、すべての要素に自然数の「番号」をつけられる無限集合です。\n\n記号では |A| = ℵ₀（アレフ・ゼロ）と書きます。\n\nℵ₀ は「最小の無限」です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-rational',
      title: '有理数も可算無限',
      content:
        '驚くべきことに、有理数（分数）全体も可算無限です。\n\n整数が2つ分あるのに、自然数と同じ大きさ！\n\nカントールの対角線論法を使います。\n分数を格子状に並べ、ジグザグに数えていきます：\n1/1, 1/2, 2/1, 3/1, 2/2, 1/3, 1/4, ...\n\nこの方法で、すべての正の有理数に番号をつけられます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '考えてみよう',
      content: '次のうち、可算無限でないものはどれ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち、可算無限でない集合は？',
        options: [
          { id: 'a', label: '整数全体 ℤ', correct: false },
          { id: 'b', label: '有理数全体 ℚ', correct: false },
          { id: 'c', label: '実数全体 ℝ', correct: true },
          { id: 'd', label: '素数全体', correct: false },
        ],
        explanation:
          '正解は実数全体 ℝ です。\n\n実数は自然数と1対1対応がつきません。これは次のチュートリアル「非可算無限」で証明します。\n\n整数、有理数、素数はすべて可算無限です。',
      },
    },
    {
      id: 'alternate',
      title: '可算無限の「足し算」',
      content:
        '可算無限には面白い性質があります。\n\nℵ₀ + ℵ₀ = ℵ₀\nℵ₀ × ℵ₀ = ℵ₀\n\n可算無限個の可算無限集合を合わせても、まだ可算無限。\n\n通常の算数の感覚が通じない世界です。\n「無限 + 無限 = 無限」が、ℵ₀ の場合は成り立ちます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        '可算無限のポイント：\n\n・自然数と1対1対応がつく無限 = 可算無限\n・ℵ₀（アレフ・ゼロ）= 最小の無限\n・整数、有理数、素数は可算無限\n・ℵ₀ + ℵ₀ = ℵ₀\n\n次は「非可算無限」── 数え上げられない無限を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'countable-infinity-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
