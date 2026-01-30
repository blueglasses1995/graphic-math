import { Tutorial } from '../types';

export const idealQuotientTutorial: Tutorial = {
  id: 'ideal-quotient',
  title: 'イデアルと剰余環',
  description: '環の中のイデアルと剰余環の構成を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '環の中の特別な部分集合',
      content:
        '群では部分群が重要でした。環では「イデアル」が対応する概念です。\n\nイデアルとは、環の中で「掛け算で吸収される」部分集合です。\n\nℤ における 3ℤ = {..., -6, -3, 0, 3, 6, ...} がその例です。\n\n3 の倍数に何を掛けても、結果は 3 の倍数のまま。',
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
      id: 'ideal-definition',
      title: 'イデアルの定義',
      content:
        '環 R の部分集合 I がイデアルであるとは:\n\n1. (I, +) は (R, +) の部分群\n   a, b ∈ I ならば a - b ∈ I\n\n2. 吸収性: r ∈ R, a ∈ I ならば ra ∈ I かつ ar ∈ I\n\n条件2が核心です: I の要素に R の任意の要素を掛けても I に留まる。\n\nこれは部分群よりも強い条件です。',
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
      title: 'イデアルの例',
      content:
        'ℤ のイデアル:\n  nℤ = {0, ±n, ±2n, ...}（n の倍数全体）\n  実は ℤ のすべてのイデアルはこの形！（単項イデアル整域）\n\nℤ[x] のイデアル:\n  (x² + 1) = {(x² + 1)f(x) | f(x) ∈ ℤ[x]}\n  x² + 1 の倍式全体\n\n自明なイデアル: {0} と R 自身',
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
      id: 'quotient-ring',
      title: '剰余環 R/I',
      content:
        'イデアル I で R を「割る」と剰余環 R/I ができます。\n\nR/I の要素は「a + I」の形の同値類です。\n\nℤ/3ℤ の例:\n  0 + 3ℤ = {..., -6, -3, 0, 3, 6, ...}\n  1 + 3ℤ = {..., -5, -2, 1, 4, 7, ...}\n  2 + 3ℤ = {..., -4, -1, 2, 5, 8, ...}\n\nmod 3 の世界は、ℤ をイデアル 3ℤ で割った剰余環だったのです。',
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
      id: 'maximal-ideal',
      title: '極大イデアルと体',
      content:
        '重要な定理: R/I が体 ⟺ I が極大イデアル\n\n極大イデアルとは、I ⊊ R で、I を含むイデアルが I と R しかないもの。\n\nℤ/pℤ（p は素数）が体になるのは、pℤ が ℤ の極大イデアルだからです。\n\np = 3: ℤ/3ℤ = {0, 1, 2} は体 ✓\np = 4: ℤ/4ℤ は体でない（2×2 = 0 で零因子あり）',
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
      content: 'イデアルについて確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '偶数全体 2ℤ は ℤ のイデアルですか？',
        options: [
          { id: 'a', label: 'はい', correct: true },
          { id: 'b', label: 'いいえ、部分群でないから', correct: false },
          { id: 'c', label: 'いいえ、吸収性がないから', correct: false },
          { id: 'd', label: 'いいえ、1 を含まないから', correct: false },
        ],
        explanation:
          '正解は「はい」です。偶数同士の差は偶数（部分群）、偶数に任意の整数を掛けても偶数（吸収性）なので、2ℤ はイデアルです。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'イデアルと剰余環:\n\n1. イデアル: 加法部分群 + 掛け算で吸収される\n2. 剰余環 R/I: 同値類による新しい環\n3. ℤ/nℤ は ℤ のイデアル nℤ による剰余環\n4. R/I が体 ⟺ I が極大イデアル\n\n次は「体」── 割り算まで自由にできる構造を学びましょう。',
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
