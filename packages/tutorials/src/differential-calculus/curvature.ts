import { Tutorial } from '../types';

export const curvatureTutorial: Tutorial = {
  id: 'curvature',
  title: '【実践】曲率と曲がり具合',
  description: '曲線の曲がり具合を数値化する「曲率」の概念を学ぶ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '曲がり具合を測る',
      content:
        '直線は曲がっていない（曲率0）。小さな円ほど急に曲がっている（曲率が大きい）。曲線の各点で「どれだけ曲がっているか」を数値にしたものが曲率です。',
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
        '曲線上の点を動かして、その点にフィットする円（曲率円）の大きさを観察してください。曲がりが急な場所ほど円が小さくなります。',
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
      title: '曲率の公式',
      content:
        'y = f(x) の曲率 κ = |f\'\'(x)| / (1+f\'(x)²)^(3/2)。分子は二次導関数の絶対値（曲がりの強さ）、分母は傾きの影響を補正する係数。曲率半径 R = 1/κ は曲率円の半径です。',
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
      title: '放物線の曲率',
      content:
        'y = x² で f\'=2x、f\'\'=2。κ = 2/(1+4x²)^(3/2)。x=0 で κ=2（最も曲がっている）、|x| が大きくなると κ→0（直線に近づく）。放物線は頂点付近が最も急カーブです。',
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
        '半径 r の円の曲率はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '半径 r の円の曲率 κ は？',
        options: [
          { id: 'a', label: 'r', correct: false },
          { id: 'b', label: '1/r', correct: true },
          { id: 'c', label: '2πr', correct: false },
          { id: 'd', label: 'r²', correct: false },
        ],
        explanation:
          '円の曲率は一定で κ = 1/r。小さい円ほど曲率が大きい。曲率半径 R = r で自分自身の半径です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：道路設計',
      content:
        '高速道路のカーブは「クロソイド曲線」で設計されます。直線（曲率0）からカーブ（曲率1/R）へ急に変わると危険なので、曲率が徐々に変化する曲線を使います。曲率は安全設計にも直結しています。',
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
        '曲率 κ = |f\'\'|/(1+f\'²)^(3/2)。曲線の曲がり具合を数値化する。曲率半径 R = 1/κ。微分を2回使って「形の情報」を引き出す応用です。\n\n次は「偏微分」。複数変数の関数を微分します。',
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
