import { Tutorial } from '../types';

export const reactionDiffusionTutorial: Tutorial = {
  id: 'reaction-diffusion',
  title: '反応拡散系',
  description: '反応拡散系が生み出すパターン形成を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '模様が自然に生まれる',
      content:
        'ヒョウの斑点、シマウマの縞模様、貝殻の渦巻き。自然界の模様は反応拡散系（2つのPDEの連立系）から自発的に生まれます。チューリングパターンの生成を見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'reaction-diffusion-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：パターンを生成',
      content:
        '拡散係数と反応速度を変えて、異なるパターン（点、縞、迷路）が生まれるのを観察してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'reaction-diffusion-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'チューリングの不安定性',
      content:
        '∂u/∂t = Dᵤ∇²u + f(u,v)、∂v/∂t = Dᵥ∇²v + g(u,v)。uは活性化因子、vは抑制因子。Dᵥ >> Dᵤ のとき、均一状態が不安定になり空間パターンが自発的に形成されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'グレイ・スコットモデル',
      content:
        '∂u/∂t = Dᵤ∇²u - uv² + F(1-u)、∂v/∂t = Dᵥ∇²v + uv² - (F+k)v。パラメータFとkの値により、点、縞、渦巻き、分裂するパルスなど多彩なパターンが現れます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：反応拡散系',
      content: 'チューリングパターンが形成される条件はどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'チューリング不安定性が起こるための重要な条件は？',
        options: [
          { id: 'a', label: '2つの物質の拡散係数が等しい', correct: false },
          { id: 'b', label: '抑制因子の拡散が活性化因子より十分速い', correct: true },
          { id: 'c', label: '反応項がない', correct: false },
          { id: 'd', label: '拡散がない', correct: false },
        ],
        explanation:
          'チューリング不安定性には「局所的に活性化、広域的に抑制」の構造が必要で、抑制因子の拡散係数が活性化因子より十分大きいことが条件です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：生物の形態形成',
      content:
        'チューリングは1952年に反応拡散系による模様形成を提案しました。現代の発生生物学では、実際にWntやBMPなどのシグナル分子が反応拡散系として機能し、指の数や毛の配置を決めていることが示されています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：反応拡散系を体感する',
      content:
        'パラメータを変えて、多彩なパターンが生まれる様子を楽しみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'reaction-diffusion-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'feedRate', min: 0, max: 0.1, step: 0.001, initial: 0.04 },
          { name: 'killRate', min: 0, max: 0.1, step: 0.001, initial: 0.06 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
