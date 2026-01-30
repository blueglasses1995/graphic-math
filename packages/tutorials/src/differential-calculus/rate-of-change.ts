import { Tutorial } from '../types';

export const rateOfChangeTutorial: Tutorial = {
  id: 'rate-of-change',
  title: '変化をつかむ',
  description: '「変化率」とは何かを直感的に理解する。速さ・傾き・変化量の関係をつかむ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '変化は至るところにある',
      content:
        'ボールが坂を転がるとき、速さはどんどん変わります。温度も、株価も、人口も――世界は「変化」でできています。その変化を数字でつかむ方法が「変化率」です。グラフが動く様子を見てみましょう。',
      customScene: 'rate-of-change-animation',
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
        'スライダーを動かして、区間の幅 Δx を変えてみてください。Δx を小さくすると、平均変化率はどうなるでしょう？',
      customScene: 'rate-of-change-interactive',
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
      title: '距離と速さ',
      content:
        '車が2時間で100km走ったら、平均速度は 100÷2＝50km/h。これが「平均変化率」です。距離の変化量 Δy を時間の変化量 Δx で割ったもの。式で書くと Δy/Δx です。',
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
      title: 'グラフの傾き',
      content:
        'y = x² のグラフで、x=1 から x=3 までの平均変化率を求めると (9−1)/(3−1) = 4。これはグラフ上の2点を結ぶ直線（割線）の傾きです。傾きが急なほど、変化が激しいということです。',
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
        'y = x² で、x=2 から x=4 の平均変化率はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = x² で x=2→4 の平均変化率 Δy/Δx は？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '6', correct: true },
          { id: 'c', label: '8', correct: false },
          { id: 'd', label: '12', correct: false },
        ],
        explanation:
          'Δy = 16−4 = 12、Δx = 4−2 = 2。よって Δy/Δx = 12/2 = 6 です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：温度変化',
      content:
        '朝6時に10℃、昼12時に22℃なら、平均変化率は (22−10)/(12−6) = 2℃/時間。1時間あたり2℃ずつ上がったという意味です。変化率は「単位あたりの変化量」と考えるとわかりやすいです。',
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
        '変化率 = Δy/Δx。2点間の変化量の比です。グラフでは割線の傾きにあたります。\n\nこの「平均」の変化率を、ある一瞬の変化率（瞬間変化率）に進化させるのが「微分」です。次のチュートリアルで、その橋渡しを見ていきましょう。',
      customScene: 'rate-of-change-summary',
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
