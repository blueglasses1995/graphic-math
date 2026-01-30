import { Tutorial } from '../types';

export const initialTerminalTutorial: Tutorial = {
  id: 'initial-terminal',
  title: '始対象と終対象',
  category: 'category-theory',
  description: '始対象と終対象の普遍性を理解する',
  steps: [
    {
      id: 'hook',
      title: '特別な対象',
      stepType: 'animation',
      content: 'すべての対象へ一意な射を持つ「始対象」と、すべての対象から一意な射を受ける「終対象」。これらは圏の中で特権的な位置を占めます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'initial-terminal-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '始対象と終対象を探す',
      stepType: 'interactive',
      content: '与えられた圏の図の中で、始対象と終対象を見つけてクリックしてください。すべての対象への（からの）一意な射が可視化されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'initial-terminal-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '始対象',
      stepType: 'explanation',
      content: '対象0が始対象であるとは、任意の対象Xに対して射 0→X がちょうど1つ存在することです。集合の圏では空集合∅が始対象です（空集合からの写像は一意に存在します）。始対象は同型を除いて一意です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '終対象',
      stepType: 'explanation',
      content: '対象1が終対象であるとは、任意の対象Xに対して射 X→1 がちょうど1つ存在することです。集合の圏では一点集合{*}が終対象です。プログラミングではunit型やvoid型に対応します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '始対象と終対象の確認',
      stepType: 'quiz',
      content: '始対象と終対象について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '集合の圏Setにおける始対象はどれですか？',
        options: [
          { id: 'a', label: '自然数の集合ℕ', correct: false },
          { id: 'b', label: '一点集合{*}', correct: false },
          { id: 'c', label: '空集合∅', correct: true },
          { id: 'd', label: '実数の集合ℝ', correct: false }
        ],
        explanation: '空集合∅は始対象です。任意の集合Xに対して ∅→X の写像（空写像）がちょうど1つ存在します。一点集合{*}は終対象です。'
      }
    },
    {
      id: 'alternate',
      title: 'ゼロ対象',
      stepType: 'explanation',
      content: '始対象かつ終対象である対象をゼロ対象と呼びます。アーベル群の圏では自明な群{0}がゼロ対象です。ゼロ対象の存在により「ゼロ射」A→0→Bが定義でき、加法的構造の基礎になります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：普遍性の第一歩',
      stepType: 'interactive',
      content: '始対象と終対象は「普遍性」の最も単純な例です。「すべての対象に対して一意な射が存在する」という性質で特徴づけられます。この考え方は積、余積、極限へと拡張されていきます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'initial-terminal-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
