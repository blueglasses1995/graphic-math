import { Tutorial } from '../types';

export const combinatorialOptimizationTutorial: Tutorial = {
  id: 'combinatorial-optimization',
  title: '組合せ最適化',
  description: '離散的な選択肢の中から最適な解を見つける手法を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '最良の組合せを見つける',
      content:
        '100種類の商品から利益最大の20種類を選ぶ。\n1000人のシフトを最適に組む。\n\n選択肢は離散的（整数や集合）で、連続的な最適化とは異なるアプローチが必要です。\n\n組合せ最適化は離散数学とアルゴリズムの交差点にある重要分野です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'combinatorial-optimization-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '最適化問題を解いてみよう',
      content:
        '組合せ最適化の基本形：\n\n目的関数 f(x) を最小化（または最大化）\n制約条件 x ∈ S（Sは有限だが巨大な集合）\n\n全列挙は非現実的。効率的な手法が必要です。\n\n小さな問題で最適解の探索を体験してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'combinatorial-optimization-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '整数計画問題',
      content:
        '線形計画問題（LP）に整数制約を加えたものが整数計画（IP）です。\n\n最小化 cᵀx\n制約 Ax ≤ b, x ∈ Z^n\n\nLPはPで解けるが、IPはNP困難。\n\n解法：\n・分枝限定法：LP緩和の解を利用して枝刈り\n・切除平面法：LP緩和に制約を追加して整数解に近づける\n・分枝切除法：両者の組合せ（最も実用的）',
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
      title: 'メタヒューリスティクス',
      content:
        '厳密解が難しい場合の近似手法：\n\n・焼きなまし法（SA）：温度を下げながらランダムに探索\n・遺伝的アルゴリズム（GA）：進化のメタファーで解を改善\n・タブー探索：直近の変更を禁止して局所最適から脱出\n・蟻コロニー最適化（ACO）：蟻のフェロモンを模倣\n\nいずれも最適性の保証はないが、実用的に良い解が得られます。',
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
      title: 'クイズ：組合せ最適化',
      content: '組合せ最適化の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '線形計画問題と整数計画問題の関係として正しいのはどれですか？',
        options: [
          { id: 'a', label: 'どちらも多項式時間で解ける', correct: false },
          { id: 'b', label: 'LPはPだがIPはNP困難', correct: true },
          { id: 'c', label: 'IPはLPより簡単', correct: false },
          { id: 'd', label: 'どちらもNP困難', correct: false },
        ],
        explanation:
          '線形計画問題はPに属しますが、整数制約を加えるとNP困難になります。整数の離散性が問題を難しくします。',
      },
    },
    {
      id: 'alternate',
      title: 'マトロイドと多項式時間',
      content:
        '一部の組合せ最適化は多項式時間で解けます。\n\nマトロイド上の最適化 → 貪欲法で最適\n最小費用流 → 多項式時間\nマッチング → 多項式時間（エドモンズのアルゴリズム）\n\n問題の構造を理解すれば、NP困難に見える問題にも効率的な解法が見つかることがあります。\n\n構造の理解こそが組合せ最適化の核心です。',
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
      title: 'まとめ：組合せ最適化',
      content:
        '組合せ最適化は離散的な最適解を求める分野です。\n\n・多くはNP困難だが構造を活用して効率化\n・整数計画法：分枝限定法、切除平面法\n・メタヒューリスティクス：SA、GA、タブー探索\n・マトロイド等の構造があれば多項式時間\n\n物流、金融、製造、通信など現代社会のあらゆる場面で活躍しています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'combinatorial-optimization-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
