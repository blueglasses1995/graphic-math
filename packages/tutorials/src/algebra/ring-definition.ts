import { Tutorial } from '../types';

export const ringDefinitionTutorial: Tutorial = {
  id: 'ring-definition',
  title: '環の定義',
  description: '足し算と掛け算の2つの演算を持つ代数構造「環」を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '2つの演算を持つ構造',
      content:
        '群は1つの演算を持つ構造でした。\n\nしかし整数は足し算と掛け算の2つを使えます。\n\nこの「2つの演算が協調して働く構造」が「環（ring）」です。\n\n環は群よりも豊かな理論を持っています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'ring-definition-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '環の公理',
      content:
        '環 (R, +, ×) の公理:\n\n1. (R, +) は可換群（加法群）\n   - 閉性、結合法則、単位元 0、逆元 -a\n\n2. (R, ×) は結合的\n   - 閉性、結合法則\n\n3. 分配法則\n   - a × (b + c) = a×b + a×c\n   - (a + b) × c = a×c + b×c',
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
      id: 'distributive',
      title: '分配法則が鍵',
      content:
        '分配法則は足し算と掛け算を「つなぐ」ルールです。\n\n2 × (3 + 4) = 2×3 + 2×4 = 6 + 8 = 14 ✓\n\nこの法則がなければ、2つの演算は無関係になってしまいます。\n\n分配法則があるからこそ、足し算と掛け算が「協調」するのです。',
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
      title: '環の例',
      content:
        '身近な環:\n\n  (ℤ, +, ×): 整数環 ── 最も基本的な環\n  (ℤ/nℤ, +, ×): 剰余環\n  (ℝ[x], +, ×): 実数係数の多項式環\n  (M₂(ℝ), +, ×): 2×2行列の環\n\n注意: 環の掛け算には逆元（割り算）が要求されていません。\n2 の掛け算の逆元 1/2 は整数ではないので、ℤ は環ですが体ではありません。',
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
      id: 'commutative-ring',
      title: '可換環と零因子',
      content:
        '掛け算が可換な環を「可換環」と呼びます。\n  ℤ は可換環、M₂(ℝ) は非可換環\n\n零因子: a ≠ 0, b ≠ 0 なのに ab = 0 となるもの\n\nℤ/6ℤ で: 2 × 3 = 6 ≡ 0 (mod 6)\n  2 と 3 は零因子！\n\n零因子がない可換環を「整域」と呼びます。ℤ は整域です。',
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
      content: '環について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ℤ/4ℤ で 2 × 2 はいくつですか？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: '2', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          '正解は 0 です。2 × 2 = 4 ≡ 0 (mod 4)。つまり 2 は ℤ/4ℤ の零因子です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '環のポイント:\n\n1. 加法は可換群、乗法は結合的\n2. 分配法則が2つの演算をつなぐ\n3. 可換環: 掛け算が可換\n4. 零因子: 非零の積が零になる現象\n5. 整域: 零因子のない可換環\n\n次は具体的な環の例として「整数環と多項式環」を学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'ring-definition-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
