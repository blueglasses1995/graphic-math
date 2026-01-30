import { Tutorial } from '../types';

export const diffusionConvectionTutorial: Tutorial = {
  id: 'diffusion-convection',
  title: '拡散と対流',
  description: '拡散と対流が同時に起こる移流拡散方程式を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '流れながら広がる',
      content:
        '川にインクを落とすと、流れに沿って移動しながら（対流）、同時に広がります（拡散）。∂u/∂t + v·∂u/∂x = D·∂²u/∂x² がその方程式です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'diffusion-convection-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：流速と拡散のバランス',
      content:
        '流速vと拡散係数Dを変えて、どちらの効果が支配的になるか観察してください。ペクレ数 Pe = vL/D が大きいほど対流が支配的です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'diffusion-convection-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ペクレ数',
      content:
        'ペクレ数 Pe = vL/D は対流と拡散の相対的な強さを表す無次元数です。Pe >> 1 では対流が支配的で波形が保たれ、Pe << 1 では拡散が支配的で素早く広がります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '定常解と境界層',
      content:
        '定常状態では v·du/dx = D·d²u/dx² となり、解は u(x) = A + B·exp(vx/D)。v/D が大きいとき、解は境界付近で急激に変化する「境界層」を形成します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：拡散と対流',
      content: 'ペクレ数が非常に大きいとき、何が起こりますか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ペクレ数 Pe >> 1 のとき、溶液の挙動はどうなりますか？',
        options: [
          { id: 'a', label: '瞬時に均一に広がる', correct: false },
          { id: 'b', label: '対流が支配的で、あまり広がらずに流れる', correct: true },
          { id: 'c', label: '全く動かない', correct: false },
          { id: 'd', label: '拡散が支配的になる', correct: false },
        ],
        explanation:
          'Pe >> 1 は流速が大きいか拡散係数が小さい場合で、対流効果が拡散効果を圧倒します。物質はほぼ形を保って流れに運ばれます。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：環境汚染の拡散',
      content:
        '工場からの排煙が風に流される様子は移流拡散方程式で記述されます。風速（対流）と大気の乱流拡散のバランスが汚染物質の到達距離を決めます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：拡散と対流のバランス',
      content:
        '流速と拡散係数のスライダーを操作して、ペクレ数の変化と解への影響を体感しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'diffusion-convection-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'velocity', min: 0, max: 5, step: 0.1, initial: 1 },
          { name: 'diffusion', min: 0.01, max: 2, step: 0.01, initial: 0.5 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
