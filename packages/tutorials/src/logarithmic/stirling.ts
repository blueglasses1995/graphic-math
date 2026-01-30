import { Tutorial } from '../types';

export const stirlingTutorial: Tutorial = {
  id: 'stirling',
  title: '【実践】スターリングの近似',
  description: 'ln(n!) ≈ n×ln(n) - n というスターリングの近似を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '巨大な階乗を手なずける',
      content:
        '100! は何桁？ 直接計算は困難ですが、スターリングの近似 ln(n!) ≈ n×ln(n) - n を使えば概算できます。対数が巨大な数を扱いやすくします。',
      customScene: 'stirling-animation',
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
      title: '触ってみよう',
      content:
        'n を変えて、ln(n!) の正確な値とスターリング近似の値を比較してください。n が大きいほど近似が正確になります。',
      customScene: 'stirling-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '近似の導出のイメージ',
      content:
        'ln(n!) = ln(1) + ln(2) + ... + ln(n) = Σln(k)。この和を積分で近似すると ∫₁ⁿ ln(x)dx = n×ln(n) - n + 1 ≈ n×ln(n) - n。1/x の積分が ln を生むことが鍵です。',
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
      title: '100! の桁数',
      content:
        'log₁₀(100!) ≈ (100×ln(100) - 100) / ln(10) = (100×4.605 - 100) / 2.303 ≈ 157.0。よって 100! は約158桁の数です（正確には158桁）。',
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
      content:
        'スターリングの近似で ln(10!) を概算すると？（ln(10) ≈ 2.303）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'n×ln(n) - n で n=10 のとき、値は約いくつ？',
        options: [
          { id: 'a', label: '約10', correct: false },
          { id: 'b', label: '約13', correct: true },
          { id: 'c', label: '約20', correct: false },
          { id: 'd', label: '約25', correct: false },
        ],
        explanation:
          '10×ln(10) - 10 = 10×2.303 - 10 = 13.03。正確な ln(10!) ≈ 15.1 なので、近似は少し小さめですが桁の見積もりには十分です。',
      },
    },
    {
      id: 'alternate',
      title: 'より精密な近似',
      content:
        'より精密なスターリングの公式:\n\nn! ≈ √(2πn) × (n/e)^n\n\n対数をとると:\nln(n!) ≈ (1/2)ln(2πn) + n×ln(n) - n\n\n√(2πn) の項を加えるとかなり正確になります。',
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
        'スターリングの近似 ln(n!) ≈ n×ln(n) - n は、巨大な階乗を対数で扱えるようにします。統計力学や組合せ論で必須の道具です。\n\n近似の精度を確認してみてください。',
      customScene: 'stirling-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
