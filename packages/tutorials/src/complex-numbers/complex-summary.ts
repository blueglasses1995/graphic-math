import { Tutorial } from '../types';

export const complexSummaryTutorial: Tutorial = {
  id: 'complex-summary',
  title: '複素数のまとめ',
  description: 'これまで学んだ複素数の知識を総復習する',
  category: 'complex-numbers',
  steps: [
    {
      id: 'basics',
      title: '基本概念',
      content:
        '複素数 z = a + bi\n\n・i² = -1（虚数単位の定義）\n・a = Re(z)（実部）、b = Im(z)（虚部）\n・実数はb=0の複素数\n・ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ',
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
      id: 'operations',
      title: '四則演算',
      content:
        '加法: (a+bi) + (c+di) = (a+c) + (b+d)i\n乗法: (a+bi)(c+di) = (ac-bd) + (ad+bc)i\n共役: z̄ = a - bi\n除法: z₁/z₂ = z₁z̄₂ / |z₂|²\n\n加法はベクトルの足し算、乗法は回転と拡大。',
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
      id: 'polar',
      title: '極形式',
      content:
        '直交形式: z = a + bi\n極形式: z = r(cos θ + i sin θ) = re^(iθ)\n\n・r = |z| = √(a²+b²)（絶対値）\n・θ = arg(z)（偏角）\n\n掛け算: r₁e^(iθ₁) × r₂e^(iθ₂) = r₁r₂e^(i(θ₁+θ₂))\n割り算: r₁e^(iθ₁) / r₂e^(iθ₂) = (r₁/r₂)e^(i(θ₁-θ₂))',
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
      id: 'theorems',
      title: '重要な定理',
      content:
        '・ド・モアブル: (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)\n・オイラー: e^(iθ) = cos θ + i sin θ\n・オイラーの等式: e^(iπ) + 1 = 0\n・代数学の基本定理: n次方程式はn個の解を持つ',
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
      title: '総合クイズ',
      content: 'これまでの知識を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'e^(iπ/4) を直交形式で表すと？',
        options: [
          { id: 'a', label: '1/2 + (√3/2)i', correct: false },
          { id: 'b', label: '√2/2 + (√2/2)i', correct: true },
          { id: 'c', label: '√3/2 + (1/2)i', correct: false },
          { id: 'd', label: '1 + i', correct: false },
        ],
        explanation:
          'e^(iπ/4) = cos(π/4) + i sin(π/4) = √2/2 + (√2/2)i です。π/4 = 45° の三角関数の値を使います。',
      },
    },
    {
      id: 'applications-preview',
      title: '応用の世界へ',
      content:
        '複素数は純粋数学だけでなく、多くの分野で活躍します:\n\n・フラクタル（マンデルブロ集合、ジュリア集合）\n・電気工学（交流回路の解析）\n・信号処理（フーリエ変換）\n・量子力学（波動関数）\n・制御理論（伝達関数）\n\nこれらの実践チュートリアルで深く学びましょう。',
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
      title: '学びを終えて',
      content:
        'x² = -1 という「不可能」から始まった旅は、数学の美しい世界への入口でした。\n\n複素数は:\n・方程式をすべて解ける世界（代数的閉体）\n・回転を数で表現する道具\n・指数関数と三角関数を結ぶ架け橋\n\nリチャード・ファインマンの言葉:\n「虚数は我々の想像以上に実在的である」\n\n実践チュートリアルで、さらに複素数の力を体験してください。',
      customScene: 'complex-summary-summary',
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
  ],
};
