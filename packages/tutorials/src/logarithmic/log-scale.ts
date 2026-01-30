import { Tutorial } from '../types';

export const logScaleTutorial: Tutorial = {
  id: 'log-scale',
  title: '対数スケール',
  description: '対数スケールが広い範囲のデータを扱える理由を理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '1から1000000を1つの軸に',
      content:
        '線形スケールでは1と1000000を同じグラフに表示するのは困難。しかし対数スケールなら log₁₀(1)=0 から log₁₀(1000000)=6 まで、わずか6目盛で表現できます。',
      customScene: 'log-scale-animation',
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
        '線形スケールと対数スケールを切り替えて、データの見え方がどう変わるか体験してください。',
      customScene: 'log-scale-interactive',
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
      title: '等間隔 = 等倍率',
      content:
        '対数スケールでは、目盛の等間隔が「等倍率」を意味します。1→10→100→1000 はそれぞれ10倍で、対数スケール上では等間隔に並びます。',
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
      title: 'デシベル',
      content:
        '音の大きさを表すデシベル(dB)は対数スケールの代表例。10dB増えると音のエネルギーは10倍。人間の聴覚自体が対数的に感じるためこのスケールが自然です。',
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
        '対数スケールで 1, 10, 100, 1000 は等間隔に並びます。では 50 はどこに位置する？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '対数スケールで 50 は 10 と 100 の間のどこに位置する？',
        options: [
          { id: 'a', label: 'ちょうど真ん中', correct: false },
          { id: 'b', label: '真ん中より100寄り', correct: true },
          { id: 'c', label: '真ん中より10寄り', correct: false },
          { id: 'd', label: '100のすぐ隣', correct: false },
        ],
        explanation:
          'log₁₀(50) ≈ 1.699。10(=1.0)と100(=2.0)の間で、1.699は真ん中(1.5)より100寄りです。',
      },
    },
    {
      id: 'alternate',
      title: 'いつ対数スケールを使うか',
      content:
        '対数スケールが有効な場面:\n\n1. データの範囲が数桁にまたがるとき\n2. 倍率（成長率）に注目したいとき\n3. 指数関数的なデータを直線に変換したいとき\n\n逆に、データの範囲が狭い場合は線形スケールの方が直感的です。',
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
        '対数スケールは「等間隔 = 等倍率」。広い範囲のデータを扱いやすくし、指数的な成長を直線に変えます。\n\nスケールを切り替えてデータの見え方を比べてみてください。',
      customScene: 'log-scale-summary',
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
