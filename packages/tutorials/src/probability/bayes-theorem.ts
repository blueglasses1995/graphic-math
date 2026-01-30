import { Tutorial } from '../types';

export const bayesTheoremTutorial: Tutorial = {
  id: 'bayes-theorem',
  title: 'ベイズの定理',
  description: '原因の確率を結果から逆算するベイズの定理',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '結果から原因を推理する',
      content:
        '病気の検査で陽性が出ました。本当に病気である確率は？直感的には高そうですが、実は検査の精度と病気の頻度で大きく変わります。これがベイズの定理の出番です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'formula',
      title: 'ベイズの定理',
      content:
        'P(A|B) = P(B|A) × P(A) / P(B)\n\n• P(A): 事前確率（情報を得る前のAの確率）\n• P(B|A): 尤度（AのもとでBが起こる確率）\n• P(A|B): 事後確率（Bを観測した後のAの確率）\n• P(B): 正規化定数',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'medical-example',
      title: '検査の例',
      content:
        '病気の確率: P(病) = 0.01\n検査の感度: P(陽性|病) = 0.95\n偽陽性率: P(陽性|健康) = 0.05\n\n陽性のとき本当に病気の確率:\nP(病|陽性) = 0.95×0.01 / (0.95×0.01 + 0.05×0.99)\n= 0.0095 / 0.0590 ≒ 0.161\n\nたった16%！直感と大きく異なります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'パラメータを変えてみよう',
      content:
        '事前確率や検査精度を変えると事後確率がどう変わるか確認しましょう。珍しい病気ほど、陽性でも実際の確率は低くなります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '上の検査例で、病気の有病率が0.1に上がると P(病|陽性) はどうなる？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '有病率0.1のとき P(病|陽性) に最も近いのは？',
        options: [
          { id: 'a', label: '約 0.16', correct: false },
          { id: 'b', label: '約 0.50', correct: false },
          { id: 'c', label: '約 0.68', correct: true },
          { id: 'd', label: '約 0.95', correct: false },
        ],
        explanation:
          'P(病|陽性) = 0.95×0.1 / (0.95×0.1 + 0.05×0.9) = 0.095/0.14 ≒ 0.679。有病率が上がると事後確率も大きく上がります。',
      },
    },
    {
      id: 'total-probability',
      title: '全確率の法則',
      content:
        'P(B)の計算に使う全確率の法則:\n\nP(B) = Σ P(B|Aᵢ) × P(Aᵢ)\n\n全ての原因を通じてBが起こる確率の合計です。ベイズの定理の分母として必須です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'ベイズの定理: P(A|B) = P(B|A)P(A) / P(B)\n\n• 事前確率を事後確率に更新する\n• 稀な事象は偽陽性に注意（基底率の無視）\n• 医療・AI・意思決定に広く応用\n\n結果から原因を推理する最も基本的な道具です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
