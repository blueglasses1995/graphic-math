import { Tutorial } from '../types';

export const cyclicGroupTutorial: Tutorial = {
  id: 'cyclic-group',
  title: '巡回群',
  description: '1つの要素から生成される群の構造を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '1つから全部作れる',
      content:
        '正三角形の回転群 {e, r, r²} を思い出してください。\n\nr を繰り返し適用するだけで、すべての要素が作れます:\n  r¹ = r, r² = r², r³ = e\n\nこのように1つの要素の累乗だけで群全体が生成される群を「巡回群」と呼びます。',
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
      id: 'generator',
      title: '生成元',
      content:
        '群全体を生成する要素を「生成元」と呼びます。\n\nℤ/6ℤ の例:\n  1 は生成元: 1, 2, 3, 4, 5, 0 ← 全部出る\n  2 は生成元でない: 2, 4, 0, 2, ... ← {0, 2, 4} しか出ない\n  5 は生成元: 5, 4, 3, 2, 1, 0 ← 全部出る\n\n生成元は複数存在することがあります。',
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
      id: 'finite-cyclic',
      title: '有限巡回群 Cₙ',
      content:
        '位数 n の巡回群を Cₙ と書きます。\n\nC₁ = {e}\nC₂ = {e, a}（a² = e）\nC₃ = {e, a, a²}（a³ = e）\nC₄ = {e, a, a², a³}（a⁴ = e）\n\nCₙ は ℤ/nℤ と同じ構造（同型）です。\n\nmod n の足し算の世界が、巡回群の正体です。',
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
      id: 'infinite-cyclic',
      title: '無限巡回群',
      content:
        '巡回群は有限とは限りません。\n\n(ℤ, +) は 1 を生成元とする無限巡回群です。\n  ..., -3, -2, -1, 0, 1, 2, 3, ...\n\n1 を足し続ければ正の整数が、-1 を足し続ければ負の整数が得られます。\n\nすべての整数は 1（と -1）から生成されます。',
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
      id: 'cyclic-always-abelian',
      title: '巡回群は常に可換',
      content:
        '巡回群には重要な性質があります: 常に可換（アーベル群）です。\n\n証明: aⁱ ∗ aʲ = aⁱ⁺ʲ = aʲ⁺ⁱ = aʲ ∗ aⁱ\n\n指数の足し算は可換なので、自然に可換になります。\n\nしかし、すべての可換群が巡回群とは限りません。',
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
      content: '巡回群について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ℤ/6ℤ で 3 は生成元ですか？',
        options: [
          { id: 'a', label: 'はい', correct: false },
          { id: 'b', label: 'いいえ、{0, 3} しか生成しない', correct: true },
          { id: 'c', label: 'いいえ、{0, 2, 4} を生成する', correct: false },
          { id: 'd', label: 'いいえ、逆元がないから', correct: false },
        ],
        explanation:
          '正解は「いいえ」です。3 + 3 = 0 (mod 6) なので、3 が生成するのは {0, 3} だけです。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '巡回群のポイント:\n\n1. 1つの生成元から全要素が作れる群\n2. Cₙ ≅ ℤ/nℤ（有限巡回群は mod n と同型）\n3. 無限巡回群: ℤ は 1 から生成される\n4. 巡回群は必ず可換（アーベル群）\n\n巡回群は最もシンプルな群ですが、すべての群の構成要素となる重要な存在です。\n\n次は「対称群」── もっと複雑な群を見てみましょう。',
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
