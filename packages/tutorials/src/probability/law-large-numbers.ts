import { Tutorial } from '../types';

export const lawLargeNumbersTutorial: Tutorial = {
  id: 'law-large-numbers',
  title: '大数の法則',
  description: '試行を繰り返すと平均は期待値に収束する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '繰り返せば確実になる',
      content:
        'コインを10回投げて表7回出ても驚きませんが、10000回投げて7000回表なら何かおかしい。回数が増えるほど結果の割合は真の確率に近づきます。これが大数の法則です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'statement',
      title: '大数の法則',
      content:
        'X₁, X₂, ..., Xₙ が独立同分布で E[Xᵢ] = μ のとき:\n\n標本平均 X̄ₙ = (X₁+...+Xₙ)/n → μ (n→∞)\n\n試行回数を増やすと、標本平均は真の期待値μに収束します。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'intuition',
      title: '直感的な理解',
      content:
        'カジノが必ず勝つ理由:\n\n各ゲームの期待値がカジノに有利（例: ルーレットで2.7%の利益率）なら、ゲーム回数が増えるほど利益率は確実に2.7%に近づきます。\n\n個々のゲームは不確実でも、全体は確実。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'コイン投げシミュレーション',
      content:
        'コインを何回も投げて、表の割合がどう変化するか見ましょう。最初は大きく振れますが、次第に0.5に収束していきます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '大数の法則について正しいのは？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '大数の法則について正しいのは？',
        options: [
          { id: 'a', label: 'nが大きければ次の結果が予測できる', correct: false },
          { id: 'b', label: '標本平均が期待値に収束する', correct: true },
          { id: 'c', label: '個々の結果が期待値に近づく', correct: false },
          { id: 'd', label: '分散が0になる', correct: false },
        ],
        explanation:
          '大数の法則は「標本平均」が収束すると言っています。個々の結果は相変わらずランダムです。',
      },
    },
    {
      id: 'misconception',
      title: 'よくある誤解',
      content:
        '「10回連続裏だから次は表が出やすい」→ 間違い！\n\nこれはギャンブラーの誤謬です。大数の法則は「これまでの偏りが修正される」のではなく、「将来の結果で薄まる」のです。各試行は独立です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '大数の法則:\n\n• n→∞ で標本平均 → 期待値\n• 保険・カジノ・統計の理論的基盤\n• 個々の結果は予測不能（ギャンブラーの誤謬に注意）\n• 「長い目で見れば」が数学的に保証される\n\n確率と現実を結ぶ最も基本的な定理です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
