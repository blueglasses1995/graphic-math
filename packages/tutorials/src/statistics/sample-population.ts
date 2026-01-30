import { Tutorial } from '../types';

export const samplePopulationTutorial: Tutorial = {
  id: 'sample-population',
  title: '標本と母集団',
  description: '統計的推論の基盤となる標本と母集団の関係を理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '全部は調べられない',
      content:
        '日本人全員の平均身長を知りたい。でも1億人全員を測るのは不可能です。\n\nそこで一部の人を選んで測定し、全体を推測します。\n\n全体を「母集団」、選んだ一部を「標本」と呼びます。\n\nこの「部分から全体を知る」仕組みが統計学の核心です。',
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
        '母集団からランダムに標本を取り出してみましょう。\n\n何度も標本を取ると、毎回少しずつ違う結果になることを確認してください。',
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
      title: '母数と統計量',
      content:
        '母集団の特性値を「母数」（パラメータ）と呼びます。\n例: 母平均μ、母分散σ²\n\n標本から計算した値を「統計量」と呼びます。\n例: 標本平均x̄、標本分散s²\n\n母数は通常知ることができません（だから推測する）。\n統計量はデータから計算できます。\n\n統計量を使って母数を推測する ── これが「推定」です。',
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
      title: 'ランダムサンプリング',
      content:
        '標本が母集団をきちんと代表するためには「ランダムに選ぶ」ことが重要です。\n\n例えば学校の前でだけアンケートを取ると、学生に偏ります。\n\n無作為抽出（ランダムサンプリング）では、母集団の全員が等しい確率で選ばれます。\n\nこれにより、標本が母集団の縮小コピーになります。',
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
        '標本サイズを大きくすると、標本平均は母平均にどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '標本サイズを大きくすると、標本平均は母平均に？',
        options: [
          { id: 'a', label: '離れていく', correct: false },
          { id: 'b', label: '近づいていく', correct: true },
          { id: 'c', label: '変わらない', correct: false },
          { id: 'd', label: '振動する', correct: false },
        ],
        explanation:
          '正解は「近づいていく」です。\n\nこれを「大数の法則」と呼びます。\n\n標本を大きくすればするほど、標本平均は母平均に収束します。\n\nただし完全に一致するには無限のデータが必要です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：標本の代表性',
      content:
        '良い標本の条件は「偏りがないこと」と「十分な大きさがあること」です。\n\n偏りがあると（選挙調査で電話のみ使用など）、結果が歪みます。\n\n標本が小さいと、たまたまの偏りが大きくなります。\n\n「どうやって標本を選ぶか」は統計学の最も実践的な問題の一つです。',
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
        '母集団: 調べたい対象全体\n標本: 実際に調べた一部\n\n母数（μ, σ²）は知りたいが直接は得られない。\n統計量（x̄, s²）はデータから計算できる。\n\nランダムサンプリングで偏りのない標本を取り、標本から母集団を推測する。\n\n次は「標本分布」── 標本統計量がどのように分布するかを学びます。',
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
