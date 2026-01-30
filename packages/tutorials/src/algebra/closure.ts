import { Tutorial } from '../types';

export const closureTutorial: Tutorial = {
  id: 'closure',
  title: '演算と閉性',
  description: '二項演算と閉性の概念を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '演算とは何か',
      content:
        '足し算、掛け算、合成 ── これらは2つの要素から1つの要素を作る操作です。\n\nこのような操作を「二項演算」と呼びます。\n\n演算 ∗ : a ∗ b = c\n\n代数学では、演算の性質を抽象的に調べます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'closure-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'closure-concept',
      title: '閉性とは',
      content:
        '集合 S 上の演算 ∗ が「閉じている」とは:\n\n任意の a, b ∈ S に対して、a ∗ b ∈ S\n\nつまり、演算の結果が必ず同じ集合の中に留まることです。\n\n例: 自然数の足し算は閉じている（自然数 + 自然数 = 自然数）\n例: 自然数の引き算は閉じていない（3 - 5 = -2 は自然数ではない）',
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
      id: 'closure-examples',
      title: '閉性の例',
      content:
        '閉じている例:\n  整数の足し算: ℤ は + で閉じている\n  整数の掛け算: ℤ は × で閉じている\n  mod 5 の足し算: {0,1,2,3,4} は +₅ で閉じている\n\n閉じていない例:\n  自然数の引き算: ℕ は - で閉じていない\n  整数の割り算: ℤ は ÷ で閉じていない（1÷2 は整数でない）',
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
      id: 'associativity',
      title: '結合法則',
      content:
        '演算のもう1つの重要な性質が「結合法則」です。\n\n(a ∗ b) ∗ c = a ∗ (b ∗ c)\n\nつまり、計算の順序を変えても結果が同じ。\n\n足し算: (2 + 3) + 4 = 2 + (3 + 4) = 9 ✓\n引き算: (5 - 3) - 1 ≠ 5 - (3 - 1)  ← 結合しない！\n\n結合法則が成り立つ演算は、括弧を気にせず書けるので扱いやすいです。',
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
      id: 'commutativity',
      title: '交換法則',
      content:
        '交換法則: a ∗ b = b ∗ a\n\n順序を入れ替えても結果が同じ。\n\n足し算: 3 + 5 = 5 + 3 ✓（交換法則が成り立つ）\n行列の掛け算: AB ≠ BA（一般に交換法則が成り立たない）\n\n交換法則が成り立つ演算は「可換」、成り立たない演算は「非可換」と呼ばれます。',
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
      content: '閉性について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち、閉じていない組み合わせはどれですか？',
        options: [
          { id: 'a', label: '整数と足し算', correct: false },
          { id: 'b', label: '自然数と掛け算', correct: false },
          { id: 'c', label: '奇数と足し算', correct: true },
          { id: 'd', label: 'mod 4 の足し算', correct: false },
        ],
        explanation:
          '正解は「奇数と足し算」です。奇数 + 奇数 = 偶数となり、結果が奇数の集合から出てしまいます（例: 3 + 5 = 8）。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '演算と閉性のポイント:\n\n1. 二項演算: 2つの要素から1つの要素を作る\n2. 閉性: 演算の結果が同じ集合に留まる\n3. 結合法則: 計算順序を変えても結果が同じ\n4. 交換法則: 順序を入れ替えても結果が同じ\n\nこれらの性質の組み合わせが、群・環・体といった代数構造を定義します。\n\n次はいよいよ「群の定義」を正式に学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'closure-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
