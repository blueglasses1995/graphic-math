import { Tutorial } from '../types';

export const fourColorTutorial: Tutorial = {
  id: 'four-color',
  title: '【実践】地図の四色問題',
  description: '任意の地図は4色で塗り分けられる――四色定理の位相的背景',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '4色で足りる',
      content:
        '地図が自動的に4色で塗り分けられていきます。隣り合う国は異なる色。どんな地図でも4色あれば十分です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-four-color-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '地図の領域をクリックして色を塗りましょう。4色だけで隣接する領域を塗り分けられるか挑戦してください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-four-color-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '四色定理',
      content:
        '平面（または球面）上の地図は4色で塗り分けられる。1976年にコンピュータを使って証明され、数学史上初のコンピュータ支援証明として有名です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '位相とグラフ理論',
      content:
        '地図をグラフに変換：国→頂点、国境→辺。四色問題はグラフの彩色問題になります。トーラス上では7色必要になることもあり、曲面の位相が色数に影響します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        '3色では塗り分けられない地図はある？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3色で塗り分けられない地図は存在する？',
        options: [
          { id: 'a', label: '存在する', correct: true },
          { id: 'b', label: '存在しない', correct: false },
          { id: 'c', label: '地図の複雑さによる', correct: false },
          { id: 'd', label: '判断できない', correct: false },
        ],
        explanation:
          '4つの国が互いに隣接する地図は3色では塗り分けられません。4色が本当に必要な例が存在します。',
      },
    },
    {
      id: 'alternate',
      title: 'オイラー標数との関係',
      content:
        '四色定理はオイラー標数 χ=2 の球面で成り立ちます。一般の曲面では「ヒーウッドの公式」により必要な色数が χ から計算できます。位相が変われば必要な色数も変わるのです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        '四色定理＝平面上の地図は4色で塗り分け可能。\n\nポイント：\n- コンピュータ支援証明の先駆け\n- グラフ理論と位相の交差点\n- 曲面の種類で必要色数が変わる\n\n自分で塗り分けに挑戦しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-four-color-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
