import { Tutorial } from '../types';

export const probabilitySetsTutorial: Tutorial = {
  id: 'probability-sets',
  title: '【実践】確率と集合',
  description: '確率論における事象を集合として理解する',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '事象は集合',
      content:
        'サイコロを振ります。\n\n「偶数が出る」= {2, 4, 6} という集合。\n「3以下」= {1, 2, 3} という集合。\n\n確率論では、事象は標本空間の部分集合です。',
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
      title: '事象を組み合わせよう',
      content:
        'サイコロの目を使って、様々な事象（集合）を作ってみましょう。\n\n事象の和集合・共通部分が確率にどう影響するか観察してください。',
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
      id: 'example-correspondence',
      title: '集合演算と確率',
      content:
        '標本空間 Ω = {1,2,3,4,5,6}（サイコロ）\n\n集合演算 → 確率の言葉：\n・A ∪ B → 「AまたはBが起きる」\n・A ∩ B → 「AかつBが起きる」\n・Aᶜ → 「Aが起きない」\n・A ∩ B = ∅ → 「AとBは排反」\n\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B)\nこれは包除原理そのものです。',
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
      id: 'example-calculation',
      title: '確率の計算例',
      content:
        'サイコロを1回振るとき：\nA = {偶数} = {2,4,6}, P(A) = 3/6 = 1/2\nB = {3以下} = {1,2,3}, P(B) = 3/6 = 1/2\n\nA ∩ B = {2}, P(A∩B) = 1/6\n\nP(A∪B) = 1/2 + 1/2 - 1/6 = 5/6\n\n確認: A ∪ B = {1,2,3,4,6}, |A∪B|/|Ω| = 5/6 ✓',
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
      title: '練習問題',
      content: 'トランプ52枚から1枚引く。ハートまたは絵札の確率は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ハート(13枚)または絵札(12枚)を引く確率は？（ハートの絵札は3枚）',
        options: [
          { id: 'a', label: '25/52', correct: false },
          { id: 'b', label: '22/52', correct: true },
          { id: 'c', label: '15/52', correct: false },
          { id: 'd', label: '19/52', correct: false },
        ],
        explanation:
          '正解は 22/52 です。\n\nP(ハート∪絵札) = P(ハート) + P(絵札) - P(ハート∩絵札)\n= 13/52 + 12/52 - 3/52 = 22/52\n\n包除原理で重複を引きます。',
      },
    },
    {
      id: 'alternate',
      title: '余事象の活用',
      content:
        '「少なくとも1つ起きる」の計算には余事象が便利です。\n\nP(少なくとも1つ) = 1 - P(1つも起きない)\n\n例: サイコロ3回で少なくとも1回6が出る確率\n= 1 - P(3回とも6以外)\n= 1 - (5/6)³\n= 1 - 125/216\n= 91/216 ≈ 0.421\n\nこれはド・モルガン P(A∪B∪C) = 1 - P(Aᶜ∩Bᶜ∩Cᶜ) の応用です。',
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
        '確率と集合のポイント：\n\n・事象 = 標本空間の部分集合\n・P(A∪B) = P(A) + P(B) - P(A∩B)\n・排反事象: A∩B = ∅ → P(A∪B) = P(A) + P(B)\n・余事象: P(Aᶜ) = 1 - P(A)\n\n次は「論理と集合」の関係を学びます。',
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
