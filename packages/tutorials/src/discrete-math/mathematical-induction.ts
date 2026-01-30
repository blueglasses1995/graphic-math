import { Tutorial } from '../types';

export const mathematicalInductionTutorial: Tutorial = {
  id: 'mathematical-induction',
  title: '数学的帰納法',
  description: 'ドミノ倒しの原理で無限個の命題を一度に証明する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'ドミノ倒し',
      content:
        '無限に並んだドミノを倒すには2つのことを確認すれば十分です：\n\n1. 最初の1枚が倒れる\n2. 任意の1枚が倒れたら、次の1枚も倒れる\n\nこの2つが成り立てば、すべてのドミノが倒れます。\n\nこれが数学的帰納法の原理です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'mathematical-induction-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'structure',
      title: '帰納法のステップ',
      content:
        'すべての自然数 n で命題 P(n) が成り立つことを証明する：\n\n基底段階（Base Case）：P(1) が真であることを示す\n\n帰納段階（Inductive Step）：\nP(k) を仮定して（帰納法の仮定）、P(k+1) を導く\n\nこの2つを示せば、P(n) はすべての n ≥ 1 で真です。',
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
      id: 'example',
      title: '例：1+2+...+n の公式',
      content:
        '証明：1 + 2 + ... + n = n(n+1)/2\n\n基底：n=1 のとき、左辺=1、右辺=1×2/2=1 ✓\n\n帰納：1+2+...+k = k(k+1)/2 と仮定\n1+2+...+k+(k+1)\n= k(k+1)/2 + (k+1)\n= (k+1)(k/2 + 1)\n= (k+1)(k+2)/2 ✓\n\nよってすべての n ≥ 1 で成立。',
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
      id: 'strong-induction',
      title: '強い帰納法',
      content:
        '通常の帰納法：P(k) → P(k+1)\n強い帰納法：P(1)∧P(2)∧...∧P(k) → P(k+1)\n\n強い帰納法では、k以下のすべての場合が真であると仮定できます。\n\n例：「すべての2以上の自然数は素数の積で表せる」の証明に使えます。\n\n通常の帰納法と強い帰納法は、実は同値です。',
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
      id: 'quiz',
      title: 'クイズ',
      content: '帰納法の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '帰納法で「基底段階を省略」するとどうなる？',
        options: [
          { id: 'a', label: '証明は成立する', correct: false },
          { id: 'b', label: '証明は不完全になる', correct: true },
          { id: 'c', label: '帰納段階だけで十分', correct: false },
          { id: 'd', label: '逆の命題が証明される', correct: false },
        ],
        explanation:
          '正解は「証明は不完全になる」です。例えば「すべてのnについてn > n+1」は帰納段階だけなら成立しますが、基底段階が成り立たないので偽です。最初のドミノが倒れなければ何も始まりません。',
      },
    },
    {
      id: 'pitfalls',
      title: 'よくある間違い',
      content:
        '帰納法のよくある間違い：\n\n・基底段階の省略\n・帰納法の仮定を使わず直接P(k+1)を証明してしまう\n・P(k)→P(k+1) ではなく P(k)→P(k+2) を示してしまう\n・「すべての馬は同じ色」の誤った証明（n=1→n=2の飛躍）\n\n特に基底から帰納へのつながりを慎重に確認しましょう。',
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
        '・数学的帰納法 = ドミノ倒し\n・基底段階 + 帰納段階 = すべてのnで成立\n・強い帰納法：k以下すべてを仮定\n・基底段階を忘れない！\n\n帰納法はアルゴリズムの正しさの証明や再帰の理解に不可欠です。\n\n次は、背理法と対偶を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'mathematical-induction-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
