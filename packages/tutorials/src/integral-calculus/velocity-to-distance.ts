import { Tutorial } from '../types';

export const velocityToDistanceTutorial: Tutorial = {
  id: 'velocity-to-distance',
  title: '【実践】速度から距離へ',
  description: '速度関数を積分して移動距離を求める物理応用',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '速度計から距離を知る',
      content:
        '車の速度計が v(t) を表示しています。\n\n速度のグラフの下の面積が「移動距離」になります。\n\nこれは ∫₀ᵗ v(τ) dτ そのものです。\n\nアニメーションで速度から距離が積み上がる様子を見てみましょう。',
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
        '時刻 t を動かして、速度のグラフの面積と距離の関係を確かめてみましょう。\n\n速度が大きい区間では距離の増え方が速く、速度が小さいと遅くなります。',
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
      title: '等速運動',
      content:
        'v(t) = 60 km/h（一定）で 2 時間走ると：\n\n距離 = ∫₀² 60 dt = 60 × 2 = 120 km\n\n速度 × 時間 = 距離。これは長方形の面積です。\n\n等速なら積分するまでもありませんが、速度が変わる場合は積分が必要です。',
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
      title: '等加速度運動',
      content:
        'v(t) = 10t m/s（加速度 10 m/s²）で 0 から 5 秒間：\n\n距離 = ∫₀⁵ 10t dt = [5t²]₀⁵ = 125 m\n\nこれは物理の公式 s = (1/2)at² = (1/2)(10)(25) = 125 m と一致！\n\n物理の運動方程式は、実は積分の結果なのです。',
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
        'v(t) = 3t² m/s で 0 から 2 秒間の移動距離は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'v(t) = 3t² で t = 0 から 2 までの距離は？',
        options: [
          { id: 'a', label: '6 m', correct: false },
          { id: 'b', label: '8 m', correct: true },
          { id: 'c', label: '12 m', correct: false },
          { id: 'd', label: '4 m', correct: false },
        ],
        explanation:
          '正解は 8 m です。\n\n∫₀² 3t² dt = [t³]₀² = 8 - 0 = 8 m',
      },
    },
    {
      id: 'alternate',
      title: '変位と総移動距離',
      content:
        '速度が負（逆方向）になることもあります。\n\n変位（正味の移動）= ∫₀ᵀ v(t) dt（符号付き面積）\n総移動距離 = ∫₀ᵀ |v(t)| dt（絶対面積）\n\n例：前に 10m 進んで後ろに 3m 戻ったら、変位 = 7m、総距離 = 13m。\n\n「どちらを求めるか」で積分の仕方が変わります。',
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
        '速度の積分 = 距離（変位）。これが積分の最も基本的な物理応用です。\n\n加速度を積分すれば速度、速度を積分すれば位置。\n\n微分と積分は物理のあらゆる場面で使われています。\n\nグラフを操作して、速度と距離の関係を体感してみてください。',
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
