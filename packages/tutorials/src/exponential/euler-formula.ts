import { Tutorial } from '../types';

export const eulerFormulaTutorial: Tutorial = {
  id: 'euler-formula',
  title: 'ネイピア数の仲間たち',
  description: 'e, π, i を結ぶオイラーの公式とその美しさを味わう',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '数学で最も美しい式',
      content:
        'eⁱπ + 1 = 0。この5つの数（e, i, π, 1, 0）は数学で最も重要な定数です。それらが1つの等式で結ばれる。「オイラーの等式」と呼ばれるこの奇跡をアニメーションで体感しましょう。',
      customScene: "euler-formula-animation",
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
      title: '複素平面でeⁱθを動かそう',
      content:
        'θを変えると eⁱθ が複素平面上の単位円を動きます。θ=0で1、θ=π/2でi、θ=πで-1、θ=3π/2で-i。角度とeの指数が円運動を作る不思議を体験してください。',
      customScene: "euler-formula-interactive",
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'オイラーの公式',
      content:
        'eⁱθ = cos θ + i sin θ\n\n指数関数が三角関数と虚数単位iで表現できる！\n\nθ=π のとき：\neⁱπ = cos π + i sin π = -1 + 0 = -1\n\nしたがって eⁱπ + 1 = 0\n\nこれがオイラーの等式です。',
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
      title: '5つの重要定数',
      content:
        'オイラーの等式に登場する5つの数：\n\n• 0：加法の単位元\n• 1：乗法の単位元\n• π：円周率（幾何学の基本）\n• e：自然対数の底（解析学の基本）\n• i：虚数単位（代数学の拡張）\n\n数学の異なる分野の主役が一堂に会する、まさに数学の統一的美しさです。',
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
      content: 'eⁱπ/² の値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'eⁱπ/² = ?',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '-1', correct: false },
          { id: 'c', label: 'i', correct: true },
          { id: 'd', label: '-i', correct: false },
        ],
        explanation:
          'eⁱπ/² = cos(π/2) + i·sin(π/2) = 0 + i·1 = i。単位円上でθ=π/2は真上の点、つまり虚数単位iの位置です。',
      },
    },
    {
      id: 'alternate',
      title: 'なぜeⁱθが円になるのか',
      content:
        'テイラー展開で理解できます：\n\neⁱθ = 1 + iθ + (iθ)²/2! + (iθ)³/3! + ...\n\ni² = -1 を使って実部と虚部を分けると：\n実部：1 - θ²/2! + θ⁴/4! - ... = cos θ\n虚部：θ - θ³/3! + θ⁵/5! - ... = sin θ\n\n指数関数のテイラー展開が三角関数に分離するのです。',
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
        'ネイピア数の仲間たち：\n• オイラーの公式：eⁱθ = cosθ + i·sinθ\n• オイラーの等式：eⁱπ + 1 = 0\n• e, π, i, 0, 1 の5大定数が一つに\n• 指数関数と三角関数が深く結びつく\n\n数学の美しさが凝縮された公式です。',
      customScene: "euler-formula-summary",
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
