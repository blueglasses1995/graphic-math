import { Tutorial } from '../types';

export const antiderivativeTutorial: Tutorial = {
  id: 'antiderivative',
  title: '不定積分とは',
  description: '原始関数（不定積分）の概念と積分定数 C の意味',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '微分の逆をたどる',
      content:
        'f(x) = 2x を微分すると何になりますか？ 答えは 2 です。\n\nでは逆に、微分して 2x になる関数は？ 答えは x² です。\n\n...本当にそれだけでしょうか？ x² + 1 を微分しても 2x です。\n\nx² + 100 でも同じ。定数を足しても微分には影響しません。',
      customScene: 'antiderivative-animation',
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
        '定数 C をスライダーで変えてみてください。\n\nグラフの形は変わらず、上下に平行移動するだけです。\n\nどの C を選んでも、微分すると同じ関数 f(x) になります。',
      customScene: 'antiderivative-interactive',
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
      title: '不定積分の記号',
      content:
        '∫ f(x) dx = F(x) + C\n\nこれが不定積分の記号です。定積分と違い、上下の端がありません。\n\nF(x) は f(x) の原始関数（antiderivative）の一つ。\n\n+ C は「積分定数」。微分で消えてしまう定数を補うためのものです。\n\n例：∫ 2x dx = x² + C。',
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
      title: '初期条件で C を決める',
      content:
        'C が決まらないと、関数が一つに定まりません。\n\nでも「x = 0 のとき F(0) = 3」のような条件があれば C が決まります。\n\n∫ 2x dx = x² + C で F(0) = 3 なら、0 + C = 3 → C = 3。\n\nよって F(x) = x² + 3。\n\n物理では「初期位置」「初速度」などが初期条件に対応します。',
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
        '∫ 3x² dx はどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫ 3x² dx は？',
        options: [
          { id: 'a', label: '6x + C', correct: false },
          { id: 'b', label: 'x³ + C', correct: true },
          { id: 'c', label: '3x³ + C', correct: false },
          { id: 'd', label: 'x³/3 + C', correct: false },
        ],
        explanation:
          '正解は x³ + C です。\n\n(x³)\' = 3x² なので、3x² の原始関数は x³ です。\n\n積分定数 C を忘れずに付けましょう。',
      },
    },
    {
      id: 'alternate',
      title: '定積分との関係',
      content:
        '不定積分は「関数の族」を返します（C の値ごとに異なる関数）。\n\n定積分は「数値」を返します（面積という確定した値）。\n\nFTC によって両者はつながっています：\n\n∫ₐᵇ f(x) dx = [F(x) + C]ₐᵇ = F(b) - F(a)\n\nC は引き算で消えるので、定積分の計算では C を書く必要がありません。',
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
        '不定積分 ∫ f(x) dx = F(x) + C は「微分の逆」です。\n\n+ C は微分で失われる定数を補うもの。初期条件で決定できます。\n\n定積分では C が打ち消し合うので不要です。\n\nスライダーで C を変えて、原始関数の族を眺めてみてください。',
      customScene: 'antiderivative-summary',
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
