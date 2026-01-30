import { Tutorial } from '../types';

export const independenceTutorial: Tutorial = {
  id: 'independence',
  title: '独立事象',
  description: '互いに影響しない事象の性質を理解する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '影響し合わない出来事',
      content:
        'コインを2回投げるとき、1回目の結果は2回目に影響しません。このような関係を「独立」と呼びます。独立な事象の確率計算はとてもシンプルです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '独立の定義',
      content:
        '事象AとBが独立 ⟺ P(A ∩ B) = P(A) × P(B)\n\n同値条件: P(A|B) = P(A)（Bを知ってもAの確率が変わらない）\n\nコインの例: P(1回目表 ∩ 2回目表) = 1/2 × 1/2 = 1/4 ✓',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'not-independent',
      title: '独立でない例',
      content:
        '袋に赤3個、白2個の玉。1個取り出して戻さずにもう1個取る場合:\n\nP(1個目赤) = 3/5\nP(2個目赤|1個目赤) = 2/4 ≠ 3/5\n\n1個目の結果が2個目に影響するので、独立ではありません。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '独立かどうか確認しよう',
      content:
        '2つの事象について P(A∩B) と P(A)×P(B) を比較しましょう。等しければ独立、そうでなければ従属です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'P(A)=0.4, P(B)=0.5, P(A∩B)=0.2。AとBは独立？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'P(A)=0.4, P(B)=0.5, P(A∩B)=0.2。AとBは独立か？',
        options: [
          { id: 'a', label: '独立', correct: true },
          { id: 'b', label: '従属', correct: false },
          { id: 'c', label: '排反', correct: false },
          { id: 'd', label: '情報不足', correct: false },
        ],
        explanation:
          'P(A)×P(B) = 0.4×0.5 = 0.2 = P(A∩B) なので独立です。',
      },
    },
    {
      id: 'vs-exclusive',
      title: '独立と排反の違い',
      content:
        '独立と排反は全く別の概念です！\n\n• 排反: A∩B = ∅ → 同時に起こらない\n• 独立: P(A∩B) = P(A)P(B) → 影響しない\n\n排反な事象は（P>0なら）独立ではありません。一方が起きると他方は起きないので、影響大です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '独立事象のポイント:\n\n• P(A∩B) = P(A)P(B) が独立の定義\n• 一方の結果が他方に影響しない\n• 独立 ≠ 排反（よくある誤解）\n• 復元抽出は独立、非復元抽出は従属\n\n独立性の判定はベイズの定理にも繋がります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
