import { Tutorial } from '../types';

export const treeTutorial: Tutorial = {
  id: 'tree',
  title: '木（ツリー）',
  description: '連結でサイクルのないグラフ「木」の性質を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '家系図とフォルダ構造',
      content:
        '家系図、フォルダ構造、トーナメント表 ── これらに共通するのは「枝分かれしてループしない」構造です。\n\nこの構造を数学では「木（tree）」と呼びます。\n\nコンピュータサイエンスで最も重要なデータ構造の一つです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'tree-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '木の定義',
      content:
        '木とは、連結でサイクルを持たないグラフです。\n\n同値な条件がいくつかあります：\n・連結で、辺を1本取り除くと非連結になる\n・サイクルがなく、辺を1本追加するとサイクルができる\n・任意の2頂点間にちょうど1つのパスが存在する',
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
      id: 'edge-count',
      title: '辺の数の公式',
      content:
        '木の重要な性質：n個の頂点を持つ木は、ちょうど n-1 本の辺を持ちます。\n\n・1頂点の木：辺0本\n・2頂点の木：辺1本\n・3頂点の木：辺2本\n\nこれは帰納法で証明できます。葉（次数1の頂点）を1つ取り除くと、n-1頂点の木になります。',
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
      id: 'rooted-tree',
      title: '根付き木',
      content:
        '1つの頂点を「根（root）」として選ぶと、木に上下の方向が生まれます。\n\n・根から遠い方が「子」、近い方が「親」\n・子を持たない頂点が「葉」\n・根から葉までの最長パスの長さが「高さ」\n\nフォルダ構造のルートフォルダが根です。',
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
      content: '木の性質を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '10個の頂点を持つ木の辺の数は？',
        options: [
          { id: 'a', label: '8', correct: false },
          { id: 'b', label: '9', correct: true },
          { id: 'c', label: '10', correct: false },
          { id: 'd', label: '11', correct: false },
        ],
        explanation:
          '正解は9です。n個の頂点を持つ木はちょうど n-1 本の辺を持つので、10-1 = 9本です。',
      },
    },
    {
      id: 'binary-tree',
      title: '二分木',
      content:
        '各頂点の子が最大2つの根付き木を「二分木」と呼びます。\n\n二分探索木、ヒープ、式の構文木など、アルゴリズムの基本構造です。\n\n高さ h の完全二分木は 2^(h+1) - 1 個の頂点を持ちます。\n\nデータ量が倍になっても高さは1しか増えません。これが二分探索の効率の源です。',
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
        '・木 = 連結 + サイクルなし\n・n頂点の木は n-1 本の辺\n・任意の2頂点間にちょうど1つのパス\n・根付き木、二分木はCSの基本構造\n\n木はグラフの中でも最もシンプルで、最も実用的な構造です。\n\n次は、任意のグラフから木を取り出す「全域木」を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'tree-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
