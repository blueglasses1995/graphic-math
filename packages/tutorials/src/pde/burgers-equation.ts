import { Tutorial } from '../types';

export const burgersEquationTutorial: Tutorial = {
  id: 'burgers-equation',
  title: 'バーガーズ方程式',
  description: '非線形PDEの代表例であるバーガーズ方程式を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '波が自分を変形させる',
      content:
        '∂u/∂t + u·∂u/∂x = ν·∂²u/∂x²。バーガーズ方程式は非線形PDEの最も重要な例です。波の高い部分ほど速く進み、衝撃波が形成されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'burgers-equation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：粘性を変える',
      content:
        '粘性係数νを変えてみてください。νが小さいほど衝撃波が鋭くなり、大きいほど滑らかになります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'burgers-equation-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '非線形項 u·∂u/∂x',
      content:
        'u·∂u/∂x は非線形移流項です。速度が u 自身に依存するため、波の振幅が大きい部分ほど速く移動します。これが波形の傾斜化（steepening）を引き起こし、最終的に衝撃波になります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'コール・ホップ変換',
      content:
        'u = -2ν(∂φ/∂x)/φ と置くと、バーガーズ方程式は φ の熱方程式 ∂φ/∂t = ν·∂²φ/∂x² に変換されます。このコール・ホップ変換により、非線形PDEが線形PDEに帰着します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：バーガーズ方程式',
      content: 'バーガーズ方程式が非線形である理由は何ですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'バーガーズ方程式が非線形PDEである理由はどれですか？',
        options: [
          { id: 'a', label: '2階微分を含むため', correct: false },
          { id: 'b', label: '未知関数 u とその微分の積 u·∂u/∂x を含むため', correct: true },
          { id: 'c', label: '粘性項があるため', correct: false },
          { id: 'd', label: '時間依存するため', correct: false },
        ],
        explanation:
          'u·∂u/∂x の項は未知関数 u とその1階微分の積です。これは u について線形ではないため、非線形PDEになります。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：流体力学への橋渡し',
      content:
        'バーガーズ方程式はナビエ・ストークス方程式の1次元モデルです。非線形移流と粘性拡散の競合が衝撃波や乱流の基本的な機構を理解する鍵になります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：バーガーズ方程式を体感する',
      content:
        '粘性と初期振幅を変えて、衝撃波の形成過程を観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'burgers-equation-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'viscosity', min: 0.001, max: 1, step: 0.001, initial: 0.1 },
          { name: 'time', min: 0, max: 5, step: 0.05, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
