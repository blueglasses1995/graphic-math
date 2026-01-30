import { Tutorial } from '../types';

export const recursionFibonacciTutorial: Tutorial = {
  id: 'recursion-fibonacci',
  title: '【実践】再帰とフィボナッチ',
  description: '再帰的定義とフィボナッチ数列の効率的な計算を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'ウサギの増え方',
      content:
        '1202年、フィボナッチは「ウサギの繁殖問題」を考えました。\n\n毎月、成熟したつがいが新しいつがいを1組産みます。\n\n1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...\n\n各項が前2項の和 ── これがフィボナッチ数列です。',
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
      id: 'recursion',
      title: '再帰的定義',
      content:
        'フィボナッチ数列の再帰的定義：\n\nF(0) = 0, F(1) = 1\nF(n) = F(n-1) + F(n-2)（n ≥ 2）\n\n再帰的定義は3つの要素からなります：\n1. 基底ケース（最小の場合の値）\n2. 再帰ケース（自分自身を使った定義）\n3. 基底に近づく保証（nが減少していく）',
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
      id: 'naive-recursion',
      title: '素朴な再帰の問題',
      content:
        'F(n) を素朴に再帰計算すると、同じ計算を何度も繰り返します。\n\nF(5) = F(4) + F(3)\nF(4) = F(3) + F(2)　← F(3)が2回計算される\n\n計算回数は O(2^n) で爆発的に増えます。\n\nF(50)を素朴な再帰で計算すると数分かかりますが、\n効率的な方法なら一瞬です。',
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
      id: 'memoization',
      title: 'メモ化と動的計画法',
      content:
        'メモ化：計算結果を記憶して再利用\n→ O(n) の計算量に改善\n\n動的計画法（ボトムアップ）：\nF(0), F(1), F(2), ... と順に計算\n→ 2変数だけで O(n) 時間、O(1) 空間\n\nさらに行列累乗を使えば O(log n) で計算可能です。\n\n[F(n+1), F(n)] = [[1,1],[1,0]]^n × [F(1), F(0)]',
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
      id: 'quiz',
      title: 'クイズ',
      content: '再帰の効率について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '素朴な再帰でF(n)を計算するときの計算量は？',
        options: [
          { id: 'a', label: 'O(n)', correct: false },
          { id: 'b', label: 'O(n²)', correct: false },
          { id: 'c', label: 'O(2^n)', correct: true },
          { id: 'd', label: 'O(log n)', correct: false },
        ],
        explanation:
          '正解は O(2^n) です。各呼び出しが2つの再帰呼び出しを生むため、呼び出し回数が指数的に増えます。メモ化でO(n)に改善できます。',
      },
    },
    {
      id: 'golden-ratio',
      title: '黄金比との関係',
      content:
        'F(n)/F(n-1) は黄金比 φ = (1+√5)/2 ≈ 1.618... に収束します。\n\n実際、F(n) = (φⁿ - ψⁿ)/√5（ψ = (1-√5)/2）\nという閉じた式（ビネの公式）があります。\n\n整数の列が無理数から導かれる ── 離散と連続の美しい架け橋です。\n\nフィボナッチ数列はひまわりの種や貝殻の渦巻きにも現れます。',
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
        '・再帰的定義：基底ケース + 再帰ケース\n・素朴な再帰は指数時間 O(2^n)\n・メモ化/動的計画法で O(n) に改善\n・行列累乗で O(log n) も可能\n・黄金比との深い関係\n\n再帰は離散数学とアルゴリズムの核心的概念です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
