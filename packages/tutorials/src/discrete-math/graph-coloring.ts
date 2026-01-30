import { Tutorial } from '../types';

export const graphColoringTutorial: Tutorial = {
  id: 'graph-coloring',
  title: 'グラフの彩色',
  description: '隣接する頂点が異なる色になるように塗り分ける問題を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '地図を塗り分ける',
      content:
        '世界地図で隣り合う国を異なる色で塗りたい。\n\n最小何色で塗り分けられるでしょうか？\n\nこの「地図の塗り分け問題」は、グラフの彩色問題として定式化できます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'graph-coloring-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: 'グラフ彩色の定義',
      content:
        'グラフの頂点彩色とは、隣接する2頂点が異なる色になるように色を割り当てることです。\n\nk色で彩色できるとき、グラフは「k-彩色可能」と言います。\n\n必要な最小の色数を「彩色数 χ(G)」と呼びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'examples',
      title: '基本的な例',
      content:
        '・辺のないグラフ：χ = 1（全部同じ色でOK）\n・完全グラフ K_n：χ = n（全員が隣接するので全員違う色）\n・偶数長サイクル：χ = 2（交互に塗る）\n・奇数長サイクル：χ = 3（交互に塗ると最後が矛盾）\n\nサイクルの長さの偶奇で彩色数が変わるのは興味深い事実です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'four-color',
      title: '四色定理',
      content:
        '四色定理：任意の平面グラフは4色で彩色可能。\n\n1852年に予想され、1976年にコンピュータを使って証明されました。\n\nコンピュータによる証明を初めて用いた重要な定理として、数学史に刻まれています。\n\n地図は平面グラフなので、どんな地図も4色で塗り分けられます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'グラフ彩色について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '完全グラフ K_5 の彩色数は？',
        options: [
          { id: 'a', label: '3', correct: false },
          { id: 'b', label: '4', correct: false },
          { id: 'c', label: '5', correct: true },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          '正解は5です。完全グラフではすべての頂点が互いに隣接するため、すべて異なる色が必要です。K_n の彩色数は n です。',
      },
    },
    {
      id: 'applications',
      title: '彩色の応用',
      content:
        'グラフ彩色は多くの実問題に応用されます。\n\n・時間割作成：同時に受ける授業が隣接、色が時間帯\n・周波数割当：近い基地局が隣接、色が周波数\n・レジスタ割当：コンパイラの最適化\n\n「衝突を避けて資源を配分する」問題の多くがグラフ彩色に帰着します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        '・グラフ彩色：隣接頂点を異なる色に\n・彩色数 χ(G)：必要最小色数\n・四色定理：平面グラフは4色で塗れる\n・時間割や周波数割当に応用\n\n彩色問題は一般にはNP困難ですが、特殊な構造を持つグラフでは効率的に解けます。\n\n次は、平面グラフの性質を詳しく学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'graph-coloring-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
