import { Tutorial } from '../types';

export const separationPdeTutorial: Tutorial = {
  id: 'separation-pde',
  title: '変数分離法PDE版',
  description: 'PDEを解くための変数分離法の手順を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '複雑なPDEをODEに分解する',
      content:
        'u(x,t) = X(x)·T(t) と仮定すると、PDEが2つのODEに分かれます。この強力な手法を、アニメーションで視覚的に確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'separation-pde-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：モードの重ね合わせ',
      content:
        '各モード（n=1,2,3...）の振幅をスライダーで変えて、それらを重ね合わせた解がどうなるか観察してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'separation-pde-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '変数分離の手順',
      content:
        '熱方程式 ∂u/∂t = α·∂²u/∂x² に u = X(x)T(t) を代入すると、X·T\' = α·X"·T。両辺を αXT で割ると T\'/(αT) = X"/X = -λ（定数）。空間部 X" + λX = 0 と時間部 T\' + αλT = 0 に分離されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '固有関数の重ね合わせ',
      content:
        '境界条件 u(0,t) = u(L,t) = 0 のとき、Xₙ(x) = sin(nπx/L)、λₙ = (nπ/L)²。一般解は u(x,t) = Σ bₙ·sin(nπx/L)·exp(-α(nπ/L)²t) です。各項が独立に減衰します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：変数分離法',
      content: '変数分離法で u(x,t) = X(x)T(t) と置いたとき、何が起こりますか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '変数分離法の本質は何ですか？',
        options: [
          { id: 'a', label: 'PDEを近似的に解く手法', correct: false },
          { id: 'b', label: 'PDEを複数のODEに分解する手法', correct: true },
          { id: 'c', label: '非線形PDEを線形にする手法', correct: false },
          { id: 'd', label: '境界条件を取り除く手法', correct: false },
        ],
        explanation:
          '変数分離法は、積の形 u = X(x)T(t) を仮定することでPDEを各変数についてのODEに分解する手法です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：振動のモード',
      content:
        'ギターの弦の振動も変数分離で解けます。各モードは固有振動数を持ち、弦の音はそれらの重ね合わせです。低いモードほど減衰が遅く、高いモードは素早く消えます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：モードを重ね合わせる',
      content:
        '各モードの係数と時間を変えて、解の変化を体感しましょう。高次モードが先に減衰することを確認してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'separation-pde-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'mode1', min: 0, max: 2, step: 0.1, initial: 1 },
          { name: 'mode2', min: 0, max: 2, step: 0.1, initial: 0.5 },
          { name: 'time', min: 0, max: 5, step: 0.05, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
