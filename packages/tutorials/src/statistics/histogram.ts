import { Tutorial } from '../types';

export const histogramTutorial: Tutorial = {
  id: 'histogram',
  title: 'ヒストグラムの読み方',
  description: 'データの分布を視覚的に理解するヒストグラムの見方を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: 'データの形を見る',
      content:
        '数字の羅列からは見えないものが、グラフにすると一目でわかります。\n\nヒストグラムは、データを区間ごとに分けて棒グラフにしたものです。\n\n「山が一つか二つか」「左右対称か」「裾が長いか」── データの性格が見えてきます。',
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
        'ビン（区間）の幅を変えてみてください。\n\n幅を狭くすると詳細が見え、広くすると全体の傾向が見えます。\n\n適切なビン幅を探してみましょう。',
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
      title: '正規分布の形',
      content:
        '多くの自然現象は「釣鐘型」の分布をします。\n\n身長、テストの点数、測定誤差……\n\n真ん中が最も多く、左右に行くほど少なくなる。\n\nこれが正規分布（ガウス分布）です。\n\nヒストグラムが釣鐘型に見えたら、正規分布に近いデータだと推測できます。',
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
      title: '歪んだ分布',
      content:
        '年収の分布を考えてみましょう。\n\n多くの人は300〜600万円あたりに集中しますが、一部に数千万〜数億の人がいます。\n\nヒストグラムは右に長い裾を持ちます。これを「右に歪んだ分布」と呼びます。\n\nこのような分布では、平均は中央値より大きくなります。',
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
        'ヒストグラムが左右対称な釣鐘型のとき、平均と中央値の関係は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '左右対称な釣鐘型のヒストグラムでは、平均と中央値は？',
        options: [
          { id: 'a', label: '平均 > 中央値', correct: false },
          { id: 'b', label: '平均 < 中央値', correct: false },
          { id: 'c', label: 'ほぼ一致する', correct: true },
          { id: 'd', label: '関係は不定', correct: false },
        ],
        explanation:
          '正解は「ほぼ一致する」です。\n\n左右対称な分布では、平均・中央値・最頻値がほぼ同じ値になります。\n\n右に歪むと平均 > 中央値、左に歪むと平均 < 中央値になります。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：密度と確率',
      content:
        'ヒストグラムの各棒の面積は、そのデータがその区間に入る「割合」を表します。\n\n全体の面積を1に揃えると「確率密度」になります。\n\nこれが後で学ぶ「確率密度関数」の直感的な意味です。\n\nヒストグラムはデータ → 確率分布への橋渡しなのです。',
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
        'ヒストグラムはデータの「形」を可視化するツールです。\n\n見るべきポイント:\n・山の位置（中心はどこか）\n・広がり（ばらつきは大きいか）\n・対称性（左右対称か歪んでいるか）\n・山の数（一つか複数か）\n・外れ値（離れた値はないか）\n\n次の単元では、箱ひげ図というもう一つの可視化手法を学びます。',
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
