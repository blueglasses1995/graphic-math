import { Tutorial } from '../types';

export const powerIntegralTutorial: Tutorial = {
  id: 'power-integral',
  title: 'xⁿの積分',
  description: 'べき関数の積分公式 ∫xⁿdx = xⁿ⁺¹/(n+1) + C を理解する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: 'べき関数を積分する',
      content:
        'x, x², x³, ... これらの関数を積分するとどうなるでしょう？\n\n微分では「指数を前に出して、指数を1つ減らす」でしたね。\n\n積分はその逆。パターンを見つけてみましょう。',
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
        'n の値をスライダーで変えてみてください。\n\nxⁿ のグラフと、その原始関数 xⁿ⁺¹/(n+1) のグラフが表示されます。\n\n原始関数の傾きが、もとの関数に一致することを確かめてみましょう。',
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
      title: 'べき関数の積分公式',
      content:
        '∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C　（n ≠ -1）\n\n検証：[xⁿ⁺¹/(n+1)]\' = (n+1)·xⁿ / (n+1) = xⁿ ✓\n\n具体例：\n∫ x dx = x²/2 + C\n∫ x² dx = x³/3 + C\n∫ x³ dx = x⁴/4 + C\n\n微分の逆操作：「指数を1つ増やして、新しい指数で割る」。',
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
      title: 'n = -1 の特殊ケース',
      content:
        'n = -1 のとき、公式の分母が n + 1 = 0 になってしまいます。\n\n∫ x⁻¹ dx = ∫ (1/x) dx は公式が使えません。\n\n実はこの積分の答えは ln|x| + C です。\n\nこれは自然対数の定義そのものに関わる深い事実です。\n\nn = -1 だけが例外で、結果が「べき関数」ではなく「対数関数」になります。',
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
        '∫ x⁴ dx はどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫ x⁴ dx は？',
        options: [
          { id: 'a', label: '4x³ + C', correct: false },
          { id: 'b', label: 'x⁵ + C', correct: false },
          { id: 'c', label: 'x⁵/5 + C', correct: true },
          { id: 'd', label: 'x⁴/4 + C', correct: false },
        ],
        explanation:
          '正解は x⁵/5 + C です。\n\n公式 ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C に n = 4 を代入すると x⁵/5 + C。\n\n検証：(x⁵/5)\' = 5x⁴/5 = x⁴ ✓',
      },
    },
    {
      id: 'alternate',
      title: '負の指数や分数の指数',
      content:
        'この公式は n が負や分数でも使えます（n ≠ -1）。\n\n∫ x⁻² dx = x⁻¹/(-1) + C = -1/x + C\n\n∫ √x dx = ∫ x¹ᐟ² dx = x³ᐟ²/(3/2) + C = (2/3)x³ᐟ² + C\n\n∫ x⁻¹ᐟ² dx = x¹ᐟ²/(1/2) + C = 2√x + C\n\nべき関数の積分は、非常に広い範囲で統一的に扱えます。',
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
        '∫ xⁿ dx = xⁿ⁺¹/(n+1) + C（n ≠ -1）\n\n「指数を1増やして、新しい指数で割る」── 微分の逆操作です。\n\nn = -1 のときだけ ln|x| + C になります。\n\nスライダーで n を変えて、さまざまなべき関数の積分を確かめてみてください。',
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
