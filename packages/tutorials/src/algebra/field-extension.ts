import { Tutorial } from '../types';

export const fieldExtensionTutorial: Tutorial = {
  id: 'field-extension',
  title: '拡大体',
  description: '体の拡大の概念と構成方法を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '数の世界を広げる',
      content:
        'Q（有理数）→ Q(√2)（√2を添加）→ Q(√2, √3) → ...\n\n新しい数を「添加」して体を広げていく。\nこの過程が「体の拡大」です。\n\n方程式の根を次々と添加して、全ての根を含む体を作ります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'field-extension-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'Q(√2)の元を構成',
      content:
        'Q(√2) = {a + b√2 | a, b ∈ Q}\n\nこの体では四則演算が閉じています。\n\n(1 + √2)(3 - √2) = 3 - √2 + 3√2 - 2 = 1 + 2√2\n\na, b の値を変えて Q(√2) の元の演算を試しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'field-extension-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '拡大次数',
      content:
        '体の拡大 L/K の拡大次数 [L:K] は、\nL を K 上のベクトル空間と見たときの次元です。\n\n例:\n[Q(√2):Q] = 2（基底: {1, √2}）\n[Q(∛2):Q] = 3（基底: {1, ∛2, ∛4}）\n\n拡大の塔: [M:K] = [M:L][L:K]',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '代数拡大と超越拡大',
      content:
        '代数的: K上の多項式の根として得られる元の添加\n例: √2 は x² - 2 = 0 の根 → Q(√2)/Q は代数拡大\n\n超越的: どの多項式の根でもない元の添加\n例: π は代数的でない → Q(π)/Q は超越拡大\n\n最小多項式: 代数的元を根に持つ最低次の既約多項式',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '拡大体について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '[Q(√2, √3) : Q] はいくつですか？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '3', correct: false },
          { id: 'c', label: '4', correct: true },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          '[Q(√2,√3):Q] = [Q(√2,√3):Q(√2)] · [Q(√2):Q] = 2 × 2 = 4 です。基底は {1, √2, √3, √6} です。',
      },
    },
    {
      id: 'alternate',
      title: '分解体',
      content:
        '多項式 f(x) の分解体は、f の全ての根を含む最小の拡大体です。\n\n例: x³ - 2 の Q 上の分解体は Q(∛2, ω)\n（ω = e^{2πi/3} は1の原始3乗根）\n\n[Q(∛2, ω) : Q] = 6\n\n分解体上のガロア群が方程式の対称性を記述します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：拡大体の世界',
      content:
        '拡大体:\n\n• 新しい元を添加して体を拡張\n• 拡大次数 = ベクトル空間としての次元\n• 代数拡大 vs 超越拡大\n• 分解体: 多項式の全ての根を含む最小拡大\n• ガロア理論の舞台を提供\n\n数の世界を自在に広げる道具です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'field-extension-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
