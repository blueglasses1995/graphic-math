import { Tutorial } from '../types';

export const ruleOf72Tutorial: Tutorial = {
  id: 'rule-of-72',
  title: '【実践】72の法則',
  description: '暗算で倍増時間を求める便利な法則とその数学的背景を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '暗算で倍増時間を求める',
      content:
        '「年利6%なら何年で2倍？」→「72÷6 = 12年」。たったこれだけ！金融の世界で広く使われるこの便利な法則は、指数関数の性質から生まれています。その仕組みを見てみましょう。',
      customScene: "rule-of-72-animation",
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
      title: '72の法則の精度を確認しよう',
      content:
        '利率を変えて、72の法則による概算と正確な計算値を比較しましょう。どの利率で精度が高いか確認してください。',
      customScene: "rule-of-72-interactive",
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
      title: 'なぜ72なのか',
      content:
        '正確な倍増時間：T = ln2/r ≈ 0.6931/r\n\nパーセント表記（R = 100r）では：\nT = 69.31/R\n\n69.31 → 72 に丸める理由：\n• 72は多くの数で割り切れる（2,3,4,6,8,9,12...）\n• 暗算しやすい\n• 複利の離散性を考慮するとむしろ72が正確',
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
      title: '72の法則の実用例',
      content:
        '実用計算例：\n• 年利3%の定期預金 → 72÷3 = 24年で2倍\n• 年利8%の投資信託 → 72÷8 = 9年で2倍\n• 年率2%のインフレ → 72÷2 = 36年で物価2倍\n• GDP成長率7% → 72÷7 ≈ 10年で経済規模2倍\n\n3倍になる時間は？ → 114÷R（114の法則）',
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
      title: '使ってみよう',
      content: '年率4%のインフレが続くと、100円のパンは何年後に200円になる？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '年率4%のインフレで物価が2倍になるのは？',
        options: [
          { id: 'a', label: '約12年後', correct: false },
          { id: 'b', label: '約18年後', correct: true },
          { id: 'c', label: '約25年後', correct: false },
          { id: 'd', label: '約36年後', correct: false },
        ],
        explanation:
          '72÷4 = 18年。約18年でパンの値段が2倍になります。正確にはln2/0.04 ≈ 17.3年。72の法則は十分に実用的な精度です。',
      },
    },
    {
      id: 'alternate',
      title: '69の法則と70の法則',
      content:
        '連続複利には69の法則（ln2 ≈ 0.693 → 69.3/R）、離散複利には72の法則がより正確です。70の法則はその中間で使われることもあります。\n\n• 69の法則：連続複利向き\n• 70の法則：低金利で暗算しやすい\n• 72の法則：中程度の金利で最も正確、割り切れやすい',
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
        '72の法則：\n• 倍増時間 ≈ 72 ÷ 成長率(%)\n• ln2 ≈ 0.693 の近似\n• 72は約数が多く暗算に便利\n• 投資・インフレ・GDP等に幅広く適用\n• 指数関数の本質を暗算で活用できる便利ツール\n\n指数関数の実践的な応用の総仕上げです。',
      customScene: "rule-of-72-summary",
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
