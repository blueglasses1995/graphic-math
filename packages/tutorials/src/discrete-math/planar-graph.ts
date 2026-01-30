import { Tutorial } from '../types';

export const planarGraphTutorial: Tutorial = {
  id: 'planar-graph',
  title: '平面グラフ',
  description: '辺の交差なしに平面に描けるグラフとオイラーの公式を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '線を交差させずに描けるか？',
      content:
        '3軒の家と3つの施設（電気・ガス・水道）をすべてつなぎたい。\n\n配管を交差させずに引くことは可能でしょうか？\n\nこれは有名な「三軒の家問題」で、答えは「不可能」です。\n\nこのような問題を扱うのが平面グラフの理論です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'planar-graph-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '平面グラフの定義',
      content:
        '辺が交差しないように平面に描けるグラフを「平面グラフ」と呼びます。\n\n同じグラフでも描き方によって交差したりしなかったりします。\n\n「ある描き方で交差なしに描ける」ことが重要で、すべての描き方で交差しない必要はありません。',
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
      id: 'euler-formula',
      title: 'オイラーの公式',
      content:
        '連結平面グラフについてオイラーの公式が成り立ちます：\n\nV - E + F = 2\n\nV：頂点数、E：辺数、F：面の数（外側の無限面を含む）\n\n例：三角形は V=3, E=3, F=2（内側と外側）で 3-3+2=2。',
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
      id: 'edge-bound',
      title: '辺の数の上限',
      content:
        'オイラーの公式から導かれる重要な不等式：\n\n単純平面グラフ（V ≥ 3）では E ≤ 3V - 6\n\n完全グラフ K_5 は V=5, E=10 で、3×5-6=9 < 10 なので平面グラフではありません。\n\nこれで K_5 が平面に描けないことが証明できます。',
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
      content: 'オイラーの公式を使って考えてみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '連結平面グラフで V=6, E=10 のとき面の数Fは？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '5', correct: false },
          { id: 'c', label: '6', correct: true },
          { id: 'd', label: '8', correct: false },
        ],
        explanation:
          '正解は6です。V - E + F = 2 より F = 2 - V + E = 2 - 6 + 10 = 6 です。',
      },
    },
    {
      id: 'kuratowski',
      title: 'クラトフスキーの定理',
      content:
        'クラトフスキーの定理：グラフが平面グラフでない必要十分条件は、\nK_5 または K_{3,3} の細分を部分グラフとして含むことです。\n\n三軒の家問題は K_{3,3}（完全二部グラフ）そのものなので平面に描けません。\n\nこの美しい定理は1930年に証明されました。',
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
        '・平面グラフ：辺の交差なしに平面に描ける\n・オイラーの公式：V - E + F = 2\n・辺の上限：E ≤ 3V - 6\n・K_5 と K_{3,3} は平面グラフでない\n\n回路設計やネットワークレイアウトで平面性は重要な制約です。\n\n次は、二部グラフとマッチングを学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'planar-graph-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
