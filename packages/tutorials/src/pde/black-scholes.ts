import { Tutorial } from '../types';

export const blackScholesTutorial: Tutorial = {
  id: 'black-scholes',
  title: 'ブラック・ショールズ方程式',
  description: '金融工学の基礎であるブラック・ショールズ方程式を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: 'オプション価格を決める方程式',
      content:
        '株式オプションの理論価格はPDEで決まります。∂V/∂t + ½σ²S²·∂²V/∂S² + rS·∂V/∂S - rV = 0。これがブラック・ショールズ方程式です。オプション価格の変動を見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'black-scholes-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：パラメータを変える',
      content:
        'ボラティリティσ、金利r、満期Tを変えて、オプション価格がどう変化するか観察してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'black-scholes-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '熱方程式への変換',
      content:
        '変数変換 x = ln(S)、τ = T-t を行うと、ブラック・ショールズ方程式は熱方程式に変換されます。金融の問題が物理の問題と同じ数学で記述されるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'コールオプションの解',
      content:
        'ヨーロピアンコールオプションの解析解は C = S·N(d₁) - K·e^{-rT}·N(d₂)。d₁ = [ln(S/K)+(r+σ²/2)T]/(σ√T)、d₂ = d₁ - σ√T。N は標準正規分布の累積分布関数です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：ブラック・ショールズ',
      content: 'ボラティリティσが大きくなると、コールオプションの価格はどうなりますか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ボラティリティσが増加すると、コールオプション価格はどうなりますか？',
        options: [
          { id: 'a', label: '下がる', correct: false },
          { id: 'b', label: '上がる', correct: true },
          { id: 'c', label: '変わらない', correct: false },
          { id: 'd', label: '一定の後に減少する', correct: false },
        ],
        explanation:
          'ボラティリティが大きいほど株価が大きく変動する可能性が高まり、オプションの潜在的な利益が増えるため、価格は上昇します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：リスク中立評価',
      content:
        'ブラック・ショールズ理論の核心は「リスク中立世界」での期待値計算です。デルタヘッジによりリスクを消去すると、すべての資産が無リスク金利で成長する世界で価格が決まります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：オプション価格を体感する',
      content:
        'ボラティリティと満期を変えて、オプション価格曲面を観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'black-scholes-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'volatility', min: 0.05, max: 1, step: 0.01, initial: 0.2 },
          { name: 'timeToExpiry', min: 0.01, max: 2, step: 0.01, initial: 1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
