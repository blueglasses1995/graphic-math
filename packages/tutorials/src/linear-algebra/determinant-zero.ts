import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const determinantZeroTutorial: Tutorial = {
  id: 'determinant-zero',
  title: '行列式＝0の意味',
  description: '行列式が0になるとき空間が「潰れる」ことを理解し、その幾何学的意味を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '空間が潰れるとき',
      content:
        '行列式 = 0。これは面積が0になることを意味します。\n\n' +
        '2次元の正方形が、線や点に潰れてしまう。情報が失われる瞬間です。\n\n' +
        '一度潰れると元には戻せません。この不可逆性が' +
        '行列式0の最も重要な性質です。',
      customScene: 'determinant-zero-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'crush-i',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: '変換後のi',
          },
          {
            id: 'crush-j',
            vector: new Vector3(4, 2, 0),
            color: '#44ff44',
            label: '変換後のj',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '潰れる変換を観察しよう',
      content:
        '行列 [[2, 4], [1, 2]] を考えましょう。\n' +
        'det = 2×2 - 4×1 = 4 - 4 = 0\n\n' +
        '列ベクトルは (2,1) と (4,2)。あれ？ (4,2) = 2×(2,1) です！\n\n' +
        '2つの列ベクトルが同じ方向を向いているため、\n' +
        '変換後のすべての点は1本の直線上に乗ります。\n\n' +
        '2次元が1次元に「潰れた」のです。',
      customScene: 'determinant-zero-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'zero-col1',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: '列1 = (2, 1)',
          },
          {
            id: 'zero-col2',
            vector: new Vector3(4, 2, 0),
            color: '#44ff44',
            label: '列2 = (4, 2) = 2×列1',
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
      title: '列ベクトルの線形従属',
      content:
        'det = 0 の条件は、列ベクトルが線形従属であることと同値です。\n\n' +
        '[[1, 3], [2, 6]] → det = 1×6 - 3×2 = 0\n' +
        '列2 = 3×列1 なので線形従属。\n\n' +
        '[[1, 0, 2], [0, 1, 0], [0, 0, 0]] → det = 0\n' +
        '3行目がすべて0なので、3次元が2次元に潰れます。\n\n' +
        '列ベクトルが独立でない → 空間が潰れる → 面積/体積 = 0 → det = 0\n' +
        'すべてが美しくつながっています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'dep-col1',
            vector: new Vector3(1, 2, 0),
            color: '#ff4444',
            label: '列1 = (1, 2)',
          },
          {
            id: 'dep-col2',
            vector: new Vector3(3, 6, 0),
            color: '#44ff44',
            label: '列2 = (3, 6)',
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
      title: '逆行列が存在しない',
      content:
        'det = 0 のもう1つの重要な意味：逆行列が存在しません。\n\n' +
        '潰れた空間を元に戻すことはできないからです。\n' +
        '平面が直線になったとき、直線上のどの点が元の平面のどこにあったか' +
        '特定できません。情報が失われているのです。\n\n' +
        'det ≠ 0 → 逆行列が存在する（可逆）\n' +
        'det = 0 → 逆行列が存在しない（特異）\n\n' +
        'この判定は連立方程式が解けるかどうかにも直結します。',
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
      id: 'predict',
      title: 'クイズ：行列式ゼロ',
      content: '行列式が0になる条件を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち行列式が0になる行列はどれですか？',
        options: [
          { id: 'a', label: '[[1,0],[0,1]]', correct: false },
          { id: 'b', label: '[[3,6],[1,2]]', correct: true },
          { id: 'c', label: '[[2,1],[1,2]]', correct: false },
          { id: 'd', label: '[[1,2],[3,4]]', correct: false },
        ],
        explanation:
          '[[3,6],[1,2]] の det = 3×2 - 6×1 = 0。列2 = 2×列1 で線形従属です。',
      },
    },
    {
      id: 'alternate',
      title: '連立方程式との関係',
      content:
        '連立方程式 Ax = b を考えましょう。\n\n' +
        'det(A) ≠ 0 のとき：\n' +
        '・解はただ1つ存在する\n' +
        '・A⁻¹b で計算できる\n\n' +
        'det(A) = 0 のとき：\n' +
        '・解がない（不能）か、無数にある（不定）\n' +
        '・bが列空間に入るかどうかで決まる\n\n' +
        '行列式は「この方程式は解ける？」という問いへの' +
        '最初の手がかりを与えてくれるのです。',
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
      title: 'まとめ：行列式＝0',
      content:
        'この章のポイント：\n\n' +
        '1. det = 0 → 空間が潰れる（次元が下がる）\n' +
        '2. 列ベクトルが線形従属 ⟺ det = 0\n' +
        '3. det = 0 → 逆行列が存在しない（特異行列）\n' +
        '4. 連立方程式：det ≠ 0 なら唯一解\n' +
        '5. 情報の損失：一度潰れると元に戻せない\n\n' +
        '次は逆行列について詳しく学びましょう。',
      customScene: 'determinant-zero-summary',
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
