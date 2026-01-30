import { Tutorial } from '../types';

export const torusWorldTutorial: Tutorial = {
  id: 'torus-world',
  title: '【実践】トーラスの世界',
  description: '上下左右がつながる世界――トーラスの幾何と生活',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '画面の端を抜けると反対側へ',
      content:
        'パックマンのように画面の端を出ると反対側に現れる。この世界はトーラス（ドーナツ面）です。長方形の辺を貼り合わせる過程をアニメーションで観察しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-torus-world-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'トーラスの世界で点を動かしてみましょう。端を超えると反対側に出現します。最短経路が直感と異なることに注目してください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-torus-world-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '同一視による構成',
      content:
        '長方形の上辺と下辺を貼り合わせ→筒。さらに左辺と右辺を貼り合わせ→トーラス。「同一視」という操作で平面からトーラスが生まれます。',
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
      title: 'トーラスの幾何',
      content:
        'トーラスの基本群は Z×Z。種数 g=1、オイラー標数 χ=0。2つの独立なループ（経線と緯線）があり、その巻き数のペアで位置を指定できます。',
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
        'トーラス上の地図は最大何色必要？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'トーラス上の地図の彩色数は最大？',
        options: [
          { id: 'a', label: '4色', correct: false },
          { id: 'b', label: '5色', correct: false },
          { id: 'c', label: '7色', correct: true },
          { id: 'd', label: '8色', correct: false },
        ],
        explanation:
          'トーラス上ではヒーウッドの公式より最大7色が必要です。平面の4色より多い！曲面の位相が彩色に影響します。',
      },
    },
    {
      id: 'alternate',
      title: 'ゲームの世界で考える',
      content:
        '多くの古典的ゲーム（パックマン、アステロイド）の世界はトーラスです。画面の端が反対側とつながる。宇宙がトーラスだったら、望遠鏡で自分の後ろ姿が見えるかもしれません。',
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
        'トーラス＝長方形の辺を貼り合わせたドーナツ面。\n\nポイント：\n- パックマンの世界＝トーラス\n- 基本群 Z×Z、χ=0、g=1\n- 7色の地図彩色が可能\n\nトーラスの世界を探索しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-torus-world-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
