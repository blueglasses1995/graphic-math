import { Tutorial } from '../types';

export const quotientGroupTutorial: Tutorial = {
  id: 'quotient-group',
  title: '商群',
  description: '正規部分群による商群の構成と性質を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '群を「まとめる」操作',
      content:
        '12時間時計の「3の倍数」をひとまとめにすると、\n{0,3,6,9}, {1,4,7,10}, {2,5,8,11} の3つのグループができます。\n\nこの3つのグループ自体が新しい群を作ります。\nこれが「商群」の直感的なイメージです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '剰余類の演算を体験',
      content:
        '商群 Z₆/{0,3} の元は剰余類 {0,3}, {1,4}, {2,5} です。\n\n剰余類同士の「足し算」を試してみましょう:\n{1,4} + {2,5} = {0,3}\n\nどの代表元を選んでも結果は同じになることを確認してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '商群の定義',
      content:
        'G を群、N ◁ G を正規部分群とするとき、\n\n商群 G/N = { gN | g ∈ G }\n\n演算: (g₁N)(g₂N) = (g₁g₂)N\n\nNが正規部分群であることが、この演算の整合性（well-defined性）を保証します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '第一同型定理',
      content:
        '群準同型 φ: G → H に対して:\n\nG/ker(φ) ≅ Im(φ)\n\nこれは代数学で最も重要な定理の一つです。\n\n例: φ: Z → Z₆ (mod 6 を取る) の核は 6Z\n→ Z/6Z ≅ Z₆\n\n商群は準同型の像と同型になるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '商群について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '商群 Z₁₂/{0,4,8} の位数（元の数）はいくつですか？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '3', correct: false },
          { id: 'c', label: '4', correct: true },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          '|G/N| = |G|/|N| = 12/3 = 4 です。剰余類は {0,4,8}, {1,5,9}, {2,6,10}, {3,7,11} の4つです。',
      },
    },
    {
      id: 'alternate',
      title: '自然な射影',
      content:
        '商群には「自然な射影」π: G → G/N（π(g) = gN）が付随します。\n\nこれは全射準同型で、ker(π) = N です。\n\nこの射影を通じて、Gの構造がG/Nに「投影」されます。\n\n複雑な群を、より単純な商群に分解して理解するのが群論の基本戦略です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：商群の世界',
      content:
        '商群 G/N は:\n\n• 正規部分群Nで「割った」新しい群\n• 元は剰余類 gN の集合\n• 第一同型定理: G/ker(φ) ≅ Im(φ)\n• 群の構造を簡約化する強力な道具\n\n商群は群論のあらゆる場面で活躍します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
