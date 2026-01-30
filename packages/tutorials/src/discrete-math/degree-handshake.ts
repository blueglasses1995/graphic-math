import { Tutorial } from '../types';

export const degreeHandshakeTutorial: Tutorial = {
  id: 'degree-handshake',
  title: '次数と握手定理',
  description: '頂点の次数の合計と辺の数の関係を理解する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'パーティーの握手',
      content:
        'パーティーで何人かが握手をしました。\n\n「握手した回数」の合計は必ず偶数になります。\n\nなぜでしょうか？ 1回の握手には必ず2人が関わるからです。\n\nこの単純な事実がグラフ理論の基本定理になります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'degree-handshake-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'degree-def',
      title: '次数とは',
      content:
        '頂点 v の次数 deg(v) とは、v に接続している辺の数です。\n\n例えば、3人の友達がいる人は次数3の頂点です。\n\n有向グラフでは、入ってくる辺の数（入次数）と出ていく辺の数（出次数）を区別します。',
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
      id: 'handshake-theorem',
      title: '握手定理',
      content:
        '握手定理（Handshaking Lemma）：\n\nすべての頂点の次数の合計 = 2 × 辺の数\n\nΣ deg(v) = 2|E|\n\n各辺は2つの端点を持つため、次数の合計に2ずつ貢献します。\n\nこのシンプルな式は驚くほど多くの問題を解く鍵になります。',
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
      id: 'application',
      title: '握手定理の応用',
      content:
        '問題：5人がそれぞれ3人と握手することは可能か？\n\n次数の合計 = 5 × 3 = 15（奇数）\n\n握手定理より次数の合計は偶数でなければならないので、不可能です。\n\nこのように「存在しない」ことの証明に使えます。',
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
      content: '握手定理を使って考えてみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '6個の頂点を持つグラフで、すべての次数が2のとき、辺の数は？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '5', correct: false },
          { id: 'c', label: '6', correct: true },
          { id: 'd', label: '12', correct: false },
        ],
        explanation:
          '正解は6です。Σdeg(v) = 6×2 = 12 = 2|E| より |E| = 6。この場合、6頂点の1つのサイクルになります。',
      },
    },
    {
      id: 'odd-degree',
      title: '奇数次の頂点',
      content:
        '握手定理の重要な系：\n\n「奇数次の頂点の数は必ず偶数個」\n\n証明：次数の合計は偶数（2|E|）。偶数次の頂点の合計は偶数。\nよって奇数次の頂点の合計も偶数でなければならない。\n奇数を奇数個足すと奇数になるので、奇数次の頂点は偶数個です。',
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
        '・次数 deg(v) は頂点に接続する辺の数\n・握手定理：Σdeg(v) = 2|E|\n・奇数次の頂点は必ず偶数個\n\nこの定理は一見当たり前に見えますが、グラフの存在可能性を判定する強力なツールです。\n\n次は、グラフの中の道 ── パスとサイクルを学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'degree-handshake-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
