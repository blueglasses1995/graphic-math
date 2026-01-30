import { Tutorial } from '../types';

export const parallelAlgorithmTutorial: Tutorial = {
  id: 'parallel-algorithm',
  title: '並列アルゴリズム',
  description: '複数のプロセッサで効率的に計算する並列アルゴリズムを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '力を合わせて速く',
      content:
        '1人で100個の箱を運ぶと100分。10人なら10分。\n\nでも「廊下を一人ずつ通る」制約があったら？\n\n並列化できる部分とできない部分がある。\n\nこの「並列化の限界」を数学的に理解するのが並列アルゴリズムの理論です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'parallel-algorithm-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '並列計算を体験しよう',
      content:
        'n個の数の合計を並列に求める：\n\n逐次：n-1回の加算 → O(n)\n並列：トーナメント方式で隣接ペアを加算 → O(log n)\n\nプロセッサ数p = n/2 で深さ O(log n) の並列削減。\n\n実際にトーナメント方式の計算過程を見てみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'parallel-algorithm-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'アムダールの法則',
      content:
        'プログラムの逐次部分の割合をsとすると：\n\n高速化率 ≤ 1 / (s + (1-s)/p)\n\ns=10%、p=∞の場合でも高速化率は最大10倍。\n\n逐次部分がボトルネックとなり、プロセッサを増やしても効果に限界があります。\n\nこれがアムダールの法則の警告です。\n\n並列化率の向上こそが高速化の鍵です。',
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
      title: 'NCクラスとP完全問題',
      content:
        'NC（Nick\'s Class）：多項式数のプロセッサでO(logᵏ n)時間に解ける問題。\n\nNCに属する問題は「効率的に並列化可能」です。\n\n例：ソート、行列積、連結成分\n\nP完全問題：Pに属するがNCに属さないと考えられる問題。\n例：回路値問題、文脈自由言語の認識\n\nP = NC? は並列計算の基本問題（P ≠ NC と予想）。',
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
      title: 'クイズ：並列アルゴリズム',
      content: '並列アルゴリズムの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'アムダールの法則によると、逐次部分が5%のプログラムの最大高速化率は？',
        options: [
          { id: 'a', label: '5倍', correct: false },
          { id: 'b', label: '10倍', correct: false },
          { id: 'c', label: '20倍', correct: true },
          { id: 'd', label: '無限大', correct: false },
        ],
        explanation:
          'アムダールの法則：最大高速化率 = 1/s = 1/0.05 = 20倍。プロセッサを無限に増やしても20倍が上限です。',
      },
    },
    {
      id: 'alternate',
      title: 'MapReduce',
      content:
        'MapReduceは大規模分散処理のプログラミングモデルです。\n\nMap：データを(キー, 値)ペアに変換\nShuffle：同じキーのデータを集約\nReduce：集約されたデータを処理\n\n例（単語カウント）：\nMap: 文書 → (単語, 1)\nReduce: (単語, [1,1,1,...]) → (単語, 合計)\n\nHadoop、Sparkなどの分散処理フレームワークの基盤です。',
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
      title: 'まとめ：並列アルゴリズム',
      content:
        '並列アルゴリズムは複数プロセッサを効率的に活用します。\n\n・並列削減：O(n) → O(log n)\n・アムダールの法則：逐次部分が高速化の限界を決める\n・NCクラス：効率的に並列化可能な問題\n・MapReduce：大規模分散処理\n\nマルチコア・クラウド時代に必須の知識です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'parallel-algorithm-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
