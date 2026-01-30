import { Tutorial } from '../types';

export const cflConditionTutorial: Tutorial = {
  id: 'cfl-condition',
  title: 'CFL条件',
  description: '数値安定性の鍵であるCFL条件を理解する',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '計算が爆発する？',
      content:
        '時間刻みを大きくしすぎると、数値解が発散してしまいます。CFL（クーラン・フリードリヒス・レヴィ）条件は、安定な計算のための制約です。安定・不安定な計算のアニメーションを比較しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'cfl-condition-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：CFL数を変える',
      content:
        'CFL数 = cΔt/Δx を変えて、解が安定か不安定か観察してください。CFL ≤ 1 が安定性の条件です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'cfl-condition-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'CFL条件の意味',
      content:
        'CFL条件：cΔt/Δx ≤ 1。物理的な波の速度cに対し、1タイムステップΔtで波が進む距離 cΔt が格子幅Δx以下でなければなりません。情報が1ステップで1格子以上跳び越えてはいけないのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '熱方程式の安定性条件',
      content:
        'FTCSスキームの熱方程式では αΔt/Δx² ≤ 1/2 が安定性条件です。Δxを半分にすると Δt は1/4にしなければなりません。これが陽解法の大きな制約で、陰解法が好まれる理由です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：CFL条件',
      content: 'CFL条件が破れるとどうなりますか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'CFL条件を満たさない場合、数値解はどうなりますか？',
        options: [
          { id: 'a', label: '精度が少し悪くなるだけ', correct: false },
          { id: 'b', label: '数値解が発散（爆発）する', correct: true },
          { id: 'c', label: '計算が遅くなる', correct: false },
          { id: 'd', label: '解がゼロに収束する', correct: false },
        ],
        explanation:
          'CFL条件を満たさないと、数値誤差が指数関数的に増大し、解が発散します。これを数値不安定性と呼びます。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：フォン・ノイマン安定性解析',
      content:
        '差分スキームにフーリエモード e^{ikx} を代入し、1ステップでの増幅率 |g| を調べます。|g| ≤ 1 なら安定。CFL条件はこの解析から数学的に導かれます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：CFL条件を体感する',
      content:
        'Δtとcを変えて、CFL数が1を超えたときの不安定性を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'cfl-condition-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'deltaT', min: 0.001, max: 0.2, step: 0.001, initial: 0.01 },
          { name: 'waveSpeed', min: 0.1, max: 5, step: 0.1, initial: 1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
