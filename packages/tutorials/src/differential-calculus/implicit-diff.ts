import { Tutorial } from '../types';

export const implicitDiffTutorial: Tutorial = {
  id: 'implicit-diff',
  title: '暗黙の微分',
  description: '陽関数に変換せずに微分する「陰関数微分」の方法を学ぶ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: 'y が解けないとき',
      content:
        'x² + y² = 1（円）のように、y = f(x) の形に解けない式でも微分できます。両辺を x で微分して、dy/dx を求める。それが「陰関数微分」です。',
      customScene: 'implicit-diff-animation',
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
        '円 x²+y²=1 の上の点を動かして、接線の傾きがどう変わるか観察してください。上半分では負の傾き、下半分では正の傾きになります。',
      customScene: 'implicit-diff-interactive',
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
      title: '円の方程式を微分',
      content:
        'x² + y² = 1 の両辺を x で微分。2x + 2y·(dy/dx) = 0。dy/dx について解くと dy/dx = −x/y。点 (1/√2, 1/√2) では傾き = −1。45°の右下がりです。',
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
      title: 'もう少し複雑な例',
      content:
        'x³ + y³ = 6xy を微分。3x² + 3y²·(dy/dx) = 6y + 6x·(dy/dx)。整理すると dy/dx = (6y−3x²)/(3y²−6x) = (2y−x²)/(y²−2x)。x と y の両方が式に残ります。',
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
        'x²+y²=25 の点 (3,4) における接線の傾きは？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'x²+y²=25 上の点 (3,4) での dy/dx は？',
        options: [
          { id: 'a', label: '−3/4', correct: true },
          { id: 'b', label: '3/4', correct: false },
          { id: 'c', label: '−4/3', correct: false },
          { id: 'd', label: '4/3', correct: false },
        ],
        explanation:
          'dy/dx = −x/y = −3/4。半径5の円の上半分で、点 (3,4) では右下がりの接線です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：暗黙の連鎖律',
      content:
        'y を x の関数とみなすと、y² を x で微分すると 2y·(dy/dx)。これは連鎖律そのもの。陰関数微分の核心は「y の項にはすべて dy/dx が付く」ということです。',
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
        '陰関数微分：両辺を x で微分し、dy/dx について解く。y を陽に求めなくても傾きがわかります。\n\n次は「平均値の定理」。微分の理論的支柱を学びましょう。',
      customScene: 'implicit-diff-summary',
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
