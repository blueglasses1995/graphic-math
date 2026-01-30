import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const svdIntroTutorial: Tutorial = {
  id: 'svd-intro',
  title: '特異値分解SVD入門',
  description: '任意の行列を3つの行列の積に分解する特異値分解の基本概念を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'どんな行列も分解できる',
      content:
        '正方行列でなくても、逆行列が存在しなくても、\n' +
        'あらゆる行列を美しく分解できる方法があります。\n\n' +
        'それが特異値分解（SVD: Singular Value Decomposition）です。\n\n' +
        '任意の m×n 行列 A は A = UΣV^T と分解できます。\n' +
        'ここで U と V は直交行列、Σ は対角行列です。\n\n' +
        'SVDは画像圧縮、推薦システム、自然言語処理など\n' +
        '現代のデータサイエンスで最も重要な分解の一つです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'svd-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'SVDの幾何学的意味を体感しよう',
      content:
        'SVD A = UΣV^T の各行列は幾何学的な意味を持ちます。\n\n' +
        'V^T：入力空間での回転\n' +
        'Σ：各軸方向へのスケーリング\n' +
        'U：出力空間での回転\n\n' +
        'つまり、どんな線形変換も「回転→拡大縮小→回転」に分解できるのです。\n' +
        '円がまず回転し、楕円に引き伸ばされ、さらに回転する様子を\n' +
        '想像してみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'svd-intro-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '特異値とは何か',
      content:
        '行列 A の特異値は Σ の対角成分 σ₁ ≥ σ₂ ≥ ... ≥ 0 です。\n\n' +
        '特異値は「変換がどれだけ各方向に引き伸ばすか」を表します。\n' +
        '例えば 2×2 行列 A = [[3,0],[0,2]] なら\n' +
        '特異値は σ₁ = 3, σ₂ = 2 です。\n\n' +
        '特異値の2乗は A^T A の固有値に等しく、\n' +
        '特異値は常に非負です。\n\n' +
        '大きな特異値は「データの重要な方向」を示し、\n' +
        '小さな特異値は「ノイズ」に対応することが多いです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '低ランク近似',
      content:
        'SVDの最も強力な応用の一つが「低ランク近似」です。\n\n' +
        '特異値を大きいものから k 個だけ残すと、\n' +
        '元の行列のランク k の最良近似が得られます。\n\n' +
        'A ≈ σ₁u₁v₁^T + σ₂u₂v₂^T + ... + σₖuₖvₖ^T\n\n' +
        'これはEckart-Youngの定理として知られ、\n' +
        'フロベニウスノルムの意味で最適な近似です。\n\n' +
        '1000×1000の行列でもk=10で良い近似ができれば、\n' +
        '必要なデータ量は 1/50 になります！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：SVDの性質',
      content: 'SVDの基本を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'SVD A = UΣV^T において、Σの対角成分（特異値）の性質として正しいものはどれですか？',
        options: [
          { id: 'a', label: '負の値を取ることがある', correct: false },
          { id: 'b', label: '常に非負で降順に並べる', correct: true },
          { id: 'c', label: '常に整数値である', correct: false },
          { id: 'd', label: '行列の要素と等しい', correct: false },
        ],
        explanation:
          '特異値は常に非負（σᵢ ≥ 0）で、慣例として降順 σ₁ ≥ σ₂ ≥ ... ≥ 0 に並べます。これはA^TAの固有値の平方根に等しいです。',
      },
    },
    {
      id: 'alternate',
      title: 'SVDと固有値分解の違い',
      content:
        '固有値分解は正方行列にしか適用できませんが、\n' +
        'SVDはどんな行列にも適用できます。\n\n' +
        '正方行列 A の固有値分解：A = PDP⁻¹\n' +
        '任意の行列 A のSVD：A = UΣV^T\n\n' +
        '対称行列の場合、固有値分解とSVDは本質的に同じです。\n' +
        'このとき U = V となり、特異値は固有値の絶対値になります。\n\n' +
        'SVDは固有値分解の「一般化」と考えることができます。',
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
      title: 'まとめ：特異値分解SVD',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. SVDは任意の行列を A = UΣV^T に分解する\n' +
        '2. 幾何的には「回転→拡大縮小→回転」\n' +
        '3. 特異値は変換の各方向への伸縮度を表す\n' +
        '4. 低ランク近似でデータ圧縮が可能\n' +
        '5. 固有値分解の一般化である\n\n' +
        '次の章ではSVDの具体的応用として画像圧縮を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 6],
      },
      customScene: 'svd-intro-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
