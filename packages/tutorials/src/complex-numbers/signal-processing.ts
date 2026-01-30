import { Tutorial } from '../types';

export const signalProcessingTutorial: Tutorial = {
  id: 'signal-processing',
  title: '【実践】信号処理と複素数',
  description: 'フーリエ変換と複素指数関数による信号の分解',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '信号を分解する',
      content:
        '音楽、画像、通信── あらゆる信号はフーリエ変換で周波数成分に分解できます。\n\nフーリエ変換の核心は複素指数関数 e^(iωt) です。\n\nF(ω) = ∫ f(t) e^(-iωt) dt\n\n複素数なしにはデジタル信号処理は成り立ちません。',
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
      id: 'fourier-idea',
      title: 'フーリエの着想',
      content:
        'あらゆる周期関数は、sin と cos の重ね合わせで表現できます。\n\nf(t) = a₀ + Σ(aₙcos(nωt) + bₙsin(nωt))\n\nオイラーの公式を使うと:\nf(t) = Σ cₙ e^(inωt)\n\n複素指数表現の方がはるかにスッキリします。cₙ は複素フーリエ係数です。',
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
      id: 'dft',
      title: '離散フーリエ変換',
      content:
        'デジタル信号処理では離散フーリエ変換（DFT）を使います:\n\nXₖ = Σ xₙ e^(-i2πkn/N)\n\nN個のサンプルからN個の周波数成分を計算します。\n\n高速フーリエ変換（FFT）はこれをO(N log N)で計算するアルゴリズムで、現代のデジタル技術の基盤です。',
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
      id: 'interactive',
      title: '周波数成分を体験',
      content:
        '異なる周波数の正弦波を重ね合わせて、合成波がどう変化するか観察してみましょう。\n\nフーリエ変換はこの逆: 合成波から各周波数成分を取り出す操作です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: '基本周波数の振幅', min: 0, max: 2, step: 0.1, initial: 1 },
          { name: '第2高調波の振幅', min: 0, max: 2, step: 0.1, initial: 0 },
          { name: '第3高調波の振幅', min: 0, max: 2, step: 0.1, initial: 0 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: 'フーリエ変換と複素数の関係を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'フーリエ変換の核心にある複素数の公式は？',
        options: [
          { id: 'a', label: 'i² = -1', correct: false },
          { id: 'b', label: 'e^(iθ) = cosθ + i sinθ', correct: true },
          { id: 'c', label: 'z × z̄ = |z|²', correct: false },
          { id: 'd', label: '(cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ)', correct: false },
        ],
        explanation:
          'フーリエ変換は e^(iωt) = cos(ωt) + i sin(ωt) を基底関数として使います。オイラーの公式が信号処理の基盤です。',
      },
    },
    {
      id: 'applications',
      title: '応用例',
      content:
        'フーリエ変換の応用は広大です:\n\n・MP3音楽: 聴こえない周波数成分を除去して圧縮\n・JPEG画像: 高周波成分を間引いて圧縮\n・MRI: 磁気共鳴信号をフーリエ変換して画像化\n・スペクトル分析: 星の光から元素を特定\n・ノイズ除去: 特定周波数のノイズをカット\n\nすべて複素数の恩恵です。',
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
        '信号処理と複素数:\n\n・フーリエ変換: 信号を周波数成分に分解\n・核心は e^(iωt)（オイラーの公式）\n・複素指数表現で計算がシンプルに\n・FFT: O(N log N) の高速アルゴリズム\n・MP3, JPEG, MRI など無数の応用\n\n複素数は現代のデジタル技術を支える柱です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
