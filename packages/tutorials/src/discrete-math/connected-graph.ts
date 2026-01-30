import { Tutorial } from '../types';

export const connectedGraphTutorial: Tutorial = {
  id: 'connected-graph',
  title: '連結グラフ',
  description: 'グラフの連結性と連結成分について学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'つながっているか？',
      content:
        'ある人から別の人へ、友達の友達をたどって到達できるか？\n\nこれがグラフの「連結性」の問題です。\n\nSNSで全員がつながっているなら、そのグラフは「連結」です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'connected-graph-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '連結グラフの定義',
      content:
        'グラフが連結であるとは、任意の2頂点間にパスが存在することです。\n\nつまり、どの頂点からどの頂点へも辺をたどって到達できます。\n\n連結でないグラフは「非連結」と呼ばれます。',
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
      id: 'components',
      title: '連結成分',
      content:
        '非連結グラフは、いくつかの「連結成分」に分かれます。\n\n各連結成分は、それ自体が連結な部分グラフです。\n\n例えば、3つの島があり島内だけ移動できるなら、連結成分は3つです。\n\n連結成分の数はグラフの重要な特徴量です。',
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
      id: 'bridge-cut',
      title: '橋と切断点',
      content:
        '橋（bridge）：その辺を取り除くと連結成分が増える辺\n切断点（cut vertex）：その頂点を取り除くと連結成分が増える頂点\n\nネットワークにおいて、橋や切断点は「弱点」です。\n\nインターネットの設計では、橋や切断点を作らないことが重要です。',
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
      content: '連結性について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '頂点が5個、辺が3本のグラフの連結成分の数として有り得ないものは？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '2', correct: false },
          { id: 'c', label: '3', correct: false },
          { id: 'd', label: '5', correct: true },
        ],
        explanation:
          '正解は5です。辺が3本あるので少なくとも3組の頂点がつながり、連結成分は最大でも4個です。5個（すべて孤立）には辺が0本必要です。',
      },
    },
    {
      id: 'strong-weak',
      title: '有向グラフの連結性',
      content:
        '有向グラフでは連結性が2種類あります。\n\n強連結：任意の2頂点間に双方向のパスがある\n弱連結：辺の向きを無視すれば連結\n\n一方通行の道路網では、どこからどこへも行けるかどうかが強連結性です。',
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
        '・連結グラフ：任意の2頂点間にパスが存在\n・連結成分：連結な部分グラフの最大単位\n・橋と切断点：ネットワークの弱点\n・有向グラフでは強連結と弱連結を区別\n\n連結性はネットワークの信頼性評価に直結する概念です。\n\n次は、連結でサイクルがない特別なグラフ ── 木を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'connected-graph-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
