import { Tutorial } from '../types';

export const cosSinRelationTutorial: Tutorial = {
  id: 'cos-sin-relation',
  title: 'cosとsinの関係',
  description: 'cosとsinが90°ずれた同じ波であることを視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '双子の波',
      content:
        'cosとsinは別の関数に見えますが、実は同じ波を90°ずらしただけ。\n\ncos(θ) = sin(θ + 90°)\nsin(θ) = cos(θ - 90°)\n\n2つの波を重ねてアニメーションで確認しましょう。',
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
      title: 'ずれを確認',
      content:
        'sin波とcos波を重ねて表示しています。\n\nsinが0のとき、cosは何ですか？ sinが最大のとき、cosは？\n\n常に90°（π/2）のずれがあることを確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
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
      title: '単位円での関係',
      content:
        '単位円上の点(cosθ, sinθ)を考えると:\n\ncosθ = x座標（横の影）\nsinθ = y座標（縦の影）\n\nθ = 0°: cos = 1, sin = 0\nθ = 90°: cos = 0, sin = 1\n\ncosが先に最大値をとり、sinが90°遅れて最大値をとる。これが「cosはsinの90°先行」の意味です。',
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
      title: '微分での関係',
      content:
        'sinを微分するとcosになります:\n(sinθ)\' = cosθ\n\ncosを微分すると-sinになります:\n(cosθ)\' = -sinθ\n\nさらに微分:\n(-sinθ)\' = -cosθ\n(-cosθ)\' = sinθ\n\n4回微分すると元に戻る！ sin → cos → -sin → -cos → sin\n\nこの循環こそ、sin/cosが同じ波の「ずれた版」である証拠です。',
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
        'cosとsinの関係を使いましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'cos(θ) を sinを使って表すと？',
        options: [
          { id: 'a', label: 'sin(θ + 180°)', correct: false },
          { id: 'b', label: 'sin(θ + 90°)', correct: true },
          { id: 'c', label: 'sin(θ - 180°)', correct: false },
          { id: 'd', label: '-sin(θ)', correct: false },
        ],
        explanation:
          'cos(θ) = sin(θ + 90°)\n\ncosはsinを90°先に進めたもの。例えば cos(0°) = 1 = sin(90°) ✓',
      },
    },
    {
      id: 'alternate',
      title: '複素数での統一',
      content:
        'オイラーの公式: e^(iθ) = cosθ + i·sinθ\n\ncosとsinは複素指数関数の実部と虚部。つまり同じ関数（e^iθ）の2つの側面です。\n\ncosθ = Re(e^iθ)\nsinθ = Im(e^iθ)\n\n別々に見えていたsin/cosが、複素数の世界では一つに統合されます。',
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
        'cosとsinは同じ波の90°ずれ:\n\n・cos(θ) = sin(θ + 90°)\n・微分: sin → cos → -sin → -cos → sin（4周期）\n・複素数: e^(iθ) = cosθ + i sinθ\n\n2つの関数は別物ではなく、同じ円運動の「横の影」と「縦の影」。視点が違うだけで本質は同じです。',
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
