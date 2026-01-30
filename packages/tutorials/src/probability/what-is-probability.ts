import { Tutorial } from '../types';

export const whatIsProbabilityTutorial: Tutorial = {
  id: 'what-is-probability',
  title: '確率とは',
  description: '確率の基本概念を直感的に理解する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '確率は「起こりやすさ」の数値化',
      content:
        'サイコロを振ったとき、1が出る確率は？答えは1/6。確率とは「ある出来事がどれくらい起こりやすいか」を0から1の数値で表したものです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '確率の定義',
      content:
        '確率 P(A) = (事象Aが起こる場合の数) / (全ての場合の数)\n\nコインを投げて表が出る確率: P(表) = 1/2 = 0.5\nサイコロで偶数が出る確率: P(偶数) = 3/6 = 0.5',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'range',
      title: '確率の範囲',
      content:
        '確率は必ず0以上1以下です。\n\n• P = 0: 絶対に起こらない（サイコロで7が出る）\n• P = 1: 必ず起こる（サイコロで6以下が出る）\n• P = 0.5: 半々（コインの表）',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'サイコロを振ってみよう',
      content:
        'サイコロを何回も振ると、各目の出る割合は1/6に近づいていきます。これが確率の本質です。試行回数を増やして確認しましょう。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'トランプ52枚からランダムに1枚引くとき、ハートを引く確率は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'トランプ52枚からハートを引く確率は？',
        options: [
          { id: 'a', label: '1/13', correct: false },
          { id: 'b', label: '1/4', correct: true },
          { id: 'c', label: '1/2', correct: false },
          { id: 'd', label: '1/52', correct: false },
        ],
        explanation:
          'ハートは13枚、全体は52枚。P(ハート) = 13/52 = 1/4 です。',
      },
    },
    {
      id: 'frequency',
      title: '頻度と確率',
      content:
        '確率には2つの解釈があります。\n\n1. 古典的確率: 同様に確からしい場合の数の比\n2. 頻度的確率: 試行を繰り返したときの相対頻度の極限\n\nどちらも同じ数値に収束します。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '確率とは「起こりやすさ」を0〜1の数値で表したもの。\n\n• P(A) = 好ましい場合の数 / 全場合の数\n• 0 ≤ P(A) ≤ 1\n• P = 0 は不可能、P = 1 は確実\n\n次は「標本空間と事象」を学びましょう。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
