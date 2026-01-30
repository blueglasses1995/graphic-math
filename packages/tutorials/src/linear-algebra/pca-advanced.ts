import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const pcaAdvancedTutorial: Tutorial = {
  id: 'pca-advanced',
  title: 'PCA深化：次元削減',
  description: '主成分分析の数学的背景と実践的な次元削減手法を深く学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '高次元データの呪い',
      content:
        '100次元のデータを分析するには\n' +
        '直感が全く通用しません。\n\n' +
        '「次元の呪い」：次元が増えると\n' +
        '・データ点間の距離が均一化する\n' +
        '・必要なデータ量が指数的に増加\n' +
        '・可視化が不可能\n\n' +
        'PCA（主成分分析）は共分散行列の固有値分解により\n' +
        'データの本質的な次元を発見し、\n' +
        '高次元データを低次元に圧縮します。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'pca-advanced-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '分散最大化としてのPCA',
      content:
        'PCAの第1主成分は射影後の分散を最大化する方向です。\n\n' +
        '最適化問題：max_{|w|=1} w^T Σ w\n' +
        'Σ：共分散行列\n\n' +
        'ラグランジュ未定乗数法より：\n' +
        'Σw = λw（固有値問題！）\n\n' +
        '最大固有値λ₁の固有ベクトルw₁が第1主成分。\n' +
        '射影後の分散 = λ₁。\n\n' +
        '第2主成分はw₁に直交する方向で分散最大 → λ₂の固有ベクトル。\n' +
        '以降同様に続きます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'pca-advanced-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '寄与率と次元の選択',
      content:
        '各主成分がデータの分散のどれだけを説明するかが「寄与率」です。\n\n' +
        '第k主成分の寄与率 = λₖ / Σλᵢ\n' +
        '累積寄与率 = Σ_{i=1}^{k} λᵢ / Σλᵢ\n\n' +
        '例：固有値が [10, 5, 2, 1, 0.5, 0.1] のとき\n' +
        '全分散 = 18.6\n' +
        '第1主成分の寄与率 = 10/18.6 = 53.8%\n' +
        '上位2成分の累積寄与率 = 15/18.6 = 80.6%\n' +
        '上位3成分の累積寄与率 = 17/18.6 = 91.4%\n\n' +
        '通常、累積寄与率が90%以上になる次元数を選びます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'PCAとSVDの関係',
      content:
        'PCAはSVDで効率的に計算できます。\n\n' +
        'データ行列 X（n×d、中心化済み）のSVD：\n' +
        'X = UΣV^T\n\n' +
        '共分散行列：Σ_cov = X^TX/(n-1) = V(Σ²/(n-1))V^T\n\n' +
        '・主成分方向 = Vの列（右特異ベクトル）\n' +
        '・固有値 = σᵢ²/(n-1)（特異値の二乗/(n-1)）\n' +
        '・主成分スコア = UΣ（または XV）\n\n' +
        'SVDを使う利点：\n' +
        '共分散行列（d×d）を明示的に計算する必要がなく、\n' +
        'dが大きいときメモリ効率が良いです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：PCA深化',
      content: 'PCAの応用を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '100次元のデータでPCAを行い、累積寄与率95%に10次元で達した場合、次元削減率は？',
        options: [
          { id: 'a', label: '5%削減', correct: false },
          { id: 'b', label: '50%削減', correct: false },
          { id: 'c', label: '90%削減', correct: true },
          { id: 'd', label: '95%削減', correct: false },
        ],
        explanation:
          '100次元から10次元に削減するので、(100-10)/100 = 90%の次元削減です。情報の95%を保持しながら90%の次元を削減できます。',
      },
    },
    {
      id: 'alternate',
      title: 'インクリメンタルPCA',
      content:
        '全データがメモリに収まらない場合、\n' +
        'インクリメンタルPCA（IPCA）が使えます。\n\n' +
        'ミニバッチごとにPCAを更新：\n' +
        '新しいデータが来るたびに主成分を修正します。\n\n' +
        'ストリーミングデータにも対応可能で、\n' +
        'scikit-learn の IncrementalPCA で使えます。\n\n' +
        'ランダム化PCA（Randomized PCA）も有効で、\n' +
        'ランダム射影を使って近似的に高速計算します。\n' +
        '大規模データではIPCAやランダム化PCAが実用的です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：PCA深化',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. PCAは分散最大化 → 共分散行列の固有値問題\n' +
        '2. 寄与率で保持する次元数を決定\n' +
        '3. SVDでPCAを効率的に計算\n' +
        '4. 累積寄与率90%以上が一般的な基準\n' +
        '5. IPCA、ランダム化PCAで大規模対応\n\n' +
        'PCAは次元削減の最も基本的で強力な手法です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'pca-advanced-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
