import { Tutorial } from '../types';

export const expectedValueTutorial: Tutorial = {
  id: 'expected-value',
  title: '期待値',
  description: '長い目で見た平均的な結果を表す期待値',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '平均的にはいくら？',
      content:
        'サイコロ1回振って出た目の数×100円もらえるゲーム。参加費はいくらなら公平？期待値を計算すれば分かります。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'expected-value-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '期待値の定義',
      content:
        'E[X] = Σ xᵢ × P(X = xᵢ)\n\nサイコロの期待値:\nE[X] = 1×1/6 + 2×1/6 + 3×1/6 + 4×1/6 + 5×1/6 + 6×1/6\n= 21/6 = 3.5\n\n1回の結果は3.5にならなくても、何回も繰り返すと平均は3.5に近づきます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'linearity',
      title: '期待値の線形性',
      content:
        '期待値の最も便利な性質:\n\nE[aX + bY] = aE[X] + bE[Y]\n\nこれは独立でなくても成り立ちます！\n\nサイコロ2個の合計の期待値 = 3.5 + 3.5 = 7',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'シミュレーション',
      content:
        'サイコロを何回も振って、平均値が期待値(3.5)に近づいていく様子を観察しましょう。回数を増やすと収束が見えます。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'expected-value-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '1/4の確率で1000円、3/4の確率で0円のくじの期待値は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1/4の確率で1000円、3/4の確率で0円。期待値は？',
        options: [
          { id: 'a', label: '500円', correct: false },
          { id: 'b', label: '250円', correct: true },
          { id: 'c', label: '750円', correct: false },
          { id: 'd', label: '1000円', correct: false },
        ],
        explanation:
          'E = 1000×1/4 + 0×3/4 = 250円。参加費250円なら公平なゲームです。',
      },
    },
    {
      id: 'decision',
      title: '意思決定と期待値',
      content:
        '期待値は意思決定の基準になります。\n\n例: 確実に500円もらう vs 50%で1200円\n• 確実: E = 500円\n• ギャンブル: E = 600円\n\n期待値だけ見ればギャンブルが有利。しかし人はリスクも考慮します。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '期待値は「長期的な平均」。\n\n• E[X] = Σ xP(x)\n• 線形性: E[aX+bY] = aE[X]+bE[Y]\n• 公平なゲーム ⟺ 期待値 = 参加費\n• 意思決定の基本指標\n\n次は「分散と標準偏差」でバラつきを学びます。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'expected-value-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
