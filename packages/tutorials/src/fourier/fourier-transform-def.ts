import { Tutorial } from '../types';

export const fourierTransformDefTutorial: Tutorial = {
  id: 'fourier-transform-def',
  title: 'フーリエ変換の定義',
  description: '周期関数から非周期関数へ：フーリエ変換の定義と意味を理解する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '周期が∞になったら？',
      content:
        'フーリエ級数は周期関数に使えます。\n\nでは周期が無限大、つまり非周期的な信号はどうする？\n\n周期 T→∞ の極限を取ると、離散的な周波数が連続になります。\nそれがフーリエ変換です。',
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
      title: '周期を大きくしてみよう',
      content:
        '周期Tを大きくしていくと、離散スペクトルが連続スペクトルに近づく様子を確認しましょう。',
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
          { name: 'period', min: 1, max: 50, step: 1, initial: 4 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'フーリエ変換の定義',
      content:
        'フーリエ変換:\nF(ω) = ∫₋∞^∞ f(t) e^(-iωt) dt\n\n逆フーリエ変換:\nf(t) = (1/2π) ∫₋∞^∞ F(ω) e^(iωt) dω\n\nF(ω) は周波数 ω の「密度」を表します。\nフーリエ級数の cₙ が離散的だったのに対し、\nF(ω) は連続的な関数です。',
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
      title: 'ガウス関数のフーリエ変換',
      content:
        'f(t) = e^(-t²) のフーリエ変換:\n\nF(ω) = √π · e^(-ω²/4)\n\nガウス関数のフーリエ変換もガウス関数！\n\n時間領域で幅が狭い → 周波数領域で幅が広い\n時間領域で幅が広い → 周波数領域で幅が狭い\n\nこれは不確定性原理の表れです。',
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
      content: 'フーリエ変換の性質について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'デルタ関数 δ(t) のフーリエ変換は？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: 'δ(ω)', correct: false },
          { id: 'c', label: '1（全周波数で一定）', correct: true },
          { id: 'd', label: 'e^(-ω²)', correct: false },
        ],
        explanation:
          'δ(t)のフーリエ変換は F(ω) = ∫δ(t)e^(-iωt)dt = e^0 = 1 です。時間的に無限に短いパルスは、全ての周波数を均等に含みます。',
      },
    },
    {
      id: 'alternate',
      title: 'フーリエ変換の双対性',
      content:
        'フーリエ変換には美しい双対性があります。\n\nf(t) ↔ F(ω) ならば F(t) ↔ 2πf(-ω)\n\n時間と周波数は対等な関係にあります。\n\nまた、フーリエ変換を4回適用すると元に戻ります:\nF⁴{f} = f（4回で恒等変換）\n\nこの対称性が多くの応用を可能にしています。',
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
      title: 'まとめ：フーリエ変換の定義',
      content:
        'フーリエ変換は非周期信号を連続的な周波数成分に分解します。\n\nガウス関数の幅を変えて、時間幅と周波数幅の反比例関係を確認しましょう。',
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
          { name: 'sigma', min: 0.1, max: 5, step: 0.1, initial: 1.0 },
        ],
      },
    },
  ],
};
