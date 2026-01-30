import { Tutorial } from '../types';

export const epidemicSpreadTutorial: Tutorial = {
  id: 'epidemic-spread',
  title: '【実践】感染症の拡大',
  description: '感染症の拡大を指数関数とロジスティック関数でモデル化する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '1人から始まるパンデミック',
      content:
        '1人の感染者が平均2.5人に感染させる場合、10世代で何人に？2.5¹⁰ ≈ 9,536人。指数的拡大の初期段階では対策が間に合わないことがあります。感染が広がるアニメーションを見てみましょう。',
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
      title: '基本再生産数を変えてみよう',
      content:
        'R₀（基本再生産数）を変えて、感染拡大の速さがどう変わるか観察しましょう。R₀>1で拡大、R₀<1で収束します。',
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
      title: '感染拡大の初期モデル',
      content:
        '初期段階（全員が未感染の場合）：\nI(t) = I₀ · e^((R₀-1)·γ·t)\n\n• I₀: 初期感染者数\n• R₀: 基本再生産数\n• γ: 回復率（1/感染期間）\n\nR₀ > 1 のとき指数的に拡大\nR₀ < 1 のとき指数的に収束\nR₀ = 1 が閾値（流行の分かれ目）',
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
      title: 'SIRモデル',
      content:
        'より現実的なSIRモデル：\n• S(感受性)：まだ感染していない人\n• I(感染)：現在感染中の人\n• R(回復)：回復して免疫を持つ人\n\n感染が進むとSが減り、新規感染者が減る。これはロジスティック的な飽和を生みます。集団免疫はSが十分に減って新規感染が鈍化した状態です。',
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
      title: '考えてみよう',
      content: 'R₀=4の感染症で、集団免疫に必要な免疫保持率は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'R₀=4で集団免疫に必要な免疫率 1-1/R₀ は？',
        options: [
          { id: 'a', label: '25%', correct: false },
          { id: 'b', label: '50%', correct: false },
          { id: 'c', label: '75%', correct: true },
          { id: 'd', label: '90%', correct: false },
        ],
        explanation:
          '集団免疫閾値 = 1 - 1/R₀ = 1 - 1/4 = 3/4 = 75%。人口の75%が免疫を持てば、実効再生産数が1を下回り、流行が収束します。',
      },
    },
    {
      id: 'alternate',
      title: '指数的成長を止める',
      content:
        '感染症対策の本質は「指数的成長を抑えること」です。R₀を実効再生産数Rₑに下げる方法：\n• マスク・手洗い：接触感染率を下げる\n• 社会的距離：接触機会を減らす\n• ワクチン：感受性集団を減らす\n\nすべてがR₀の指数関数モデルの理解に基づいています。',
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
        '感染症の拡大：\n• 初期は指数的成長 I₀·e^((R₀-1)γt)\n• R₀>1で流行、R₀<1で収束\n• SIRモデルでロジスティック的飽和\n• 集団免疫閾値 = 1-1/R₀\n• 対策は実効再生産数を下げること\n\n数学で感染症を理解し、対策を考えられます。',
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
