import { Tutorial } from '../types';

export const linearApproximationTutorial: Tutorial = {
  id: 'linear-approximation',
  title: '近似の力',
  description: '微分を使った一次近似（線形近似）の考え方と応用',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '曲線を直線で置き換える',
      content:
        'ある点の近くでは、曲線は接線とほぼ一致します。この性質を使うと、複雑な関数の値を簡単な掛け算と足し算で近似できます。電卓がなかった時代の必須テクニックです。',
      customScene: 'linear-approximation-animation',
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
        'ズームレベルを変えて、曲線と接線がどの範囲で一致するか確認してください。拡大するほど、曲線は直線に近づきます。',
      customScene: 'linear-approximation-interactive',
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
      title: '線形近似の公式',
      content:
        'f(a+Δx) ≈ f(a) + f\'(a)·Δx。「現在地の値 + 傾き×ずれ」。これが一次近似（線形近似）です。Δx が小さいほど精度が高くなります。',
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
      title: '√4.1 を近似する',
      content:
        'f(x) = √x、a = 4。f(4)=2、f\'(x) = 1/(2√x) なので f\'(4) = 1/4。√4.1 ≈ 2 + (1/4)·0.1 = 2.025。実際の値は 2.02485…。わずかな誤差で計算できました。',
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
        'sin(0.1) を線形近似するといくつ？（sin(0)=0、cos(0)=1 を使う）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(0.1) の線形近似値は？',
        options: [
          { id: 'a', label: '0.1', correct: true },
          { id: 'b', label: '0.01', correct: false },
          { id: 'c', label: '1', correct: false },
          { id: 'd', label: '0.05', correct: false },
        ],
        explanation:
          'sin(0+0.1) ≈ sin(0) + cos(0)·0.1 = 0 + 1·0.1 = 0.1。実際は 0.09983… で非常に近い値です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：微分の記法 dy ≈ f\'dx',
      content:
        'dy = f\'(x)·dx と書くと、「dx だけ x が変わったとき、y は約 dy だけ変わる」。これがライプニッツ記法 dy/dx の直感的意味。微小変化の比率です。',
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
        'f(a+Δx) ≈ f(a) + f\'(a)Δx。接線で曲線を近似する。これが微分の最も実用的な応用の1つです。\n\n次は「暗黙の微分」。陽に y = f(x) と書けない関数を微分する技法を学びます。',
      customScene: 'linear-approximation-summary',
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
