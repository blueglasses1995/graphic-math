import { Tutorial } from '../types';

export const normalSubgroupTutorial: Tutorial = {
  id: 'normal-subgroup',
  title: '正規部分群',
  description: '正規部分群の定義と性質を学び、商群構成への道を開く',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '群を「割る」ための鍵',
      content:
        '整数を3で割ると、余りは0, 1, 2のいずれかです。\n\nこの「余りで分類する」操作を一般の群で行うには、特別な部分群が必要です。\n\nそれが「正規部分群」── 群を綺麗に分割できる部分群です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'normal-subgroup-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '左剰余類と右剰余類',
      content:
        '部分群Hに対して、左剰余類 gH と右剰余類 Hg を作ってみましょう。\n\n正規部分群では、すべてのgについて gH = Hg が成り立ちます。\n\nスライダーで群の元を選び、左右の剰余類が一致するか確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'normal-subgroup-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '正規部分群の定義',
      content:
        '群Gの部分群Nが正規部分群であるとは、\n\nすべての g ∈ G に対して gNg⁻¹ = N\n\nが成り立つことです。同値な条件として:\n• すべてのgで gN = Ng\n• すべてのgとnで gng⁻¹ ∈ N\n\n記法: N ◁ G',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '具体例で確認',
      content:
        '例1: Z₆ の部分群 {0, 3} は正規部分群（可換群の部分群は全て正規）\n\n例2: S₃ の部分群 A₃ = {e, (123), (132)} は正規部分群\n\n例3: S₃ の部分群 {e, (12)} は正規部分群ではない\n（(13)(12)(13)⁻¹ = (23) ∉ {e, (12)}）',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '正規部分群について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '可換群（アーベル群）において、正規部分群はどれですか？',
        options: [
          { id: 'a', label: '単位元のみからなる部分群だけ', correct: false },
          { id: 'b', label: 'すべての部分群', correct: true },
          { id: 'c', label: '位数が偶数の部分群のみ', correct: false },
          { id: 'd', label: '巡回部分群のみ', correct: false },
        ],
        explanation:
          '可換群では gh = hg が常に成り立つため、gHg⁻¹ = H が自動的に成立します。したがって全ての部分群が正規部分群です。',
      },
    },
    {
      id: 'alternate',
      title: '核と正規部分群',
      content:
        '群準同型 φ: G → G\' の核 ker(φ) = {g ∈ G | φ(g) = e\'} は、\n\n常にGの正規部分群になります。\n\n逆に、任意の正規部分群Nは、自然な射影 G → G/N の核として現れます。\n\nつまり「正規部分群 = 準同型の核」という対応があるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：正規部分群の重要性',
      content:
        '正規部分群 N ◁ G は:\n\n• gNg⁻¹ = N を満たす部分群\n• 左右の剰余類が一致する\n• 準同型の核として自然に現れる\n• 商群 G/N を構成するために不可欠\n\n次は商群の構成を学びましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'normal-subgroup-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
