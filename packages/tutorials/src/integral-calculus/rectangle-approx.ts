import { Tutorial } from '../types';

export const rectangleApproxTutorial: Tutorial = {
  id: 'rectangle-approx',
  title: '長方形で近似',
  description: '曲線の下の面積を長方形の和で近似する方法を学ぶ',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '長方形で埋めてみる',
      content:
        '曲線の下に長方形が並んでいます。\n\n長方形の合計面積は、曲線の下の面積の「近似値」です。\n\n長方形の数を増やすとどうなるでしょうか？\n\nアニメーションを見てみましょう。',
      customScene: 'rectangle-approx-animation',
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
        'スライダーで長方形の本数を変えてみてください。\n\n本数を増やすと、長方形の上端が曲線に近づいていきますね。\n\nこれが「近似が精密になる」ということです。',
      customScene: 'rectangle-approx-interactive',
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
      title: '4本の長方形',
      content:
        'y = x² を x = 0 から x = 1 まで、4本の長方形で近似します。\n\n各長方形の幅は 1/4 = 0.25。\n\n左端の値を使うと、高さは 0², 0.25², 0.5², 0.75² = 0, 0.0625, 0.25, 0.5625。\n\n合計面積 = 0.25 × (0 + 0.0625 + 0.25 + 0.5625) = 0.21875。\n\n真の値 1/3 ≈ 0.333 とはまだ差がありますね。',
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
      title: '100本の長方形',
      content:
        '同じ y = x² を100本の長方形で近似すると、合計面積は約 0.328。\n\n真の値 0.333... にかなり近づきました！\n\n長方形を1000本にすれば 0.3328...、10000本なら 0.33328...。\n\n本数を無限にしたら、正確な値 1/3 に一致します。\n\nこの「無限に細かくする」という発想が、積分の核心です。',
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
        '左端と右端、どちらの値を使うかで近似値は変わります。\n\ny = x² （増加関数）の場合、左端を使うと真の値より大きい？小さい？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '増加関数で左端の値を使った長方形近似は？',
        options: [
          { id: 'a', label: '真の値より大きい', correct: false },
          { id: 'b', label: '真の値より小さい', correct: true },
          { id: 'c', label: '真の値と一致する', correct: false },
          { id: 'd', label: '場合による', correct: false },
        ],
        explanation:
          '正解は「真の値より小さい」です。\n\n増加関数では、各区間の左端が最小値なので、長方形は曲線の下に収まります。\n\nこれを「下からの近似」と呼びます。右端を使えば「上からの近似」になります。',
      },
    },
    {
      id: 'alternate',
      title: '中点を使う方法',
      content:
        '左端でも右端でもなく、各区間の「中点」の値を使う方法もあります。\n\n中点法は左端法・右端法よりも精度が良いことが多いです。\n\nさらに台形（長方形の代わりに）を使う方法もあります。\n\n共通するアイデアは同じ：「細かく分割して足し合わせる」。\n\n分割を無限に細かくすれば、どの方法でも同じ答えに収束します。',
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
        '曲線の下の面積は、長方形の和で近似できます。\n\n長方形を細かくすればするほど、近似は正確になります。\n\n無限に細かくした極限が「定積分」です。\n\nスライダーで本数を変えて、収束の様子を確かめてみてください。',
      customScene: 'rectangle-approx-summary',
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
