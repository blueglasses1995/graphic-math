import { Tutorial } from '../types';

export const shortestPathTutorial: Tutorial = {
  id: 'shortest-path',
  title: '最短パス',
  description: 'ダイクストラ法を中心に最短経路アルゴリズムを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'カーナビの数学',
      content:
        'カーナビやGoogleマップが最短ルートを瞬時に計算できるのはなぜでしょうか？\n\nその裏には「最短パスアルゴリズム」があります。\n\n地図をグラフに変換し、辺の重みを距離や時間にすれば、数学で最適ルートが求まります。',
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
      id: 'bfs',
      title: '重みなしグラフのBFS',
      content:
        '辺に重みがない場合、幅優先探索（BFS）で最短パスが求まります。\n\n出発点から近い頂点を順に探索していきます。\n\n波紋が広がるように、距離1、距離2、距離3…と層ごとに探索します。\n\n計算量は O(V + E) で非常に高速です。',
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
      id: 'dijkstra',
      title: 'ダイクストラ法',
      content:
        '辺に重み（距離）がある場合はダイクストラ法を使います。\n\n手順：\n1. 出発点の距離を0、他をすべて∞に初期化\n2. 未確定の頂点の中で距離最小のものを確定\n3. その頂点から到達可能な頂点の距離を更新\n4. すべて確定するまで繰り返し\n\n貪欲法で最適解が得られます（重みが非負の場合）。',
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
      id: 'negative-weight',
      title: '負の重みとベルマンフォード法',
      content:
        'ダイクストラ法は負の重みの辺があると正しく動きません。\n\nベルマンフォード法は負の重みにも対応できます。\nすべての辺について距離更新を V-1 回繰り返します。\n\nさらに、負のサイクル（回るほど距離が減る）の検出もできます。',
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
      content: '最短パスアルゴリズムについて確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ダイクストラ法が正しく動かないのはどのような場合？',
        options: [
          { id: 'a', label: '辺の数が多い場合', correct: false },
          { id: 'b', label: '負の重みの辺がある場合', correct: true },
          { id: 'c', label: '頂点の数が奇数の場合', correct: false },
          { id: 'd', label: 'グラフが非連結の場合', correct: false },
        ],
        explanation:
          '正解は「負の重みの辺がある場合」です。ダイクストラ法は一度確定した距離を変更しないため、負の重みがあると最適解を見逃す可能性があります。',
      },
    },
    {
      id: 'floyd-warshall',
      title: '全点対最短パス',
      content:
        'ワーシャルフロイド法は、すべての頂点ペア間の最短距離を同時に求めます。\n\nアイデア：頂点kを経由した方が近いなら更新する\n\ndist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\n\n3重ループで計算量は O(V³)。頂点数が少なければ実用的です。',
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
        '・BFS：重みなしグラフの最短パス O(V+E)\n・ダイクストラ法：非負重みの最短パス O(E log V)\n・ベルマンフォード法：負の重みにも対応 O(VE)\n・ワーシャルフロイド法：全点対最短パス O(V³)\n\nこれらは現代のナビゲーション技術の基盤です。\n\n次は、グラフの彩色問題を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
