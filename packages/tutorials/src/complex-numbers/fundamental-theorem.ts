import { Tutorial } from '../types';

export const fundamentalTheoremTutorial: Tutorial = {
  id: 'fundamental-theorem',
  title: '代数学の基本定理',
  description: 'n次方程式は複素数の範囲で必ずn個の解を持つ',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '究極の定理',
      content:
        '代数学の基本定理:\n\n複素数係数のn次多項式方程式は、複素数の範囲で（重複を含めて）ちょうどn個の解を持つ。\n\nつまり、複素数まで拡張すれば、すべての多項式方程式が解けるのです。',
      customScene: 'fundamental-theorem-animation',
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
      id: 'examples',
      title: '具体例',
      content:
        '・1次: x + 1 = 0 → 1個の解 x = -1\n・2次: x² + 1 = 0 → 2個の解 x = ±i\n・3次: x³ - 1 = 0 → 3個の解（1のn乗根）\n・4次: x⁴ - 1 = 0 → 4個の解 1, i, -1, -i\n\n次数がn → 解はちょうどn個。例外なし！',
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
      id: 'factorization',
      title: '因数分解',
      content:
        '基本定理の帰結として、n次多項式は必ず1次式の積に分解できます:\n\naₙ(x-α₁)(x-α₂)...(x-αₙ) = 0\n\nα₁, α₂, ..., αₙ が解（重複を含む）。\n\n実数の範囲では因数分解できなかった多項式も、複素数なら完全に分解できます。',
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
      id: 'closed',
      title: '代数的閉体',
      content:
        '複素数ℂは「代数的閉体」と呼ばれます。\n\nこれは「多項式方程式の解がℂの中に必ず存在する」ことを意味します。\n\nℝ（実数）は閉じていません: x² + 1 = 0 の解がℝにないからです。\n\nℂはℝを拡張した最小の代数的閉体です。これ以上の拡張は不要です！',
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
      content: '基本定理の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '5次方程式 x⁵ + x + 1 = 0 の解は複素数の範囲でいくつ？',
        options: [
          { id: 'a', label: '1個', correct: false },
          { id: 'b', label: '3個', correct: false },
          { id: 'c', label: '5個', correct: true },
          { id: 'd', label: '不明', correct: false },
        ],
        explanation:
          '代数学の基本定理により、5次方程式はちょうど5個の解（重複含む）を持ちます。実数解と複素数解を合わせて5個です。',
      },
    },
    {
      id: 'history',
      title: '歴史',
      content:
        'この定理は18世紀にガウスによって最初に証明されました（1799年の博士論文）。\n\nガウスは生涯で4つの異なる証明を与えました。\n\n証明には位相的な議論が必要で、純粋に代数的には証明できません。これが「代数学の基本定理」という名前なのに解析的証明を要する、という面白い事実です。',
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
        '代数学の基本定理:\n\n・n次方程式は複素数の範囲でn個の解を持つ\n・多項式は1次式の積に完全に分解できる\n・ℂは代数的閉体（これ以上の拡張は不要）\n・ガウスが証明（1799年）\n\n次は複素数の全体をまとめましょう。',
      customScene: 'fundamental-theorem-summary',
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
