import { Tutorial } from '../types';

export const sigmoidTutorial: Tutorial = {
  id: 'sigmoid',
  title: '【実践】シグモイド関数',
  description: 'ロジスティック関数 σ(x) = 1/(1+e^(-x)) と対数の関係を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '0と1の間を滑らかにつなぐ',
      content:
        'σ(x) = 1/(1+e^(-x))。x = -∞ で0、x = +∞ で1に近づくS字カーブ。機械学習で確率を表現するのに使われます。この関数の逆関数が対数です。',
      customScene: 'sigmoid-animation',
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
        'x を変えて σ(x) の値を確認してください。x = 0 で σ = 0.5、x = 2 で約0.88、x = -2 で約0.12 です。',
      customScene: 'sigmoid-interactive',
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
      title: 'ロジットは対数',
      content:
        'シグモイドの逆関数をロジット関数といいます。\n\nlogit(p) = ln(p/(1-p))\n\n確率 p を「対数オッズ」に変換します。p = 0.5 → logit = 0、p = 0.9 → logit ≈ 2.2。',
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
      title: 'ロジスティック回帰',
      content:
        'ロジスティック回帰は ln(p/(1-p)) = β₀ + β₁x というモデル。左辺が対数なので、右辺は -∞ から +∞ の実数を自由にとれます。これをシグモイドに通すと 0〜1 の確率に変換されます。',
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
        'σ(0) の値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'σ(0) = 1/(1+e⁰) はいくつ？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '0.5', correct: true },
          { id: 'c', label: '1', correct: false },
          { id: 'd', label: 'e', correct: false },
        ],
        explanation:
          'σ(0) = 1/(1+e⁰) = 1/(1+1) = 1/2 = 0.5。シグモイドの中心点です。',
      },
    },
    {
      id: 'alternate',
      title: '交差エントロピー損失',
      content:
        '機械学習の分類問題では交差エントロピー損失を使います。\n\nL = -[y×ln(p) + (1-y)×ln(1-p)]\n\nここでも対数が登場。確率が0や1に近いほど対数が大きくなり、自信のない予測を強く罰します。',
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
        'シグモイド関数の逆関数がロジット（対数オッズ）。実数全体を確率 [0,1] に変換します。機械学習の分類、ロジスティック回帰、交差エントロピーなど、対数は現代AIの基盤技術です。\n\nシグモイドのカーブを触って確かめてください。',
      customScene: 'sigmoid-summary',
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
