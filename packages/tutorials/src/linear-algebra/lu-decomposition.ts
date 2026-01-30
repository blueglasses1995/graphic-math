import { Tutorial } from '../types';

export const luDecompositionTutorial: Tutorial = {
  id: 'lu-decomposition',
  title: 'LU分解',
  description: '行列を下三角行列Lと上三角行列Uの積に分解し連立方程式を効率的に解く',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'ガウス消去法を行列で表す',
      content:
        '連立方程式を解くガウス消去法。\n' +
        'その手順を行列の言葉で書き直すと、LU分解になります。\n\n' +
        'A = LU\n' +
        'L：下三角行列（Lower triangular）\n' +
        'U：上三角行列（Upper triangular）\n\n' +
        '三角行列の方程式は前進代入・後退代入で\n' +
        'O(n²)で解けるため、Ax = b を効率的に解けます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'LU分解の手順を体感',
      content:
        '2×2行列でLU分解を体感しましょう。\n\n' +
        'A = [[4,3],[6,3]]\n\n' +
        'ガウス消去：2行目から1行目の(6/4)倍を引く\n' +
        '→ U = [[4,3],[0,-1.5]]\n' +
        '→ L = [[1,0],[1.5,1]]\n\n' +
        '確認：LU = [[1,0],[1.5,1]][[4,3],[0,-1.5]]\n' +
        '= [[4,3],[6,3]] = A ✓\n\n' +
        'Lの下三角部分には消去で使った倍率が入ります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'LU分解で連立方程式を解く',
      content:
        'Ax = b を解くとき、A = LU なら：\n' +
        '1. Ly = b を前進代入で解く（y = U x）\n' +
        '2. Ux = y を後退代入で解く\n\n' +
        '例：4x₁ + 3x₂ = 10, 6x₁ + 3x₂ = 12\n\n' +
        'Step 1: Ly = b → y₁ = 10, 1.5(10) + y₂ = 12 → y₂ = -3\n' +
        'Step 2: Ux = y → 4x₁ + 3x₂ = 10, -1.5x₂ = -3\n' +
        '→ x₂ = 2, x₁ = 1\n\n' +
        '右辺 b が変わっても L,U は再利用できるのが大きな利点です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ピボット選択とPLU分解',
      content:
        '対角成分が0だとLU分解ができません。\n' +
        'そこで行を入れ替える「ピボット選択」を行います。\n\n' +
        'PA = LU（Pは置換行列）\n\n' +
        '部分ピボット選択：各ステップで列の最大要素を\n' +
        'ピボットに選ぶことで数値的に安定になります。\n\n' +
        '実用的なLU分解のアルゴリズム（LAPACKのdgetrf等）は\n' +
        '常に部分ピボット選択付きPLU分解を使います。\n' +
        '計算量はO(n³/3)で、逆行列計算よりも効率的です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：LU分解',
      content: 'LU分解の理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'LU分解の最大の利点は何ですか？',
        options: [
          { id: 'a', label: '行列の固有値がすぐわかる', correct: false },
          { id: 'b', label: '右辺bが変わってもL,Uを再利用できる', correct: true },
          { id: 'c', label: '行列のランクが必ず上がる', correct: false },
          { id: 'd', label: '行列が必ず正則になる', correct: false },
        ],
        explanation:
          'LU分解を一度計算すれば、右辺bが異なる複数の連立方程式を効率的に解けます。前進・後退代入はO(n²)で済むため、毎回O(n³)のガウス消去をする必要がありません。',
      },
    },
    {
      id: 'alternate',
      title: 'コレスキー分解',
      content:
        '行列が対称正定値の場合、特別なLU分解が使えます。\n\n' +
        'コレスキー分解：A = LL^T\n\n' +
        '対称性を活かすため、U = L^T とできます。\n' +
        '計算量はLU分解の約半分（n³/6）です。\n\n' +
        '正定値行列は統計学（共分散行列）や\n' +
        '最適化問題で頻繁に登場するため、\n' +
        'コレスキー分解は非常に実用的です。\n\n' +
        'NumPyの numpy.linalg.cholesky() で簡単に計算できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：LU分解',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. LU分解：A = LU（L:下三角, U:上三角）\n' +
        '2. ガウス消去法の行列表現\n' +
        '3. 連立方程式を前進・後退代入で効率的に解ける\n' +
        '4. PLU分解でピボット選択に対応\n' +
        '5. 対称正定値ならコレスキー分解が使える\n\n' +
        'LU分解は実用的な連立方程式の解法の基礎です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
