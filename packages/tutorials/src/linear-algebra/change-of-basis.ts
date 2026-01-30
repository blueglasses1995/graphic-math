import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const changeOfBasisTutorial: Tutorial = {
  id: 'change-of-basis',
  title: '基底の変換',
  description: '異なる基底間でのベクトルの表現変換と基底変換行列を理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '同じベクトル、違う座標',
      content:
        '同じ場所を指しているのに、見る人によって座標が違う。\n\n' +
        '東京駅を「北緯35度、東経139度」と言う人と、\n' +
        '「千代田区丸の内1-9-1」と言う人。同じ場所ですよね。\n\n' +
        '基底を変えると、同じベクトルの「座標表示」が変わります。\n' +
        '基底の変換とは、この「座標の翻訳」のことです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'target',
            vector: new Vector3(3, 2, 0),
            color: '#ffaa00',
            label: 'v',
          },
          {
            id: 'std-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'e₁',
          },
          {
            id: 'std-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'e₂',
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '新しい基底で座標を読もう',
      content:
        '標準基底 {e₁, e₂} から新基底 {b₁, b₂} への変換を考えます。\n\n' +
        'b₁ = (2, 1), b₂ = (1, 2) とすると\n' +
        'v = (3, 2) は標準基底での座標です。\n\n' +
        '新基底でvを表すには：\n' +
        'v = c₁b₁ + c₂b₂ を解きます。\n\n' +
        'これは連立方程式 Bc = v（B = [b₁ b₂]）です。\n' +
        'c = B⁻¹v が新基底での座標になります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'new-b1',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'b₁ = (2, 1)',
          },
          {
            id: 'new-b2',
            vector: new Vector3(1, 2, 0),
            color: '#44ff44',
            label: 'b₂ = (1, 2)',
          },
          {
            id: 'new-v',
            vector: new Vector3(3, 2, 0),
            color: '#ffaa00',
            label: 'v',
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '基底変換行列',
      content:
        '基底B = {b₁, b₂} から標準基底への変換行列は P = [b₁ b₂] です。\n\n' +
        'b₁ = (2,1), b₂ = (1,2) のとき：\n' +
        'P = [[2, 1], [1, 2]]\n\n' +
        '・P × [新基底の座標] = 標準基底の座標\n' +
        '・P⁻¹ × [標準基底の座標] = 新基底の座標\n\n' +
        'det(P) = 4 - 1 = 3\n' +
        'P⁻¹ = (1/3)[[2, -1], [-1, 2]]\n\n' +
        'v = (3, 2) の新基底での座標：\n' +
        'P⁻¹v = (1/3)(2×3-1×2, -1×3+2×2) = (1/3)(4, 1) = (4/3, 1/3)',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '変換の基底変換',
      content:
        '線形変換Aも基底を変えると表現が変わります。\n\n' +
        '標準基底でのA → 新基底でのA\' = P⁻¹AP\n\n' +
        'これを「相似変換」と呼びます。\n\n' +
        '意味：\n' +
        '1. Pで新基底→標準基底に戻す\n' +
        '2. Aで変換する\n' +
        '3. P⁻¹で標準基底→新基底に変換\n\n' +
        '同じ変換を、異なる「言語」（基底）で記述しているだけです。\n' +
        '固有ベクトルを基底にすると、行列が対角化できることがあります。',
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
      title: 'クイズ：基底変換',
      content: '基底変換の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '新基底 {(1,1), (1,-1)} でのベクトル [1, 0] は、標準基底ではどう表されますか？',
        options: [
          { id: 'a', label: '(1, 1)', correct: true },
          { id: 'b', label: '(1, 0)', correct: false },
          { id: 'c', label: '(1, -1)', correct: false },
          { id: 'd', label: '(0, 1)', correct: false },
        ],
        explanation:
          '新基底での [1, 0] は 1×(1,1) + 0×(1,-1) = (1, 1) です。基底変換行列Pを掛けるのと同じです。',
      },
    },
    {
      id: 'alternate',
      title: 'なぜ基底を変えるのか？',
      content:
        '基底変換の最大のメリット：問題が簡単になることがあります。\n\n' +
        '例えば、斜め方向の拡大変換。\n' +
        '標準基底では複雑な行列ですが、拡大方向を基底にすれば対角行列になります。\n\n' +
        '対角行列は：\n' +
        '・計算が簡単（各成分を独立に扱える）\n' +
        '・累乗が簡単（各成分をn乗するだけ）\n' +
        '・直感的に理解しやすい\n\n' +
        '「良い基底を選ぶ」ことは、線形代数の核心技術の1つです。',
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
      title: 'まとめ：基底の変換',
      content:
        'この章のポイント：\n\n' +
        '1. 同じベクトルでも基底によって座標が変わる\n' +
        '2. P = [b₁ b₂ ...]：基底変換行列\n' +
        '3. 新基底の座標 = P⁻¹ × 標準座標\n' +
        '4. 変換の基底変換：A\' = P⁻¹AP（相似変換）\n' +
        '5. 良い基底を選ぶと問題が簡単になる\n\n' +
        '次は3Dへの拡張を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-b1',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'b₁',
          },
          {
            id: 'sum-b2',
            vector: new Vector3(1, 2, 0),
            color: '#44ff44',
            label: 'b₂',
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
