import { Tutorial } from '../types';

export const combinationTutorial: Tutorial = {
  id: 'combination',
  title: '組合せ',
  description: '選び方の数を体系的に数える組合せの考え方',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '選び方は何通り？',
      content:
        '5人から3人の委員を選ぶ方法は？順列と違い、誰が先かは関係ありません。ABC と BAC は同じ選び方。順列の重複を除いたものが組合せです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'formula',
      title: '組合せの公式',
      content:
        'nCr = n! / (r! × (n-r)!) = nPr / r!\n\n5C3 = 5! / (3! × 2!) = 120 / (6 × 2) = 10\n\n順列(60通り)を、3人の並び替え(3!=6)で割ると10通りになります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'symmetry',
      title: '組合せの対称性',
      content:
        'nCr = nC(n-r)\n\n10C3 = 10C7 = 120\n\n3人選ぶことは、残り7人を「選ばない」ことと同じだから。パスカルの三角形にも現れる美しい対称性です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'パスカルの三角形',
      content:
        'nCr はパスカルの三角形に並びます。nとrを変えて値がどう変化するか確認しましょう。上の2つの数を足すと下の数になる規則があります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'トランプ52枚から5枚選ぶ方法は何通り？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '52枚から5枚のカードを選ぶ方法は？',
        options: [
          { id: 'a', label: '2,598,960', correct: true },
          { id: 'b', label: '311,875,200', correct: false },
          { id: 'c', label: '260', correct: false },
          { id: 'd', label: '6,497,400', correct: false },
        ],
        explanation:
          '52C5 = 52! / (5! × 47!) = 2,598,960 通りです。ポーカーの全手の数です。',
      },
    },
    {
      id: 'applications',
      title: '組合せの応用',
      content:
        '確率計算での組合せの使い方:\n\nP(ポーカーでフルハウス) = (フルハウスの数) / 52C5\n\n組合せは「場合の数」を正確に数えるための基本ツールです。宝くじの当選確率も組合せで計算できます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '組合せのポイント:\n\n• nCr = n! / (r!(n-r)!)\n• 順序を無視した選び方の数\n• nCr = nC(n-r) の対称性\n• 確率 = 好ましい組合せ / 全組合せ\n\n順列は「並べる」、組合せは「選ぶ」。この区別が確率計算の鍵です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
