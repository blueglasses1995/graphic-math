import { Tutorial } from '../types';

export const regressionLineTutorial: Tutorial = {
  id: 'regression-line',
  title: '回帰直線',
  description: 'データに最もフィットする直線を求める最小二乗法を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: 'データに線を引く',
      content:
        '散布図にデータ点が並んでいます。\n\nこの点たちに「最もよく合う直線」を引きたい。\n\nでも「最もよく合う」とはどういう意味でしょう？\n\nそれを数学的に定義して求めるのが回帰分析です。',
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
        '直線の傾きと切片を自由に動かして、データに合う直線を探してみてください。\n\n「残差」（データ点と直線の距離）がどう変わるか注目しましょう。',
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
      title: '最小二乗法',
      content:
        '各データ点から直線までの縦方向の距離（残差）を考えます。\n\nこの残差を二乗して全て足し合わせたものが「残差平方和」。\n\nこの残差平方和が最小になる直線が「回帰直線」です。\n\ny = ax + b の a（傾き）と b（切片）を求めるのが最小二乗法。\n\n「誤差の二乗の合計が最も小さい直線」を選ぶのです。',
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
      title: '決定係数 R²',
      content:
        'R²（決定係数）は回帰直線がデータをどれだけ説明できるかを示します。\n\nR² = 1 なら全ての点が直線上にあります。\nR² = 0 なら直線はデータを全く説明できていません。\n\nR² = 0.8 なら「yの変動の80%がxで説明できる」ことを意味します。\n\n実は R² は相関係数 r の二乗です。',
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
        '回帰直線 y = 2x + 3 のとき、x = 5 での予測値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = 2x + 3 で x = 5 のとき、y の予測値は？',
        options: [
          { id: 'a', label: '10', correct: false },
          { id: 'b', label: '13', correct: true },
          { id: 'c', label: '15', correct: false },
          { id: 'd', label: '8', correct: false },
        ],
        explanation:
          '正解は 13 です。\n\ny = 2×5 + 3 = 10 + 3 = 13\n\n回帰直線を使えば、xの値からyを予測できます。ただし、データの範囲外への予測（外挿）は危険です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：予測と残差',
      content:
        '回帰直線は「予測マシン」です。\n\n予測値 = 直線上の値\n残差 = 実際の値 - 予測値\n\n残差が小さいほど予測が正確です。\n\n残差のパターンを見ることで、直線モデルが適切かどうかも判断できます。\n残差にパターンが見えたら、直線では不十分かもしれません。',
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
        '回帰直線は「残差の二乗の合計が最小になる直線」です。\n\ny = ax + b で、aは傾き、bは切片。\n\nR²で直線のフィットの良さを評価し、残差でモデルの妥当性を確認します。\n\n注意: 回帰直線が引けても、因果関係があるとは限りません。\n\n次は標本と母集団の概念を学び、推定の基礎に進みます。',
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
