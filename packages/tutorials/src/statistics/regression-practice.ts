import { Tutorial } from '../types';

export const regressionPracticeTutorial: Tutorial = {
  id: 'regression-practice',
  title: '【実践】回帰の実践',
  description: '重回帰分析と実務での回帰モデルの構築・評価を実践する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '複数の要因で予測する',
      content:
        '住宅の価格は広さだけで決まりますか？\n\n駅からの距離、築年数、階数……多くの要因が影響します。\n\n重回帰分析は複数の説明変数で目的変数を予測するモデルです。\n\n実務で最も使われる統計手法の一つです。',
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
        '説明変数を追加・削除して、モデルの予測精度がどう変わるか試しましょう。\n\n変数を増やせば常に良くなりますか？',
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
      title: '重回帰モデル',
      content:
        'y = b₀ + b₁x₁ + b₂x₂ + ... + bₖxₖ + ε\n\n住宅価格 = 500 + 30×広さ - 5×築年数 - 2×駅距離\n\n各係数は「他の変数を固定したときの、その変数1単位の増加による予測値の変化」です。\n\n広さ1㎡増えると、他の条件が同じなら価格が30万円上がる。\n\nこの「他の条件が同じなら」が重回帰の強みです。',
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
      title: '過学習と変数選択',
      content:
        '変数を増やすとR²は必ず上がります。でもそれは良いモデルとは限りません。\n\n「訓練データには完璧に合うが、新しいデータには合わない」── これが過学習。\n\n自由度調整済みR²やAIC/BICは過学習を防ぐ指標です。\n\nまた多重共線性（説明変数同士の強い相関）があるとモデルが不安定になります。VIFで確認しましょう。',
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
        'R²=0.99のモデルは常に良いモデルですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'R²=0.99は常に良いモデルを意味する？',
        options: [
          { id: 'a', label: 'はい、ほぼ完璧なモデル', correct: false },
          { id: 'b', label: 'いいえ、過学習の可能性がある', correct: true },
          { id: 'c', label: 'R²は信頼できない指標', correct: false },
          { id: 'd', label: 'データが少ないと常にR²=0.99になる', correct: false },
        ],
        explanation:
          '正解は「過学習の可能性がある」です。\n\n変数を増やしすぎると、訓練データにはぴったり合いますが、新しいデータには合いません。\n\nR²=0.99は疑ってかかるべきです。交差検証で「未知データへの予測力」も確認しましょう。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：交差検証',
      content:
        'モデルの真の予測力を評価するには交差検証を使います。\n\nデータをk個に分割し、k-1個で学習して1個で検証。これをk回繰り返す。\n\n訓練データでのR²だけでなく、検証データでの予測誤差も見ることで過学習を検出できます。\n\nこれは機械学習で最も基本的なモデル評価手法です。',
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
        '重回帰分析は複数の変数で予測する実践的な手法です。\n\n注意点:\n・過学習に気をつける（変数を増やしすぎない）\n・多重共線性を確認する（VIF）\n・残差分析でモデルの妥当性を確認する\n・交差検証で予測力を評価する\n\nモデルを作ることよりも「モデルを疑うこと」が大切です。',
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
