import { Tutorial } from '../types';

export const halfAngleTutorial: Tutorial = {
  id: 'half-angle',
  title: '【実践】半角の公式',
  description: 'sin(θ/2)とcos(θ/2)はゆっくりした波。2倍角の逆を辿る',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '角度を半分にすると',
      content:
        'θの半分の角度 θ/2 は、θの半分の速さで動きます。\n\n黄色がθ、紫がθ/2。下のグラフではsin(θ)（薄緑）とsin(θ/2)（紫）を比較しています。\n\n再生して波の違いを見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ゆっくりな波を観察',
      content:
        '再生と一時停止で確認してください。\n\nθが一周（360°）したとき、θ/2はどこまで進んでいますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-derive',
      title: '2倍角から半角を導く',
      content:
        '2倍角の公式 cos(2α) = 1 − 2sin²(α) を変形します。\n\nα = θ/2 とすると:\ncos(θ) = 1 − 2sin²(θ/2)\n\n整理すると:\nsin²(θ/2) = (1 − cos θ) / 2\nsin(θ/2) = ±√((1 − cos θ) / 2)\n\n同様に:\ncos²(θ/2) = (1 + cos θ) / 2\ncos(θ/2) = ±√((1 + cos θ) / 2)\n\n半角の公式は2倍角の「裏返し」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-concrete',
      title: '具体例: sin(15°)',
      content:
        'sin(15°) = sin(30°/2) を半角公式で計算:\n\nsin²(15°) = (1 − cos 30°) / 2\n= (1 − 0.866) / 2\n= 0.134 / 2 = 0.067\n\nsin(15°) = √0.067 ≈ 0.259\n\n検算: 電卓で sin(15°) = 0.2588... ✓\n\n30°のcosさえ知っていれば、15°のsinが求められる。それが半角公式の力です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'cos(θ/2) = ±√((1 + cos θ) / 2) を使って考えてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'cos(45°) = cos(90°/2) は？',
        options: [
          { id: 'a', label: '0.5', correct: false },
          { id: 'b', label: '√(1/2) ≈ 0.707', correct: true },
          { id: 'c', label: '√(3)/2 ≈ 0.866', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          'cos(45°) = √((1 + cos 90°) / 2) = √((1 + 0) / 2) = √(1/2) ≈ 0.707\n\ncos 90° = 0 なので、式がとてもシンプルになります。これは単位円上で45°の点の x 座標と一致しますね。',
      },
    },
    {
      id: 'alternate',
      title: '積分との関係',
      content:
        '半角公式は積分でよく使います。\n\n∫sin²(x)dx を計算するとき、sin²(x) = (1 − cos 2x)/2 と変形すると積分が簡単になります。\n\nこれは半角公式を θ/2 → x、θ → 2x と読み替えたものです。\n\n微積分を学ぶとき、半角公式は「覚える公式」ではなく「自然に必要になる変形」として再登場します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'sin(θ/2) = ±√((1−cosθ)/2)\ncos(θ/2) = ±√((1+cosθ)/2)\n\n半角公式は2倍角公式の逆。cosの値から半分の角度のsin/cosが求められます。\n\nよくある誤解: sin(θ/2) = sin(θ)/2 だと思うこと。sin(90°)/2 = 0.5 だけど sin(45°) ≈ 0.707。半分にはなりません。\n\nアニメーションで、θ/2の波がθの波の半分の速さであることを再確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
