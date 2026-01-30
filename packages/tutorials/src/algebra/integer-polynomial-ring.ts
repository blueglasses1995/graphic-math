import { Tutorial } from '../types';

export const integerPolynomialRingTutorial: Tutorial = {
  id: 'integer-polynomial-ring',
  title: '整数環と多項式環',
  description: '具体的な環の例として整数環と多項式環を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '最も身近な環',
      content:
        '整数の集合 ℤ = {..., -2, -1, 0, 1, 2, ...} は環の最も基本的な例です。\n\n足し算と掛け算ができ、分配法則が成り立ちます。\n\nでも割り算は自由にできません（1 ÷ 2 は整数でない）。\n\nこの「割り算の制限」が環の特徴です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'integer-polynomial-ring-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'divisibility',
      title: '整数の割り算と余り',
      content:
        '整数では「割り算の定理」が成り立ちます。\n\n任意の整数 a, b（b ≠ 0）に対して:\n  a = bq + r  (0 ≤ r < |b|)\n\n商 q と余り r が一意に存在します。\n\n例: 17 = 5 × 3 + 2（商3, 余り2）\n\nこの性質により、最大公約数やユークリッドの互除法が使えます。',
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
      id: 'polynomial-ring',
      title: '多項式環 R[x]',
      content:
        '環 R の係数を持つ多項式全体 R[x] も環になります。\n\nℤ[x] の例:\n  f(x) = 2x² + 3x - 1\n  g(x) = x + 4\n\n足し算: f + g = 2x² + 4x + 3\n掛け算: f × g = 2x³ + 11x² + 11x - 4\n\n多項式の足し算と掛け算は、分配法則を満たします。',
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
      id: 'polynomial-division',
      title: '多項式の割り算',
      content:
        '多項式にも「割り算の定理」があります（体上の多項式環で）。\n\nf(x) = g(x)q(x) + r(x)  (deg r < deg g)\n\n例: x³ + 1 を x - 1 で割ると\n  x³ + 1 = (x - 1)(x² + x + 1) + 2\n  商: x² + x + 1, 余り: 2\n\n整数と多項式は、驚くほど似た構造を持っています。',
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
      id: 'analogy',
      title: '整数と多項式の類似',
      content:
        '整数と多項式の類似:\n\n整数: 素因数分解 12 = 2² × 3\n多項式: 既約分解 x² - 1 = (x-1)(x+1)\n\n整数: 最大公約数 gcd(12, 8) = 4\n多項式: 最大公約式 gcd(x²-1, x-1) = x-1\n\n整数: ℤ/nℤ（剰余環）\n多項式: R[x]/(f(x))（剰余環）\n\nこの類似は偶然ではなく、どちらも「ユークリッド整域」だからです。',
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
      content: '多項式環について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ℤ[x] で (x+1)(x-1) を展開するとどうなりますか？',
        options: [
          { id: 'a', label: 'x² + 1', correct: false },
          { id: 'b', label: 'x² - 1', correct: true },
          { id: 'c', label: 'x² - 2x + 1', correct: false },
          { id: 'd', label: '2x', correct: false },
        ],
        explanation:
          '正解は x² - 1 です。(x+1)(x-1) = x² - x + x - 1 = x² - 1 です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '整数環と多項式環:\n\n1. ℤ は最も基本的な環（整域）\n2. R[x] は R 上の多項式環\n3. どちらも割り算の定理が成り立つ\n4. 素因数分解 ↔ 既約分解の類似\n5. 剰余環の構成が可能\n\n次は「イデアルと剰余環」── 環の中の特別な部分構造を学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'integer-polynomial-ring-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
