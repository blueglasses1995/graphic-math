import { Tutorial } from '../types';

export const quantumIntroTutorial: Tutorial = {
  id: 'quantum-intro',
  title: '【実践】量子力学の入口',
  description: '量子力学における複素数の本質的な役割',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: 'なぜ量子力学に複素数？',
      content:
        '量子力学では、粒子の状態を「波動関数」ψ(x, t) で記述します。\n\nこの波動関数は複素数値です。実数ではダメなのです。\n\nシュレーディンガー方程式:\niℏ ∂ψ/∂t = Ĥψ\n\n左辺に i が現れます。量子力学の基本方程式に虚数単位が不可欠なのです。',
      customScene: 'quantum-intro-animation',
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
      id: 'wave-function',
      title: '波動関数と確率',
      content:
        '波動関数 ψ(x) は複素数ですが、観測量は実数です。\n\n|ψ(x)|² = ψ(x) × ψ̄(x)\n\nこの絶対値の2乗が「粒子を位置xで見つける確率密度」になります。\n\n複素数の絶対値（モジュラス）がここで本質的な役割を果たします。',
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
      id: 'superposition',
      title: '重ね合わせと干渉',
      content:
        '量子力学の「重ね合わせ」は複素数の足し算です。\n\nψ = ψ₁ + ψ₂\n\n|ψ|² = |ψ₁|² + |ψ₂|² + 2Re(ψ₁ψ̄₂)\n\n最後の項が「干渉項」です。複素数の位相が干渉パターンを決めます。\n\n実数だけでは干渉は表現できても、量子力学の全体構造は記述できません。',
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
      id: 'phase',
      title: '位相の重要性',
      content:
        'ψ = re^(iφ) と書くと、r が振幅、φ が位相です。\n\n・振幅 r は確率に関連（|ψ|² = r²）\n・位相 φ は干渉パターンに影響\n\n全体的な位相（global phase）は観測に影響しませんが、相対的な位相差は物理的な結果を変えます。\n\nこれが量子コンピュータの量子ゲートの原理でもあります。',
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
      content: '量子力学での複素数の役割を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '波動関数 ψ から粒子の存在確率密度を求めるには？',
        options: [
          { id: 'a', label: 'Re(ψ) を取る', correct: false },
          { id: 'b', label: '|ψ|² を計算する', correct: true },
          { id: 'c', label: 'Im(ψ) を取る', correct: false },
          { id: 'd', label: 'ψ² を計算する', correct: false },
        ],
        explanation:
          '確率密度は |ψ|² = ψψ̄ です。複素数の「絶対値の2乗」を取ることで、複素数値から実数の確率が得られます。',
      },
    },
    {
      id: 'qubit',
      title: '量子ビットと複素数',
      content:
        '量子ビット（qubit）の状態:\n\n|ψ⟩ = α|0⟩ + β|1⟩\n\nα, β は複素数で |α|² + |β|² = 1\n\nこれは複素数の2次元空間（ℂ²）の単位球面（ブロッホ球）上の点です。\n\n量子コンピュータの演算は、この複素数ベクトルの回転操作に他なりません。',
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
        '量子力学と複素数:\n\n・波動関数は本質的に複素数値\n・シュレーディンガー方程式に i が登場\n・|ψ|² が確率密度（実数の観測量）\n・位相が干渉パターンを決定\n・量子ビット = ℂ² の単位ベクトル\n\n複素数は量子力学の言語そのものです。',
      customScene: 'quantum-intro-summary',
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
