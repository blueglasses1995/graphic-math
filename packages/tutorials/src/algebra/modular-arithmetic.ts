import { Tutorial } from '../types';

export const modularArithmeticTutorial: Tutorial = {
  id: 'modular-arithmetic',
  title: '剰余算（mod）',
  description: '剰余算の正式な定義と性質を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '余りの世界',
      content:
        '時計の算数で直感をつかみました。\n\nここでは「剰余算」を正式に定義します。\n\n整数 a, b が n で割ったとき同じ余りを持つなら:\n  a ≡ b (mod n)\n\nと書き、「a と b は n を法として合同」と言います。',
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
      id: 'equivalence-classes',
      title: '同値類',
      content:
        'mod 3 の世界では、すべての整数が3つのグループに分かれます。\n\n[0] = {..., -6, -3, 0, 3, 6, 9, ...}\n[1] = {..., -5, -2, 1, 4, 7, 10, ...}\n[2] = {..., -4, -1, 2, 5, 8, 11, ...}\n\nこの各グループを「同値類」と呼びます。\n\n同じ余りを持つ数は、mod の世界では「同じ」と見なされます。',
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
      id: 'addition-mod',
      title: '剰余算の足し算',
      content:
        'mod n の足し算は、普通に足してから n で割った余りを取ります。\n\nmod 7 の例:\n  3 + 5 ≡ 1 (mod 7)  ← 8 ÷ 7 = 余り 1\n  6 + 6 ≡ 5 (mod 7)  ← 12 ÷ 7 = 余り 5\n\nこの演算は「閉じている」: 結果は必ず {0, 1, ..., n-1} に入ります。',
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
      id: 'multiplication-mod',
      title: '剰余算の掛け算',
      content:
        'mod n の掛け算も同様に定義できます。\n\nmod 7 の例:\n  3 × 5 ≡ 1 (mod 7)  ← 15 ÷ 7 = 余り 1\n  4 × 4 ≡ 2 (mod 7)  ← 16 ÷ 7 = 余り 2\n\n注目: 3 × 5 ≡ 1 ということは、3 の「逆数」は 5 です。\n\nmod 7 では割り算もできるのです！',
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
      id: 'zn-group',
      title: 'ℤ/nℤ の記法',
      content:
        'mod n の整数の世界を ℤ/nℤ と書きます。\n\nℤ/3ℤ = {0, 1, 2}（足し算付き）\nℤ/7ℤ = {0, 1, 2, 3, 4, 5, 6}\n\nℤ/nℤ は足し算に関して「群」になります。\n\nさらに n が素数のとき、ℤ/nℤ は掛け算についても特別な性質を持ちます（後で「体」として学びます）。',
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
      content: '剰余算を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'mod 7 で 5 の逆元（足し算の逆元）はどれですか？',
        options: [
          { id: 'a', label: '5', correct: false },
          { id: 'b', label: '2', correct: true },
          { id: 'c', label: '3', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          '正解は 2 です。5 + 2 = 7 ≡ 0 (mod 7) なので、2 は 5 の加法逆元です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '剰余算のポイント:\n\n1. a ≡ b (mod n) は「n で割った余りが同じ」\n2. 同値類: 同じ余りを持つ整数のグループ\n3. ℤ/nℤ は mod n の整数の世界\n4. 足し算・掛け算ともに閉じている\n\nこの構造は暗号理論やコンピュータサイエンスでも重要な役割を果たします。\n\n次は「演算と閉性」について正式に学びましょう。',
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
