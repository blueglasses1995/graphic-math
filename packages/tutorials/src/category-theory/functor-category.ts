import { Tutorial } from '../types';

export const functorCategoryTutorial: Tutorial = {
  id: 'functor-category',
  title: '関手圏',
  category: 'category-theory',
  description: '関手を対象、自然変換を射とする関手圏を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '圏の圏',
      stepType: 'animation',
      content: '関手を「対象」、自然変換を「射」と見なすと、新しい圏が得られます。これが関手圏 [C,D] です。圏論自身が圏論的に記述できる再帰的構造をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-category-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '自然変換の合成',
      stepType: 'interactive',
      content: '2つの自然変換 α: F⟹G と β: G⟹H の垂直合成 β∘α: F⟹H を構成してみましょう。各成分で合成 (β∘α)_A = β_A∘α_A となることを確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-category-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '関手圏の定義',
      stepType: 'explanation',
      content: '関手圏 [C,D]（またはD^C）は次のように定義されます：対象は関手 F: C→D、射は自然変換 α: F⟹G、合成は自然変換の垂直合成（各成分ごとの合成）、恒等射は恒等自然変換 id_F（各成分が恒等射）です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '水平合成と交換法則',
      stepType: 'explanation',
      content: '自然変換には垂直合成と水平合成があります。α: F⟹G（C→D間）と β: H⟹K（D→E間）の水平合成 β*α: H∘F⟹K∘G が定義できます。交換法則により、垂直合成と水平合成は整合的に振る舞います。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '関手圏の理解を確認',
      stepType: 'quiz',
      content: '関手圏について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '関手圏 [C,D] の射は何ですか？',
        options: [
          { id: 'a', label: '関手', correct: false },
          { id: 'b', label: '自然変換', correct: true },
          { id: 'c', label: '対象間の写像', correct: false },
          { id: 'd', label: '圏の間の対応', correct: false }
        ],
        explanation: '関手圏 [C,D] では関手が対象、自然変換が射です。自然変換の垂直合成が射の合成に対応し、恒等自然変換が恒等射です。'
      }
    },
    {
      id: 'alternate',
      title: '前層と関手圏',
      stepType: 'explanation',
      content: '前層の圏 [C^op, Set] は重要な関手圏です。米田埋め込み y: C→[C^op, Set] により、圏Cは前層の圏に忠実充満に埋め込まれます。これはCの「完成」とも言え、極限の存在が保証されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：関手圏の力',
      stepType: 'interactive',
      content: '関手圏は「圏について語る圏」です。関手を対象として扱うことで、より高次の構造が見えてきます。2-圏、∞-圏へと続く高次圏論の入口でもあります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-category-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
