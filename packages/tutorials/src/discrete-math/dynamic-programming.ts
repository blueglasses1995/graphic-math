import { Tutorial } from '../types';

export const dynamicProgrammingTutorial: Tutorial = {
  id: 'dynamic-programming',
  title: '動的計画法',
  description: '部分問題の重複を利用して効率的に解く手法を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '同じ計算を繰り返さない',
      content:
        'フィボナッチ数列を再帰で計算すると、同じ値を何度も計算してしまいます。\n\nfib(5) = fib(4) + fib(3)\nfib(4) = fib(3) + fib(2)\n\nfib(3) が2回計算される！nが大きいと指数的に無駄が発生します。\n\n「一度計算した結果を記憶する」── これが動的計画法（DP）の核心です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'dynamic-programming-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'DPテーブルを埋めよう',
      content:
        '動的計画法の2つのアプローチ：\n\n1. トップダウン（メモ化再帰）：再帰で解き、結果をキャッシュ\n2. ボトムアップ（漸化式）：小さい問題から順に解く\n\nフィボナッチのDPテーブルを順番に埋めてみましょう。\nO(2ⁿ) → O(n) に劇的改善！',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'dynamic-programming-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ナップサック問題',
      content:
        '重さと価値がある品物をナップサックに詰める問題。\n\n品物: (重さ2, 価値3), (重さ3, 価値4), (重さ4, 価値5)\n容量: 5\n\nDP[i][w] = i番目までの品物で重さwのときの最大価値\n\nDP[i][w] = max(DP[i-1][w], DP[i-1][w-wᵢ] + vᵢ)\n\n結果: 品物1+2 → 重さ5, 価値7 が最適',
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
      title: '最長共通部分列（LCS）',
      content:
        '2つの文字列の最長共通部分列を求めるDP。\n\n文字列 "ABCDE" と "ACBDE" のLCS\n\nDP[i][j] = X[i]=Y[j] なら DP[i-1][j-1]+1\n           そうでなければ max(DP[i-1][j], DP[i][j-1])\n\n結果: "ABDE" （長さ4）\n\n時間: O(mn)、空間: O(mn)（最適化でO(min(m,n))も可能）',
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
      title: 'クイズ：動的計画法',
      content: '動的計画法の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '動的計画法が有効な問題の特徴として最も重要なのはどれですか？',
        options: [
          { id: 'a', label: '入力サイズが小さい', correct: false },
          { id: 'b', label: '部分問題が重複する（重複部分問題）', correct: true },
          { id: 'c', label: '解がユニークである', correct: false },
          { id: 'd', label: '問題が線形である', correct: false },
        ],
        explanation:
          '動的計画法の鍵は「部分問題の重複」と「最適部分構造」です。同じ部分問題を何度も解かずに済むことで効率化します。',
      },
    },
    {
      id: 'alternate',
      title: 'DPと貪欲法の違い',
      content:
        '動的計画法：すべての選択肢を考慮し、最適解を保証\n貪欲法：各ステップで局所最適を選び、高速だが最適解の保証なし\n\n例（お釣り問題）：\n硬貨 {1, 3, 4}、金額 6\n貪欲法: 4+1+1 = 3枚\nDP: 3+3 = 2枚 ← 最適！\n\n問題の構造によって使い分けが必要です。',
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
      title: 'まとめ：動的計画法',
      content:
        '動的計画法は「部分問題の重複」を活用する設計手法です。\n\n・メモ化再帰（トップダウン）またはテーブル（ボトムアップ）\n・ナップサック、LCS、最短経路など幅広い応用\n・最適部分構造と重複部分問題が適用条件\n・分割統治と異なり、部分問題が共有される場合に威力を発揮\n\n競技プログラミングでも最重要テクニックの一つです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'dynamic-programming-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
