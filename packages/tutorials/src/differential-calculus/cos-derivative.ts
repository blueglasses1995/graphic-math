import { Tutorial } from '../types';

export const cosDerivativeTutorial: Tutorial = {
  id: 'cos-derivative',
  title: 'cosの微分',
  description: 'cos(x) の導関数が -sin(x) になることを理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: 'cos の傾きにはマイナスが付く',
      content:
        'cos(x) のグラフは x=0 で最大値 1。ここから右下がりになるので、傾きは負。sin の微分では cos がそのまま出ましたが、cos の微分ではマイナスが付きます。',
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
        'x を動かして cos(x) の接線の傾きを追いかけてください。傾きのグラフは −sin(x) の形をしています。',
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
      title: '導出',
      content:
        '[cos(x+h)−cos(x)]/h を加法定理で展開すると cos(x)[cos(h)−1]/h − sin(x)·sin(h)/h。h→0 で (cos x)\' = −sin x。マイナスが付くのがポイントです。',
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
      title: '微分の循環',
      content:
        'sin → cos → −sin → −cos → sin → …。4回微分すると元に戻ります。この循環は三角関数の美しい性質で、波動方程式や電磁気学の基礎にもなっています。',
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
        'cos(x) を4回微分すると何になる？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'cos(x) を4回微分すると？',
        options: [
          { id: 'a', label: 'sin(x)', correct: false },
          { id: 'b', label: '-sin(x)', correct: false },
          { id: 'c', label: 'cos(x)', correct: true },
          { id: 'd', label: '-cos(x)', correct: false },
        ],
        explanation:
          'cos → -sin → -cos → sin → cos。4回で元に戻ります。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：なぜマイナス？',
      content:
        'cos はx=0で頂上。頂上から右へ行くと下がるので傾きは負。sin(0)=0（正しくはゼロから始まる）なので −sin(0)=0。x=0 では cos の傾きは確かにゼロ。マイナスは「cos が下り始める」ことを表しています。',
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
        '(cos x)\' = −sin x。sin の微分に比べてマイナスが付きます。三角関数の微分は4回で一周するサイクルを持ちます。\n\n次は指数関数 eˣ の微分です。微分しても変わらない不思議な関数を見てみましょう。',
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
