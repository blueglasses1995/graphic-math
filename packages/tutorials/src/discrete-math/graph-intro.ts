import { Tutorial } from '../types';

export const graphIntroTutorial: Tutorial = {
  id: 'graph-intro',
  title: 'グラフとは',
  description: '頂点と辺で構成されるグラフの基本概念を理解する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'グラフは図ではない',
      content:
        '「グラフ」と聞くと棒グラフや折れ線グラフを思い浮かべるかもしれません。\n\nしかし離散数学のグラフは全く別物です。\n\n点（頂点）と線（辺）で「つながり」を表す構造 ── それがグラフです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'graph-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '数学的な定義',
      content:
        'グラフ G = (V, E) は2つの集合で定義されます。\n\nV：頂点（vertex）の集合\nE：辺（edge）の集合。各辺は2つの頂点を結ぶ。\n\n例：V = {A, B, C}、E = {{A,B}, {B,C}} は、AとB、BとCがつながったグラフです。',
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
      id: 'types',
      title: '有向・無向グラフ',
      content:
        '辺に方向がないグラフを「無向グラフ」、方向があるものを「有向グラフ」と呼びます。\n\n友達関係は無向（お互いに友達）、Twitterのフォローは有向（一方通行もある）です。\n\n有向グラフでは辺を「弧（arc）」と呼ぶこともあります。',
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
      title: '身近なグラフの例',
      content:
        'グラフは至るところにあります。\n\n・路線図：駅が頂点、路線が辺\n・SNS：ユーザーが頂点、フォロー関係が辺\n・Webページ：ページが頂点、リンクが辺\n・分子構造：原子が頂点、結合が辺\n\n「つながり」があればグラフで表現できます。',
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
      content: 'グラフの基本要素について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'Twitterのフォロー関係を表すのに適切なグラフは？',
        options: [
          { id: 'a', label: '無向グラフ', correct: false },
          { id: 'b', label: '有向グラフ', correct: true },
          { id: 'c', label: '完全グラフ', correct: false },
          { id: 'd', label: '二部グラフ', correct: false },
        ],
        explanation:
          '正解は有向グラフです。AがBをフォローしていても、BがAをフォローしているとは限らないため、方向性が必要です。',
      },
    },
    {
      id: 'special-graphs',
      title: '特殊なグラフ',
      content:
        'いくつかの重要な特殊グラフを覚えましょう。\n\n・完全グラフ K_n：n個の頂点がすべて互いにつながっている\n・空グラフ：辺が1本もない\n・自己ループ：頂点が自分自身とつながる辺\n・多重辺：同じ2頂点間に複数の辺がある\n\n自己ループも多重辺もない「単純グラフ」が最も基本的です。',
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
        'グラフ G = (V, E) は頂点と辺でつながりを表す数学的構造です。\n\n・無向グラフと有向グラフがある\n・身の回りの多くの関係がグラフで表現できる\n・単純グラフが基本\n\n次は、各頂点のつながりの数「次数」について学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'graph-intro-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
