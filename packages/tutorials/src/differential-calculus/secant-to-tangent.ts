import { Tutorial } from '../types';

export const secantToTangentTutorial: Tutorial = {
  id: 'secant-to-tangent',
  title: '割線から接線へ',
  description: '平均変化率から瞬間変化率へ。割線が接線に近づくプロセスを体験する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '2点をどんどん近づけると…',
      content:
        'グラフ上の2点を結ぶ直線（割線）を見てください。片方の点をもう一方に近づけると、割線はどうなるでしょう？アニメーションで確認しましょう。',
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
        'スライダーで点Qを点Pに近づけてみてください。割線がだんだん接線に変わっていく様子を観察しましょう。',
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
      title: 'y = x² で体験',
      content:
        'P=(1,1)、Q=(3,9) のとき割線の傾きは (9−1)/(3−1) = 4。Q=(2,4) にすると (4−1)/(2−1) = 3。Q=(1.1, 1.21) にすると (1.21−1)/(1.1−1) = 2.1。Qが近づくほど傾きは 2 に近づきます。',
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
      title: '接線の傾き = 瞬間変化率',
      content:
        'QをPに限りなく近づけた極限で、割線は接線になります。x=1 での接線の傾きは 2。これが x=1 における y=x² の「瞬間変化率」であり、微分の本質です。',
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
        'y = x² の x=3 での接線の傾きはいくつになると思いますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = x² の x=3 での接線の傾きは？',
        options: [
          { id: 'a', label: '3', correct: false },
          { id: 'b', label: '6', correct: true },
          { id: 'c', label: '9', correct: false },
          { id: 'd', label: '12', correct: false },
        ],
        explanation:
          'y = x² の導関数は 2x。x=3 を代入すると 2×3 = 6 です。割線の極限としても同じ値に収束します。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：ズームイン',
      content:
        'グラフを十分拡大すると、曲線はほとんど直線に見えます。その「局所的な直線」の傾きこそが接線の傾き。微分とは「曲線を虫メガネで覗いたときの傾き」です。',
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
        '割線の傾き Δy/Δx を、Δx→0 の極限にしたものが接線の傾き。これが瞬間変化率であり、微分の根本アイデアです。\n\n次は「極限」そのものをもう少し丁寧に見ていきましょう。',
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
