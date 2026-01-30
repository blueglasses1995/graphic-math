import { Tutorial } from '../types';

export const aesAlgebraTutorial: Tutorial = {
  id: 'aes-algebra',
  title: 'AESの代数構造',
  description: 'AES暗号の内部で使われる有限体の代数構造を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '暗号の中の代数学',
      content:
        'AES（Advanced Encryption Standard）は世界で最も広く使われる暗号です。\n\nWi-Fi、HTTPS、ファイル暗号化…あらゆる場所で動いています。\n\nその内部では有限体 GF(2⁸) の演算が巧みに使われています。\n代数学が現代のセキュリティを支えているのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'GF(2⁸)の演算',
      content:
        'GF(2⁸) は256個の元を持つ有限体です。\n\n元はバイト（8ビット）で表現され:\n加法: ビットごとのXOR\n乗法: 多項式の積 mod 既約多項式\n\n既約多項式: x⁸ + x⁴ + x³ + x + 1\n\nバイトを選んで演算を試してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'AESの各ラウンド操作',
      content:
        'AESの1ラウンドは4つの操作で構成:\n\n1. SubBytes: GF(2⁸)での逆元 + アフィン変換\n   → 非線形性を導入（S-Box）\n2. ShiftRows: 行の巡回シフト\n3. MixColumns: GF(2⁸)上の行列積\n4. AddRoundKey: 鍵とのXOR\n\n全てが代数的操作で説明できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'S-Boxの代数的設計',
      content:
        'SubBytesのS-Boxは:\n\n1. GF(2⁸)での乗法逆元を計算（0→0）\n2. GF(2)上のアフィン変換を適用\n\nなぜ乗法逆元？\n→ 最大限の非線形性を実現\n→ 差分攻撃・線形攻撃に強い\n\nこの設計は「代数的に最適」であることが証明されています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'AESの代数構造を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'AESの SubBytes 操作の核心は何ですか？',
        options: [
          { id: 'a', label: 'ビットのシフト', correct: false },
          { id: 'b', label: 'GF(2⁸) での乗法逆元', correct: true },
          { id: 'c', label: '素因数分解', correct: false },
          { id: 'd', label: 'ハッシュ計算', correct: false },
        ],
        explanation:
          'SubBytesはGF(2⁸)での乗法逆元計算とアフィン変換を組み合わせた操作です。乗法逆元が最大の非線形性を提供し、暗号の安全性を高めます。',
      },
    },
    {
      id: 'alternate',
      title: 'MixColumnsの行列',
      content:
        'MixColumnsは GF(2⁸) 上の行列積です:\n\n[2 3 1 1]   [s₀]   [s₀\']\n[1 2 3 1] × [s₁] = [s₁\']\n[1 1 2 3]   [s₂]   [s₂\']\n[3 1 1 2]   [s₃]   [s₃\']\n\nこの行列は MDS（最大距離分離）行列で、\n拡散性（diffusion）を最大化します。\n\n符号理論の知見が暗号設計に活きています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：AESの代数構造',
      content:
        'AESの代数構造:\n\n• GF(2⁸) 上の演算が基盤\n• S-Box: 乗法逆元で非線形性を実現\n• MixColumns: MDS行列で拡散\n• 全操作が代数的に説明可能\n• 代数学が実用暗号を支える最良の例\n\n理論と実践が見事に融合した暗号です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
