import { Tutorial } from '../types';

export const monoEpiTutorial: Tutorial = {
  id: 'mono-epi',
  title: 'モノ射とエピ射',
  category: 'category-theory',
  description: '単射・全射の圏論的一般化であるモノ射とエピ射を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '射の分類',
      stepType: 'animation',
      content: '集合論では単射と全射が基本的ですが、圏論ではこれを「左簡約可能」「右簡約可能」として一般化します。モノ射とエピ射の振る舞いをアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'mono-epi-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '簡約性を試す',
      stepType: 'interactive',
      content: 'モノ射mに対して m∘f = m∘g ならば f = g となることを確認しましょう。射を選んで合成し、簡約性を体験してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'mono-epi-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'モノ射（単射の一般化）',
      stepType: 'explanation',
      content: '射 m: A→B がモノ射であるとは、任意の射 f,g: C→A に対して m∘f = m∘g ⟹ f = g が成り立つことです。集合の圏では、モノ射は単射と一致します。「左から簡約できる」射です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: 'エピ射（全射の一般化）',
      stepType: 'explanation',
      content: '射 e: A→B がエピ射であるとは、任意の射 f,g: B→C に対して f∘e = g∘e ⟹ f = g が成り立つことです。集合の圏ではエピ射は全射と一致します。「右から簡約できる」射です。注意：一般の圏ではモノ射かつエピ射でも同型射とは限りません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'モノ射とエピ射の確認',
      stepType: 'quiz',
      content: 'モノ射とエピ射の性質について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'モノ射の定義として正しいものはどれですか？',
        options: [
          { id: 'a', label: 'f∘e = g∘e ならば f = g', correct: false },
          { id: 'b', label: 'm∘f = m∘g ならば f = g', correct: true },
          { id: 'c', label: '逆射が存在する', correct: false },
          { id: 'd', label: '恒等射と等しい', correct: false }
        ],
        explanation: 'モノ射 m は左簡約可能な射です。m∘f = m∘g ⟹ f = g が定義です。エピ射は右簡約可能で f∘e = g∘e ⟹ f = g です。'
      }
    },
    {
      id: 'alternate',
      title: '分裂モノ射・分裂エピ射',
      stepType: 'explanation',
      content: '左逆射を持つモノ射を分裂モノ射、右逆射を持つエピ射を分裂エピ射と呼びます。分裂エピ射の存在は選択公理に関連します。分裂モノ射は「レトラクト」の概念とも結びつきます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：射の性質',
      stepType: 'interactive',
      content: 'モノ射とエピ射は単射・全射の圏論的一般化です。「要素」を使わず「他の射との関係」だけで特徴づけるのが圏論流です。様々な圏でモノ射・エピ射を見つけてみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'mono-epi-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
