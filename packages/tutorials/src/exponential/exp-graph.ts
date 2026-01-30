import { Tutorial } from '../types';

export const expGraphTutorial: Tutorial = {
  id: 'exp-graph',
  title: '指数関数のグラフ',
  description: '指数関数のグラフの特徴と変換を視覚的に学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: 'グラフが描く曲線',
      content:
        'y = 2ˣ のグラフが左から右へ描かれていきます。左側はx軸にぴったり寄り添い、右側は急激に立ち上がる。この特徴的な形をアニメーションで確認しましょう。',
      customScene: "exp-graph-animation",
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
      title: 'グラフを変形させてみよう',
      content:
        'y = a·bˣ + c のパラメータを変えて、グラフがどう変形するか試してみましょう。aは上下の伸縮、bは底、cは上下の移動です。',
      customScene: "exp-graph-interactive",
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
      title: 'グラフの基本的な特徴',
      content:
        'y = aˣ（a>1）のグラフの特徴：\n\n• 必ず(0, 1)を通る\n• x→-∞ でy→0（x軸が漸近線）\n• x→+∞ でy→+∞（急激に増加）\n• 常にy>0（x軸より上）\n• 常に増加（右上がり）\n\nこの形は「指数カーブ」と呼ばれます。',
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
      title: 'グラフの変換',
      content:
        'y = 2ˣ を基本として：\n\n• y = 2ˣ⁺² → 左に2移動\n• y = 2ˣ - 3 → 下に3移動\n• y = 3·2ˣ → 縦に3倍\n• y = -2ˣ → x軸で反転\n• y = 2⁻ˣ → y軸で反転\n\n移動・伸縮・反転で多様なグラフが作れます。',
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
      content: 'y = 2ˣ + 3 のグラフの漸近線はどこでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = 2ˣ + 3 の漸近線は？',
        options: [
          { id: 'a', label: 'y = 0', correct: false },
          { id: 'b', label: 'y = 3', correct: true },
          { id: 'c', label: 'x = 3', correct: false },
          { id: 'd', label: 'y = -3', correct: false },
        ],
        explanation:
          'y = 2ˣ の漸近線は y=0 です。+3 で上に3移動するので、漸近線も y=3 に移動します。x→-∞ のとき 2ˣ→0 なので y→3。',
      },
    },
    {
      id: 'alternate',
      title: '線形 vs 指数',
      content:
        '直線（y=2x）と指数（y=2ˣ）を比べてみましょう。最初は直線のほうが大きいこともありますが、やがて指数が圧倒的に追い抜きます。x=10で直線は20、指数は1024。x=20で直線は40、指数は100万超。これが「指数的成長」の本質です。',
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
        '指数関数のグラフ：\n• (0,1)を通り、常にy>0\n• x軸が漸近線\n• 底>1なら増加、0<底<1なら減少\n• 平行移動・伸縮で変形可能\n• どんな直線もいずれ追い抜く急成長\n\nグラフの形をしっかり覚えておきましょう。',
      customScene: "exp-graph-summary",
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
