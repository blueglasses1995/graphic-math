import { Tutorial } from '../types';

export const varianceStdTutorial: Tutorial = {
  id: 'variance-std',
  title: '分散と標準偏差',
  description: 'データのバラつきを数値化する分散と標準偏差',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: 'バラつきの大きさ',
      content:
        '平均点が60点のテスト2つ。A: 全員58〜62点、B: 30〜90点。平均は同じでもバラつきが違います。分散と標準偏差はこのバラつきを数値で表します。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'variance-std-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'variance-def',
      title: '分散の定義',
      content:
        'Var(X) = E[(X - μ)²] = E[X²] - (E[X])²\n\nμ = E[X] は平均値。分散は「平均からのズレの二乗」の平均です。\n\nサイコロ: Var = E[X²] - 3.5²\n= (1+4+9+16+25+36)/6 - 12.25\n= 91/6 - 12.25 ≒ 2.92',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'std-def',
      title: '標準偏差',
      content:
        'σ = √Var(X)\n\n標準偏差は分散の平方根。元のデータと同じ単位を持つので解釈しやすいです。\n\nサイコロ: σ = √2.92 ≒ 1.71\n\n「平均3.5から±1.71くらいバラつく」という意味です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '分布を変えてみよう',
      content:
        '確率分布の形を変えて、分散がどう変わるか観察しましょう。均等に広がるほど分散は大きくなります。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'variance-std-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '確率変数Xが値1,2,3を等確率で取るとき、分散は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'X=1,2,3（各確率1/3）の分散は？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '2/3', correct: true },
          { id: 'c', label: '1/2', correct: false },
          { id: 'd', label: '3/2', correct: false },
        ],
        explanation:
          'E[X]=2, E[X²]=(1+4+9)/3=14/3。Var=14/3-4=2/3。',
      },
    },
    {
      id: 'properties',
      title: '分散の性質',
      content:
        '• Var(aX+b) = a²Var(X)（定数の足し算は分散に影響しない）\n• 独立なXYについて: Var(X+Y) = Var(X) + Var(Y)\n• Var(X) ≥ 0（常に非負）\n• Var(X) = 0 ⟺ Xは定数',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '分散と標準偏差はバラつきの指標。\n\n• Var(X) = E[(X-μ)²]\n• σ = √Var(X)\n• 標準偏差は元の単位と同じ\n• 独立なら分散は足せる\n\n期待値が「中心」、分散が「広がり」。この2つで分布の特徴を掴めます。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'variance-std-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
