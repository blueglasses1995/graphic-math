import { Tutorial } from '../types';

export const meanMedianModeTutorial: Tutorial = {
  id: 'mean-median-mode',
  title: '平均・中央値・最頻値',
  description: 'データの「真ん中」を表す3つの指標を理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '「真ん中」は一つじゃない',
      content:
        'データの真ん中を表す方法は一つではありません。\n\n平均（mean）、中央値（median）、最頻値（mode）── この3つは異なる「真ん中」を示します。\n\nどれが正しいかではなく、どれが適切かを見極めることが大切です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'mean-median-mode-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'データ点を動かして、平均・中央値・最頻値がどう変わるか観察しましょう。\n\n極端な値（外れ値）を追加するとどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'mean-median-mode-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '平均の計算',
      content:
        'テストの点数: 60, 70, 80, 90, 100\n\n平均 = (60+70+80+90+100) ÷ 5 = 400 ÷ 5 = 80\n\n平均は「全部足して個数で割る」。シンプルですが、外れ値に弱い欠点があります。\n\nもし100点が1000点（入力ミス）だったら？平均は260に跳ね上がります。',
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
      title: '中央値と最頻値',
      content:
        '中央値は、データを並べたときの真ん中の値です。\n\n60, 70, 80, 90, 100 → 中央値は80\n\n最頻値は、最も多く出現する値です。\n\n70, 70, 80, 90, 100 → 最頻値は70\n\n中央値は外れ値に強い（ロバスト）。年収の「真ん中」を知りたいときは中央値が適切です。',
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
        'データ: 1, 2, 3, 4, 100\n\n平均と中央値はそれぞれいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'データ 1, 2, 3, 4, 100 の平均と中央値は？',
        options: [
          { id: 'a', label: '平均=22, 中央値=3', correct: true },
          { id: 'b', label: '平均=3, 中央値=22', correct: false },
          { id: 'c', label: '平均=22, 中央値=22', correct: false },
          { id: 'd', label: '平均=3, 中央値=3', correct: false },
        ],
        explanation:
          '正解は 平均=22, 中央値=3 です。\n\n平均 = (1+2+3+4+100)/5 = 22。外れ値100に引っ張られています。\n中央値 = 3（真ん中の値）。外れ値の影響を受けません。\n\nこのように平均と中央値が大きくずれるとき、データに偏りがあることを示しています。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：重心としての平均',
      content:
        '平均を「データの重心」と考えることもできます。\n\n数直線上にデータ点を置き、その重心（バランスが取れる点）が平均です。\n\n中央値は「左右に同数のデータがある点」。\n最頻値は「最も密度が高い点」。\n\n3つの指標が一致するとき、データは左右対称です。ずれているときは歪み（skew）があります。',
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
        '平均：全データの合計 ÷ 個数。外れ値に敏感。\n中央値：並べたときの真ん中。外れ値に強い。\n最頻値：最も頻繁に出現する値。\n\n対称なデータでは3つがほぼ一致します。\n歪んだデータでは使い分けが重要です。\n\n次の単元では、データの「ばらつき」を数値化する分散と標準偏差を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'mean-median-mode-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
