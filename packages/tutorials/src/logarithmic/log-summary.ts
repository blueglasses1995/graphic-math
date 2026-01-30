import { Tutorial } from '../types';

export const logSummaryTutorial: Tutorial = {
  id: 'log-summary',
  title: '対数関数のまとめ',
  description: '対数関数の重要な性質と公式を総復習する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '対数の全体像',
      content:
        '対数は「何回かけた？」から始まり、グラフ、法則、微積分、応用まで広がりました。ここで全体を振り返りましょう。',
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
        '対数関数のグラフと指数関数のグラフを重ねて、鏡像関係を確認してください。',
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
      title: '三大法則',
      content:
        '1. log(AB) = log A + log B（積→和）\n2. log(A/B) = log A - log B（商→差）\n3. log(A^n) = n × log A（累乗→掛け算）\n\nすべて指数法則から導かれます。',
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
      title: '重要な値と公式',
      content:
        'log_a(1) = 0（どんな底でも）\nlog_a(a) = 1（底自身の対数）\nd/dx ln(x) = 1/x（微分）\n∫(1/x)dx = ln|x| + C（積分）\nlog_a(x) = log_b(x) / log_b(a)（底の変換）',
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
      title: '総合問題',
      content:
        'log₂(8) + log₂(4) - log₂(2) の値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(8) + log₂(4) - log₂(2) はいくつ？',
        options: [
          { id: 'a', label: '3', correct: false },
          { id: 'b', label: '4', correct: true },
          { id: 'c', label: '5', correct: false },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          'log₂(8) + log₂(4) - log₂(2) = 3 + 2 - 1 = 4。または log₂(8×4/2) = log₂(16) = 4。',
      },
    },
    {
      id: 'alternate',
      title: '対数が活躍する分野',
      content:
        '対数は多くの分野で活躍します。\n\n科学: pH、デシベル、マグニチュード\n情報: ビット、エントロピー\n数学: 微積分、複素解析\n工学: 計算量、信号処理\n金融: 複利計算、リターン\n\n「倍率」を扱う場面には必ず対数が登場します。',
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
        '対数は指数の逆演算。かけ算を足し算に変え、広い範囲を扱いやすくする道具です。科学から情報理論まで、あらゆる場面で活躍します。\n\n自由に触って対数の感覚を磨いてください。',
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
