import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const deMoivreTutorial: Tutorial = {
  id: 'de-moivre',
  title: 'ド・モアブルの定理',
  description: '(cosθ + i sinθ)^n = cos(nθ) + i sin(nθ) の美しい定理',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '累乗の公式',
      content:
        'ド・モアブルの定理:\n\n(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)\n\n極形式の掛け算を繰り返し適用した結果です。\n\nn回掛けると偏角がn倍になる、というシンプルな法則です。',
      customScene: 'de-moivre-animation',
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
      id: 'proof',
      title: '直感的な証明',
      content:
        '極形式の掛け算では偏角が足し算されます。\n\nz × z = r²∠2θ\nz × z × z = r³∠3θ\n...\nzⁿ = rⁿ∠nθ\n\n特に |z| = 1（単位円上）のとき r = 1 なので:\n(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)',
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
      title: '具体例: n=3',
      content:
        'θ = 40° のとき、(cos 40° + i sin 40°)³ を計算しましょう。\n\nド・モアブルの定理より:\n= cos(3×40°) + i sin(3×40°)\n= cos 120° + i sin 120°\n= -1/2 + (√3/2)i\n\n展開する必要なし！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'z',
            vector: new Vector3(Math.cos(40 * Math.PI / 180), Math.sin(40 * Math.PI / 180), 0),
            color: '#ff4444',
            label: '∠40°',
          },
          {
            id: 'z3',
            vector: new Vector3(Math.cos(120 * Math.PI / 180), Math.sin(120 * Math.PI / 180), 0),
            color: '#44ff44',
            label: '∠120° (³乗)',
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
      id: 'trig-identity',
      title: '三角関数の公式を導く',
      content:
        'ド・モアブルの定理の応用の一つは、多倍角の公式の導出です。\n\nn = 2 のとき:\ncos 2θ + i sin 2θ = (cos θ + i sin θ)²\n= cos²θ - sin²θ + 2i sinθ cosθ\n\n実部と虚部を比較して:\ncos 2θ = cos²θ - sin²θ\nsin 2θ = 2 sinθ cosθ\n\n2倍角の公式が自然に出てきます！',
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
      id: 'quiz',
      title: '確認クイズ',
      content: 'ド・モアブルの定理を使って計算してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(cos π/6 + i sin π/6)⁶ = ?',
        options: [
          { id: 'a', label: 'i', correct: false },
          { id: 'b', label: '-1', correct: true },
          { id: 'c', label: '1', correct: false },
          { id: 'd', label: '-i', correct: false },
        ],
        explanation:
          'ド・モアブルの定理より cos(6×π/6) + i sin(6×π/6) = cos π + i sin π = -1 + 0i = -1 です。',
      },
    },
    {
      id: 'negative-n',
      title: '負の整数乗',
      content:
        'ド・モアブルの定理は負の整数でも成り立ちます。\n\n(cos θ + i sin θ)⁻ⁿ = cos(-nθ) + i sin(-nθ)\n= cos(nθ) - i sin(nθ)\n\nこれは cos(-α) = cos α、sin(-α) = -sin α を使った結果です。',
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
        'ド・モアブルの定理:\n\n・(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)\n・累乗すると偏角がn倍になる\n・多倍角の公式を導出できる\n・負の整数でも成立\n\n次はn乗根について学びましょう。',
      customScene: 'de-moivre-summary',
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
