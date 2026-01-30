import { Tutorial } from '../types';

export const typeErrorsTutorial: Tutorial = {
  id: 'type-errors',
  title: '第一種・第二種の過誤',
  description: '仮説検定における2種類の判断ミスを理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '2種類の間違い',
      content:
        '検定の結論には2種類の間違いがあります。\n\n本当は効果がないのに「ある」と判断してしまう（第一種の過誤）。\n本当は効果があるのに「ない」と判断してしまう（第二種の過誤）。\n\n火災報知器に例えると:\n火事でないのに鳴る = 第一種（誤報）\n火事なのに鳴らない = 第二種（見逃し）',
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
        '有意水準αと標本サイズnを変えて、2つの過誤率がどう変わるか観察しましょう。\n\nαを厳しくすると何が起きますか？',
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
      title: '第一種の過誤（偽陽性）',
      content:
        '第一種の過誤 = 「H₀が正しいのに棄却してしまう」\n\n確率 = α（有意水準）= 通常 0.05\n\nつまり5%の確率で「効果がある」と誤って結論してしまう。\n\nこれは意図的に許容しているリスクです。αを小さくすれば減りますが、代わりに第二種の過誤が増えます。',
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
      title: '第二種の過誤（偽陰性）',
      content:
        '第二種の過誤 = 「H₀が間違っているのに棄却できない」\n\n確率 = β\n検出力 = 1 - β（効果があるときに正しく検出できる確率）\n\n検出力を高めるには:\n・標本サイズを増やす\n・効果が大きいほど検出しやすい\n・αを大きくする（トレードオフ）\n\n一般的に検出力 80% 以上が望ましいとされます。',
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
        '有意水準を0.05から0.01に厳しくすると、どうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '有意水準を0.05→0.01にすると？',
        options: [
          { id: 'a', label: '第一種の過誤↓、第二種の過誤↑', correct: true },
          { id: 'b', label: '両方の過誤↓', correct: false },
          { id: 'c', label: '第一種の過誤↑、第二種の過誤↓', correct: false },
          { id: 'd', label: '両方の過誤↑', correct: false },
        ],
        explanation:
          '正解は「第一種の過誤↓、第二種の過誤↑」です。\n\n基準を厳しくすると誤報は減りますが、見逃しが増えます。\n\n両方を同時に減らすには標本サイズを増やす必要があります。\n\nこのトレードオフは統計的検定の本質的な制約です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：どちらの過誤が深刻か',
      content:
        '状況によってどちらの過誤が深刻かは異なります。\n\n医薬品の承認: 第一種の過誤が深刻（無効な薬を承認）→ αを小さく\nがんの検診: 第二種の過誤が深刻（がんの見逃し）→ 検出力を高く\n\n検定を設計するときは「どちらの間違いがより深刻か」を考えて、αとnを決めます。',
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
        '第一種の過誤（α）: 本当はH₀が正しいのに棄却（偽陽性）\n第二種の過誤（β）: 本当はH₁が正しいのにH₀を棄却できない（偽陰性）\n\n検出力 = 1 - β\n\nαとβはトレードオフ。両方減らすにはnを増やす。\n\n次は具体的な検定手法「t検定」を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
