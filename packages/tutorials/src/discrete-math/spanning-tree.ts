import { Tutorial } from '../types';

export const spanningTreeTutorial: Tutorial = {
  id: 'spanning-tree',
  title: '全域木',
  description: 'グラフのすべての頂点をつなぐ最小の部分グラフを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '最小のネットワーク',
      content:
        '10個の町をすべて道路でつなぎたい。しかし道路の建設費をできるだけ安くしたい。\n\nすべての町がつながっていて、かつ無駄な道路がない構造。\n\nそれが「全域木」です。',
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
      id: 'definition',
      title: '全域木の定義',
      content:
        '連結グラフ G の全域木（spanning tree）とは、\nG のすべての頂点を含み、G の辺の部分集合からなる木です。\n\n全域木は G の頂点をすべて残しつつ、サイクルが生じないように辺を削除して得られます。\n\nn頂点のグラフの全域木は必ず n-1 本の辺を持ちます。',
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
      id: 'mst',
      title: '最小全域木',
      content:
        '辺に重み（コスト）がある場合、辺の重みの合計が最小の全域木を「最小全域木（MST）」と呼びます。\n\n道路の建設費が辺の重みなら、MST が最も安くすべての町をつなぐ方法です。\n\nMST を求めるアルゴリズムとして、Kruskal法とPrim法が有名です。',
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
      id: 'kruskal',
      title: 'Kruskal法',
      content:
        'Kruskal法の手順：\n\n1. すべての辺を重みの小さい順にソート\n2. 辺を1本ずつ追加（ただしサイクルができる辺はスキップ）\n3. n-1本の辺が選ばれたら終了\n\n貪欲法（greedy）で最適解が得られる美しいアルゴリズムです。',
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
      content: '全域木について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '8頂点の連結グラフの全域木の辺の数は？',
        options: [
          { id: 'a', label: '6', correct: false },
          { id: 'b', label: '7', correct: true },
          { id: 'c', label: '8', correct: false },
          { id: 'd', label: 'グラフによる', correct: false },
        ],
        explanation:
          '正解は7です。全域木は木なので、n頂点なら必ず n-1 = 7本の辺を持ちます。元のグラフの辺数には依存しません。',
      },
    },
    {
      id: 'prim',
      title: 'Prim法',
      content:
        'Prim法の手順：\n\n1. 任意の頂点から開始\n2. 「現在の木」と「残りの頂点」をつなぐ辺のうち、最小重みの辺を追加\n3. すべての頂点が木に含まれるまで繰り返し\n\nKruskal法がグローバルに辺を選ぶのに対し、Prim法は木を成長させていきます。',
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
        '・全域木：すべての頂点を含む木\n・最小全域木（MST）：重みの合計が最小の全域木\n・Kruskal法：辺を重み順に貪欲に追加\n・Prim法：木を頂点ごとに成長\n\nネットワーク設計の基本として、MSTは実社会で広く使われています。\n\n次は、頂点間の最短パスを求める方法を学びます。',
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
