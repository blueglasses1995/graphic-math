import { Tutorial } from '../types';

export const instrumentSoundTutorial: Tutorial = {
  id: 'instrument-sound',
  title: '楽器の音',
  description: '楽器の音がPDE（波動方程式）でどう記述されるか学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '弦の振動が音を作る',
      content:
        'ギターやピアノの弦は波動方程式に従って振動します。弦の長さ・張力・密度が音の高さを決めます。振動する弦のアニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'instrument-sound-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：弦の長さと張力を変える',
      content:
        '弦の長さLと張力Tを変えて、基本周波数 f = (1/2L)√(T/ρ) がどう変わるか体感してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'instrument-sound-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '倍音構造',
      content:
        '弦の振動は基本振動（n=1）と倍音（n=2,3,...）の重ね合わせです。周波数は fₙ = n·f₁。ギターとピアノでは倍音の混ざり方が異なり、それが音色の違いを生みます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '太鼓の振動：2次元波動方程式',
      content:
        '太鼓の膜は2次元波動方程式に従います。円形膜の固有関数はベッセル関数 Jₘ(αₘₙr)·cos(mθ) です。倍音が整数比にならないため、弦楽器とは異なる響きになります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：楽器の物理',
      content: '弦の長さを半分にすると、基本周波数はどうなりますか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '弦の長さを半分にしたとき、基本周波数はどう変化しますか？',
        options: [
          { id: 'a', label: '半分になる', correct: false },
          { id: 'b', label: '2倍になる（1オクターブ上がる）', correct: true },
          { id: 'c', label: '4倍になる', correct: false },
          { id: 'd', label: '変わらない', correct: false },
        ],
        explanation:
          'f₁ = (1/2L)√(T/ρ) なので、Lを半分にすると f₁ は2倍になります。これは1オクターブ上の音に対応します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：管楽器の共鳴',
      content:
        '管楽器の音は空気柱の振動（1次元波動方程式）で記述されます。開管と閉管で境界条件が異なり、倍音構造も違います。クラリネットは奇数倍音のみを含み、独特の音色になります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：楽器の音を体感する',
      content:
        '弦の長さ・張力・倍音の数を変えて、楽器の物理を体験しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'instrument-sound-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'stringLength', min: 0.1, max: 2, step: 0.01, initial: 1 },
          { name: 'tension', min: 1, max: 100, step: 1, initial: 50 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
