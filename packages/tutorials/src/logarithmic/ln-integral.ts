import { Tutorial } from '../types';

export const lnIntegralTutorial: Tutorial = {
  id: 'ln-integral',
  title: 'ln(x)の積分',
  description: '∫(1/x)dx = ln|x| + C であることを視覚的に理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '1/x の面積が ln',
      content:
        'y = 1/x のグラフの下の面積（1からxまで）がちょうど ln(x)。1/x を積分すると自然対数が現れます。',
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
        '上限の値を変えて、1/x の面積と ln(x) の値が一致することを確認してください。',
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
      title: '∫₁ᵉ (1/x)dx = 1',
      content:
        '1 から e までの 1/x の面積は ln(e) - ln(1) = 1 - 0 = 1。面積がちょうど1になるのが e という数の特別なところです。',
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
      title: 'x^n の積分の例外',
      content:
        '∫x^n dx = x^(n+1)/(n+1) + C は n = -1 で破綻します（0で割れない）。この「穴」を埋めるのが ∫x^(-1) dx = ln|x| + C。対数は積分公式の欠けたピースです。',
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
        '∫₁¹⁰ (1/x) dx の値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫₁¹⁰ (1/x) dx はいくつ？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: 'ln(10) ≈ 2.303', correct: true },
          { id: 'c', label: '10', correct: false },
          { id: 'd', label: 'e', correct: false },
        ],
        explanation:
          '∫₁¹⁰ (1/x) dx = ln(10) - ln(1) = ln(10) ≈ 2.303 です。',
      },
    },
    {
      id: 'alternate',
      title: '絶対値の意味',
      content:
        '正確には ∫(1/x)dx = ln|x| + C。絶対値がつく理由:\n\nx > 0: ln(x) は定義できる\nx < 0: ln(x) は定義できないが、1/x は定義できる\n\n|x| をつけることで、x < 0 の範囲でも積分が定義できます。',
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
        '∫(1/x)dx = ln|x| + C。1/x の面積が自然対数。x^n の積分公式の n = -1 の穴を埋める公式です。\n\n面積の変化を観察してみてください。',
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
