import { Tutorial } from '../types';

export const sinDerivativeTutorial: Tutorial = {
  id: 'sin-derivative',
  title: 'sinの微分',
  description: 'sin(x) の導関数が cos(x) になることを理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: 'sin の波の傾き',
      content:
        'sin(x) の波を思い浮かべてください。山のてっぺんでは傾きゼロ、右下がりの途中で傾きは負。この傾きを追いかけると…見覚えのある波が現れます。',
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
        'x を動かして sin(x) の接線の傾きを観察してください。傾きの値をプロットすると、cos のグラフが浮かび上がります。',
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
      title: 'なぜ cos になるのか',
      content:
        '[sin(x+h)−sin(x)]/h を加法定理で展開すると sin(x)[cos(h)−1]/h + cos(x)·sin(h)/h。h→0 で [cos(h)−1]/h→0、sin(h)/h→1。よって (sin x)\' = cos x。',
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
        'x=0: sin(0)=0、傾き=cos(0)=1 → 原点では右上がり45°。x=π/2: sin=1（頂上）、傾き=cos(π/2)=0 → 水平。x=π: sin=0、傾き=cos(π)=−1 → 右下がり。完璧に一致します。',
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
        'sin(x) を2回微分すると何になるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(sin x)\'\' = ?',
        options: [
          { id: 'a', label: 'sin x', correct: false },
          { id: 'b', label: '-sin x', correct: true },
          { id: 'c', label: 'cos x', correct: false },
          { id: 'd', label: '-cos x', correct: false },
        ],
        explanation:
          '(sin x)\' = cos x、(cos x)\' = -sin x。よって (sin x)\'\' = -sin x。2回微分で符号が反転します。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：位相のずれ',
      content:
        'cos(x) = sin(x + π/2)。つまり sin を微分すると、波が π/2 だけ左にずれます。微分は「波を先読みする」操作とも言えます。',
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
        '(sin x)\' = cos x。sin の傾きは cos。微分すると波が π/2 だけ位相がずれます。\n\n次は cos の微分を見ましょう。sin → cos → ? と続くパターンがあります。',
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
