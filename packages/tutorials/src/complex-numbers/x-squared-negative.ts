import { Tutorial } from '../types';

export const xSquaredNegativeTutorial: Tutorial = {
  id: 'x-squared-negative',
  title: 'x²=-1の解は？',
  description: '実数では解けないx²=-1という方程式から、虚数の必要性を発見する',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '解けない方程式',
      content:
        'x² = 1 の解は x = 1 と x = -1 です。\n\nでは x² = -1 の解は？\n\n正の数を2乗しても正、負の数を2乗しても正。実数の範囲では、2乗して負になる数は存在しません。\n\nこの「不可能」を突破するために、数学者たちは新しい数を発明しました。',
      customScene: 'x-squared-negative-animation',
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
      id: 'graph',
      title: 'グラフで見る',
      content:
        'y = x² のグラフを思い浮かべてください。放物線は常にx軸の上にあります。\n\ny = -1 の直線（x軸の下）とは決して交わりません。\n\nこれが「実数では解がない」ことのグラフ的な意味です。',
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
      id: 'history',
      title: '歴史的背景',
      content:
        '16世紀、イタリアの数学者カルダノは3次方程式を解く過程で、√(-1) を含む式に遭遇しました。\n\n彼はそれを「精神的な拷問」と呼びましたが、計算を進めると正しい実数解が得られたのです。\n\n「意味がわからないけど、使うとうまくいく」── これが虚数の始まりでした。',
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
      id: 'invention',
      title: '新しい数の発明',
      content:
        '数学者たちは大胆な決断をしました。\n\n「2乗して-1になる数が存在すると仮定しよう」\n\nその数を i と名付けました。つまり i² = -1 です。\n\nこれにより x² = -1 の解は x = i と x = -i になります。',
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
      content: 'x² = -4 の解はどれでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'x² = -4 の解は？',
        options: [
          { id: 'a', label: 'x = ±2', correct: false },
          { id: 'b', label: 'x = ±2i', correct: true },
          { id: 'c', label: '解なし', correct: false },
          { id: 'd', label: 'x = ±4i', correct: false },
        ],
        explanation:
          'x² = -4 → x² = 4 × (-1) → x = ±√4 × √(-1) = ±2i です。i² = -1 を使えば、負の数の平方根も扱えます。',
      },
    },
    {
      id: 'analogy',
      title: '数の拡張の歴史',
      content:
        '実は数の「発明」はこれが初めてではありません。\n\n自然数 → 0の発明 → 負の数の発明 → 分数の発明 → 無理数の発明\n\nそのたびに「そんな数は存在しない」と言われましたが、今では当たり前に使っています。\n\n虚数も同じ。最初は「想像上の数（imaginary number）」と呼ばれましたが、今では物理学に不可欠です。',
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
        'x² = -1 は実数では解けません。\n\nしかし i² = -1 となる数 i を導入すると、解が x = ±i と書けます。\n\nこの i を「虚数単位」と呼びます。\n\n次のチュートリアルでは、この i の性質をもっと詳しく見ていきましょう。',
      customScene: 'x-squared-negative-summary',
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
