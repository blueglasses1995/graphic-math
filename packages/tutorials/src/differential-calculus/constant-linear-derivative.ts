import { Tutorial } from '../types';

export const constantLinearDerivativeTutorial: Tutorial = {
  id: 'constant-linear-derivative',
  title: '定数と直線の微分',
  description: '定数関数と一次関数の微分を理解する。最も単純なケース',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '変わらないものの傾き',
      content:
        'y = 5 のグラフは水平線。どこを見ても傾きはゼロ。変化しないものの変化率はゼロ。当たり前のようですが、これが微分の出発点です。',
      customScene: 'constant-linear-derivative-animation',
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
        '定数 c の値をスライダーで変えてみてください。y = c のグラフは上下に移動しますが、傾きは常にゼロ。位置が変わっても変化率は変わりません。',
      customScene: 'constant-linear-derivative-interactive',
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
      title: '定数の微分',
      content:
        'f(x) = c のとき、[f(x+h)−f(x)]/h = [c−c]/h = 0/h = 0。h→0 でも 0。よって (c)\' = 0。定数を微分するとゼロになります。',
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
      title: '一次関数の微分',
      content:
        'f(x) = ax + b のとき、[a(x+h)+b − (ax+b)]/h = ah/h = a。h→0 でも a。よって (ax+b)\' = a。直線の傾きはそのまま導関数。定数項 b は消えます。',
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
        'f(x) = 7x + 100 の導関数は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x) = 7x + 100 の f\'(x) は？',
        options: [
          { id: 'a', label: '7x', correct: false },
          { id: 'b', label: '100', correct: false },
          { id: 'c', label: '7', correct: true },
          { id: 'd', label: '107', correct: false },
        ],
        explanation:
          '一次関数の傾きは係数 a = 7。定数項 100 は微分するとゼロになり、f\'(x) = 7 です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：定数倍の法則',
      content:
        '定数 c をかけた関数の微分は (c·f(x))\' = c·f\'(x)。定数は微分の外に出せます。例えば (3x²)\' = 3·(x²)\' = 3·2x = 6x。これを「定数倍の法則」と呼びます。',
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
        '(c)\' = 0、(ax+b)\' = a、(c·f)\' = c·f\'。最もシンプルな微分のルールです。\n\nこれで定数・直線・べき乗の微分がわかりました。次は「和の微分」を学んで、もっと複雑な式を扱えるようにしましょう。',
      customScene: 'constant-linear-derivative-summary',
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
