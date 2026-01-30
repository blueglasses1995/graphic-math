import { Tutorial } from '../types';

export const birthdayProblemTutorial: Tutorial = {
  id: 'birthday-problem',
  title: '【実践】誕生日問題',
  description: '同じ誕生日の人がいる確率は驚くほど高い',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '23人で50%超え',
      content:
        '23人のクラスで、同じ誕生日の人が少なくとも1組いる確率は？直感的には低そうですが、実は50%を超えます。これが有名な誕生日問題です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'complement',
      title: '余事象で解く',
      content:
        '「全員の誕生日が異なる」確率（余事象）を計算:\n\n2人目: 364/365\n3人目: 363/365\n...\nn人目: (366-n)/365\n\nP(全員異なる) = 365/365 × 364/365 × ... × (366-n)/365',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'calculation',
      title: '具体的な値',
      content:
        'n=23: P(重複あり) ≒ 0.507（50.7%）\nn=50: P ≒ 0.970（97.0%）\nn=70: P ≒ 0.999（99.9%）\n\n50人のクラスではほぼ確実に同じ誕生日の人がいます。「ペアの数」が急速に増えることがポイントです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '人数を変えてみよう',
      content:
        '人数を変えて、同じ誕生日がある確率がどう変化するか確認しましょう。グラフの急激な立ち上がりに注目してください。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'なぜ直感より確率が高いのか？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '確率が高くなる主な理由は？',
        options: [
          { id: 'a', label: '誕生日が365日しかないから', correct: false },
          { id: 'b', label: 'ペアの組合せ数が急増するから', correct: true },
          { id: 'c', label: '特定の月に誕生日が偏るから', correct: false },
          { id: 'd', label: 'うるう年があるから', correct: false },
        ],
        explanation:
          '23人のペア数は 23C2 = 253組。各ペアが一致するチャンスがあるため、全体の確率は急速に増加します。',
      },
    },
    {
      id: 'applications',
      title: '応用',
      content:
        '誕生日問題はハッシュ衝突の分析に直結します。\n\nハッシュ関数で2ⁿビットの出力を持つとき、約2^(n/2)個のデータで衝突確率が50%を超えます。これが「誕生日攻撃」です。\n\n暗号学でのセキュリティ評価に重要です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '誕生日問題の教訓:\n\n• 23人で同じ誕生日の確率は約50%\n• ペアの数 = nC2 が急増するのが原因\n• 余事象で計算するのがコツ\n• ハッシュ衝突など情報セキュリティに応用\n\n「組合せ爆発」の直感的でない威力を示す好例です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
