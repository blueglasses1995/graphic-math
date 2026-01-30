import { Tutorial } from '../types';

export const projectionDistanceTutorial: Tutorial = {
  id: 'projection-distance',
  title: '射影と最小距離',
  description: '部分空間への射影と最小距離の関係を幾何的に理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '最も近い点を見つける',
      content:
        '3次元空間の点から平面への最短距離はどう求める？\n\n' +
        '答えは「射影（プロジェクション）」です。\n' +
        '点から平面に垂線を下ろした足が射影で、\n' +
        'その距離が最短距離になります。\n\n' +
        'この単純な幾何学的アイデアが、\n' +
        '最小二乗法やフーリエ近似の数学的基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '射影を体感',
      content:
        'ベクトル b をベクトル a に射影する公式：\n\n' +
        'proj_a(b) = (a·b / a·a) a\n\n' +
        '誤差ベクトル e = b - proj_a(b) は a に直交します。\n' +
        'e·a = 0\n\n' +
        'これは「直交原理」と呼ばれ、\n' +
        '射影が最小距離点であることの証明です。\n\n' +
        '部分空間への射影行列 P = A(A^TA)⁻¹A^T も\n' +
        '同じ原理から導かれます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '射影行列の性質',
      content:
        '射影行列 P には重要な性質があります：\n\n' +
        '1. P² = P（べき等性：2回射影しても同じ）\n' +
        '2. P^T = P（対称：直交射影の場合）\n' +
        '3. 固有値は0か1のみ\n\n' +
        '例：a = (1,1) 方向への射影行列\n' +
        'P = (1/2)[[1,1],[1,1]]\n\n' +
        '確認：P² = (1/4)[[2,2],[2,2]] = (1/2)[[1,1],[1,1]] = P ✓\n\n' +
        'I - P も射影行列で、直交補空間への射影です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '最小二乗法との関係',
      content:
        '連立方程式 Ax = b に解がないとき、\n' +
        '最も近い解（最小二乗解）を求めます。\n\n' +
        'b の列空間 C(A) への射影 p = Ax̂ が最小距離点で、\n' +
        '正規方程式 A^T A x̂ = A^T b から x̂ が求まります。\n\n' +
        '残差 e = b - Ax̂ は列空間に直交します：\n' +
        'A^T e = A^T(b - Ax̂) = A^Tb - A^TAx̂ = 0\n\n' +
        '回帰分析のフィッティングは\n' +
        'まさに「データ空間での射影」なのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：射影と最小距離',
      content: '射影の性質を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '射影行列 P の固有値として正しい組み合わせはどれですか？',
        options: [
          { id: 'a', label: '1と-1', correct: false },
          { id: 'b', label: '0と1', correct: true },
          { id: 'c', label: '0のみ', correct: false },
          { id: 'd', label: '任意の実数', correct: false },
        ],
        explanation:
          'P²=P より Pv=λv なら λ²v=λv、つまり λ(λ-1)=0。よって固有値は0か1のみです。1の固有空間が射影先、0の固有空間が核です。',
      },
    },
    {
      id: 'alternate',
      title: 'フーリエ近似は射影',
      content:
        'フーリエ級数の部分和は関数空間での射影です。\n\n' +
        '関数 f(x) を sin, cos の有限個で近似するとき、\n' +
        'フーリエ係数は「三角関数方向への射影」です。\n\n' +
        'この近似はL2ノルムの意味で最良近似\n' +
        '（最小距離近似）になっています。\n\n' +
        '有限次元のベクトル射影と無限次元の関数射影は\n' +
        '全く同じ数学的原理に基づいています。\n\n' +
        '射影は「最良近似」の統一的な枠組みなのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：射影と最小距離',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 射影は部分空間への最短距離点\n' +
        '2. 直交原理：誤差は部分空間に直交\n' +
        '3. 射影行列はP²=P, P^T=Pを満たす\n' +
        '4. 最小二乗法は列空間への射影\n' +
        '5. フーリエ近似も射影の一種\n\n' +
        '射影は近似と最適化の幾何学的基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
