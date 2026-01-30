import { Tutorial } from '../types';

export const functorProgrammingTutorial: Tutorial = {
  id: 'functor-programming',
  title: '関手プログラミング',
  category: 'category-theory',
  description: '関手の概念をプログラミングに活用する方法を学ぶ',
  steps: [
    {
      id: 'hook',
      title: 'mapの一般化',
      stepType: 'animation',
      content: 'Array.map, Optional.map, Promise.then——これらは皆「関手」です。コンテナの中身に関数を適用するパターンを関手として統一するアニメーションを見ましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-programming-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: 'fmapを使いこなす',
      stepType: 'interactive',
      content: '様々なFunctor（List, Maybe, Tree）に対してfmapを適用し、中身に関数が適用される様子を視覚的に体験しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-programming-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'プログラミングの関手',
      stepType: 'explanation',
      content: 'Functor型クラス：fmap :: (a→b) → f a → f b。Listの場合：fmap f [x₁,x₂,...] = [f(x₁), f(x₂),...]。Maybeの場合：fmap f (Just x) = Just (f x), fmap f Nothing = Nothing。構造を保ったまま中身を変換します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: 'Applicative関手',
      stepType: 'explanation',
      content: 'Applicative関手はFunctorを拡張し、pure :: a → f a と <*> :: f (a→b) → f a → f b を持ちます。「関手の中の関数」を「関手の中の値」に適用できます。モノイダル関手の一種で、FunctorとMonadの中間に位置します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '関手プログラミングの確認',
      stepType: 'quiz',
      content: 'プログラミングにおける関手を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'Functorの法則 fmap id = id は何を意味しますか？',
        options: [
          { id: 'a', label: 'すべての値が等しくなる', correct: false },
          { id: 'b', label: '恒等関数をmapしても構造が変わらない', correct: true },
          { id: 'c', label: 'fmapは恒等関数である', correct: false },
          { id: 'd', label: '型が変化しない', correct: false }
        ],
        explanation: 'fmap id = id は「恒等関数をmapしても何も変わらない」ことを意味します。これは関手が恒等射を保存するという圏論的条件のプログラミング版です。'
      }
    },
    {
      id: 'alternate',
      title: '反変関手とContravariant',
      stepType: 'explanation',
      content: 'HaskellにはContravariant型クラスもあります。contramap :: (b→a) → f a → f b は関数の向きが逆です。述語 Predicate a = a → Bool は反変関手で、contramap f p = p . f です。比較関数やシリアライザなどが反変関手の例です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：関手で設計する',
      stepType: 'interactive',
      content: '関手はプログラミングの「構造を保つ変換」パターンを抽象化します。map/fmapの統一的理解により、新しいデータ構造に対しても自然にFunctorインスタンスを実装できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-programming-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
