import { Tutorial } from '../types';

export const binomialPascalTutorial: Tutorial = {
  id: 'binomial-pascal',
  title: '二項係数とパスカルの三角形',
  description: '二項定理とパスカルの三角形の美しい関係を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '(a + b)^n を展開すると',
      content:
        '(a + b)² = a² + 2ab + b²\n(a + b)³ = a³ + 3a²b + 3ab² + b³\n\n係数に注目してください：1, 2, 1 そして 1, 3, 3, 1\n\nこの係数のパターンには深い数学的構造が隠れています。',
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
      id: 'binomial-theorem',
      title: '二項定理',
      content:
        '二項定理：(a + b)^n = Σ C(n, k) × a^(n-k) × b^k\n\n各項の係数 C(n, k) を「二項係数」と呼びます。\n\nn個の (a+b) から、k個の項で b を選ぶ方法の数が C(n, k) です。\n\nつまり、二項係数は組合せ C(n, k) そのものです。',
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
      id: 'pascal-triangle',
      title: 'パスカルの三角形',
      content:
        '二項係数を三角形に並べたものがパスカルの三角形です：\n\n      1\n     1 1\n    1 2 1\n   1 3 3 1\n  1 4 6 4 1\n 1 5 10 10 5 1\n\n各数は、その真上2つの数の和です。\nこれは C(n,k) = C(n-1,k-1) + C(n-1,k) の反映です。',
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
      id: 'patterns',
      title: 'パスカルの三角形の隠れたパターン',
      content:
        'パスカルの三角形には驚くべきパターンが隠れています：\n\n・各行の和 = 2^n（a=b=1を代入）\n・斜めの列を足すとフィボナッチ数列\n・偶数奇数で塗り分けるとシェルピンスキーの三角形\n・n行目は (x+1)^n の係数\n\n単純な構造から驚くほど豊かなパターンが生まれます。',
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
      content: '二項係数について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'パスカルの三角形の第5行（1,5,10,10,5,1）の和は？',
        options: [
          { id: 'a', label: '16', correct: false },
          { id: 'b', label: '25', correct: false },
          { id: 'c', label: '32', correct: true },
          { id: 'd', label: '64', correct: false },
        ],
        explanation:
          '正解は32です。第n行の和は 2^n で、第5行なので 2^5 = 32 です。これは (1+1)^5 = 32 からも分かります。',
      },
    },
    {
      id: 'applications',
      title: '二項係数の応用',
      content:
        '二項係数は様々な場面で登場します：\n\n・確率：コイン投げでちょうどk回表が出る確率\n・統計：二項分布\n・代数：多項式の展開\n・組合せ論：格子パスの数え上げ\n\n(0,0)から(m,n)への格子パスの数は C(m+n, m) です。',
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
        '・二項定理：(a+b)^n の展開公式\n・二項係数 C(n,k) = n!/(k!(n-k)!)\n・パスカルの三角形：C(n,k) = C(n-1,k-1) + C(n-1,k)\n・各行の和は 2^n\n\nシンプルな再帰関係から、数学の至るところに現れる普遍的な構造です。\n\n次は、包除原理を学びます。',
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
