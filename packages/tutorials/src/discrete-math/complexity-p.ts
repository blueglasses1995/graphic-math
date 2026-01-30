import { Tutorial } from '../types';

export const complexityPTutorial: Tutorial = {
  id: 'complexity-p',
  title: '計算量クラスP',
  description: '多項式時間で解ける問題のクラスPを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '効率よく解ける問題とは',
      content:
        'ソートは O(n log n) で、最短経路は O(V² ) で解けます。\n\nこれらは入力サイズに対して「多項式時間」で解ける問題です。\n\n多項式時間で解ける問題の集合をクラス P と呼びます。\n\nPは「効率的に解ける問題」の代名詞です。',
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
      title: '計算量を比較しよう',
      content:
        'O(n), O(n²), O(n³) は多項式時間。\nO(2ⁿ), O(n!) は指数時間。\n\nn=100のとき：\nn² = 10,000（一瞬）\n2ⁿ ≈ 10³⁰（宇宙の年齢でも足りない）\n\nこの劇的な違いを体感してみましょう。',
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
      title: 'Pに属する問題の例',
      content:
        '以下はすべてクラスPに属します：\n\n・ソート: O(n log n)\n・最短経路（ダイクストラ）: O(V²) or O(E + V log V)\n・最大フロー: O(V²E)\n・線形計画法: 多項式時間\n・素数判定（AKS）: O(n¹²) — 2002年に証明\n\n多項式であれば次数が高くても理論的にはPです。',
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
      title: '決定性チューリングマシンとP',
      content:
        '正式には、Pは決定性チューリングマシンが多項式時間で判定できる言語の集合です。\n\n問題を「言語」として形式化します。\n例：「グラフGにs-tパスが存在するか？」\n→ パスが存在するグラフの集合が言語\n\nこの言語をO(nᵏ)で判定できればP∈です。',
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
      title: 'クイズ：計算量クラスP',
      content: 'クラスPについて確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち、クラスPに属さないと考えられている問題はどれですか？',
        options: [
          { id: 'a', label: '最短経路問題', correct: false },
          { id: 'b', label: 'ソート', correct: false },
          { id: 'c', label: '巡回セールスマン問題', correct: true },
          { id: 'd', label: '素数判定', correct: false },
        ],
        explanation:
          '巡回セールスマン問題はNP困難であり、多項式時間アルゴリズムは知られていません。',
      },
    },
    {
      id: 'alternate',
      title: '多項式時間の意義',
      content:
        '「多項式時間」を効率的と見なすのは「コブハム・エドモンズの提唱」です。\n\n理由：\n1. 多項式は合成に対して閉じている（Pの問題をサブルーチンとして使える）\n2. 計算モデルに依存しない（チューリングマシンでもRAMモデルでも多項式は多項式）\n3. 実用的にも、多項式時間の問題は概ね解ける',
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
      title: 'まとめ：計算量クラスP',
      content:
        'クラスPは「効率よく解ける問題」の集合です。\n\n・多項式時間で決定性チューリングマシンが判定可能\n・ソート、最短経路、素数判定などが属する\n・指数時間との差は実用上圧倒的\n\n次はクラスNPを学び、P≠NP問題の核心に迫ります。',
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
