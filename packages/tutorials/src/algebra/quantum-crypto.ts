import { Tutorial } from '../types';

export const quantumCryptoTutorial: Tutorial = {
  id: 'quantum-crypto',
  title: '量子暗号入門',
  description: '量子力学の原理に基づく暗号と代数的構造の関係を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '量子力学が暗号を変える',
      content:
        '量子コンピュータはRSAも楕円曲線暗号も破ります。\n\nしかし量子力学は脅威だけでなく、\n「物理法則で安全性を保証する」新しい暗号も可能にします。\n\n量子鍵配送（QKD）は盗聴を物理的に検出できます。\n数学と物理の融合した世界を見ていきましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'quantum-crypto-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'BB84プロトコルの体験',
      content:
        'BB84量子鍵配送:\n\nアリスが偏光光子を送り、ボブが測定します。\n\n基底の選択が一致すればビットを共有。\n盗聴者がいると、量子状態が乱されてエラーが増加。\n\n基底を選んで鍵共有の過程をシミュレーションしましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'quantum-crypto-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ショアのアルゴリズム',
      content:
        '量子コンピュータの脅威:\n\nショアのアルゴリズムは素因数分解と離散対数を多項式時間で解きます。\n\n核心: 量子フーリエ変換で位数を求める\n\na^r ≡ 1 (mod n) の r を量子的に求め、\ngcd(a^{r/2} ± 1, n) で素因数を発見。\n\n群の位数発見問題が量子的に効率化されるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '量子暗号の代数的側面',
      content:
        '量子状態空間はヒルベルト空間（ベクトル空間の拡張）。\n\n量子ビット: |ψ⟩ = α|0⟩ + β|1⟩ （|α|² + |β|² = 1）\n\n量子ゲート: ユニタリ行列 U（U†U = I）\n→ ユニタリ群 U(n) の元\n\n量子計算 = ユニタリ群上の演算\n\n線形代数と群論が量子情報の言語です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '量子暗号について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ショアのアルゴリズムが破る暗号は？',
        options: [
          { id: 'a', label: 'AES（共通鍵暗号）', correct: false },
          { id: 'b', label: 'RSAと楕円曲線暗号', correct: true },
          { id: 'c', label: 'ワンタイムパッド', correct: false },
          { id: 'd', label: 'すべての暗号', correct: false },
        ],
        explanation:
          'ショアのアルゴリズムは素因数分解と離散対数問題を効率的に解くため、RSAと楕円曲線暗号が破られます。AESは鍵長を倍にすれば安全、ワンタイムパッドは情報理論的に安全です。',
      },
    },
    {
      id: 'alternate',
      title: '量子鍵配送の安全性',
      content:
        '量子鍵配送（QKD）の安全性は物理法則に基づきます:\n\n• 不確定性原理: 量子状態を乱さずに測定できない\n• 複製不可能定理: 未知の量子状態はコピーできない\n\nこれにより:\n盗聴 → 量子状態の撹乱 → エラー率の増加 → 検出可能\n\n数学的仮定ではなく物理法則が安全性を保証する\nまったく新しいパラダイムです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：量子暗号',
      content:
        '量子暗号:\n\n• ショアのアルゴリズムでRSA・ECCが破られる\n• 量子鍵配送は物理法則で安全性を保証\n• 量子計算はユニタリ群上の演算\n• 線形代数・群論が量子情報の基盤\n\n量子時代の暗号は代数学の新しい応用分野です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'quantum-crypto-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
