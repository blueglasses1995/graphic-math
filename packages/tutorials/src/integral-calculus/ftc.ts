import { Tutorial } from '../types';

export const ftcTutorial: Tutorial = {
  id: 'ftc',
  title: '微積分学の基本定理',
  description: '微分と積分が逆の操作であることを視覚的に理解する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '微分と積分はつながっている',
      content:
        '微分は「傾き」を求める操作。積分は「面積」を求める操作。\n\nまったく違うように見えますが、実は逆の関係にあります。\n\nこの驚くべきつながりが「微積分学の基本定理 (FTC)」です。\n\nアニメーションで2つの操作が打ち消し合う様子を見てみましょう。',
      customScene: 'ftc-animation',
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
        'f(x) のグラフと、その面積関数 F(x) = ∫₀ˣ f(t) dt のグラフが表示されています。\n\nx を動かすと、f(x) の面積が F(x) の値として反映されます。\n\nF(x) の傾きに注目してみてください。何に等しいですか？',
      customScene: 'ftc-interactive',
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
      title: 'FTC 第1部',
      content:
        'F(x) = ∫ₐˣ f(t) dt とおくと、F\'(x) = f(x) です。\n\nつまり「面積関数を微分すると、もとの関数に戻る」。\n\n直感的には、x を少しだけ Δx 動かすと面積が f(x)·Δx だけ増えます。\n\n増分/幅 = f(x)·Δx / Δx = f(x)。\n\nだから F の変化率（微分）は f(x) そのものなのです。',
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
      title: 'FTC 第2部',
      content:
        'G\'(x) = f(x) となる関数 G（原始関数）が見つかれば：\n\n∫ₐᵇ f(x) dx = G(b) - G(a)\n\nリーマン和の極限を計算しなくても、原始関数の差で積分値が求まります！\n\n例：∫₀² x² dx。原始関数は G(x) = x³/3。\n\nG(2) - G(0) = 8/3 - 0 = 8/3。\n\nこれが微積分学の最も強力な計算道具です。',
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
        'F(x) = ∫₀ˣ cos t dt のとき、F\'(x) は何でしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'F(x) = ∫₀ˣ cos t dt のとき、F\'(x) は？',
        options: [
          { id: 'a', label: 'sin x', correct: false },
          { id: 'b', label: 'cos x', correct: true },
          { id: 'c', label: '-sin x', correct: false },
          { id: 'd', label: '-cos x', correct: false },
        ],
        explanation:
          '正解は cos x です。\n\nFTC 第1部より、F\'(x) = f(x) = cos x です。\n\n積分してから微分すると、もとの関数に戻ります。',
      },
    },
    {
      id: 'alternate',
      title: '歴史的な意義',
      content:
        'ニュートンとライプニッツが独立に発見したこの定理は、数学史上最も重要な定理の一つです。\n\nそれまで「面積を求める問題」と「接線を求める問題」は別々の分野でした。\n\nFTC がこの2つを結びつけたことで、積分の計算が劇的に簡単になりました。\n\nリーマン和を毎回計算する代わりに、「微分の逆」を見つければよいのです。',
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
        '微積分学の基本定理：微分と積分は互いに逆の操作です。\n\n第1部：(d/dx) ∫ₐˣ f(t) dt = f(x)\n第2部：∫ₐᵇ f(x) dx = G(b) - G(a)　（G\' = f）\n\nこの定理のおかげで、面積を求めるのに原始関数を探すだけでよくなります。\n\nグラフを操作して、微分と積分の関係を体感してみてください。',
      customScene: 'ftc-summary',
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
