import { Tutorial } from '../types';

export const topologicalSpaceTutorial: Tutorial = {
  id: 'topological-space',
  title: '位相空間とは',
  description: '開集合の公理で「形」を定義する――位相空間の基本',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '3つのルールで世界を作る',
      content:
        '集合と開集合の族。たった3つの公理を満たせば位相空間が生まれます。アニメーションで公理を1つずつ確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-space-axioms-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '開集合を追加・削除して、3つの公理が満たされるか確認しましょう。公理が破れると警告が出ます。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-space-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '3つの公理',
      content:
        '(1) 空集合と全体集合は開集合。(2) 開集合の任意個の和集合は開集合。(3) 開集合の有限個の共通部分は開集合。この3つだけで「近さ」「連続性」が語れます。',
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
      title: '密着位相と離散位相',
      content:
        '密着位相：開集合は空集合と全体だけ。最も粗い位相。離散位相：すべての部分集合が開集合。最も細かい位相。同じ集合でも位相の入れ方で性質が激変します。',
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
      id: 'predict',
      title: '予測してみよう',
      content:
        '集合 {a, b, c} に位相 {∅, {a}, {a,b,c}} を入れました。これは位相空間？',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '{∅, {a}, {a,b,c}} は位相になる？',
        options: [
          { id: 'a', label: 'なる', correct: true },
          { id: 'b', label: 'ならない（和集合の公理に反する）', correct: false },
          { id: 'c', label: 'ならない（共通部分の公理に反する）', correct: false },
          { id: 'd', label: 'ならない（空集合がないから）', correct: false },
        ],
        explanation:
          '空集合と全体集合を含み、和集合・共通部分の公理もすべて満たすので、立派な位相空間です。',
      },
    },
    {
      id: 'alternate',
      title: '地図帳で考える',
      content:
        '世界地図帳を考えましょう。各ページ（開集合）は地球の一部を示します。すべてのページを合わせると地球全体（全体集合）。何もない白紙は空集合。ページを組み合わせても地図帳の一部になる――これが位相空間の公理です。',
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
        '位相空間＝集合＋開集合の族（3公理を満たす）。\n\nポイント：\n- 空集合と全体集合は必ず開集合\n- 和集合は任意個OK、共通部分は有限個\n- 同じ集合でも位相が違えば別の空間\n\n公理を確認してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-space-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
