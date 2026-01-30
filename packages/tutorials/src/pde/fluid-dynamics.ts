import { Tutorial } from '../types';

export const fluidDynamicsTutorial: Tutorial = {
  id: 'fluid-dynamics',
  title: '流体力学入門',
  description: 'ナビエ・ストークス方程式の基本を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '流れを支配する方程式',
      content:
        '水や空気の流れはナビエ・ストークス方程式で記述されます。ρ(∂v/∂t + v·∇v) = -∇p + μ∇²v + f。流体の動きをアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'fluid-dynamics-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：流れを乱す',
      content:
        '障害物を配置して、流れがどう変わるか観察してください。渦の発生や乱流の兆候が見られます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'fluid-dynamics-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ナビエ・ストークス方程式の各項',
      content:
        '∂v/∂t：速度の時間変化。v·∇v：非線形移流項（流体が自分を運ぶ）。-∇p/ρ：圧力勾配力。μ∇²v/ρ：粘性力（拡散）。各項の競合が複雑な流れを生みます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'レイノルズ数',
      content:
        'Re = ρvL/μ。慣性力と粘性力の比を表す無次元数です。Re が小さいと層流（滑らかな流れ）、Re が大きいと乱流（不規則な流れ）になります。航空機の翼周りの Re は約10⁷です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：流体力学',
      content: 'レイノルズ数が大きいとき、流れはどうなりますか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'レイノルズ数 Re が非常に大きいとき、流れの状態は？',
        options: [
          { id: 'a', label: '完全に停止する', correct: false },
          { id: 'b', label: '層流（規則的な流れ）になる', correct: false },
          { id: 'c', label: '乱流（不規則な流れ）になりやすい', correct: true },
          { id: 'd', label: '圧縮性が無視できなくなる', correct: false },
        ],
        explanation:
          'Re が大きいとは慣性力が粘性力より圧倒的に強い状態で、流れは不安定になり乱流に遷移します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：ミレニアム懸賞問題',
      content:
        'ナビエ・ストークス方程式の解の存在と滑らかさは、クレイ数学研究所のミレニアム懸賞問題の一つです。100万ドルの懸賞金がかけられた未解決問題で、非線形PDEの困難さを象徴しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：流体力学を体感する',
      content:
        '粘性と流速を変えて、レイノルズ数の変化と流れのパターンを観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'fluid-dynamics-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'viscosity', min: 0.001, max: 1, step: 0.001, initial: 0.1 },
          { name: 'flowSpeed', min: 0.1, max: 5, step: 0.1, initial: 1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
