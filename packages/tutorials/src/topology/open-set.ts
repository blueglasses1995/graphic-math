import { Tutorial } from '../types';

export const openSetTutorial: Tutorial = {
  id: 'open-set',
  title: '開集合とは',
  description: '境界を含まない集合――開集合の直感的な理解',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '境界のない領域',
      content:
        '円の内部が色づいていきます。境界線（円周）は含まれていません。どこまでも内側に余裕がある――これが開集合のイメージです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-open-set-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '点をドラッグして、開集合の中に入っているか確認しましょう。境界の近くに行くとどうなるか試してみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-open-set-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '数直線の開区間',
      content:
        '(0, 1) は開区間です。0も1も含みません。0.999...は含まれますが、1ちょうどは含まれない。端点に「壁がない」のが開集合の特徴です。',
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
      title: '内点の性質',
      content:
        '開集合のどの点を選んでも、その周りに小さな「余裕」があります。つまり、その点を中心とする小さな円（近傍）がまるごと集合に含まれる。これが開集合の正確な定義です。',
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
        '実数全体 R は開集合でしょうか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '実数全体 R は開集合？',
        options: [
          { id: 'a', label: '開集合である', correct: true },
          { id: 'b', label: '開集合ではない', correct: false },
          { id: 'c', label: '閉集合である（開集合ではない）', correct: false },
          { id: 'd', label: '定義できない', correct: false },
        ],
        explanation:
          'Rのどの点にも近傍が取れるので開集合です。実はRは開集合かつ閉集合（閉開集合）です。',
      },
    },
    {
      id: 'alternate',
      title: '部屋の中で考える',
      content:
        '部屋の中にいるとしましょう。壁に触れていなければ、あなたはいつでも少しだけ動く余裕があります。部屋の内部（壁を除いた空間）が開集合。壁まで含めると閉集合です。',
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
        '開集合＝境界を含まない集合。どの点にも「余裕」がある。\n\nポイント：\n- 端点を含まない区間 (a, b) が典型例\n- 任意の点の周りに小さな近傍が取れる\n- 空集合と全体集合は常に開集合\n\n点を動かして境界の感覚をつかみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-open-set-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
