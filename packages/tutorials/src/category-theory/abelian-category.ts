import { Tutorial } from '../types';

export const abelianCategoryTutorial: Tutorial = {
  id: 'abelian-category',
  title: 'アーベル圏入門',
  category: 'category-theory',
  description: 'ホモロジー代数の舞台であるアーベル圏を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '加法的な圏',
      stepType: 'animation',
      content: 'アーベル圏では射の「足し算」ができ、核や余核が常に存在します。加群のように振る舞う圏の世界をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'abelian-category-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '核と余核を求める',
      stepType: 'interactive',
      content: '射 f: A→B の核（ker f）と余核（coker f）を視覚的に構成しましょう。ker f → A → B → coker f の完全列を確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'abelian-category-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'アーベル圏の定義',
      stepType: 'explanation',
      content: 'アーベル圏は：(1) 加法圏（Hom集合がアーベル群、双積が存在）、(2) すべての射が核と余核を持つ、(3) すべてのモノ射が核であり、すべてのエピ射が余核である。加群の圏 R-Mod が典型例です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '完全列',
      stepType: 'explanation',
      content: 'アーベル圏では完全列が定義できます。列 A→B→C が B で完全とは im(f) = ker(g) であることです。短完全列 0→A→B→C→0 は「Aが Bの部分対象で、CがB/Aの商」を意味します。ホモロジー代数の基礎です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'アーベル圏の特徴を確認',
      stepType: 'quiz',
      content: 'アーベル圏について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'アーベル圏の条件として正しくないものはどれですか？',
        options: [
          { id: 'a', label: 'すべての射が核と余核を持つ', correct: false },
          { id: 'b', label: 'すべてのモノ射が核である', correct: false },
          { id: 'c', label: 'Hom集合がアーベル群の構造を持つ', correct: false },
          { id: 'd', label: 'すべての射が同型射である', correct: true }
        ],
        explanation: 'アーベル圏ですべての射が同型射である必要はありません。核・余核の存在、モノ射=核、エピ射=余核などが特徴的な性質です。'
      }
    },
    {
      id: 'alternate',
      title: 'フロベニウスの定理と埋め込み',
      stepType: 'explanation',
      content: 'フライド・ミッチェルの埋め込み定理により、小さなアーベル圏は加群の圏に忠実充満完全に埋め込めます。つまりアーベル圏の性質は「加群で考えれば十分」という強力な結果です。図式追跡が正当化されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：アーベル圏の世界',
      stepType: 'interactive',
      content: 'アーベル圏はホモロジー代数の自然な舞台です。核・余核・完全列という概念により、代数的構造の「差分」を測る理論が展開できます。層のコホモロジーやスペクトル系列の基礎です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'abelian-category-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
