import { Tutorial } from '../types';

export const derivativeIntroTutorial: Tutorial = {
  id: 'derivative-intro',
  title: '導関数とは',
  description: '導関数 f\'(x) の定義を理解する。極限から「傾きの関数」を作る',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '傾きが関数になる',
      content:
        '曲線の各点で接線の傾きを求めると、その傾き自体が新しい関数になります。元の関数 f(x) から「傾きの関数」f\'(x) を作る操作――それが微分です。',
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
        'x の位置を動かして、接線の傾きがどう変わるか観察してください。傾きの値をプロットしていくと、新しいグラフ（導関数）が浮かび上がります。',
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
      title: '定義式',
      content:
        'f\'(x) = lim(h→0) [f(x+h) − f(x)] / h。これが導関数の正式な定義です。分子は「ちょっと先との差」、分母は「ちょっとの幅」。差分の比の極限です。',
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
      title: 'f(x) = 3x の導関数',
      content:
        'f\'(x) = lim(h→0) [3(x+h) − 3x] / h = lim(h→0) 3h/h = 3。直線の傾きは一定なので、導関数は定数 3 です。どの x でも傾きは同じ。',
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
        'f(x) = 5x の導関数 f\'(x) はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x) = 5x の導関数 f\'(x) は？',
        options: [
          { id: 'a', label: '5x', correct: false },
          { id: 'b', label: '5', correct: true },
          { id: 'c', label: 'x', correct: false },
          { id: 'd', label: '0', correct: false },
        ],
        explanation:
          '直線 y = 5x の傾きは常に 5。定義に当てはめると [5(x+h)−5x]/h = 5h/h = 5 です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：記号いろいろ',
      content:
        '導関数の書き方は複数あります。f\'(x)（ラグランジュ）、dy/dx（ライプニッツ）、ẏ（ニュートン）。どれも同じ意味：「y を x で微分したもの」。文脈で使い分けます。',
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
        '導関数 f\'(x) = lim(h→0) [f(x+h)−f(x)]/h。各点での接線の傾きをまとめた「傾きの関数」です。\n\n次は具体的に x² や x³ を微分して、パターンを発見しましょう。',
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
