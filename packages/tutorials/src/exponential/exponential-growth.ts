import { Tutorial } from '../types';

export const exponentialGrowthTutorial: Tutorial = {
  id: 'exponential-growth',
  title: '指数的成長',
  description: '指数的成長のモデルと現実世界での例を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '爆発的に増える世界',
      content:
        '池の蓮の葉が毎日2倍に増えます。30日目に池全体を覆うとすると、半分を覆うのは何日目？答えは29日目。最後の1日で一気に倍増する。この「気づいたときには手遅れ」の感覚をアニメーションで体験しましょう。',
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
      title: '成長率を変えてみよう',
      content:
        '成長率rと初期値N₀を変えて、N(t) = N₀·eʳᵗ のグラフがどう変わるか観察しましょう。rが少し変わるだけで長期的な結果は大きく異なります。',
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
      title: '指数的成長のモデル',
      content:
        'N(t) = N₀ · eʳᵗ\n\n• N₀: 初期値（t=0のときの量）\n• r: 成長率（r>0で成長）\n• t: 時間\n• e: ネイピア数\n\n特徴：一定の「割合」で増加する。量が多いほど増加量も多い。例えば毎年5%成長なら、100万が105万に、1億が1億500万に。',
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
      title: '線形成長との違い',
      content:
        '線形成長：毎年100万円ずつ増える（等差数列）\n指数的成長：毎年10%ずつ増える（等比数列）\n\n最初は線形のほうが速いこともあるが、いずれ指数が圧倒的に勝つ。\n\n10年後：線形+1000万、指数×2.59\n50年後：線形+5000万、指数×117\n100年後：線形+1億、指数×13,781',
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
      content: '年率7%で成長する量が2倍になるのはおよそ何年後？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '年率7%の指数的成長で2倍になるのは？',
        options: [
          { id: 'a', label: '約7年', correct: false },
          { id: 'b', label: '約10年', correct: true },
          { id: 'c', label: '約14年', correct: false },
          { id: 'd', label: '約20年', correct: false },
        ],
        explanation:
          '72÷7 ≈ 10.3年。「72の法則」を使うと、72÷成長率(%) で倍増時間の概算ができます。正確には ln2/0.07 ≈ 9.9年です。',
      },
    },
    {
      id: 'alternate',
      title: '指数的成長の落とし穴',
      content:
        '現実では永遠に指数的成長は続きません。資源の制限、空間の制約、競争などがブレーキをかけます。無制限の指数的成長を仮定するモデルは短期間の予測には有用ですが、長期予測では注意が必要です。より現実的なモデルが「ロジスティック成長」です。',
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
        '指数的成長：\n• N(t) = N₀·eʳᵗ（一定割合での成長）\n• 量が多いほど増加量も多い\n• 線形成長をいずれ追い抜く\n• 現実には永遠に続かない\n• 72の法則で倍増時間を概算できる\n\n次は逆の現象、指数的減衰を見ていきます。',
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
