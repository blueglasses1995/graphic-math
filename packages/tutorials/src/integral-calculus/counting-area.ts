import { Tutorial } from '../types';

export const countingAreaTutorial: Tutorial = {
  id: 'counting-area',
  title: '面積を数える',
  description: '曲線の下の面積を「マス目を数える」ことで直感的に理解する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: 'マス目を数えよう',
      content:
        '画面にグラフと格子が表示されています。\n\n曲線の下に色がついた領域がありますね。\n\nこの面積を「マス目を数える」ことで求めてみましょう。\n\nこれが積分の最も原始的なアイデアです。',
      customScene: 'counting-area-animation',
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
      title: '触ってみよう',
      content:
        '曲線の下の領域をタッチして、マス目を数えてみてください。\n\n完全に含まれるマスと、一部だけのマスがありますね。\n\nどうやって「一部だけのマス」を扱えばよいでしょうか？',
      customScene: 'counting-area-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'y = 2 の場合',
      content:
        'まず最も簡単な例から。y = 2 という直線の下の面積を考えます。\n\nx = 0 から x = 3 までの長方形です。\n\n幅 3 × 高さ 2 = 面積 6。\n\nこれは「定数関数の積分」に対応します。マス目を数えるまでもなく、掛け算で求まりますね。',
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
      title: 'y = x の場合',
      content:
        '次に y = x の場合。x = 0 から x = 4 までの面積を考えます。\n\n三角形ができますね。底辺 4 × 高さ 4 ÷ 2 = 8。\n\nマス目で数えると、完全なマスと半分のマスを合わせて確かに 8 になります。\n\n曲線が直線なら幾何学で計算できます。では曲線が曲がっていたら？',
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
      content:
        'y = x² の曲線で、x = 0 から x = 1 までの面積はどれくらいでしょう？\n\nマス目を数えたり、直感で予測してみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = x² で x = 0 から x = 1 までの面積は？',
        options: [
          { id: 'a', label: '1/4', correct: false },
          { id: 'b', label: '1/3', correct: true },
          { id: 'c', label: '1/2', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          '正解は 1/3 です。\n\n正方形（面積1）の中に放物線が描かれ、その下の面積はちょうど 1/3 になります。\n\nこれを正確に求める方法が「積分」です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：累積する量',
      content:
        '面積を「左から右に少しずつ累積していく量」として考えることもできます。\n\nx が少し増えるたびに、細い短冊の面積が加わっていきます。\n\nこの「少しずつ足していく」という考え方が、積分の本質です。\n\n微分が「瞬間の変化率」なら、積分は「変化の累積」。この対比を覚えておいてください。',
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
        '曲線の下の面積を求めること ── これが積分の出発点です。\n\n直線なら幾何学で計算できますが、曲線では「マス目を数える」近似が必要になります。\n\n次の単元では、この近似を長方形で体系的に行う方法を学びます。\n\n自由に曲線を触って、面積の感覚をつかんでください。',
      customScene: 'counting-area-summary',
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
