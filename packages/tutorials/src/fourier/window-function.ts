import { Tutorial } from '../types';

export const windowFunctionTutorial: Tutorial = {
  id: 'window-function',
  title: '窓関数',
  description: 'スペクトル漏れを抑える窓関数の仕組みと種類を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'スペクトル漏れの問題',
      content:
        '有限長のデータにDFTを適用すると、\n本来ないはずの周波数成分が現れることがあります。\n\nこれがスペクトル漏れ（spectral leakage）です。\n\n窓関数はこの問題を軽減する技法です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'window-function-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '窓関数を比較',
      content:
        '異なる窓関数（矩形窓、ハニング窓、ハミング窓）を適用して、スペクトルの違いを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'window-function-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'windowType', min: 0, max: 3, step: 1, initial: 0 },
          { name: 'signalFreq', min: 1, max: 20, step: 0.5, initial: 5.3 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'なぜ漏れが起きるのか',
      content:
        'DFTは暗黙的にデータが周期的に繰り返すと仮定します。\n\nデータの始点と終点が滑らかに繋がらないと、\n不連続が生じてスペクトル漏れが発生します。\n\n矩形窓（何もしない）のフーリエ変換は sinc 関数。\nメインローブの幅が狭いが、サイドローブが大きい。\n\nこのサイドローブがスペクトル漏れの原因です。',
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
      title: '主要な窓関数',
      content:
        'ハニング窓: w(n) = 0.5(1 - cos(2πn/N))\nサイドローブ: -31dB、主ローブ幅: 4Δf\n\nハミング窓: w(n) = 0.54 - 0.46cos(2πn/N)\nサイドローブ: -43dB、主ローブ幅: 4Δf\n\nブラックマン窓: 3項コサイン和\nサイドローブ: -58dB、主ローブ幅: 6Δf\n\nトレードオフ: サイドローブを小さくするとメインローブが広がる。',
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
      content: '窓関数について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '窓関数のメインローブ幅を狭くすると何が起こる？',
        options: [
          { id: 'a', label: 'サイドローブも小さくなる', correct: false },
          { id: 'b', label: 'サイドローブが大きくなる', correct: true },
          { id: 'c', label: '計算量が増える', correct: false },
          { id: 'd', label: '何も変わらない', correct: false },
        ],
        explanation:
          'メインローブ幅とサイドローブの大きさにはトレードオフがあります。周波数分解能（メインローブ幅）を高めるとスペクトル漏れ（サイドローブ）が増えます。',
      },
    },
    {
      id: 'alternate',
      title: 'カイザー窓とパラメータ調整',
      content:
        'カイザー窓: w(n) = I₀(β√(1-(2n/N-1)²)) / I₀(β)\n\nI₀ はゼロ次修正ベッセル関数。\n\nパラメータ β でトレードオフを連続的に調整可能:\nβ = 0: 矩形窓（最も狭いメインローブ）\nβ = 5: ハミング窓に近い特性\nβ = 8.7: ブラックマン窓に近い特性\n\n用途に応じてβを選べる柔軟性が特徴です。',
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
      title: 'まとめ：窓関数',
      content:
        '窓関数はスペクトル漏れを抑えるためにデータに適用する重み付けです。\n\n異なる窓関数のスペクトルを比較しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'window-function-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'windowType', min: 0, max: 4, step: 1, initial: 0 },
          { name: 'beta', min: 0, max: 10, step: 0.5, initial: 5 },
        ],
      },
    },
  ],
};
