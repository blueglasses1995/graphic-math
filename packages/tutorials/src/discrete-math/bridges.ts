import { Tutorial } from '../types';

export const bridgesTutorial: Tutorial = {
  id: 'bridges',
  title: 'ケーニヒスベルクの橋',
  description: '18世紀の有名な橋の問題から、グラフ理論の誕生を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '橋を渡ってみよう',
      content:
        '1736年、プロイセンのケーニヒスベルクという街に7つの橋がありました。\n\n「すべての橋をちょうど1回ずつ渡って元に戻ることはできるか？」\n\nこの素朴な疑問が、数学の新しい分野 ── グラフ理論 ── を生み出しました。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bridges-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'euler-idea',
      title: 'オイラーの着眼点',
      content:
        '数学者オイラーは、島や陸地を「点」、橋を「線」として抽象化しました。\n\nこれがグラフの考え方です。\n\n地図の詳細は関係なく、「何と何がつながっているか」だけが重要なのです。',
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
      id: 'graph-model',
      title: 'グラフへの変換',
      content:
        'ケーニヒスベルクの4つの陸地を4つの頂点、7つの橋を7つの辺として表します。\n\n各頂点の次数（つながっている辺の数）は 3, 3, 3, 5 です。\n\nすべてが奇数であることに注目してください。',
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
      id: 'euler-circuit',
      title: 'オイラー回路の条件',
      content:
        'オイラーは証明しました：\n\nすべての辺をちょうど1回通って元に戻れる（オイラー回路）ための必要十分条件は、\n「すべての頂点の次数が偶数」であることです。\n\nケーニヒスベルクでは全頂点が奇数次なので、不可能だったのです。',
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
      content: 'オイラー回路が存在するために必要な条件はどれでしょう？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'オイラー回路が存在する条件は？',
        options: [
          { id: 'a', label: 'すべての頂点の次数が奇数', correct: false },
          { id: 'b', label: 'すべての頂点の次数が偶数', correct: true },
          { id: 'c', label: '頂点の数が偶数', correct: false },
          { id: 'd', label: '辺の数が偶数', correct: false },
        ],
        explanation:
          '正解は「すべての頂点の次数が偶数」です。各頂点に入る回数と出る回数が等しくなる必要があるからです。',
      },
    },
    {
      id: 'euler-path',
      title: 'オイラー路',
      content:
        '元に戻らなくてもよい場合（オイラー路）の条件は、\n「奇数次の頂点がちょうど0個または2個」です。\n\n2個の場合、その2頂点が始点と終点になります。\n\nケーニヒスベルクでは奇数次の頂点が4個あるため、オイラー路も存在しません。',
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
        'ケーニヒスベルクの橋の問題は「不可能」であることが証明されました。\n\nこの問題の重要性は、答えそのものよりも「なぜ不可能か」を数学的に証明したことにあります。\n\n現実の問題を抽象化し、本質だけを取り出す ── これがグラフ理論の力です。\n\n次は、グラフの基本的な概念を学びましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bridges-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
