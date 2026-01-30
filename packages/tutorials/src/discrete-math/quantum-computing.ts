import { Tutorial } from '../types';

export const quantumComputingTutorial: Tutorial = {
  id: 'quantum-computing',
  title: '量子計算入門',
  description: '量子ビットと量子アルゴリズムの基本概念を離散数学の視点で学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '0と1を同時に',
      content:
        '古典ビット：0か1のどちらか一方。\n量子ビット（qubit）：|0⟩と|1⟩の重ね合わせ α|0⟩ + β|1⟩\n\n|α|² + |β|² = 1\n\nn量子ビットは2ⁿ個の状態を同時に保持できます。\n\nこの「量子並列性」が指数的な高速化の源です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'quantum-computing-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '量子ゲートを操作しよう',
      content:
        '量子ゲート = ユニタリ行列による状態変換\n\nアダマールゲート H：|0⟩ → (|0⟩+|1⟩)/√2\nPauliゲート X：|0⟩ ↔ |1⟩（ビット反転）\nCNOT：量子もつれを生成\n\nこれらのゲートを組み合わせて量子回路を構成します。\n\nゲートを選んで量子状態の変化を確認してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'quantum-computing-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ショアのアルゴリズム',
      content:
        '大きな整数の素因数分解を多項式時間で行う量子アルゴリズム。\n\n核心：量子フーリエ変換で関数の周期を効率的に発見。\n\nRSA-2048の素因数分解：\n古典：宇宙の年齢でも不可能\n量子：数時間（十分な量子ビットがあれば）\n\n実用化されればRSA暗号は破られます。\nこれがポスト量子暗号研究の動機です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'グローバーの探索アルゴリズム',
      content:
        'N個の要素から条件を満たす要素を探すグローバーのアルゴリズム。\n\n古典：O(N) 回の検索が必要\n量子：O(√N) 回で発見\n\n振幅増幅の原理：\n1. 全状態を均等に重ね合わせる\n2. 目的の状態の振幅を反転\n3. 平均値について反転（拡散演算）\n4. 2-3を O(√N) 回繰り返す\n\n二次的な高速化ですが、あらゆる探索問題に適用可能です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：量子計算',
      content: '量子計算の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'グローバーのアルゴリズムはN要素の探索を何回で行えますか？',
        options: [
          { id: 'a', label: 'O(1)', correct: false },
          { id: 'b', label: 'O(log N)', correct: false },
          { id: 'c', label: 'O(√N)', correct: true },
          { id: 'd', label: 'O(N)', correct: false },
        ],
        explanation:
          'グローバーのアルゴリズムはO(√N)回の問い合わせで目的の要素を高確率で発見します。これは量子計算による二次的高速化です。',
      },
    },
    {
      id: 'alternate',
      title: 'BQPクラスと計算量の風景',
      content:
        'BQP（Bounded-error Quantum Polynomial time）：\n量子コンピュータで多項式時間、エラー率1/3以下で解ける問題。\n\n包含関係：P ⊆ BPP ⊆ BQP ⊆ PSPACE\n\nBQP vs NP：\n量子コンピュータでもNP完全問題を効率的に解けるとは考えられていません。\n\nしかしグローバーの√N高速化やショアの素因数分解など、特定の問題で古典を凌駕します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：量子計算入門',
      content:
        '量子計算は計算の概念を根本から拡張します。\n\n・量子ビット：重ね合わせともつれ\n・ショアのアルゴリズム：素因数分解の指数的高速化\n・グローバー：探索の二次的高速化\n・BQPクラス：量子で効率的に解ける問題\n\n離散数学（線形代数、群論、グラフ理論）が量子計算の基盤です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'quantum-computing-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
