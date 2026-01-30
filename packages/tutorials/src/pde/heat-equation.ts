import { Tutorial } from '../types';

export const heatEquationTutorial: Tutorial = {
  id: 'heat-equation',
  title: '熱方程式',
  description: '熱伝導を記述する放物型PDEの基本を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '熱はなめらかに広がる',
      content:
        '鉄の棒の一端を熱すると、温度が徐々に伝わっていきます。∂u/∂t = α·∂²u/∂x² が熱方程式です。アニメーションで温度分布の時間変化を見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'heat-equation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：初期温度分布を設定',
      content:
        '棒の上をなぞって初期温度分布を描いてください。再生ボタンを押すと、その温度がどのように平滑化されるか観察できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'heat-equation-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '熱方程式の意味',
      content:
        '∂u/∂t = α·∂²u/∂x²。左辺は温度の時間変化率。右辺の∂²u/∂x²は温度分布の曲率（凹凸）です。凹んでいる場所は温まり、突出している場所は冷えます。αは熱拡散率です。',
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
      title: '解の性質：平滑化',
      content:
        '熱方程式の解は時間とともに滑らかになります。鋭いピークは素早く広がり、やがて一様な温度に近づきます。これを「拡散」と呼びます。不可逆な過程であり、時間を逆にすると不安定になります。',
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
      title: 'クイズ：熱方程式',
      content: '熱方程式 ∂u/∂t = α·∂²u/∂x² において、右辺の∂²u/∂x²は何を表しますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '熱方程式の右辺 ∂²u/∂x² は何を表しますか？',
        options: [
          { id: 'a', label: '温度の時間変化率', correct: false },
          { id: 'b', label: '温度分布の空間的な曲率（凹凸）', correct: true },
          { id: 'c', label: '温度の空間的な傾き', correct: false },
          { id: 'd', label: '熱源の強さ', correct: false },
        ],
        explanation:
          '∂²u/∂x²は2階空間微分であり、温度分布の曲率を表します。凹んだ部分（∂²u/∂x² > 0）は温まり、凸の部分は冷えます。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：確率との関係',
      content:
        '熱方程式はブラウン運動の確率密度関数が満たす方程式でもあります。粒子のランダムな運動が巨視的には「拡散」として観測され、それが熱伝導と同じ数学で記述されるのです。',
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
      title: 'まとめ：熱方程式を体感する',
      content:
        '熱拡散率αと初期温度を変えて、拡散の速さと温度分布の変化を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'heat-equation-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'alpha', min: 0.01, max: 2, step: 0.01, initial: 0.5 },
          { name: 'time', min: 0, max: 5, step: 0.05, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
