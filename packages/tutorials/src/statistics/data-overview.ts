import { Tutorial } from '../types';

export const dataOverviewTutorial: Tutorial = {
  id: 'data-overview',
  title: 'データを見る',
  description: 'データを観察し、全体像を把握する最初のステップを学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: 'データの海へようこそ',
      content:
        '私たちの周りにはデータがあふれています。\n\n気温、テストの点数、商品の売上……。\n\nでもデータをただ眺めても意味は見えません。\n\n統計学は「データの声を聴く技術」です。まずはデータを見ることから始めましょう。',
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
        '画面にデータ点が散らばっています。\n\nデータ点をドラッグして動かしてみてください。\n\nデータの「形」や「かたまり」が見えてきますか？',
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
      title: '数値データの例',
      content:
        'クラス30人のテストの点数を考えましょう。\n\n60, 72, 85, 91, 45, 78, 83, 67, 90, 55 ...\n\nこの数字の羅列から何がわかりますか？\n\nまず「最小値」と「最大値」を見ます。45点〜91点。\n\n次に「だいたい真ん中あたり」はどこか。これが統計の出発点です。',
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
      title: 'データの種類',
      content:
        'データには大きく2種類あります。\n\n【量的データ】数値で表せるもの（身長、体重、気温）\n【質的データ】カテゴリで表すもの（血液型、好きな色）\n\n量的データは計算ができます（平均など）。\n質的データは数えることしかできません（A型が何人、など）。\n\nこの区別が統計の第一歩です。',
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
        '次のうち「量的データ」はどれでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち量的データはどれですか？',
        options: [
          { id: 'a', label: '出身都道府県', correct: false },
          { id: 'b', label: '1日の歩数', correct: true },
          { id: 'c', label: '好きな食べ物', correct: false },
          { id: 'd', label: '血液型', correct: false },
        ],
        explanation:
          '正解は「1日の歩数」です。\n\n歩数は数値で表され、平均や合計を計算できます。\n\n出身地、好きな食べ物、血液型はカテゴリ（質的データ）です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：要約統計量',
      content:
        'データ全体を少数の数値で要約する方法があります。\n\n代表値：平均、中央値、最頻値\nばらつき：分散、標準偏差、範囲\n形状：歪度、尖度\n\nこれらを「要約統計量」と呼びます。\n\nデータの「どこに集まっているか」「どれだけ散らばっているか」「どんな形をしているか」── この3つを把握することが統計の基本です。',
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
        'データを見るとは「全体像を把握する」ことです。\n\nまず最小値・最大値で範囲を確認し、真ん中あたりの値を探す。\n\nデータの種類（量的・質的）を区別する。\n\n要約統計量で「位置」「ばらつき」「形」を数値化する。\n\n次の単元では、代表値（平均・中央値・最頻値）を詳しく学びます。',
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
