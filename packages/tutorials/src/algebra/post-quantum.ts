import { Tutorial } from '../types';

export const postQuantumTutorial: Tutorial = {
  id: 'post-quantum',
  title: 'ポスト量子暗号',
  description: '量子コンピュータ時代に備える新しい暗号方式の代数的基盤を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '量子の脅威に備える',
      content:
        '量子コンピュータが実用化されると、\nRSA、楕円曲線暗号、DH鍵交換が全て破られます。\n\n今日暗号化されたデータも、将来復号されるかもしれない\n（「収穫して後で復号」攻撃）。\n\nポスト量子暗号は、量子コンピュータでも安全な暗号方式です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '格子上の最短ベクトル',
      content:
        'ポスト量子暗号の主流は格子暗号です。\n\n2次元格子で最短ベクトルを見つけるのは簡単ですが、\n数百次元になると量子コンピュータでも困難です。\n\n格子の基底を変えて、最短ベクトルの見つけにくさを体感しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ポスト量子暗号の候補',
      content:
        'NISTが標準化したポスト量子暗号:\n\n格子ベース:\n• ML-KEM (Kyber): 鍵カプセル化\n• ML-DSA (Dilithium): デジタル署名\n\nハッシュベース:\n• SLH-DSA (SPHINCS+): ステートレス署名\n\n符号ベース:\n• （今後追加予定）\n\nいずれも代数的構造に基づいています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '各方式の代数的基盤',
      content:
        '格子暗号: 多項式環 R_q = Z_q[x]/(x^n + 1) 上の演算\n→ 環論・イデアル論が基盤\n\nハッシュベース署名: マークルツリー + ハッシュ関数\n→ 最小限の仮定（ハッシュの安全性のみ）\n\n符号ベース: 線形符号の復号問題\n→ 線形代数・符号理論が基盤\n\n多相暗号: 同種写像\n→ 楕円曲線の同種写像理論',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'ポスト量子暗号を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ポスト量子暗号が必要な主な理由は？',
        options: [
          { id: 'a', label: '現在の暗号が既に破られたから', correct: false },
          { id: 'b', label: '量子コンピュータがRSAやECCを破る可能性があるから', correct: true },
          { id: 'c', label: 'より高速な暗号が必要だから', correct: false },
          { id: 'd', label: '鍵長を短くしたいから', correct: false },
        ],
        explanation:
          'ショアのアルゴリズムにより、十分大きな量子コンピュータはRSAや楕円曲線暗号を多項式時間で破ります。将来の脅威に今から備える必要があります。',
      },
    },
    {
      id: 'alternate',
      title: '移行の課題',
      content:
        'ポスト量子暗号への移行の課題:\n\n• 鍵サイズの増大: Kyber公開鍵 ≈ 800バイト（ECCの32バイトに対して）\n• 計算コスト: 一部の方式は既存より遅い\n• ハイブリッド方式: 古典暗号 + PQ暗号の併用（移行期間）\n• 標準化と実装の検証\n• 「暗号の敏捷性」: 方式を柔軟に切り替えられる設計\n\n数学的安全性と実用性のバランスが重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ポスト量子暗号',
      content:
        'ポスト量子暗号:\n\n• 量子コンピュータにも耐える暗号方式\n• 格子・ハッシュ・符号ベースが主流\n• NIST標準化が2024年に完了\n• 環論・格子理論・符号理論が数学的基盤\n• 移行はすでに始まっている\n\n代数学の新しい応用が暗号の未来を切り開きます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
