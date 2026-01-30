import { Tutorial } from '../types';

export const stftTutorial: Tutorial = {
  id: 'stft',
  title: '短時間フーリエ変換',
  description: '時間と周波数を同時に解析するSTFTとスペクトログラムを学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'いつ・どの周波数が鳴ったか',
      content:
        '通常のフーリエ変換は「どの周波数があるか」はわかりますが、\n「いつ鳴ったか」はわかりません。\n\n音楽では「いつ、どの音が鳴ったか」が重要です。\n\n短時間フーリエ変換（STFT）は短い時間窓をスライドさせて\n時間と周波数の両方を捉えます。',
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
      title: 'スペクトログラムを操作',
      content:
        '窓の幅を変えて、スペクトログラムの時間分解能と周波数分解能のトレードオフを確認しましょう。',
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
          { name: 'windowSize', min: 16, max: 512, step: 16, initial: 128 },
          { name: 'hopSize', min: 4, max: 128, step: 4, initial: 32 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'STFTの定義',
      content:
        'STFT:\nX(τ, ω) = ∫ f(t) · w(t - τ) · e^(-iωt) dt\n\nτ: 時間位置（窓の中心）\nω: 周波数\nw: 窓関数\n\n窓関数を時間軸上でスライドさせながら\n各位置でフーリエ変換を行います。\n\n結果は2次元の関数（時間 × 周波数）で、\nこれをスペクトログラムとして可視化します。',
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
      title: '時間・周波数分解能のトレードオフ',
      content:
        '窓が広い場合:\n・周波数分解能が高い（周波数をよく区別できる）\n・時間分解能が低い（いつ変化したかわかりにくい）\n\n窓が狭い場合:\n・時間分解能が高い（変化点を正確に検出）\n・周波数分解能が低い（近い周波数を区別しにくい）\n\nΔt · Δf ≥ 1/(4π)\n\n時間と周波数の分解能は同時に高くできません。\nこれは不確定性原理の表れです。',
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
      content: 'STFTの性質について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'STFTの窓幅を2倍にすると何が起こる？',
        options: [
          { id: 'a', label: '時間分解能も周波数分解能も向上', correct: false },
          { id: 'b', label: '周波数分解能が向上し、時間分解能が低下', correct: true },
          { id: 'c', label: '時間分解能が向上し、周波数分解能が低下', correct: false },
          { id: 'd', label: '両方とも低下', correct: false },
        ],
        explanation:
          '窓幅を広くすると、より多くの周期を捉えられるので周波数分解能が向上しますが、時間的な変化を捉える能力（時間分解能）は低下します。',
      },
    },
    {
      id: 'alternate',
      title: 'スペクトログラムの応用',
      content:
        'スペクトログラムの応用例:\n\n1. 音声認識: 音声をスペクトログラムに変換し、\n   パターン認識で文字に変換\n\n2. 音楽分析: 楽器の音色や和音構造の可視化\n\n3. 鳥の鳴き声分析: 種の同定に使用\n\n4. 地震波解析: P波とS波の到達時刻と周波数特性\n\n5. 医療: 心音や脳波の時間-周波数解析',
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
      title: 'まとめ：短時間フーリエ変換',
      content:
        'STFTは時間と周波数を同時に解析するツールです。\n\n窓幅とホップサイズを調整してスペクトログラムの変化を観察しましょう。',
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
          { name: 'windowSize', min: 16, max: 512, step: 16, initial: 128 },
          { name: 'hopSize', min: 4, max: 128, step: 4, initial: 32 },
        ],
      },
    },
  ],
};
