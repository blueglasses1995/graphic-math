import { Tutorial } from '../types';

export const normalDistTutorial: Tutorial = {
  id: 'normal-dist',
  title: '正規分布',
  description: '自然界に最も多く現れる釣鐘型の確率分布',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '自然界の王様',
      content:
        '身長、テストの点数、測定誤差...多くのデータは中央が高く左右対称な釣鐘型になります。これが正規分布（ガウス分布）です。確率論で最も重要な分布です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'normal-dist-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'formula',
      title: '正規分布の式',
      content:
        'X ~ N(μ, σ²) の確率密度関数:\n\nf(x) = (1/√(2πσ²)) exp(-(x-μ)²/(2σ²))\n\nμ: 平均（中心位置）\nσ: 標準偏差（広がり）\n\nμとσだけで形が完全に決まります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'rule-68-95-99',
      title: '68-95-99.7ルール',
      content:
        '正規分布では:\n\n• μ±1σ に約68%のデータが入る\n• μ±2σ に約95%のデータが入る\n• μ±3σ に約99.7%のデータが入る\n\n身長の平均170cm、σ=5cmなら、160〜180cmに95%が収まります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'μとσを動かそう',
      content:
        '平均μと標準偏差σを変えて、正規分布の形がどう変わるか確認しましょう。σが小さいほど尖った形、大きいほど広がった形になります。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'normal-dist-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'N(100, 15²)でIQ 130以上の人は約何%？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'IQ（平均100, σ=15）で130以上は約何%？',
        options: [
          { id: 'a', label: '約 16%', correct: false },
          { id: 'b', label: '約 5%', correct: false },
          { id: 'c', label: '約 2.3%', correct: true },
          { id: 'd', label: '約 0.1%', correct: false },
        ],
        explanation:
          '130 = 100 + 2σ。μ+2σ以上は片側なので約2.3%です。50人に1人くらいです。',
      },
    },
    {
      id: 'standard-normal',
      title: '標準正規分布',
      content:
        '標準化: Z = (X - μ) / σ とすると Z ~ N(0, 1)\n\nどんな正規分布も標準化すれば同じZ分布で扱えます。Z値で確率を求めるのが標準的な方法です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '正規分布 N(μ, σ²) のポイント:\n\n• μが中心、σが広がり\n• 68-95-99.7ルール\n• 標準化で N(0,1) に統一可能\n• 中心極限定理により広く出現\n\n統計学の基盤となる最重要分布です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'normal-dist-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
