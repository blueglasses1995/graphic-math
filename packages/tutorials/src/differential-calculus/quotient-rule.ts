import { Tutorial } from '../types';

export const quotientRuleTutorial: Tutorial = {
  id: 'quotient-rule',
  title: '商の微分',
  description: '分数関数の微分法則 (f/g)\' を理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '割り算の微分',
      content:
        'f(x)/g(x) を微分するには？積の微分と似ていますが、少し複雑です。分母の二乗が登場するのがポイント。アニメーションで見てみましょう。',
      customScene: 'quotient-rule-animation',
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
        'f(x) と g(x) を変えて、商 f/g のグラフと導関数を観察してください。分母がゼロに近づくとどうなるかにも注目です。',
      customScene: 'quotient-rule-interactive',
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
      title: '商の微分公式',
      content:
        '(f/g)\' = [f\'·g − f·g\'] / g²。分子は「分子の微分×分母 − 分子×分母の微分」。分母は「分母の二乗」。積の微分から導くことができます。',
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
      title: '具体例：tan(x) の微分',
      content:
        'tan(x) = sin(x)/cos(x)。商の微分より [cos(x)·cos(x) − sin(x)·(−sin(x))] / cos²(x) = [cos²x + sin²x] / cos²x = 1/cos²x。これが tan の微分です。',
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
        '(x/(x+1))\' はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '[x/(x+1)]\' = ?',
        options: [
          { id: 'a', label: '1/(x+1)', correct: false },
          { id: 'b', label: '1/(x+1)²', correct: true },
          { id: 'c', label: 'x/(x+1)²', correct: false },
          { id: 'd', label: '−1/(x+1)²', correct: false },
        ],
        explanation:
          'f=x, g=x+1。[1·(x+1) − x·1]/(x+1)² = 1/(x+1)² です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：積の微分で代用',
      content:
        'f/g = f·g⁻¹ と書けば、積の微分と連鎖律で処理できます。(f·g⁻¹)\' = f\'·g⁻¹ + f·(−g⁻²·g\') = (f\'g − fg\')/g²。商の微分を覚えなくても、積と連鎖律で導けます。',
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
        '(f/g)\' = (f\'g − fg\')/g²。商の微分は積の微分の兄弟です。覚えにくければ、f·g⁻¹ に変換して積の微分と連鎖律で対処できます。\n\n次は微分の応用、「増減と極値」に進みましょう。',
      customScene: 'quotient-rule-summary',
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
