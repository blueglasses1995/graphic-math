import { Tutorial } from '../types';

export const substitutionTutorial: Tutorial = {
  id: 'substitution',
  title: '置換積分',
  description: '変数の置き換えで複雑な積分をシンプルにする技法',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '合成関数の積分',
      content:
        '∫ 2x·cos(x²) dx を直接計算するのは難しそうですね。\n\nでも u = x² と置くと du = 2x dx なので...\n\n∫ cos(u) du = sin u + C = sin(x²) + C\n\nこの「変数を置き換える」技法が置換積分です。',
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
        '置換前と置換後のグラフが並んでいます。\n\nu = g(x) の置換によって、面積がどう変形するか観察してみましょう。\n\nグラフの形は変わっても、面積は保存されます。',
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
      title: '置換積分の手順',
      content:
        '∫ f(g(x))·g\'(x) dx を計算したいとき：\n\n1. u = g(x) と置く\n2. du = g\'(x) dx を計算\n3. ∫ f(u) du に書き換える\n4. 積分を実行\n5. u を x に戻す\n\n例：∫ (2x+1)⁵ · 2 dx\nu = 2x+1, du = 2 dx\n∫ u⁵ du = u⁶/6 + C = (2x+1)⁶/6 + C',
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
      title: '定積分での置換',
      content:
        '定積分で置換するときは、積分区間も変えます。\n\n∫₀¹ 2x·eˣ² dx で u = x² と置くと：\n\nx = 0 → u = 0、x = 1 → u = 1\n\n∫₀¹ eᵘ du = [eᵘ]₀¹ = e - 1\n\n区間を変えれば x に戻す必要がなくなるので、計算が楽になります。',
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
        '∫ cos(3x) dx を置換積分で計算してみましょう。u = 3x と置きます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫ cos(3x) dx は？',
        options: [
          { id: 'a', label: 'sin(3x) + C', correct: false },
          { id: 'b', label: '3sin(3x) + C', correct: false },
          { id: 'c', label: 'sin(3x)/3 + C', correct: true },
          { id: 'd', label: '-sin(3x)/3 + C', correct: false },
        ],
        explanation:
          '正解は sin(3x)/3 + C です。\n\nu = 3x, du = 3 dx → dx = du/3\n∫ cos(u) · du/3 = sin(u)/3 + C = sin(3x)/3 + C',
      },
    },
    {
      id: 'alternate',
      title: '置換のコツ',
      content:
        '置換積分のコツは「何を u に置くか」です。\n\n目安：合成関数の「内側」を u に置く。\n\nf(g(x)) · g\'(x) の形を見つけたら、u = g(x) が自然な選択です。\n\nよくある置換：\n・∫ f(ax+b) dx → u = ax+b\n・∫ xⁿ⁻¹·f(xⁿ) dx → u = xⁿ\n・∫ f(sin x)·cos x dx → u = sin x',
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
        '置換積分は「合成関数の微分（連鎖律）」の逆操作です。\n\nu = g(x) と置いて ∫ f(g(x))g\'(x) dx = ∫ f(u) du に変換します。\n\n定積分では区間も変換するのを忘れずに。\n\n自由にグラフを操作して、置換による変形を体感してみてください。',
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
