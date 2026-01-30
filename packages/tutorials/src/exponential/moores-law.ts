import { Tutorial } from '../types';

export const mooresLawTutorial: Tutorial = {
  id: 'moores-law',
  title: '【実践】ムーアの法則',
  description: '半導体の集積度が指数的に増加してきた歴史を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: 'スマホの中の100億個',
      content:
        '1971年のIntel 4004は2,300個のトランジスタ。2020年のApple M1は160億個。50年で約700万倍。約2年で2倍のペースで増え続けました。この驚異的な指数的成長を「ムーアの法則」と呼びます。',
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
      title: 'トランジスタ数の推移を見よう',
      content:
        '年代ごとのトランジスタ数のグラフを対数スケールと線形スケールで切り替えて観察しましょう。対数スケールではほぼ直線に見えることに注目してください。',
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
      title: 'ムーアの法則の数式',
      content:
        'N(t) = N₀ · 2^(t/T)\n\n• T ≈ 2年（倍増期間）\n• N₀: 基準年のトランジスタ数\n\n50年間で：2^(50/2) = 2²⁵ ≈ 3,355万倍\n\n実際のデータもおおむねこの予測に沿っています。対数グラフにプロットすると驚くほど直線的です。',
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
      title: 'ムーアの法則の結果',
      content:
        'この指数的成長がもたらしたもの：\n\n• コンピュータの小型化：部屋サイズ→ポケットサイズ\n• 価格低下：同じ性能が年々安く\n• スマートフォンの実現\n• AI・機械学習の発展\n• クラウドコンピューティング\n\n技術の指数的進歩が社会を根本から変えました。',
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
      title: '考えてみよう',
      content: '2年で2倍のペースが続くと、10年後にはトランジスタ数は何倍に？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '2年で2倍が10年続くと？',
        options: [
          { id: 'a', label: '10倍', correct: false },
          { id: 'b', label: '16倍', correct: false },
          { id: 'c', label: '32倍', correct: true },
          { id: 'd', label: '64倍', correct: false },
        ],
        explanation:
          '10年 ÷ 2年 = 5回の倍増。2⁵ = 32倍。約30倍のトランジスタが同じ面積に収まるようになります。',
      },
    },
    {
      id: 'alternate',
      title: 'ムーアの法則の限界',
      content:
        'トランジスタが原子のサイズに近づくと、物理的限界に直面します。量子効果、発熱、製造コストの増大。現在は従来のペースが鈍化しつつあります。しかし新しい技術（3D積層、量子コンピュータ等）が次の指数的成長を生む可能性もあります。',
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
        'ムーアの法則：\n• 約2年でトランジスタ数が2倍\n• 50年で約700万倍の指数的成長\n• 対数グラフで直線 = 指数的成長の証拠\n• 社会を根本的に変えた\n• 物理的限界に近づきつつある\n\n技術進歩の指数的成長の最も有名な例です。',
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
