import { Tutorial } from '../types';

export const samplingTheoremTutorial: Tutorial = {
  id: 'sampling-theorem',
  title: 'サンプリング定理',
  description: 'ナイキスト・シャノンのサンプリング定理とエイリアシングを学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'CDの秘密：44100Hz',
      content:
        'CDの音楽は1秒間に44100回サンプリングされています。\n\nなぜこの数字？人間の可聴域は約20kHzまで。\n\n44100 > 20000 × 2 = 40000\n\n最高周波数の2倍以上でサンプリングすれば\n元の信号を完全に復元できる。これがサンプリング定理です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sampling-theorem-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'サンプリング率を変えてみよう',
      content:
        'サンプリング率を変えて、信号の復元品質がどう変わるか確認しましょう。\n\n低すぎるとエイリアシングが発生します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sampling-theorem-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'signalFreq', min: 1, max: 20, step: 1, initial: 5 },
          { name: 'sampleRate', min: 2, max: 50, step: 1, initial: 12 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'ナイキスト・シャノンの定理',
      content:
        '帯域制限信号（最高周波数 fₘₐₓ）を完全に復元するには:\n\nサンプリング周波数 fs ≥ 2fₘₐₓ\n\n2fₘₐₓ をナイキスト周波数と呼びます。\n\n数学的には:\nf(t) = Σ[n=-∞→∞] f(n/fs) · sinc(fs·t - n)\n\nsinc関数による補間で連続信号を完全再構成できます。',
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
      title: 'エイリアシング',
      content:
        'fs < 2fₘₐₓ でサンプリングすると、エイリアシングが発生します。\n\n高い周波数の信号が、低い周波数として誤認されます。\n\n例: 800Hz の信号を 1000Hz でサンプリング\n→ 200Hz の信号に見える（折り返し）\n\n映画で車輪が逆回転して見えるのも同じ原理です。\n\n対策: サンプリング前にアンチエイリアシングフィルタを適用。',
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
      content: 'サンプリング定理について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '最高周波数10kHzの信号を正確に復元するために必要な最低サンプリング周波数は？',
        options: [
          { id: 'a', label: '10kHz', correct: false },
          { id: 'b', label: '20kHz', correct: true },
          { id: 'c', label: '40kHz', correct: false },
          { id: 'd', label: '5kHz', correct: false },
        ],
        explanation:
          'サンプリング定理より、最高周波数の2倍以上、つまり20kHz以上のサンプリング周波数が必要です。実際には余裕を持ってもう少し高い値を使います。',
      },
    },
    {
      id: 'alternate',
      title: 'オーバーサンプリングの利点',
      content:
        '実際のシステムでは、ナイキスト周波数よりも高い率でサンプリングします。\n\n理由:\n1. 理想的なアンチエイリアシングフィルタは実現不可能\n2. 遷移帯域のための余裕が必要\n3. ノイズシェーピングの効果\n\nCDの44100Hz = 20000Hz × 2 × 1.1025\n約10%の余裕を持っています。\n\nハイレゾ音源（96kHz, 192kHz）はさらに余裕があります。',
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
      title: 'まとめ：サンプリング定理',
      content:
        '最高周波数の2倍以上でサンプリングすれば元の信号を完全に復元できます。\n\n信号周波数とサンプリング率を変えてエイリアシングを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sampling-theorem-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'signalFreq', min: 1, max: 20, step: 1, initial: 5 },
          { name: 'sampleRate', min: 2, max: 50, step: 1, initial: 20 },
        ],
      },
    },
  ],
};
