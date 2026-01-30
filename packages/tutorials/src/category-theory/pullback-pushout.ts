import { Tutorial } from '../types';

export const pullbackPushoutTutorial: Tutorial = {
  id: 'pullback-pushout',
  title: '引き戻しと押し出し',
  category: 'category-theory',
  description: '引き戻し（pullback）と押し出し（pushout）を具体的に学ぶ',
  steps: [
    {
      id: 'hook',
      title: 'ファイバー積と余ファイバー積',
      stepType: 'animation',
      content: '引き戻しは2つの射が「共通の先」で出会う点を集めた構成です。押し出しはその双対です。幾何的なイメージをアニメーションで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '引き戻しを構成',
      stepType: 'interactive',
      content: '射 f: A→C と g: B→C から引き戻し A×_C B を構成してみましょう。普遍性を満たす一意の射が存在することを確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '引き戻しの定義',
      stepType: 'explanation',
      content: 'f: A→C と g: B→C の引き戻しは対象 P と射 p₁: P→A, p₂: P→B で、f∘p₁ = g∘p₂ かつ普遍性を満たすものです。集合の圏では P = {(a,b) ∈ A×B | f(a) = g(b)} です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '押し出しの定義',
      stepType: 'explanation',
      content: 'f: C→A と g: C→B の押し出しは引き戻しの双対です。対象 Q と射 q₁: A→Q, q₂: B→Q で、q₁∘f = q₂∘g かつ普遍性を満たします。集合の圏では A⊔B をf(c)∼g(c)で同一視した商集合です。位相空間の貼り合わせも押し出しで記述できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '引き戻しの理解を確認',
      stepType: 'quiz',
      content: '引き戻しについて確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '集合の圏で f: A→C, g: B→C の引き戻しはどれですか？',
        options: [
          { id: 'a', label: 'A ∪ B', correct: false },
          { id: 'b', label: 'A × B', correct: false },
          { id: 'c', label: '{(a,b) ∈ A×B | f(a) = g(b)}', correct: true },
          { id: 'd', label: 'A ∩ B', correct: false }
        ],
        explanation: '引き戻しはファイバー積とも呼ばれ、直積のうち f(a) = g(b) を満たすペアの集合です。2つの射が「C上で一致する」点を集めた構成です。'
      }
    },
    {
      id: 'alternate',
      title: '応用例',
      stepType: 'explanation',
      content: '引き戻しはファイバー束の理論、スキームの理論（代数幾何）、型理論（依存型のΣ型）など多くの場面で現れます。押し出しは空間の貼り合わせ（CW複体の構成）やアマルガム積（群論）で重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：幾何的直感',
      stepType: 'interactive',
      content: '引き戻しと押し出しは極限と余極限の最も幾何的な例です。「上で出会う」「下で貼り合わせる」という直感を持つことで、抽象的な普遍性の議論に具体的なイメージを与えられます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
