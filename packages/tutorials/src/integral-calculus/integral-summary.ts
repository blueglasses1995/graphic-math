import { Tutorial } from '../types';

export const integralSummaryTutorial: Tutorial = {
  id: 'integral-summary',
  title: '積分のまとめ',
  description: '積分の基本概念と公式を総復習する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '積分を振り返る',
      content:
        'ここまで学んだ積分の世界を振り返りましょう。\n\n「面積を数える」から始まり、微分との深いつながりまでたどり着きました。\n\n重要な公式と概念を一気に復習します。',
      customScene: 'integral-summary-animation',
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
        'さまざまな関数の積分を自由に試してみてください。\n\n関数を変えるたびに、面積や原始関数がどう変わるか観察しましょう。',
      customScene: 'integral-summary-interactive',
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
      title: '基本公式一覧',
      content:
        '∫ xⁿ dx = xⁿ⁺¹/(n+1) + C（n ≠ -1）\n∫ 1/x dx = ln|x| + C\n∫ eˣ dx = eˣ + C\n∫ sin x dx = -cos x + C\n∫ cos x dx = sin x + C\n∫ sec²x dx = tan x + C\n\nこれらが「積分の九九」です。暗記というより、微分の逆として理解しましょう。',
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
      title: '技法のまとめ',
      content:
        '積分の計算技法：\n\n1. 線形性：∫ [af + bg] dx = a∫f dx + b∫g dx\n2. 置換積分：合成関数の逆 → u = g(x)\n3. 部分積分：積の微分の逆 → ∫u dv = uv - ∫v du\n4. 部分分数分解：有理関数を分解\n\nこれらを組み合わせることで、ほとんどの初等関数の積分が計算できます。',
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
      title: '総合クイズ',
      content:
        '∫₀¹ (2x + eˣ) dx を計算してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫₀¹ (2x + eˣ) dx は？',
        options: [
          { id: 'a', label: '1 + e', correct: false },
          { id: 'b', label: 'e', correct: true },
          { id: 'c', label: 'e - 1', correct: false },
          { id: 'd', label: '2 + e', correct: false },
        ],
        explanation:
          '正解は e です。\n\n∫₀¹ 2x dx = [x²]₀¹ = 1\n∫₀¹ eˣ dx = [eˣ]₀¹ = e - 1\n\n合計 = 1 + (e - 1) = e ≈ 2.718',
      },
    },
    {
      id: 'alternate',
      title: '積分の応用',
      content:
        '積分は面積だけではありません：\n\n・体積（回転体、断面積の積み上げ）\n・弧長（曲線の長さ）\n・仕事（力 × 距離の累積）\n・確率（密度関数の面積）\n・平均値（積分 ÷ 区間の幅）\n\n「微小量を足し合わせる」という考え方が、あらゆる分野で活躍します。',
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
        '積分の本質は「微小量の累積」です。\n\nFTC が微分と積分を結びつけ、計算を可能にします。\n\n基本公式 + 4つの技法で、多くの積分が計算できます。\n\nここからは実践編で、積分の応用を体験していきましょう。',
      customScene: 'integral-summary-summary',
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
