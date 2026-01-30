import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const eigenDecompositionTutorial: Tutorial = {
  id: 'eigen-decomposition',
  title: '【実践】固有値分解',
  description: '固有値分解（対角化）の手順と応用を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '行列を「解体」する',
      content:
        '複雑な行列を、もっとシンプルな部品に分解できたら便利ですよね。\n\n' +
        '固有値分解は行列を A = PDP⁻¹ の形に分解します。\n' +
        'D は対角行列（対角成分以外が0）。\n\n' +
        '対角行列は計算が簡単です。累乗も、各成分をn乗するだけ。\n' +
        'これが固有値分解の最大の威力です。',
      customScene: 'eigen-decomposition-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-v1',
            vector: new Vector3(1, 1, 0),
            color: '#ff4444',
            label: '固有ベクトル1',
          },
          {
            id: 'eigen-v2',
            vector: new Vector3(1, -1, 0),
            color: '#44ff44',
            label: '固有ベクトル2',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '対角化を体験しよう',
      content:
        'A = [[3, 1], [1, 3]] を対角化してみましょう。\n\n' +
        'Step 1: 固有値を求める\n' +
        'det(A - λI) = (3-λ)² - 1 = 0\n' +
        'λ² - 6λ + 8 = 0 → λ = 4, 2\n\n' +
        'Step 2: 固有ベクトルを求める\n' +
        'λ=4: (A-4I)v=0 → v₁ = (1, 1)\n' +
        'λ=2: (A-2I)v=0 → v₂ = (1, -1)\n\n' +
        'Step 3: 分解\n' +
        'P = [[1,1],[1,-1]], D = [[4,0],[0,2]]',
      customScene: 'eigen-decomposition-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'diag-v1',
            vector: new Vector3(1, 1, 0),
            color: '#ff4444',
            label: 'v₁ (λ=4)',
          },
          {
            id: 'diag-v2',
            vector: new Vector3(1, -1, 0),
            color: '#44ff44',
            label: 'v₂ (λ=2)',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '行列の累乗',
      content:
        '固有値分解の最大の応用：行列の累乗が簡単になる。\n\n' +
        'A = PDP⁻¹ のとき：\n' +
        'A² = (PDP⁻¹)(PDP⁻¹) = PD²P⁻¹\n' +
        'Aⁿ = PDⁿP⁻¹\n\n' +
        'Dの累乗は各対角成分をn乗するだけ：\n' +
        'D = [[4,0],[0,2]] → Dⁿ = [[4ⁿ,0],[0,2ⁿ]]\n\n' +
        '例：A¹⁰ を計算するには 4¹⁰ と 2¹⁰ を計算して、\n' +
        'PD¹⁰P⁻¹ を求めるだけ。\n' +
        '直接 A を10回掛けるよりはるかに効率的です。',
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
      title: '対称行列の特別な性質',
      content:
        '対称行列（A = Aᵀ）は特別に美しい性質を持ちます。\n\n' +
        '1. 固有値は必ず実数\n' +
        '2. 異なる固有値の固有ベクトルは直交する\n' +
        '3. 必ず対角化できる\n' +
        '4. A = QDQᵀ （Q は直交行列）\n\n' +
        '例の A = [[3,1],[1,3]] は対称行列です。\n' +
        '固有ベクトル (1,1) と (1,-1) は確かに直交しています。\n' +
        '（ドット積 = 1×1 + 1×(-1) = 0）\n\n' +
        '対称行列は物理や統計で頻出するため、この性質は非常に重要です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sym-v1',
            vector: new Vector3(1, 1, 0),
            color: '#ff4444',
            label: 'v₁（正規化前）',
          },
          {
            id: 'sym-v2',
            vector: new Vector3(1, -1, 0),
            color: '#44ff44',
            label: 'v₂（直交）',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：固有値分解',
      content: '固有値分解の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A = PDP⁻¹ のとき、A³ はどう表せますか？',
        options: [
          { id: 'a', label: 'P³D³P⁻³', correct: false },
          { id: 'b', label: 'PD³P⁻¹', correct: true },
          { id: 'c', label: '(PDP⁻¹)³ = P³D³(P⁻¹)³', correct: false },
          { id: 'd', label: 'D³', correct: false },
        ],
        explanation:
          'A³ = (PDP⁻¹)(PDP⁻¹)(PDP⁻¹) = PD(P⁻¹P)D(P⁻¹P)DP⁻¹ = PD³P⁻¹。中間のP⁻¹Pが打ち消し合います。',
      },
    },
    {
      id: 'alternate',
      title: '対角化できない行列',
      content:
        'すべての行列が対角化できるわけではありません。\n\n' +
        'せん断行列 [[1,1],[0,1]] は固有値 λ=1（重解）ですが、\n' +
        '独立な固有ベクトルが1つしかありません。\n\n' +
        'このような場合は「ジョルダン標準形」を使います：\n' +
        'A = PJP⁻¹（Jは対角に近い形）\n\n' +
        '幸い、物理や統計で登場する対称行列は必ず対角化できます。\n' +
        '実用上は対角化可能なケースが大半です。',
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
      title: 'まとめ：固有値分解',
      content:
        'この章のポイント：\n\n' +
        '1. 固有値分解：A = PDP⁻¹\n' +
        '2. Dは固有値の対角行列、Pは固有ベクトルの行列\n' +
        '3. 行列の累乗：Aⁿ = PDⁿP⁻¹\n' +
        '4. 対称行列は必ず実固有値 + 直交固有ベクトル\n' +
        '5. 対角化できない行列はジョルダン標準形\n\n' +
        '次は主成分分析（PCA）を学びます。',
      customScene: 'eigen-decomposition-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-v1',
            vector: new Vector3(1, 1, 0),
            color: '#ff4444',
            label: 'v₁',
          },
          {
            id: 'sum-v2',
            vector: new Vector3(1, -1, 0),
            color: '#44ff44',
            label: 'v₂',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
