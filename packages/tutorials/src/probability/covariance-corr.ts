import { Tutorial } from '../types';

export const covarianceCorrTutorial: Tutorial = {
  id: 'covariance-corr',
  title: '共分散と相関',
  description: '2つの変数の関連の強さと方向を数値化する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '一緒に動く？逆に動く？',
      content:
        '気温が上がるとアイスの売上が増える。勉強時間が増えるとゲーム時間が減る。2つの変数が「一緒に動くか、逆に動くか」を数値で表すのが共分散と相関です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'covariance',
      title: '共分散',
      content:
        'Cov(X, Y) = E[(X-μₓ)(Y-μᵧ)] = E[XY] - E[X]E[Y]\n\n• Cov > 0: Xが大きいときYも大きい傾向（正の関連）\n• Cov < 0: Xが大きいときYは小さい傾向（負の関連）\n• Cov = 0: 線形な関連がない',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'correlation',
      title: '相関係数',
      content:
        'ρ = Cov(X,Y) / (σₓ × σᵧ)\n\n相関係数は共分散を標準偏差で割って標準化したもの。\n\n• -1 ≤ ρ ≤ 1\n• ρ = 1: 完全な正の線形関係\n• ρ = -1: 完全な負の線形関係\n• ρ = 0: 線形関係なし',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '散布図と相関',
      content:
        'データの散布図を見ながら相関係数を確認しましょう。点の散らばりが直線的なほど|ρ|は1に近くなります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '相関係数が0のとき、XとYは必ず独立か？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ρ=0 ならXとYは必ず独立か？',
        options: [
          { id: 'a', label: 'はい、必ず独立', correct: false },
          { id: 'b', label: 'いいえ、非線形の関連がありうる', correct: true },
          { id: 'c', label: 'はい、共分散0なら独立', correct: false },
          { id: 'd', label: '相関係数は独立性と無関係', correct: false },
        ],
        explanation:
          'ρ=0 は「線形関係がない」だけ。Y=X²のような非線形な関係があってもρ≒0になりえます。独立ならρ=0ですが、逆は成り立ちません。',
      },
    },
    {
      id: 'variance-sum',
      title: '和の分散',
      content:
        'Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y)\n\n独立（Cov=0）なら分散は単純に足せますが、正の相関があるとバラつきは大きくなり、負の相関だと小さくなります。分散投資の原理です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '共分散と相関:\n\n• Cov(X,Y): 関連の方向と大きさ（単位依存）\n• ρ: -1〜1の標準化された指標\n• ρ=0 ≠ 独立（非線形関係の可能性あり）\n• Var(X+Y) = Var(X)+Var(Y)+2Cov(X,Y)\n\nデータ分析の基本ツールです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
