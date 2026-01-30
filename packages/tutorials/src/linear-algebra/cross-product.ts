import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const crossProductTutorial: Tutorial = {
  id: 'cross-product',
  title: 'クロス積の幾何学',
  description: 'クロス積（外積）の計算方法と幾何学的意味を理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '2つのベクトルに垂直な第3のベクトル',
      content:
        'ドット積は「数」を返しましたが、クロス積は「ベクトル」を返します。\n\n' +
        'しかも、入力の2つのベクトル両方に垂直なベクトルです！\n\n' +
        '2本の矢印が張る平面に対して、まっすぐ立ち上がる矢印。' +
        'これがクロス積の幾何学的な意味です。\n\n' +
        '注意：クロス積は3D空間でのみ定義されます。',
      customScene: 'cross-product-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'cross-a',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'cross-b',
            vector: new Vector3(0, 3, 0),
            color: '#44ff44',
            label: 'b',
          },
          {
            id: 'cross-result',
            vector: new Vector3(0, 0, 6),
            color: '#4444ff',
            label: 'a × b',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'クロス積を体験しよう',
      content:
        'a = (2, 0, 0) と b = (0, 3, 0) のクロス積：\n\n' +
        'a × b = (0×0 - 0×3, 0×0 - 2×0, 2×3 - 0×0)\n' +
        '      = (0, 0, 6)\n\n' +
        'Z軸方向のベクトルが得られました。\n' +
        'X軸とY軸に垂直 → Z軸。直感通りです。\n\n' +
        '大きさ |a × b| = 6 は、aとbが作る平行四辺形の面積に等しい！',
      customScene: 'cross-product-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'exp-a',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: 'a = (2, 0, 0)',
          },
          {
            id: 'exp-b',
            vector: new Vector3(0, 3, 0),
            color: '#44ff44',
            label: 'b = (0, 3, 0)',
          },
          {
            id: 'exp-cross',
            vector: new Vector3(0, 0, 6),
            color: '#4444ff',
            label: 'a × b = (0, 0, 6)',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '計算公式',
      content:
        'a = (a₁, a₂, a₃), b = (b₁, b₂, b₃) のとき：\n\n' +
        'a × b = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁)\n\n' +
        '覚え方：行列式で書くと\n' +
        'a × b = det([[i, j, k], [a₁, a₂, a₃], [b₁, b₂, b₃]])\n\n' +
        '具体例：a = (1, 2, 3), b = (4, 5, 6)\n' +
        'a × b = (2×6-3×5, 3×4-1×6, 1×5-2×4)\n' +
        '      = (12-15, 12-6, 5-8)\n' +
        '      = (-3, 6, -3)',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'formula-a',
            vector: new Vector3(1, 2, 3),
            color: '#ff4444',
            label: 'a = (1, 2, 3)',
          },
          {
            id: 'formula-b',
            vector: new Vector3(4, 5, 6),
            color: '#44ff44',
            label: 'b = (4, 5, 6)',
          },
          {
            id: 'formula-cross',
            vector: new Vector3(-3, 6, -3),
            color: '#4444ff',
            label: 'a × b',
          },
        ],
        cameraPosition: [5, 5, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '右手の法則',
      content:
        'クロス積の方向は「右手の法則」で決まります。\n\n' +
        '右手で：\n' +
        '・人差し指をaの方向に\n' +
        '・中指をbの方向に曲げる\n' +
        '・親指の方向が a × b\n\n' +
        '重要な性質：a × b = -(b × a)\n\n' +
        '順序を入れ替えると方向が逆転します！\n' +
        'ドット積は a · b = b · a でしたが、クロス積は反交換的です。\n' +
        'また、a × a = 0（自分自身とのクロス積は常にゼロ）です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'rhr-a',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: 'a (人差し指)',
          },
          {
            id: 'rhr-b',
            vector: new Vector3(0, 1, 0),
            color: '#44ff44',
            label: 'b (中指)',
          },
          {
            id: 'rhr-cross',
            vector: new Vector3(0, 0, 1),
            color: '#4444ff',
            label: 'a × b (親指)',
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
      title: 'クイズ：クロス積',
      content: 'クロス積の性質を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'i × j（標準基底のクロス積）はどれですか？',
        options: [
          { id: 'a', label: 'i', correct: false },
          { id: 'b', label: 'j', correct: false },
          { id: 'c', label: 'k', correct: true },
          { id: 'd', label: '-k', correct: false },
        ],
        explanation:
          'i × j = (1,0,0) × (0,1,0) = (0×0-0×1, 0×0-1×0, 1×1-0×0) = (0,0,1) = k です。右手の法則でも確認できます。',
      },
    },
    {
      id: 'alternate',
      title: '物理での応用',
      content:
        'クロス積は物理学で頻出します。\n\n' +
        'トルク（回転力）：τ = r × F\n' +
        '位置ベクトルrと力Fのクロス積 = 回転の軸と強さ\n\n' +
        '磁場中の力：F = qv × B\n' +
        '荷電粒子の速度vと磁場Bのクロス積 = ローレンツ力\n\n' +
        '角運動量：L = r × p\n' +
        '回転する物体の「回転の勢い」を表します。\n\n' +
        'すべて「2つの方向から直交する第3の方向」を得る操作です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'phys-r',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: 'r',
          },
          {
            id: 'phys-f',
            vector: new Vector3(0, 3, 0),
            color: '#44ff44',
            label: 'F',
          },
          {
            id: 'phys-torque',
            vector: new Vector3(0, 0, 6),
            color: '#4444ff',
            label: 'τ = r × F',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：クロス積',
      content:
        'この章のポイント：\n\n' +
        '1. クロス積はベクトルを返す（3D限定）\n' +
        '2. a × bはaとb両方に垂直\n' +
        '3. |a × b| = 平行四辺形の面積 = |a||b|sin(θ)\n' +
        '4. 方向は右手の法則で決まる\n' +
        '5. 反交換的：a × b = -(b × a)\n' +
        '6. 物理学（トルク、磁場、角運動量）で活躍\n\n' +
        '次は基底の変換を学びます。座標系を変えると何が起きるでしょうか？',
      customScene: 'cross-product-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-a',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'sum-b',
            vector: new Vector3(0, 3, 0),
            color: '#44ff44',
            label: 'b',
          },
          {
            id: 'sum-cross',
            vector: new Vector3(0, 0, 6),
            color: '#4444ff',
            label: 'a × b',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
