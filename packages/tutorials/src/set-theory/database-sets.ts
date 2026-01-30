import { Tutorial } from '../types';

export const databaseSetsTutorial: Tutorial = {
  id: 'database-sets',
  title: '【実践】データベースと集合',
  description: 'SQL操作と集合演算の対応関係を理解する',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: 'SQLは集合の言語',
      content:
        'データベースのテーブルが表示されています。\n\nSQLの UNION, INTERSECT, EXCEPT が実行され、結果が変わります。\n\nSQLの集合演算子は、そのまま集合論の演算に対応しています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'database-sets-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'SQLクエリを試そう',
      content:
        'テーブルにデータを追加して、UNION や INTERSECT の結果がどう変わるか確認しましょう。\n\n集合論の知識がそのままSQLに活きることを体感してください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'database-sets-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-operations',
      title: 'SQL演算子と集合',
      content:
        'SQL と集合論の対応：\n\n・UNION → ∪（和集合）\n・INTERSECT → ∩（共通部分）\n・EXCEPT → \\（差集合）\n・CROSS JOIN → ×（直積）\n・WHERE → {x ∈ A | 条件}\n・SELECT DISTINCT → 重複除去（集合の性質）\n\nリレーショナルデータベースの理論的基盤は集合論です。',
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
      id: 'example-join',
      title: 'JOINと直積',
      content:
        'JOINは直積に条件をつけたものです。\n\nCROSS JOIN: A × B（すべてのペア）\nINNER JOIN: {(a,b) ∈ A×B | 条件(a,b)}\nLEFT JOIN: 左テーブルの全行を保持\n\n例: users × orders で全組み合わせを作り、\nuser_id が一致するものだけ残す = INNER JOIN\n\n集合論を知っていれば、JOINの動作が明確に理解できます。',
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
      content: 'テーブルA={1,2,3,4}, テーブルB={3,4,5,6}のとき、A EXCEPT B は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A={1,2,3,4}, B={3,4,5,6}: SELECT * FROM A EXCEPT SELECT * FROM B = ?',
        options: [
          { id: 'a', label: '{1, 2}', correct: true },
          { id: 'b', label: '{5, 6}', correct: false },
          { id: 'c', label: '{1, 2, 5, 6}', correct: false },
          { id: 'd', label: '{3, 4}', correct: false },
        ],
        explanation:
          '正解は {1, 2} です。\n\nEXCEPT = 差集合 A \\ B。Aにあって Bにないものです。\n{5, 6} は B \\ A（逆の差集合）です。',
      },
    },
    {
      id: 'alternate',
      title: '正規化と関数従属性',
      content:
        'データベースの正規化も集合論的概念です。\n\n関数従属性: A → B は「Aの値が決まればBの値が一意に決まる」\nこれはAからBへの写像です。\n\n第1正規形: 各セルに集合を入れない（原子値のみ）\n第3正規形: 推移的関数従属性の排除\n\n集合論の概念が、効率的なデータベース設計の基盤になっています。',
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
        'データベースと集合のポイント：\n\n・UNION = ∪, INTERSECT = ∩, EXCEPT = \\\n・JOIN = 直積 + フィルタ\n・WHERE = 内包的記法\n・関数従属性 = 写像\n\n次は「確率と集合」の関係を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'database-sets-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
