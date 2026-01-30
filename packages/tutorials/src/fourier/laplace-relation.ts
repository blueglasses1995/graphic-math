import { Tutorial } from '../types';

export const laplaceRelationTutorial: Tutorial = {
  id: 'laplace-relation',
  title: 'ラプラス変換との関係',
  description: 'フーリエ変換とラプラス変換の関係を理解する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'フーリエ変換の拡張',
      content:
        'フーリエ変換は全ての関数に適用できるわけではありません。\n\ne^(at)（a > 0）のように発散する関数にはフーリエ変換は存在しません。\n\nしかしラプラス変換なら扱えます。\nラプラス変換はフーリエ変換の「拡張版」なのです。',
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
      title: 's平面を探索',
      content:
        '複素数 s = σ + iω の σ を変えて、減衰因子の効果を確認しましょう。\n\nσ = 0 のとき、ラプラス変換はフーリエ変換に一致します。',
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
          { name: 'sigma', min: -3, max: 3, step: 0.1, initial: 0 },
          { name: 'omega', min: -10, max: 10, step: 0.5, initial: 2 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '数学的な関係',
      content:
        'ラプラス変換: L{f}(s) = ∫₀^∞ f(t) e^(-st) dt\n\nフーリエ変換: F{f}(ω) = ∫₋∞^∞ f(t) e^(-iωt) dt\n\n関係:\ns = σ + iω とおくと:\nL{f}(σ + iω) = ∫₀^∞ f(t) e^(-σt) e^(-iωt) dt\n\nσ = 0 かつ f(t<0) = 0 のとき:\nL{f}(iω) = F{f}(ω)',
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
      title: '収束領域（ROC）',
      content:
        'ラプラス変換が存在するsの範囲を収束領域（ROC）と呼びます。\n\n例: f(t) = e^(-at) u(t) (a > 0)\n\nL{f}(s) = 1/(s+a)、ROC: Re(s) > -a\n\nフーリエ変換が存在する条件:\n虚軸 (σ = 0) がROCに含まれること。\n\na > 0 のとき ROC: Re(s) > -a は虚軸を含む → FT存在\na < 0 のとき ROC: Re(s) > |a| は虚軸を含まない → FT不存在',
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
      content: 'ラプラス変換とフーリエ変換の関係について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ラプラス変換 L{f}(s) からフーリエ変換 F{f}(ω) を得るには？',
        options: [
          { id: 'a', label: 's = ω とする', correct: false },
          { id: 'b', label: 's = iω とする', correct: true },
          { id: 'c', label: 's = -ω とする', correct: false },
          { id: 'd', label: 's = ω² とする', correct: false },
        ],
        explanation:
          'ラプラス変換で s = iω（σ = 0）とおくとフーリエ変換に一致します。ラプラス変換の虚軸上の値がフーリエ変換です。',
      },
    },
    {
      id: 'alternate',
      title: 'どちらを使うべきか',
      content:
        'フーリエ変換が適する場面:\n・定常的な信号の周波数解析\n・通信（変調・復調）\n・音声・画像処理\n\nラプラス変換が適する場面:\n・過渡応答の解析\n・制御系の安定性判定\n・初期値問題（微分方程式）\n\nフーリエ変換: 定常状態の分析\nラプラス変換: 過渡状態を含む完全な応答の分析',
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
      title: 'まとめ：ラプラス変換との関係',
      content:
        'フーリエ変換はラプラス変換のs = iω上の値です。\n\ns平面上を探索して両者の関係を確認しましょう。',
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
          { name: 'sigma', min: -3, max: 3, step: 0.1, initial: 0 },
          { name: 'omega', min: -10, max: 10, step: 0.5, initial: 2 },
        ],
      },
    },
  ],
};
