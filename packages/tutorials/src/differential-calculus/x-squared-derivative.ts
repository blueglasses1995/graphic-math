import { Tutorial } from '../types';

export const xSquaredDerivativeTutorial: Tutorial = {
  id: 'x-squared-derivative',
  title: 'x²の微分',
  description: 'x² を定義に沿って微分し、導関数 2x を導く',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '放物線の傾きを追え',
      content:
        'y = x² のグラフ上を接線が滑っていきます。左側では傾きがマイナス、原点でゼロ、右側ではプラス。この傾きの変化を式で表すとどうなるでしょう？',
      customScene: 'x-squared-derivative-animation',
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
        'x の位置を動かして、接線の傾きを確認してください。x=1 で傾き 2、x=2 で傾き 4、x=−1 で傾き −2。何か法則がありそうですね。',
      customScene: 'x-squared-derivative-interactive',
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
      title: '定義から計算',
      content:
        'f(x) = x² の導関数を求めます。\n[f(x+h)−f(x)]/h = [(x+h)²−x²]/h = [x²+2xh+h²−x²]/h = [2xh+h²]/h = 2x+h。h→0 で f\'(x) = 2x。',
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
      title: '具体的な値で確認',
      content:
        'f\'(x) = 2x なので、x=3 で傾き 6、x=−2 で傾き −4。グラフを見ると確かに x=3 では急な右上がり、x=−2 では左下がりです。導関数は傾きの「レシピ」です。',
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
        'y = x² の x=−3 での接線の傾きは？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = x² の x=−3 における微分係数は？',
        options: [
          { id: 'a', label: '−6', correct: true },
          { id: 'b', label: '6', correct: false },
          { id: 'c', label: '9', correct: false },
          { id: 'd', label: '−9', correct: false },
        ],
        explanation:
          'f\'(x) = 2x に x=−3 を代入して 2×(−3) = −6。マイナスは左下がりを意味します。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：面積との関係',
      content:
        'x² を微分すると 2x、2x を積分すると x²。微分と積分は逆の操作です。x² の「傾きの変化」を見ているのが微分、「面積の蓄積」を見ているのが積分。表裏一体の関係です。',
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
        '(x²)\' = 2x。べき乗を前に出して、指数を1下げる。これが「べきの微分」の最初の例です。\n\n次は x³ を微分して、パターンをさらに確認しましょう。',
      customScene: 'x-squared-derivative-summary',
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
