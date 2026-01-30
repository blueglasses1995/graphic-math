import { Tutorial } from '../types';

export const bfsVsDfsTutorial: Tutorial = {
  id: 'bfs-vs-dfs',
  title: 'BFS vs DFS',
  description: '幅優先探索と深さ優先探索の違いと使い分けを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '2つの探索戦略',
      content:
        '建物の中で火災出口を探す場合：\n\n・BFS（幅優先）：今いるフロアの全部屋を先に調べる → 最短距離を保証\n・DFS（深さ優先）：一つの通路をとことん進む → メモリ効率が良い\n\n同じグラフでも探索順序が全く異なります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bfs-vs-dfs-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'BFSとDFSの探索順を比較しよう',
      content:
        'BFS：キューを使用。近い頂点から順に探索。\nDFS：スタックを使用（または再帰）。深い頂点まで一気に探索。\n\n同じグラフに対してBFSとDFSの探索順序を見比べてみましょう。\n\n色の変化で探索の進行を確認できます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bfs-vs-dfs-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'BFSの応用',
      content:
        'BFSの特徴：最短経路を保証（重みなしグラフ）\n\n応用例：\n・最短経路探索（重みが均一な場合）\n・ソーシャルネットワークの距離\n・パズルの最少手数解\n・二部グラフ判定\n\n計算量：O(V + E)\nメモリ：O(V)（キューに全頂点が入る可能性）',
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
      id: 'example-2',
      title: 'DFSの応用',
      content:
        'DFSの特徴：メモリ効率が良く、構造解析に強い\n\n応用例：\n・トポロジカルソート\n・強連結成分分解\n・閉路検出\n・バックトラッキング全般\n\n計算量：O(V + E)\nメモリ：O(h)（hは探索の深さ、最悪O(V)）\n\n再帰で実装するとコードがシンプルになります。',
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
      id: 'predict',
      title: 'クイズ：BFS vs DFS',
      content: 'BFSとDFSの使い分けを確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '重みなしグラフで最短経路を求めたい場合、どちらを使うべきですか？',
        options: [
          { id: 'a', label: 'DFS', correct: false },
          { id: 'b', label: 'BFS', correct: true },
          { id: 'c', label: 'どちらでも同じ', correct: false },
          { id: 'd', label: 'どちらでも不可能', correct: false },
        ],
        explanation:
          'BFSは始点からの距離が近い順に探索するため、重みなしグラフの最短経路を保証します。',
      },
    },
    {
      id: 'alternate',
      title: '反復深化深さ優先探索',
      content:
        'BFSの最短性とDFSのメモリ効率を両立する手法があります。\n\n反復深化DFS（IDDFS）：\n1. 深さ制限1でDFS\n2. 深さ制限2でDFS\n3. ...\n4. 解が見つかるまで深さを増やす\n\n一見無駄に見えますが、分岐が大きいグラフでは BFS と比べてメモリが劇的に少なくなります。\n時間計算量は BFS と同じ O(b^d) です。',
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
      title: 'まとめ：BFS vs DFS',
      content:
        'BFSとDFSはグラフ探索の2大手法です。\n\n・BFS：キュー、最短経路保証、メモリ大\n・DFS：スタック/再帰、構造解析に強い、メモリ小\n・IDDFS：両者の良いとこ取り\n\n問題の性質に応じて適切な手法を選ぶことが重要です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bfs-vs-dfs-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
