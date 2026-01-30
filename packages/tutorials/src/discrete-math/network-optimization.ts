import { Tutorial } from '../types';

export const networkOptimizationTutorial: Tutorial = {
  id: 'network-optimization',
  title: '【実践】ネットワーク最適化',
  description: '最小全域木と最短パスを使ったネットワーク設計の実践',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '通信ネットワークの設計',
      content:
        '10都市を光ファイバーで結ぶネットワークを設計します。\n\n各都市間の敷設コストが分かっているとき、すべての都市をつなぐ最安のネットワークは？\n\nこれは最小全域木（MST）の問題です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'network-optimization-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'model',
      title: '問題のグラフ化',
      content:
        '都市を頂点、敷設可能な回線を辺、コストを辺の重みとします。\n\n完全グラフ K_10 では C(10,2) = 45 本の辺がありますが、\nMSTは 10-1 = 9 本の辺だけで全都市を接続できます。\n\n45本中9本を選ぶ ── 大幅なコスト削減が可能です。',
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
      id: 'kruskal-apply',
      title: 'Kruskal法の適用',
      content:
        'Kruskal法で最小全域木を構築しましょう：\n\n1. 45本の辺をコスト順にソート\n2. 最安の辺から順に追加（サイクルができなければ）\n3. 9本の辺が選ばれたら完成\n\nUnion-Find データ構造を使えば、サイクル判定は高速にできます。\n\n計算量は O(E log E) で、大規模ネットワークにも対応可能です。',
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
      id: 'redundancy',
      title: '冗長性の問題',
      content:
        'MSTは最安ですが、1本の辺が故障するとネットワークが分断されます。\n\n実際のネットワークでは冗長性が必要です。\n\n辺連結度を2以上にする ── つまり任意の1辺を取り除いても連結を維持する ── には、\nMSTに加えて追加の辺が必要です。\n\nコストと信頼性のトレードオフが設計の核心です。',
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
      content: 'ネットワーク最適化の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '20都市のMSTの辺の数は？',
        options: [
          { id: 'a', label: '18', correct: false },
          { id: 'b', label: '19', correct: true },
          { id: 'c', label: '20', correct: false },
          { id: 'd', label: 'コストによる', correct: false },
        ],
        explanation:
          '正解は19です。n頂点の木は常に n-1 本の辺を持ちます。MSTも木なので 20-1 = 19 本です。辺のコストに関わらず辺の本数は一定です。',
      },
    },
    {
      id: 'routing',
      title: 'ルーティングの最適化',
      content:
        'ネットワークができたら、データの経路選択（ルーティング）が必要です。\n\n各都市間の最短パスをダイクストラ法で計算します。\n\n全都市間のルーティングテーブルにはワーシャルフロイド法が便利です。\n\nインターネットの OSPF プロトコルは実際にダイクストラ法をベースにしています。',
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
        '・ネットワーク設計 → 最小全域木\n・経路選択 → 最短パスアルゴリズム\n・信頼性 → 冗長性（辺連結度）\n・コスト vs 信頼性のトレードオフ\n\nグラフ理論は現代の通信インフラの設計に直結する実用的な数学です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'network-optimization-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
