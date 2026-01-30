import { Tutorial } from '../types';

export const neighborhoodTutorial: Tutorial = {
  id: 'neighborhood',
  title: '近傍のイメージ',
  description: 'ある点の「すぐそば」を正確に定義する――近傍の概念',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '点の周りの小さな世界',
      content:
        '点の周りに小さな円が現れ、だんだん縮んでいきます。どんなに小さくしても、その中に他の点がある――これが近傍の感覚です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-neighborhood-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '点を動かして、その点の近傍（小さな円）がどう変わるか観察しましょう。スライダーで近傍の半径を変えられます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-neighborhood-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ε-近傍',
      content:
        '点 x の ε-近傍とは、x からの距離が ε 未満のすべての点の集合です。記号では B(x, ε) = {y | d(x,y) < ε}。2次元なら小さな円盤、3次元なら小さな球です。',
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
      title: '近傍と開集合の関係',
      content:
        '開集合は「すべての点が内点」の集合。内点とは「ε-近傍がまるごと集合に含まれるような点」。近傍は開集合を定義するための基本パーツです。',
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
        '閉区間 [0, 1] の端点 0 に近傍を取ると、近傍は [0, 1] の中に収まる？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '0 の近傍は [0, 1] に収まる？',
        options: [
          { id: 'a', label: '収まる', correct: false },
          { id: 'b', label: '収まらない（負の方向にはみ出す）', correct: true },
          { id: 'c', label: '近傍は取れない', correct: false },
          { id: 'd', label: '半径による', correct: false },
        ],
        explanation:
          '0のε-近傍は(-ε, ε)なので、必ず負の方向にはみ出します。だから0は[0,1]の内点ではなく境界点です。',
      },
    },
    {
      id: 'alternate',
      title: '懐中電灯で考える',
      content:
        '暗闇で懐中電灯を足元に向けると、あなたの周りだけ明るくなります。この明るい範囲が近傍。懐中電灯の光が壁にぶつからなければ、あなたは「内点」にいます。',
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
        '近傍＝ある点の「すぐそば」の領域。\n\nポイント：\n- ε-近傍は半径εの開いた球\n- 開集合のすべての点は内点\n- 近傍の概念が位相の基礎を支える\n\n点と近傍の関係を体感しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-neighborhood-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
