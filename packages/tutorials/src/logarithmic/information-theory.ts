import { Tutorial } from '../types';

export const informationTheoryTutorial: Tutorial = {
  id: 'information-theory',
  title: '【実践】情報理論',
  description: 'シャノンの情報理論における対数の役割を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '情報量 = 驚きの大きさ',
      content:
        '確率 1/2 の事象が起きた → 情報量 log₂(2) = 1ビット。確率 1/1000 の事象 → log₂(1000) ≈ 10ビット。珍しいことほど情報量が大きい。',
      customScene: 'information-theory-animation',
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
        '確率を変えて情報量がどう変わるか観察してください。確率が低いほど情報量は大きくなります。',
      customScene: 'information-theory-interactive',
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
      title: '情報量の公式',
      content:
        '確率 p の事象の情報量: I = -log₂(p) = log₂(1/p)\n\np = 1（確実） → I = 0ビット（驚きなし）\np = 1/2 → I = 1ビット\np = 1/8 → I = 3ビット',
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
      title: 'データ圧縮と情報量',
      content:
        'エントロピー H はデータの圧縮限界を表します。H = -Σ p_i × log₂(p_i)。英語テキストのエントロピーは約1.5ビット/文字。理論上、1文字を1.5ビットまで圧縮できます。',
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
        '確率 1/16 の事象が起きた場合の情報量は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '確率 1/16 の事象の情報量は何ビット？',
        options: [
          { id: 'a', label: '2ビット', correct: false },
          { id: 'b', label: '4ビット', correct: true },
          { id: 'c', label: '8ビット', correct: false },
          { id: 'd', label: '16ビット', correct: false },
        ],
        explanation:
          'I = log₂(16) = 4ビット。4回のYes/No質問で16通りから特定できることに対応します。',
      },
    },
    {
      id: 'alternate',
      title: '通信路容量',
      content:
        'シャノンの通信路符号化定理: ノイズのある通信路でも、通信路容量 C 以下のレートなら誤りなく通信できます。\n\nC = B × log₂(1 + S/N)\n\nBは帯域幅、S/Nは信号対雑音比。ここでも対数が本質的な役割を果たしています。',
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
        '情報量 = -log₂(確率)。対数により、独立な事象の情報量が足し算になり、データ圧縮の限界や通信路容量が定量化できます。\n\n確率分布を変えてエントロピーの変化を確認してください。',
      customScene: 'information-theory-summary',
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
