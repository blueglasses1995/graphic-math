import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const normsDistancesTutorial: Tutorial = {
  id: 'norms-distances',
  title: 'ノルムと距離',
  description: 'ベクトルの大きさを測る様々なノルムと距離の概念を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '大きさの測り方は一つではない',
      content:
        'ベクトルの「大きさ」を測る方法は一つではありません。\n\n' +
        'L2ノルム（ユークリッド距離）が最も一般的ですが、\n' +
        'L1ノルム（マンハッタン距離）、L∞ノルム（チェビシェフ距離）\n' +
        'など様々なノルムがあります。\n\n' +
        '機械学習では、どのノルムを使うかで\n' +
        'モデルの性質が大きく変わります。\n' +
        'それぞれの特徴を見ていきましょう。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'norms-distances-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '様々なノルムを体感',
      content:
        'ベクトル v = (3, 4) の各ノルム：\n\n' +
        'L1ノルム：|v|₁ = |3| + |4| = 7\n' +
        'L2ノルム：|v|₂ = √(3² + 4²) = 5\n' +
        'L∞ノルム：|v|∞ = max(|3|, |4|) = 4\n\n' +
        '単位円（ノルム=1の点の集合）の形が異なります：\n' +
        'L1：ひし形\n' +
        'L2：円\n' +
        'L∞：正方形\n\n' +
        'ノルムによって「等距離の形」が変わるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'norms-distances-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'Lpノルムの定義',
      content:
        '一般のLpノルム（p ≥ 1）は：\n' +
        '|v|_p = (Σ|vᵢ|ᵖ)^(1/p)\n\n' +
        'p=1：L1ノルム（マンハッタン距離）\n' +
        'p=2：L2ノルム（ユークリッド距離）\n' +
        'p→∞：L∞ノルム（最大成分）\n\n' +
        'ノルムの公理：\n' +
        '1. |v| ≥ 0、|v|=0 ⇔ v=0\n' +
        '2. |αv| = |α||v|（斉次性）\n' +
        '3. |u+v| ≤ |u|+|v|（三角不等式）\n\n' +
        'p < 1 の場合は三角不等式を満たさず、ノルムになりません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '機械学習での正則化',
      content:
        'ノルムは機械学習の正則化で重要な役割を果たします。\n\n' +
        'L2正則化（Ridge回帰）：\n' +
        '損失 + λ|w|₂² → パラメータを小さくする\n' +
        '重みが0にはならない（滑らかな縮小）\n\n' +
        'L1正則化（Lasso回帰）：\n' +
        '損失 + λ|w|₁ → 多くのパラメータが0になる\n' +
        'スパースな解（特徴選択効果）\n\n' +
        'L1の単位円（ひし形）は角があるため、\n' +
        '最適解が軸上（成分=0）に来やすいのです。\n' +
        'ノルムの幾何が最適化の性質を決めています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：ノルムと距離',
      content: 'ノルムの基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ベクトル (1, -2, 3) のL1ノルムはいくつですか？',
        options: [
          { id: 'a', label: '√14', correct: false },
          { id: 'b', label: '6', correct: true },
          { id: 'c', label: '3', correct: false },
          { id: 'd', label: '2', correct: false },
        ],
        explanation:
          'L1ノルムは各成分の絶対値の和です。|1| + |-2| + |3| = 1 + 2 + 3 = 6 です。',
      },
    },
    {
      id: 'alternate',
      title: '行列ノルム',
      content:
        '行列にもノルムを定義できます。\n\n' +
        'フロベニウスノルム：|A|_F = √(Σaᵢⱼ²)\n' +
        '全要素の二乗和の平方根。L2ノルムの行列版。\n\n' +
        'スペクトルノルム：|A|₂ = 最大特異値 σ₁\n' +
        '|Ax|₂/|x|₂ の最大値。行列の「最大引き伸ばし率」。\n\n' +
        '核ノルム：|A|_* = Σσᵢ（特異値の和）\n' +
        '低ランク行列の凸緩和で使われます。\n\n' +
        '行列ノルムは行列の「大きさ」や「安定性」を測る指標です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ノルムと距離',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. ノルムはベクトルの「大きさ」を測る関数\n' +
        '2. L1, L2, L∞など様々な種類がある\n' +
        '3. 単位円の形がノルムによって異なる\n' +
        '4. L1正則化はスパース解、L2正則化は滑らかな縮小\n' +
        '5. 行列にもフロベニウスノルム等が定義される\n\n' +
        'どのノルムを使うかが問題の性質を決めます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'norms-distances-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
