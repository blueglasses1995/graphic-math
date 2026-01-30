import { Tutorial } from '../types';

export const fourierCoefficientsTutorial: Tutorial = {
  id: 'fourier-coefficients',
  title: 'フーリエ係数',
  description: 'フーリエ係数の計算方法と直交性の関係を理解する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '成分を取り出す魔法',
      content:
        'ベクトルの内積で各軸成分を取り出せるように、\n積分の内積でフーリエ係数を取り出せます。\n\n三角関数の「直交性」がこの魔法の正体です。\nアニメーションでその仕組みを見てみましょう。',
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
      title: '直交性を体験',
      content:
        'sin(mt)とsin(nt)の積を0から2πまで積分した値を確認しましょう。\n\nm と n のスライダーを動かして、m=n のときだけ非ゼロになることを確かめてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'm', min: 1, max: 10, step: 1, initial: 1 },
          { name: 'n', min: 1, max: 10, step: 1, initial: 2 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'フーリエ係数の公式',
      content:
        '周期2πの関数 f(t) のフーリエ係数:\n\na₀ = (1/π) ∫₀²π f(t) dt\n\naₙ = (1/π) ∫₀²π f(t) cos(nt) dt\n\nbₙ = (1/π) ∫₀²π f(t) sin(nt) dt\n\nこれは f(t) と cos(nt) や sin(nt) の「内積」を計算していることに相当します。',
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
      title: '具体的な計算例',
      content:
        'f(t) = t（0 < t < 2π）のフーリエ係数を求めます。\n\na₀ = (1/π) ∫₀²π t dt = (1/π)·2π² = 2π\n\naₙ = (1/π) ∫₀²π t cos(nt) dt = 0\n\nbₙ = (1/π) ∫₀²π t sin(nt) dt = -2/n\n\nよって: f(t) = π - 2Σ[n=1→∞] (1/n) sin(nt)\n\nこれは鋸歯状波のフーリエ展開に対応します。',
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
      content: 'フーリエ係数の性質について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫₀²π sin(3t)·cos(3t) dt の値は？',
        options: [
          { id: 'a', label: 'π', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: '2π', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          'sin(nt)とcos(mt)は、任意のm,nに対して直交します。つまり∫₀²π sin(nt)cos(mt) dt = 0 です。これはsin·cos = sin(和)+sin(差)の公式からも確認できます。',
      },
    },
    {
      id: 'alternate',
      title: 'ベクトルとの類似',
      content:
        '3次元ベクトル v = (a,b,c) の x成分は v·eₓ で取り出せます。\n\n同様に、関数 f(t) の n次フーリエ成分は\nf(t) と sin(nt)（または cos(nt)）の内積で取り出せます。\n\n関数空間の「基底」: {1, cos(t), sin(t), cos(2t), sin(2t), …}\nこれらは互いに直交する無限次元の基底ベクトルです。',
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
      title: 'まとめ：フーリエ係数',
      content:
        'フーリエ係数は関数と三角関数の内積です。\n\n異なる周波数のスライダーを操作して、各成分がどれくらい含まれているか確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'harmonicIndex', min: 1, max: 10, step: 1, initial: 1 },
          { name: 'showProduct', min: 0, max: 1, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
