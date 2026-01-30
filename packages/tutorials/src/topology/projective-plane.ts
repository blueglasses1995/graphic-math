import { Tutorial } from '../types';

export const projectivePlaneTutorial: Tutorial = {
  id: 'projective-plane',
  title: '【実践】射影平面',
  description: '平行線が交わる世界――射影平面の位相',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '平行線が出会う',
      content:
        '2本の平行線がどんどん遠くまで伸びていき、無限遠点で出会います。射影平面では平行線が交わるのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-projective-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '射影平面のモデルで直線を描いてみましょう。すべての直線が1点で交わることを確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-projective-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '射影平面の構成',
      content:
        '円盤の境界上の対蹠点を同一視すると射影平面 RP² が得られます。または球面 S² の対蹠点を同一視しても同じ。非向き付け可能な閉曲面です。',
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
      title: '射影平面の性質',
      content:
        'オイラー標数 χ=1。メビウスの帯を含む（射影平面からメビウスの帯を切り出せる）。3次元空間には埋め込めない（自己交差が必要）。',
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
        '射影平面は向き付け可能？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'RP² は向き付け可能？',
        options: [
          { id: 'a', label: '向き付け可能', correct: false },
          { id: 'b', label: '非向き付け可能', correct: true },
          { id: 'c', label: '次元による', correct: false },
          { id: 'd', label: '構成法による', correct: false },
        ],
        explanation:
          '射影平面はメビウスの帯を含むので非向き付け可能です。左右の区別がつかない世界です。',
      },
    },
    {
      id: 'alternate',
      title: 'コンピュータグラフィックスで考える',
      content:
        '射影変換はCGの基礎です。3D空間の点をスクリーンに投影する操作は射影幾何学そのもの。遠くのものは小さく見える（透視投影）は射影平面の性質を使っています。',
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
        '射影平面＝無限遠点を追加して平行線を交わらせた平面。\n\nポイント：\n- 対蹠点の同一視で構成\n- 非向き付け可能、χ=1\n- CGの透視投影と深い関係\n\n射影平面の世界を探索しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-projective-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
