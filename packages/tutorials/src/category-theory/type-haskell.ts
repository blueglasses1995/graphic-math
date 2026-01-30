import { Tutorial } from '../types';

export const typeHaskellTutorial: Tutorial = {
  id: 'type-haskell',
  title: '型の圏とHaskell',
  category: 'category-theory',
  description: 'Haskellの型システムを圏論の観点から理解する',
  steps: [
    {
      id: 'hook',
      title: '型は対象、関数は射',
      stepType: 'animation',
      content: 'Haskellの型を対象、関数を射と見なすとHask圏が得られます。Functor型クラスは関手、自然変換は多相関数に対応します。この対応をアニメーションで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'type-haskell-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: 'Hask圏を探検',
      stepType: 'interactive',
      content: 'Int, String, [a], Maybe a などの型（対象）と関数（射）を配置し、Hask圏の構造を視覚的に構築してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'type-haskell-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'Hask圏の構造',
      stepType: 'explanation',
      content: 'Hask圏：対象=Haskellの型、射=関数 a→b、合成=(.)演算子、恒等射=id関数。積=タプル型(a,b)、余積=Either a b。冪対象=関数型 a→b（カリー化に対応）。カルテシアン閉圏の構造を持ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: 'Functor型クラスと関手',
      stepType: 'explanation',
      content: 'HaskellのFunctor型クラスは自己関手 Hask→Hask です。fmap :: (a→b) → (f a→f b) が射の対応を与えます。Maybe, [], IO などがFunctorのインスタンスです。fmap id = id, fmap (g.f) = fmap g . fmap f が関手則です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'Hask圏の対応を確認',
      stepType: 'quiz',
      content: 'Haskellと圏論の対応を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'HaskellのEither a bは圏論的に何に対応しますか？',
        options: [
          { id: 'a', label: '積（product）', correct: false },
          { id: 'b', label: '余積（coproduct）', correct: true },
          { id: 'c', label: '冪対象（exponential）', correct: false },
          { id: 'd', label: '引き戻し（pullback）', correct: false }
        ],
        explanation: 'Either a bは余積（直和）に対応します。Left :: a → Either a b と Right :: b → Either a b が入射です。タプル(a,b)が積に対応します。'
      }
    },
    {
      id: 'alternate',
      title: 'カリー＝ハワード＝ランベック対応',
      stepType: 'explanation',
      content: 'カリー＝ハワード対応（命題≅型、証明≅プログラム）にランベックが圏論を加えました。型理論≅論理学≅圏論（カルテシアン閉圏）。積=連言(∧)、余積=選言(∨)、冪=含意(→)。3つの分野が統一されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：型と圏の統一',
      stepType: 'interactive',
      content: 'Haskellの型システムは圏論の概念を自然に体現しています。Functor, Monad, Natural Transformationなどの型クラスは圏論からの直接的な翻訳です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'type-haskell-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
