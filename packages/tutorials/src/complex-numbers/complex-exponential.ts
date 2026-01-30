import { Tutorial } from '../types';

export const complexExponentialTutorial: Tutorial = {
  id: 'complex-exponential',
  title: '複素指数関数',
  description: 'e^(a+bi) = e^a(cosb + i sinb) の意味と応用',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '一般の複素指数',
      content:
        'オイラーの公式は e^(iθ) の場合でした。では e^(a+bi) は？\n\ne^(a+bi) = e^a × e^(ib) = e^a(cos b + i sin b)\n\n指数法則で実部と虚部を分離できます。\n\ne^a が絶対値（拡大率）、b が偏角（回転角）です。',
      customScene: 'complex-exponential-animation',
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
      id: 'spiral',
      title: '螺旋運動',
      content:
        'z(t) = e^((a+bi)t) を考えると:\n\n|z(t)| = e^(at)（指数的に拡大/縮小）\narg(z(t)) = bt（等速回転）\n\na > 0: 外側に向かう螺旋\na < 0: 内側に向かう螺旋\na = 0: 円運動（単位円上）\n\nこれは減衰振動や増幅振動のモデルです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff33', plane: 'xy' }],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'properties',
      title: '性質',
      content:
        '複素指数関数の性質:\n\n・e^(z₁+z₂) = e^(z₁) × e^(z₂)\n・e^z ≠ 0（常にゼロにならない）\n・|e^(iθ)| = 1（純虚数指数の場合）\n・e^(z+2πi) = e^z（周期2πi）\n\n最後の性質は重要: 複素指数関数は虚数方向に周期2πiを持ちます。',
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
      title: '複素指数を体験',
      content:
        'aとbを変化させて、e^(a+bi)がどう変わるか観察してみましょう。\n\naは絶対値（原点からの距離）、bは偏角（角度）を制御します。',
      customScene: 'complex-exponential-interactive',
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
          { name: 'a', min: -2, max: 2, step: 0.1, initial: 0 },
          { name: 'b', min: 0, max: 6.28, step: 0.1, initial: 0 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '複素指数関数の計算を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '|e^(3+4i)| = ?',
        options: [
          { id: 'a', label: '5', correct: false },
          { id: 'b', label: 'e³', correct: true },
          { id: 'c', label: 'e⁴', correct: false },
          { id: 'd', label: 'e⁷', correct: false },
        ],
        explanation:
          '|e^(3+4i)| = |e³ × e^(4i)| = e³ × |e^(4i)| = e³ × 1 = e³ です。純虚数部分の絶対値は1です。',
      },
    },
    {
      id: 'i-to-i',
      title: 'iのi乗',
      content:
        '驚くべき結果: i^i は実数です！\n\ni = e^(iπ/2) なので:\ni^i = (e^(iπ/2))^i = e^(i²π/2) = e^(-π/2) ≈ 0.2079\n\n虚数の虚数乗が実数になる！複素指数関数の不思議な世界です。',
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
        '複素指数関数のポイント:\n\n・e^(a+bi) = e^a(cos b + i sin b)\n・実部aが拡大率、虚部bが回転角\n・螺旋運動を記述できる\n・周期2πiを持つ\n・i^i = e^(-π/2) ≈ 0.2079（実数！）\n\n次は複素数と二次方程式の関係を学びましょう。',
      customScene: 'complex-exponential-summary',
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
