import { Tutorial } from '../types';

export const poissonDistTutorial: Tutorial = {
  id: 'poisson-dist',
  title: 'ポアソン分布',
  description: '稀な事象の発生回数を記述するポアソン分布',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '稀な出来事は何回起こる？',
      content:
        '1時間にコンビニに来る客数、1ページの誤字数、1年間の交通事故数。これらの「一定期間に稀な事象が何回起こるか」を記述するのがポアソン分布です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'formula',
      title: 'ポアソン分布の式',
      content:
        'X ~ Poi(λ) のとき:\n\nP(X = k) = e⁻λ × λᵏ / k!\n\nλ: 単位時間あたりの平均発生回数\nk: 実際の発生回数（0, 1, 2, ...）\n\nλ = 3（1時間に平均3人来店）なら P(X=5) = e⁻³×3⁵/5! ≒ 0.101',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'mean-var',
      title: '期待値と分散',
      content:
        'ポアソン分布の特徴的な性質:\n\nE[X] = λ\nVar(X) = λ\n\n期待値と分散が等しい！データの平均と分散がほぼ等しければ、ポアソン分布が適切かもしれません。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'λを変えてみよう',
      content:
        'λを変えてポアソン分布の形を観察しましょう。λが大きくなると分布は右に移動し、正規分布に近い形になります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '1時間に平均2件の電話がかかる。1時間に電話が0件の確率は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'λ=2でP(X=0)に最も近いのは？',
        options: [
          { id: 'a', label: '約 0.05', correct: false },
          { id: 'b', label: '約 0.14', correct: true },
          { id: 'c', label: '約 0.27', correct: false },
          { id: 'd', label: '約 0.37', correct: false },
        ],
        explanation:
          'P(X=0) = e⁻² × 2⁰ / 0! = e⁻² ≒ 0.135。意外と高い確率です。',
      },
    },
    {
      id: 'binomial-approx',
      title: '二項分布との関係',
      content:
        'ポアソン分布は二項分布の極限です:\n\nB(n, p) で n→∞, p→0, np=λ (一定) のとき → Poi(λ)\n\n試行回数が多く成功確率が小さいとき、二項分布はポアソン分布で近似できます。目安: n≥20, p≤0.05',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'ポアソン分布 Poi(λ) のポイント:\n\n• P(X=k) = e⁻λλᵏ/k!\n• E[X] = Var(X) = λ\n• 稀な事象の発生回数をモデル化\n• 二項分布の極限として導出可能\n\n待ち行列理論や品質管理で広く使われます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
