import { Tutorial } from '../types';

export const bipartiteMatchingTutorial: Tutorial = {
  id: 'bipartite-matching',
  title: '二部グラフとマッチング',
  description: '2グループ間の最適な対応付けを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '仕事と人のマッチング',
      content:
        '5つの仕事と5人の応募者がいます。各応募者はいくつかの仕事に応募しています。\n\n全員に仕事を1つずつ割り当てることは可能でしょうか？\n\nこれが「マッチング問題」で、二部グラフの理論で解決できます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bipartite-matching-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'bipartite-def',
      title: '二部グラフの定義',
      content:
        '二部グラフとは、頂点を2つのグループに分けて、\n同じグループ内の頂点間には辺がないグラフです。\n\n辺はすべて「グループ間」をつなぎます。\n\n2色で塗り分けられるグラフ（彩色数2以下）と同値です。',
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
      id: 'bipartite-test',
      title: '二部グラフの判定',
      content:
        'グラフが二部グラフかどうかは簡単に判定できます。\n\nBFS/DFSで2色塗りを試みます。隣接する頂点に交互に色を塗り、\n矛盾（隣接する同色頂点）が生じなければ二部グラフです。\n\n重要な事実：奇数長のサイクルを含まないことが二部グラフの必要十分条件です。',
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
      id: 'matching',
      title: 'マッチング',
      content:
        'マッチングとは、どの2辺も頂点を共有しない辺の集合です。\n\n各頂点が最大1つの辺にしか関与しない「1対1の対応」です。\n\n最大マッチング：辺数が最大のマッチング\n完全マッチング：すべての頂点がマッチングに含まれる',
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
      content: '二部グラフについて確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち二部グラフでないものは？',
        options: [
          { id: 'a', label: '長さ4のサイクル', correct: false },
          { id: 'b', label: '木', correct: false },
          { id: 'c', label: '長さ5のサイクル', correct: true },
          { id: 'd', label: '長さ6のサイクル', correct: false },
        ],
        explanation:
          '正解は長さ5のサイクルです。奇数長のサイクルは2色で塗り分けられないため、二部グラフではありません。偶数長のサイクルと木は二部グラフです。',
      },
    },
    {
      id: 'hall',
      title: 'ホールの結婚定理',
      content:
        'ホールの定理：二部グラフで完全マッチングが存在する必要十分条件は、\n\n一方のグループの任意の部分集合 S について、\nS の隣接頂点の数 ≥ |S| が成り立つことです。\n\n「どのグループを選んでも、その希望先の数が人数以上」なら全員マッチングできます。',
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
        '・二部グラフ：頂点を2群に分け、群内に辺がない\n・奇数サイクルがないことと同値\n・マッチング：1対1の対応\n・ホールの定理：完全マッチングの存在条件\n\n人と仕事、学生と学校など、割り当て問題の基盤です。\n\n次は、数え上げの基本を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bipartite-matching-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
