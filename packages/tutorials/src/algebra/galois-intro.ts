import { Tutorial } from '../types';

export const galoisIntroTutorial: Tutorial = {
  id: 'galois-intro',
  title: 'ガロア理論入門',
  description: '方程式の可解性と群論の深い関係を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '天才ガロアの遺産',
      content:
        '2次方程式、3次方程式、4次方程式には「解の公式」があります。\nでは5次方程式は？\n\n20歳で決闘に倒れたガロアは、前夜に書き残しました。\n「5次以上の一般方程式には解の公式がない」\n\nその証明の鍵が「ガロア群」です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'galois-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '根の置換を体験',
      content:
        'x² - 2 = 0 の根は √2 と -√2 です。\n\nこの2つの根を入れ替えても、有理数の関係式は保たれます。\nこの「根の入れ替え」がガロア群の元です。\n\n根の間の関係を壊さない置換を探してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'galois-intro-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ガロア群の定義',
      content:
        '体の拡大 L/K に対して:\n\nガロア群 Gal(L/K) = {σ: L → L | σは自己同型、σ|_K = id}\n\nつまりKの元を固定するLの自己同型の全体。\n\nf(x) のガロア群 = f の分解体上のガロア群\n→ 根の置換群として実現される',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ガロアの基本定理',
      content:
        'ガロア拡大 L/K に対して:\n\n中間体 ←→ ガロア群の部分群\n\nという1対1対応が成立します。\n\n正規中間体 ←→ 正規部分群\n\nこの対応により、体の問題を群の問題に翻訳できます。\nこれがガロア理論の核心です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'ガロア理論の基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '5次一般方程式に解の公式がない本質的な理由は？',
        options: [
          { id: 'a', label: '計算が複雑すぎるから', correct: false },
          { id: 'b', label: 'A₅が非可解群だから', correct: true },
          { id: 'c', label: '実数根が存在しないから', correct: false },
          { id: 'd', label: '5が素数だから', correct: false },
        ],
        explanation:
          '5次一般方程式のガロア群はS₅で、その組成列にA₅（非可換単純群）が現れます。A₅は可解群ではないため、べき根による解の公式が存在しません。',
      },
    },
    {
      id: 'alternate',
      title: '可解群と解の公式',
      content:
        '方程式がべき根で解ける ⟺ ガロア群が可解群\n\n可解群: 組成列の商がすべて巡回群\n\nS₂, S₃, S₄ は可解 → 2,3,4次方程式は解ける\nS₅ は非可解（A₅が単純）→ 5次以上は一般に解けない\n\n美しい対応です。群の構造が方程式の性質を完全に決定するのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ガロア理論の美',
      content:
        'ガロア理論:\n\n• 方程式の対称性をガロア群で捉える\n• 中間体と部分群の1対1対応\n• 可解性は群の可解性で判定\n• A₅の非可解性が5次方程式の限界を示す\n\n代数学で最も美しい理論の一つです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'galois-intro-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
