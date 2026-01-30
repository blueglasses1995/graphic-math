import { Tutorial } from '../types';

export const greenFunctionTutorial: Tutorial = {
  id: 'green-function',
  title: 'グリーン関数入門',
  description: 'グリーン関数を用いたPDEの解法の基本を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '点源に対する応答',
      content:
        '1点に集中した熱源を与えたとき、温度はどう広がるか。その応答がグリーン関数です。ガウス分布が広がっていくアニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'green-function-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：点源の位置を変える',
      content:
        '点源の位置をドラッグで変えて、グリーン関数がどう変化するか確認してください。任意の初期条件はグリーン関数の重ね合わせで表せます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'green-function-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '熱方程式のグリーン関数',
      content:
        '無限直線上の熱方程式のグリーン関数は G(x,t;ξ,0) = (1/√(4παt))·exp(-(x-ξ)²/(4αt))。これはξに置かれた点熱源の応答です。時間とともにガウス分布が広がります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '重ね合わせの原理',
      content:
        '一般解は u(x,t) = ∫ f(ξ)G(x,t;ξ,0)dξ。初期条件 f(ξ) にグリーン関数を「畳み込み」ます。線形PDEでは、複雑な問題を点源の重ね合わせに帰着できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：グリーン関数',
      content: 'グリーン関数の役割は何ですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'グリーン関数を使ったPDE解法の本質は？',
        options: [
          { id: 'a', label: 'PDEを非線形に変換する', correct: false },
          { id: 'b', label: '任意の入力を点源応答の重ね合わせで表す', correct: true },
          { id: 'c', label: '境界条件を無視して解く', correct: false },
          { id: 'd', label: '数値的にのみ求まる近似解', correct: false },
        ],
        explanation:
          'グリーン関数は「点源への応答」です。任意の初期条件や外力を、点源の重ね合わせ（積分）として表現し、解を構成します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：インパルス応答',
      content:
        '工学では「インパルス応答」と呼ばれる概念と同じです。システムに瞬間的な入力を与えたときの応答がわかれば、任意の入力に対する出力を畳み込みで計算できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：グリーン関数を体感する',
      content:
        '点源の位置と時間を変えて、グリーン関数の広がりを観察しましょう。複数の点源の重ね合わせも試してみてください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'green-function-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'sourcePosition', min: -5, max: 5, step: 0.1, initial: 0 },
          { name: 'time', min: 0.01, max: 3, step: 0.01, initial: 0.1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
