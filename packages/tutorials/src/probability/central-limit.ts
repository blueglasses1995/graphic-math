import { Tutorial } from '../types';

export const centralLimitTutorial: Tutorial = {
  id: 'central-limit',
  title: '中心極限定理',
  description: '平均の分布が正規分布に近づく驚くべき定理',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '何でも正規分布になる？',
      content:
        'サイコロの出目は一様分布ですが、100個のサイコロの合計は正規分布に近くなります。元の分布が何であれ、合計や平均は正規分布に近づく。これが中心極限定理です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'statement',
      title: '中心極限定理',
      content:
        'X₁, ..., Xₙ が独立同分布（平均μ, 分散σ²）のとき:\n\n√n(X̄ₙ - μ)/σ → N(0, 1) (n→∞)\n\nつまり標本平均は N(μ, σ²/n) に近づきます。元の分布が何であれ！',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'why-important',
      title: 'なぜ重要か',
      content:
        '中心極限定理が重要な理由:\n\n1. 正規分布の普遍性を説明する\n2. 統計的推定の基礎を与える\n3. 分布が未知でも標本平均の振る舞いが分かる\n\n身長が正規分布になるのは、多くの遺伝子と環境要因の「合計」だからです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'シミュレーション',
      content:
        '様々な分布（一様分布、指数分布など）からn個のサンプルの平均を繰り返し計算します。nが大きくなるにつれて、平均の分布が正規分布に近づくことを確認しましょう。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'サイコロの期待値3.5、σ²≒2.92。100個振った合計の標準偏差は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'サイコロ100個の合計のσに最も近いのは？',
        options: [
          { id: 'a', label: '約 1.7', correct: false },
          { id: 'b', label: '約 17', correct: true },
          { id: 'c', label: '約 170', correct: false },
          { id: 'd', label: '約 292', correct: false },
        ],
        explanation:
          '合計のVar = 100×2.92 = 292。σ = √292 ≒ 17.1。合計は N(350, 292) に近似できます。',
      },
    },
    {
      id: 'how-many',
      title: 'nはどのくらい必要？',
      content:
        '中心極限定理の近似が良くなるnの目安:\n\n• 対称な分布: n ≥ 10 で十分\n• やや歪んだ分布: n ≥ 30\n• 非常に歪んだ分布: n ≥ 50以上\n\n一般に「n ≥ 30」が経験的な目安です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '中心極限定理:\n\n• 独立な確率変数の和/平均は正規分布に近づく\n• 元の分布に関係なく成り立つ\n• 統計的推定・検定の理論的根拠\n• 目安: n ≥ 30\n\n確率論で最も美しく実用的な定理の一つです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
