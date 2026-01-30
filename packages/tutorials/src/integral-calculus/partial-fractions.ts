import { Tutorial } from '../types';

export const partialFractionsTutorial: Tutorial = {
  id: 'partial-fractions',
  title: '部分分数分解',
  description: '有理関数を単純な分数の和に分解して積分する技法',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '分数を分解する',
      content:
        '∫ 1/[x(x+1)] dx をそのまま積分するのは困難です。\n\nでも 1/[x(x+1)] = 1/x - 1/(x+1) と分解できたら？\n\nそれぞれの項は ln で積分できます。\n\nこの「分解する」技法が部分分数分解です。',
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
        '1/[x(x+1)] のグラフと、1/x と -1/(x+1) のグラフを重ねて表示しています。\n\n2つの単純な分数の「差」が、もとの関数に一致することを確かめてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '分解の手順',
      content:
        '1/[x(x+1)] = A/x + B/(x+1) と仮定します。\n\n通分すると：1 = A(x+1) + Bx\n\nx = 0 を代入：1 = A → A = 1\nx = -1 を代入：1 = -B → B = -1\n\nよって 1/[x(x+1)] = 1/x - 1/(x+1)\n\n∫ 1/[x(x+1)] dx = ln|x| - ln|x+1| + C = ln|x/(x+1)| + C',
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
      title: '重根がある場合',
      content:
        '分母に重根がある場合は注意が必要です。\n\n1/[x²(x+1)] = A/x + B/x² + C/(x+1)\n\n重根 x² に対して、A/x と B/x² の2つの項が必要です。\n\n通分して係数を比較すると A = -1, B = 1, C = 1。\n\n∫ dx = -ln|x| - 1/x + ln|x+1| + C',
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
        '1/[(x-1)(x+2)] を部分分数分解するとどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1/[(x-1)(x+2)] の部分分数分解は？',
        options: [
          { id: 'a', label: '1/(x-1) + 1/(x+2)', correct: false },
          { id: 'b', label: '1/(x-1) - 1/(x+2)', correct: false },
          { id: 'c', label: '(1/3)[1/(x-1) - 1/(x+2)]', correct: true },
          { id: 'd', label: '(1/2)[1/(x-1) + 1/(x+2)]', correct: false },
        ],
        explanation:
          '正解は (1/3)[1/(x-1) - 1/(x+2)] です。\n\nA/(x-1) + B/(x+2) = 1/[(x-1)(x+2)]\n1 = A(x+2) + B(x-1)\nx=1: 1=3A → A=1/3, x=-2: 1=-3B → B=-1/3',
      },
    },
    {
      id: 'alternate',
      title: '既約二次因子の場合',
      content:
        '分母に因数分解できない二次式がある場合：\n\n1/[x(x²+1)] = A/x + (Bx+C)/(x²+1)\n\n既約二次因子 x²+1 に対しては、分子を Bx+C（一次式）にします。\n\n結果：A=1, B=-1, C=0\n\n∫ dx = ln|x| - (1/2)ln(x²+1) + C\n\n二次因子の積分では arctan が登場することもあります。',
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
        '部分分数分解は、有理関数の積分を可能にする強力な技法です。\n\n手順：分母を因数分解 → 部分分数に展開 → 係数を決定 → 各項を積分。\n\n結果は ln や arctan で表されます。\n\nグラフを操作して、分解の様子を確かめてみてください。',
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
