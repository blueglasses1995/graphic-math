import { Tutorial } from '../types';

export const logQuotientTutorial: Tutorial = {
  id: 'log-quotient',
  title: '対数法則：商→差',
  description: 'log(A/B) = log A - log B の法則を視覚的に理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '割り算が引き算になる',
      content:
        'log₂(32 / 4) = log₂(32) - log₂(4) = 5 - 2 = 3。確かに 32 / 4 = 8 で log₂(8) = 3。対数を使うと割り算が引き算に変わります。',
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
        'A と B の値を変えて、log(A / B) と log(A) - log(B) が常に一致することを確認してください。',
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
      title: 'なぜ成り立つのか',
      content:
        'a^m / a^n = a^(m-n) という指数法則が根拠です。A = a^m, B = a^n とすると、A/B = a^(m-n)。よって log(A/B) = m - n = log A - log B。',
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
      title: '具体例: log₁₀(0.5)',
      content:
        'log₁₀(0.5) = log₁₀(1/2) = log₁₀(1) - log₁₀(2) = 0 - 0.301 = -0.301。1より小さい数の対数は負になります。',
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
        'log₂(64) - log₂(8) はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(64) - log₂(8) はいくつ？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '3', correct: true },
          { id: 'c', label: '4', correct: false },
          { id: 'd', label: '5', correct: false },
        ],
        explanation:
          'log₂(64) - log₂(8) = 6 - 3 = 3。これは log₂(64/8) = log₂(8) = 3 と一致します。',
      },
    },
    {
      id: 'alternate',
      title: '比の評価',
      content:
        '商の法則は「比」を評価するのに便利です。\n\nlog(A/B) > 0 → A > B\nlog(A/B) = 0 → A = B\nlog(A/B) < 0 → A < B\n\n対数の差を見れば、2つの量の大小関係がわかります。',
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
        'log(A/B) = log A - log B。対数は商を差に変換します。1より小さい数の対数は負になります。\n\n自由に値を変えてこの法則を確かめてください。',
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
