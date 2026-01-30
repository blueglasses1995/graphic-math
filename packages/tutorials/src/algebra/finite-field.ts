import { Tutorial } from '../types';

export const finiteFieldTutorial: Tutorial = {
  id: 'finite-field',
  title: '有限体',
  description: '有限個の要素を持つ体の構造と応用を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '有限の世界の四則演算',
      content:
        '要素が有限個の体を「有限体」または「ガロア体」と呼びます。\n\nGF(p) = ℤ/pℤ（p は素数）が最も基本的な有限体です。\n\nGF(2) = {0, 1}: コンピュータのビットの世界\nGF(3) = {0, 1, 2}: 3つの要素の体\nGF(5) = {0, 1, 2, 3, 4}: 5つの要素の体\n\n有限体は暗号や符号理論の基盤です。',
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
      id: 'gf2',
      title: 'GF(2) ── ビットの体',
      content:
        'GF(2) = {0, 1} の演算表:\n\n足し算:      掛け算:\n0 + 0 = 0    0 × 0 = 0\n0 + 1 = 1    0 × 1 = 0\n1 + 0 = 1    1 × 0 = 0\n1 + 1 = 0    1 × 1 = 1\n\n足し算は XOR（排他的論理和）と同じ！\n掛け算は AND（論理積）と同じ！\n\nコンピュータの論理回路は GF(2) 上の代数です。',
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
      id: 'existence',
      title: '有限体の存在と一意性',
      content:
        '有限体の存在定理:\n\n要素数 q の有限体が存在する ⟺ q = pⁿ（素数べき）\n\nつまり、要素数が 2, 3, 4, 5, 7, 8, 9, 11, 13, 16, ... の体は存在しますが、\n6, 10, 12, 14, 15, ... の体は存在しません。\n\n一意性: 同じ要素数の有限体は同型（本質的に1つ）\n\nGF(pⁿ) と書きます。',
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
      id: 'gf4',
      title: 'GF(4) の構成',
      content:
        'GF(4) は ℤ/4ℤ ではありません！（ℤ/4ℤ は体でない）\n\nGF(4) = GF(2)[x]/(x²+x+1) として構成します。\n\n要素: {0, 1, α, α+1}  (α² = α + 1)\n\nこれは GF(2) に x² + x + 1 の根を追加した体の拡大です。\n\n素数べき位数の有限体は、多項式環の剰余として構成されます。',
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
      id: 'applications',
      title: '有限体の応用',
      content:
        '有限体は現代技術に不可欠です:\n\n暗号理論: RSA は GF(p) 上の計算、楕円曲線暗号は GF(p) や GF(2ⁿ) を使用\n\n符号理論: QRコード、DVDのエラー訂正は GF(2⁸) = GF(256) を使用\n\nコンピュータ: ハッシュ関数、乱数生成\n\n有限体の理論がなければ、現代のデジタル社会は成り立ちません。',
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
      id: 'quiz',
      title: '確認クイズ',
      content: '有限体について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '要素数6の有限体は存在しますか？',
        options: [
          { id: 'a', label: 'はい、GF(6) として存在する', correct: false },
          { id: 'b', label: 'はい、ℤ/6ℤ がそれにあたる', correct: false },
          { id: 'c', label: 'いいえ、6 は素数べきでないから', correct: true },
          { id: 'd', label: 'いいえ、6 が偶数だから', correct: false },
        ],
        explanation:
          '正解は「いいえ」です。6 = 2 × 3 は素数べきではないので、要素数6の有限体は存在しません。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '有限体のポイント:\n\n1. 有限体は要素数が素数べき pⁿ のときのみ存在\n2. GF(p) = ℤ/pℤ が基本\n3. GF(pⁿ) は多項式環の剰余で構成\n4. 同じ要素数の有限体は一意（同型）\n5. 暗号・符号理論・コンピュータで応用\n\n次は基礎編の締めくくり「代数学のまとめ」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
