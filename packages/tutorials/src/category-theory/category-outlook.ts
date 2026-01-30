import { Tutorial } from '../types';

export const categoryOutlookTutorial: Tutorial = {
  id: 'category-outlook',
  title: '圏論の展望',
  category: 'category-theory',
  description: '圏論の最先端のトピックと今後の方向性を概観する',
  steps: [
    {
      id: 'hook',
      title: '圏論のフロンティア',
      stepType: 'animation',
      content: '高次圏論、ホモトピー型理論、応用圏論——圏論は今も急速に発展し続けています。最先端の研究分野をマップとしてアニメーション表示します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'category-outlook-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '研究分野を探索',
      stepType: 'interactive',
      content: '圏論の研究分野マップをクリックして、各分野の概要を確認しましょう。高次圏論、応用圏論、計算圏論などの関係が見えてきます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'category-outlook-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '高次圏論と∞-圏',
      stepType: 'explanation',
      content: '通常の圏は対象と射の2層構造ですが、高次圏では射の間の射（2-射）、さらにその間の射（3-射）...と無限に続きます。∞-圏（特に(∞,1)-圏）はルリの準圏やジョイアルの擬圏として形式化され、ホモトピー論と代数幾何を統一的に扱います。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '応用圏論の広がり',
      stepType: 'explanation',
      content: '近年、圏論はネットワーク科学（オペラド）、機械学習（微分圏、レンズ）、因果推論（マルコフ圏）、システム工学（制御理論）など多分野に応用されています。Applied Category Theory (ACT) コミュニティは急速に成長しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '圏論の展望を確認',
      stepType: 'quiz',
      content: '圏論の現代的発展について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '∞-圏はどのような構造を持ちますか？',
        options: [
          { id: 'a', label: '対象と射のみの通常の圏', correct: false },
          { id: 'b', label: '射の間の射が無限の階層で存在する', correct: true },
          { id: 'c', label: '無限個の対象を持つ圏', correct: false },
          { id: 'd', label: '射が無限本存在する圏', correct: false }
        ],
        explanation: '∞-圏は対象、射、射の間の射（2-射）、...と無限の階層構造を持つ圏です。ホモトピー論の「連続変形」を射の階層として捉えます。'
      }
    },
    {
      id: 'alternate',
      title: 'ホモトピー型理論（HoTT）',
      stepType: 'explanation',
      content: 'ホモトピー型理論はマーティン=レーフ型理論に一価公理（univalence axiom）を加えたもので、型がホモトピー型（∞-群胞）に対応します。Voevodsky, Awodeyらにより提唱され、証明検証システム（Coq, Agda）で実装される「コンピュータで検証可能な数学の基礎」を目指しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：圏論の未来',
      stepType: 'interactive',
      content: '圏論は数学の共通言語として発展し続け、新しい数学的構造の発見と他分野への応用を推進しています。この講座で学んだ基礎の上に、あなた自身の探求を続けてください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'category-outlook-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
