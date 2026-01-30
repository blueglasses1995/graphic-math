import { Tutorial } from '../types';

export const tripleAngleTutorial: Tutorial = {
  id: 'triple-angle',
  title: '【実践】3倍角の公式',
  description: 'sin(3θ)とcos(3θ)は3倍速い波。パターンを見つける',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '3倍速の波',
      content:
        'θを3倍にした3θは、3倍の速さで動きます。\n\n黄色がθ、紫が3θ。sin(3θ)の波はsin(θ)の3倍詰まっています。\n\n再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '3つの山を数えよう',
      content:
        'sin(θ)が1周する間に、sin(3θ)は何周しますか？\n\n再生と一時停止で確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-sin3',
      title: 'sin(3θ) = 3sinθ − 4sin³θ',
      content:
        '3倍角の公式は2倍角を応用して導けます:\nsin(3θ) = sin(2θ + θ)\n= sin(2θ)cos(θ) + cos(2θ)sin(θ)\n= 2sinθcos²θ + (1−2sin²θ)sinθ\n= 2sinθ(1−sin²θ) + sinθ − 2sin³θ\n= 3sinθ − 4sin³θ\n\n具体例: θ=30°\nsin(90°) = 1\n3sin(30°) − 4sin³(30°) = 3(0.5) − 4(0.125) = 1.5 − 0.5 = 1 ✓',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-cos3',
      title: 'cos(3θ) = 4cos³θ − 3cosθ',
      content:
        '同様に:\ncos(3θ) = 4cos³θ − 3cosθ\n\n具体例: θ=60°\ncos(180°) = −1\n4cos³(60°) − 3cos(60°) = 4(0.125) − 3(0.5) = 0.5 − 1.5 = −1 ✓\n\n面白い対称性に気づきましたか？\nsin(3θ) = 3sinθ − 4sin³θ\ncos(3θ) = 4cos³θ − 3cosθ\n\n係数が 3 と 4 で逆順に現れます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'sin(3θ) = 3sinθ − 4sin³θ を使って答えてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(3×30°) = sin(90°) = 1。では sin(3×60°) = sin(180°) は？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: '−1', correct: false },
          { id: 'd', label: '0.5', correct: false },
        ],
        explanation:
          'sin(180°) = 0。\n\n公式で確認: 3sin(60°) − 4sin³(60°) = 3(0.866) − 4(0.650) = 2.598 − 2.598 = 0 ✓\n\nsin(60°) ≈ 0.866 のように中途半端な値でも、3倍角では0°, 90°, 180°のようなきれいな値になることがあります。',
      },
    },
    {
      id: 'alternate',
      title: 'チェビシェフ多項式',
      content:
        '2倍角 → 3倍角 → 4倍角...と続けると、cos(nθ) は cosθ の n次多項式で表せることがわかります。\n\ncos(2θ) = 2cos²θ − 1\ncos(3θ) = 4cos³θ − 3cosθ\ncos(4θ) = 8cos⁴θ − 8cos²θ + 1\n\nこれらを「チェビシェフ多項式」と呼びます。数値解析やフーリエ解析で重要な役割を果たします。\n\n三角関数の公式は孤立した事実ではなく、美しい数学の体系の一部です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'sin(3θ) = 3sinθ − 4sin³θ\ncos(3θ) = 4cos³θ − 3cosθ\n\n3倍角は2倍角の加法定理での展開から導けます。n倍角公式は美しいパターン（チェビシェフ多項式）に従います。\n\nよくある誤解: sin(3θ) = 3sin(θ) だと思うこと。sin は線形ではないので、3倍しても値は3倍にはなりません。\n\nアニメーションでθと3θの動きの違いをもう一度確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
