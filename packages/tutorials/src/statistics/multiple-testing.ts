import { Tutorial } from '../types';

export const multipleTestingTutorial: Tutorial = {
  id: 'multiple-testing',
  title: '【実践】多重比較問題',
  description: '複数の検定を同時に行うときの偽発見のリスクと対策を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '20回検定すれば1回は当たる',
      content:
        '有意水準5%で20個の仮説を検定すると、全て真のH₀でも期待値として1個は「有意」になります。\n\nこれは偶然です。でも論文では「有意な結果が見つかった！」と報告されます。\n\nこれが多重比較問題 ── 複数の検定を行うことで偽陽性が増える問題です。',
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
        '検定の数を増やして、偽陽性がどれだけ増えるかシミュレーションしましょう。\n\n20回、100回、1000回検定するとどうなりますか？',
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
      title: 'ファミリーワイズ誤り率',
      content:
        '1回の検定で偽陽性の確率 = α = 0.05\nm回の独立な検定で少なくとも1回偽陽性が出る確率:\n\n1 - (1-α)^m\n\nm=20 → 1-(0.95)^20 ≈ 0.64（64%！）\n\nボンフェローニ補正: 各検定の有意水準をα/mにする\nm=20なら 0.05/20 = 0.0025 で判定\n\nシンプルですが保守的すぎて、本当の効果も見逃しやすくなります。',
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
      title: '偽発見率（FDR）制御',
      content:
        'Benjamini-Hochberg法は「偽発見率」を制御するより柔軟な方法です。\n\n偽発見率（FDR）= 有意と判定したもののうち偽陽性の割合\n\n手順:\n1. p値を小さい順に並べる\n2. k番目のp値がk/m×αより小さい最大のkを見つける\n3. そのk個までを有意とする\n\nゲノム研究では数万の遺伝子を同時に検定するため、FDR制御が標準です。',
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
        '1000個の遺伝子を検定し、50個が有意（α=0.05）。期待される偽陽性の数は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1000個の検定で50個が有意（補正なし、α=0.05）。偽陽性の期待数は？',
        options: [
          { id: 'a', label: '0個', correct: false },
          { id: 'b', label: '約2.5個', correct: false },
          { id: 'c', label: '最大50個（全部が偽陽性の可能性）', correct: true },
          { id: 'd', label: '正確に5個', correct: false },
        ],
        explanation:
          '正解は「最大50個」です。\n\n補正なしでは、50個の「有意な」結果のうちどれが本物かわかりません。\n\n全て真のH₀なら期待偽陽性数は1000×0.05=50個。\nつまり50個全てが偽陽性の可能性もあります。\n\nだから多重比較の補正が不可欠なのです。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：p-hacking',
      content:
        '多重比較問題は意図的にも悪用されます。\n\n「p-hacking」: 有意な結果が出るまで:\n・異なる分析方法を試す\n・異なるサブグループを探す\n・外れ値を除外したり含めたりする\n\nこれは事実上、何度も検定しているのと同じです。\n\n対策: 事前に分析計画を登録する（プレレジストレーション）。',
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
        '多重比較問題: 検定を繰り返すと偽陽性が増える。\n\n対策:\n・ボンフェローニ補正: α/mで検定（保守的）\n・BH法: FDRを制御（より柔軟）\n・事前登録: 分析計画を事前に公開\n\n「たくさん試して当たったものだけ報告する」は科学的に不誠実。\n\n再現性の危機の大きな原因の一つが多重比較問題です。',
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
