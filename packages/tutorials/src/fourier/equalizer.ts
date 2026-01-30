import { Tutorial } from '../types';

export const equalizerTutorial: Tutorial = {
  id: 'equalizer',
  title: 'イコライザーの仕組み',
  description: 'イコライザーのフーリエ変換に基づく動作原理を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '音のバランスを調整する',
      content:
        '音楽プレーヤーのイコライザーは、低音・中音・高音のバランスを調整します。\n\nこれはフーリエ変換で信号を周波数成分に分解し、\n各帯域の振幅を変えてから合成する処理です。\n\nフーリエ変換の最も身近な応用例を見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'equalizer-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'イコライザーを操作',
      content:
        '低音・中音・高音のゲインを調整して、スペクトルの変化を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'equalizer-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'lowGain', min: -12, max: 12, step: 1, initial: 0 },
          { name: 'midGain', min: -12, max: 12, step: 1, initial: 0 },
          { name: 'highGain', min: -12, max: 12, step: 1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'フィルタの種類',
      content:
        'イコライザーは複数のフィルタの組み合わせです。\n\nローパスフィルタ（LPF）: 低周波のみ通す\nH(ω) = 1 (|ω| < ωc), 0 (|ω| > ωc)\n\nハイパスフィルタ（HPF）: 高周波のみ通す\n\nバンドパスフィルタ（BPF）: 特定帯域のみ通す\n\nバンドストップフィルタ: 特定帯域をカット\n\nこれらは周波数領域での掛け算（畳み込み定理）で実現されます。',
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
      title: 'パラメトリックイコライザー',
      content:
        'パラメトリックEQの各バンドの伝達関数:\n\nH(s) = (s² + (ωc/Q)·G·s + ωc²) / (s² + (ωc/Q)·s + ωc²)\n\n3つのパラメータ:\n・ωc: 中心周波数（どの帯域を調整するか）\n・Q: 品質係数（バンド幅の鋭さ）\n・G: ゲイン（増幅/減衰の量、dB）\n\nQ が大きい → 狭い帯域に作用\nQ が小さい → 広い帯域に作用',
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
      content: 'イコライザーの動作について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'イコライザーで低音を強調する操作は、数学的にはどの処理？',
        options: [
          { id: 'a', label: '信号に低周波の正弦波を足す', correct: false },
          { id: 'b', label: 'スペクトルの低周波成分を増幅する', correct: true },
          { id: 'c', label: '信号を微分する', correct: false },
          { id: 'd', label: '信号の位相を変える', correct: false },
        ],
        explanation:
          'イコライザーはスペクトル（周波数成分）の振幅を変更します。低音強調はスペクトルの低周波部分の振幅を増幅する操作です。畳み込み定理により、これは時間領域でのフィルタとの畳み込みに相当します。',
      },
    },
    {
      id: 'alternate',
      title: 'デジタルフィルタの実装',
      content:
        'デジタルイコライザーの実装方法:\n\n1. FIRフィルタ（有限インパルス応答）:\ny[n] = Σ b[k] · x[n-k]\n常に安定だが、急峻なカットには多くの係数が必要。\n\n2. IIRフィルタ（無限インパルス応答）:\ny[n] = Σ b[k]·x[n-k] - Σ a[k]·y[n-k]\n少ない係数で急峻な特性が得られるが、不安定になりうる。\n\nリアルタイムのオーディオ処理ではIIRが多用されます。',
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
      title: 'まとめ：イコライザーの仕組み',
      content:
        'イコライザーは周波数領域で信号の振幅を調整するツールです。\n\n各帯域のゲインを調整してフィルタ効果を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'equalizer-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'band1', min: -12, max: 12, step: 1, initial: 0 },
          { name: 'band2', min: -12, max: 12, step: 1, initial: 0 },
          { name: 'band3', min: -12, max: 12, step: 1, initial: 0 },
          { name: 'band4', min: -12, max: 12, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
