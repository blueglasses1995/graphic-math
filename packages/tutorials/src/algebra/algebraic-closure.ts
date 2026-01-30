import { Tutorial } from '../types';

export const algebraicClosureTutorial: Tutorial = {
  id: 'algebraic-closure',
  title: '代数的閉体',
  description: 'すべての多項式が根を持つ「完全な」体を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'すべての方程式が解ける世界',
      content:
        'x² + 1 = 0 は実数では解けません。\nでも複素数なら x = ±i が解です。\n\nでは複素数上で解けない方程式はあるでしょうか？\n\n答えは「No」── 複素数体は代数的閉体なのです。\nこれが代数学の基本定理です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'algebraic-closure-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '多項式の根を探索',
      content:
        '様々な体上で多項式の根を探してみましょう。\n\nQ 上: x² - 2 は根を持たない\nR 上: x² + 1 は根を持たない\nC 上: すべての多項式が根を持つ\n\n体を広げるほど、解ける方程式が増えていきます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'algebraic-closure-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '代数的閉体の定義',
      content:
        '体 K が代数的閉体であるとは:\n\nK[x] の任意の1次以上の多項式が K に根を持つこと。\n\n同値条件:\n• K[x] の既約多項式は1次式のみ\n• K の代数拡大は K 自身のみ\n\n代数学の基本定理: C は代数的閉体',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '代数的閉包',
      content:
        '任意の体 K には代数的閉包 K̄ が存在します。\n\nQ̄ = 代数的数の全体（Q上の代数方程式の根すべて）\n\nQ ⊂ Q̄ ⊂ C\n\nQ̄ は可算集合ですが、C は非可算。\nつまり「ほとんどの」複素数は超越数です。\n\n有限体 F_p の代数的閉包 F̄_p も存在します（無限体）。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '代数的閉体について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち代数的閉体はどれですか？',
        options: [
          { id: 'a', label: 'Q（有理数体）', correct: false },
          { id: 'b', label: 'R（実数体）', correct: false },
          { id: 'c', label: 'C（複素数体）', correct: true },
          { id: 'd', label: 'F₂（位数2の有限体）', correct: false },
        ],
        explanation:
          'Cは代数学の基本定理により代数的閉体です。Qではx²-2=0が解けず、Rではx²+1=0が解けず、F₂ではx²+x+1=0が解けません。',
      },
    },
    {
      id: 'alternate',
      title: '有限体は代数的閉体でない',
      content:
        '有限体 F_q は代数的閉体ではありません。\n\n証明: F_q = {a₁, ..., a_q} として\nf(x) = (x-a₁)(x-a₂)...(x-a_q) + 1\nは F_q に根を持たない。\n\nしかし F_q の代数的閉包 F̄_q = ∪ F_{q^n} として構成できます。\n暗号理論では有限体の拡大が重要な役割を果たします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：代数的閉体',
      content:
        '代数的閉体:\n\n• すべての多項式が根を持つ「完全な」体\n• C が最も身近な例（代数学の基本定理）\n• 任意の体に代数的閉包が存在\n• 有限体は代数的閉体でないが閉包を構成可能\n\n方程式論の理想的な舞台です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'algebraic-closure-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
