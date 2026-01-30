import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const skinningAnimationTutorial: Tutorial = {
  id: 'skinning-animation',
  title: 'スキニングと骨格アニメーション',
  description: '3Dキャラクターアニメーションにおける行列ブレンディングを学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'キャラクターを動かす行列',
      content:
        '3Dゲームのキャラクターが歩く、走る、ジャンプする。\n' +
        'その滑らかな動きは「骨格アニメーション」で実現されます。\n\n' +
        'キャラクターの内部には骨格（ボーン）があり、\n' +
        '各ボーンは4×4変換行列で位置と回転が定義されます。\n\n' +
        'メッシュの各頂点は複数のボーンの影響を受け、\n' +
        '行列のブレンド（混合）で最終位置が決まります。\n' +
        'これが「スキニング」です。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'skinning-animation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '線形ブレンドスキニング（LBS）',
      content:
        '各頂点の変形後の位置：\n\n' +
        'v\' = Σᵢ wᵢ Mᵢ v\n\n' +
        'wᵢ：ボーンiの重み（Σwᵢ=1）\n' +
        'Mᵢ：ボーンiの変換行列（4×4）\n' +
        'v：元の頂点位置\n\n' +
        '例：肘の関節付近の頂点は\n' +
        '上腕ボーン（w₁=0.6）と前腕ボーン（w₂=0.4）の\n' +
        '変換を混合して計算します。\n\n' +
        'シンプルですが「candy wrapper」アーティファクト\n' +
        '（ねじれ変形）が起きる欠点があります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'skinning-animation-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ボーン階層と行列の連鎖',
      content:
        '骨格は階層構造（ツリー）を持ちます。\n\n' +
        '根（腰）→ 背骨 → 肩 → 上腕 → 前腕 → 手\n\n' +
        '各ボーンのワールド変換行列は親からの連鎖：\n' +
        'M_world = M_parent × M_local\n\n' +
        '手のワールド行列 = M_腰 × M_背骨 × M_肩 × M_上腕 × M_前腕 × M_手\n\n' +
        '腰を回転すると、その下の全ボーンが一緒に回転します。\n' +
        '行列の積の結合法則がこの階層的な変換を支えています。\n\n' +
        'キャラクターの全ボーン（通常50〜200個）の\n' +
        '行列を毎フレーム更新する必要があります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'GPUでのスキニング計算',
      content:
        'スキニング計算はGPUの頂点シェーダで実行されます。\n\n' +
        'uniform mat4 bones[MAX_BONES];\n' +
        'attribute vec4 weights;\n' +
        'attribute ivec4 boneIndices;\n\n' +
        '// 頂点シェーダ\n' +
        'mat4 skinMatrix = \n' +
        '  weights.x * bones[boneIndices.x] +\n' +
        '  weights.y * bones[boneIndices.y] +\n' +
        '  weights.z * bones[boneIndices.z] +\n' +
        '  weights.w * bones[boneIndices.w];\n' +
        'gl_Position = skinMatrix * position;\n\n' +
        '数万頂点の計算がGPUで並列実行されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：スキニング',
      content: '骨格アニメーションの理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '線形ブレンドスキニングで頂点が4つのボーンの影響を受ける場合、各ボーンの重みの合計は？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '0.5', correct: false },
          { id: 'c', label: '1', correct: true },
          { id: 'd', label: '4', correct: false },
        ],
        explanation:
          '重みの合計は常に1です（Σwᵢ=1）。これにより変換行列の凸結合になり、頂点が元のボーンの変換の「間」に配置されます。',
      },
    },
    {
      id: 'alternate',
      title: 'デュアルクォータニオンスキニング',
      content:
        '線形ブレンドスキニング（LBS）の欠点を改善する\n' +
        'デュアルクォータニオンスキニング（DQS）があります。\n\n' +
        'LBSの問題：行列の線形補間は\n' +
        '回転部分を正しく補間できず、\n' +
        'ねじれ時に体積が縮む（candy wrapper）。\n\n' +
        'DQSはデュアルクォータニオンで回転+平行移動を\n' +
        '正しく補間するため、ねじれ変形が改善されます。\n\n' +
        '最新のゲームエンジン（Unreal, Unity）は\n' +
        '両方のスキニング手法をサポートしています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：スキニングと骨格アニメーション',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 骨格アニメーション：ボーンの4×4変換行列の階層\n' +
        '2. 線形ブレンドスキニング：v\' = Σwᵢ Mᵢ v\n' +
        '3. ボーン階層は行列の連鎖的な積\n' +
        '4. GPUの頂点シェーダで並列計算\n' +
        '5. DQSでねじれアーティファクトを改善\n\n' +
        '3Dアニメーションは行列演算の芸術です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'skinning-animation-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
