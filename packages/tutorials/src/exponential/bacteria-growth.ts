import { Tutorial } from '../types';

export const bacteriaGrowthTutorial: Tutorial = {
  id: 'bacteria-growth',
  title: '【実践】細菌の増殖',
  description: '細菌の分裂による指数的増殖を計算し予測する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '20分ごとに2倍',
      content:
        '大腸菌は理想的な条件で約20分ごとに分裂します。1匹から始めて24時間後には何匹に？2⁷² ≈ 4.7×10²¹。地球上の砂粒の数を超えます。細菌がどんどん分裂していくアニメーションを見てみましょう。',
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
      title: '培養条件をシミュレーション',
      content:
        '初期菌数、分裂時間、培養時間を変えて、細菌数の変化を観察しましょう。分裂時間がわずかに変わるだけで最終数が大きく変わることに注目してください。',
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
      title: '細菌増殖の計算',
      content:
        'N(t) = N₀ · 2^(t/g)\n\n• N₀: 初期菌数\n• g: 世代時間（分裂にかかる時間）\n• t: 経過時間\n\n例：N₀=100、g=30分、t=6時間（360分）\nN = 100 × 2^(360/30) = 100 × 2¹² = 100 × 4096 = 409,600\n\n100匹が6時間で約41万匹に！',
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
      title: '現実の増殖曲線',
      content:
        '実際の細菌増殖には4つの段階があります：\n\n1. 誘導期：環境に適応中（増殖なし）\n2. 対数増殖期：指数的に増殖\n3. 定常期：栄養不足で増殖と死滅が均衡\n4. 衰退期：死滅が増殖を上回る\n\nロジスティック成長に似た形ですね。',
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
      content: '世代時間20分の細菌が1000匹から始まって2時間後には何匹？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1000 × 2^(120/20) = ?',
        options: [
          { id: 'a', label: '6,000', correct: false },
          { id: 'b', label: '12,000', correct: false },
          { id: 'c', label: '64,000', correct: true },
          { id: 'd', label: '128,000', correct: false },
        ],
        explanation:
          '2時間 = 120分。120÷20 = 6回の分裂。1000 × 2⁶ = 1000 × 64 = 64,000匹です。',
      },
    },
    {
      id: 'alternate',
      title: '食品衛生への応用',
      content:
        '食中毒菌は室温で急速に増殖します。初期汚染がわずかでも、数時間放置すれば危険な数に達します。逆に冷蔵（4℃以下）では世代時間が大幅に延び、増殖を抑えられます。指数的増殖の理解は食品安全に直結しています。',
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
        '細菌の増殖：\n• N(t) = N₀·2^(t/g)\n• 世代時間gで2倍に分裂\n• 対数増殖期は純粋な指数的成長\n• 栄養制限で成長が止まる（ロジスティック的）\n• 食品衛生の基本原理\n\n実世界での指数的成長の最もわかりやすい例です。',
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
