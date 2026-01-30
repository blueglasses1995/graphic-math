import { Tutorial } from '../types';

export const taylorIntroTutorial: Tutorial = {
  id: 'taylor-intro',
  title: '【実践】テイラー展開の入口',
  description: '関数を多項式で近似するテイラー展開の基本的なアイデアを学ぶ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '多項式で何でも近似',
      content:
        '線形近似は1次式での近似でした。2次、3次…と項を増やせば、もっと精密に近似できます。これがテイラー展開のアイデアです。項を増やすたびに近似が改善される様子を見てみましょう。',
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
        'テイラー展開の次数をスライダーで上げてください。次数を増やすほど、多項式が元の関数にピタリと重なっていきます。',
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
      title: 'テイラー展開の公式',
      content:
        'f(x) = f(a) + f\'(a)(x−a) + f\'\'(a)(x−a)²/2! + f\'\'\'(a)(x−a)³/3! + …。各項の係数は n次導関数 / n!。a=0 のとき特に「マクローリン展開」と呼びます。',
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
      title: 'eˣ のマクローリン展開',
      content:
        'eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + …。eˣ は何回微分しても eˣ で、x=0 での値は1。だから全ての係数が 1/n!。この無限級数は全ての x で収束します。',
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
        'sin(x) のマクローリン展開の最初の3項は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(x) ≈ ? （3項まで）',
        options: [
          { id: 'a', label: 'x − x²/2 + x³/6', correct: false },
          { id: 'b', label: 'x − x³/6 + x⁵/120', correct: true },
          { id: 'c', label: '1 − x²/2 + x⁴/24', correct: false },
          { id: 'd', label: 'x + x³/6 + x⁵/120', correct: false },
        ],
        explanation:
          'sin(x) = x − x³/3! + x⁵/5! − … = x − x³/6 + x⁵/120。偶数次の項はゼロ（sin は奇関数）。符号は交互です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：コンピュータの計算',
      content:
        'コンピュータが sin や cos を計算するとき、実際にはテイラー展開（やその改良版）を使っています。数項の多項式計算で十分な精度が得られるのです。微分の理論が実用を支えています。',
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
        'テイラー展開: 関数を多項式の無限和で表す。各係数は導関数から決まる。線形近似の究極の一般化です。\n\n次は「ロピタルの法則」。不定形の極限を微分で求めます。',
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
