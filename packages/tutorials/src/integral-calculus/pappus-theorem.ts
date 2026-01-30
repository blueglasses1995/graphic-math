import { Tutorial } from '../types';

export const pappusTheoremTutorial: Tutorial = {
  id: 'pappus-theorem',
  title: '【実践】パップスの定理',
  description: '回転体の体積・表面積を重心と積分で求める',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '重心が描く円',
      content:
        '平面図形を回転させた立体の体積は、\n\n面積 × 重心が動く距離（円周）で求められます。\n\nV = 2π · ȳ · A\n\nこの美しい定理が「パップスの定理」です。',
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
        '平面図形を回転させる様子を観察してみましょう。\n\n図形の重心の位置をマーカーで示しています。\n\n重心が描く円の半径と図形の面積から体積が計算できます。',
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
      title: 'トーラスの体積',
      content:
        '半径 r の円を、中心から距離 R の軸の周りに回転させるとトーラス（ドーナツ形）ができます。\n\n円の面積 A = πr²\n重心の距離 ȳ = R\n\nV = 2π · R · πr² = 2π²Rr²\n\nこの公式を積分で直接求めるのは大変ですが、パップスの定理なら一瞬です。',
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
      title: '逆に重心を求める',
      content:
        'パップスの定理を逆に使って重心を求めることもできます。\n\n半円 y = √(r² - x²) を x 軸の周りに回転させると球ができます。\n\n球の体積 V = (4/3)πr³、半円の面積 A = πr²/2\n\nV = 2πȳ · A より ȳ = V/(2πA) = (4r³/3)/(πr²) = 4r/(3π)\n\n半円の重心は中心から 4r/(3π) の位置にあります。',
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
        '半径 2 の円を中心から距離 5 の軸で回転させたトーラスの体積は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'r = 2, R = 5 のトーラスの体積は？',
        options: [
          { id: 'a', label: '20π²', correct: false },
          { id: 'b', label: '40π²', correct: true },
          { id: 'c', label: '80π²', correct: false },
          { id: 'd', label: '10π²', correct: false },
        ],
        explanation:
          '正解は 40π² です。\n\nV = 2π²Rr² = 2π² · 5 · 4 = 40π² ≈ 394.8',
      },
    },
    {
      id: 'alternate',
      title: 'パップスの第2定理（表面積）',
      content:
        '体積だけでなく、表面積にも同様の定理があります：\n\nS = 2π · ȳ · L\n\nL は回転させる曲線の長さ、ȳ はその曲線の重心の距離。\n\nトーラスの表面積：S = 2π · R · 2πr = 4π²Rr\n\n重心 × 移動距離 ── シンプルで美しい公式です。',
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
        'パップスの定理：V = 2πȳA（体積）、S = 2πȳL（表面積）\n\n重心の概念と回転体を結びつける強力な定理です。\n\n図形を回転させて、トーラスなどの立体を作ってみてください。',
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
