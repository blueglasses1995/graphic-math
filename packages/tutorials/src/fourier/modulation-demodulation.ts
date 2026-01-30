import { Tutorial } from '../types';

export const modulationDemodulationTutorial: Tutorial = {
  id: 'modulation-demodulation',
  title: '通信の変調と復調',
  description: 'フーリエ変換に基づく通信技術の変調・復調の原理を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'ラジオの数学',
      content:
        'ラジオ放送は音声を電波に乗せて送信します。\n\n音声（数kHz）をそのまま送信はできません。\n搬送波（数百kHz〜）に音声信号を「乗せる」のが変調です。\n\nAM放送: 振幅変調（周波数シフト = フーリエ変換の性質）\nFM放送: 周波数変調\n\nフーリエ変換が変調・復調の理論的基盤です。',
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
      title: '変調を体験',
      content:
        '搬送波周波数と変調信号の周波数を変えて、AM変調波のスペクトルを確認しましょう。',
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
          { name: 'carrierFreq', min: 50, max: 200, step: 10, initial: 100 },
          { name: 'signalFreq', min: 1, max: 20, step: 1, initial: 5 },
          { name: 'modIndex', min: 0, max: 1, step: 0.05, initial: 0.5 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'AM変調の数学',
      content:
        '搬送波: c(t) = cos(2πfct)\n信号: m(t)（ベースバンド信号）\n\nAM変調: y(t) = [1 + m·m(t)] · cos(2πfct)\n\nフーリエ変換:\nY(ω) = πδ(ω-ωc) + πδ(ω+ωc)\n  + (m/2)[M(ω-ωc) + M(ω+ωc)]\n\n信号スペクトル M(ω) が ±ωc にシフト！\n\nこれはフーリエ変換の周波数シフト性質そのもの:\nF{f(t)·e^(iω₀t)} = F(ω - ω₀)',
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
      title: 'OFDM：現代の変調方式',
      content:
        'OFDM（直交周波数分割多重）:\nWi-Fi, 4G/5G, 地デジで使用される現代の変調方式。\n\n原理:\n1. データを多数のサブキャリアに分割\n2. 各サブキャリアは直交する周波数\n3. 逆FFTで時間信号を生成（送信）\n4. FFTで周波数成分を復元（受信）\n\nOFDMの心臓部はFFT！\n\nN個のサブキャリアの信号を一括で変調/復調:\ny[n] = IFFT{X[k]}（送信）\nX[k] = FFT{y[n]}（受信）',
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
      content: '変調と復調について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'AM変調は数学的にどの操作に対応する？',
        options: [
          { id: 'a', label: '信号と搬送波の畳み込み', correct: false },
          { id: 'b', label: '信号と搬送波の掛け算', correct: true },
          { id: 'c', label: '信号の微分', correct: false },
          { id: 'd', label: '信号のフーリエ変換', correct: false },
        ],
        explanation:
          'AM変調は信号 m(t) と搬送波 cos(ωct) の掛け算です。畳み込み定理の逆により、時間領域の掛け算は周波数領域のシフト（畳み込み）に対応し、信号スペクトルが搬送周波数にシフトします。',
      },
    },
    {
      id: 'alternate',
      title: 'フーリエ変換と通信容量',
      content:
        'シャノンの通信容量定理:\nC = B · log₂(1 + SNR)\n\nC: 最大通信容量（bps）\nB: 帯域幅（Hz）\nSNR: 信号対雑音比\n\n帯域幅 B はフーリエ変換で定義される周波数の範囲。\n\n5G通信は広い帯域幅（ミリ波帯）を使うことで高速通信を実現。\n28GHz帯で800MHz幅 → 数Gbpsの通信が可能。\n\nフーリエ変換は通信技術の設計と限界を規定します。',
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
      title: 'まとめ：通信の変調と復調',
      content:
        '変調・復調はフーリエ変換のシフト性質の直接的な応用です。\n\n搬送波と信号のパラメータを調整して変調の仕組みを確認しましょう。',
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
          { name: 'carrierFreq', min: 50, max: 200, step: 10, initial: 100 },
          { name: 'modulationType', min: 0, max: 2, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
