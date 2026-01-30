import { Tutorial } from '../types';

export const maxFlowTutorial: Tutorial = {
  id: 'max-flow',
  title: '【実践】最大フロー',
  description: 'ネットワークフロー理論と最大流最小カット定理を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '水道管ネットワーク',
      content:
        '水源から各家庭へ水を届けるパイプのネットワークがあります。\n\n各パイプには容量（1秒間に流せる最大水量）があります。\n\n水源からシンク（最終地点）へ、最大でどれだけの水を流せるでしょうか？\n\nこれが「最大フロー問題」です。',
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
      id: 'flow-def',
      title: 'フローの定義',
      content:
        'ネットワークフローの3つの条件：\n\n1. 容量制約：各辺のフロー ≤ 容量\n2. フロー保存：中間頂点で入る量 = 出る量\n3. 非負：フロー ≥ 0\n\nフローの値 = 源泉（ソース）から出る総フロー = シンクに入る総フロー',
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
      id: 'ford-fulkerson',
      title: 'フォード・ファルカーソン法',
      content:
        '最大フローを求めるアルゴリズム：\n\n1. フローを0で初期化\n2. 増加パス（ソースからシンクへの余裕のあるパス）を見つける\n3. そのパスに沿ってフローを増やす\n4. 増加パスがなくなるまで繰り返す\n\n残余グラフ上でBFSを使う方法をエドモンズ・カープ法と呼び、O(VE²)で動作します。',
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
      id: 'max-flow-min-cut',
      title: '最大流最小カット定理',
      content:
        '最大流最小カット定理：\n\n最大フロー = 最小カットの容量\n\nカット：ソースとシンクを分離する辺の集合\nカットの容量：カットされた辺の容量の合計\n\nこの美しい双対性は、ネットワークのボトルネックが最大フローを決めることを意味します。',
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
      content: '最大フローの概念を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ネットワークのフロー保存則が適用されないのはどの頂点？',
        options: [
          { id: 'a', label: '中間頂点', correct: false },
          { id: 'b', label: '次数が最大の頂点', correct: false },
          { id: 'c', label: 'ソースとシンク', correct: true },
          { id: 'd', label: '次数が偶数の頂点', correct: false },
        ],
        explanation:
          '正解はソースとシンクです。ソースはフローを生み出し、シンクはフローを吸収します。中間頂点では入る量=出る量が成り立ちます。',
      },
    },
    {
      id: 'applications',
      title: 'フローの応用',
      content:
        '最大フローは多くの問題に帰着できます：\n\n・二部グラフの最大マッチング\n・辺連結度の計算\n・野球のプレーオフ脱落判定\n・画像セグメンテーション\n\n特に二部マッチングへの帰着は重要で、ソースから一方の頂点群に容量1の辺を張り、\nもう一方からシンクにも容量1の辺を張ります。',
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
        '・最大フロー問題：ソースからシンクへの最大流量\n・フォード・ファルカーソン法：増加パスを繰り返し探索\n・最大流 = 最小カット（双対性）\n・二部マッチングなどに広く応用\n\nフロー理論はオペレーションズリサーチの中核です。',
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
