import { Tutorial } from '../types';

export const fourierSeriesIntuitionTutorial: Tutorial = {
  id: 'fourier-series-intuition',
  title: 'フーリエ級数の直感',
  description: '周期関数を三角関数の無限和で近似する直感を養う',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '矩形波を丸い波で作る？',
      content:
        '角ばった矩形波（方形波）を、滑らかな正弦波だけで作れるでしょうか？\n\n実は sin の足し算を増やしていくと、どんどん矩形波に近づいていきます。\n\nその過程をアニメーションで見てみましょう。',
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
      title: '項数を増やしてみよう',
      content:
        'フーリエ級数の項数Nを変えて、近似がどう改善されるか確認しましょう。\n\nN=1, 3, 5, 10, 50 と増やすと矩形波にどんどん近づきます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'terms', min: 1, max: 50, step: 1, initial: 1 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'フーリエ級数とは',
      content:
        '周期Tの関数 f(t) は三角関数の無限和で表せます。\n\nf(t) = a₀/2 + Σ[n=1→∞] (aₙcos(nωt) + bₙsin(nωt))\n\nω = 2π/T（基本角周波数）\n\naₙ, bₙ はフーリエ係数と呼ばれます。\n\n各項は基本周波数の n倍の周波数を持つ「倍音」に対応します。',
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
      title: '矩形波のフーリエ級数',
      content:
        '矩形波のフーリエ級数は奇数次の正弦波だけで構成されます。\n\nf(t) = (4/π) Σ[n=1,3,5,…] (1/n) sin(nωt)\n\n= (4/π)[sin(ωt) + (1/3)sin(3ωt) + (1/5)sin(5ωt) + …]\n\n項を増やすほど矩形波に近づきますが、\n不連続点の近くでは常に約9%のオーバーシュートが残ります。',
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
      content: 'フーリエ級数の性質について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '偶関数（f(-t)=f(t)）のフーリエ級数に含まれるのは？',
        options: [
          { id: 'a', label: 'sin項のみ', correct: false },
          { id: 'b', label: 'cos項のみ', correct: true },
          { id: 'c', label: 'sinとcos両方', correct: false },
          { id: 'd', label: '定数項のみ', correct: false },
        ],
        explanation:
          '偶関数のフーリエ級数にはcos項（と定数項）のみ含まれます。cosは偶関数、sinは奇関数なので、偶関数を表すにはcos項だけで十分です。',
      },
    },
    {
      id: 'alternate',
      title: '三角波・鋸歯状波の場合',
      content:
        '三角波のフーリエ級数:\nf(t) = (8/π²) Σ[n=1,3,5,…] ((-1)^((n-1)/2) / n²) sin(nωt)\n\n係数が 1/n² で減衰するので、矩形波(1/n)より速く収束します。\n\n鋸歯状波:\nf(t) = (2/π) Σ[n=1→∞] ((-1)^(n+1) / n) sin(nωt)\n\n波形の滑らかさと収束速度は密接に関係しています。',
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
      title: 'まとめ：フーリエ級数の直感',
      content:
        'どんな周期関数も三角関数の重ね合わせで近似できます。\n\n項数を調整して、異なる波形（矩形波・三角波・鋸歯状波）の近似を比較しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'waveType', min: 0, max: 2, step: 1, initial: 0 },
          { name: 'terms', min: 1, max: 50, step: 1, initial: 5 },
        ],
      },
    },
  ],
};
