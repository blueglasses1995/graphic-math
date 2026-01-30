import { Tutorial } from '../types';

export const hairyBallTutorial: Tutorial = {
  id: 'hairy-ball',
  title: '【実践】毛玉定理',
  description: '球面上の毛を全部寝かせることはできない――毛玉定理',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '必ずつむじがある',
      content:
        '球面上のベクトル場（毛の向き）が表示されます。どんなに工夫しても毛が逆立つ点（零点）が必ず生まれます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-hairy-ball-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '球面上の毛の向きをドラッグで変えてみましょう。全部を寝かせようとしても必ずどこかにつむじが残ります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-hairy-ball-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '毛玉定理の正確な表現',
      content:
        'S²（偶数次元球面）上の連続な接線ベクトル場は必ず零点を持つ。つまり「毛が寝ている方向」を連続的に定めると、必ず「毛が立つ点」（つむじ）が現れます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'トーラスでは可能',
      content:
        'トーラス（ドーナツ型）では毛を全部寝かせられます。オイラー標数 χ=0 なので零点が不要です。球面は χ=2≠0 なので零点が必要。χ がこの違いを説明します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        '地球上の風（接線ベクトル場）に必ず無風地点がある？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '地球上に必ず無風の点がある？',
        options: [
          { id: 'a', label: '必ずある', correct: true },
          { id: 'b', label: '常に風がある可能性もある', correct: false },
          { id: 'c', label: '季節による', correct: false },
          { id: 'd', label: '地形による', correct: false },
        ],
        explanation:
          '風は地球表面（≈S²）上の接線ベクトル場。毛玉定理により零点（無風地点）が必ず存在します。台風の目がその一例です。',
      },
    },
    {
      id: 'alternate',
      title: 'ココナッツで考える',
      content:
        'ココナッツ（球体）の繊維を全部同じ方向に撫でつけることはできません。必ずどこかに渦（つむじ）ができます。英語では "You can\'t comb a coconut" とも言います。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '毛玉定理＝球面上の連続接線ベクトル場は零点を持つ。\n\nポイント：\n- オイラー標数 χ≠0 の曲面で成立\n- トーラス（χ=0）では零点不要\n- 気象学への直接的な応用\n\n毛の向きを変えて実験しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-hairy-ball-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
