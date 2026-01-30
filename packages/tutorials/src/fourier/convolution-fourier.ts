import { Tutorial } from '../types';

export const convolutionFourierTutorial: Tutorial = {
  id: 'convolution-fourier',
  title: '畳み込み定理',
  description: '畳み込みとフーリエ変換の関係を視覚的に理解する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '畳み込みが掛け算になる',
      content:
        '2つの信号の畳み込み（convolution）は計算が大変です。\n\nしかしフーリエ変換すると、畳み込みは単なる掛け算に！\n\nF{f * g} = F{f} · F{g}\n\nこれが畳み込み定理。信号処理の根幹です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'convolution-fourier-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '畳み込みを体験',
      content:
        '2つの関数をスライドさせて、畳み込みの結果がどう変化するか確認しましょう。\n\n一方の関数を反転してスライドさせ、重なり面積を計算するのが畳み込みです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'convolution-fourier-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'slidePosition', min: -5, max: 5, step: 0.1, initial: -3 },
          { name: 'kernelWidth', min: 0.5, max: 3, step: 0.1, initial: 1.0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '畳み込みの定義',
      content:
        '畳み込みの定義:\n(f * g)(t) = ∫₋∞^∞ f(τ) g(t - τ) dτ\n\n手順:\n1. g を時間反転: g(-τ)\n2. t だけシフト: g(t - τ)\n3. f(τ) と掛けて積分\n\n物理的意味: 過去の入力 f(τ) にシステム応答 g(t-τ) を重み付けして足し合わせる。',
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
      title: '畳み込み定理の証明概略',
      content:
        'F{f * g}(ω) = ∫∫ f(τ) g(t-τ) e^(-iωt) dτ dt\n\n変数変換 s = t - τ:\n= ∫ f(τ) e^(-iωτ) dτ · ∫ g(s) e^(-iωs) ds\n= F(ω) · G(ω)\n\n逆も成立: F{f · g} = (1/2π) F * G\n\n時間領域の畳み込み ↔ 周波数領域の掛け算\n時間領域の掛け算 ↔ 周波数領域の畳み込み',
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
      content: '畳み込み定理について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '信号 f(t) にローパスフィルタ（低周波のみ通す）をかけることは、周波数領域で何をしている？',
        options: [
          { id: 'a', label: 'F(ω)と矩形関数の畳み込み', correct: false },
          { id: 'b', label: 'F(ω)と矩形関数の掛け算', correct: true },
          { id: 'c', label: 'F(ω)の微分', correct: false },
          { id: 'd', label: 'F(ω)のシフト', correct: false },
        ],
        explanation:
          'フィルタリングは時間領域では畳み込みですが、周波数領域ではスペクトルF(ω)とフィルタ特性H(ω)の掛け算です。ローパスフィルタは高周波成分をゼロにします。',
      },
    },
    {
      id: 'alternate',
      title: 'FFTによる高速畳み込み',
      content:
        '直接畳み込み: O(N²) の計算量\n\nFFTを使った畳み込み:\n1. f と g をFFT → O(N log N)\n2. 周波数領域で掛け算 → O(N)\n3. 逆FFT → O(N log N)\n合計: O(N log N)\n\nN = 1,000,000 の場合:\n直接: 10¹² 回の演算\nFFT: 約 2×10⁷ 回の演算\n\n50,000倍の高速化！',
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
      title: 'まとめ：畳み込み定理',
      content:
        '畳み込みは周波数領域では掛け算になります。\n\nスライダーで畳み込みの過程と結果を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'convolution-fourier-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'slide', min: -5, max: 5, step: 0.1, initial: 0 },
          { name: 'showFreqDomain', min: 0, max: 1, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
