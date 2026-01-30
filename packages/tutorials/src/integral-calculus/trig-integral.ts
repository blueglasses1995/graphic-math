import { Tutorial } from '../types';

export const trigIntegralTutorial: Tutorial = {
  id: 'trig-integral',
  title: 'sinとcosの積分',
  description: '三角関数 sin x, cos x の積分を視覚的に理解する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '波を積分する',
      content:
        'sin と cos の波を積分するとどうなるでしょう？\n\n微分では sin → cos → -sin → -cos → sin と循環しました。\n\n積分はその逆方向に回ります。\n\nアニメーションで波の面積が変化する様子を見てみましょう。',
      customScene: 'trig-integral-animation',
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
        'sin x のグラフの下の面積がどう変化するか観察してみましょう。\n\n区間の右端を動かすと、面積が増えたり減ったりします。\n\nこの面積関数のグラフはどんな形でしょうか？',
      customScene: 'trig-integral-interactive',
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
      title: 'sin x の積分',
      content:
        '∫ sin x dx = -cos x + C\n\n検証：(-cos x)\' = sin x ✓\n\nマイナスが付くのがポイントです。\n\n∫₀π sin x dx = [-cos x]₀π = -cos π + cos 0 = 1 + 1 = 2\n\nsin の1山分の面積は 2 です。',
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
      title: 'cos x の積分',
      content:
        '∫ cos x dx = sin x + C\n\n検証：(sin x)\' = cos x ✓\n\nこちらはマイナスが付きません。\n\n∫₀πᐟ² cos x dx = [sin x]₀πᐟ² = sin(π/2) - sin(0) = 1 - 0 = 1\n\n微分と積分の循環：\n積分方向：sin ← -cos ← -sin ← cos ← sin',
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
        '∫₀²π cos x dx はいくつになるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫₀²π cos x dx の値は？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '1', correct: false },
          { id: 'c', label: '0', correct: true },
          { id: 'd', label: '-1', correct: false },
        ],
        explanation:
          '正解は 0 です。\n\n[sin x]₀²π = sin 2π - sin 0 = 0 - 0 = 0。\n\ncos x は1周期で正の面積と負の面積が打ち消し合います。',
      },
    },
    {
      id: 'alternate',
      title: 'その他の三角関数',
      content:
        'tan x の積分も重要です：\n\n∫ tan x dx = -ln|cos x| + C = ln|sec x| + C\n\nこれは置換積分 u = cos x で導けます。\n\nまた sec²x の積分は ∫ sec²x dx = tan x + C です。\n\nこれらは微分の公式 (tan x)\' = sec²x の逆です。',
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
        '∫ sin x dx = -cos x + C\n∫ cos x dx = sin x + C\n\n微分と積分で sin, cos, -sin, -cos が循環します。\n\n1周期分の定積分は 0 になります（正負が打ち消し合う）。\n\n波のグラフを動かして、面積の変化を確かめてみてください。',
      customScene: 'trig-integral-summary',
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
