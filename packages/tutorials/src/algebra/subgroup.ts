import { Tutorial } from '../types';

export const subgroupTutorial: Tutorial = {
  id: 'subgroup',
  title: '部分群',
  description: '群の中に潜む小さな群を発見する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '群の中の群',
      content:
        'S₃ の中に、もっと小さな群が隠れています。\n\n{e, (1 2 3), (1 3 2)} は S₃ の中で群をなしています。\n\nこのように、群 G の部分集合 H が G の演算に関して群になるとき、H を G の「部分群」と呼びます。',
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
      id: 'subgroup-test',
      title: '部分群の判定条件',
      content:
        'H ⊆ G が部分群であるための条件:\n\n1. e ∈ H（単位元を含む）\n2. a, b ∈ H ならば a ∗ b ∈ H（閉性）\n3. a ∈ H ならば a⁻¹ ∈ H（逆元で閉じる）\n\n実は条件2と3を合わせて:\n「a, b ∈ H ならば a ∗ b⁻¹ ∈ H」\nだけで判定できます。',
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
      id: 'trivial-subgroups',
      title: '自明な部分群',
      content:
        'どんな群 G にも必ず存在する部分群が2つあります:\n\n1. {e}（単位元だけの群）── 自明な部分群\n2. G 自身 ── G は常に自分自身の部分群\n\nこの2つ以外の部分群を「真部分群」と呼びます。\n\n群の構造を理解するには、真部分群を見つけることが重要です。',
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
      title: '部分群の例',
      content:
        'S₃ の部分群:\n  {e} ── 位数1\n  {e, (1 2)} ── 位数2\n  {e, (1 3)} ── 位数2\n  {e, (2 3)} ── 位数2\n  {e, (1 2 3), (1 3 2)} ── 位数3\n  S₃ 自身 ── 位数6\n\n(ℤ, +) の部分群:\n  nℤ = {..., -2n, -n, 0, n, 2n, ...}（n の倍数全体）',
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
      id: 'lagrange',
      title: 'ラグランジュの定理',
      content:
        '有限群の最も基本的な定理:\n\nH が有限群 G の部分群ならば、|H| は |G| を割り切る。\n\nS₃（位数6）の部分群の位数: 1, 2, 3, 6\nすべて 6 の約数です！\n\n逆は成り立ちません: 約数であっても、その位数の部分群が存在するとは限りません。',
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
      content: '部分群について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '位数12の群の部分群の位数として、あり得ないものはどれですか？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '4', correct: false },
          { id: 'c', label: '5', correct: true },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          '正解は 5 です。ラグランジュの定理により、部分群の位数は群の位数の約数でなければなりません。5 は 12 の約数ではないので、位数5の部分群は存在しません。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '部分群のポイント:\n\n1. 群の部分集合で、それ自体が群になるもの\n2. 判定: 閉性 + 逆元で閉じる + 単位元を含む\n3. 自明な部分群: {e} と G 自身\n4. ラグランジュの定理: |H| は |G| を割り切る\n\n部分群を見つけることで、群の内部構造が見えてきます。\n\n次は「群の位数」について詳しく学びましょう。',
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
