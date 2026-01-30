import { Tutorial } from '../types';

export const additionTheoremTutorial: Tutorial = {
  id: 'addition-theorem',
  title: '加法定理を見る',
  description: 'sin(α+β)やcos(α+β)の加法定理を視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: 'sin(A+B) ≠ sinA + sinB',
      content:
        'sin(30° + 60°) = sin(90°) = 1\nでも sin(30°) + sin(60°) = 0.5 + 0.866 = 1.366\n\n角度の足し算はsinの足し算にはなりません。\n\nでは sin(A+B) はどう計算する？ それが加法定理です。',
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
      title: '2つの角度を操作',
      content:
        'αとβの値を変えて、sin(α+β)の値がどう変わるか確認しましょう。\n\nsinAsinB + cosAcosB とも比べてみてください。',
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
          { name: 'alpha', min: 0, max: 6.28, step: 0.1, initial: 0.5 },
          { name: 'beta', min: 0, max: 6.28, step: 0.1, initial: 1.0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'sin(α+β)の公式',
      content:
        'sin(α + β) = sinα cosβ + cosα sinβ\n\n具体例: sin(75°) = sin(45° + 30°)\n= sin45° cos30° + cos45° sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2)\n= √6/4 + √2/4\n= (√6 + √2)/4 ≈ 0.966\n\n検算: sin(75°) ≈ 0.966 ✓',
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
      title: 'cos(α+β)の公式',
      content:
        'cos(α + β) = cosα cosβ − sinα sinβ\n\n具体例: cos(75°) = cos(45° + 30°)\n= cos45° cos30° − sin45° sin30°\n= (√2/2)(√3/2) − (√2/2)(1/2)\n= √6/4 − √2/4\n= (√6 − √2)/4 ≈ 0.259\n\n引き算バージョン:\ncos(α − β) = cosα cosβ + sinα sinβ\n\n符号が逆になるだけです。',
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
        '加法定理を使って計算しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'cos(90°) を cos(60° + 30°) として加法定理で計算すると？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '1/2', correct: false },
          { id: 'c', label: '0', correct: true },
          { id: 'd', label: '-1/2', correct: false },
        ],
        explanation:
          'cos(60° + 30°) = cos60° cos30° − sin60° sin30°\n= (1/2)(√3/2) − (√3/2)(1/2)\n= √3/4 − √3/4 = 0 ✓\n\ncos(90°) = 0 と一致します。',
      },
    },
    {
      id: 'alternate',
      title: '回転の合成としての加法定理',
      content:
        '加法定理は「2つの回転を合成すること」と同じです。\n\n角度αの回転 → 角度βの回転 = 角度(α+β)の回転\n\n回転行列で書くと:\nR(α)·R(β) = R(α+β)\n\nこの行列の積を成分で計算すると、加法定理がそのまま出てきます。加法定理は回転の合成法則なのです。',
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
        '加法定理:\nsin(α ± β) = sinα cosβ ± cosα sinβ\ncos(α ± β) = cosα cosβ ∓ sinα sinβ\n\n・角度の足し算 ≠ 三角関数の足し算\n・2倍角、半角、積和の公式はすべて加法定理から導ける\n・本質は「回転の合成」\n\n三角関数の公式の中で最も基本的かつ重要な定理です。',
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
