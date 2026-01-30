import { Tutorial } from '../types';

export const complementEventTutorial: Tutorial = {
  id: 'complement-event',
  title: '余事象',
  description: '「起こらない確率」から考える余事象の活用法',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '起こらない方から考える',
      content:
        'サイコロを振って「1以外が出る」確率は？1が出る確率が1/6なので、1以外は 1 - 1/6 = 5/6。「起こらない」方から求める方が簡単なことがあります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '余事象の定義',
      content:
        '事象Aの余事象 Aᶜ（Aの補集合）は「Aが起こらない」事象です。\n\nP(Aᶜ) = 1 - P(A)\n\nAとAᶜは排反で、A ∪ Aᶜ = Ω です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'power',
      title: '余事象の威力',
      content:
        '「少なくとも1回は表が出る」確率を考えましょう。\n\nコインを3回投げるとき:\n• 直接計算: 表1回 + 表2回 + 表3回 = ...\n• 余事象: 1 - P(全て裏) = 1 - (1/2)³ = 7/8\n\n余事象の方がはるかに簡単です！',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '余事象を体験',
      content:
        'コインの枚数を変えて「少なくとも1回表が出る」確率を確認しましょう。枚数が増えるほど、余事象で計算する方が楽になります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'サイコロを2回振って「少なくとも1回は6が出る」確率は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'サイコロを2回振って少なくとも1回は6が出る確率は？',
        options: [
          { id: 'a', label: '1/3', correct: false },
          { id: 'b', label: '11/36', correct: true },
          { id: 'c', label: '1/6', correct: false },
          { id: 'd', label: '2/6', correct: false },
        ],
        explanation:
          '余事象「6が1回も出ない」= (5/6)² = 25/36。よって 1 - 25/36 = 11/36。',
      },
    },
    {
      id: 'when-to-use',
      title: 'いつ使うか',
      content:
        '余事象が有効な場面:\n\n• 「少なくとも1つ」を含む問題\n• 直接数えるのが大変なとき\n• 「〜でない」確率を求めるとき\n\nキーワード「少なくとも」が出たら余事象を疑いましょう。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '余事象は確率計算の強力なテクニック。\n\n• P(Aᶜ) = 1 - P(A)\n• 「少なくとも」→ 余事象を使え\n• 直接計算が面倒 → 余事象が簡単かチェック\n\n確率の計算では「逆から考える」発想が大切です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
