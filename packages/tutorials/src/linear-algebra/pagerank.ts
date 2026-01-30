import { Tutorial } from '../types';

export const pagerankTutorial: Tutorial = {
  id: 'pagerank',
  title: '【実践】ページランクの仕組み',
  description: 'Googleの検索アルゴリズムPageRankを線形代数で理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'Googleを支えた数学',
      content:
        '1998年、2人の大学院生がインターネットを変えました。\n\n' +
        'Larry PageとSergey Brin。彼らのアイデアは：\n' +
        '「多くの重要なページからリンクされているページは重要」\n\n' +
        'この再帰的な定義を行列で表し、固有ベクトルで解く。\n' +
        'それがPageRankです。線形代数が世界を変えた瞬間です。',
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
      title: 'リンク構造を行列にしよう',
      content:
        '3つのWebページA, B, Cを考えます。\n\n' +
        'A → B, C（AからB,Cにリンク）\n' +
        'B → C（BからCにリンク）\n' +
        'C → A（CからAにリンク）\n\n' +
        '遷移行列M：\n' +
        'M = [[0, 0, 1], [1/2, 0, 0], [1/2, 1, 0]]\n\n' +
        '各列の和 = 1（リンク先に均等に「重要度」を分配）\n\n' +
        'これはマルコフ連鎖です！\n' +
        'ランダムにリンクをクリックし続ける「ランダムサーファー」のモデルです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'PageRankの計算',
      content:
        '定常分布 = 固有値1の固有ベクトルを求めます。\n\n' +
        'Mπ = π を解くと：\n' +
        'π_C が受け取るリンクが最も多い(AとBの両方から)\n' +
        'π_A はCから全リンクを受ける\n' +
        'π_B はAから半分を受ける\n\n' +
        '結果：π = (2/5, 1/5, 2/5) = (0.4, 0.2, 0.4)\n\n' +
        'ページCとAが同じ重要度、Bが最も低い。\n' +
        'Cは2つのページからリンクされ、AはCから唯一のリンクを独占するので高い。\n' +
        'Bは1つのページから半分のリンクだけなので低い。',
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
      title: 'ダンピング係数',
      content:
        '実際のPageRankには「ダンピング係数」d（通常0.85）が加わります。\n\n' +
        'M\' = d × M + (1-d)/n × J\n\n' +
        'Jは全要素1の行列（全ページに均等にジャンプ）\n\n' +
        '意味：サーファーは85%の確率でリンクを辿り、\n' +
        '15%の確率でランダムなページにジャンプする。\n\n' +
        'これにより：\n' +
        '・リンクのないページにも到達可能に\n' +
        '・行列が必ず正則になり収束が保証される\n' +
        '・「デッドエンド」問題を回避',
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
      title: 'クイズ：PageRank',
      content: 'PageRankの理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'PageRankスコアは数学的に何として計算されますか？',
        options: [
          { id: 'a', label: 'リンク行列の行列式', correct: false },
          { id: 'b', label: 'リンク行列の逆行列の対角成分', correct: false },
          { id: 'c', label: '遷移行列の固有値1に対応する固有ベクトル', correct: true },
          { id: 'd', label: 'リンク行列の特異値', correct: false },
        ],
        explanation:
          'PageRankはマルコフ連鎖の定常分布、すなわち遷移行列の固有値1に対応する固有ベクトルとして計算されます。',
      },
    },
    {
      id: 'alternate',
      title: 'べき乗法：巨大行列の固有ベクトル',
      content:
        'Googleは数十億ページの行列を扱います。\n' +
        '固有値分解を直接計算するのは不可能です。\n\n' +
        '代わりに「べき乗法」を使います：\n' +
        '1. 適当な初期ベクトル x₀ を用意\n' +
        '2. x₁ = Mx₀ を計算\n' +
        '3. x₂ = Mx₁ を計算\n' +
        '4. ... 繰り返す\n\n' +
        '十分な回数で xₙ は固有ベクトルに収束します。\n\n' +
        '各ステップは行列×ベクトルの掛け算1回だけ。\n' +
        'スパース行列（ほとんどが0）なので高速に計算できます。',
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
      title: 'まとめ：ページランク',
      content:
        'この章のポイント：\n\n' +
        '1. PageRank = Webのリンク構造をマルコフ連鎖で表現\n' +
        '2. ページの重要度 = 定常分布 = 固有値1の固有ベクトル\n' +
        '3. ダンピング係数で収束を保証\n' +
        '4. べき乗法で巨大行列でも計算可能\n\n' +
        'おめでとうございます！ 線形代数の実践編が完了しました。\n\n' +
        'ベクトル → 行列 → 行列式 → 固有値 → PageRank\n' +
        'すべてがつながる美しい数学の世界です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
