import { Tutorial } from '../types';

export const polarDivideTutorial: Tutorial = {
  id: 'polar-divide',
  title: '極形式での割り算',
  description: '極形式における割り算の幾何学的意味を理解する',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '掛け算の逆',
      content:
        '掛け算が「絶対値の積、偏角の和」なら、割り算は？\n\nz₁ / z₂ = (r₁/r₂)(cos(θ₁-θ₂) + i sin(θ₁-θ₂))\n\n絶対値は割り算、偏角は引き算です！\n\n掛け算の完全な裏返しです。',
      customScene: 'polar-divide-animation',
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
      id: 'example',
      title: '具体例',
      content:
        'z₁ = 6∠120°、z₂ = 2∠45° のとき:\n\nz₁ / z₂ = (6/2)∠(120°-45°) = 3∠75°\n\n絶対値: 6 / 2 = 3\n偏角: 120° - 45° = 75°\n\n直交形式で計算するよりずっと簡単です！',
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
      id: 'inverse',
      title: '逆数',
      content:
        '1/z = (1/r)(cos(-θ) + i sin(-θ))\n\n逆数は絶対値の逆数を取り、偏角を反転（符号を変える）します。\n\n例: z = 2∠60° → 1/z = (1/2)∠(-60°)\n\n幾何学的には、実軸に関して反転し、原点からの距離を逆数にします。',
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
      id: 'interactive',
      title: '割り算を体験',
      content:
        '偏角を変化させて、割り算の結果がどう動くか観察してみましょう。\n\n掛け算とは偏角の変化が逆方向になることを確認してください。',
      customScene: 'polar-divide-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'θ₁', min: 0, max: 6.28, step: 0.1, initial: 2.0 },
          { name: 'θ₂', min: 0, max: 6.28, step: 0.1, initial: 0.8 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '極形式の割り算を練習しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'z₁ = 10∠80°、z₂ = 5∠30° のとき、z₁/z₂ は？',
        options: [
          { id: 'a', label: '2∠50°', correct: true },
          { id: 'b', label: '50∠110°', correct: false },
          { id: 'c', label: '2∠110°', correct: false },
          { id: 'd', label: '5∠50°', correct: false },
        ],
        explanation:
          '絶対値: 10/5 = 2、偏角: 80° - 30° = 50° なので 2∠50° です。',
      },
    },
    {
      id: 'comparison',
      title: '直交形式 vs 極形式',
      content:
        '・足し算/引き算 → 直交形式が楽（実部・虚部ごとに計算）\n・掛け算/割り算 → 極形式が楽（絶対値と偏角で計算）\n・累乗/n乗根 → 極形式が圧倒的に楽\n\n場面に応じて使い分けることが大切です。',
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
        '極形式での割り算:\n\n・r₁∠θ₁ / r₂∠θ₂ = (r₁/r₂)∠(θ₁-θ₂)\n・絶対値は商、偏角は差\n・逆数: 1/z = (1/r)∠(-θ)\n・用途に応じて直交形式と極形式を使い分ける\n\n次はド・モアブルの定理を学びましょう。',
      customScene: 'polar-divide-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
