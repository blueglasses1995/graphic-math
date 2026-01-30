import { Tutorial } from '../types';

export const schrodingerTutorial: Tutorial = {
  id: 'schrodinger',
  title: 'シュレーディンガー方程式',
  description: '量子力学の基本方程式であるシュレーディンガー方程式を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '量子の世界のPDE',
      content:
        'iħ·∂ψ/∂t = -ħ²/(2m)·∂²ψ/∂x² + V(x)ψ。シュレーディンガー方程式は量子力学の基本方程式です。波動関数の時間発展をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'schrodinger-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：ポテンシャルを変える',
      content:
        'ポテンシャルV(x)の形を変えて、波動関数がどう変化するか観察してください。井戸型、調和振動子型を試してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'schrodinger-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '波動関数と確率',
      content:
        '|ψ(x,t)|² は粒子が位置xに見つかる確率密度です。ψ自体は複素数値で、実部と虚部が振動します。確率の保存 ∫|ψ|²dx = 1 が常に成り立ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'トンネル効果',
      content:
        'ポテンシャル障壁があっても、波動関数は障壁の向こう側に染み出します。古典的には不可能な「壁の向こうに粒子が現れる」現象です。フラッシュメモリやSTMの原理です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：シュレーディンガー方程式',
      content: 'シュレーディンガー方程式と熱方程式の数学的な類似点は？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'シュレーディンガー方程式は数学的にどのPDEに類似していますか？',
        options: [
          { id: 'a', label: '波動方程式（2階時間微分）', correct: false },
          { id: 'b', label: '虚数時間の熱方程式（拡散方程式）', correct: true },
          { id: 'c', label: 'ラプラス方程式', correct: false },
          { id: 'd', label: 'バーガーズ方程式', correct: false },
        ],
        explanation:
          'iħ·∂ψ/∂t = -(ħ²/2m)·∂²ψ/∂x² は、t → it と置くと熱方程式の形になります。虚数時間の拡散方程式とみなせます。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：定常シュレーディンガー方程式',
      content:
        'ψ(x,t) = φ(x)e^{-iEt/ħ} と分離すると -ħ²/(2m)·φ" + Vφ = Eφ。これは固有値問題で、Eがエネルギー準位です。水素原子のエネルギー準位もこの方程式から求まります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：量子の世界を体感する',
      content:
        'ポテンシャルの形とエネルギーを変えて、波動関数の振る舞いを観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'schrodinger-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'energy', min: 0.1, max: 10, step: 0.1, initial: 1 },
          { name: 'barrierHeight', min: 0, max: 15, step: 0.1, initial: 5 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
