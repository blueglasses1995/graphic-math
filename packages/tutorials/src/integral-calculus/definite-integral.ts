import { Tutorial } from '../types';

export const definiteIntegralTutorial: Tutorial = {
  id: 'definite-integral',
  title: '定積分の意味',
  description: '定積分の記号 ∫ₐᵇ f(x)dx の意味と幾何学的解釈',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '∫ の記号',
      content:
        '∫ₐᵇ f(x) dx という記号を見たことがありますか？\n\n∫ は「Sum（和）」の S を引き伸ばした文字です。\n\ndx は「微小な幅」を意味します。\n\nつまり「f(x) × 微小幅 dx を a から b まで足し合わせる」── これが定積分です。',
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
        '積分区間 [a, b] の端点を動かしてみてください。\n\n区間を広げると面積が増え、狭めると減ります。\n\na と b を入れ替えるとどうなるでしょうか？',
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
      title: '面積としての定積分',
      content:
        '∫₀² x dx を考えます。\n\nこれは y = x の直線と x 軸で囲まれた三角形の面積です。\n\n底辺 2、高さ 2 の直角三角形なので、面積 = 2 × 2 / 2 = 2。\n\n∫₀² x dx = 2 と一致します。\n\n定積分は「曲線の下の面積」という幾何学的意味を持ちます。',
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
      title: '定積分の性質',
      content:
        '定積分には重要な性質があります：\n\n1. ∫ₐᵇ f(x) dx = −∫ᵇₐ f(x) dx（区間を逆にすると符号が変わる）\n\n2. ∫ₐᵇ f(x) dx + ∫ᵇᶜ f(x) dx = ∫ₐᶜ f(x) dx（区間の結合）\n\n3. ∫ₐₐ f(x) dx = 0（同じ点では面積ゼロ）\n\nこれらは面積の直感から自然に理解できます。',
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
        '∫₁³ 2 dx はいくつになるでしょう？\n\ny = 2 は定数関数です。区間 [1, 3] で考えてみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫₁³ 2 dx の値は？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '3', correct: false },
          { id: 'c', label: '4', correct: true },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          '正解は 4 です。\n\ny = 2 の直線と x 軸で囲まれた長方形の面積です。\n幅 (3 - 1) = 2、高さ 2 なので、面積 = 2 × 2 = 4。',
      },
    },
    {
      id: 'alternate',
      title: '面積だけではない',
      content:
        '定積分は「面積」以外にも多くの意味を持ちます。\n\n速度を積分すれば「距離」、力を積分すれば「仕事」、\n密度を積分すれば「質量」になります。\n\n共通するのは「微小量を足し合わせる」という操作です。\n\n∫ₐᵇ f(x) dx の f(x) dx が「微小な何か」を表し、それを積み上げるのです。',
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
        '定積分 ∫ₐᵇ f(x) dx は「f(x) の微小量を a から b まで足し合わせた値」です。\n\n幾何学的には「曲線の下の面積」、物理的には「累積量」を意味します。\n\n区間の端点を動かして、積分値がどう変わるか体感してみてください。',
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
