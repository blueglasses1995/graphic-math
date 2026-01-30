import { Tutorial } from '../types';

export const parsevalEqualityTutorial: Tutorial = {
  id: 'parseval-equality',
  title: 'パーセバルの等式',
  description: '時間領域と周波数領域でエネルギーが保存されることを学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'エネルギーの二面性',
      content:
        '信号のエネルギーは時間領域でも周波数領域でも同じ値になります。\n\n波形の面積と、周波数スペクトルの面積が等しい。\n\nこの驚くべき等式がパーセバルの等式です。',
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
      title: 'エネルギー保存を確認',
      content:
        '信号の成分を変えて、時間領域のエネルギーと周波数領域のエネルギーが常に一致することを確認しましょう。',
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
          { name: 'a1', min: 0, max: 2, step: 0.1, initial: 1.0 },
          { name: 'a2', min: 0, max: 2, step: 0.1, initial: 0.5 },
          { name: 'a3', min: 0, max: 2, step: 0.1, initial: 0.3 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'パーセバルの等式（級数版）',
      content:
        '周期関数のパーセバルの等式:\n\n(1/T) ∫₀ᵀ |f(t)|² dt = Σ[n=-∞→∞] |cₙ|²\n\n左辺: 信号の平均パワー（時間領域）\n右辺: 各周波数成分のパワーの総和（周波数領域）\n\n実フーリエ係数では:\n(a₀²/4) + (1/2) Σ[n=1→∞] (aₙ² + bₙ²)',
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
      title: '具体例で検証',
      content:
        'f(t) = sin(t) + (1/2)sin(2t) の場合:\n\n時間領域: (1/2π) ∫₀²π |f(t)|² dt\n= (1/2π) ∫₀²π [sin²t + sin(t)sin(2t) + (1/4)sin²(2t)] dt\n= 1/2 + 0 + 1/8 = 5/8\n\n周波数領域: |c₁|² + |c₋₁|² + |c₂|² + |c₋₂|²\n= (1/2)² × 2 + (1/4)² × 2 = 1/2 + 1/8 = 5/8 ✓',
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
      content: 'パーセバルの等式を使って考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(t) = 2cos(t) の平均パワーは？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '2', correct: true },
          { id: 'c', label: '4', correct: false },
          { id: 'd', label: '1/2', correct: false },
        ],
        explanation:
          '2cos(t) の複素フーリエ係数は c₁ = c₋₁ = 1。パーセバルの等式より平均パワー = |c₁|² + |c₋₁|² = 1 + 1 = 2。直接計算でも (1/2π)∫₀²π 4cos²t dt = 4·(1/2) = 2。',
      },
    },
    {
      id: 'alternate',
      title: 'ピタゴラスの定理との類似',
      content:
        'パーセバルの等式は無限次元版のピタゴラスの定理です。\n\n有限次元: |v|² = v₁² + v₂² + … + vₙ²\n無限次元: ∫|f|² = Σ|cₙ|²\n\nベクトルの長さの二乗 = 各成分の二乗の和\n\n信号のエネルギーが周波数成分に分配される。\nどの領域で計算しても同じ結果になるのです。',
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
      title: 'まとめ：パーセバルの等式',
      content:
        'エネルギーは時間領域でも周波数領域でも保存されます。\n\n各成分の振幅を変えて、エネルギー保存を確認しましょう。',
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
          { name: 'c1', min: 0, max: 2, step: 0.1, initial: 1.0 },
          { name: 'c2', min: 0, max: 2, step: 0.1, initial: 0.5 },
        ],
      },
    },
  ],
};
