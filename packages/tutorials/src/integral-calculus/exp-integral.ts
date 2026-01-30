import { Tutorial } from '../types';

export const expIntegralTutorial: Tutorial = {
  id: 'exp-integral',
  title: 'eˣの積分',
  description: '指数関数 eˣ の積分 ── 自分自身が原始関数になる特別な関数',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '自分自身に戻る関数',
      content:
        'eˣ を微分すると eˣ。では eˣ を積分すると？\n\nやはり eˣ です（+ C を忘れずに）。\n\n微分しても積分しても自分自身に戻る ── eˣ は数学で最も特別な関数です。\n\nアニメーションで eˣ とその面積関数を見てみましょう。',
      customScene: 'exp-integral-animation',
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
        'eˣ のグラフの下の面積を動かして観察してみましょう。\n\nx が大きくなると面積が急激に増えます。\n\n面積関数の形は...やはり eˣ の形をしていますね！',
      customScene: 'exp-integral-interactive',
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
      title: 'eˣ の積分',
      content:
        '∫ eˣ dx = eˣ + C\n\n検証：(eˣ)\' = eˣ ✓\n\n定積分の例：\n∫₀¹ eˣ dx = [eˣ]₀¹ = e¹ - e⁰ = e - 1 ≈ 1.718\n\neˣ の下の面積は、eˣ そのもので測れるのです。',
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
      title: 'eᵃˣ の積分',
      content:
        'eˣ の仲間として eᵃˣ の積分も覚えておきましょう。\n\n∫ eᵃˣ dx = eᵃˣ / a + C（a ≠ 0）\n\n検証：(eᵃˣ/a)\' = a·eᵃˣ/a = eᵃˣ ✓\n\n例：∫ e²ˣ dx = e²ˣ/2 + C\n例：∫ e⁻ˣ dx = -e⁻ˣ + C\n\n係数 a で割るのを忘れないようにしましょう。',
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
        '∫ e³ˣ dx はどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫ e³ˣ dx は？',
        options: [
          { id: 'a', label: '3e³ˣ + C', correct: false },
          { id: 'b', label: 'e³ˣ/3 + C', correct: true },
          { id: 'c', label: 'e³ˣ + C', correct: false },
          { id: 'd', label: 'e⁴ˣ/4 + C', correct: false },
        ],
        explanation:
          '正解は e³ˣ/3 + C です。\n\n∫ eᵃˣ dx = eᵃˣ/a + C に a = 3 を代入します。\n\n検証：(e³ˣ/3)\' = 3e³ˣ/3 = e³ˣ ✓',
      },
    },
    {
      id: 'alternate',
      title: '他の底の指数関数',
      content:
        '底が e 以外の場合、例えば 2ˣ の積分は：\n\n∫ aˣ dx = aˣ / ln a + C（a > 0, a ≠ 1）\n\naˣ = eˣˡⁿᵃ と書き換えれば、eᵃˣ の公式に帰着できます。\n\n例：∫ 2ˣ dx = 2ˣ / ln 2 + C\n\n底が e のときは ln e = 1 なので、割る数が 1 になり式が最もシンプルになります。\nだから eˣ が特別なのです。',
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
        '∫ eˣ dx = eˣ + C ── 微分しても積分しても自分自身。\n∫ eᵃˣ dx = eᵃˣ/a + C ── 係数で割るのを忘れずに。\n\neˣ が特別なのは、ln e = 1 だからです。\n\nグラフを操作して、eˣ の面積が eˣ 自身で表されることを確かめてみてください。',
      customScene: 'exp-integral-summary',
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
