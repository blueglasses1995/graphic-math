import { Tutorial } from '../types';

export const integrationByPartsTutorial: Tutorial = {
  id: 'integration-by-parts',
  title: '部分積分',
  description: '積の積分を分解する技法 ── 積の微分法則の逆',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '積の積分をどうするか',
      content:
        '∫ x·eˣ dx のような「積の積分」は置換では解けません。\n\nここで使うのが部分積分です。\n\n積の微分法則 (uv)\' = u\'v + uv\' を逆手に取ります。\n\nこの公式がどう積分に役立つか見てみましょう。',
      customScene: 'integration-by-parts-animation',
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
        'u と dv の選び方を変えると、結果がどう変わるか試してみましょう。\n\n「良い選び方」と「悪い選び方」があることが体感できるはずです。',
      customScene: 'integration-by-parts-interactive',
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
      title: '部分積分の公式',
      content:
        '∫ u dv = uv - ∫ v du\n\n手順：\n1. 被積分関数を u と dv に分ける\n2. du と v を計算する\n3. 公式に当てはめる\n\n例：∫ x·eˣ dx\nu = x → du = dx\ndv = eˣ dx → v = eˣ\n\n= x·eˣ - ∫ eˣ dx = x·eˣ - eˣ + C = eˣ(x - 1) + C',
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
      title: 'LIATE の法則',
      content:
        'u と dv の選び方で悩んだら LIATE の優先順位を使います：\n\nL：Logarithmic（対数）\nI：Inverse trig（逆三角関数）\nA：Algebraic（多項式）\nT：Trigonometric（三角関数）\nE：Exponential（指数関数）\n\n上にあるものを u に、下にあるものを dv にします。\n\n∫ x·sin x dx なら、x（A）を u、sin x dx（T）を dv に選びます。',
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
        '∫ x·cos x dx を部分積分で計算するとどうなるでしょう？\nu = x, dv = cos x dx として考えてみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫ x·cos x dx は？',
        options: [
          { id: 'a', label: 'x·sin x + cos x + C', correct: true },
          { id: 'b', label: 'x·sin x - cos x + C', correct: false },
          { id: 'c', label: '-x·sin x + cos x + C', correct: false },
          { id: 'd', label: 'x·cos x + sin x + C', correct: false },
        ],
        explanation:
          '正解は x·sin x + cos x + C です。\n\nu = x, dv = cos x dx → du = dx, v = sin x\n∫ x·cos x dx = x·sin x - ∫ sin x dx = x·sin x + cos x + C',
      },
    },
    {
      id: 'alternate',
      title: '2回以上の部分積分',
      content:
        '∫ x²·eˣ dx のように、1回では終わらない場合もあります。\n\n1回目：u = x², dv = eˣ dx → x²eˣ - ∫ 2x·eˣ dx\n2回目：u = 2x, dv = eˣ dx → 2xeˣ - ∫ 2eˣ dx = 2xeˣ - 2eˣ\n\n結果：eˣ(x² - 2x + 2) + C\n\nxⁿ·eˣ の積分は n 回の部分積分で片付きます。',
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
        '部分積分：∫ u dv = uv - ∫ v du\n\n積の微分法則の逆操作です。\n\nLIATE の優先順位で u と dv を選びましょう。\n\n複数回必要な場合もあります。\n\n自由にグラフを操作して、部分積分の効果を確かめてみてください。',
      customScene: 'integration-by-parts-summary',
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
