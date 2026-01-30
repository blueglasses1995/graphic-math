import { Tutorial } from '../types';

export const differenceTutorial: Tutorial = {
  id: 'difference',
  title: '差集合',
  description: '一方の集合からもう一方を取り除く演算（A \\ B）を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '引き算する集合',
      content:
        'ベン図の左の円から、重なっている部分が消えていきます。\n\n残った部分が「差集合」です。\n\n「Aにはあるけど、Bにはないもの」を集めた集合です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '差集合を操作しよう',
      content:
        '要素を自由に動かして、差集合がどう変わるか試しましょう。\n\nBに入れると、Aの差集合から消えます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-basic',
      title: '差集合の基本',
      content:
        'A = {1, 2, 3, 4}, B = {3, 4, 5} のとき：\n\nA \\ B = {1, 2}（AからBの要素を除く）\nB \\ A = {5}（BからAの要素を除く）\n\n差集合は順序が大事です。A \\ B ≠ B \\ A が一般的です。',
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
      id: 'example-symmetric',
      title: '対称差',
      content:
        '「どちらか一方だけに属する要素」を集めた集合を対称差といいます。\n\nA △ B = (A \\ B) ∪ (B \\ A)\n\nA = {1, 2, 3}, B = {2, 3, 4} のとき：\nA △ B = {1, 4}\n\nベン図では「重なっていない部分」に相当します。排他的論理和（XOR）に対応します。',
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
      title: '考えてみよう',
      content: 'A = {1, 2, 3, 4, 5}, B = {2, 4, 6} のとき A \\ B は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A = {1, 2, 3, 4, 5}, B = {2, 4, 6} のとき A \\ B = ?',
        options: [
          { id: 'a', label: '{1, 3, 5}', correct: true },
          { id: 'b', label: '{1, 3, 5, 6}', correct: false },
          { id: 'c', label: '{2, 4}', correct: false },
          { id: 'd', label: '{6}', correct: false },
        ],
        explanation:
          '正解は {1, 3, 5} です。\n\nAから、Bにも含まれる要素（2, 4）を取り除きます。6はAにないので関係ありません。',
      },
    },
    {
      id: 'alternate',
      title: 'プログラミングでの差集合',
      content:
        'プログラミングでもよく使います。\n\n・Python: {1,2,3,4,5} - {2,4,6}  # {1,3,5}\n・SQL: EXCEPT演算子\n\n「新しいユーザー一覧から既存ユーザーを除く」など、実務でも頻出の操作です。',
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
        '差集合のポイント：\n\n・A \\ B = 「Aに属するがBに属さない要素」の集合\n・順序が大事: A \\ B ≠ B \\ A\n・対称差 A △ B = 「どちらか一方だけ」（XOR）\n\n次は「補集合」── 全体集合から見た「残り」を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
