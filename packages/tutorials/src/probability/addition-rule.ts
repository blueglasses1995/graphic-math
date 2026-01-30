import { Tutorial } from '../types';

export const additionRuleTutorial: Tutorial = {
  id: 'addition-rule',
  title: '確率の足し算',
  description: '和事象の確率と加法定理を理解する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '「または」の確率',
      content:
        'サイコロで「1が出る、または6が出る」確率は？直感的に 1/6 + 1/6 = 2/6 = 1/3 ですね。これが確率の加法です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'addition-rule-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'mutually-exclusive',
      title: '排反事象の加法',
      content:
        'AとBが排反（同時に起こらない）のとき:\n\nP(A ∪ B) = P(A) + P(B)\n\nサイコロで「1が出る」と「6が出る」は排反なので:\nP(1 or 6) = 1/6 + 1/6 = 2/6',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'general-addition',
      title: '一般の加法定理',
      content:
        'AとBが排反でないとき、重複を引く必要があります:\n\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B)\n\n例: 52枚のトランプから「ハートまたは絵札」を引く確率\nP(ハート) = 13/52, P(絵札) = 12/52\nP(ハート ∩ 絵札) = 3/52\nP = 13/52 + 12/52 - 3/52 = 22/52',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'ベン図で確認',
      content:
        '2つの事象の重なり具合を動かして、P(A∪B) がどう変わるか観察しましょう。重なりが大きいほど、単純に足すと過大になることが分かります。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'addition-rule-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'P(A)=0.3, P(B)=0.4, P(A∩B)=0.1 のとき P(A∪B) は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'P(A)=0.3, P(B)=0.4, P(A∩B)=0.1 のとき P(A∪B) は？',
        options: [
          { id: 'a', label: '0.7', correct: false },
          { id: 'b', label: '0.6', correct: true },
          { id: 'c', label: '0.5', correct: false },
          { id: 'd', label: '0.8', correct: false },
        ],
        explanation:
          'P(A∪B) = 0.3 + 0.4 - 0.1 = 0.6 です。重複分を引くのを忘れないように。',
      },
    },
    {
      id: 'three-events',
      title: '3事象の場合',
      content:
        '3つの事象の場合はさらに複雑になります:\n\nP(A∪B∪C) = P(A) + P(B) + P(C)\n  - P(A∩B) - P(A∩C) - P(B∩C)\n  + P(A∩B∩C)\n\nこれは包除原理（inclusion-exclusion principle）と呼ばれます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '確率の足し算のルール:\n\n• 排反事象: P(A∪B) = P(A) + P(B)\n• 一般: P(A∪B) = P(A) + P(B) - P(A∩B)\n• 重複を引くことを忘れない\n\n「または」は足し算、でも重複に注意！',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'addition-rule-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
