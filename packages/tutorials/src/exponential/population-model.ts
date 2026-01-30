import { Tutorial } from '../types';

export const populationModelTutorial: Tutorial = {
  id: 'population-model',
  title: '人口モデル',
  description: 'マルサスの指数的人口モデルとその限界を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '地球は何人まで住める？',
      content:
        '世界人口は1800年に10億人、1927年に20億人、1974年に40億人、2022年に80億人。ほぼ一定の期間で2倍になっています。このままのペースで増え続けたらどうなるでしょう？人口増加のアニメーションを見てみましょう。',
      customScene: "population-model-animation",
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
        '人口の成長率を変えて、将来の人口予測がどう変わるか観察しましょう。わずかな成長率の差が長期的には巨大な差になります。',
      customScene: "population-model-interactive",
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
      title: 'マルサスモデル',
      content:
        'マルサス（1798年）の人口モデル：\n\nP(t) = P₀ · eʳᵗ\n\n仮定：人口は一定の割合rで増加する\n\n現在の世界人口成長率は約1%。このままなら：\n• 70年後に2倍（約160億人）\n• 140年後に4倍（約320億人）\n\nしかし現実にはこうはなりません。',
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
      title: 'モデルの限界',
      content:
        'マルサスモデルの限界：\n• 食料・水・土地には限りがある\n• 経済発展で出生率が低下する\n• 教育の普及で家族の規模が小さくなる\n\n実際の世界人口成長率は1960年代の約2%から現在の約1%に低下しています。指数的成長は永遠には続きません。',
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
      content: '成長率1.4%の場合、人口が2倍になるのはおよそ何年後？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '成長率1.4%での倍増時間は？',
        options: [
          { id: 'a', label: '約35年', correct: false },
          { id: 'b', label: '約50年', correct: true },
          { id: 'c', label: '約72年', correct: false },
          { id: 'd', label: '約100年', correct: false },
        ],
        explanation:
          '72÷1.4 ≈ 51.4年。約50年で人口が2倍になる計算です。このペースなら2075年頃に160億人を超えることになりますが、実際には成長率の低下により国連予測では約104億人でピークを迎えるとされています。',
      },
    },
    {
      id: 'alternate',
      title: 'より良いモデルへ',
      content:
        '現実をより正確に記述するのが「ロジスティックモデル」です。環境収容力（上限）Kを考慮し、人口がKに近づくと成長が鈍化します。指数モデルは初期段階の近似として有用ですが、長期予測にはロジスティックモデルが適しています。',
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
        '人口モデル：\n• マルサスモデル P(t) = P₀·eʳᵗ\n• 一定割合で増加すると仮定\n• 短期的には有効な近似\n• 長期的には資源の制約で破綻\n• より現実的なモデル→ロジスティック成長\n\n次はそのロジスティック成長を学びます。',
      customScene: "population-model-summary",
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
