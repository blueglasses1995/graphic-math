import { Tutorial } from '../types';

export const compoundCalculatorTutorial: Tutorial = {
  id: 'compound-calculator',
  title: '【実践】複利計算機',
  description: '実際の投資シナリオで複利計算を実践する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '100万円を30年間運用すると？',
      content:
        '100万円を年利5%で30年間複利運用すると432万円。毎月3万円を追加投資すると？約2,500万円に。積立の威力と複利の効果をアニメーションで見てみましょう。',
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
      title: '自分の投資をシミュレーション',
      content:
        '元本、年利、期間、毎月の積立額を入力して、将来の資産額を計算してみましょう。利率がわずか1%違うだけで長期的な差は大きくなります。',
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
      title: '積立投資の公式',
      content:
        '元本Pに毎月m円を積立、年利r、n年後の資産：\n\nA = P(1+r)ⁿ + m·12·((1+r)ⁿ-1)/r\n\n第1項：元本の成長\n第2項：積立分の成長（等比級数の和）\n\n例：P=0、m=3万、r=5%、n=30年\nA = 0 + 36万×(1.05³⁰-1)/0.05 ≈ 2,394万円\n\n元本0でも毎月の積立で大きく育ちます。',
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
      title: '早く始めるメリット',
      content:
        '月3万円を年利5%で積立：\n\n20歳から（45年間）：約5,700万円\n30歳から（35年間）：約3,250万円\n40歳から（25年間）：約1,720万円\n\n10年早く始めるだけで約2倍の差。投資額の差以上に複利の効果が大きいのです。「時間」が最大の味方です。',
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
      title: '計算してみよう',
      content: '100万円を年利7%の複利で運用。10年後はおよそいくら？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '100万円 × 1.07¹⁰ はおよそ？',
        options: [
          { id: 'a', label: '約150万円', correct: false },
          { id: 'b', label: '約170万円', correct: false },
          { id: 'c', label: '約197万円', correct: true },
          { id: 'd', label: '約250万円', correct: false },
        ],
        explanation:
          '1.07¹⁰ ≈ 1.967。約197万円です。72の法則で確認：72÷7≈10.3年で2倍。10年はほぼ倍増時間なので、約200万円に近い値になります。',
      },
    },
    {
      id: 'alternate',
      title: 'インフレの影響',
      content:
        '注意：複利で増えても、インフレで実質価値は目減りします。名目利回り5%でインフレ率2%なら、実質利回りは約3%。30年後の432万円の実質購買力は、現在の約238万円分。実質リターンで考えることが大切です。',
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
        '複利計算機：\n• 元本の成長：P(1+r)ⁿ\n• 積立の成長：m·((1+r)ⁿ-1)/r\n• 早く始めるほど複利の効果大\n• 10年の差が資産を2倍にする\n• インフレを考慮した実質リターンが重要\n\n指数関数の理解がお金の未来を変えます。',
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
