import { Tutorial } from '../types';

export const eigenvalueProblemTutorial: Tutorial = {
  id: 'eigenvalue-problem',
  title: '固有値問題',
  description: 'PDE解法における固有値問題の役割を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '許される振動モード',
      content:
        '弦を固定端で張ると、特定の周波数でしか振動しません。これが固有値問題です。X" + λX = 0、X(0)=X(L)=0 の解を見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'eigenvalue-problem-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：固有モードの選択',
      content:
        'モード番号nを変えて、固有関数 sin(nπx/L) の形と対応する固有値 λₙ = (nπ/L)² を確認してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'eigenvalue-problem-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'シュトゥルム・リウヴィル問題',
      content:
        '-(p(x)y\')\'+ q(x)y = λw(x)y。変数分離法から得られる空間部分のODEは、このシュトゥルム・リウヴィル型になります。固有値は離散的で、固有関数は直交系を作ります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '固有関数の直交性',
      content:
        '異なる固有値に属する固有関数は直交します。∫₀ᴸ sin(mπx/L)sin(nπx/L)dx = 0（m≠n）。この直交性がフーリエ係数の計算を可能にし、PDEの解を構成する鍵です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：固有値問題',
      content: 'X" + λX = 0、X(0)=X(L)=0 の固有値 λₙ はどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'X" + λX = 0、X(0)=X(L)=0 の固有値 λₙ は？',
        options: [
          { id: 'a', label: 'λₙ = nπ/L', correct: false },
          { id: 'b', label: 'λₙ = n²π²/L²', correct: false },
          { id: 'c', label: 'λₙ = (nπ/L)²', correct: true },
          { id: 'd', label: 'λₙ = n/L', correct: false },
        ],
        explanation:
          '解は Xₙ(x) = sin(nπx/L) で、X" = -(nπ/L)²X より λₙ = (nπ/L)² です。選択肢bとcは同じ値ですが、標準的な表記は (nπ/L)² です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：量子力学との接点',
      content:
        '量子力学の箱の中の粒子問題はまさにこの固有値問題です。固有値がエネルギー準位、固有関数が波動関数になります。離散的なエネルギーは固有値が離散的であることから来ています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：固有モードを重ねる',
      content:
        '固有モードの係数を調整して、任意の関数をどう近似できるか体験しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'eigenvalue-problem-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'modeNumber', min: 1, max: 10, step: 1, initial: 1 },
          { name: 'amplitude', min: 0, max: 2, step: 0.1, initial: 1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
