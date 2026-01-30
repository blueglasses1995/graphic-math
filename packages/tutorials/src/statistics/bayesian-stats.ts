import { Tutorial } from '../types';

export const bayesianStatsTutorial: Tutorial = {
  id: 'bayesian-stats',
  title: '【実践】ベイズ統計',
  description: '事前知識をデータで更新するベイズ統計の考え方を実践的に学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '信念をデータで更新する',
      content:
        'コインが公正かどうか調べたい。\n\n頻度論: データだけで判断する（p値）\nベイズ: 事前の信念 + データ → 更新された信念\n\nベイズ統計は「データを見る前の知識」を活用し、データを見た後に知識を更新する枠組みです。',
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
        '事前分布を設定してからデータを追加していきましょう。\n\nデータが増えるにつれて事後分布がどう変わるか観察してください。',
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
      title: 'ベイズの定理（復習）',
      content:
        'P(仮説|データ) = P(データ|仮説) × P(仮説) / P(データ)\n\n事後確率 ∝ 尤度 × 事前確率\n\n事前確率: データを見る前の信念\n尤度: 仮説のもとでデータが得られる確率\n事後確率: データを見た後の更新された信念\n\n新しいデータが入るたびに、事後確率が新しい事前確率になり、知識が更新されていきます。',
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
      title: 'コイン投げの例',
      content:
        'コインの表の確率θを推定したい。\n\n事前分布: θ ∼ Beta(1,1)（一様分布、何も知らない）\n\n10回投げて7回表が出た。\n\n事後分布: θ ∼ Beta(1+7, 1+3) = Beta(8, 4)\n事後平均 = 8/12 ≈ 0.67\n\nデータが増えるほど事後分布は狭くなり（不確実性が減り）、事前分布の影響は薄れます。',
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
        'データが非常に多い場合、ベイズと頻度論の結果はどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'データが十分に多いとき、ベイズと頻度論の推定結果は？',
        options: [
          { id: 'a', label: '大きく異なる', correct: false },
          { id: 'b', label: 'ほぼ一致する', correct: true },
          { id: 'c', label: 'ベイズの方が常に正確', correct: false },
          { id: 'd', label: '比較できない', correct: false },
        ],
        explanation:
          '正解は「ほぼ一致する」です。\n\nデータが十分に多いと、事前分布の影響は薄れ、尤度が支配的になります。\n\nベイズの事後平均 ≈ 頻度論の最尤推定量。\n\nベイズの利点はデータが少ないときに事前知識を活用できることと、不確実性を確率として自然に表現できることです。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：ベイズの利点',
      content:
        'ベイズ統計の実用的な利点:\n\n1. 信用区間: 「母数がこの区間にある確率が95%」と直接解釈できる\n2. 逐次更新: データが入るたびに推定を更新できる\n3. 事前知識の活用: 専門家の知見を数学的に組み込める\n4. 意思決定: 損失関数と組み合わせて最適な行動を選べる\n\n計算の困難さがかつてのボトルネックでしたが、MCMCの発展で実用的になりました。',
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
        'ベイズ統計は「事前知識 + データ → 更新された知識」の枠組みです。\n\n事後確率 ∝ 尤度 × 事前確率\n\n利点:\n・不確実性を確率で自然に表現\n・事前知識を活用できる\n・データが少なくても推定可能\n・逐次的に更新できる\n\n頻度論とベイズは対立するものではなく、問題に応じて使い分ける道具です。\n\nこれで統計学チュートリアルは完了です。データの世界を楽しんでください！',
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
