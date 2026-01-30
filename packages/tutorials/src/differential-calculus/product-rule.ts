import { Tutorial } from '../types';

export const productRuleTutorial: Tutorial = {
  id: 'product-rule',
  title: '積の微分（ライプニッツ則）',
  description: '積の微分法則 (fg)\' = f\'g + fg\' を理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '掛け算の微分は素直じゃない',
      content:
        '(f·g)\' ≠ f\'·g\'。掛け算を微分すると、単純に各パーツを微分して掛けるだけでは済みません。長方形の面積が変化するアニメーションで理由を見てみましょう。',
      customScene: 'product-rule-animation',
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
        '縦 f(x)、横 g(x) の長方形を想像してください。x を変えると面積 f·g が変わります。スライダーで確認しましょう。',
      customScene: 'product-rule-interactive',
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
      title: '長方形の面積変化',
      content:
        '縦 f、横 g の長方形の面積 = f·g。両方が少し伸びると、増える面積は「f\'·g の帯」+「f·g\' の帯」+「f\'·g\' の小さい角」。角は無視できるほど小さいので、(fg)\' = f\'g + fg\'。',
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
      title: '具体例：x²·sin(x)',
      content:
        'f = x²、g = sin(x) とすると、(x²·sin(x))\' = 2x·sin(x) + x²·cos(x)。f を微分して g をそのまま、f をそのまま g を微分、足す。これが積の微分です。',
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
        '(x·eˣ)\' はいくつでしょう？（eˣ の微分は eˣ）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(x·eˣ)\' = ?',
        options: [
          { id: 'a', label: 'eˣ', correct: false },
          { id: 'b', label: 'x·eˣ', correct: false },
          { id: 'c', label: 'eˣ + x·eˣ', correct: true },
          { id: 'd', label: '2x·eˣ', correct: false },
        ],
        explanation:
          'f=x, g=eˣ。f\'=1, g\'=eˣ。(fg)\' = 1·eˣ + x·eˣ = eˣ + x·eˣ = (1+x)eˣ です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：覚え方',
      content:
        '「前微分・後そのまま + 前そのまま・後微分」。英語では "first derivative second plus first second derivative"。歌のリズムで覚える人もいます。大切なのは「2つの項の足し算」ということ。',
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
        '(f·g)\' = f\'·g + f·g\'。積の微分は「交互に微分して足す」。ライプニッツが発見したこの法則は、微分の最重要公式の1つです。\n\n次は「合成関数の微分（連鎖律）」を学びましょう。',
      customScene: 'product-rule-summary',
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
