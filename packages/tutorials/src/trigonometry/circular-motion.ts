import { Tutorial } from '../types';

export const circularMotionTutorial: Tutorial = {
  id: 'circular-motion',
  title: '【実践】円運動とsin',
  description: '円を回る点のY座標を追跡すると、sinの波が現れる',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '観覧車の高さ',
      content:
        '観覧車に乗っている人の高さは、時間とともにどう変わるでしょうか？\n\n左の円が観覧車、右のグラフがその人のY座標（高さ）の変化です。\n\n再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '投影を観察しよう',
      content:
        '再生と一時停止を切り替えて、円上の点の位置とグラフの対応をじっくり見てください。\n\n黄色い点が円の上半分にいるとき、グラフはどうなっていますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-top',
      title: '真上 = sinの山',
      content:
        '点が円の一番上（90°）にいるとき、Y座標は1で最大。これがsinの山です。\n\n観覧車の一番高い位置ですね。この瞬間、横方向（cos）はゼロ。真上にいるから横の距離はありません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-side',
      title: '真横 = sinがゼロを通過',
      content:
        '点が真横（0°や180°）にいるとき、Y座標はゼロ。sinのグラフがゼロを横切る瞬間です。\n\nただし0°→90°では上昇中、180°→270°では下降中。ゼロを通る速さが最大の瞬間でもあります。\n\n物理では、この「ゼロを通る瞬間」が速度最大の点です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        '円運動の速さを2倍にすると、sinグラフはどう変わるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '角速度を2倍にすると？',
        options: [
          { id: 'a', label: '波の高さ（振幅）が2倍になる', correct: false },
          { id: 'b', label: '波の幅（周期）が半分になる', correct: true },
          { id: 'c', label: 'グラフが上にずれる', correct: false },
          { id: 'd', label: '何も変わらない', correct: false },
        ],
        explanation:
          '速く回ると、同じ時間に2周します。つまり波が2倍「詰まる」= 周期が半分。振幅（山の高さ）は変わりません。sin(2ωt) は sin(ωt) と同じ高さの波ですが、2倍速く振動します。',
      },
    },
    {
      id: 'alternate',
      title: '惑星の見かけの動き',
      content:
        '太陽系を横から見ると、惑星は円軌道上を回っています。地球から見た惑星の位置の変化は、まさに円運動の射影（sin/cos）です。\n\nガリレオが木星の衛星を観測したとき、衛星が「左右に行ったり来たり」しているように見えたのは、円軌道をほぼ真横から見ていたから。彼が見ていたのはsinカーブだったのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '等速円運動の射影（影）= sin/cos波。これが三角関数と物理を結ぶ最も基本的なつながりです。\n\nよくある誤解: sinは「三角形だけ」の関数だと思うこと。実は回転運動を記述するために最も自然な関数です。\n\n観覧車、惑星、回転する機械部品...円運動を見つけたら、そこにsinがあります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
