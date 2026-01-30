import { Tutorial } from '../types';

export const fractalTutorial: Tutorial = {
  id: 'fractal',
  title: '【実践】フラクタル',
  description: '自己相似な図形の不思議――フラクタルと位相的次元',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '拡大しても同じ形',
      content:
        'コッホ雪片がステップごとに複雑になっていきます。どんなに拡大しても同じパターンが繰り返される自己相似性。これがフラクタルの特徴です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fractal-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'フラクタルの反復回数を変えて、形の変化を観察しましょう。拡大して自己相似性を確認してください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fractal-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'フラクタル次元',
      content:
        'コッホ曲線の次元は log4/log3 ≈ 1.26。直線（1次元）と平面（2次元）の間の「分数次元」。位相的次元は1ですが、フラクタル次元はそれを超えます。',
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
      title: 'カントール集合',
      content:
        '[0,1]から真ん中の1/3を取り除く操作を無限に繰り返すとカントール集合。長さ0なのに非可算無限個の点がある。連結でなく完全不連結。位相的に非常に特殊な集合です。',
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
        'シェルピンスキーの三角形のフラクタル次元は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'シェルピンスキー三角形の次元は？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: 'log3/log2 ≈ 1.58', correct: true },
          { id: 'c', label: '1.5', correct: false },
          { id: 'd', label: '2', correct: false },
        ],
        explanation:
          'シェルピンスキー三角形は各ステップで3つのコピーが1/2のスケールで現れるので、次元は log3/log2 ≈ 1.585 です。',
      },
    },
    {
      id: 'alternate',
      title: '自然の中のフラクタル',
      content:
        '海岸線、雲、樹木の枝分かれ、肺の気管支。自然界にはフラクタル的な構造が多く見られます。フラクタルは「複雑さ」を数学で測る道具でもあります。',
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
        'フラクタル＝自己相似な図形で、分数次元を持つ。\n\nポイント：\n- フラクタル次元 > 位相的次元\n- 自己相似性がキー\n- 自然界の複雑な形を記述\n\nフラクタルを生成してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fractal-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
