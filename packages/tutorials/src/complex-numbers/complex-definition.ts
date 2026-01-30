import { Tutorial } from '../types';

export const complexDefinitionTutorial: Tutorial = {
  id: 'complex-definition',
  title: '複素数の定義',
  description: '実部と虚部からなる複素数 a + bi の定義と基本的な性質',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '実数と虚数の合体',
      content:
        '実数 a と虚数 bi を足し合わせた数を「複素数」と呼びます。\n\nz = a + bi\n\nここで a を実部（Real part）、b を虚部（Imaginary part）と呼びます。\n\n例: z = 3 + 2i なら、実部は3、虚部は2です。',
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
      id: 'special-cases',
      title: '特別な場合',
      content:
        '複素数 z = a + bi には特別な場合があります:\n\n・b = 0 のとき: z = a（実数）\n・a = 0 のとき: z = bi（純虚数）\n・a = 0, b = 0 のとき: z = 0\n\nつまり、実数は複素数の特別な場合なのです。すべての実数は複素数でもあります。',
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
      id: 'equality',
      title: '複素数の等しさ',
      content:
        '2つの複素数 a + bi と c + di が等しいとは:\n\na = c かつ b = d\n\nつまり、実部どうし・虚部どうしがそれぞれ等しいことです。\n\n例: x + yi = 3 + 4i ならば x = 3, y = 4 です。',
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
      id: 'notation',
      title: '記法と記号',
      content:
        '複素数全体の集合を ℂ（太字のC）で表します。\n\nRe(z): zの実部（Real part）\nIm(z): zの虚部（Imaginary part）\n\nz = 3 + 2i のとき:\nRe(z) = 3\nIm(z) = 2\n\n注意: Im(z) は 2i ではなく 2 です。虚部は「iの係数」です。',
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
      content: '複素数の基本を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'z = 5 - 3i のとき、Re(z) と Im(z) は？',
        options: [
          { id: 'a', label: 'Re(z) = 5, Im(z) = -3i', correct: false },
          { id: 'b', label: 'Re(z) = 5, Im(z) = -3', correct: true },
          { id: 'c', label: 'Re(z) = 5, Im(z) = 3', correct: false },
          { id: 'd', label: 'Re(z) = -3, Im(z) = 5', correct: false },
        ],
        explanation:
          '虚部はiの係数なので Im(z) = -3 です（-3i ではありません）。符号も含めて係数を取ります。',
      },
    },
    {
      id: 'set-hierarchy',
      title: '数の集合の階層',
      content:
        '数の世界は入れ子構造になっています:\n\nℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ\n\n自然数 ⊂ 整数 ⊂ 有理数 ⊂ 実数 ⊂ 複素数\n\n複素数は数の世界の「最も広い舞台」です。ここまで拡張すれば、どんな多項式方程式にも解が存在します。',
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
        '複素数のポイント:\n\n・z = a + bi（a: 実部、b: 虚部）\n・実数は b = 0 の複素数\n・等しさは実部・虚部がそれぞれ一致\n・Re(z), Im(z) で実部・虚部を表す\n・ℂ は数の世界で最も広い集合\n\n次は、複素数を「点」として表す複素平面を学びましょう。',
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
