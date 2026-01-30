import { Tutorial } from '../types';

export const binomialDistTutorial: Tutorial = {
  id: 'binomial-dist',
  title: '二項分布',
  description: '成功・失敗の繰り返し試行を記述する二項分布',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: 'コインを10回投げて表は何回？',
      content:
        'コインを10回投げたとき、ちょうど3回表が出る確率は？このような「成功/失敗をn回繰り返す」問題に答えるのが二項分布です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'binomial-dist-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'formula',
      title: '二項分布の公式',
      content:
        'X ~ B(n, p) のとき:\n\nP(X = k) = nCk × pᵏ × (1-p)ⁿ⁻ᵏ\n\nn: 試行回数、p: 1回の成功確率、k: 成功回数\n\nコイン10回で3回表: P = 10C3 × (0.5)³ × (0.5)⁷ = 120/1024 ≒ 0.117',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'mean-var',
      title: '期待値と分散',
      content:
        'X ~ B(n, p) のとき:\n\n• 期待値: E[X] = np\n• 分散: Var(X) = np(1-p)\n\nコイン10回: E = 10×0.5 = 5回、Var = 10×0.5×0.5 = 2.5',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'nとpを変えてみよう',
      content:
        '試行回数nと成功確率pを変えて、二項分布の形がどう変わるか観察しましょう。pが0.5のとき最も左右対称です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'binomial-dist-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '打率3割の打者が5打席でちょうど2安打の確率に最も近いのは？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '打率3割、5打席で2安打の確率は？',
        options: [
          { id: 'a', label: '約 0.31', correct: true },
          { id: 'b', label: '約 0.15', correct: false },
          { id: 'c', label: '約 0.50', correct: false },
          { id: 'd', label: '約 0.60', correct: false },
        ],
        explanation:
          '5C2 × 0.3² × 0.7³ = 10 × 0.09 × 0.343 ≒ 0.309。最も起こりやすい結果の一つです。',
      },
    },
    {
      id: 'conditions',
      title: '二項分布の条件',
      content:
        '二項分布が使える条件:\n\n1. 試行回数nが固定\n2. 各試行は独立\n3. 各試行の成功確率pが一定\n4. 結果は成功か失敗の2通り\n\nこの条件を満たさないときは他の分布を使います。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '二項分布 B(n,p) のポイント:\n\n• P(X=k) = nCk pᵏ(1-p)ⁿ⁻ᵏ\n• E[X] = np, Var(X) = np(1-p)\n• n回の独立な成功/失敗試行\n• nが大きいと正規分布に近づく\n\n最も基本的で重要な確率分布です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'binomial-dist-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
