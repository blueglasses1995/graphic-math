import { Tutorial } from '../types';

export const compactnessTutorial: Tutorial = {
  id: 'compactness',
  title: 'コンパクト性',
  description: '「有限で覆える」が意味する深い性質――コンパクト性の直感',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '有限個で覆えるか',
      content:
        '無限個の開集合で空間を覆い、そこから有限個を選んでもまだ覆えるか。この性質がコンパクト性です。覆いが縮んでいくアニメーションを観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-compactness-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '開集合を追加・削除して、空間が有限個の開集合で覆えるか確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-compactness-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'コンパクトの定義',
      content:
        '空間Xがコンパクトとは、Xの任意の開被覆から有限部分被覆が取れること。難しく聞こえますが、要は「有限のリソースで全体をカバーできる」ということ。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ハイネ・ボレルの定理',
      content:
        'R^n の部分集合がコンパクト ⟺ 有界かつ閉。閉区間 [0,1] はコンパクト。開区間 (0,1) はコンパクトでない（端に向かう開被覆を有限に減らせない）。',
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
        '球面 S² (球の表面) はコンパクト？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '球面 S² はコンパクト？',
        options: [
          { id: 'a', label: 'コンパクト', correct: true },
          { id: 'b', label: 'コンパクトでない', correct: false },
          { id: 'c', label: '有界だが閉でない', correct: false },
          { id: 'd', label: '閉だが有界でない', correct: false },
        ],
        explanation:
          '球面は有界（半径以内に収まる）かつ閉（境界を全て含む）なので、ハイネ・ボレルの定理よりコンパクトです。',
      },
    },
    {
      id: 'alternate',
      title: '傘で考える',
      content:
        '雨の日に列に並ぶ人々。全員を傘で覆いたい。列が有限の長さなら有限本の傘で覆える（コンパクト）。列が無限に続くなら有限本では無理（非コンパクト）。',
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
        'コンパクト＝任意の開被覆から有限部分被覆が取れる。\n\nポイント：\n- R^n では「有界かつ閉」と同値\n- コンパクト集合上の連続関数は最大値・最小値を持つ\n- 解析学の多くの定理の背景にある\n\n覆いを操作して感覚をつかみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-compactness-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
