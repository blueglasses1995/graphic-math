import { Tutorial } from '../types';

export const doublingGameTutorial: Tutorial = {
  id: 'doubling-game',
  title: '倍々ゲーム',
  description: '1枚の紙を折り続けると何が起こるか？指数的成長の驚きを体感する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '紙を42回折ると月に届く？',
      content:
        '1枚の紙（厚さ0.1mm）を42回折ると、厚さは約44万kmになります。地球から月までの距離とほぼ同じ！アニメーションで折り重なっていく様子を見てみましょう。',
      customScene: "doubling-game-animation",
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '何回折れるか試してみよう',
      content:
        'スライダーで折る回数を変えてみましょう。1回折るごとに厚さが2倍になります。10回、20回、30回…どんどん増えていく速さを感じてください。',
      customScene: "doubling-game-interactive",
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '倍々の仕組み',
      content:
        '1回折ると2枚分の厚さ。2回で4枚分。3回で8枚分。n回折ると2ⁿ枚分になります。\n\n1→2→4→8→16→32→64→128→256→512→1024\n\n10回折っただけで1024枚分。これが「指数的成長」の威力です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'チェス盤の米粒',
      content:
        '有名な伝説：チェス盤の最初のマスに米粒1つ、次のマスに2つ、その次に4つ…と置いていくと、64マス目には2⁶³ ≈ 9.2×10¹⁸粒。全マスの合計は2⁶⁴-1 ≈ 1.8×10¹⁹粒。地球上の全ての砂粒より多い量です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content: '2を20回掛けると（2²⁰）、およそいくつになるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '2²⁰はおよそいくつ？',
        options: [
          { id: 'a', label: '約2万', correct: false },
          { id: 'b', label: '約10万', correct: false },
          { id: 'c', label: '約100万', correct: true },
          { id: 'd', label: '約1000万', correct: false },
        ],
        explanation:
          '2¹⁰ = 1,024 ≈ 1,000。したがって 2²⁰ = (2¹⁰)² ≈ 1,000² = 1,000,000（約100万）。正確には1,048,576です。',
      },
    },
    {
      id: 'alternate',
      title: '日常の倍々',
      content:
        '倍々ゲームは日常にもあります。SNSでの情報拡散（1人が2人に伝え、2人が4人に…）、ウイルスの感染拡大、投資の複利効果。最初はゆっくりに見えても、ある時点から爆発的に増える。これが指数関数の本質です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
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
        '倍々ゲームのポイント：\n• n回繰り返すと2ⁿ倍になる\n• 最初は緩やかでも、やがて爆発的に増える\n• 紙を42回折ると月に届く距離になる\n• この「倍々の数学」が指数関数の基本\n\nこれから指数関数の世界を詳しく探検していきましょう！',
      customScene: "doubling-game-summary",
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
