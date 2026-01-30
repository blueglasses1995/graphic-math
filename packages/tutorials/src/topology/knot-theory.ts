import { Tutorial } from '../types';

export const knotTheoryTutorial: Tutorial = {
  id: 'knot-theory',
  title: '【実践】結び目理論',
  description: 'ロープの結び目を数学で分類する――結び目理論入門',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '結び目は同じ？違う？',
      content:
        '三葉結び目と八の字結び目が回転しながら表示されます。見た目は似ていますが、位相的に異なります。連続変形では一方を他方に変えられません。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-knot-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '結び目を回転・変形させて観察しましょう。交差の数を数えて結び目を分類してみてください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-knot-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '結び目不変量',
      content:
        '結び目を区別するために不変量を使います。交差数、三色彩色可能性、ジョーンズ多項式など。不変量が異なれば確実に別の結び目です。',
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
      title: 'ライデマイスター移動',
      content:
        '結び目の連続変形は3種類の基本操作（ライデマイスター移動）で表せます。I: ねじり追加/除去。II: 2本の交差追加/除去。III: 1本を交差の上で滑らせる。',
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
        '三葉結び目の最小交差数は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '三葉結び目の最小交差数は？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '3', correct: true },
          { id: 'c', label: '4', correct: false },
          { id: 'd', label: '5', correct: false },
        ],
        explanation:
          '三葉結び目（trefoil knot）は最小交差数3の最も単純な非自明結び目です。名前の由来でもあります。',
      },
    },
    {
      id: 'alternate',
      title: 'DNAと結び目',
      content:
        'DNAは細胞内で複雑に絡まっています。酵素（トポイソメラーゼ）がDNAの結び目を解く仕組みは結び目理論で解析されています。数学が生命科学に直結する例です。',
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
        '結び目理論＝3次元空間内の閉曲線の位相的分類。\n\nポイント：\n- 不変量で結び目を区別\n- ライデマイスター移動が基本操作\n- DNA解析など実用応用あり\n\n結び目を操作してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-knot-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
