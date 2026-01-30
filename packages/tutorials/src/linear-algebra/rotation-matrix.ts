import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const rotationMatrixTutorial: Tutorial = {
  id: 'rotation-matrix',
  title: '【実践】回転行列',
  description: '回転を行列で表す方法を学び、2Dと3Dの回転行列を構成する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '世界を回転させる',
      content:
        'ゲームのキャラクターを回転させる。画像を傾ける。ロボットの腕を動かす。\n\n' +
        'これらすべてに使われるのが「回転行列」です。\n\n' +
        'たった4つの数（2Dの場合）で、あらゆる回転を表現できます。\n' +
        'その秘密はcos（コサイン）とsin（サイン）にあります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'rot-before',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: '回転前',
          },
          {
            id: 'rot-after',
            vector: new Vector3(0, 2, 0),
            color: '#44ff44',
            label: '90°回転後',
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
      title: '回転を体験しよう',
      content:
        '角度θの回転行列（2D）：\n' +
        'R(θ) = [[cos θ, -sin θ], [sin θ, cos θ]]\n\n' +
        'θ = 90° のとき：\n' +
        'R(90°) = [[0, -1], [1, 0]]\n\n' +
        '検証：(1, 0) → (0, 1) ✓ X軸が Y軸に移る\n' +
        '      (0, 1) → (-1, 0) ✓ Y軸が -X軸に移る\n\n' +
        '反時計回りに90度回転していることが確認できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'rot-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'rot-i-after',
            vector: Vector3.j(),
            color: '#ff8888',
            label: 'R(90°)i = j',
          },
          {
            id: 'rot-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'rot-j-after',
            vector: new Vector3(-1, 0, 0),
            color: '#88ff88',
            label: 'R(90°)j = -i',
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
      title: '45度回転',
      content:
        'θ = 45° の場合：\n' +
        'cos(45°) = sin(45°) = √2/2 ≈ 0.707\n\n' +
        'R(45°) = [[0.707, -0.707], [0.707, 0.707]]\n\n' +
        '(1, 0) → (0.707, 0.707) ← 右上45度方向\n\n' +
        '回転行列の重要な性質：\n' +
        '・det(R) = cos²θ + sin²θ = 1（面積を保存）\n' +
        '・R⁻¹ = Rᵀ（転置が逆行列）\n' +
        '・R(θ₁)R(θ₂) = R(θ₁ + θ₂)（回転の合成 = 角度の和）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: '45-before',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: '元のベクトル',
          },
          {
            id: '45-after',
            vector: new Vector3(1.414, 1.414, 0),
            color: '#44ff44',
            label: '45°回転後',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '3D回転',
      content:
        '3Dでは回転軸を指定する必要があります。\n\n' +
        'Z軸周りの回転：\n' +
        'Rz(θ) = [[cosθ, -sinθ, 0], [sinθ, cosθ, 0], [0, 0, 1]]\n\n' +
        'X軸周りの回転：\n' +
        'Rx(θ) = [[1, 0, 0], [0, cosθ, -sinθ], [0, sinθ, cosθ]]\n\n' +
        'Y軸周りの回転：\n' +
        'Ry(θ) = [[cosθ, 0, sinθ], [0, 1, 0], [-sinθ, 0, cosθ]]\n\n' +
        '3Dでは回転の合成順序が結果に影響します（非可換）。' +
        'これが3D回転の難しさであり面白さです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: '3d-rot-v',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'v',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：回転行列',
      content: '回転行列の性質を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '2D回転行列の行列式は常にいくつですか？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '1', correct: true },
          { id: 'c', label: '-1', correct: false },
          { id: 'd', label: '角度θに依存する', correct: false },
        ],
        explanation:
          'det(R(θ)) = cos²θ + sin²θ = 1 です。回転は面積を変えず、向きも保存します。',
      },
    },
    {
      id: 'alternate',
      title: '回転の応用',
      content:
        '回転行列の実用例：\n\n' +
        '・CG/ゲーム：カメラの回転、キャラクターの向き\n' +
        '・ロボティクス：関節の角度制御\n' +
        '・航空：ロール・ピッチ・ヨーの3軸回転\n' +
        '・画像処理：画像の回転補正\n\n' +
        '実務では「オイラー角」「クォータニオン」「回転行列」の3つの表現が使われます。\n' +
        '回転行列は直感的ですが、3D回転の合成には' +
        'ジンバルロック問題があるため、クォータニオンが好まれることもあります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：回転行列',
      content:
        'この章のポイント：\n\n' +
        '1. 2D回転：R(θ) = [[cosθ, -sinθ], [sinθ, cosθ]]\n' +
        '2. det(R) = 1（面積保存、向き保存）\n' +
        '3. R⁻¹ = Rᵀ（直交行列）\n' +
        '4. 3Dでは回転軸ごとに別の行列\n' +
        '5. 回転の合成順序は重要（非可換）\n\n' +
        '次は鏡映変換を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-v',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: '元',
          },
          {
            id: 'sum-rotated',
            vector: new Vector3(0, 2, 0),
            color: '#44ff44',
            label: '90°回転',
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
