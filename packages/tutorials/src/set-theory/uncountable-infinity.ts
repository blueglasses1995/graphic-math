import { Tutorial } from '../types';

export const uncountableInfinityTutorial: Tutorial = {
  id: 'uncountable-infinity',
  title: '非可算無限',
  description: '自然数では数え上げられない「非可算無限」とカントールの対角線論法を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '数え上げられない無限',
      content:
        '数直線上に実数が並んでいます。\n\nどんなに番号をつけても、必ず「漏れる」実数が存在します。\n\nこれがカントールの衝撃的な発見です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '対角線論法を体験しよう',
      content:
        '0と1の間の実数に番号をつけてみましょう。\n\nどんなリストを作っても、対角線をずらすことで「リストにない数」が作れます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-diagonal',
      title: 'カントールの対角線論法',
      content:
        '背理法で証明します。「実数が可算無限だ」と仮定しましょう。\n\nすべての実数にリスト番号がつけられたとします：\n1番: 0.5234...\n2番: 0.1478...\n3番: 0.9321...\n...\n\nここで「n番目の小数第n位」を1つずらした新しい数を作ります。\n→ 1番の1桁目5→6, 2番の2桁目4→5, 3番の3桁目2→3\n→ 0.653... はリストのどこにもない！\n\n矛盾。よって実数は可算無限ではありません。',
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
      id: 'example-continuum',
      title: '連続体の濃度',
      content:
        '実数全体の「大きさ」を連続体の濃度（𝔠 またはℵ₁?）といいます。\n\n|ℝ| = 𝔠 = 2^ℵ₀\n\nこれは冪集合の大きさと同じです。\n自然数の部分集合全体（冪集合）と実数全体が同じ大きさ！\n\n連続体仮説：ℵ₀ と 𝔠 の間に別の無限はあるか？\n驚くべきことに、この問題は「証明も反証もできない」ことが証明されています。',
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
      content: '区間 [0,1] と ℝ 全体の実数、どちらが多い？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '[0,1] の実数と ℝ 全体の実数の大きさは？',
        options: [
          { id: 'a', label: 'ℝ全体の方が大きい', correct: false },
          { id: 'b', label: '[0,1] の方が大きい', correct: false },
          { id: 'c', label: '同じ大きさ', correct: true },
          { id: 'd', label: '比較できない', correct: false },
        ],
        explanation:
          '正解は「同じ大きさ」です。\n\n例えば f(x) = tan(π(x - 1/2)) で [0,1] → ℝ の全単射が作れます。\n\n部分が全体と同じ大きさになる ── 無限集合の驚くべき性質です。',
      },
    },
    {
      id: 'alternate',
      title: '無限の階層',
      content:
        'カントールの定理：任意の集合Aに対して |A| < |P(A)|\n\n冪集合は必ず元の集合より大きい。これは無限集合でも成り立ちます。\n\nℵ₀ < 2^ℵ₀ < 2^(2^ℵ₀) < ...\n\n無限は1つではなく、無限に多くの「大きさの無限」が存在します。\n\n無限の階段は永遠に続くのです。',
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
        '非可算無限のポイント：\n\n・実数は可算無限ではない（対角線論法）\n・|ℝ| = 2^ℵ₀ > ℵ₀\n・[0,1] と ℝ は同じ大きさ\n・無限にも大きさの階層がある\n\n次は「写像（関数）」── 集合の間の対応関係を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
