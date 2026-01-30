import { Tutorial } from '../types';

export const boxPlotTutorial: Tutorial = {
  id: 'box-plot',
  title: '箱ひげ図',
  description: 'データの五数要約を箱ひげ図で視覚的に理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '5つの数でデータを要約',
      content:
        '箱ひげ図は、たった5つの数値でデータの全体像を描きます。\n\n最小値、第1四分位数(Q1)、中央値、第3四分位数(Q3)、最大値。\n\nこの「五数要約」で、データの中心・ばらつき・外れ値が一目でわかります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'データ点を追加・移動して、箱ひげ図がどう変わるか試しましょう。\n\n極端な値を追加すると「ひげ」や「外れ値」はどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '箱の読み方',
      content:
        'データ: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20\n\n最小値=2, Q1=6, 中央値=11, Q3=16, 最大値=20\n\n箱の左端がQ1、右端がQ3、中の線が中央値。\n箱の幅(Q3-Q1)を四分位範囲(IQR)と呼びます。\n\nIQR = 16-6 = 10。データの真ん中50%がこの範囲に入っています。',
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
      title: '外れ値の検出',
      content:
        '箱ひげ図は外れ値を自動的に検出します。\n\nQ1 - 1.5×IQR より小さい値、Q3 + 1.5×IQR より大きい値が外れ値です。\n\n例えば IQR=10 なら、Q1-15 より小さい値や Q3+15 より大きい値は外れ値として点で表示されます。\n\nひげはこの範囲内の最小値・最大値まで伸びます。',
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
        '箱が右に寄っていて左のひげが長い箱ひげ図。このデータの分布はどんな形？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '箱が右寄りで左のひげが長い場合、分布はどんな形ですか？',
        options: [
          { id: 'a', label: '右に歪んでいる', correct: false },
          { id: 'b', label: '左に歪んでいる', correct: true },
          { id: 'c', label: '左右対称', correct: false },
          { id: 'd', label: '判断できない', correct: false },
        ],
        explanation:
          '正解は「左に歪んでいる」です。\n\n左のひげが長いということは、小さい方向に裾が長い分布です。\n\n箱ひげ図の非対称性から、ヒストグラムを描かなくても分布の歪みがわかります。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：グループ比較',
      content:
        '箱ひげ図の最大の強みは、複数のグループを並べて比較できることです。\n\n3クラスのテスト結果を3つの箱ひげ図で並べれば、\n・どのクラスが高得点か（中央値の比較）\n・どのクラスがばらつきが大きいか（箱の大きさの比較）\nが一目瞭然です。\n\nヒストグラムを3つ重ねるより遥かに見やすいのです。',
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
      id: 'summary',
      title: 'まとめ',
      content:
        '箱ひげ図は五数要約（最小, Q1, 中央値, Q3, 最大）でデータを可視化します。\n\n箱 = データの真ん中50%\nひげ = 外れ値を除いた範囲\n点 = 外れ値\n\nグループ間の比較に特に有用です。\n\n次の単元では、2つの変数の関係を見る散布図と相関を学びます。',
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
