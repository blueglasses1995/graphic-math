import { Tutorial } from '../types';

export const gradientVectorTutorial: Tutorial = {
  id: 'gradient-vector',
  title: '【実践】勾配ベクトル',
  description: '偏微分をまとめた勾配ベクトル ∇f の意味と応用を学ぶ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '最も急な上り坂の方向',
      content:
        '山の上で「最も急な上り坂の方向」を知りたいとき、勾配ベクトル（グラディエント）が答えを教えてくれます。各方向の偏微分をまとめた1本のベクトルです。',
      customScene: 'gradient-vector-animation',
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
        '曲面上の点を動かして、勾配ベクトルの向きと大きさを観察してください。等高線に対して垂直に、最も急な方向を指しています。',
      customScene: 'gradient-vector-interactive',
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
      title: '勾配の定義',
      content:
        '∇f = (∂f/∂x, ∂f/∂y)。偏微分を並べたベクトル。f(x,y) = x²+y² なら ∇f = (2x, 2y)。原点から外へ向かうベクトル場で、どこでも「山を登る方向」を指しています。',
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
      title: '勾配降下法',
      content:
        '機械学習では損失関数を最小化するために「勾配降下法」を使います。∇f の逆方向（−∇f）に少しずつ進む。x ← x − α∇f（α は学習率）。微分が人工知能の学習を支えています。',
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
        'f(x,y) = x² + 4y² の点 (1,1) での勾配ベクトルは？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∇f(1,1) for f = x²+4y² は？',
        options: [
          { id: 'a', label: '(2, 8)', correct: true },
          { id: 'b', label: '(1, 4)', correct: false },
          { id: 'c', label: '(2, 4)', correct: false },
          { id: 'd', label: '(1, 8)', correct: false },
        ],
        explanation:
          '∂f/∂x = 2x = 2、∂f/∂y = 8y = 8。∇f(1,1) = (2, 8)。y方向の方が急に変化していることがわかります。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：等高線との関係',
      content:
        '勾配ベクトルは等高線に対して常に垂直です。等高線を横切る最短経路の方向。|∇f| が大きいほど等高線が密で、傾斜が急。地形図での方位磁石のような役割です。',
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
        '勾配ベクトル ∇f = (∂f/∂x, ∂f/∂y) は「最も急な上り方向」を指す。大きさは傾斜の急さ。勾配降下法など現代の応用数学の基礎です。\n\nこれで微分の実践編は完了です。変化を捉える力を、ぜひ次のステップに活かしてください。',
      customScene: 'gradient-vector-summary',
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
