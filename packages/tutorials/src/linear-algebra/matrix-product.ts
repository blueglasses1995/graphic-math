import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const matrixProductTutorial: Tutorial = {
  id: 'matrix-product',
  title: '行列の積＝変換の合成',
  description: '行列の掛け算が変換の合成を意味することを視覚的に理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '変換を重ねるとどうなる？',
      content:
        'まず回転して、次に拡大する。2つの変換を続けて行うとどうなるでしょう？\n\n' +
        '実は、2つの行列の「積」を計算すれば、1回の変換で同じ結果が得られます。\n\n' +
        '行列の掛け算 = 変換の合成。これが行列積の本質です。' +
        '複雑な操作も、1つの行列にまとめられるのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'matrix-product-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '合成を体験しよう',
      content:
        '回転の後に拡大。拡大の後に回転。結果は同じでしょうか？\n\n' +
        '実は、行列の積は一般に交換法則が成り立ちません：\n' +
        'AB ≠ BA\n\n' +
        '変換の順序が重要なのです。靴下を履いてから靴を履くのと、' +
        '靴を履いてから靴下を履くのでは結果が違うのと同じです。\n\n' +
        'この「順序の非対称性」が行列の面白いところです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'matrix-product-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '行列積の計算方法',
      content:
        '2×2行列の積を計算してみましょう。\n\n' +
        'A = [[a, b], [c, d]]  B = [[e, f], [g, h]]\n\n' +
        'AB = [[ae+bg, af+bh], [ce+dg, cf+dh]]\n\n' +
        '「行×列」の規則：Aのi行目とBのj列目の内積がABの(i,j)成分です。\n\n' +
        '具体例：A = [[1,2],[3,4]], B = [[5,6],[7,8]]\n' +
        'AB = [[1×5+2×7, 1×6+2×8], [3×5+4×7, 3×6+4×8]]\n' +
        '   = [[19, 22], [43, 50]]',
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
      id: 'example-2',
      title: '変換の合成としての理解',
      content:
        'Aが「90度回転」、Bが「2倍拡大」だとしましょう。\n\n' +
        'AB は「まずBで2倍に拡大し、次にAで90度回転」を意味します。\n' +
        '（右から左に読むのがポイント！）\n\n' +
        'なぜ右から左？ ベクトルvに作用するとき ABv = A(Bv) だからです。\n' +
        '先にBがvに作用し、その結果にAが作用します。\n\n' +
        'つまり行列の積の順序は「後から先に書く」のです。\n' +
        '日常の「先にBして、次にA」= 数式の「AB」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：行列の積',
      content: '行列の積の性質を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '行列の積について正しいものはどれですか？',
        options: [
          { id: 'a', label: 'AB = BA が常に成り立つ', correct: false },
          { id: 'b', label: 'ABv は「まずAを適用し、次にBを適用」', correct: false },
          { id: 'c', label: 'ABv は「まずBを適用し、次にAを適用」', correct: true },
          { id: 'd', label: '行列の積は定義できない場合はない', correct: false },
        ],
        explanation:
          'ABv = A(Bv) なので、先にBがvに作用し、その結果にAが作用します。右から左の順です。',
      },
    },
    {
      id: 'alternate',
      title: '結合法則は成り立つ',
      content:
        '交換法則は成り立ちませんが、結合法則は成り立ちます：\n' +
        '(AB)C = A(BC)\n\n' +
        'これは直感的にも自然です。3つの変換A, B, Cを順に適用するとき、\n' +
        '「BとCをまず合成してからAと合成」しても\n' +
        '「AとBをまず合成してからCと合成」しても、最終結果は同じです。\n\n' +
        'また、単位行列Iは掛けても変わりません：\n' +
        'AI = IA = A\n\n' +
        '単位行列は「何もしない変換」です。',
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
      title: 'まとめ：行列の積',
      content:
        'この章のポイント：\n\n' +
        '1. 行列の積 = 変換の合成\n' +
        '2. ABv → 先にB、次にA（右から左）\n' +
        '3. 計算は「行×列」の内積\n' +
        '4. 交換法則は成り立たない（AB ≠ BA）\n' +
        '5. 結合法則は成り立つ（(AB)C = A(BC)）\n' +
        '6. 単位行列I：何もしない変換\n\n' +
        '次は行列式を学びます。変換が空間をどれだけ「伸び縮み」させるかの指標です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'matrix-product-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
