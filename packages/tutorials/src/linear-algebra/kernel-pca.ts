import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const kernelPcaTutorial: Tutorial = {
  id: 'kernel-pca',
  title: 'カーネルPCA',
  description: '非線形なデータ構造をカーネル法で捉えるPCAの拡張を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '線形PCAの限界',
      content:
        '標準PCAは線形な次元削減です。\n' +
        'データが円環状やスイスロール状に分布する場合、\n' +
        '線形な射影ではうまく構造を捉えられません。\n\n' +
        'カーネルPCA（Kernel PCA）は\n' +
        'カーネルトリックを使って非線形な構造を発見します。\n\n' +
        'データを高次元空間に写像してからPCAを行いますが、\n' +
        '実際には写像を明示的に計算する必要がありません！',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'kernel-pca-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'カーネルトリックを体感',
      content:
        'カーネル関数 k(x,y) は高次元空間での内積に対応：\n' +
        'k(x,y) = φ(x)·φ(y)\n\n' +
        '代表的なカーネル：\n' +
        '・RBF（ガウス）：k(x,y) = exp(-γ|x-y|²)\n' +
        '・多項式：k(x,y) = (x·y + c)^d\n\n' +
        'RBFカーネルは無限次元空間への写像に対応しますが、\n' +
        'カーネル値の計算は O(d)（元の次元d）で済みます。\n\n' +
        '高次元に行かずに高次元の内積が計算できる。\n' +
        'これがカーネルトリックの魔法です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'kernel-pca-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'カーネルPCAのアルゴリズム',
      content:
        'n個のデータ x₁,...,xₙ に対して：\n\n' +
        '1. カーネル行列 K を計算：K_ij = k(xᵢ,xⱼ)\n' +
        '2. Kを中心化：K̃ = K - 1ₙK - K1ₙ + 1ₙK1ₙ\n' +
        '   （1ₙ = (1/n)ee^T）\n' +
        '3. K̃の固有値分解：K̃ = UΛU^T\n' +
        '4. 第k主成分のスコア = √(λₖ)uₖ\n\n' +
        'ポイント：\n' +
        '・φ(x)を明示的に計算しない\n' +
        '・n×nのカーネル行列の固有値分解で完了\n' +
        '・nが大きいとO(n³)で重い → Nyström近似で対応',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '適用例：同心円のデータ',
      content:
        '2つの同心円上にデータが分布している場合：\n\n' +
        '線形PCA：2つの主成分で円構造が消える\n' +
        '→ クラスタが分離できない\n\n' +
        'カーネルPCA（RBFカーネル）：\n' +
        '高次元空間で円が「引き伸ばされ」、\n' +
        '第1主成分だけで2クラスが分離可能！\n\n' +
        'スイスロール、三日月形データなど\n' +
        '非線形構造の可視化に非常に有効です。\n\n' +
        't-SNEやUMAPも非線形次元削減ですが、\n' +
        'カーネルPCAは数学的基盤が明確という利点があります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：カーネルPCA',
      content: 'カーネルPCAの理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'カーネルトリックの本質的な利点は何ですか？',
        options: [
          { id: 'a', label: 'データを減らせる', correct: false },
          { id: 'b', label: '高次元写像を明示計算せずに内積が計算できる', correct: true },
          { id: 'c', label: '線形回帰が使えるようになる', correct: false },
          { id: 'd', label: '計算が常にO(1)になる', correct: false },
        ],
        explanation:
          'カーネルトリックは φ(x)·φ(y) = k(x,y) により、高次元（場合によっては無限次元）空間での内積を元の空間でのカーネル関数の計算に置き換えます。',
      },
    },
    {
      id: 'alternate',
      title: 'カーネル法の広がり',
      content:
        'カーネルトリックはPCA以外にも適用できます。\n\n' +
        '・カーネルSVM：非線形分類\n' +
        '・カーネルリッジ回帰：非線形回帰\n' +
        '・カーネルk-means：非線形クラスタリング\n\n' +
        'すべて「内積をカーネルに置き換える」だけで\n' +
        '線形手法を非線形に拡張できます。\n\n' +
        'これは再生核ヒルベルト空間（RKHS）の理論に基づき、\n' +
        '関数解析と線形代数が融合した美しい数学です。\n\n' +
        '深層学習時代でもカーネル法の理論は\n' +
        'ニューラルネットの解析に活用されています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：カーネルPCA',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 線形PCAでは非線形構造を捉えられない\n' +
        '2. カーネルトリックで高次元内積を効率計算\n' +
        '3. カーネル行列の固有値分解でPCAを実行\n' +
        '4. 同心円やスイスロールの非線形構造を発見\n' +
        '5. SVM等他の手法にもカーネルトリック適用可能\n\n' +
        'カーネル法は線形代数を非線形問題に拡張する強力な枠組みです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'kernel-pca-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
