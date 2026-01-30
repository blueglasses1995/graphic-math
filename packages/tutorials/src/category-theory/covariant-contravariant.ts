import { Tutorial } from '../types';

export const covariantContravariantTutorial: Tutorial = {
  id: 'covariant-contravariant',
  title: '共変関手と反変関手',
  category: 'category-theory',
  description: '矢印の向きを保つ共変関手と逆転させる反変関手を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '向きを変える関手',
      stepType: 'animation',
      content: '共変関手は射の向きを保存しますが、反変関手は射の向きを逆転させます。この違いがどのように現れるかをアニメーションで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'covariant-contravariant-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '矢印の向きを追跡',
      stepType: 'interactive',
      content: '共変関手と反変関手それぞれについて、射の向きがどう変わるかを視覚的に追跡しましょう。射をクリックして像を確認してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'covariant-contravariant-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '共変関手',
      stepType: 'explanation',
      content: '共変関手 F: C→D は射 f: A→B を F(f): F(A)→F(B) に移します。向きが同じです。例：リスト関手 List は写像 f: A→B を List(f): List(A)→List(B)（各要素にfを適用）に移す共変関手です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '反変関手',
      stepType: 'explanation',
      content: '反変関手 F: C^op→D は射 f: A→B を F(f): F(B)→F(A) に移します。向きが逆転します。例：双対空間関手 V↦V* は線形写像 f: V→W を f*: W*→V* に移す反変関手です。Hom関手 Hom(-,X) も反変関手の代表例です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '共変と反変の区別',
      stepType: 'quiz',
      content: '共変関手と反変関手の違いを確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '反変関手F が射 f: A→B に対して行うことは？',
        options: [
          { id: 'a', label: 'F(f): F(A)→F(B) に移す', correct: false },
          { id: 'b', label: 'F(f): F(B)→F(A) に移す', correct: true },
          { id: 'c', label: 'fを消去する', correct: false },
          { id: 'd', label: 'F(f) = id とする', correct: false }
        ],
        explanation: '反変関手は射の向きを逆転させます。f: A→B に対して F(f): F(B)→F(A) となります。これは C^op から D への共変関手と同じです。'
      }
    },
    {
      id: 'alternate',
      title: 'Hom関手',
      stepType: 'explanation',
      content: 'Hom関手は圏論の中核です。Hom(A,-): C→Set は共変関手（fを後合成で移す）、Hom(-,B): C^op→Set は反変関手（fを前合成で移す）です。Hom(-,-): C^op×C→Set は双関手です。米田の補題はHom関手の性質を明らかにします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：関手の方向性',
      stepType: 'interactive',
      content: '共変関手は構造を「そのまま」移し、反変関手は「逆向き」に移します。双対空間やHom関手など、数学の至る所に反変関手が現れます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'covariant-contravariant-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
