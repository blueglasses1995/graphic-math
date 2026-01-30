import { Tutorial } from '../types';

export const confidenceIntervalTutorial: Tutorial = {
  id: 'confidence-interval',
  title: '【実践】信頼区間',
  description: '推定の不確実性を区間で表現する信頼区間',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '「内閣支持率45%（±3%）」',
      content:
        'ニュースで見る「支持率45%、誤差±3%」。これは42%〜48%の間に真の支持率がある「確率が高い」ということです。この区間が信頼区間です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '信頼区間の定義',
      content:
        '95%信頼区間の意味:\n\n「同じ方法で100回調査すれば、約95回は真の値を含む区間が得られる」\n\n母平均μの95%信頼区間:\nX̄ ± 1.96 × σ/√n\n\n1.96はZ₀.₀₂₅（標準正規分布の上側2.5%点）です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'width',
      title: '信頼区間の幅',
      content:
        '信頼区間の幅は:\n\n• nが大きいほど狭い（精度向上）\n• σが大きいほど広い（バラつき大）\n• 信頼度が高いほど広い（95%→99%で広がる）\n\n幅を半分にするには4倍のサンプルサイズが必要（√nの法則）。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'サンプルサイズを変えてみよう',
      content:
        'サンプルサイズnを変えて信頼区間の幅がどう変わるか確認しましょう。nを増やすと区間が狭まり、推定が精密になります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '95%信頼区間の正しい解釈は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '95%信頼区間の正しい解釈は？',
        options: [
          { id: 'a', label: '真の値がこの区間にある確率が95%', correct: false },
          { id: 'b', label: '同じ方法で作った区間の95%が真の値を含む', correct: true },
          { id: 'c', label: 'データの95%がこの区間に入る', correct: false },
          { id: 'd', label: '次のデータがこの区間に入る確率が95%', correct: false },
        ],
        explanation:
          '信頼区間は「手法の信頼性」です。特定の区間に真の値が入る確率ではなく、手法を繰り返したとき95%が正解する、という意味です。',
      },
    },
    {
      id: 'misconceptions',
      title: 'よくある誤解',
      content:
        '誤解1: 「真の値が区間内にある確率が95%」\n→ 真の値は固定、区間がランダム\n\n誤解2: 「95%のデータが区間内」\n→ データの分布とは別の話\n\n正しくは: 「この作り方をすれば95%の場合に成功する」',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '信頼区間:\n\n• X̄ ± z × σ/√n で構成\n• 手法の成功率を表す（95%、99%など）\n• 幅は 1/√n に比例して狭くなる\n• 解釈を正しく理解することが重要\n\n統計的推定の最も基本的なツールです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
