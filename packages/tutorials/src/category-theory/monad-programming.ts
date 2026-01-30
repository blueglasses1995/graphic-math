import { Tutorial } from '../types';

export const monadProgrammingTutorial: Tutorial = {
  id: 'monad-programming',
  title: 'モナドとプログラミング',
  category: 'category-theory',
  description: 'モナドがプログラミングでどう活用されるかを圏論の観点から学ぶ',
  steps: [
    {
      id: 'hook',
      title: '副作用を制御する',
      stepType: 'animation',
      content: 'Maybe, List, IO, State——これらはすべてモナドです。純粋関数型プログラミングで副作用を安全に扱うモナドの仕組みをアニメーションで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'monad-programming-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: 'bind演算を体験',
      stepType: 'interactive',
      content: 'Maybeモナドで >>=(bind)を使った計算の連鎖を体験しましょう。Just値の伝播とNothing（失敗）の短絡評価を視覚的に確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'monad-programming-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'プログラミングのモナド',
      stepType: 'explanation',
      content: 'モナドは return :: a → m a と >>= :: m a → (a → m b) → m b を持ちます。return は値をモナドに包み、>>= は「包まれた値」に関数を適用します。モナド則（左単位律、右単位律、結合律）は計算の合成が一貫していることを保証します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '具体的なモナドたち',
      stepType: 'explanation',
      content: 'Maybe：失敗しうる計算。List：非決定性計算。IO：入出力を伴う計算。State：状態を持つ計算。Reader：環境を参照する計算。Writer：ログを書き出す計算。それぞれが異なる「計算の文脈」を表現します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'モナドとプログラミングの確認',
      stepType: 'quiz',
      content: 'プログラミングにおけるモナドを確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'Haskellのdo記法は圏論的に何に対応しますか？',
        options: [
          { id: 'a', label: '関手の合成', correct: false },
          { id: 'b', label: '自然変換', correct: false },
          { id: 'c', label: 'クライスリ圏での射の合成', correct: true },
          { id: 'd', label: '随伴関手', correct: false }
        ],
        explanation: 'do記法はクライスリ圏での射の合成を読みやすく記述する構文糖です。>>=(bind)がクライスリ合成に対応し、returnが恒等射(η)に対応します。'
      }
    },
    {
      id: 'alternate',
      title: 'モナド変換子',
      stepType: 'explanation',
      content: 'モナド変換子（Monad Transformer）は複数のモナドを「重ねる」仕組みです。MaybeT, StateT, ReaderTなどにより、複数の計算効果を組み合わせられます。圏論的にはモナドの合成やdistributive lawに関連します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：モナドの実用',
      stepType: 'interactive',
      content: 'モナドは圏論の抽象的概念が実用的プログラミングに直結する最も美しい例です。副作用の管理、計算の合成、エラーハンドリングをモナドで統一的に扱えます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'monad-programming-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
