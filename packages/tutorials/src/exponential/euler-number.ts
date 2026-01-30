import { Tutorial } from '../types';

export const eulerNumberTutorial: Tutorial = {
  id: 'euler-number',
  title: 'ネイピア数eとは',
  description: '自然界に潜む特別な数 e ≈ 2.71828 の意味と由来を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '最も自然な底',
      content:
        '2でも3でも10でもない、e ≈ 2.71828... という不思議な数。なぜこの中途半端な数が「最も自然な底」と呼ばれるのか？複利計算からeが自然に現れるアニメーションを見てみましょう。',
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
      title: '複利の回数を増やしてみよう',
      content:
        '年利100%で1年間、複利の回数nを増やしてみましょう。n=1で2倍、n=2で2.25倍、n=12で2.613...倍。nを∞に近づけると、ある値に収束します。その値がeです。',
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
      title: 'eの定義',
      content:
        'e = lim(n→∞) (1 + 1/n)ⁿ\n\nn=1: (1+1)¹ = 2\nn=2: (1+1/2)² = 2.25\nn=10: (1+0.1)¹⁰ ≈ 2.5937\nn=100: (1+0.01)¹⁰⁰ ≈ 2.7048\nn=1000: ≈ 2.7169\nn→∞: → e ≈ 2.71828...\n\neは無理数（割り切れない）で超越数です。',
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
      title: 'eが特別な理由（予告）',
      content:
        'eˣ を微分すると eˣ 自身になります。つまり「変化率が自分自身に等しい」唯一の関数です。\n\n(eˣ)\' = eˣ\n\n他の底では成り立ちません：(2ˣ)\' = 2ˣ·ln2。この性質がeを数学・物理で不可欠な数にしています。',
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
      content: 'eの値に最も近いのはどれ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ネイピア数 e の近似値は？',
        options: [
          { id: 'a', label: '2.5', correct: false },
          { id: 'b', label: '2.618（黄金比）', correct: false },
          { id: 'c', label: '2.718', correct: true },
          { id: 'd', label: '3.14（円周率）', correct: false },
        ],
        explanation:
          'e ≈ 2.71828... です。黄金比φ ≈ 1.618、円周率π ≈ 3.14159とは異なる定数です。覚え方：「2.7 1828 1828」と1828が繰り返します（偶然ですが）。',
      },
    },
    {
      id: 'alternate',
      title: 'eの別の顔',
      content:
        'eは多くの場面で現れます：\n\ne = 1 + 1/1! + 1/2! + 1/3! + 1/4! + ...\n= 1 + 1 + 0.5 + 0.1667 + 0.0417 + ...\n\nこの無限級数もeに収束します。階乗の逆数の和という美しい表現です。',
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
        'ネイピア数e：\n• e ≈ 2.71828...\n• e = lim(n→∞)(1+1/n)ⁿ\n• 連続複利から自然に現れる\n• (eˣ)\' = eˣ（微分しても変わらない）\n• 数学で最も重要な定数の一つ\n\neˣの特別さを次のチュートリアルで詳しく見ていきます。',
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
