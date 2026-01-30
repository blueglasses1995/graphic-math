import { Tutorial } from '../types';

export const volumeRevolutionTutorial: Tutorial = {
  id: 'volume-revolution',
  title: '体積：回転体',
  description: '曲線を回転させてできる立体の体積を積分で求める',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '曲線を回転させる',
      content:
        'y = f(x) のグラフを x 軸の周りに回転させると、立体ができます。\n\nこの回転体の体積をどうやって求めるでしょうか？\n\n薄い円盤に切り分けて足し合わせる ── これも積分のアイデアです。\n\nアニメーションで回転の様子を見てみましょう。',
      customScene: 'volume-revolution-animation',
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
        '回転体を回して、いろいろな角度から眺めてみましょう。\n\n断面を見ると円になっていることが分かります。\n\nその円の半径は f(x) です。',
      customScene: 'volume-revolution-interactive',
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
      title: '円盤法',
      content:
        'V = ∫ₐᵇ π[f(x)]² dx\n\n各位置 x での断面は半径 f(x) の円。その面積は π[f(x)]²。\n\nこれに微小幅 dx を掛けて足し合わせると体積になります。\n\n例：y = x を [0, r] で回転させると円錐。\nV = ∫₀ʳ πx² dx = π[x³/3]₀ʳ = πr³/3\n\n円錐の体積 = (1/3)πr²·r = πr³/3 と一致！',
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
      title: '球の体積',
      content:
        'y = √(r² - x²) を x 軸の周りに回転させると半径 r の球ができます。\n\nV = ∫₋ᵣʳ π(r² - x²) dx = π[r²x - x³/3]₋ᵣʳ\n\n= π[(r³ - r³/3) - (-r³ + r³/3)]\n= π · 2(r³ - r³/3) = π · 4r³/3 = (4/3)πr³\n\n球の体積公式が積分から導けました！',
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
        'y = 1 を [0, h] で x 軸の周りに回転させるとどんな形？ 体積は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = 1 を [0, h] で回転させた体積は？',
        options: [
          { id: 'a', label: 'πh²', correct: false },
          { id: 'b', label: 'πh', correct: true },
          { id: 'c', label: '2πh', correct: false },
          { id: 'd', label: 'πh/3', correct: false },
        ],
        explanation:
          '正解は πh です。\n\ny = 1 を回転させると半径 1、高さ h の円柱ができます。\nV = ∫₀ʰ π·1² dx = πh。円柱の体積公式と一致します。',
      },
    },
    {
      id: 'alternate',
      title: 'シェル法（殻の方法）',
      content:
        '円盤法の他に「シェル法」もあります。\n\nV = ∫ₐᵇ 2πx·f(x) dx（y 軸の周りに回転する場合）\n\n薄い円筒の殻を重ねていくイメージです。\n\n回転軸と積分変数の関係によって、円盤法とシェル法を使い分けます。',
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
        '回転体の体積は V = ∫ₐᵇ π[f(x)]² dx（円盤法）で求められます。\n\n円錐、球、円柱などおなじみの体積公式が積分から導けます。\n\n3Dモデルを回転させて、回転体の形を確かめてみてください。',
      customScene: 'volume-revolution-summary',
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
