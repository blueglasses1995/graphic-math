import { Tutorial } from '../types';

export const acCircuitTutorial: Tutorial = {
  id: 'ac-circuit',
  title: '【実践】交流回路',
  description: '複素数（インピーダンス）を使った交流回路の解析',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: 'なぜ電気工学に複素数？',
      content:
        '交流（AC）は V(t) = V₀ cos(ωt) という正弦波です。\n\nオイラーの公式を使うと:\nV₀ cos(ωt) = Re(V₀ e^(iωt))\n\n複素数表現にすると、微分方程式が代数方程式になり、計算が劇的に簡単になります。\n\nこれが電気工学で複素数が不可欠な理由です。',
      customScene: 'ac-circuit-animation',
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
      id: 'impedance',
      title: 'インピーダンス',
      content:
        '抵抗・コイル・コンデンサを複素数で統一的に扱えます:\n\n・抵抗R: Z_R = R（実数）\n・コイルL: Z_L = iωL（純虚数、正）\n・コンデンサC: Z_C = 1/(iωC) = -i/(ωC)（純虚数、負）\n\nこの複素数の「抵抗」をインピーダンスと呼びます。',
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
      id: 'ohm-complex',
      title: '複素オームの法則',
      content:
        'V = IZ（複素数版のオームの法則）\n\n直流回路の V = IR と同じ形式！\n\n複素数のおかげで、位相のずれも含めて1つの式で表現できます。\n\n|Z| は電圧と電流の振幅の比、arg(Z) は位相差を表します。',
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
      id: 'rlc',
      title: 'RLC直列回路',
      content:
        'R, L, C が直列に接続されたRLC回路:\n\nZ = R + iωL + 1/(iωC)\n= R + i(ωL - 1/(ωC))\n\n共振条件: ωL = 1/(ωC) のとき虚部が0になり、Z = R（純抵抗）。\n\nこのとき ω = 1/√(LC) が共振周波数です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'ω', min: 0.1, max: 10, step: 0.1, initial: 1 },
          { name: 'R', min: 0.1, max: 5, step: 0.1, initial: 1 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: 'インピーダンスの理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'コンデンサのインピーダンス Z_C = 1/(iωC) の位相は？',
        options: [
          { id: 'a', label: '0°（電圧と電流が同位相）', correct: false },
          { id: 'b', label: '+90°（電圧が電流より進む）', correct: false },
          { id: 'c', label: '-90°（電圧が電流より遅れる）', correct: true },
          { id: 'd', label: '180°（逆位相）', correct: false },
        ],
        explanation:
          '1/(iωC) = -i/(ωC) なので位相は-90°です。コンデンサでは電圧が電流より90°遅れます。「コンデンサは電流が先」と覚えましょう。',
      },
    },
    {
      id: 'phasor',
      title: 'フェーザ図',
      content:
        'フェーザ図は、正弦波を複素平面上のベクトルとして表したものです。\n\n各素子の電圧フェーザ:\n・V_R: 実軸方向（電流と同位相）\n・V_L: 虚軸正方向（電流より90°進む）\n・V_C: 虚軸負方向（電流より90°遅れる）\n\nこれらのベクトルの和が全体の電圧フェーザになります。',
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
        '交流回路と複素数:\n\n・インピーダンス Z で抵抗・コイル・コンデンサを統一\n・V = IZ（複素オームの法則）\n・|Z| = 振幅比、arg(Z) = 位相差\n・共振: ωL = 1/(ωC) で虚部が消える\n・フェーザ図で回路の振る舞いを可視化\n\n複素数は電気工学の必須ツールです。',
      customScene: 'ac-circuit-summary',
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
