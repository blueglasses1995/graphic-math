import { Tutorial } from '../types';

export const logEquationAppTutorial: Tutorial = {
  id: 'log-equation-app',
  title: '【実践】対数方程式の応用',
  description: '実生活の問題を対数方程式で解く方法を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '何年で2倍になる？',
      content:
        '年利3%の複利で預金が2倍になるのは何年後？ 1.03^n = 2 → n = log(2)/log(1.03) ≈ 23.4年。対数方程式は「いつ？」を答えます。',
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
      title: '触ってみよう',
      content:
        '利率を変えて、元本が2倍になるまでの年数がどう変わるか観察してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '放射性崩壊',
      content:
        '半減期 T で崩壊する放射性物質。n 回の半減期後に残る量は (1/2)^n。「何回の半減期で1%以下になるか」→ (1/2)^n < 0.01 → n > log(0.01)/log(0.5) ≈ 6.64。',
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
      title: 'pH の計算',
      content:
        'pH = -log₁₀[H⁺]。水素イオン濃度 [H⁺] = 10⁻⁷ mol/L なら pH = 7（中性）。[H⁺] = 10⁻³ なら pH = 3（酸性）。対数方程式で濃度とpHを相互変換できます。',
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
        '人口が毎年2%ずつ増える国。人口が3倍になるのは何年後？（log(3) ≈ 0.477, log(1.02) ≈ 0.0086）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '人口が3倍になるのは約何年後？',
        options: [
          { id: 'a', label: '約35年', correct: false },
          { id: 'b', label: '約55年', correct: true },
          { id: 'c', label: '約100年', correct: false },
          { id: 'd', label: '約150年', correct: false },
        ],
        explanation:
          '1.02^n = 3 → n = log(3)/log(1.02) = 0.477/0.0086 ≈ 55.5年です。',
      },
    },
    {
      id: 'alternate',
      title: '連続的な成長',
      content:
        '連続複利の場合: A = A₀ × e^(rt)\n\n2倍になる時間: e^(rt) = 2 → t = ln(2)/r\n\n年利5%なら t = ln(2)/0.05 ≈ 13.9年。ln(2) ≈ 0.693 は覚えておくと便利です。',
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
        '対数方程式は「いつ目標値に達するか」を求める強力なツール。金融、化学、人口動態など幅広い応用があります。\n\n条件を変えていろいろな問題を解いてみてください。',
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
