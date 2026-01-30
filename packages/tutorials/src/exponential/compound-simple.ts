import { Tutorial } from '../types';

export const compoundSimpleTutorial: Tutorial = {
  id: 'compound-simple',
  title: '複利と単利',
  description: '単利と複利の違い、そして連続複利との関係を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '利息に利息がつく魔法',
      content:
        '100万円を年利5%で30年間運用すると、単利では250万円、複利では432万円。同じ利率でもこんなに差がつくのはなぜ？単利と複利の成長をアニメーションで比較しましょう。',
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
      title: '利率と期間を変えてみよう',
      content:
        '利率と運用期間を変えて、単利と複利の差がどう広がるか観察しましょう。期間が長いほど複利の優位が際立ちます。',
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
      title: '単利と複利の公式',
      content:
        '単利：A = P(1 + rt)（線形成長）\n複利：A = P(1 + r/n)ⁿᵗ（指数的成長）\n\n• P: 元本\n• r: 年利率\n• t: 年数\n• n: 年間の複利回数\n\n単利は元本にだけ利息がつく。複利は利息にも利息がつく。この違いが長期的に大きな差を生みます。',
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
      title: '連続複利',
      content:
        '複利の回数nを無限に増やすと：\nA = P · lim(n→∞)(1 + r/n)ⁿᵗ = P · eʳᵗ\n\n連続複利 = 指数関数！\n\n例：100万円を年利5%で10年、連続複利で運用\nA = 100 × e⁰·⁵ ≈ 100 × 1.649 ≈ 164.9万円\n\neが自然に登場する理由がここにもあります。',
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
      content: '100万円を年利10%の複利で運用。約何年で200万円を超える？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '年利10%複利で元本が2倍になるのは？',
        options: [
          { id: 'a', label: '約5年', correct: false },
          { id: 'b', label: '約7年', correct: true },
          { id: 'c', label: '約10年', correct: false },
          { id: 'd', label: '約15年', correct: false },
        ],
        explanation:
          '72の法則：72÷10 ≈ 7.2年。正確にはln2/ln1.1 ≈ 7.27年。約7年で2倍になります。',
      },
    },
    {
      id: 'alternate',
      title: 'アインシュタインの言葉',
      content:
        '「複利は人類最大の発明」とアインシュタインが言ったとされています（真偽は不明ですが）。複利は時間を味方につける仕組みです。早く始めるほど効果が大きい。20歳で始めるか40歳で始めるかで、65歳時点の資産は数倍違います。',
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
        '複利と単利：\n• 単利 A = P(1+rt) → 線形成長\n• 複利 A = P(1+r/n)ⁿᵗ → 指数的成長\n• 連続複利 A = Peʳᵗ → 指数関数そのもの\n• 長期間ほど複利の効果が顕著\n• 72の法則で倍増時間を概算\n\n時間は最大の味方です。',
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
