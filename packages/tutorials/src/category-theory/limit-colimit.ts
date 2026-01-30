import { Tutorial } from '../types';

export const limitColimitTutorial: Tutorial = {
  id: 'limit-colimit',
  title: '極限と余極限',
  category: 'category-theory',
  description: '圏論的極限と余極限の概念を統一的に学ぶ',
  steps: [
    {
      id: 'hook',
      title: '普遍的な構成',
      stepType: 'animation',
      content: '積、等化子、引き戻しは「極限」として、余積、余等化子、押し出しは「余極限」として統一できます。図式からの最良の「まとめ方」をアニメーションで見ましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '極限の普遍性を体験',
      stepType: 'interactive',
      content: '図式 D: J→C の極限を構成しましょう。錐（cone）を作り、普遍錐（極限）への一意な射が存在することを確認してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '極限の定義',
      stepType: 'explanation',
      content: '図式 D: J→C の極限は対象 lim D と射影 π_j: lim D → D(j) の族（錐）で、普遍性を満たすものです。任意の錐 (X, f_j: X→D(j)) に対して、一意な h: X→lim D が存在して全ての j で π_j∘h = f_j。積、等化子、引き戻しは特殊な極限です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '余極限の定義',
      stepType: 'explanation',
      content: '余極限は極限の双対です。図式D: J→Cの余極限は対象 colim D と入射 ι_j: D(j)→colim D の族（余錐）で、普遍性を満たします。余積、余等化子、押し出しは特殊な余極限です。任意の余錐に対して一意な射が余極限から出ます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '極限と余極限の確認',
      stepType: 'quiz',
      content: '極限について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '以下のどれが極限の例ですか？',
        options: [
          { id: 'a', label: '余積', correct: false },
          { id: 'b', label: '押し出し', correct: false },
          { id: 'c', label: '引き戻し（pullback）', correct: true },
          { id: 'd', label: '余等化子', correct: false }
        ],
        explanation: '引き戻し（pullback）は極限の一種です。余積、押し出し、余等化子は余極限の例です。積、等化子、引き戻しが極限の代表的な例です。'
      }
    },
    {
      id: 'alternate',
      title: '完備な圏',
      stepType: 'explanation',
      content: 'すべての小さな極限が存在する圏を完備、すべての小さな余極限が存在する圏を余完備と呼びます。Setは完備かつ余完備です。一般に、随伴関手定理により、適切な条件下で極限を保存する関手は右随伴を持ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：極限の統一性',
      stepType: 'interactive',
      content: '極限と余極限は圏論の普遍的構成を統一する枠組みです。積、等化子、引き戻しなど個別に見えた概念が一つの原理から導かれます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
