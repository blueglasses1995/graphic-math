import { Tutorial } from '../types';

export const logEquationTutorial: Tutorial = {
  id: 'log-equation',
  title: '対数方程式を解く',
  description: '対数を含む方程式の解き方を視覚的に理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '対数を外す',
      content:
        'log₂(x) = 5 を解くには、両辺を2の指数にします。2^(log₂(x)) = 2⁵ → x = 32。対数を外すには指数関数を使います。',
      customScene: 'log-equation-animation',
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
        '対数方程式の右辺の値を変えて、解がどう変わるか観察してください。グラフとの交点が解です。',
      customScene: 'log-equation-interactive',
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
      title: 'log₃(x) = 4',
      content:
        '両辺を3の指数にすると x = 3⁴ = 81。検算: log₃(81) = 4 ✓。対数方程式は「指数に戻す」のが基本戦略です。',
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
      title: 'log₂(x) + log₂(x-2) = 3',
      content:
        '積の法則で log₂(x(x-2)) = 3。よって x(x-2) = 2³ = 8。x² - 2x - 8 = 0 を解くと x = 4（x = -2 は真数条件より不適）。',
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
        'log₅(x) = 3 の解は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₅(x) = 3 のとき x は？',
        options: [
          { id: 'a', label: '15', correct: false },
          { id: 'b', label: '125', correct: true },
          { id: 'c', label: '243', correct: false },
          { id: 'd', label: '625', correct: false },
        ],
        explanation:
          'x = 5³ = 125。log₅(125) = 3 を確認できます。',
      },
    },
    {
      id: 'alternate',
      title: '真数条件に注意',
      content:
        '対数方程式を解くときは、必ず真数条件を確認しましょう。\n\nlog の中身 > 0 でなければなりません。\n\n方程式を解いて出てきた答えが真数条件を満たさない場合、その解は不適です。',
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
        '対数方程式は「指数に戻す」ことで解けます。対数法則で整理 → 指数形に変換 → 真数条件の確認。\n\n自由に問題を変えて練習してみてください。',
      customScene: 'log-equation-summary',
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
