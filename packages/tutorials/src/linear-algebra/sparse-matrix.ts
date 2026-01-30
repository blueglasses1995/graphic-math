import { Tutorial } from '../types';

export const sparseMatrixTutorial: Tutorial = {
  id: 'sparse-matrix',
  title: '疎行列の扱い',
  description: 'ほとんどの要素がゼロである疎行列の効率的な表現と計算を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'ほとんどゼロの行列',
      content:
        'Webページのリンク行列を考えてみましょう。\n' +
        '数十億のページがあっても、各ページのリンク先は数十程度。\n\n' +
        'つまり行列の99.99...%がゼロです。\n' +
        'こうした行列を「疎行列（sparse matrix）」と呼びます。\n\n' +
        '疎行列を素朴に2次元配列で保存すると\n' +
        'メモリと計算の大部分がゼロの処理に費やされます。\n' +
        '効率的な扱い方を学びましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '疎行列の格納形式',
      content:
        '疎行列の主な格納形式：\n\n' +
        'COO形式（Coordinate）：\n' +
        '(行, 列, 値) のリスト。構築に便利。\n\n' +
        'CSR形式（Compressed Sparse Row）：\n' +
        '行ポインタ + 列インデックス + 値。\n' +
        '行方向のアクセスが高速。\n\n' +
        'CSC形式（Compressed Sparse Column）：\n' +
        '列方向のアクセスが高速。\n\n' +
        'scipy.sparse で簡単に使えます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'CSR形式の具体例',
      content:
        '行列 A = [[1,0,2],[0,3,0],[4,0,5]] のCSR表現：\n\n' +
        '値：[1, 2, 3, 4, 5]\n' +
        '列インデックス：[0, 2, 1, 0, 2]\n' +
        '行ポインタ：[0, 2, 3, 5]\n\n' +
        '行ポインタは各行の非ゼロ要素が値配列の\n' +
        'どこから始まるかを示します。\n' +
        '行0：値[0:2] = [1,2]、列[0,2]\n' +
        '行1：値[2:3] = [3]、列[1]\n' +
        '行2：値[3:5] = [4,5]、列[0,2]\n\n' +
        '9要素中5要素の格納で済みます（55%圧縮）。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '疎行列の計算効率',
      content:
        'n×n行列で非ゼロ要素数がkの場合：\n\n' +
        '密行列の行列×ベクトル：O(n²)\n' +
        '疎行列の行列×ベクトル：O(k)（kはn²よりはるかに小）\n\n' +
        '例：n=100万、各行の非ゼロ=10の場合\n' +
        '密行列：10¹²回の演算\n' +
        '疎行列：10⁷回の演算（10万倍高速！）\n\n' +
        'Google検索やSNSのグラフ解析は\n' +
        '疎行列の効率的な計算なしには不可能です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：疎行列',
      content: '疎行列の理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1000×1000行列で非ゼロ要素が5000個の場合、疎行列として扱う利点は？',
        options: [
          { id: 'a', label: '利点はない', correct: false },
          { id: 'b', label: 'メモリが約99.5%節約できる', correct: true },
          { id: 'c', label: 'メモリが約50%節約できる', correct: false },
          { id: 'd', label: '計算速度は変わらない', correct: false },
        ],
        explanation:
          '密行列は1,000,000個の要素を格納しますが、疎行列は約5,000個の非ゼロ要素（+インデックス情報）だけで済みます。約99.5%のメモリ節約になります。',
      },
    },
    {
      id: 'alternate',
      title: '疎行列の応用例',
      content:
        '疎行列が登場する実世界の例：\n\n' +
        '・Webのリンクグラフ（PageRank）\n' +
        '・ソーシャルネットワーク（友達関係）\n' +
        '・有限要素法（物理シミュレーション）\n' +
        '・推薦システム（ユーザー×アイテム行列）\n' +
        '・自然言語処理（単語×文書行列）\n\n' +
        'これらの行列は数百万〜数十億のサイズになり、\n' +
        '疎行列表現なしには扱えません。\n\n' +
        '疎行列ライブラリ（SciPy, Eigen, cuSPARSE）は\n' +
        '大規模計算の基盤技術です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：疎行列の扱い',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 疎行列：ほとんどの要素がゼロの行列\n' +
        '2. COO, CSR, CSC等の効率的な格納形式\n' +
        '3. 計算量がO(n²)からO(k)に改善\n' +
        '4. 大規模グラフや推薦システムで不可欠\n' +
        '5. scipy.sparseやcuSPARSEで実装可能\n\n' +
        '疎行列の理解は大規模データ処理の基礎です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
