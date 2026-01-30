import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const pcaIntroTutorial: Tutorial = {
  id: 'pca-intro',
  title: '【実践】主成分分析の入口',
  description: '主成分分析（PCA）の原理を線形代数の視点から理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'データの「本当の向き」を見つける',
      content:
        '100次元のデータがある。でも本当に重要な方向は2つだけかもしれない。\n\n' +
        '主成分分析（PCA）は、データの中から「最も情報量の多い方向」を見つけます。\n\n' +
        'その数学的な正体は、共分散行列の固有値分解です。\n' +
        '線形代数の概念が実データに直結する瞬間です。',
      customScene: 'pca-intro-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'pc1',
            vector: new Vector3(3, 2, 0),
            color: '#ff4444',
            label: '第1主成分',
          },
          {
            id: 'pc2',
            vector: new Vector3(-2, 3, 0),
            color: '#44ff44',
            label: '第2主成分',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '分散が最大の方向を探そう',
      content:
        'データ点が楕円状に分布しているとします。\n\n' +
        '第1主成分：分散が最大の方向（楕円の長軸）\n' +
        '第2主成分：第1に直交する方向（楕円の短軸）\n\n' +
        'この方向を見つけるには：\n' +
        '1. データの共分散行列 C を計算\n' +
        '2. Cの固有値分解を行う\n' +
        '3. 固有ベクトル = 主成分の方向\n' +
        '4. 固有値 = その方向の分散\n\n' +
        '大きい固有値の方向が「重要な方向」です。',
      customScene: 'pca-intro-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'pca-dir1',
            vector: new Vector3(3, 2, 0),
            color: '#ff4444',
            label: '主成分1（分散大）',
          },
          {
            id: 'pca-dir2',
            vector: new Vector3(-1, 1.5, 0),
            color: '#44ff44',
            label: '主成分2（分散小）',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'PCAの手順',
      content:
        '具体的な手順：\n\n' +
        '1. データの平均を引く（中心化）\n' +
        '2. 共分散行列 C = (1/n)XᵀX を計算\n' +
        '3. Cを固有値分解：C = QΛQᵀ\n' +
        '4. 固有値の大きい順に固有ベクトルを並べる\n' +
        '5. 上位k個の固有ベクトルで射影\n\n' +
        '例：100次元のデータ → 上位2主成分で射影\n' +
        '→ 2次元で可視化できる！\n\n' +
        '情報の損失は小さい固有値に対応する方向だけです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '寄与率',
      content:
        '各主成分の「重要度」は固有値で測れます。\n\n' +
        '寄与率 = λᵢ / Σλ\n\n' +
        '例：固有値が 5, 3, 1, 0.5, 0.5 のとき\n' +
        '合計 = 10\n' +
        '第1主成分の寄与率 = 5/10 = 50%\n' +
        '第1+第2 = 8/10 = 80%\n' +
        '第1+第2+第3 = 9/10 = 90%\n\n' +
        '「累積寄与率90%まで」のように基準を設けて、' +
        '必要な主成分数を決めます。\n' +
        'これが次元削減の「どこまで削るか」の判断基準です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'contrib-pc1',
            vector: new Vector3(5, 0, 0),
            color: '#ff4444',
            label: 'λ₁ = 5 (50%)',
          },
          {
            id: 'contrib-pc2',
            vector: new Vector3(0, 3, 0),
            color: '#44ff44',
            label: 'λ₂ = 3 (30%)',
          },
          {
            id: 'contrib-pc3',
            vector: new Vector3(0, 0, 1),
            color: '#4444ff',
            label: 'λ₃ = 1 (10%)',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：PCA',
      content: 'PCAの理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'PCAで求める主成分方向は、何の固有ベクトルですか？',
        options: [
          { id: 'a', label: 'データ行列X', correct: false },
          { id: 'b', label: '共分散行列XᵀX', correct: true },
          { id: 'c', label: '逆行列X⁻¹', correct: false },
          { id: 'd', label: '転置行列Xᵀ', correct: false },
        ],
        explanation:
          'PCAはデータの共分散行列の固有値分解に基づいています。共分散行列は対称行列なので、必ず実数の固有値と直交する固有ベクトルが得られます。',
      },
    },
    {
      id: 'alternate',
      title: 'PCAの応用',
      content:
        'PCAは驚くほど幅広く使われています。\n\n' +
        '・顔認識：顔画像の「固有顔」（eigenface）を抽出\n' +
        '・遺伝学：集団の遺伝的構造を2Dで可視化\n' +
        '・金融：リスク要因の分析\n' +
        '・自然言語処理：単語の意味空間の次元削減\n' +
        '・画像圧縮：重要な成分だけ保持\n\n' +
        '「高次元データを低次元で理解する」という課題は普遍的であり、' +
        'PCAはその最も基本的で強力な手法です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：主成分分析',
      content:
        'この章のポイント：\n\n' +
        '1. PCA = データの分散が最大の方向を見つける\n' +
        '2. 共分散行列の固有値分解が核心\n' +
        '3. 固有ベクトル = 主成分方向\n' +
        '4. 固有値 = その方向の分散（重要度）\n' +
        '5. 寄与率で次元削減の度合いを決定\n\n' +
        '次はマルコフ連鎖を学びます。',
      customScene: 'pca-intro-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-pc1',
            vector: new Vector3(3, 2, 0),
            color: '#ff4444',
            label: 'PC1',
          },
          {
            id: 'sum-pc2',
            vector: new Vector3(-2, 3, 0),
            color: '#44ff44',
            label: 'PC2',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
