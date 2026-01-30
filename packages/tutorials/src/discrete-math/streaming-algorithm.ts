import { Tutorial } from '../types';

export const streamingAlgorithmTutorial: Tutorial = {
  id: 'streaming-algorithm',
  title: 'ストリームアルゴリズム',
  description: '限られたメモリで大量データを処理するストリームアルゴリズムを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'すべてを覚えられない',
      content:
        '1秒に100万パケットが流れるネットワーク。\n\n全データを保存することは不可能。1パスで、少ないメモリで処理する必要があります。\n\nストリームアルゴリズムは、データを一度だけ見て、限られたメモリで有用な情報を抽出します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ストリーム処理を体験しよう',
      content:
        'ストリームモデルの制約：\n\n1. データは一度だけ順番に見る（1パス）\n2. メモリはデータサイズより遥かに小さい\n3. 正確さは多少犠牲にしてよい（近似OK）\n\nこれらの制約の下で、データの特徴を捉える方法を体験しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'HyperLogLog',
      content:
        '異なる要素数（カーディナリティ）の推定アルゴリズム。\n\nアイデア：ハッシュ値の先頭ゼロの最大数を記録\n・先頭0が1個 → 2個程度の異なる要素\n・先頭0が10個 → 約1024個の異なる要素\n\nHyperLogLog：複数のバケットで精度向上\n・12KBのメモリで10⁹個の異なる要素を約2%の誤差で推定\n\nRedis、BigQuery等で使用されています。',
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
      id: 'example-2',
      title: 'Count-Min Sketch',
      content:
        '要素の出現頻度を推定するデータ構造。\n\n構造：d行 × w列のカウンター配列\n追加：d個のハッシュ関数でd箇所のカウンターを増加\n問合せ：d箇所のカウンターの最小値を返す\n\n過大評価はあるが過小評価はない。\n\nε,δを指定して w = ⌈e/ε⌉, d = ⌈ln(1/δ)⌉ とすれば、\n確率1-δ以上で誤差εN以内（Nは総要素数）。',
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
      title: 'クイズ：ストリームアルゴリズム',
      content: 'ストリームアルゴリズムの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ストリームアルゴリズムの主な制約は何ですか？',
        options: [
          { id: 'a', label: '計算時間が限られる', correct: false },
          { id: 'b', label: 'データを1パスで処理し、メモリが限られる', correct: true },
          { id: 'c', label: '並列処理ができない', correct: false },
          { id: 'd', label: 'データが整数に限られる', correct: false },
        ],
        explanation:
          'ストリームアルゴリズムの核心的制約は「1パス」と「サブリニアメモリ」です。この制約下で近似的に問題を解きます。',
      },
    },
    {
      id: 'alternate',
      title: 'リザーバサンプリング',
      content:
        'ストリームからk個の要素を均一ランダムにサンプリングするアルゴリズム。\n\nアルゴリズムR（Vitter, 1985）：\n1. 最初のk個をそのまま保存\n2. i番目の要素(i>k)が来たら、確率k/iで保存中の要素をランダムに置換\n\n証明：帰納法で各要素が選ばれる確率がk/nであることを示せる。\n\nストリームの全長を事前に知らなくても動作する点が重要です。',
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
      title: 'まとめ：ストリームアルゴリズム',
      content:
        'ストリームアルゴリズムは大規模データ処理の要です。\n\n・1パス、サブリニアメモリの制約\n・HyperLogLog：異なる要素数の推定\n・Count-Min Sketch：頻度の推定\n・リザーバサンプリング：均一サンプリング\n\nビッグデータ時代に不可欠な技術です。確率とハッシュが鍵となります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
