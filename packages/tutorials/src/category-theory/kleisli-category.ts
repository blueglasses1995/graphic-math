import { Tutorial } from '../types';

export const kleisliCategoryTutorial: Tutorial = {
  id: 'kleisli-category',
  title: 'クライスリ圏',
  category: 'category-theory',
  description: 'モナドから構成されるクライスリ圏を学ぶ',
  steps: [
    {
      id: 'hook',
      title: 'モナドから圏へ',
      stepType: 'animation',
      content: 'モナドTから「装飾された射」A→T(B)を射とする新しい圏が作れます。これがクライスリ圏です。Haskellのdo記法の背後にある構造をアニメーションで見ましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: 'クライスリ合成を体験',
      stepType: 'interactive',
      content: 'クライスリ射 f: A→T(B) と g: B→T(C) のクライスリ合成 g ∘_K f = μ_C∘T(g)∘f: A→T(C) を構成してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'クライスリ圏の定義',
      stepType: 'explanation',
      content: 'モナド (T, η, μ) のクライスリ圏 C_T は：対象はCと同じ、射 A→B は元の圏の射 A→T(B)（クライスリ射）、合成は g ∘_K f = μ∘T(g)∘f、恒等射は η_A: A→T(A) です。モナド則から圏の公理が成り立ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: 'プログラミングとの対応',
      stepType: 'explanation',
      content: 'Haskellでは、クライスリ射 a -> m b は副作用を伴う計算を表します。>>=（bind）演算子はクライスリ合成に対応し、return は恒等射η_Aに対応します。do記法はクライスリ圏での射の合成を読みやすく書いた構文糖です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'クライスリ圏の確認',
      stepType: 'quiz',
      content: 'クライスリ圏の構造を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'クライスリ圏の恒等射はどれですか？',
        options: [
          { id: 'a', label: 'id_A: A→A', correct: false },
          { id: 'b', label: 'η_A: A→T(A)', correct: true },
          { id: 'c', label: 'μ_A: T(T(A))→T(A)', correct: false },
          { id: 'd', label: 'T(id_A): T(A)→T(A)', correct: false }
        ],
        explanation: 'クライスリ圏の恒等射は単位η_A: A→T(A)です。クライスリ射A→Bは元の圏の射A→T(B)なので、「恒等」はA→T(A)つまりη_Aです。'
      }
    },
    {
      id: 'alternate',
      title: 'アイレンベルク・ムーア圏との関係',
      stepType: 'explanation',
      content: 'モナドTからはクライスリ圏C_TとEM圏C^Tの2つの圏が構成でき、ともにTを生み出す随伴を与えます。C_Tは「最小の」随伴分解、C^Tは「最大の」随伴分解です。任意のモナドの随伴分解はこの2つの間に位置します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：クライスリ圏の実用性',
      stepType: 'interactive',
      content: 'クライスリ圏はモナドの構造を圏として表現し、「装飾された計算」の合成を形式化します。関数型プログラミングでの副作用処理の理論的基盤として重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
