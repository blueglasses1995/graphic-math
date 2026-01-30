import { Tutorial } from '../types';

export const probSummaryTutorial: Tutorial = {
  id: 'prob-summary',
  title: '確率のまとめ',
  description: '確率の基礎から分布まで全体を振り返る',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '確率の全体像',
      content:
        'ここまで学んだ確率の概念を整理しましょう。基礎→数え上げ→確率変数→分布→極限定理という流れで全体を俯瞰します。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'prob-summary-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'foundations',
      title: '基礎概念',
      content:
        '• 確率: 0〜1の数値で「起こりやすさ」を表す\n• 標本空間と事象: 全体Ωの部分集合が事象\n• 加法定理: P(A∪B) = P(A)+P(B)-P(A∩B)\n• 余事象: P(Aᶜ) = 1-P(A)\n• 条件付き確率: P(A|B) = P(A∩B)/P(B)',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'counting',
      title: '数え上げと定理',
      content:
        '• 順列: nPr = n!/(n-r)!\n• 組合せ: nCr = n!/(r!(n-r)!)\n• ベイズの定理: P(A|B) = P(B|A)P(A)/P(B)\n• 独立事象: P(A∩B) = P(A)P(B)',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'random-variables',
      title: '確率変数の特性値',
      content:
        '• 期待値: E[X] = Σ xP(x) → 長期的平均\n• 分散: Var(X) = E[(X-μ)²] → バラつき\n• 標準偏差: σ = √Var(X)\n• 共分散: Cov(X,Y) → 2変数の関連',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'distributions',
      title: '主要な確率分布',
      content:
        '• 二項分布 B(n,p): n回の成功/失敗試行\n• ポアソン分布 Poi(λ): 稀な事象の回数\n• 幾何分布 Geo(p): 初成功までの回数\n• 正規分布 N(μ,σ²): 釣鐘型の連続分布',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'limit-theorems',
      title: '極限定理',
      content:
        '• 大数の法則: 標本平均 → 母平均\n• 中心極限定理: 標本平均の分布 → 正規分布\n\nこの2つの定理が統計学の理論的基盤です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: '次のステップ',
      content:
        '確率の基礎を学び終えました。次は実践編で具体的な問題に取り組みましょう。\n\n• モンティ・ホール問題\n• 誕生日問題\n• モンテカルロ法\n• ベイズ更新\n\n理論と直感のギャップを埋める面白い問題が待っています！',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'prob-summary-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
