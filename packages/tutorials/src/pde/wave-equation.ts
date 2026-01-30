import { Tutorial } from '../types';

export const waveEquationTutorial: Tutorial = {
  id: 'wave-equation',
  title: '波動方程式',
  description: '波の伝播を記述する双曲型PDEの基本を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '波が伝わる仕組み',
      content:
        'ギターの弦をはじくと、波が左右に伝わります。∂²u/∂t² = c²·∂²u/∂x² が波動方程式です。波の伝播をアニメーションで見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-equation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：弦をはじく',
      content:
        '弦をドラッグして初期変位を与えてください。離すと波が伝わります。波速cの違いも試してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-equation-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '波動方程式の構造',
      content:
        '∂²u/∂t² = c²·∂²u/∂x²。左辺は加速度（時間の2階微分）、右辺は曲率に比例した復元力です。cは波の伝播速度を決めます。熱方程式との違いは、時間の2階微分であることです。',
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
      title: 'ダランベールの解',
      content:
        '波動方程式の一般解は u(x,t) = f(x-ct) + g(x+ct) です。f は右に速度cで進む波、g は左に進む波を表します。任意の初期条件から2つの波に分解できます。',
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
      title: 'クイズ：波動方程式',
      content: '波動方程式と熱方程式の根本的な違いは何ですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '波動方程式と熱方程式の根本的な違いは何ですか？',
        options: [
          { id: 'a', label: '波動方程式は非線形である', correct: false },
          { id: 'b', label: '波動方程式は時間の2階微分を含む', correct: true },
          { id: 'c', label: '波動方程式は空間微分を含まない', correct: false },
          { id: 'd', label: '熱方程式の方が次数が高い', correct: false },
        ],
        explanation:
          '波動方程式は∂²u/∂t²（2階時間微分）、熱方程式は∂u/∂t（1階時間微分）です。この違いが「波の振動」と「拡散」の違いを生みます。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：エネルギー保存',
      content:
        '波動方程式ではエネルギーが保存されます。波は拡散せず、形を保って伝わります。一方、熱方程式ではエネルギーが散逸します。この可逆性が波動方程式の大きな特徴です。',
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
      title: 'まとめ：波動方程式を体感する',
      content:
        '波速cと初期変位を変えて、波の伝播を観察しましょう。反射や干渉も試してみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-equation-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'waveSpeed', min: 0.1, max: 3, step: 0.1, initial: 1 },
          { name: 'time', min: 0, max: 10, step: 0.05, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
