import { Tutorial } from '../types';

export const logisticGrowthTutorial: Tutorial = {
  id: 'logistic-growth',
  title: 'ロジスティック成長',
  description: '上限のある成長を記述するロジスティック関数を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: 'S字カーブの世界',
      content:
        'SNSのユーザー数は最初ゆっくり増え、途中で爆発的に増え、やがて飽和する。このS字型の曲線がロジスティック成長です。指数的成長に「天井」を加えたモデルのアニメーションを見てみましょう。',
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
      title: 'パラメータを変えてみよう',
      content:
        '成長率r、環境収容力K、初期値N₀を変えて、S字カーブがどう変形するか観察しましょう。Kが大きいほど天井が高く、rが大きいほど急峻なS字になります。',
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
      title: 'ロジスティック方程式',
      content:
        'P(t) = K / (1 + ((K-P₀)/P₀)·e⁻ʳᵗ)\n\n• K: 環境収容力（上限）\n• P₀: 初期人口\n• r: 内在成長率\n\n微分方程式で書くと：\ndP/dt = rP(1 - P/K)\n\nP << K のとき：ほぼ指数的成長\nP → K のとき：成長が鈍化し停止',
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
      title: 'S字カーブの3つのフェーズ',
      content:
        '1. 立ち上がり期：P << K\n   ほぼ指数的成長。まだ余裕がたくさんある\n\n2. 急成長期：P ≈ K/2 付近\n   成長率が最大。変曲点がここにある\n\n3. 飽和期：P → K\n   天井に近づき成長が鈍化\n\n変曲点（P=K/2）で成長が最も速い、というのが重要なポイントです。',
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
      content: 'ロジスティック成長で、成長速度が最大になるのはPがいくつのとき？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '環境収容力Kのロジスティックモデルで、成長速度dP/dtが最大になるPの値は？',
        options: [
          { id: 'a', label: 'P = K/4', correct: false },
          { id: 'b', label: 'P = K/2', correct: true },
          { id: 'c', label: 'P = K', correct: false },
          { id: 'd', label: 'P = 0', correct: false },
        ],
        explanation:
          'dP/dt = rP(1-P/K) は P=K/2 のとき最大値 rK/4 をとります。これはS字カーブの変曲点にあたります。P=0やP=Kでは成長速度は0です。',
      },
    },
    {
      id: 'alternate',
      title: '身近なS字カーブ',
      content:
        'ロジスティック成長の例：\n• 新技術の普及（スマホ、EV等）\n• 感染症の累計患者数\n• 市場の飽和\n• 学習曲線（最初は遅く、途中で加速、やがて停滞）\n\n「最初はゆっくり、途中で急成長、やがて頭打ち」このパターンは至るところにあります。',
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
        'ロジスティック成長：\n• 上限Kのある指数的成長\n• S字カーブを描く\n• dP/dt = rP(1-P/K)\n• P=K/2で成長速度が最大\n• 技術普及、感染症、学習など広く応用\n\n指数関数の「現実版」として非常に重要なモデルです。',
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
