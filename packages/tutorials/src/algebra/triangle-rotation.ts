import { Tutorial } from '../types';

export const triangleRotationTutorial: Tutorial = {
  id: 'triangle-rotation',
  title: '三角形の回転',
  description: '正三角形の回転操作を通じて群の概念に近づく',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '三角形を回してみよう',
      content:
        '正三角形の3つの頂点に、A, B, C と名前をつけます。\n\nこの三角形を120°回転させると、頂点の位置が入れ替わります。\n\nでも三角形の形自体は変わりません。\n\nこの「回転」を数学的に記述してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triangle-rotation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'rotation-120',
      title: '120°回転: r',
      content:
        '120°回転を r と名付けます。\n\nr を適用すると:\n  A → B, B → C, C → A\n\n頂点が1つずつずれます。\n\n三角形の見た目は同じですが、頂点の並び順は変わっています。',
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
      id: 'rotation-240',
      title: '240°回転: r²',
      content:
        '120°回転を2回行うと240°回転になります。\n\nr² = r・r: A → C, B → A, C → B\n\nこれは120°回転とは別の操作ですが、やはり三角形の見た目は変わりません。\n\nr² は「r を2回」という意味で、操作の合成を表しています。',
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
      id: 'rotation-360',
      title: '360°回転: r³ = e',
      content:
        '120°回転を3回行うと360°、つまり元に戻ります。\n\nr³ = e（恒等操作）\n\ne は「何もしない操作」です。すべてがそのまま。\n\nつまり回転操作の集合は {e, r, r²} の3つです。\n\nこれが「位数3の巡回群」の最も単純な例です。',
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
      id: 'multiplication-table',
      title: '演算表を作ろう',
      content:
        '3つの操作の組み合わせをすべて書き出してみましょう。\n\ne・e = e,  e・r = r,  e・r² = r²\nr・e = r,  r・r = r²,  r・r² = e\nr²・e = r²,  r²・r = e,  r²・r² = r\n\nどの2つを組み合わせても、結果は必ず {e, r, r²} のどれかになります。\n\nこの性質を「閉じている」と言います。',
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
      content: '三角形の回転について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'r・r² はどの操作と同じですか？',
        options: [
          { id: 'a', label: 'r', correct: false },
          { id: 'b', label: 'r²', correct: false },
          { id: 'c', label: 'e（恒等操作）', correct: true },
          { id: 'd', label: 'r³', correct: false },
        ],
        explanation:
          '正解は e です。r・r² = r³ = 360°回転 = 元に戻る = e（恒等操作）です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '正三角形の回転操作 {e, r, r²} は：\n\n1. どの2つを合成しても集合の中に留まる（閉性）\n2. 何もしない操作 e がある（単位元）\n3. 各操作を打ち消す操作がある（逆元）\n\nこれらの性質を満たす構造が「群」です。\n\n次は「時計の算数」で、同じ構造を別の角度から見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triangle-rotation-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
