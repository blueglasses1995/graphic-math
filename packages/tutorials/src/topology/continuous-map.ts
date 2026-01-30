import { Tutorial } from '../types';

export const continuousMapTutorial: Tutorial = {
  id: 'continuous-map',
  title: '連続写像',
  description: '「近い点は近い点に移る」――位相における連続性の本質',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '引き裂かない変換',
      content:
        '平面上の領域がゆっくり変形していきます。近くにあった点は変形後も近くにある。これが連続写像のイメージです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-continuous-map-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '点をドラッグすると、写像先での位置がリアルタイムで表示されます。連続な写像と不連続な写像を切り替えて違いを体感しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-continuous-map-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '開集合の逆像',
      content:
        '位相的に連続とは「開集合の逆像が開集合」ということ。ε-δ論法の一般化です。出力側の開集合を引き戻しても開集合のまま――これが位相での連続性の定義。',
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
      title: '連続でない例',
      content:
        'ジャンプする関数、例えば符号関数 sgn(x) は0で不連続。0の近くの点が+1と-1に引き裂かれます。近い点が遠くに飛ぶ＝連続でない。',
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
        'f(x) = x² は連続写像？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x) = x² は連続？',
        options: [
          { id: 'a', label: '連続', correct: true },
          { id: 'b', label: '不連続', correct: false },
          { id: 'c', label: 'x=0だけ不連続', correct: false },
          { id: 'd', label: '定義域による', correct: false },
        ],
        explanation:
          'x²はすべての実数で連続です。近い入力は近い出力を生みます。開集合の逆像も常に開集合です。',
      },
    },
    {
      id: 'alternate',
      title: 'ゴムバンドで考える',
      content:
        'ゴムバンドの上にマーカーで印をつけます。バンドを伸ばしたりねじったりしても、隣り合う印は隣り合ったまま。これが連続写像。バンドを切ったら不連続です。',
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
        '連続写像＝開集合の逆像が開集合になる写像。\n\nポイント：\n- 近い点は近い点に移る\n- 引き裂かない変換\n- 位相の構造を保つ\n\n連続と不連続の違いを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-continuous-map-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
