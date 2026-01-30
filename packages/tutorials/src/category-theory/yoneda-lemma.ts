import { Tutorial } from '../types';

export const yonedaLemmaTutorial: Tutorial = {
  id: 'yoneda-lemma',
  title: 'よねだの補題',
  category: 'category-theory',
  description: '圏論で最も重要な定理の一つ、米田の補題を直感的に理解する',
  steps: [
    {
      id: 'hook',
      title: '対象を射で知る',
      stepType: 'animation',
      content: '対象Aは、他の対象からAへの射の全体 Hom(-,A) によって完全に特徴づけられます。「対象はその関係性の総体である」という深い洞察をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'yoneda-lemma-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '米田の対応を体験',
      stepType: 'interactive',
      content: '自然変換 Nat(Hom(A,-), F) の要素と F(A) の要素の間の一対一対応を視覚的に確認しましょう。自然変換αを選ぶと α_A(id_A) が決まる様子を体験できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'yoneda-lemma-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '米田の補題の主張',
      stepType: 'explanation',
      content: '米田の補題：関手 F: C→Set と対象A∈C に対して、自然変換の集合 Nat(Hom(A,-), F) と集合 F(A) の間に自然な全単射がある。対応は α ↦ α_A(id_A) で与えられます。逆に x∈F(A) から自然変換 α を α_B(f) = F(f)(x) で構成できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '米田埋め込み',
      stepType: 'explanation',
      content: '米田の補題の系として、米田埋め込み y: C→[C^op, Set]（A ↦ Hom(-,A)）は忠実充満関手です。つまり Hom(A,B) ≅ Nat(Hom(-,A), Hom(-,B)) が自然に成り立ちます。対象を表現可能関手として「埋め込む」ことができるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '米田の補題を確認',
      stepType: 'quiz',
      content: '米田の補題の内容を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '米田の補題が主張する全単射はどれですか？',
        options: [
          { id: 'a', label: 'Hom(A,B) ≅ Hom(B,A)', correct: false },
          { id: 'b', label: 'Nat(Hom(A,-), F) ≅ F(A)', correct: true },
          { id: 'c', label: 'F(A) ≅ G(A) for all A', correct: false },
          { id: 'd', label: 'Hom(A,A) ≅ {id_A}', correct: false }
        ],
        explanation: '米田の補題は Nat(Hom(A,-), F) ≅ F(A) という自然な全単射を主張します。Hom関手からFへの自然変換がF(A)の元と一対一に対応します。'
      }
    },
    {
      id: 'alternate',
      title: '米田の補題の応用',
      stepType: 'explanation',
      content: '米田の補題は普遍性の議論の基礎です。「表現可能関手」F ≅ Hom(A,-) であればAがFの「表現対象」です。積、余積、極限などの普遍的構成は、対応する関手の表現可能性として理解できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：米田の哲学',
      stepType: 'interactive',
      content: '米田の補題は「対象はその射で完全に決まる」という圏論の哲学を数学的に精密化したものです。関手の理解、普遍性の議論、そして現代的な数学の基盤として不可欠な定理です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'yoneda-lemma-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
