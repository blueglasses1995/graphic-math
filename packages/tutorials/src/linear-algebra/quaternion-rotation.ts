import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const quaternionRotationTutorial: Tutorial = {
  id: 'quaternion-rotation',
  title: 'クォータニオンと回転',
  description: 'ジンバルロックを回避する四元数による3D回転の仕組みを学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '回転行列の限界を超える',
      content:
        '3D回転には回転行列やオイラー角が使えますが、\n' +
        'オイラー角には「ジンバルロック」という致命的問題があります。\n\n' +
        '特定の角度で自由度が1つ失われ、\n' +
        '滑らかな回転ができなくなるのです。\n\n' +
        'クォータニオン（四元数）はこの問題を解決し、\n' +
        'ゲーム・アニメーション・ロボティクスで\n' +
        '標準的に使われています。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'quaternion-rotation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'クォータニオンを体感',
      content:
        'クォータニオン q = w + xi + yj + zk\n' +
        '4つの実数成分 (w, x, y, z) で表します。\n\n' +
        'i² = j² = k² = ijk = -1\n\n' +
        '単位クォータニオン（|q|=1）が回転を表します：\n' +
        'q = cos(θ/2) + sin(θ/2)(nxi + nyj + nzk)\n\n' +
        'θ：回転角、n=(nx,ny,nz)：回転軸（単位ベクトル）\n\n' +
        '角度が半分になるのがポイントです！\n' +
        '360°回転で q = -1 となり、720°で q = 1 に戻ります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'quaternion-rotation-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'クォータニオンによる回転',
      content:
        '点 p = (px,py,pz) を回転するには：\n\n' +
        '1. p をクォータニオンに：P = 0 + pxi + pyj + pzk\n' +
        '2. 回転：P\' = qPq⁻¹ = qPq*（q*は共役）\n' +
        '3. P\' の虚部が回転後の座標\n\n' +
        '例：Z軸周りに90°回転\n' +
        'q = cos(45°) + sin(45°)k = (√2/2)(1 + k)\n' +
        'P = i（点(1,0,0)）\n' +
        'P\' = qPq* = j（点(0,1,0)）✓\n\n' +
        '回転行列に変換することもでき、\n' +
        '3×3行列と相互変換可能です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'Slerp：滑らかな補間',
      content:
        'クォータニオンの最大の利点の一つが\n' +
        '滑らかな回転補間（Slerp）です。\n\n' +
        'Slerp(q₁, q₂, t) = q₁(q₁⁻¹q₂)^t\n\n' +
        't=0でq₁、t=1でq₂、その間は滑らかに補間。\n\n' +
        '回転行列の線形補間では回転にならない（歪む）のに対し、\n' +
        'Slerpは常に有効な回転を与え、\n' +
        '一定の角速度で回転します。\n\n' +
        '3Dアニメーションのキーフレーム間の補間に不可欠です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：クォータニオン',
      content: 'クォータニオンの基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'クォータニオンがオイラー角より優れている主な理由は？',
        options: [
          { id: 'a', label: '計算が簡単だから', correct: false },
          { id: 'b', label: 'ジンバルロックが発生しないから', correct: true },
          { id: 'c', label: 'メモリ使用量が少ないから', correct: false },
          { id: 'd', label: '2D回転にも使えるから', correct: false },
        ],
        explanation:
          'オイラー角は3つの軸回りの回転の合成ですが、特定の角度で2つの軸が揃ってしまうジンバルロックが発生します。クォータニオンはこの問題を回避できます。',
      },
    },
    {
      id: 'alternate',
      title: 'デュアルクォータニオン',
      content:
        'デュアルクォータニオンは回転と平行移動を\n' +
        '同時に表現する拡張です。\n\n' +
        'q̂ = q_r + εq_d（ε²=0、εは二重数の虚数単位）\n\n' +
        'q_r：回転クォータニオン\n' +
        'q_d：平行移動の情報を含む\n\n' +
        'スキニング（骨格アニメーション）での\n' +
        '頂点ブレンディングにおいて、\n' +
        '行列のブレンドよりも変形が美しくなります。\n\n' +
        '「線形ブレンドスキニング」の改善として\n' +
        'ゲーム開発で注目されています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：クォータニオンと回転',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. クォータニオン q = w + xi + yj + zk\n' +
        '2. 回転は q = cos(θ/2) + sin(θ/2)n で表現\n' +
        '3. 回転の適用：P\' = qPq*\n' +
        '4. Slerpで滑らかな回転補間が可能\n' +
        '5. ジンバルロックを回避できる\n\n' +
        'クォータニオンは3D回転の最も実用的な表現です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'quaternion-rotation-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
