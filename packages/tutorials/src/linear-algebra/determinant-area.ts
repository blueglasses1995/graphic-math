import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const determinantAreaTutorial: Tutorial = {
  id: 'determinant-area',
  title: '行列式：面積の変化',
  description: '行列式が線形変換による面積（体積）の変化率を表すことを理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '変換で面積はどう変わる？',
      content:
        '正方形のゴムシートを引っ張って変形させると、面積は変わります。\n\n' +
        '2倍に引き伸ばせば面積は4倍。斜めに傾けると面積は？\n\n' +
        '行列式（determinant）は、線形変換が面積をどれだけ変えるかを' +
        '1つの数値で教えてくれます。魔法のような数値です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'unit-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'unit-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
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
      title: '面積の変化を観察しよう',
      content:
        'i = (1,0) と j = (0,1) が作る単位正方形の面積は1です。\n\n' +
        '変換後、i → (2,0)、j → (0,3) になったとしましょう。\n' +
        '新しい長方形の面積は 2 × 3 = 6 です。\n\n' +
        'この場合の行列式 = 6。面積が6倍になったという意味です。\n\n' +
        '行列 [[2,0],[0,3]] の行列式 = 2×3 - 0×0 = 6',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'det-i',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: '変換後のi',
          },
          {
            id: 'det-j',
            vector: new Vector3(0, 3, 0),
            color: '#44ff44',
            label: '変換後のj',
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
      title: '2×2行列式の計算',
      content:
        '2×2行列 [[a, b], [c, d]] の行列式は：\n' +
        'det = ad - bc\n\n' +
        '具体例：A = [[3, 1], [2, 4]]\n' +
        'det(A) = 3×4 - 1×2 = 12 - 2 = 10\n\n' +
        'この変換は面積を10倍にします。\n\n' +
        '直感的には「対角線の積の差」です。\n' +
        '主対角線（左上→右下）の積から、副対角線（右上→左下）の積を引きます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ex1-col1',
            vector: new Vector3(3, 2, 0),
            color: '#ff4444',
            label: '列1 = (3, 2)',
          },
          {
            id: 'ex1-col2',
            vector: new Vector3(1, 4, 0),
            color: '#44ff44',
            label: '列2 = (1, 4)',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '負の行列式 = 裏返し',
      content:
        '行列式が負になることがあります。例えば：\n\n' +
        'A = [[0, 1], [1, 0]]  det(A) = 0×0 - 1×1 = -1\n\n' +
        'この行列はx軸とy軸を入れ替えます（鏡映）。\n' +
        '面積の大きさは変わりませんが、「向き」が反転します。\n\n' +
        '右手系が左手系に変わる感じです。\n' +
        '紙を裏返すとき、面積は変わりませんが表裏が入れ替わります。\n\n' +
        '|det| = 面積の倍率\n' +
        'detの符号 = 向きが保たれるか反転するか',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'neg-i',
            vector: new Vector3(0, 1, 0),
            color: '#ff4444',
            label: '変換後のi = (0,1)',
          },
          {
            id: 'neg-j',
            vector: new Vector3(1, 0, 0),
            color: '#44ff44',
            label: '変換後のj = (1,0)',
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
      title: 'クイズ：行列式',
      content: '行列式の計算に挑戦しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '行列 [[2, 3], [1, 4]] の行列式はいくつですか？',
        options: [
          { id: 'a', label: '11', correct: false },
          { id: 'b', label: '5', correct: true },
          { id: 'c', label: '-5', correct: false },
          { id: 'd', label: '8', correct: false },
        ],
        explanation:
          'det = 2×4 - 3×1 = 8 - 3 = 5 です。この変換は面積を5倍にします。',
      },
    },
    {
      id: 'alternate',
      title: '3Dでは体積の変化',
      content:
        '3×3行列の行列式は「体積の変化率」を表します。\n\n' +
        '2Dの面積が3Dでは体積に置き換わるだけで、考え方は同じです。\n\n' +
        '単位立方体が変換後にどれだけの体積になるか：\n' +
        '・det > 0：体積がdet倍（向き保存）\n' +
        '・det < 0：体積が|det|倍（向き反転）\n' +
        '・det = 0：体積が0（潰れる）← 次の章で詳しく\n\n' +
        'この「潰れる」ケースは特に重要です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vol-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vol-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vol-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：行列式',
      content:
        'この章のポイント：\n\n' +
        '1. 行列式 = 変換による面積（体積）の変化率\n' +
        '2. 2×2：det([[a,b],[c,d]]) = ad - bc\n' +
        '3. det > 0：向きが保存される\n' +
        '4. det < 0：向きが反転する\n' +
        '5. |det|：面積/体積の倍率\n' +
        '6. 3Dでは体積の変化率\n\n' +
        '次は det = 0 の特別な意味を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
