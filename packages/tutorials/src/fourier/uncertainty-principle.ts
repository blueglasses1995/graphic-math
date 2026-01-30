import { Tutorial } from '../types';

export const uncertaintyPrincipleTutorial: Tutorial = {
  id: 'uncertainty-principle',
  title: '不確定性原理',
  description: '時間と周波数の同時精度に限界がある不確定性原理を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '同時に知ることの限界',
      content:
        '量子力学のハイゼンベルクの不確定性原理は有名ですが、\n実はフーリエ解析にも同じ原理が存在します。\n\n信号の「いつ」と「どの周波数」を\n同時に正確に知ることはできません。\n\nΔt · Δω ≥ 1/2',
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
      title: 'ガウスパルスで確認',
      content:
        'ガウスパルスの時間幅を変えて、スペクトルの広がりがどう変わるか確認しましょう。\n\n幅が狭いほどスペクトルは広がります。',
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
          { name: 'sigma', min: 0.1, max: 5, step: 0.1, initial: 1.0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '不確定性原理の数学',
      content:
        '信号 f(t) に対して:\n\n時間の広がり: Δt² = ∫ t² |f(t)|² dt\n周波数の広がり: Δω² = ∫ ω² |F(ω)|² dω\n\n不確定性原理:\nΔt · Δω ≥ 1/2\n\n等号が成立するのはガウス関数のときだけ。\nf(t) = e^(-αt²) は不確定性を最小にする信号です。',
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
      title: '量子力学との関係',
      content:
        '量子力学の不確定性原理:\nΔx · Δp ≥ ℏ/2\n\nド・ブロイの関係式 p = ℏk（k は波数）を使うと:\nΔx · Δk ≥ 1/2\n\nこれはまさにフーリエ解析の不確定性原理そのものです。\n\n量子力学の不確定性は、\n波動関数のフーリエ変換の性質から自然に導かれます。\n\n物理の根本原理がフーリエ解析に起源を持つのです。',
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
      content: '不確定性原理について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'Δt·Δω の積を最小にする関数は？',
        options: [
          { id: 'a', label: '矩形パルス', correct: false },
          { id: 'b', label: '三角パルス', correct: false },
          { id: 'c', label: 'ガウス関数', correct: true },
          { id: 'd', label: 'sinc関数', correct: false },
        ],
        explanation:
          'ガウス関数 f(t) = e^(-αt²) は不確定性原理の等号 Δt·Δω = 1/2 を達成する唯一の関数族です。そのフーリエ変換もガウス関数になります。',
      },
    },
    {
      id: 'alternate',
      title: '応用：ガボールアトム',
      content:
        'ガボール（Gabor）はガウス窓を持つ短時間フーリエ変換を提案しました。\n\nガボールアトム: g(t) = e^(-α(t-τ)²) · e^(iω₀t)\n\nこれは時間-周波数平面上の「最小の塊」です。\n\n不確定性原理により、これ以上小さくできない\n時間-周波数の基本単位となります。\n\nMP3やAACなどの音声圧縮にも関連しています。',
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
      title: 'まとめ：不確定性原理',
      content:
        '時間と周波数を同時に高精度で知ることはできません。\n\nガウスパルスのパラメータを変えてこのトレードオフを体感しましょう。',
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
          { name: 'sigma', min: 0.1, max: 5, step: 0.1, initial: 1.0 },
          { name: 'centerFreq', min: 1, max: 20, step: 1, initial: 5 },
        ],
      },
    },
  ],
};
