import { Tutorial } from '../types';

export const burnsideTutorial: Tutorial = {
  id: 'burnside',
  title: '【実践】バーンサイドの補題',
  description: '対称性を考慮した数え上げの手法を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '回転を考慮した数え上げ',
      content:
        '正方形の4つの頂点を2色（赤・青）で塗り分ける方法は何通りでしょう？\n\n単純に数えると 2⁴ = 16 通りです。\n\nしかし正方形は回転できます。90°回して同じになる塗り分けは「同じ」とみなすなら？\n\nこの「対称性を考慮した数え上げ」にバーンサイドの補題を使います。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'burnside-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'fixed-points',
      title: '不動点の数え方',
      content:
        '群 G が集合 X に作用するとき:\n\n各操作 g ∈ G に対して、g で動かない要素（不動点）の数 |Fix(g)| を数えます。\n\n正方形の回転群 C₄ = {e, r, r², r³} の場合:\n\ne（0°）: 16通りすべて不動 → |Fix(e)| = 16\nr（90°）: 4頂点が同色のみ → |Fix(r)| = 2\nr²（180°）: 対角が同色 → |Fix(r²)| = 4\nr³（270°）: 4頂点が同色のみ → |Fix(r³)| = 2',
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
      id: 'lemma',
      title: 'バーンサイドの補題',
      content:
        'バーンサイドの補題（コーシー・フロベニウスの定理）:\n\n本質的に異なるパターンの数 = (1/|G|) Σ |Fix(g)|\n\n正方形の2色塗り分けの場合:\n  = (1/4)(16 + 2 + 4 + 2)\n  = 24/4\n  = 6 通り\n\n驚くほどシンプルな公式で、複雑な数え上げが解けます！',
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
      id: 'necklace',
      title: 'ネックレスの問題',
      content:
        '応用例: n 個のビーズで作るネックレス（k 色使用）\n\n回転群 Cₙ を考えます。\n\n3ビーズ・2色の場合:\n  e: 2³ = 8\n  r: 2¹ = 2（3ビーズすべて同色）\n  r²: 2¹ = 2\n\n本質的に異なるネックレス = (8+2+2)/3 = 4 通り\n\n{赤赤赤, 青青青, 赤赤青, 赤青青}',
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
      id: 'chemistry',
      title: '化学への応用',
      content:
        'バーンサイドの補題は化学でも使われます。\n\n分子の異性体の数え上げ:\n  ベンゼン環の水素を置換基で置き換える方法\n  正四面体形分子の異性体数\n\n例: ベンゼン（C₆H₆）の2つのHをClで置換\n  二面体群 D₆ を使って計算 → 3種類の異性体\n  （オルト、メタ、パラ位）\n\n群論が分子の種類を数えるのです。',
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
      content: 'バーンサイドの補題を使ってみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '正三角形の3頂点を2色で塗り分ける。回転を考慮して本質的に異なるパターンは何通り？',
        options: [
          { id: 'a', label: '3', correct: false },
          { id: 'b', label: '4', correct: true },
          { id: 'c', label: '6', correct: false },
          { id: 'd', label: '8', correct: false },
        ],
        explanation:
          '正解は 4 通りです。C₃ = {e, r, r²} で |Fix(e)|=8, |Fix(r)|=2, |Fix(r²)|=2。(8+2+2)/3 = 4 です。{赤赤赤, 青青青, 赤赤青, 赤青青}の4パターンです。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'バーンサイドの補題:\n\n1. 対称性を考慮した数え上げの公式\n2. パターン数 = 不動点の平均\n3. ネックレス、タイリング、化学異性体の計算に応用\n4. 群作用の理論の美しい応用例\n\n「何通りあるか」という素朴な問いに、群論が洗練された答えを与えます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'burnside-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
