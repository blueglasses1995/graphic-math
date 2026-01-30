import { Tutorial } from '../types';

export const radianTutorial: Tutorial = {
  id: 'radian',
  title: 'ラジアンとは',
  description: '度数法とラジアンの関係を視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '360°じゃない角度の測り方',
      content:
        '角度は「度」で測るのが普通ですが、数学では「ラジアン」を使います。\n\nラジアンとは「弧の長さ ÷ 半径」。半径1の円で弧の長さがそのまま角度になる、自然な単位です。\n\n1周 = 2π ラジアン ≈ 6.28 ラジアン。なぜ360ではなく2πなのか、見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#4fc3f7', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'radian-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '弧の長さを体験',
      content:
        '角度を変えて、弧の長さがどう変わるか確認しましょう。\n\n半径1の円では、弧の長さ = ラジアンの値。90° = π/2 ≈ 1.57 の弧の長さを確認してみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'radian-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'angle-slider',
        initialAngle: 0,
      },
    },
    {
      id: 'example-1',
      title: '代表的な変換',
      content:
        '度 → ラジアン: × π/180\nラジアン → 度: × 180/π\n\n覚えておきたい対応:\n・360° = 2π\n・180° = π\n・90° = π/2\n・60° = π/3\n・45° = π/4\n・30° = π/6\n\n例: 120° = 120 × π/180 = 2π/3',
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
      title: 'なぜラジアンが便利？',
      content:
        'ラジアンを使うと公式がシンプルになります。\n\n弧の長さ: L = rθ（度ならL = πrθ/180）\n扇形の面積: S = r²θ/2（度ならS = πr²θ/360）\n\n微分でも:\n(sinθ)\' = cosθ （ラジアンのとき）\n\n度を使うとπ/180が余計に付きます。数学ではラジアンが自然な単位なのです。',
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
        '度とラジアンの変換をやってみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '150°は何ラジアン？',
        options: [
          { id: 'a', label: '3π/4', correct: false },
          { id: 'b', label: '2π/3', correct: false },
          { id: 'c', label: '5π/6', correct: true },
          { id: 'd', label: '5π/4', correct: false },
        ],
        explanation:
          '150° × π/180° = 150π/180 = 5π/6\n\n150 = 5 × 30 なので、30° = π/6 の5倍で 5π/6 です。',
      },
    },
    {
      id: 'alternate',
      title: '1ラジアンを感じる',
      content:
        '1ラジアン ≈ 57.3°。これは半径と同じ長さの弧に対応する角度です。\n\n円の半径をヒモでとり、そのヒモを弧に沿って置いたときの角度が1ラジアン。\n\n1周が2π ≈ 6.28 ラジアンということは、半径の長さのヒモが約6.28本で一周するということです。',
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
        'ラジアン = 弧の長さ ÷ 半径\n\n・1周 = 2π rad = 360°\n・π rad = 180°\n・変換: 度 × π/180 = ラジアン\n\nラジアンを使うと公式がシンプルになり、微分積分でも扱いやすくなります。数学の世界では角度はラジアンが標準です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'radian-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
