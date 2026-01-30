import { Tutorial } from '../types';

export const categoryDefinitionTutorial: Tutorial = {
  id: 'category-definition',
  title: '圏の定義',
  category: 'category-theory',
  description: '圏の正式な定義を学び、対象・射・合成・恒等射の公理を理解する',
  steps: [
    {
      id: 'hook',
      title: '矢印の世界',
      stepType: 'animation',
      content: '圏とは、点（対象）と矢印（射）の集まりです。矢印は「つなげる」ことができ、各点には「何もしない矢印」があります。この単純な構造がいかに豊かな数学を生むかをアニメーションで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '圏を構成してみよう',
      stepType: 'interactive',
      content: '対象A, B, Cと射f: A→B, g: B→Cを配置してください。合成射g∘f: A→Cが自動的に生成されることを確認しましょう。恒等射id_A, id_B, id_Cも表示されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '圏の公理',
      stepType: 'explanation',
      content: '圏Cは次を満たします：(1) 対象の集まりOb(C)、(2) 各対象ペア(A,B)に対し射の集まりHom(A,B)、(3) 射の合成∘が結合律を満たす：h∘(g∘f) = (h∘g)∘f、(4) 各対象Aに恒等射id_Aが存在し、f∘id_A = f = id_B∘f。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '具体例：集合の圏Set',
      stepType: 'explanation',
      content: '最も基本的な圏Setでは、対象は集合、射は集合間の写像です。合成は関数合成、恒等射は恒等写像id(x)=xです。関数合成の結合律（h∘(g∘f)=(h∘g)∘f）と恒等写像の性質がSetを圏にします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '圏の公理を確認',
      stepType: 'quiz',
      content: '圏が満たすべき公理について考えましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '圏の公理として正しくないものはどれですか？',
        options: [
          { id: 'a', label: '射の合成は結合律を満たす', correct: false },
          { id: 'b', label: '各対象に恒等射が存在する', correct: false },
          { id: 'c', label: 'すべての射は可逆である', correct: true },
          { id: 'd', label: '恒等射は合成の単位元である', correct: false }
        ],
        explanation: '圏の公理は結合律と恒等射の存在のみです。すべての射が可逆である必要はありません。すべての射が可逆な圏は特別に「亜群（groupoid）」と呼ばれます。'
      }
    },
    {
      id: 'alternate',
      title: '小さな圏の例',
      stepType: 'explanation',
      content: '有限個の対象と射からなる小さな圏を考えましょう。例えば、対象が1つだけの圏はモノイドと同じです。対象が{0,1}で射が0→1の1本だけ（＋恒等射）の圏は順序集合{0≤1}に対応します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：圏の定義を完成',
      stepType: 'interactive',
      content: '圏は対象・射・合成・恒等射から構成され、結合律と単位律を満たします。自分で小さな圏を作り、すべての公理が成り立つことを確認してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
