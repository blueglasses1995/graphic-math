import { Tutorial } from '../types';

export const fourierIntegralTutorial: Tutorial = {
  id: 'fourier-integral',
  title: '【実践】フーリエ積分',
  description: '任意の関数を sin と cos の「重ね合わせ」で表現する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '音を分解する',
      content:
        '楽器の音は複数の sin 波の重ね合わせです。\n\n複雑な波形を「どの周波数がどれだけ含まれているか」に分解する ──\n\nこれがフーリエ解析であり、その核心は積分です。\n\nアニメーションで波の分解を見てみましょう。',
      customScene: 'fourier-integral-animation',
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
        '各周波数成分の振幅を変えてみてください。\n\n成分を足し合わせると、元の波形に近づいていきます。\n\n項数を増やすとどんどん精密になります。',
      customScene: 'fourier-integral-interactive',
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
      title: 'フーリエ係数',
      content:
        '周期 2π の関数 f(x) のフーリエ級数：\n\nf(x) = a₀/2 + Σ[aₙcos(nx) + bₙsin(nx)]\n\n係数は積分で求めます：\naₙ = (1/π) ∫₋ππ f(x)·cos(nx) dx\nbₙ = (1/π) ∫₋ππ f(x)·sin(nx) dx\n\ncos と sin の直交性が鍵です。異なる周波数の積を積分するとゼロになります。',
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
        '矩形波（-π < x < 0 で -1、0 < x < π で 1）の場合：\n\naₙ = 0（奇関数なので cos 成分はゼロ）\nbₙ = (2/nπ)(1 - cos nπ)\n\n奇数 n のみ残り：\nf(x) = (4/π)[sin x + sin(3x)/3 + sin(5x)/5 + ...]\n\nギザギザの矩形波が、滑らかな sin の和で表現できるのです。',
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
        '偶関数のフーリエ級数では、sin の係数 bₙ はどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '偶関数のフーリエ級数で bₙ は？',
        options: [
          { id: 'a', label: '常に 1', correct: false },
          { id: 'b', label: '常に 0', correct: true },
          { id: 'c', label: 'aₙ と等しい', correct: false },
          { id: 'd', label: '場合による', correct: false },
        ],
        explanation:
          '正解は「常に 0」です。\n\n偶関数 × sin（奇関数）= 奇関数。\n奇関数を対称区間 [-π, π] で積分すると 0 になります。\n\n偶関数は cos のみ、奇関数は sin のみで表されます。',
      },
    },
    {
      id: 'alternate',
      title: 'フーリエ変換',
      content:
        '非周期関数にはフーリエ変換を使います：\n\nF(ω) = ∫₋∞∞ f(t)·e^(-iωt) dt\n\n離散的な周波数（級数）が連続的な周波数（積分）に置き換わります。\n\n音声処理、画像圧縮（JPEG）、MRI、量子力学...\n\n積分で定義されたフーリエ変換が現代テクノロジーを支えています。',
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
        'フーリエ解析：任意の関数を sin, cos の和に分解します。\n\n係数は積分で求めます（cos, sin の直交性を利用）。\n\nフーリエ変換は信号処理の基盤です。\n\n周波数成分を操作して、波の合成を体験してみてください。',
      customScene: 'fourier-integral-summary',
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
