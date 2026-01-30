import { Tutorial } from '../types';

export const expDerivativeTutorial: Tutorial = {
  id: 'exp-derivative',
  title: 'eˣの微分',
  description: '指数関数 eˣ の微分が自分自身になるという驚くべき性質を理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '微分しても変わらない関数',
      content:
        'eˣ を微分すると eˣ。自分自身が導関数。何回微分しても eˣ。こんな特別な関数がなぜ存在するのか、アニメーションで見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'x を動かして eˣ の接線の傾きを確認してください。傾きの値が常に関数値と一致していることに注目です。x=0 で値1・傾き1、x=1 で値e・傾きe。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'eの定義から理解する',
      content:
        'e = lim(n→∞)(1+1/n)ⁿ ≈ 2.71828…。この数は「成長率と値が一致する」ように定義されています。[eˣ⁺ʰ−eˣ]/h = eˣ·[eʰ−1]/h。h→0 で [eʰ−1]/h→1 なので (eˣ)\' = eˣ。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '応用：e²ˣの微分',
      content:
        'e²ˣ は合成関数。外側 eᵘ の微分は eᵘ、内側 2x の微分は 2。連鎖律より (e²ˣ)\' = e²ˣ·2 = 2e²ˣ。eˣ が自分自身を返すので、連鎖律の「内側の微分」だけが掛かります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'e³ˣ の導関数は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(e³ˣ)\' = ?',
        options: [
          { id: 'a', label: 'e³ˣ', correct: false },
          { id: 'b', label: '3e³ˣ', correct: true },
          { id: 'c', label: 'e³', correct: false },
          { id: 'd', label: '3xe³ˣ', correct: false },
        ],
        explanation:
          '連鎖律より、外側の微分 e³ˣ に内側の微分 3 を掛けて 3e³ˣ です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：自然な成長',
      content:
        '「現在の量に比例して増える」現象（人口増加、放射性崩壊、複利）は eˣ で表されます。(eˣ)\' = eˣ は「成長率 = 現在値」。自然界で最も基本的な成長パターンです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '(eˣ)\' = eˣ。微分しても変わらない唯一の関数（定数倍を除く）。自然対数の底 e は微分と最も相性の良い数です。\n\n次は「商の微分」を学びましょう。分数の形の関数を微分する方法です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
