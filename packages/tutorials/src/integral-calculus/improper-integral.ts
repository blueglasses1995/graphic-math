import { Tutorial } from '../types';

export const improperIntegralTutorial: Tutorial = {
  id: 'improper-integral',
  title: '広義積分',
  description: '無限区間や不連続点を含む積分の収束・発散を判定する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '無限の面積？',
      content:
        '∫₁∞ 1/x² dx ── 区間が無限に広いのに面積は有限？\n\n∫₁∞ 1/x dx ── こちらは面積が無限大になる？\n\n無限区間や特異点を含む積分を「広義積分」と呼びます。\n\n有限に収まる場合と発散する場合の違いを見てみましょう。',
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
        '区間の右端を大きくしていってください。\n\n1/x² の面積は上限があるように見えますが、1/x の面積はどんどん増えていきます。\n\nこの違いはどこから来るのでしょうか？',
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
      title: '収束する広義積分',
      content:
        '∫₁∞ 1/x² dx = lim_{b→∞} ∫₁ᵇ x⁻² dx\n\n= lim_{b→∞} [-1/x]₁ᵇ = lim_{b→∞} (-1/b + 1) = 0 + 1 = 1\n\n面積は有限値 1 に収束します。\n\n1/x² は十分速く 0 に近づくため、無限に遠くまでの面積が有限に収まるのです。',
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
      title: '発散する広義積分',
      content:
        '∫₁∞ 1/x dx = lim_{b→∞} [ln x]₁ᵇ = lim_{b→∞} (ln b - ln 1) = ∞\n\n面積は発散します。\n\n1/x は 0 に近づきますが、「遅すぎる」のです。\n\n一般に ∫₁∞ 1/xᵖ dx は p > 1 で収束、p ≤ 1 で発散します。\n\np = 2 なら収束、p = 1 なら発散 ── 境界線は p = 1 です。',
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
        '∫₁∞ 1/x³ dx は収束するでしょうか？ するなら値はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫₁∞ 1/x³ dx は？',
        options: [
          { id: 'a', label: '発散する', correct: false },
          { id: 'b', label: '1/3', correct: false },
          { id: 'c', label: '1/2', correct: true },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          '正解は 1/2 です。\n\np = 3 > 1 なので収束します。\n∫₁∞ x⁻³ dx = [-x⁻²/2]₁∞ = 0 - (-1/2) = 1/2',
      },
    },
    {
      id: 'alternate',
      title: '特異点での広義積分',
      content:
        '無限区間だけでなく、関数が発散する点（特異点）でも広義積分が必要です。\n\n∫₀¹ 1/√x dx = lim_{ε→0⁺} ∫ε¹ x⁻¹ᐟ² dx = [2√x]ε¹ = 2 - 2√ε → 2\n\nx = 0 で 1/√x → ∞ ですが、積分値は有限の 2 に収束します。\n\n一方 ∫₀¹ 1/x dx = lim_{ε→0⁺} [ln x]ε¹ = 0 - ln ε → ∞ で発散。',
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
        '広義積分は極限を使って定義します。\n\n∫₁∞ 1/xᵖ dx は p > 1 で収束、p ≤ 1 で発散。\n\n関数が 0 に近づく速さが鍵です。\n\n区間を広げて、収束と発散の違いを体感してみてください。',
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
