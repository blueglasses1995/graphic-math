import { Tutorial } from '../types';

export const randomizedAlgorithmTutorial: Tutorial = {
  id: 'randomized-algorithm',
  title: '乱択アルゴリズム',
  description: 'ランダム性を活用して効率化する乱択アルゴリズムを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'コインを投げて解く',
      content:
        '決定的アルゴリズムが苦手とする問題でも、ランダム性を導入すると効率的に解けることがあります。\n\nクイックソートのピボットをランダムに選ぶだけで、最悪ケースを回避できます。\n\n偶然の力を数学的に活用する、それが乱択アルゴリズムです。',
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
      title: 'ランダムピボットを体験しよう',
      content:
        '乱択アルゴリズムには2つのタイプがあります。\n\nラスベガス型：結果は必ず正しい。実行時間がランダム。\n例：ランダムクイックソート（期待時間 O(n log n)）\n\nモンテカルロ型：実行時間は確定。結果がランダムに正しい。\n例：素数判定（ミラー・ラビン）\n\nランダムピボットの効果を確認してみましょう。',
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
      title: 'ランダムクイックソート',
      content:
        'ピボットをランダムに選ぶクイックソート：\n\n・最悪ケース：O(n²)（確率的に極めて稀）\n・期待計算量：O(n log n)\n\nなぜ？ランダムなピボットは「良い分割」を期待値的に保証。\n\n中央値に近いピボットが選ばれる確率は1/2。\n平均的に O(log n) 回の再帰で十分。\n\nどんな入力でも期待値が O(n log n)。敵がいても打ち勝てます。',
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
      title: 'ミラー・ラビン素数判定',
      content:
        '大きな数nが素数か判定するモンテカルロアルゴリズム。\n\n1. ランダムに a を選ぶ（2 ≤ a ≤ n-2）\n2. フェルマーの小定理の拡張で判定\n3. 「合成数」の判定は確実\n4. 「素数」の判定は確率的（1回でエラー率≤1/4）\n\nk回繰り返せばエラー率 ≤ (1/4)^k\n20回で10⁻¹²以下。RSA暗号の鍵生成に使用されています。',
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
      title: 'クイズ：乱択アルゴリズム',
      content: '乱択アルゴリズムの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ラスベガス型アルゴリズムの特徴はどれですか？',
        options: [
          { id: 'a', label: '結果がランダムに正しい', correct: false },
          { id: 'b', label: '結果は必ず正しく、実行時間がランダム', correct: true },
          { id: 'c', label: '常に多項式時間で動作する', correct: false },
          { id: 'd', label: 'ランダム性を使わない', correct: false },
        ],
        explanation:
          'ラスベガス型は結果の正しさを保証し、実行時間が確率的です。モンテカルロ型は時間を保証し、結果が確率的です。',
      },
    },
    {
      id: 'alternate',
      title: 'BPPクラス',
      content:
        'BPP（Bounded-error Probabilistic Polynomial time）：\nランダム多項式時間で、エラー率1/3以下で解ける問題のクラス。\n\nP ⊆ BPP ⊆ PSPACE\n\n重要な未解決問題：P = BPP？\n\n多くの研究者は P = BPP を予想しています。\nつまり「ランダム性は計算能力を本質的に高めない」可能性があります。\n\n擬似乱数生成器の存在がこの予想を支持しています。',
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
      title: 'まとめ：乱択アルゴリズム',
      content:
        '乱択アルゴリズムはランダム性を武器にする手法です。\n\n・ラスベガス型：正しさ保証、時間がランダム\n・モンテカルロ型：時間保証、正しさが確率的\n・ランダムクイックソート、ミラー・ラビン素数判定\n・BPPクラスとP=BPP?予想\n\n確率と離散数学の交差が新しいアルゴリズムを生み出します。',
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
