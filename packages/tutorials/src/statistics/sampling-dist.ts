import { Tutorial } from '../types';

export const samplingDistTutorial: Tutorial = {
  id: 'sampling-dist',
  title: '標本分布',
  description: '標本統計量がどのように分布するかを理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '標本平均もばらつく',
      content:
        '同じ母集団から標本を取っても、毎回違う標本平均が得られます。\n\nこの「標本平均のばらつき」にはパターンがあります。\n\n標本統計量の分布を「標本分布」と呼びます。これが推定・検定の基盤です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sampling-dist-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '何度も標本を取って、標本平均の分布を作りましょう。\n\n標本サイズを変えると分布の形がどう変わるか観察してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sampling-dist-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '標本平均の分布',
      content:
        '母集団の平均がμ、分散がσ²のとき、\nサイズnの標本平均x̄の分布は:\n\n平均 = μ（母平均と同じ）\n分散 = σ²/n（母分散をnで割る）\n\nつまり標本サイズnが大きいほど、標本平均のばらつきは小さくなります。\n\nσ/√n を「標準誤差」と呼びます。',
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
      title: '標準誤差の意味',
      content:
        '標準偏差: 個々のデータのばらつき\n標準誤差: 標本平均のばらつき\n\n例えば身長の標準偏差が10cmの母集団から、\nn=100人の標本を取ると:\n\n標準誤差 = 10/√100 = 1cm\n\n標本平均は母平均の前後1cm程度に収まる、ということです。\n\n標本を増やすと推定精度が上がる、その仕組みがここにあります。',
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
        '標本サイズを4倍にすると、標準誤差は何倍になりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '標本サイズを4倍にすると、標準誤差は？',
        options: [
          { id: 'a', label: '4倍になる', correct: false },
          { id: 'b', label: '2倍になる', correct: false },
          { id: 'c', label: '1/2倍になる', correct: true },
          { id: 'd', label: '1/4倍になる', correct: false },
        ],
        explanation:
          '正解は「1/2倍」です。\n\n標準誤差 = σ/√n なので、nを4倍にすると √4 = 2 で割ることになり、半分になります。\n\n精度を2倍にするには標本を4倍にする必要がある ── これは実務で重要な知識です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：シミュレーション',
      content:
        '標本分布は思考実験です。実際には標本を1回しか取れないことがほとんどです。\n\nしかし「もし何度も標本を取ったら」を想像することで、手元の標本がどれだけ信頼できるか判断できます。\n\nコンピュータを使えば実際に何千回もシミュレーションできます（ブートストラップ法）。',
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
        '標本分布は「統計量のばらつき方」を表します。\n\n標本平均の分布:\n・中心 = 母平均μ\n・ばらつき = σ/√n（標準誤差）\n\n標本を増やすと標準誤差が減り、推定が正確になります。\n\n次は「中心極限定理」── 標本分布が正規分布に近づくという驚くべき定理を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sampling-dist-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
