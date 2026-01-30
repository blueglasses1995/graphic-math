import { Tutorial } from '../types';

export const adjointFunctorTutorial: Tutorial = {
  id: 'adjoint-functor',
  title: '随伴関手',
  category: 'category-theory',
  description: '圏論の中心概念「随伴」を学び、左随伴と右随伴の関係を理解する',
  steps: [
    {
      id: 'hook',
      title: '最良の近似',
      stepType: 'animation',
      content: '随伴は「最良の近似」の概念です。自由群と忘却関手、テンソル積とHom関手——多くの重要な構成が随伴として統一的に理解できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '随伴の対応を体験',
      stepType: 'interactive',
      content: '左随伴F ⊣ 右随伴G の関係 Hom_D(F(A), B) ≅ Hom_C(A, G(B)) を視覚的に体験しましょう。対応する射のペアを結んでみてください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '随伴の定義',
      stepType: 'explanation',
      content: '関手 F: C→D と G: D→C が随伴 F ⊣ G であるとは、任意の A∈C, B∈D に対して自然な全単射 Hom_D(F(A), B) ≅ Hom_C(A, G(B)) が存在することです。Fを左随伴、Gを右随伴と呼びます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '随伴の例',
      stepType: 'explanation',
      content: '自由・忘却随伴：自由関手F: Set→Grp と忘却関手U: Grp→Set は F ⊣ U です。集合XからU(G)への写像は、自由群F(X)からGへの準同型に一意に対応します。他にもテンソル積 -⊗A ⊣ Hom(A,-) やΣ ⊣ Δ ⊣ Πなど随伴は至る所に存在します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '随伴の理解を確認',
      stepType: 'quiz',
      content: '随伴関手について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'F ⊣ G（Fが左随伴、Gが右随伴）のとき成り立つのは？',
        options: [
          { id: 'a', label: 'F∘G = Id', correct: false },
          { id: 'b', label: 'Hom(F(A), B) ≅ Hom(A, G(B))（自然に）', correct: true },
          { id: 'c', label: 'F = G⁻¹', correct: false },
          { id: 'd', label: 'F(A) = G(A) for all A', correct: false }
        ],
        explanation: '随伴 F ⊣ G の定義は Hom_D(F(A), B) ≅ Hom_C(A, G(B)) の自然な全単射です。FとGは逆関手ではなく、Hom集合の間の対応で結ばれます。'
      }
    },
    {
      id: 'alternate',
      title: '単位と余単位',
      stepType: 'explanation',
      content: '随伴 F ⊣ G は単位 η: Id_C → G∘F と余単位 ε: F∘G → Id_D（自然変換）でも特徴づけられます。三角恒等式 εF∘Fη = id_F かつ Gε∘ηG = id_G を満たします。この定式化はモナドの定義に直結します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：随伴の普遍性',
      stepType: 'interactive',
      content: '随伴はマックレーンが「圏論の中心概念」と呼んだほど重要です。左随伴は余極限を保存し、右随伴は極限を保存します。数学の多くの構成が随伴として統一的に理解できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
