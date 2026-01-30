import { Tutorial } from '../types';

export const signedAreaTutorial: Tutorial = {
  id: 'signed-area',
  title: '面積と符号',
  description: '定積分における正負の面積（符号付き面積）を理解する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: 'マイナスの面積？',
      content:
        '面積がマイナスになるとはどういうことでしょうか？\n\nグラフが x 軸の下に潜ると、積分値は負になります。\n\nアニメーションで正と負の領域がどう表示されるか見てみましょう。',
      customScene: 'signed-area-animation',
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
        'sin のグラフを見てください。\n\nx 軸の上（正の部分）と下（負の部分）で色が違います。\n\n区間を動かして、正の面積と負の面積がどう打ち消し合うか確かめてください。',
      customScene: 'signed-area-interactive',
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
        '∫₀π sin x dx を考えます。\n\nsin x は [0, π] で常に正なので、面積はすべて正です。\n\n∫₀π sin x dx = [-cos x]₀π = -cos π - (-cos 0) = 1 + 1 = 2。\n\nでは ∫π²π sin x dx は？ sin x は [π, 2π] で負なので...\n\n∫π²π sin x dx = [-cos x]π²π = -cos 2π + cos π = -1 - 1 = -2。',
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
      title: '符号付き面積と絶対面積',
      content:
        '∫₀²π sin x dx = 2 + (-2) = 0 です。\n\n正の面積と負の面積がちょうど打ち消し合います。\n\n一方、「面積の絶対値」の合計は |2| + |-2| = 4 です。\n\n∫₀²π |sin x| dx = 4 と ∫₀²π sin x dx = 0 は異なります。\n\n定積分は「符号付き面積」、絶対値をつけると「幾何学的な面積」になります。',
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
        '∫₋₁¹ x³ dx はいくつになるでしょう？\n\nx³ は奇関数です。グラフの形を思い浮かべてみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫₋₁¹ x³ dx の値は？',
        options: [
          { id: 'a', label: '1/2', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: '-1/2', correct: false },
          { id: 'd', label: '1/4', correct: false },
        ],
        explanation:
          '正解は 0 です。\n\nx³ は奇関数なので、[-1, 0] での負の面積と [0, 1] での正の面積がちょうど打ち消し合います。\n\n一般に、奇関数を対称区間 [-a, a] で積分すると常に 0 になります。',
      },
    },
    {
      id: 'alternate',
      title: '物理的な意味',
      content:
        '速度が負のとき、物体は逆方向に動いています。\n\n速度を積分すると「変位」（正味の移動量）になります。\n\n前に 5m 進んで後ろに 3m 戻ったら、変位は 2m です。\n\nでも「総移動距離」は 8m。\n\n符号付き面積 = 変位、絶対面積 = 総移動距離。この違いを意識しましょう。',
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
        '定積分は「符号付き面積」です。x 軸より下は負としてカウントされます。\n\n奇関数の対称区間での積分は 0 になります。\n\n「幾何学的な面積」が必要なときは |f(x)| を積分します。\n\nグラフを操作して、正負の面積がどう打ち消し合うか確かめてみてください。',
      customScene: 'signed-area-summary',
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
