import { Tutorial } from '../types';

export const setBuilderTutorial: Tutorial = {
  id: 'set-builder',
  title: '【実践】条件で集合を作る',
  description: '内包的記法（集合の内包表記）を使いこなす',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: 'フィルタリング',
      content:
        '数がたくさん流れています。\n\n条件「偶数」を適用すると、奇数がフィルタされて消えます。\n\n条件で要素を選び出す ── これが内包的記法の考え方です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '条件を設定しよう',
      content:
        '条件を変えて、どんな集合ができるか試しましょう。\n\n「3の倍数」「10以下」「素数」など、自由に組み合わせてみてください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-notation',
      title: '内包的記法',
      content:
        '{x | 条件(x)} または {x ∈ A | 条件(x)}\n\n例:\n・{x ∈ ℕ | x は偶数} = {2, 4, 6, 8, ...}\n・{x ∈ ℤ | x² < 10} = {-3, -2, -1, 0, 1, 2, 3}\n・{x² | x ∈ {1,2,3,4}} = {1, 4, 9, 16}\n\n最後の例は「変換してから集める」パターンです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-programming',
      title: 'プログラミングとの対応',
      content:
        '内包的記法はプログラミングの内包表記そのものです。\n\nPython:\n{x for x in range(1,100) if x % 2 == 0}\n→ {x ∈ {1,...,99} | xは偶数}\n\n{x**2 for x in range(1,5)}\n→ {x² | x ∈ {1,2,3,4}} = {1, 4, 9, 16}\n\nSQL:\nSELECT x FROM table WHERE condition\n→ {x ∈ table | condition(x)}',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '練習問題',
      content: '{2n + 1 | n ∈ {0, 1, 2, 3, 4}} はどの集合？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '{2n + 1 | n ∈ {0, 1, 2, 3, 4}} = ?',
        options: [
          { id: 'a', label: '{0, 1, 2, 3, 4}', correct: false },
          { id: 'b', label: '{1, 3, 5, 7, 9}', correct: true },
          { id: 'c', label: '{2, 4, 6, 8, 10}', correct: false },
          { id: 'd', label: '{1, 2, 3, 4, 5}', correct: false },
        ],
        explanation:
          '正解は {1, 3, 5, 7, 9} です。\n\nn=0: 1, n=1: 3, n=2: 5, n=3: 7, n=4: 9\n\n2n+1 は奇数を生成する式です。',
      },
    },
    {
      id: 'alternate',
      title: '複数条件の組み合わせ',
      content:
        '条件を組み合わせるときは集合演算に対応します。\n\n・{x | P(x) かつ Q(x)} = {x | P(x)} ∩ {x | Q(x)}\n・{x | P(x) または Q(x)} = {x | P(x)} ∪ {x | Q(x)}\n・{x | ¬P(x)} = {x | P(x)}ᶜ\n\n例: 「偶数かつ3の倍数」= 6の倍数\n{x | x%2=0} ∩ {x | x%3=0} = {x | x%6=0}',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        '条件で集合を作るポイント：\n\n・{x ∈ A | 条件} で条件を満たす要素を集める\n・{f(x) | x ∈ A} で変換してから集める\n・プログラミングの内包表記と同じ発想\n・条件の AND/OR は ∩/∪ に対応\n\n次は「データベースと集合」の関係を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
