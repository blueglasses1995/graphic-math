import { Tutorial } from '../types';

export const databaseFunctorTutorial: Tutorial = {
  id: 'database-functor',
  title: 'データベースと関手',
  category: 'category-theory',
  description: 'データベーススキーマとクエリを圏論的に理解する',
  steps: [
    {
      id: 'hook',
      title: 'スキーマは圏',
      stepType: 'animation',
      content: 'データベーススキーマは圏として、データインスタンスは関手として表現できます。テーブルが対象、外部キーが射、データ行が関手の像——この対応をアニメーションで見ましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'database-functor-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: 'スキーマ圏を構築',
      stepType: 'interactive',
      content: 'テーブル（対象）と外部キー（射）をドラッグしてデータベーススキーマを圏として構築しましょう。データインスタンスが関手としてどう表現されるか確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'database-functor-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'スキーマ圏とインスタンス関手',
      stepType: 'explanation',
      content: 'スキーマ圏Sは：対象=テーブル名、射=外部キー関係。データインスタンスは関手 I: S→Set で：I(T)=テーブルTの行の集合、I(fk)=外部キーfkに沿った参照写像。スキーマ変更は関手 F: S→S′ で表現されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: 'データマイグレーションと随伴',
      stepType: 'explanation',
      content: 'スキーマ変更 F: S→S′ に対して、データマイグレーションは3つの関手で記述されます：ΔF（引き戻し）、ΣF（左カン拡張）、ΠF（右カン拡張）。ΣF ⊣ ΔF ⊣ ΠF は二重随伴を成します。SELECT, JOIN, UNIONなどのSQLクエリも圏論的に表現できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'データベース圏論の確認',
      stepType: 'quiz',
      content: 'データベースの圏論的表現を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'データベースのデータインスタンスは圏論的に何として表現されますか？',
        options: [
          { id: 'a', label: '自然変換', correct: false },
          { id: 'b', label: 'モナド', correct: false },
          { id: 'c', label: '関手 S→Set', correct: true },
          { id: 'd', label: '随伴関手', correct: false }
        ],
        explanation: 'データインスタンスはスキーマ圏Sから集合の圏Setへの関手です。テーブルを行の集合に、外部キーを参照写像に移します。'
      }
    },
    {
      id: 'alternate',
      title: 'オロギ（Olog）',
      stepType: 'explanation',
      content: 'オロギ（ontology log）はスキーマ圏を知識表現に応用したものです。対象が概念、射が関係を表し、データの意味論的構造を圏論で記述します。David Spivakらの研究により、圏論的データベース理論は実用的なソフトウェアにも応用されています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：データと圏論',
      stepType: 'interactive',
      content: 'データベース理論は圏論の実用的応用の好例です。スキーマ=圏、インスタンス=関手、マイグレーション=随伴という対応により、データ操作を数学的に厳密に扱えます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'database-functor-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
