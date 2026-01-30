import { Tutorial } from '../types';

export const falsePositiveTrapTutorial: Tutorial = {
  id: 'false-positive-trap',
  title: '【実践】偽陽性の罠',
  description: '検査や検定における偽陽性の問題をベイズの定理で理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '陽性 = 病気？',
      content:
        '健康診断で「陽性」と出ました。あなたは本当に病気でしょうか？\n\n検査の精度が99%でも、実は「陽性なのに病気でない」確率が意外と高いことがあります。\n\nこれが「偽陽性の罠」── 直感に反する確率の落とし穴です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'false-positive-trap-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '有病率と検査精度を変えて、陽性的中率がどう変わるか観察しましょう。\n\n有病率が低いとき、何が起きますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'false-positive-trap-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '具体的な計算',
      content:
        '有病率: 0.1%（1000人に1人が病気）\n検査精度: 感度99%、特異度99%\n\n10,000人を検査すると:\n・病気の人10人 → 99%が陽性 = 約10人が正しく陽性\n・健康な人9,990人 → 1%が誤って陽性 = 約100人が偽陽性\n\n陽性110人中、本当に病気なのは10人だけ。\n陽性的中率 = 10/110 ≈ 9%\n\n99%の精度なのに、陽性と出ても91%は健康！',
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
      title: 'ベイズの定理',
      content:
        'この問題はベイズの定理で解けます:\n\nP(病気|陽性) = P(陽性|病気) × P(病気) / P(陽性)\n\n事前確率（有病率）が低いと、事後確率（陽性的中率）も低くなります。\n\n直感的には: 稀な病気の検査では「偽陽性の数 >> 真の陽性の数」になるからです。',
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
        '有病率が10%に上がると、同じ99%精度の検査の陽性的中率は約何%？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '有病率10%、感度99%、特異度99%の陽性的中率は？',
        options: [
          { id: 'a', label: '約50%', correct: false },
          { id: 'b', label: '約92%', correct: true },
          { id: 'c', label: '約99%', correct: false },
          { id: 'd', label: '約10%', correct: false },
        ],
        explanation:
          '正解は「約92%」です。\n\n1000人中: 病気100人→99人陽性、健康900人→9人偽陽性\n陽性的中率 = 99/(99+9) ≈ 92%\n\n有病率が上がると偽陽性の問題は大幅に改善されます。\nだからスクリーニング検査はハイリスク群に対して行うのが効果的なのです。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：多重検定と偽発見',
      content:
        '科学研究でも同じ問題が起きます。\n\n20個の仮説を同時に検定すると（α=0.05）、全てが真のH₀でも平均1個は偽陽性になります。\n\nゲノム研究では何万もの遺伝子を同時に検定するため、偽発見率の制御が不可欠です。\n\nこれは「多重比較問題」と呼ばれ、後の実践編で詳しく学びます。',
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
        '偽陽性の罠: 稀な事象の検査では、検査精度が高くても陽性的中率は低くなりうる。\n\nベイズの定理: 事前確率（有病率）が結果の解釈に大きく影響する。\n\n実務への影響:\n・スクリーニング検査はリスク群に絞る\n・陽性結果は再検査で確認する\n・p値の解釈にも同様の注意が必要\n\n確率の直感は信用できない ── だから計算が大切なのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'false-positive-trap-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
