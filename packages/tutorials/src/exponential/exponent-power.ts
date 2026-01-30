import { Tutorial } from '../types';

export const exponentPowerTutorial: Tutorial = {
  id: 'exponent-power',
  title: '指数法則：累乗の累乗',
  description: '累乗の累乗や積の累乗のルールを視覚的に学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '累乗をさらに累乗する',
      content:
        '(2³)² とは何でしょう？2³を2回掛けること、つまり 8×8 = 64 = 2⁶。指数の3と2を掛けると6になります。累乗の累乗が展開されていく様子を見てみましょう。',
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
      title: '指数を自由に組み合わせよう',
      content:
        '底a、内側の指数m、外側の指数nをスライダーで変えて、(aᵐ)ⁿ = aᵐˣⁿ が成り立つことを確認しましょう。',
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
      title: '累乗の累乗の法則',
      content:
        '(aᵐ)ⁿ = aᵐˣⁿ\n\n「m回掛けたものをn回掛ける」=「m×n回掛ける」\n\n例：\n(2³)⁴ = 2³ˣ⁴ = 2¹² = 4,096\n(10²)³ = 10⁶ = 1,000,000\n\nカッコの中の指数と外の指数を掛け算します。',
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
      title: '積の累乗',
      content:
        '(a×b)ⁿ = aⁿ × bⁿ\n\n「積を累乗する」=「それぞれを累乗して掛ける」\n\n例：\n(2×3)⁴ = 2⁴ × 3⁴ = 16 × 81 = 1,296\n6⁴ = 1,296 ✓\n\n同様に (a/b)ⁿ = aⁿ/bⁿ も成り立ちます。',
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
      content: '(3²)³ はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(3²)³ の値は？',
        options: [
          { id: 'a', label: '3⁵ = 243', correct: false },
          { id: 'b', label: '3⁶ = 729', correct: true },
          { id: 'c', label: '3⁸ = 6,561', correct: false },
          { id: 'd', label: '9³ = 729 だが 3⁶ ではない', correct: false },
        ],
        explanation:
          '(3²)³ = 3²ˣ³ = 3⁶ = 729。指数を掛け算します（足し算ではありません）。9³ = 729 でもありますが、3⁶ = 9³ = 729 はすべて同じ値です。',
      },
    },
    {
      id: 'alternate',
      title: 'よくある間違い',
      content:
        '要注意：aᵐ × aⁿ と (aᵐ)ⁿ を混同しやすい！\n\n• aᵐ × aⁿ = aᵐ⁺ⁿ（指数を足す）\n• (aᵐ)ⁿ = aᵐˣⁿ（指数を掛ける）\n\n例：2³ × 2² = 2⁵ = 32 だが (2³)² = 2⁶ = 64\n\n「掛け算のときは足す、累乗のときは掛ける」と覚えましょう。',
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
        '指数法則まとめ：\n• (aᵐ)ⁿ = aᵐˣⁿ（累乗の累乗→指数の掛け算）\n• (ab)ⁿ = aⁿbⁿ（積の累乗→それぞれ累乗）\n• (a/b)ⁿ = aⁿ/bⁿ（商の累乗→それぞれ累乗）\n\n前回の法則と合わせて、指数の計算ルールが揃いました。',
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
