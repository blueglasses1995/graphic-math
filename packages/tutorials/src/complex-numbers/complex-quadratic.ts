import { Tutorial } from '../types';

export const complexQuadraticTutorial: Tutorial = {
  id: 'complex-quadratic',
  title: '複素数と二次方程式',
  description: '判別式が負の場合の複素数解と共役解の関係',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '判別式と解の種類',
      content:
        '二次方程式 ax² + bx + c = 0 の解の公式:\n\nx = (-b ± √(b²-4ac)) / (2a)\n\n判別式 D = b² - 4ac が:\n・D > 0: 異なる2つの実数解\n・D = 0: 重解（実数）\n・D < 0: 2つの複素数解\n\n複素数を学んだ今、D < 0 も解けます！',
      customScene: 'complex-quadratic-animation',
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
      id: 'example',
      title: '具体例',
      content:
        'x² + 2x + 5 = 0 を解きましょう。\n\nD = 4 - 20 = -16 < 0\n\nx = (-2 ± √(-16)) / 2\n= (-2 ± 4i) / 2\n= -1 ± 2i\n\n解は x = -1 + 2i と x = -1 - 2i です。',
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
      id: 'conjugate-pair',
      title: '共役解の法則',
      content:
        '実数係数の方程式で複素数解が出る場合、必ず共役のペアで現れます。\n\nα + βi が解なら、α - βi も解。\n\n上の例: -1 + 2i と -1 - 2i は共役\n\nこれは係数が実数なので、共役を取っても方程式が変わらないからです。',
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
      id: 'vieta',
      title: 'ヴィエタの公式',
      content:
        '2つの解 α, β に対して:\n\nα + β = -b/a（解の和）\nα × β = c/a（解の積）\n\n複素解でも成り立ちます。共役ペア α = p+qi, β = p-qi なら:\n\nα + β = 2p（実数）\nα × β = p² + q²（実数）\n\n係数が実数になることと整合します。',
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
      content: '二次方程式を複素数の範囲で解いてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'x² + 1 = 0 の解は？',
        options: [
          { id: 'a', label: 'x = ±1', correct: false },
          { id: 'b', label: 'x = ±i', correct: true },
          { id: 'c', label: '解なし', correct: false },
          { id: 'd', label: 'x = 0', correct: false },
        ],
        explanation:
          'x² = -1 なので x = ±√(-1) = ±i です。これは最初のチュートリアルで見た問題そのものです！',
      },
    },
    {
      id: 'graph',
      title: 'グラフとの関係',
      content:
        'y = x² + 1 のグラフはx軸と交わりません。\n\nしかし複素数の範囲では x = ±i が解です。\n\n「グラフがx軸と交わらない」= 「実数解がない」ですが、複素数解は存在します。\n\n複素数は、方程式の「見えない解」を見つける道具なのです。',
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
        '複素数と二次方程式:\n\n・D < 0 でも解の公式は使える（√(-D) = √D × i）\n・実数係数の方程式の複素数解は共役ペアで現れる\n・ヴィエタの公式は複素解でも成立\n・複素数により「すべての二次方程式に解がある」\n\n次は代数学の基本定理を学びましょう。',
      customScene: 'complex-quadratic-summary',
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
