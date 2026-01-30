import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const symmetricEigenvalueTutorial: Tutorial = {
  id: 'symmetric-eigenvalue',
  title: '対称行列と固有値',
  description: '対称行列が持つ特別な固有値の性質とスペクトル定理を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '対称行列は特別',
      content:
        'A^T = A を満たす行列を対称行列と呼びます。\n\n' +
        '対称行列には驚くべき性質があります：\n' +
        '・固有値が必ず実数\n' +
        '・異なる固有値の固有ベクトルは直交\n' +
        '・必ず対角化可能\n\n' +
        'これらの性質は「スペクトル定理」としてまとめられ、\n' +
        '物理学から機械学習まで幅広く応用されています。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'symmetric-eigenvalue-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '対称行列の固有値を体感',
      content:
        '対称行列 A = [[2,1],[1,2]] の固有値を求めます。\n\n' +
        'det(A - λI) = (2-λ)² - 1 = λ² - 4λ + 3 = (λ-1)(λ-3)\n' +
        '固有値：λ₁ = 3, λ₂ = 1\n\n' +
        '固有ベクトル：\n' +
        'λ₁=3: v₁ = (1,1)/√2\n' +
        'λ₂=1: v₂ = (1,-1)/√2\n\n' +
        '確かに v₁·v₂ = 0（直交）で、両方とも実数の固有値です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'symmetric-eigenvalue-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'スペクトル定理',
      content:
        'スペクトル定理（実対称行列版）：\n\n' +
        'n×n実対称行列 A に対して、直交行列 Q が存在し\n' +
        'A = QΛQ^T と書ける。\n' +
        'ここで Λ = diag(λ₁, ..., λₙ) は実固有値の対角行列。\n\n' +
        'これは固有値分解 A = PDP⁻¹ の特別な場合で、\n' +
        'P が直交行列になること（P⁻¹ = P^T）が対称行列の特長です。\n\n' +
        'つまり対称行列の固有値分解とSVDは本質的に同じです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '応用：二次形式',
      content:
        '対称行列は二次形式 f(x) = x^T A x と密接に関連します。\n\n' +
        '例：A = [[2,1],[1,2]] のとき\n' +
        'f(x,y) = 2x² + 2xy + 2y²\n\n' +
        'スペクトル定理で対角化すると\n' +
        'f = 3u² + v²（固有ベクトル方向の座標 u,v）\n\n' +
        '固有値が全て正なら f > 0（正定値）\n' +
        '固有値に0があれば半正定値\n' +
        '固有値に負があれば不定値\n\n' +
        '最適化問題のヘッセ行列の判定に使われます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：対称行列の固有値',
      content: '対称行列の性質を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '実対称行列の固有値について正しいものはどれですか？',
        options: [
          { id: 'a', label: '複素数になることがある', correct: false },
          { id: 'b', label: '必ず正の実数', correct: false },
          { id: 'c', label: '必ず実数', correct: true },
          { id: 'd', label: '必ず整数', correct: false },
        ],
        explanation:
          'スペクトル定理により、実対称行列の固有値は必ず実数です。ただし正とは限らず、負やゼロもあり得ます。',
      },
    },
    {
      id: 'alternate',
      title: '物理学での対称行列',
      content:
        '量子力学では観測量はエルミート演算子（対称行列の複素版）で表されます。\n\n' +
        'エルミート行列の固有値は実数であり、\n' +
        'これは「測定結果が実数になる」という物理的要請と一致します。\n\n' +
        '慣性モーメントテンソルも対称行列で、\n' +
        'その固有値は主慣性モーメント、\n' +
        '固有ベクトルは主軸方向です。\n\n' +
        '対称行列の「固有値が実数、固有ベクトルが直交」\n' +
        'という性質は物理法則の数学的基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：対称行列と固有値',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 対称行列 A^T = A は実固有値を持つ\n' +
        '2. 異なる固有値の固有ベクトルは直交する\n' +
        '3. スペクトル定理：A = QΛQ^T\n' +
        '4. 二次形式の符号は固有値の符号で決まる\n' +
        '5. 物理学でエルミート演算子として登場\n\n' +
        '対称行列は線形代数で最も扱いやすい行列です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'symmetric-eigenvalue-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
