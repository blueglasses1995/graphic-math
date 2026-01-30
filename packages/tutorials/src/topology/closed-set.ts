import { Tutorial } from '../types';

export const closedSetTutorial: Tutorial = {
  id: 'closed-set',
  title: '閉集合とは',
  description: '境界を含む集合――閉集合と開集合の対比で理解する',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '境界を含む領域',
      content:
        '円の内部と円周がどちらも色づいていきます。境界線までしっかり含まれる――これが閉集合のイメージです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-closed-set-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '点をドラッグして、閉集合の境界上に置いてみましょう。境界も集合の一部であることを確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-closed-set-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '閉区間 [0, 1]',
      content:
        '[0, 1] は閉区間です。0も1も含みます。極限を取っても集合の外に出ない――これが閉集合の性質です。0.9, 0.99, 0.999... の極限は1で、ちゃんと集合の中にいます。',
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
      title: '補集合の関係',
      content:
        '閉集合の補集合は開集合、開集合の補集合は閉集合。表裏一体の関係です。(0, 1)の補集合は(-∞, 0] ∪ [1, ∞)で閉集合です。',
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
        '[0, 1) は開集合？閉集合？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '[0, 1) はどんな集合？',
        options: [
          { id: 'a', label: '開集合', correct: false },
          { id: 'b', label: '閉集合', correct: false },
          { id: 'c', label: 'どちらでもない', correct: true },
          { id: 'd', label: '両方（閉開集合）', correct: false },
        ],
        explanation:
          '0を含む（端が閉じている）が1を含まない（端が開いている）。開でも閉でもない集合です。',
      },
    },
    {
      id: 'alternate',
      title: 'フェンスで考える',
      content:
        '牧場にフェンスがある場合を考えましょう。フェンスの内側だけが開集合、フェンスを含めた領域が閉集合。フェンスの上に立てるなら、あなたは閉集合の中にいます。',
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
        '閉集合＝境界を含む集合。極限点をすべて含む。\n\nポイント：\n- [a, b] が典型的な閉集合\n- 補集合が開集合 ⟺ 閉集合\n- 空集合と全体集合は閉集合でもある\n\n開集合との違いを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-closed-set-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
