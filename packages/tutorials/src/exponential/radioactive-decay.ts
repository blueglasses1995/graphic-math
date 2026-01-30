import { Tutorial } from '../types';

export const radioactiveDecayTutorial: Tutorial = {
  id: 'radioactive-decay',
  title: '【実践】放射性崩壊',
  description: '放射性物質の崩壊を指数関数で計算する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '原子が崩壊する',
      content:
        '放射性原子は自発的に崩壊して別の元素に変わります。いつ崩壊するかは予測できませんが、大量の原子の統計的な振る舞いは指数関数で正確に記述できます。崩壊のアニメーションを見てみましょう。',
      customScene: "radioactive-decay-animation",
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
      title: '崩壊をシミュレーション',
      content:
        '放射性物質の種類（半減期）を選んで、残存量が時間とともにどう変化するか観察しましょう。',
      customScene: "radioactive-decay-interactive",
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '放射性崩壊の計算',
      content:
        'N(t) = N₀ · e⁻λᵗ\n\n• λ（ラムダ）: 崩壊定数\n• λ = ln2/T₁/₂\n\n例：ヨウ素131（半減期8日）\n100gが30日後には？\nλ = ln2/8 ≈ 0.0866/日\nN(30) = 100 · e⁻⁰·⁰⁸⁶⁶ˣ³⁰ = 100 · e⁻²·⁶ ≈ 7.4g\n\n約7.4%が残ります。',
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
      title: '炭素年代測定の実践',
      content:
        '考古学で発掘された木材の炭素14が、現在の生きている木の60%だった。いつ頃のもの？\n\n0.6 = e⁻λᵗ\nln(0.6) = -λt\nt = -ln(0.6)/λ = -(-0.511)/(0.000121)\nt ≈ 4,224年前\n\n約4,200年前、紀元前2200年頃のものと推定されます。',
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
      title: '計算してみよう',
      content: '半減期6時間の物質が、元の量の1/16になるのは何時間後？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '半減期6時間で1/16になるのは？',
        options: [
          { id: 'a', label: '18時間後', correct: false },
          { id: 'b', label: '24時間後', correct: true },
          { id: 'c', label: '48時間後', correct: false },
          { id: 'd', label: '96時間後', correct: false },
        ],
        explanation:
          '1/16 = (1/2)⁴ なので4回の半減期。4×6 = 24時間後です。2⁴ = 16 であることを使います。',
      },
    },
    {
      id: 'alternate',
      title: '放射性廃棄物の管理',
      content:
        '原子力発電所の使用済み燃料には、半減期が数万年の物質が含まれます。安全なレベルまで下がるには半減期の10倍以上かかります。プルトニウム239（半減期24,000年）なら24万年以上。指数的減衰の理解は原子力政策の議論に不可欠です。',
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
        '放射性崩壊：\n• N(t) = N₀·e⁻λᵗ\n• λ = ln2/T₁/₂\n• 半減期n回で(1/2)ⁿに減少\n• 炭素年代測定に応用\n• 放射性廃棄物管理の基礎\n\n指数的減衰の最も重要な実用例の一つです。',
      customScene: "radioactive-decay-summary",
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
