import { Tutorial } from '../types';

export const propositionalLogicTutorial: Tutorial = {
  id: 'propositional-logic',
  title: '命題論理',
  description: '真偽を扱う論理の基礎と論理結合子を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '数学の言葉で考える',
      content:
        '「もし雨が降ったら、傘を持つ」\n\nこの文は真でしょうか、偽でしょうか？\n\n日常言語は曖昧ですが、数学では真偽を厳密に定義します。\n\nそのための道具が「命題論理」です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'propositional-logic-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'proposition',
      title: '命題とは',
      content:
        '命題とは、真（True）か偽（False）のどちらか一方が確定する文です。\n\n命題の例：「2は素数である」（真）、「3 > 5」（偽）\n命題でない例：「xは偶数」（xの値による）、「これは面白い」（主観的）\n\n命題を p, q, r などの文字で表します。',
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
      id: 'connectives',
      title: '論理結合子',
      content:
        '命題を組み合わせる記号（論理結合子）：\n\n・否定 ¬p：pの逆。pが真なら偽、偽なら真\n・論理積 p ∧ q：両方真のとき真（AND）\n・論理和 p ∨ q：少なくとも一方が真のとき真（OR）\n・含意 p → q：pが真でqが偽のときだけ偽\n・同値 p ↔ q：真偽が一致するとき真',
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
      id: 'truth-table',
      title: '真理値表',
      content:
        '含意 p → q の真理値表は特に注意が必要です：\n\np=T, q=T → T（雨が降り、傘を持つ：約束通り）\np=T, q=F → F（雨が降り、傘を持たない：約束違反）\np=F, q=T → T（雨降らず、傘を持つ：約束違反ではない）\np=F, q=F → T（雨降らず、傘も持たない：約束違反ではない）\n\n「前提が偽なら全体は真」がポイントです。',
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
      id: 'quiz',
      title: 'クイズ',
      content: '含意の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'p → q が偽になるのはどの場合？',
        options: [
          { id: 'a', label: 'p=True, q=True', correct: false },
          { id: 'b', label: 'p=True, q=False', correct: true },
          { id: 'c', label: 'p=False, q=True', correct: false },
          { id: 'd', label: 'p=False, q=False', correct: false },
        ],
        explanation:
          '正解は p=True, q=False です。含意は「前提が真で結論が偽」の場合のみ偽になります。前提が偽の場合は常に真です。',
      },
    },
    {
      id: 'tautology',
      title: 'トートロジーと矛盾',
      content:
        'トートロジー（恒真式）：常に真な命題。例：p ∨ ¬p\n矛盾（恒偽式）：常に偽な命題。例：p ∧ ¬p\n\n重要なトートロジー：\n・ド・モルガンの法則：¬(p∧q) ↔ (¬p∨¬q)\n・対偶：(p→q) ↔ (¬q→¬p)\n・二重否定：¬¬p ↔ p',
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
        '・命題：真か偽が確定する文\n・論理結合子：¬, ∧, ∨, →, ↔\n・含意 p→q は「pが真でqが偽」のときだけ偽\n・トートロジーは常に真\n\n命題論理はプログラミングの条件分岐やデータベースの基盤です。\n\n次は、述語論理と量化子を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'propositional-logic-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
