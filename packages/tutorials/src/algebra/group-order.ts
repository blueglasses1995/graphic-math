import { Tutorial } from '../types';

export const groupOrderTutorial: Tutorial = {
  id: 'group-order',
  title: '群の位数',
  description: '群の位数と要素の位数の関係を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '位数とは',
      content:
        '群の「位数」には2つの意味があります。\n\n1. 群の位数 |G|: 群 G の要素の数\n2. 要素の位数 ord(a): aⁿ = e となる最小の正整数 n\n\n例: ℤ/6ℤ で 2 の位数は 3（2+2+2 = 6 ≡ 0）\n\nこの2つの概念を混同しないことが大切です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'group-order-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'element-order-examples',
      title: '要素の位数の例',
      content:
        'ℤ/6ℤ の各要素の位数:\n\nord(0) = 1（0 は単位元）\nord(1) = 6（1+1+...+1 = 6 で初めて 0）\nord(2) = 3（2+2+2 = 6 ≡ 0）\nord(3) = 2（3+3 = 6 ≡ 0）\nord(4) = 3（4+4+4 = 12 ≡ 0）\nord(5) = 6（5×6 = 30 ≡ 0）\n\nすべての位数が 6 の約数になっています！',
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
      id: 'order-divides-group-order',
      title: '位数は群の位数を割る',
      content:
        '重要な性質: 有限群 G において、任意の要素 a の位数 ord(a) は |G| を割り切る。\n\nこれはラグランジュの定理の直接的な結果です。\n\na が生成する部分群 ⟨a⟩ の位数は ord(a) に等しく、ラグランジュの定理により |G| の約数です。\n\n系: 任意の a ∈ G に対して、a^|G| = e',
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
      id: 'prime-order',
      title: '素数位数の群',
      content:
        '群の位数が素数 p のとき、その群は巡回群 Cₚ と同型です。\n\nなぜなら:\n  単位元以外の任意の要素 a の位数は 1 より大きく p 以下\n  ラグランジュの定理より ord(a) は p の約数\n  p が素数なので ord(a) = p\n  よって a は群全体を生成する\n\n素数位数の群は、構造が一意に決まります。',
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
      id: 'fermats-little',
      title: 'フェルマーの小定理',
      content:
        'a^|G| = e から、有名な定理が導かれます。\n\nフェルマーの小定理:\n  p が素数で、gcd(a, p) = 1 のとき\n  aᵖ⁻¹ ≡ 1 (mod p)\n\n例: 2⁶ = 64 ≡ 1 (mod 7) ✓\n\nこれは群論の帰結であり、RSA暗号の理論的基盤でもあります。',
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
      id: 'quiz',
      title: '確認クイズ',
      content: '群の位数について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ℤ/8ℤ における 6 の位数はいくつですか？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '4', correct: true },
          { id: 'c', label: '6', correct: false },
          { id: 'd', label: '8', correct: false },
        ],
        explanation:
          '正解は 4 です。6+6=12≡4, 6+6+6=18≡2, 6+6+6+6=24≡0 (mod 8)。4回足して初めて0になるので、ord(6)=4 です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '群の位数のポイント:\n\n1. 群の位数 |G|: 要素の個数\n2. 要素の位数 ord(a): aⁿ = e の最小 n\n3. ord(a) は |G| を割り切る\n4. 素数位数の群は巡回群\n5. フェルマーの小定理: aᵖ⁻¹ ≡ 1 (mod p)\n\n次は群と群をつなぐ「準同型写像」を学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'group-order-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
