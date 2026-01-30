import { Tutorial } from '../types';

export const solveOdeTutorial: Tutorial = {
  id: 'solve-ode',
  title: '【実践】微分方程式を解く',
  description: '積分を使って簡単な微分方程式（ODE）を解く',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '微分方程式とは',
      content:
        'dy/dx = 2x という式は「y の微分が 2x に等しい」と言っています。\n\nこの条件を満たす y を見つけるには？ 両辺を積分すればよいのです。\n\ny = ∫ 2x dx = x² + C\n\n積分は微分方程式を解くための基本道具です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '方向場（各点での傾きを表す短い線分）が表示されています。\n\n解曲線がこの方向場に沿って流れる様子を観察してみましょう。\n\n初期値 C を変えると、解曲線が上下にシフトします。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '変数分離法',
      content:
        'dy/dx = y のような方程式は「変数分離法」で解きます：\n\ndy/y = dx\n∫ dy/y = ∫ dx\nln|y| = x + C₁\ny = ±e^(x+C₁) = Aeˣ（A = ±e^C₁）\n\n指数関数的増加 ── 人口増加や放射性崩壊のモデルです。\n\n初期条件 y(0) = y₀ で A = y₀ と決まります。',
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
      title: '冷却の法則',
      content:
        'ニュートンの冷却法則：dT/dt = -k(T - Tₑ)\n\nTₑ は環境温度、T は物体の温度、k は冷却定数。\n\nu = T - Tₑ と置くと du/dt = -ku\n\n解：u = u₀·e^(-kt)、つまり T(t) = Tₑ + (T₀ - Tₑ)·e^(-kt)\n\n積分を使って、コーヒーが冷める過程を数式で表現できました。',
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
      title: '予測してみよう',
      content:
        'dy/dx = 3x² で y(0) = 5 のとき、y(2) は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'dy/dx = 3x², y(0) = 5 のとき y(2) は？',
        options: [
          { id: 'a', label: '8', correct: false },
          { id: 'b', label: '12', correct: false },
          { id: 'c', label: '13', correct: true },
          { id: 'd', label: '16', correct: false },
        ],
        explanation:
          '正解は 13 です。\n\ny = ∫ 3x² dx = x³ + C。y(0) = 5 より C = 5。\ny = x³ + 5 なので y(2) = 8 + 5 = 13。',
      },
    },
    {
      id: 'alternate',
      title: '数値解法',
      content:
        '解析的に解けない微分方程式も多くあります。\n\nオイラー法：y_{n+1} = yₙ + f(xₙ, yₙ)·Δx\n\nこれは積分の長方形近似に相当します。\n\nルンゲ・クッタ法はより精度の高い方法で、科学計算で標準的に使われます。\n\n積分の近似 → 微分方程式の数値解法 という流れです。',
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
      title: 'まとめ',
      content:
        '微分方程式を解くことは、本質的に「積分する」ことです。\n\n変数分離法は最も基本的な解法で、両辺を積分します。\n\n初期条件で積分定数 C が決まります。\n\n方向場を操作して、解曲線の振る舞いを観察してみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
