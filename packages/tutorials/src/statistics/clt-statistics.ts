import { Tutorial } from '../types';

export const cltStatisticsTutorial: Tutorial = {
  id: 'clt-statistics',
  title: '中心極限定理（統計版）',
  description: '標本平均が正規分布に従う中心極限定理の統計的意味を理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '統計学で最も重要な定理',
      content:
        '母集団がどんな分布であっても、標本平均の分布は正規分布に近づく。\n\nこれが中心極限定理（CLT）です。\n\nサイコロでも、コイン投げでも、年収でも ── 標本サイズが十分大きければ、標本平均は正規分布に従います。\n\nだから正規分布がこれほど重要なのです。',
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
        '母集団の分布を変えてみてください（一様分布、指数分布、二項分布など）。\n\n標本サイズnを増やすと、標本平均の分布がどう変わるか観察しましょう。',
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
      title: 'サイコロで確認',
      content:
        'サイコロ1個: 1〜6の一様分布（釣鐘型ではない）\n\nサイコロ2個の平均: やや山なりに\nサイコロ10個の平均: かなり正規分布に近い\nサイコロ30個の平均: ほぼ完全な正規分布\n\n元の分布が一様でも、平均を取ると正規分布になる ── これがCLTの威力です。',
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
      title: 'なぜ重要か',
      content:
        'CLTのおかげで、母集団の分布がわからなくても:\n\n1. 標本平均の分布は（ほぼ）正規分布として扱える\n2. 正規分布の性質を使って信頼区間を作れる\n3. 正規分布の性質を使って仮説検定ができる\n\nつまり、統計的推論のほとんどがCLTの上に成り立っています。\n\nただし「標本サイズが十分大きい」という条件が必要です。目安は n ≥ 30 です。',
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
        '非常に歪んだ分布から標本を取る場合、CLTが成り立つにはどうすればよい？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '歪んだ分布でCLTを適用するには？',
        options: [
          { id: 'a', label: '標本サイズを小さくする', correct: false },
          { id: 'b', label: '標本サイズを大きくする', correct: true },
          { id: 'c', label: '分布を変換する', correct: false },
          { id: 'd', label: 'CLTは使えない', correct: false },
        ],
        explanation:
          '正解は「標本サイズを大きくする」です。\n\n歪んだ分布ほど、正規分布に近づくまでに必要なnが大きくなります。\n\n対称な分布ならn=10程度でも十分ですが、極端に歪んだ分布ではn=100以上必要なこともあります。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：自然界の正規分布',
      content:
        '身長や体重が正規分布に近いのもCLTで説明できます。\n\n身長は遺伝、栄養、環境など多くの要因の「合計」で決まります。\n\n多数の独立な要因の合計は ── CLTにより ── 正規分布に近づきます。\n\n自然界で正規分布がよく現れるのは、多くの小さな要因が足し合わさった結果なのです。',
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
        '中心極限定理: 標本サイズnが十分大きければ、標本平均の分布は正規分布に近づく。\n\nこれにより:\n・母集団の分布がわからなくても推定できる\n・正規分布の性質を利用して検定できる\n・自然界で正規分布が多い理由を説明できる\n\n次は「点推定と区間推定」── 母数を一つの値で推測するか、範囲で推測するかを学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
