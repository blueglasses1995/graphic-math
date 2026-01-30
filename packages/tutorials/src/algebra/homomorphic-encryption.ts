import { Tutorial } from '../types';

export const homomorphicEncryptionTutorial: Tutorial = {
  id: 'homomorphic-encryption',
  title: '準同型暗号入門',
  description: '暗号化したまま計算できる準同型暗号の代数的原理を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '暗号化したまま計算',
      content:
        'クラウドにデータを預けて計算してもらいたい。\nでもデータの中身は見られたくない。\n\n暗号化したまま計算できたら？\n\n準同型暗号はまさにそれを実現します。\nEnc(a) と Enc(b) から Enc(a+b) を復号せずに計算！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '準同型性を体験',
      content:
        '簡単な例: RSA暗号は乗法準同型\n\nEnc(m₁) · Enc(m₂) = m₁ᵉ · m₂ᵉ = (m₁m₂)ᵉ = Enc(m₁m₂)\n\n暗号文同士を掛けると、平文の積の暗号文になる！\n\n数値を選んで準同型性を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '準同型暗号の種類',
      content:
        '準同型暗号の分類:\n\n• 部分準同型: 加法 OR 乗法のどちらか一方\n  - RSA: 乗法準同型\n  - Paillier: 加法準同型\n\n• やや準同型: 加法と乗法の両方（回数制限あり）\n\n• 完全準同型暗号(FHE): 任意の計算が可能\n  - Gentry (2009) が初めて構成\n  - 格子暗号に基づく',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '代数的構造との関係',
      content:
        '準同型暗号の「準同型」は群の準同型そのものです！\n\nEnc: (M, +) → (C, ⊕) が群準同型\nつまり Enc(m₁ + m₂) = Enc(m₁) ⊕ Enc(m₂)\n\nFHE（完全準同型暗号）では環の準同型:\nEnc: (M, +, ×) → (C, ⊕, ⊗)\n\n加法と乗法の両方ができれば任意の計算が可能\n（ブール回路の模倣）',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '準同型暗号について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '完全準同型暗号（FHE）が「完全」である理由は？',
        options: [
          { id: 'a', label: '絶対に破れないから', correct: false },
          { id: 'b', label: '加法と乗法の両方が暗号文上で計算できるから', correct: true },
          { id: 'c', label: '暗号化が完全に高速だから', correct: false },
          { id: 'd', label: 'すべての暗号方式を含むから', correct: false },
        ],
        explanation:
          '加法と乗法の両方が暗号文上で計算できるため、任意のブール回路（つまり任意の計算）を暗号文上で実行できます。これが「完全」の意味です。',
      },
    },
    {
      id: 'alternate',
      title: 'FHEの課題と展望',
      content:
        '完全準同型暗号の現状:\n\n課題:\n• 計算速度: 平文の10⁴〜10⁶倍遅い\n• 暗号文サイズ: 平文の数千倍\n• ノイズの蓄積: ブートストラッピングが必要\n\n進展:\n• TFHE, CKKS 等の新方式で劇的に高速化\n• 機械学習への応用が進む\n• プライバシー保護計算の実用化が見えてきた',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：準同型暗号',
      content:
        '準同型暗号:\n\n• 暗号化したまま計算が可能\n• 群・環の準同型が数学的基盤\n• 部分準同型 → やや準同型 → 完全準同型\n• FHEは格子暗号に基づく\n• プライバシー保護計算の未来を開く\n\n代数学が最先端技術を支えています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
