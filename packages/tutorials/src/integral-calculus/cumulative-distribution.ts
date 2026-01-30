import { Tutorial } from '../types';

export const cumulativeDistributionTutorial: Tutorial = {
  id: 'cumulative-distribution',
  title: '累積分布のイメージ',
  description: '確率密度関数を積分して累積分布関数を得るイメージ',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '確率を「面積」で見る',
      content:
        '確率密度関数 (PDF) のグラフの下の面積が「確率」を表します。\n\n左端から x まで面積を積み上げたものが累積分布関数 (CDF) です。\n\nCDF は「x 以下になる確率」を表します。\n\nアニメーションで PDF から CDF が生まれる様子を見てみましょう。',
      customScene: 'cumulative-distribution-animation',
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
        'x の位置を動かしてみてください。\n\nPDF の色付き領域（面積）と CDF の値が連動していることが分かります。\n\nCDF は常に 0 から 1 に向かって増加します。',
      customScene: 'cumulative-distribution-interactive',
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
      title: 'PDF と CDF の関係',
      content:
        'F(x) = ∫₋∞ˣ f(t) dt\n\nここで f(t) は確率密度関数、F(x) は累積分布関数です。\n\nFTC より F\'(x) = f(x)、つまり CDF を微分すると PDF に戻ります。\n\n全区間の面積は ∫₋∞∞ f(t) dt = 1（確率の合計は必ず 1）。',
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
      title: '正規分布の例',
      content:
        '正規分布 N(0,1) の PDF は f(x) = (1/√2π)·e^(-x²/2)。\n\nこの積分（CDF）には初等関数での閉じた式がありません。\n\nでも数値的には計算できます：\nF(0) = 0.5（左半分の面積）\nF(1) ≈ 0.841（1σ 以下の確率 84.1%）\nF(2) ≈ 0.977（2σ 以下の確率 97.7%）\n\n積分で「確率」が計算できるのです。',
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
        'PDF が [0, 2] で一様（高さ一定）の場合、CDF F(1) はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '一様分布 U(0,2) で F(1) は？',
        options: [
          { id: 'a', label: '0.25', correct: false },
          { id: 'b', label: '0.5', correct: true },
          { id: 'c', label: '0.75', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          '正解は 0.5 です。\n\n一様分布 U(0,2) の PDF は f(x) = 1/2（0 ≤ x ≤ 2）。\nF(1) = ∫₀¹ (1/2) dx = 1/2。区間の半分まで来たので確率も半分です。',
      },
    },
    {
      id: 'alternate',
      title: '区間の確率',
      content:
        'P(a ≤ X ≤ b) = F(b) - F(a) = ∫ₐᵇ f(x) dx\n\n「ある区間に入る確率」は CDF の差、つまり定積分で計算できます。\n\nこれは面積の引き算に対応します。\n\n積分が確率論の基盤を支えているのです。',
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
        'CDF = PDF の積分：F(x) = ∫₋∞ˣ f(t) dt\nPDF = CDF の微分：f(x) = F\'(x)\n\n確率は「面積」、累積確率は「積み上げた面積」です。\n\nスライダーを動かして PDF と CDF の関係を確かめてみてください。',
      customScene: 'cumulative-distribution-summary',
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
