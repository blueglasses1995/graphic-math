import { Tutorial } from '../types';

export const clusteringTutorial: Tutorial = {
  id: 'clustering',
  title: '【実践】クラスタリング',
  description: 'データを自動的にグループ分けするクラスタリング手法を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: 'データを自動で分類',
      content:
        '顧客を「似た者同士」にグループ分けしたい。\n\nでも事前にグループのラベルはない。\n\nクラスタリングは、データの中から自然なグループ構造を発見する教師なし学習の手法です。',
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
        'k-means法のステップを手動で実行してみましょう。\n\n中心点を動かして、クラスタの割り当てがどう変わるか観察してください。',
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
      title: 'k-means法',
      content:
        'k-means法のアルゴリズム:\n\n1. k個の中心点をランダムに配置\n2. 各データ点を最も近い中心に割り当て\n3. 各クラスタの重心を新しい中心にする\n4. 2-3を収束するまで繰り返す\n\nシンプルで高速ですが、kを事前に決める必要があり、初期値にも依存します。',
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
      title: 'kの選び方',
      content:
        'クラスタ数kをどう決めるか？\n\nエルボー法: kを増やしてクラスタ内の分散をプロット。\n曲がり角（エルボー）が最適なk。\n\nシルエット分析: クラスタの「まとまり具合」を数値化。\n\nk=2は単純すぎ、k=100は過剰。\nデータの構造とビジネス上の意味を考えて判断します。',
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
        'k-means法が苦手なデータの形はどれですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'k-means法が苦手な形状は？',
        options: [
          { id: 'a', label: '球状のクラスタ', correct: false },
          { id: 'b', label: '同じサイズのクラスタ', correct: false },
          { id: 'c', label: '三日月型や入れ子の輪', correct: true },
          { id: 'd', label: '離れたクラスタ', correct: false },
        ],
        explanation:
          '正解は「三日月型や入れ子の輪」です。\n\nk-meansは「球状のクラスタ」を前提とする手法です。\n\n非球状の構造（三日月型、輪型）にはDBSCANやスペクトラルクラスタリングが適しています。\n\nデータの形状に合わせた手法選択が重要です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：階層的クラスタリング',
      content:
        'k-means以外にも、階層的クラスタリングという手法があります。\n\n近いデータ点/クラスタを順に統合していき、デンドログラム（樹形図）を作ります。\n\n利点: kを事前に決めなくてよい。クラスタの階層構造が見える。\n欠点: 大規模データには計算コストが高い。\n\n生物の分類や文書の類似度分析などで広く使われています。',
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
        'クラスタリングは「データの中からグループ構造を発見する」手法です。\n\nk-means: シンプルで高速。球状クラスタに適する。\n階層的: デンドログラムで構造を可視化。kが不要。\nDBSCAN: 密度ベース。非球状クラスタに対応。\n\nクラスタリング結果は「正解」がないため、ドメイン知識と合わせて解釈することが大切です。',
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
