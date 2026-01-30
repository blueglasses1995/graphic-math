import { Tutorial } from '../types';

export const latticeCryptoTutorial: Tutorial = {
  id: 'lattice-crypto',
  title: '格子暗号',
  description: '格子問題に基づくポスト量子暗号の代数的基盤を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '量子コンピュータにも耐える暗号',
      content:
        '量子コンピュータはRSAも楕円曲線暗号も破ります。\n\nでは何が安全なのか？\n\n「格子」上の困難な問題に基づく暗号は、\n量子コンピュータでも効率的に解けないと考えられています。\n\n格子暗号は次世代暗号の最有力候補です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'lattice-crypto-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '格子を可視化',
      content:
        '格子とは、基底ベクトルの整数結合で生成される点の集合です。\n\nL = {n₁b₁ + n₂b₂ | n₁, n₂ ∈ Z}\n\n同じ格子でも基底の取り方は多数あります。\n「良い基底」を見つけるのは難しい！\n\n基底を変えて格子の形を観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'lattice-crypto-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '格子上の困難な問題',
      content:
        '格子暗号の安全性を支える問題:\n\n• SVP（最短ベクトル問題）: 格子の最短の非零ベクトルを見つける\n• CVP（最近ベクトル問題）: 与えられた点に最も近い格子点を見つける\n• LWE（誤差付き学習問題）: ノイズ付きの線形方程式系を解く\n\nこれらは次元が高くなると急激に困難になります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'LWE暗号の仕組み',
      content:
        'LWE（Learning With Errors）暗号:\n\n秘密鍵: s ∈ Z_q^n\n公開鍵: (A, b = As + e) ここで e は小さいノイズ\n\n暗号化: ランダムな r を選び\nc₁ = Aᵀr, c₂ = bᵀr + ⌊q/2⌋·m\n\n復号: c₂ - sᵀc₁ ≈ ⌊q/2⌋·m\n\nノイズ e がなければ線形代数で解けますが、\nノイズがあると指数時間かかります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '格子暗号について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '格子暗号が注目される最大の理由は？',
        options: [
          { id: 'a', label: '計算が高速だから', correct: false },
          { id: 'b', label: '量子コンピュータでも破れないと考えられるから', correct: true },
          { id: 'c', label: '鍵が短いから', correct: false },
          { id: 'd', label: '実装が簡単だから', correct: false },
        ],
        explanation:
          '格子問題には量子コンピュータでも効率的なアルゴリズムが知られていません。これがポスト量子暗号の候補として最も注目される理由です。',
      },
    },
    {
      id: 'alternate',
      title: 'NIST標準化と実用化',
      content:
        'NISTポスト量子暗号標準化:\n\n• CRYSTALS-Kyber (ML-KEM): 格子ベースの鍵カプセル化\n• CRYSTALS-Dilithium (ML-DSA): 格子ベースの署名\n\nこれらは2024年に標準化されました。\n\n格子暗号の代数的基盤:\n• 多項式環 Z_q[x]/(x^n + 1) 上の演算\n• イデアル格子の構造\n• 環論の知識が設計と分析に不可欠',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：格子暗号',
      content:
        '格子暗号:\n\n• 格子上の困難な問題（SVP, LWE等）に基づく\n• 量子コンピュータにも耐性あり\n• LWE暗号: ノイズ付き線形方程式の困難性を利用\n• NIST標準化で実用段階に\n• 環論・格子理論が数学的基盤\n\n次世代暗号のスタンダードです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'lattice-crypto-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
