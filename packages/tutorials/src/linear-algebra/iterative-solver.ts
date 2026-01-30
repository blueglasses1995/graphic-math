import { Tutorial } from '../types';

export const iterativeSolverTutorial: Tutorial = {
  id: 'iterative-solver',
  title: '連立方程式の反復解法',
  description: '大規模連立方程式を反復法で効率的に解く手法を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '直接法では解けない巨大な方程式',
      content:
        'LU分解のような直接法は O(n³) の計算量です。\n' +
        'n = 100万の連立方程式では 10¹⁸ 回の演算が必要で\n' +
        '現実的な時間では解けません。\n\n' +
        'しかし疎行列（非ゼロ要素が少ない）なら、\n' +
        '反復法でO(kn)（k:反復回数）で近似解が得られます。\n\n' +
        '物理シミュレーション、有限要素法、画像処理など\n' +
        '大規模計算で反復法は不可欠です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ヤコビ法を体感',
      content:
        '最も単純な反復法がヤコビ法です。\n\n' +
        'Ax = b を x = D⁻¹(b - (L+U)x) に変形\n' +
        'D：Aの対角部分、L+U：非対角部分\n\n' +
        '各反復で新しいxの各成分を並列に計算：\n' +
        'xᵢ^(k+1) = (bᵢ - Σⱼ≠ᵢ aᵢⱼxⱼ^(k)) / aᵢᵢ\n\n' +
        '2x + y = 5, x + 3y = 7 の場合：\n' +
        'x₀=(0,0) → x₁=(2.5,2.33) → x₂=(1.33,1.50) → ...\n' +
        '→ 解 (1.6, 1.8) に収束',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ガウス・ザイデル法と収束条件',
      content:
        'ガウス・ザイデル法はヤコビ法の改良版で、\n' +
        '計算済みの新しい値をすぐに使います。\n\n' +
        'xᵢ^(k+1) = (bᵢ - Σⱼ<i aᵢⱼxⱼ^(k+1) - Σⱼ>i aᵢⱼxⱼ^(k)) / aᵢᵢ\n\n' +
        '一般にヤコビ法より速く収束します。\n\n' +
        '収束条件（十分条件）：\n' +
        '・対角優位：|aᵢᵢ| > Σⱼ≠ᵢ|aᵢⱼ|\n' +
        '・正定値対称行列（ガウス・ザイデル法）\n\n' +
        'スペクトル半径 ρ(M) < 1 が収束の必要十分条件で、\n' +
        'Mは反復行列です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '共役勾配法（CG法）',
      content:
        '正定値対称行列に対する最も強力な反復法が\n' +
        '共役勾配法（Conjugate Gradient）です。\n\n' +
        '原理：Ax=b の解は f(x) = x^TAx/2 - b^Tx の最小化と同値。\n' +
        '勾配降下を「共役方向」に改良します。\n\n' +
        '理論的にはn回の反復で正確な解が得られ（丸め誤差除く）、\n' +
        '実際には条件数が良ければ√κ回程度で収束します。\n\n' +
        '前処理付きCG（PCG）はさらに高速で、\n' +
        '大規模な有限要素法の標準ソルバーです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：反復解法',
      content: '反復解法の理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '反復法が直接法（LU分解等）より有利になるのはどのような場合ですか？',
        options: [
          { id: 'a', label: '行列が小さいとき', correct: false },
          { id: 'b', label: '行列が密（非ゼロ要素が多い）のとき', correct: false },
          { id: 'c', label: '行列が大規模かつ疎のとき', correct: true },
          { id: 'd', label: '行列が正則でないとき', correct: false },
        ],
        explanation:
          '大規模疎行列では直接法のO(n³)が非現実的ですが、反復法は疎行列の構造を活かしてO(kn)で解けます。kが小さければ劇的に高速です。',
      },
    },
    {
      id: 'alternate',
      title: 'GMRES法',
      content:
        '非対称行列には共役勾配法が使えません。\n' +
        'その場合はGMRES（Generalized Minimal Residual）を使います。\n\n' +
        'GMRESはクリロフ部分空間\n' +
        'K_k = span{b, Ab, A²b, ..., A^(k-1)b}\n' +
        'の中で残差を最小化します。\n\n' +
        '理論的にはn回で解が得られますが、\n' +
        '実際にはリスタート付きGMRES(m)を使い\n' +
        'メモリを節約します。\n\n' +
        'PETSc等の科学計算ライブラリでは\n' +
        'GMRES+前処理が標準的なソルバーです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：連立方程式の反復解法',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 大規模疎行列には反復法が効率的\n' +
        '2. ヤコビ法・ガウス・ザイデル法が基本\n' +
        '3. 共役勾配法は正定値対称行列の標準ソルバー\n' +
        '4. GMRESは非対称行列に対応\n' +
        '5. 前処理が収束速度を大幅に改善\n\n' +
        '反復法は大規模科学計算の基盤技術です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
