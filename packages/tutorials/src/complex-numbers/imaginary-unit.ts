import { Tutorial } from '../types';

export const imaginaryUnitTutorial: Tutorial = {
  id: 'imaginary-unit',
  title: '虚数単位i',
  description: 'i² = -1 を満たす虚数単位iの基本的な性質と累乗のパターン',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: 'iとは何か',
      content:
        '虚数単位 i は i² = -1 を満たす数です。\n\n「2乗すると-1になる」── ただそれだけのルールから、驚くほど豊かな数学が生まれます。\n\nまずは i の累乗を調べてみましょう。',
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
      id: 'powers',
      title: 'iの累乗',
      content:
        'i¹ = i\ni² = -1\ni³ = i² × i = -1 × i = -i\ni⁴ = i² × i² = (-1)(-1) = 1\n\ni⁵ = i⁴ × i = 1 × i = i\ni⁶ = i⁴ × i² = 1 × (-1) = -1\n\nパターンが見えますか？ i → -1 → -i → 1 → i → … と4つの値を繰り返します。',
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
      id: 'cycle',
      title: '4周期の回転',
      content:
        'iを掛けることは、複素平面上で90°回転させることに対応します。\n\n1 → i → -1 → -i → 1 → …\n\n4回掛けると元に戻る。これは90° × 4 = 360°（一周）だからです。\n\nこの「掛け算 = 回転」という発想が、複素数の最も美しいアイデアの一つです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'iの累乗を体験',
      content:
        '複素平面上で、1から始めて i を掛けるたびに点がどう動くか観察してみましょう。\n\n1（右）→ i（上）→ -1（左）→ -i（下）→ 1（右）\n\n反時計回りに90°ずつ回転しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: { type: 'drag-unit-circle' },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: 'iの累乗のパターンを理解できたか確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'i¹⁰⁰ の値は？',
        options: [
          { id: 'a', label: 'i', correct: false },
          { id: 'b', label: '-1', correct: false },
          { id: 'c', label: '-i', correct: false },
          { id: 'd', label: '1', correct: true },
        ],
        explanation:
          '100 ÷ 4 = 25 余り 0 なので、i¹⁰⁰ = (i⁴)²⁵ = 1²⁵ = 1 です。余りが0のときは i⁴ = 1 に対応します。',
      },
    },
    {
      id: 'negative-powers',
      title: '負の累乗',
      content:
        'i⁻¹ はいくつでしょう？\n\ni × i⁻¹ = 1 なので、i⁻¹ = 1/i です。\n\n分母を有理化すると: 1/i = 1/i × i/i = i/i² = i/(-1) = -i\n\nつまり i⁻¹ = -i。掛けると時計回りに90°回転することになります。',
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
      id: 'summary',
      title: 'まとめ',
      content:
        '虚数単位 i のポイント:\n\n・i² = -1（定義）\n・累乗は4周期: i, -1, -i, 1, i, ...\n・iを掛ける = 反時計回りに90°回転\n・i⁻¹ = -i（時計回りに90°回転）\n\n次は、実数と虚数を組み合わせた「複素数」の定義を学びましょう。',
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
