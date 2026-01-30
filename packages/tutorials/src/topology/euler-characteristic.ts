import { Tutorial } from '../types';

export const eulerCharacteristicTutorial: Tutorial = {
  id: 'euler-characteristic',
  title: 'オイラー標数',
  description: 'V - E + F = 2 の秘密――形の不変量オイラー標数',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: 'V - E + F はいつも同じ？',
      content:
        '立方体・正四面体・正十二面体。形は違うのに V - E + F を計算すると全部2になります。この不思議な数をアニメーションで確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-euler-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '多面体の頂点・辺・面を数えて、V - E + F を計算してみましょう。頂点を追加したり辺を分割しても値が変わらないことを確認できます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-euler-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'オイラーの多面体公式',
      content:
        'V - E + F = 2。頂点数(V) - 辺数(E) + 面数(F) = 2。球面に同相な任意の多面体でこれが成り立ちます。正四面体: 4 - 6 + 4 = 2。立方体: 8 - 12 + 6 = 2。',
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
      title: 'オイラー標数と種数',
      content:
        'オイラー標数 χ = 2 - 2g（gは種数）。球: χ=2、トーラス: χ=0、二重トーラス: χ=-2。穴が増えるとオイラー標数は減ります。',
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
        'トーラス上の三角形分割で V=9, E=27 のとき、面Fはいくつ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'トーラス上で V=9, E=27 のとき F=?',
        options: [
          { id: 'a', label: '16', correct: false },
          { id: 'b', label: '18', correct: true },
          { id: 'c', label: '20', correct: false },
          { id: 'd', label: '22', correct: false },
        ],
        explanation:
          'トーラスの χ=0 なので V - E + F = 0。9 - 27 + F = 0、F = 18 です。',
      },
    },
    {
      id: 'alternate',
      title: '地図で考える',
      content:
        '球面上の地図を考えましょう。国（面）、国境線（辺）、交差点（頂点）。どんな地図を描いても V - E + F = 2 になります。地図の細かさに関係なく一定――これが位相的不変量の力です。',
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
        'オイラー標数 χ = V - E + F は位相的不変量。\n\nポイント：\n- 球面: χ=2\n- χ = 2 - 2g（種数との関係）\n- 分割の仕方に依存しない\n\n多面体を操作してオイラー標数を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-euler-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
