import { Tutorial } from '../types';

export const numericalIntegrationTutorial: Tutorial = {
  id: 'numerical-integration',
  title: '【実践】数値積分',
  description: '台形法・シンプソン法で積分を数値的に計算する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '計算できない積分',
      content:
        '∫ e^(-x²) dx には初等関数による閉じた式がありません。\n\nでも「数値」としてなら計算できます。\n\n台形やカーブで曲線を近似して、面積を求めるのです。\n\nこれが数値積分（数値求積）です。',
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
        '分割数を変えて、台形近似の精度がどう変わるか確かめてみましょう。\n\n長方形法よりも台形法の方が、少ない分割で正確になることが分かります。',
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
      title: '台形法',
      content:
        '各小区間を台形で近似します：\n\nTₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]\n\n両端は1回、中間点は2回足します。\n\n例：∫₀¹ x² dx を n=4 で台形法\nΔx = 0.25\nT₄ = (0.125)[0 + 2(0.0625) + 2(0.25) + 2(0.5625) + 1] = 0.34375\n\n真の値 1/3 ≈ 0.3333 との誤差は約 3%。',
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
      title: 'シンプソン法',
      content:
        'シンプソン法は放物線で近似します（n は偶数）：\n\nSₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)]\n\n係数が 1, 4, 2, 4, 2, ..., 4, 1 のパターン。\n\n台形法よりはるかに精度が高く、3次以下の多項式なら厳密に一致します。\n\nコンピュータでの数値計算ではシンプソン法が広く使われています。',
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
        '台形法の誤差は分割数 n を2倍にするとどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '台形法で n を2倍にすると誤差は？',
        options: [
          { id: 'a', label: '半分になる', correct: false },
          { id: 'b', label: '1/4 になる', correct: true },
          { id: 'c', label: '1/8 になる', correct: false },
          { id: 'd', label: '変わらない', correct: false },
        ],
        explanation:
          '正解は「1/4 になる」です。\n\n台形法の誤差は O(1/n²) なので、n を2倍にすると誤差は (1/2)² = 1/4 に減ります。\n\nシンプソン法は O(1/n⁴) なので、n を2倍にすると誤差は 1/16 になります。',
      },
    },
    {
      id: 'alternate',
      title: 'プログラムで実装',
      content:
        '数値積分はプログラミングとの相性が抜群です。\n\nfor ループで各点の関数値を計算し、重み付きで足すだけ。\n\n実際の応用では、適応型積分（誤差に応じて分割を調整）も使われます。\n\nモンテカルロ法（ランダムな点で面積を推定）という方法もあります。',
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
        '数値積分：閉じた式がなくても積分値を計算できます。\n\n台形法：精度 O(1/n²)\nシンプソン法：精度 O(1/n⁴)\n\n分割数を変えて、近似の精度を体感してみてください。',
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
