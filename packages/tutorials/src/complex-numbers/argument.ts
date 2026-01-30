import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const argumentTutorial: Tutorial = {
  id: 'argument',
  title: '偏角（アーギュメント）',
  description: '複素数の偏角の定義とarctan2による計算',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '角度で方向を表す',
      content:
        '複素数 z = a + bi の偏角（argument）は、正の実軸から z への角度 θ です。\n\narg(z) = θ\n\nここで a = |z| cos θ、b = |z| sin θ です。\n\n偏角は複素数の「方向」を表します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'z',
            vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0),
            color: '#ff4444',
            label: 'θ = 60°',
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'calculation',
      title: '偏角の計算',
      content:
        'tan θ = b/a なので、θ = arctan(b/a) ... と言いたいところですが注意が必要です。\n\narctan は -π/2 〜 π/2 の範囲しか返しません。象限を考慮する必要があります。\n\nそこで atan2(b, a) を使います。これは4つの象限すべてに対応し、-π < θ ≦ π を返します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'q1', vector: new Vector3(1, 1, 0), color: '#ff4444', label: '45°' },
          { id: 'q2', vector: new Vector3(-1, 1, 0), color: '#44ff44', label: '135°' },
          { id: 'q3', vector: new Vector3(-1, -1, 0), color: '#4444ff', label: '-135°' },
          { id: 'q4', vector: new Vector3(1, -1, 0), color: '#ffff44', label: '-45°' },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'principal-value',
      title: '主値',
      content:
        '偏角は 2π の倍数だけ不定です。例えば 45° と 405° は同じ方向です。\n\n-π < θ ≦ π の範囲の偏角を「主値」（principal value）と呼び、Arg(z) と書きます。\n\n一般の偏角は arg(z) = Arg(z) + 2nπ（n は整数）です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '偏角を体験',
      content:
        '点をドラッグして、偏角がどう変化するか観察してみましょう。\n\n正の実軸（右方向）からの反時計回りの角度が偏角です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: { type: 'angle-slider', initialAngle: 0 },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '偏角を求めてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'z = -1 + i の偏角 Arg(z) は？',
        options: [
          { id: 'a', label: 'π/4 (45°)', correct: false },
          { id: 'b', label: '3π/4 (135°)', correct: true },
          { id: 'c', label: '-π/4 (-45°)', correct: false },
          { id: 'd', label: 'π/2 (90°)', correct: false },
        ],
        explanation:
          'z = -1 + i は第2象限にあります。atan2(1, -1) = 3π/4 = 135° です。',
      },
    },
    {
      id: 'multiplication-arg',
      title: '掛け算と偏角',
      content:
        'arg(z₁ × z₂) = arg(z₁) + arg(z₂)\n\n掛け算すると偏角が「足し算」されます。これが「掛け算 = 回転」の正体です。\n\n例: arg(i) = π/2 なので、i を掛けると π/2（90°）だけ回転します。',
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
        '偏角（アーギュメント）のポイント:\n\n・arg(z) = 正の実軸からの角度\n・atan2(b, a) で計算\n・主値 Arg(z) は -π < θ ≦ π\n・掛け算 → 偏角の足し算\n\n絶対値と偏角がわかれば、複素数を「極形式」で表せます。次はそれを学びましょう。',
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
