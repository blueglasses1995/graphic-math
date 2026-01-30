import { Tutorial } from '../types';

export const statsSummaryTutorial: Tutorial = {
  id: 'stats-summary',
  title: '統計のまとめ',
  description: '統計学の基礎から推論までの全体像を振り返る',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '統計学の全体像',
      content:
        'ここまで学んだ統計学を俯瞰しましょう。\n\n記述統計: データを要約する（平均、分散、グラフ）\n推測統計: データから母集団を推測する（推定、検定）\n\nこの2つの柱が統計学の基盤です。',
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
        'データ分析の流れを体験しましょう。\n\nデータの可視化 → 要約統計量 → 推定 → 検定\nの各ステップを自由に試してみてください。',
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
      title: '記述統計の復習',
      content:
        '代表値: 平均、中央値、最頻値\nばらつき: 分散、標準偏差、四分位範囲\n可視化: ヒストグラム、箱ひげ図、散布図\n関係: 相関係数、回帰直線\n\nこれらは「手元のデータを理解する」ためのツールです。\n\nデータの全体像を把握してから、推測に進むことが大切です。',
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
      title: '推測統計の復習',
      content:
        '標本と母集団: 部分から全体を推測する\n標本分布と中心極限定理: 推測の理論的基盤\n点推定と区間推定: 母数を推測する2つの方法\n仮説検定: データに基づく意思決定\np値と過誤: 検定の限界を理解する\n\n推測統計の核心は「不確実性を定量化する」ことです。',
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
        '統計分析で最も重要なステップは何でしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '統計分析で最初にすべきことは？',
        options: [
          { id: 'a', label: 'いきなりp値を計算する', correct: false },
          { id: 'b', label: 'まずデータを可視化して全体像を把握する', correct: true },
          { id: 'c', label: '最も複雑なモデルを適用する', correct: false },
          { id: 'd', label: '有意水準を決める', correct: false },
        ],
        explanation:
          '正解は「まずデータを可視化して全体像を把握する」です。\n\nグラフを見ずに統計手法を適用するのは「地図を見ずに旅に出る」ようなものです。\n\n外れ値、分布の形、変数間の関係を目で確認してから分析方法を選びましょう。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：統計リテラシー',
      content:
        '統計を「使う」だけでなく「読み解く」力も重要です。\n\n・サンプルサイズは十分か？\n・相関を因果と混同していないか？\n・p値だけで結論を出していないか？\n・グラフは誤解を招く表現になっていないか？\n\nニュースや論文を批判的に読むための統計リテラシーは、現代社会の必須スキルです。',
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
        '統計学は「データから知識を引き出す科学」です。\n\n記述統計でデータを理解し、推測統計で母集団について推論する。\n\n常に心がけるべきこと:\n1. まずデータを見る（可視化）\n2. 適切な手法を選ぶ（データの種類と目的に合わせて）\n3. 結果を批判的に解釈する（限界を理解して）\n\n実践編では、これらの知識を現実の問題に適用していきます。',
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
