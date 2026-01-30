import { Tutorial } from '../types';

export const naturalTransformationTutorial: Tutorial = {
  id: 'natural-transformation',
  title: '自然変換',
  category: 'category-theory',
  description: '関手間の「構造を保つ」変換である自然変換を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '関手を比較する',
      stepType: 'animation',
      content: '2つの関手F, G: C→Dがあるとき、FからGへの「自然な」移り方が自然変換です。各対象での変換が射と整合する様子をアニメーションで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'natural-transformation-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '自然性条件を体験',
      stepType: 'interactive',
      content: '自然変換 α: F⟹G の各成分 α_A: F(A)→G(A) を配置し、自然性の正方形 G(f)∘α_A = α_B∘F(f) が可換であることを確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'natural-transformation-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '自然変換の定義',
      stepType: 'explanation',
      content: '自然変換 α: F⟹G は、各対象Aに対して射 α_A: F(A)→G(A) を与え、任意の射 f: A→B に対して自然性条件 G(f)∘α_A = α_B∘F(f) を満たします。この条件は「変換が射の構造と整合する」ことを表します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '具体例：行列式',
      stepType: 'explanation',
      content: 'det: GLₙ⟹(-)* は自然変換です。GLₙ(R)（n次可逆行列群）からR*（可逆元の群）への行列式写像 det_R は、環準同型 f: R→S に対して自然性 det_S∘GLₙ(f) = f*∘det_R を満たします。「行列式を取ってから移す」と「移してから行列式を取る」が一致します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '自然性条件の確認',
      stepType: 'quiz',
      content: '自然変換の核心である自然性条件について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '自然変換 α: F⟹G の自然性条件は？',
        options: [
          { id: 'a', label: 'α_A∘α_B = id', correct: false },
          { id: 'b', label: 'F(f)∘G(f) = id', correct: false },
          { id: 'c', label: 'G(f)∘α_A = α_B∘F(f)', correct: true },
          { id: 'd', label: 'α_A∘F(f) = α_B∘G(f)', correct: false }
        ],
        explanation: '自然性条件 G(f)∘α_A = α_B∘F(f) は、「先に変換してからGで移す」と「先にFで移してから変換する」が等しいことを要求します。'
      }
    },
    {
      id: 'alternate',
      title: '自然同型',
      stepType: 'explanation',
      content: '各成分 α_A が同型射であるとき、αを自然同型と呼びます。自然同型 F≅G は2つの関手が「自然に同じ」であることを意味します。圏論で「自然に」「標準的に」という言葉は、自然変換・自然同型の存在を指すことが多いです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：自然変換の意義',
      stepType: 'interactive',
      content: '自然変換は「関手の間の射」です。マックレーンは「圏論は関手を定義するために生まれ、関手は自然変換を定義するために生まれた」と述べました。自然変換は圏論の真の主役です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'natural-transformation-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
