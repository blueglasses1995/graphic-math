import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const shearTransformTutorial: Tutorial = {
  id: 'shear-transform',
  title: '【実践】せん断変形',
  description: 'せん断（シアー）変換を理解し、行列式が1でも空間が歪む変換を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'トランプの束を横にずらす',
      content:
        'トランプの束を横からスライドさせると、長方形が平行四辺形になります。\n\n' +
        'これが「せん断（シアー）変形」です。\n\n' +
        '面積は変わらない（det = 1）のに、形は大きく変わる。\n' +
        '回転でも拡大でもない、第3の基本変換です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'shear-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i（固定）',
          },
          {
            id: 'shear-j',
            vector: new Vector3(1, 1, 0),
            color: '#44ff44',
            label: 'せん断後のj',
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
      title: 'せん断を体験しよう',
      content:
        'X方向のせん断行列：\n' +
        'S = [[1, k], [0, 1]]\n\n' +
        'k = 1 のとき：\n' +
        '・i = (1,0) → (1,0)（変わらない）\n' +
        '・j = (0,1) → (1,1)（右にずれる）\n\n' +
        'det(S) = 1×1 - k×0 = 1\n\n' +
        '面積は保存されるが、正方形が平行四辺形に変形します。' +
        'kの値が大きいほど、傾きが大きくなります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'exp-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i（不変）',
          },
          {
            id: 'exp-j-before',
            vector: Vector3.j(),
            color: '#88ff88',
            label: 'j（元）',
          },
          {
            id: 'exp-j-after',
            vector: new Vector3(1, 1, 0),
            color: '#44ff44',
            label: 'Sj = (1, 1)',
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
      title: 'せん断の具体例',
      content:
        'S = [[1, 2], [0, 1]] でベクトル (1, 3) を変換：\n\n' +
        'S(1, 3) = (1×1 + 2×3, 0×1 + 1×3) = (7, 3)\n\n' +
        'Y座標は変わらず、X座標が「Y座標の2倍分」ずれました。\n\n' +
        '逆行列は：S⁻¹ = [[1, -2], [0, 1]]\n' +
        '（反対方向にせん断すれば元に戻る）\n\n' +
        'S⁻¹(7, 3) = (7-6, 3) = (1, 3) ✓',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ex-before',
            vector: new Vector3(1, 3, 0),
            color: '#ff4444',
            label: '(1, 3)',
          },
          {
            id: 'ex-after',
            vector: new Vector3(7, 3, 0),
            color: '#44ff44',
            label: 'せん断後 (7, 3)',
          },
        ],
        cameraPosition: [0, 0, 8],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'イタリック体の秘密',
      content:
        'パソコンでイタリック体を表示するとき、せん断変換が使われます。\n\n' +
        '普通の文字「A」にX方向のせん断を適用すると、\n' +
        '傾いた「A」（イタリック）になります。\n\n' +
        'フォントレンダリングでは：\n' +
        '[[1, 0.2], [0, 1]] のような小さなせん断を適用します。\n\n' +
        '同様に、建築で使われる「斜投影図」も' +
        'せん断変換で3Dを2Dに投影しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'italic-v',
            vector: new Vector3(0, 3, 0),
            color: '#ff4444',
            label: '普通の文字',
          },
          {
            id: 'italic-s',
            vector: new Vector3(0.6, 3, 0),
            color: '#44ff44',
            label: 'イタリック',
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
      title: 'クイズ：せん断変形',
      content: 'せん断変換の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'せん断行列 [[1, k], [0, 1]] の行列式はいくつですか？',
        options: [
          { id: 'a', label: 'k', correct: false },
          { id: 'b', label: '1 + k', correct: false },
          { id: 'c', label: '1', correct: true },
          { id: 'd', label: '1 - k', correct: false },
        ],
        explanation:
          'det = 1×1 - k×0 = 1 です。せん断は面積を保存する変換なので、行列式は常に1です。',
      },
    },
    {
      id: 'alternate',
      title: 'せん断と固有値',
      content:
        'せん断行列の固有値を調べると面白いことがわかります。\n\n' +
        'S = [[1, k], [0, 1]] の固有値は λ = 1（重解）\n\n' +
        'しかし固有ベクトルは (1, 0) 方向のみ。\n' +
        '2つの独立な固有ベクトルが見つかりません！\n\n' +
        'つまり、せん断行列は対角化できません。\n' +
        '代わりに「ジョルダン標準形」という形になります。\n\n' +
        '対角化できない行列の代表例として、せん断は重要です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-dir',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: '固有ベクトル方向',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：せん断変形',
      content:
        'この章のポイント：\n\n' +
        '1. せん断 = 一方向をずらす変換\n' +
        '2. S = [[1, k], [0, 1]]（X方向せん断）\n' +
        '3. det(S) = 1（面積保存）\n' +
        '4. 正方形 → 平行四辺形\n' +
        '5. イタリック体や斜投影で実用される\n' +
        '6. 対角化不可能（ジョルダン標準形）\n\n' +
        '次は画像変換を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'sum-j',
            vector: new Vector3(1, 1, 0),
            color: '#44ff44',
            label: 'せん断後のj',
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
