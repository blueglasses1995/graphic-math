import { Tutorial } from '../types';

export const varianceStdDevTutorial: Tutorial = {
  id: 'variance-std-dev',
  title: '分散と標準偏差',
  description: 'データのばらつきを定量的に測る方法を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: 'ばらつきの大きさ',
      content:
        '2つのクラスの平均点がどちらも70点だとします。\n\nでも一方は全員が65〜75点、もう一方は30〜100点。\n\n平均だけでは見えないデータの「散らばり具合」を測る指標が、分散と標準偏差です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'variance-std-dev-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'データ点を散らばらせたり集めたりしてみてください。\n\n分散と標準偏差の値がどう変化するか観察しましょう。\n\nデータが密集すると小さくなり、散らばると大きくなります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'variance-std-dev-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '分散の計算',
      content:
        'データ: 2, 4, 6, 8, 10（平均 = 6）\n\n各データと平均の差: -4, -2, 0, 2, 4\n差の二乗: 16, 4, 0, 4, 16\n分散 = (16+4+0+4+16) ÷ 5 = 8\n\n「平均からの距離の二乗の平均」が分散です。\n\nなぜ二乗するか？ プラスとマイナスが打ち消し合うのを防ぐためです。',
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
      title: '標準偏差',
      content:
        '分散 = 8 のとき、標準偏差 = √8 ≈ 2.83\n\n標準偏差は分散の平方根です。\n\nなぜわざわざ平方根を取るのか？\n\n分散の単位は「元のデータの単位の二乗」になってしまうからです。\ncm のデータなら分散は cm²。標準偏差なら cm に戻ります。\n\n「平均から標準偏差1つ分離れた範囲」に約68%のデータが入ります。',
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
        'データA: 5, 5, 5, 5, 5\nデータB: 1, 3, 5, 7, 9\n\nどちらの分散が大きいでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'データA(5,5,5,5,5)とデータB(1,3,5,7,9)、分散が大きいのは？',
        options: [
          { id: 'a', label: 'データA', correct: false },
          { id: 'b', label: 'データB', correct: true },
          { id: 'c', label: '同じ', correct: false },
          { id: 'd', label: '比較できない', correct: false },
        ],
        explanation:
          '正解はデータBです。\n\nデータAは全て同じ値なので分散=0。\nデータBは平均5から各データが離れているので分散=8。\n\n分散0は「全くばらつきがない」ことを意味します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：面積としての分散',
      content:
        '分散を幾何学的に理解することもできます。\n\n各データ点から平均までの距離を一辺とする正方形を描きます。\nそれらの正方形の面積の平均が分散です。\n\n標準偏差は「典型的な正方形の一辺の長さ」と解釈できます。\n\nこの視覚的な理解は、なぜ二乗を使うのかの直感を与えてくれます。',
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
        '分散 = 各データと平均の差の二乗の平均\n標準偏差 = 分散の平方根\n\n分散が大きいほどデータは散らばっています。\n標準偏差は元のデータと同じ単位で「ばらつきの大きさ」を表します。\n\n正規分布では、平均 ± 1標準偏差に約68%、± 2標準偏差に約95%のデータが含まれます。\n\n次はヒストグラムでデータの「形」を可視化しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'variance-std-dev-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
