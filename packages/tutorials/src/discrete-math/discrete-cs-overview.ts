import { Tutorial } from '../types';

export const discreteCsOverviewTutorial: Tutorial = {
  id: 'discrete-cs-overview',
  title: '離散数学とCSの全体像',
  description: '離散数学がコンピュータサイエンスを支える全体像を俯瞰する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'すべてがつながる',
      content:
        'グラフ、論理、組合せ、オートマトン、計算量、暗号、情報理論…\n\nこれまで学んだ離散数学の分野は、バラバラに見えて実は深く結びついています。\n\nこの最終チュートリアルで、離散数学とコンピュータサイエンスの壮大な全体像を俯瞰しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '知識マップを探索しよう',
      content:
        '離散数学の主要分野とCSへの応用：\n\n論理 → プログラミング言語、検証\nグラフ → ネットワーク、SNS、経路探索\n組合せ → アルゴリズム設計、暗号\n計算理論 → 言語処理、計算の限界\n確率 → 機械学習、乱択アルゴリズム\n\n各分野のつながりを確認してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '理論の連鎖',
      content:
        '離散数学の理論は連鎖的に発展します。\n\n論理 → オートマトン理論 → 計算可能性 → 計算量理論\n\nグラフ理論 → ネットワーク最適化 → 組合せ最適化\n\n数論 → 暗号理論 → 情報セキュリティ\n\n確率 → 情報理論 → 符号理論 → 通信\n\n一つの分野の理解が他の分野の理解を深めます。',
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
      title: '未解決問題が示す道',
      content:
        '離散数学の未解決問題は研究の方向を示します。\n\n・P ≠ NP? → 計算の本質的限界\n・P = BPP? → ランダム性の力\n・グラフ同型問題の複雑さ → 代数とグラフの交差\n・量子優位性の範囲 → 物理と計算の境界\n\nこれらの問題は単なる知的好奇心ではなく、技術革新の方向性を決定します。',
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
      title: 'クイズ：離散数学とCS',
      content: '離散数学とCSの全体像を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち、離散数学が直接的に基盤となっていないのはどれですか？',
        options: [
          { id: 'a', label: 'コンパイラの構文解析', correct: false },
          { id: 'b', label: '暗号技術', correct: false },
          { id: 'c', label: '流体力学のシミュレーション', correct: true },
          { id: 'd', label: 'データベースのクエリ最適化', correct: false },
        ],
        explanation:
          '流体力学は連続数学（微分方程式）が基盤です。コンパイラ（オートマトン理論）、暗号（数論）、DB最適化（関係代数、グラフ理論）は離散数学が基盤です。',
      },
    },
    {
      id: 'alternate',
      title: 'これからの離散数学',
      content:
        '離散数学は進化し続けています。\n\n最前線のトピック：\n・量子誤り訂正：トポロジカル符号\n・差分プライバシー：データのプライバシー保護\n・形式検証：ソフトウェアの数学的証明\n・グラフニューラルネットワーク：AIとグラフ理論\n・ポスト量子暗号：格子暗号、符号暗号\n\n基礎を学んだあなたには、これらの最先端分野への扉が開かれています。',
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
      title: 'まとめ：離散数学とCSの全体像',
      content:
        '離散数学はコンピュータサイエンスの言語です。\n\n・論理はプログラミングと検証の基盤\n・グラフはネットワークとアルゴリズムの骨格\n・計算理論は可能と不可能の境界を定める\n・組合せと確率は効率の科学を支える\n・情報理論は通信と圧縮の限界を示す\n\n離散的な世界を理解することは、デジタル社会を理解することです。\n\nここまでの60チュートリアル、お疲れ様でした！',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
