import { Tutorial } from '../types';

export const zeroNegativeExpTutorial: Tutorial = {
  id: 'zero-negative-exp',
  title: '指数0と負の指数',
  description: 'なぜa⁰=1なのか、負の指数が逆数を意味する理由を理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: 'a⁰はなぜ1？',
      content:
        '何も掛けないのに結果が1？直感に反するように見えますが、指数法則から必然的に導かれます。2⁴÷2⁴ = 2⁰ = ？ アニメーションで見てみましょう。',
      customScene: "zero-negative-exp-animation",
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
      title: '指数を0まで下げてみよう',
      content:
        'スライダーで指数を5から0まで、さらにマイナスまで動かしてみましょう。値がどう変化するか、パターンに注目してください。',
      customScene: "zero-negative-exp-interactive",
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
      title: 'a⁰ = 1 の証明',
      content:
        '指数法則 aᵐ ÷ aⁿ = aᵐ⁻ⁿ を使います。\n\na³ ÷ a³ = a³⁻³ = a⁰\n\nでも a³ ÷ a³ = 1（同じ数で割るから）\n\nしたがって a⁰ = 1\n\nこれは a≠0 のとき成り立ちます。指数法則の整合性を保つために a⁰=1 と定義されています。',
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
      title: '負の指数 = 逆数',
      content:
        'a⁻ⁿ = 1/aⁿ\n\n指数法則から：a⁰ ÷ aⁿ = a⁰⁻ⁿ = a⁻ⁿ\nまた：a⁰ ÷ aⁿ = 1 ÷ aⁿ = 1/aⁿ\n\n例：\n2⁻¹ = 1/2 = 0.5\n2⁻² = 1/4 = 0.25\n2⁻³ = 1/8 = 0.125\n10⁻² = 1/100 = 0.01',
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
      content: '5⁻² はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '5⁻² の値は？',
        options: [
          { id: 'a', label: '-25', correct: false },
          { id: 'b', label: '-10', correct: false },
          { id: 'c', label: '1/25', correct: true },
          { id: 'd', label: '1/10', correct: false },
        ],
        explanation:
          '5⁻² = 1/5² = 1/25 = 0.04。負の指数はマイナスの値ではなく、逆数（分数）を意味します。',
      },
    },
    {
      id: 'alternate',
      title: 'パターンで理解する',
      content:
        '2の累乗を並べると規則が見えます：\n\n2³ = 8\n2² = 4（8÷2）\n2¹ = 2（4÷2）\n2⁰ = 1（2÷2）\n2⁻¹ = 0.5（1÷2）\n2⁻² = 0.25（0.5÷2）\n\n指数が1減るごとに2で割る。このパターンが自然に0乗と負の指数を導きます。',
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
        '0乗と負の指数：\n• a⁰ = 1（a≠0）\n• a⁻ⁿ = 1/aⁿ（逆数）\n• これらは指数法則の整合性から導かれる\n• 負の指数≠マイナスの値\n\n指数が1減るごとに底で割るパターンで理解できます。',
      customScene: "zero-negative-exp-summary",
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
