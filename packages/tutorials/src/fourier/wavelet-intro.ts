import { Tutorial } from '../types';

export const waveletIntroTutorial: Tutorial = {
  id: 'wavelet-intro',
  title: 'ウェーブレット変換入門',
  description: '多重解像度解析を可能にするウェーブレット変換の基礎を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '不確定性原理を超えて',
      content:
        'STFTは全ての周波数で同じ窓幅を使います。\n\nでも低い音（低周波）は長い時間聴かないと音程がわからず、\n高い音（高周波）は短い時間で音程がわかります。\n\nウェーブレット変換は周波数に応じて窓幅を自動調整します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wavelet-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'スケーリングを体験',
      content:
        'ウェーブレットのスケール（幅）を変えて、異なる周波数成分を捉える様子を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wavelet-intro-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'scale', min: 0.5, max: 10, step: 0.5, initial: 2 },
          { name: 'position', min: -5, max: 5, step: 0.1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'ウェーブレット変換の定義',
      content:
        '連続ウェーブレット変換（CWT）:\n\nW(a, b) = (1/√|a|) ∫ f(t) · ψ*((t-b)/a) dt\n\na: スケール（窓の幅）\nb: 位置（窓の中心）\nψ: マザーウェーブレット\n\nスケール a が大きい → 低周波を広い時間窓で解析\nスケール a が小さい → 高周波を狭い時間窓で解析\n\n周波数に応じた最適な分解能を自動的に実現します。',
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
      title: '代表的なウェーブレット',
      content:
        'ハール（Haar）ウェーブレット: 最も単純\nψ(t) = 1 (0≤t<1/2), -1 (1/2≤t<1), 0 (その他)\n\nモルレ（Morlet）ウェーブレット:\nψ(t) = e^(-t²/2) · e^(iω₀t)\nガウス窓付き正弦波。STFTとの橋渡し。\n\nドビュシー（Daubechies）ウェーブレット:\nコンパクトサポートで直交性を持つ。\n画像圧縮（JPEG 2000）に使用。',
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
      content: 'ウェーブレット変換について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ウェーブレット変換がSTFTより優れている点は？',
        options: [
          { id: 'a', label: '計算が速い', correct: false },
          { id: 'b', label: '周波数に応じて時間分解能が変わる', correct: true },
          { id: 'c', label: '周波数分解能が常に高い', correct: false },
          { id: 'd', label: '逆変換が簡単', correct: false },
        ],
        explanation:
          'ウェーブレット変換は高周波では高い時間分解能を、低周波では高い周波数分解能を提供します。STFTは全周波数で同じ分解能です。',
      },
    },
    {
      id: 'alternate',
      title: 'フーリエ vs ウェーブレット',
      content:
        'フーリエ変換: 基底は e^(iωt)（無限に広がる正弦波）\n→ 周波数に特化、時間情報なし\n\nSTFT: 基底は w(t-τ)·e^(iωt)（固定幅の窓付き正弦波）\n→ 固定分解能\n\nウェーブレット: 基底は (1/√a)ψ((t-b)/a)（伸縮する波）\n→ 多重解像度解析\n\n用途に応じて使い分けることが重要です。',
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
      title: 'まとめ：ウェーブレット変換入門',
      content:
        'ウェーブレット変換は周波数に応じた多重解像度解析を実現します。\n\nスケールと位置を操作して、ウェーブレットの振る舞いを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wavelet-intro-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'scale', min: 0.5, max: 10, step: 0.5, initial: 2 },
          { name: 'waveletType', min: 0, max: 2, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
