import { Tutorial } from '../types';

export const jointMarginalTutorial: Tutorial = {
  id: 'joint-marginal',
  title: '同時確率と周辺確率',
  description: '2つの確率変数の関係を同時分布と周辺分布で理解する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '2つの変数を一度に見る',
      content:
        '身長と体重の関係を調べたいとき、それぞれ別々に見るのでは不十分です。「身長が170cm以上かつ体重が70kg以上」のような2変数の同時確率が必要です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'joint-marginal-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'joint',
      title: '同時確率',
      content:
        '同時確率 P(X=x, Y=y) は2つの事象が同時に起こる確率です。\n\n例: サイコロ2個\n同時確率表の各セル P(X=i, Y=j) = 1/36\n\n全セルの合計は必ず1になります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'marginal',
      title: '周辺確率',
      content:
        '周辺確率は同時確率表の行または列の合計です:\n\nP(X=x) = Σᵧ P(X=x, Y=y)\nP(Y=y) = Σₓ P(X=x, Y=y)\n\n一方の変数を「周辺に追いやる」（合計する）ことで、もう一方の分布が得られます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '同時確率表を作ろう',
      content:
        '同時確率表の値を変えて、周辺確率がどう変化するか確認しましょう。行の合計と列の合計が周辺分布になります。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'joint-marginal-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'P(X=1,Y=1)=0.2, P(X=1,Y=2)=0.1 のとき P(X=1) は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'Yが1と2の値のみを取るとき P(X=1) は？',
        options: [
          { id: 'a', label: '0.2', correct: false },
          { id: 'b', label: '0.3', correct: true },
          { id: 'c', label: '0.1', correct: false },
          { id: 'd', label: '0.02', correct: false },
        ],
        explanation:
          'P(X=1) = P(X=1,Y=1) + P(X=1,Y=2) = 0.2 + 0.1 = 0.3 です。',
      },
    },
    {
      id: 'independence-check',
      title: '独立性の確認',
      content:
        'XとYが独立 ⟺ すべてのx,yについて P(X=x,Y=y) = P(X=x)P(Y=y)\n\n同時確率が周辺確率の積と等しいかどうかで、独立性を確認できます。一つでも等しくなければ従属です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '同時確率と周辺確率:\n\n• 同時確率: 2変数が同時に取る値の確率\n• 周辺確率: 同時確率を片方について合計\n• 独立 ⟺ 同時確率 = 周辺確率の積\n\n多変量データの分析に不可欠な概念です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'joint-marginal-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
