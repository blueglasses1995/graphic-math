import { Tutorial } from '../types';

export const zipfTutorial: Tutorial = {
  id: 'zipf',
  title: '【実践】ジップの法則',
  description: '単語の出現頻度が順位の逆数に比例するジップの法則と対数の関係を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '2番目は半分、3番目は1/3',
      content:
        '英語で最も多い単語は "the"。2番目の "of" は "the" の約半分の頻度。3番目の "and" は約1/3。順位 r の単語の頻度は 1/r に比例します。',
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
        '順位と頻度の関係をグラフで確認してください。両対数グラフにすると直線に見えるのがジップの法則の特徴です。',
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
      title: 'ジップの法則の数式',
      content:
        'f(r) ∝ 1/r^α（α ≈ 1）。両辺に log をとると log(f) = -α × log(r) + C。両対数グラフで傾き -α の直線になります。',
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
      title: '都市の人口にも',
      content:
        '都市の人口ランキングもジップの法則に従います。最大都市の人口を P₁ とすると、r番目の都市の人口は約 P₁/r。東京、大阪、名古屋...の人口にも近似的に当てはまります。',
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
        'ジップの法則に従うデータを両対数グラフにプロットすると？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ジップの法則のデータは両対数グラフでどう見える？',
        options: [
          { id: 'a', label: '放物線', correct: false },
          { id: 'b', label: '傾き約-1の直線', correct: true },
          { id: 'c', label: '水平な直線', correct: false },
          { id: 'd', label: '指数曲線', correct: false },
        ],
        explanation:
          'f ∝ 1/r なので log(f) = -log(r) + C。両対数グラフで傾き -1 の直線です。',
      },
    },
    {
      id: 'alternate',
      title: 'べき乗則と対数',
      content:
        'ジップの法則はべき乗則の一種。べき乗則 y = Cx^α は両対数グラフで直線になります。\n\n自然界にはべき乗則に従う現象が多く、対数グラフがその発見に不可欠です。地震の頻度、SNSのフォロワー数、富の分布なども同様です。',
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
        'ジップの法則: 順位 r の要素の頻度は 1/r に比例。両対数グラフで傾き-1の直線になります。言語、都市、ウェブなど幅広い現象に現れる普遍的な法則です。\n\nデータを変えてジップの法則を確認してください。',
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
