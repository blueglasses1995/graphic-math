import { Tutorial } from '../types';

export const divideConquerTutorial: Tutorial = {
  id: 'divide-conquer',
  title: '分割統治法',
  description: '問題を分割して征服する強力なアルゴリズム設計手法を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '分けて攻める',
      content:
        '1000人の中から犯人を探すとき、全員に聞くと1000回。\n\nでも「犯人は前半？後半？」と聞けば、10回で特定できます。\n\n大きな問題を小さく分け、それぞれ解いて結合する。\n\nこれが分割統治法（Divide and Conquer）のアイデアです。',
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
      title: '分割統治を体験しよう',
      content:
        '分割統治法の3ステップ：\n\n1. Divide（分割）：問題を小さな部分問題に分ける\n2. Conquer（征服）：部分問題を再帰的に解く\n3. Combine（結合）：部分解を組み合わせて全体の解を得る\n\nマージソートを例に、分割と結合の過程を操作してみましょう。',
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
      title: 'マージソート',
      content:
        'マージソートは分割統治の典型例です。\n\n配列 [38, 27, 43, 3, 9, 82, 10]\n\n分割: [38,27,43,3] と [9,82,10]\nさらに分割を繰り返し、1要素まで分割\n結合: 2つのソート済み配列をマージ\n\n計算量：T(n) = 2T(n/2) + O(n) → O(n log n)\n\nマスター定理で解析できます。',
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
      title: 'カラツバ乗算',
      content:
        'n桁の整数の掛け算を高速化する分割統治法です。\n\n通常: O(n²) の筆算\nカラツバ: x = a·10^(n/2) + b, y = c·10^(n/2) + d として\n\nxy = ac·10ⁿ + ((a+b)(c+d) - ac - bd)·10^(n/2) + bd\n\n3回の掛け算で済む！→ O(n^1.585)\n\nこの発想が分割統治の威力を示しています。',
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
      title: 'クイズ：分割統治法',
      content: '分割統治法の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'マージソートの時間計算量は？',
        options: [
          { id: 'a', label: 'O(n²)', correct: false },
          { id: 'b', label: 'O(n log n)', correct: true },
          { id: 'c', label: 'O(n)', correct: false },
          { id: 'd', label: 'O(log n)', correct: false },
        ],
        explanation:
          '正解は O(n log n) です。毎回半分に分割（log n 段）し、各段で O(n) のマージを行います。',
      },
    },
    {
      id: 'alternate',
      title: 'マスター定理',
      content:
        '分割統治の漸化式 T(n) = aT(n/b) + f(n) を解くためのマスター定理：\n\na: 部分問題の数、b: 分割の比率、f(n): 分割と結合のコスト\n\nケース1: f(n) = O(n^(log_b(a)-ε)) → T(n) = Θ(n^log_b(a))\nケース2: f(n) = Θ(n^log_b(a)) → T(n) = Θ(n^log_b(a) · log n)\nケース3: f(n) = Ω(n^(log_b(a)+ε)) → T(n) = Θ(f(n))\n\nマージソートは a=2, b=2, f(n)=n → ケース2 → O(n log n)',
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
      title: 'まとめ：分割統治法',
      content:
        '分割統治法は問題を分割・征服・結合する設計手法です。\n\n・マージソート：O(n log n)\n・二分探索：O(log n)\n・カラツバ乗算：O(n^1.585)\n・FFT（高速フーリエ変換）：O(n log n)\n\nマスター定理で計算量を体系的に解析できます。',
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
