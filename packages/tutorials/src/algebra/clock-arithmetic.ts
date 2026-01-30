import { Tutorial } from '../types';

export const clockArithmeticTutorial: Tutorial = {
  id: 'clock-arithmetic',
  title: '時計の算数',
  description: '時計の文字盤を使って剰余演算の直感を養う',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '時計は12で戻る',
      content:
        '今10時です。5時間後は何時？\n\n10 + 5 = 15 ですが、時計では「3時」です。\n\n15 を 12 で割った余りは 3。\n\nこの「12で一周して戻る」計算が、代数学への入り口です。',
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
      id: 'clock-addition',
      title: '時計の足し算',
      content:
        '時計の世界では:\n\n10 + 5 = 3\n7 + 8 = 3\n11 + 1 = 0（12時 = 0時）\n\n普通の足し算とは違いますが、ちゃんとしたルールがあります。\n\n「12で割った余り」で答えが決まります。',
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
      id: 'mod-notation',
      title: 'mod という記法',
      content:
        'この計算を数学では「mod」を使って書きます。\n\n10 + 5 ≡ 3 (mod 12)\n\n「10 + 5 は 12 を法として 3 に等しい」と読みます。\n\n≡ は「合同」を意味する記号です。\n\n15 と 3 は普通の意味では違う数ですが、mod 12 の世界では「同じ」です。',
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
      id: 'other-clocks',
      title: '12以外の時計',
      content:
        '12以外の数でも同じことができます。\n\nmod 3 の世界: {0, 1, 2}\n  1 + 2 = 0, 2 + 2 = 1\n\nmod 5 の世界: {0, 1, 2, 3, 4}\n  3 + 4 = 2, 4 + 4 = 3\n\n三角形の回転 {e, r, r²} は実は mod 3 の足し算と同じ構造です！',
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
      id: 'connection-to-rotation',
      title: '回転との対応',
      content:
        '三角形の回転と mod 3 の対応:\n\ne ↔ 0（何もしない）\nr ↔ 1（120°回転 = 1ステップ）\nr² ↔ 2（240°回転 = 2ステップ）\n\nr・r = r² は 1 + 1 = 2 に対応\nr²・r = e は 2 + 1 = 0 (mod 3) に対応\n\n見た目は違うのに、計算の構造が同じ。これが「同型」の原型です。',
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
      id: 'quiz',
      title: '確認クイズ',
      content: '時計の算数を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'mod 5 の世界で 4 + 3 はいくつですか？',
        options: [
          { id: 'a', label: '7', correct: false },
          { id: 'b', label: '2', correct: true },
          { id: 'c', label: '1', correct: false },
          { id: 'd', label: '0', correct: false },
        ],
        explanation:
          '正解は 2 です。4 + 3 = 7 で、7 を 5 で割った余りは 2 です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '時計の算数のポイント:\n\n1. 一定の数で「一周して戻る」計算体系\n2. mod n は n で割った余りの世界\n3. 三角形の回転と mod 3 の足し算は同じ構造\n\n「見た目は違うが構造が同じ」── この発見こそが代数学の醍醐味です。\n\n次は mod（剰余算）をもっと正式に学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
