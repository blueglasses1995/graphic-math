import { Tutorial } from '../types';

export const weatherMathTutorial: Tutorial = {
  id: 'weather-math',
  title: '天気予報の数学',
  description: '気象予測に使われるPDEの仕組みを学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '天気予報はPDEを解いている',
      content:
        '天気予報の核心は、大気の運動を記述するPDE（原始方程式）を数値的に解くことです。地球規模のシミュレーションのアニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'weather-math-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：初期条件を変える',
      content:
        '初期の気圧分布を変えて、天気がどう発展するか観察してください。初期条件のわずかな違いが結果を大きく変えることに注目。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'weather-math-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '気象のPDE体系',
      content:
        '大気の運動はナビエ・ストークス方程式（運動方程式）、連続の方程式（質量保存）、熱力学方程式（エネルギー保存）、状態方程式の連立系で記述されます。さらにコリオリ力が加わります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'カオスと予測限界',
      content:
        'ローレンツは1963年に気象モデルのカオス的性質を発見しました。初期条件のわずかな誤差が指数関数的に増大し、長期予報には原理的な限界があります（バタフライ効果）。現在の限界は約2週間です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：天気予報の数学',
      content: '天気予報の精度に根本的な限界をもたらす現象はどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '長期天気予報の精度限界（約2週間）の根本原因はどれですか？',
        options: [
          { id: 'a', label: 'コンピュータの性能不足', correct: false },
          { id: 'b', label: '観測データの不足', correct: false },
          { id: 'c', label: 'カオス的性質（バタフライ効果）', correct: true },
          { id: 'd', label: '方程式が間違っている', correct: false },
        ],
        explanation:
          '大気の運動方程式はカオス的であり、初期条件の微小な誤差が指数関数的に増大します。コンピュータや観測を改善しても、原理的な予測限界は約2週間です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：アンサンブル予報',
      content:
        'カオスの限界に対処するため、少しずつ異なる初期条件で多数のシミュレーション（アンサンブル）を行います。結果のばらつきから確率的な予報が可能になり、「降水確率」の根拠になっています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：気象PDEを体感する',
      content:
        '初期条件の微小な変化がどれだけ結果を変えるか、スライダーで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'weather-math-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'perturbation', min: 0, max: 1, step: 0.01, initial: 0 },
          { name: 'forecastDays', min: 1, max: 14, step: 1, initial: 3 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
