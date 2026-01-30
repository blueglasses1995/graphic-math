import { Tutorial } from '../types';

export const logProductTutorial: Tutorial = {
  id: 'log-product',
  title: '対数法則：積→和',
  description: 'log(AB) = log A + log B の法則を視覚的に理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: 'かけ算が足し算になる',
      content:
        'log₂(4 × 8) = log₂(4) + log₂(8) = 2 + 3 = 5。確かに 4 × 8 = 32 で log₂(32) = 5。対数を使うと、かけ算が足し算に変わります。',
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
        'A と B の値を変えて、log(A × B) と log(A) + log(B) が常に一致することを確認してください。',
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
        'a^m × a^n = a^(m+n) という指数法則が根拠です。A = a^m, B = a^n とすると、AB = a^(m+n)。よって log(AB) = m + n = log A + log B。',
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
      title: '具体例: log₁₀(200)',
      content:
        'log₁₀(200) = log₁₀(2 × 100) = log₁₀(2) + log₁₀(100) = 0.301 + 2 = 2.301。積を和に分解すると計算が楽になります。',
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
        'log₂(4) + log₂(16) はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(4) + log₂(16) はいくつ？',
        options: [
          { id: 'a', label: '5', correct: false },
          { id: 'b', label: '6', correct: true },
          { id: 'c', label: '7', correct: false },
          { id: 'd', label: '8', correct: false },
        ],
        explanation:
          'log₂(4) + log₂(16) = 2 + 4 = 6。これは log₂(4 × 16) = log₂(64) = 6 と一致します。',
      },
    },
    {
      id: 'alternate',
      title: '計算尺の原理',
      content:
        'この「積→和」の法則こそ計算尺の原理です。2つの対数目盛をスライドさせて足し合わせると、かけ算の答えが読めます。\n\nコンピュータ以前の時代、科学者やエンジニアは計算尺で複雑な計算をこなしていました。',
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
        'log(AB) = log A + log B。対数は積を和に変換します。指数法則 a^m × a^n = a^(m+n) から導かれます。\n\n自由に値を変えてこの法則を確かめてみてください。',
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
