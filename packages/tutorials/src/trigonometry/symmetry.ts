import { Tutorial } from '../types';

export const symmetryTutorial: Tutorial = {
  id: 'symmetry',
  title: 'sin/cosの対称性',
  description: 'sin/cosの偶奇性や補角・余角の関係を視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '鏡に映すと',
      content:
        'sin(-θ) = -sin(θ)、cos(-θ) = cos(θ)。\n\n角度の符号を反転すると、sinは符号が変わり、cosは変わりません。\n\nこれは単位円をx軸で折り返すとy座標は反転するがx座標は変わらないことに対応しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#4fc3f7', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'symmetry-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '対称性を確認',
      content:
        '角度θと-θの両方の点を単位円上で確認しましょう。\n\nx軸に対して鏡像の関係になっていますか？ cosの値は同じで、sinの符号だけ反転していることを確かめてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'symmetry-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'drag-unit-circle',
        initialAngle: 0.8,
      },
    },
    {
      id: 'example-1',
      title: '偶関数と奇関数',
      content:
        'cos(-θ) = cos(θ) → cosは偶関数（y軸対称）\nsin(-θ) = -sin(θ) → sinは奇関数（原点対称）\n\n具体例:\ncos(-60°) = cos(60°) = 0.5 ✓\nsin(-60°) = -sin(60°) = -√3/2 ≈ -0.866 ✓\n\nグラフで見ると、cosのグラフはy軸で折り返しても同じ形。sinのグラフは原点を中心に180°回転しても同じ形です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '補角と余角の関係',
      content:
        '余角（90° - θ）:\nsin(90° - θ) = cos(θ)\ncos(90° - θ) = sin(θ)\n\n補角（180° - θ）:\nsin(180° - θ) = sin(θ)\ncos(180° - θ) = -cos(θ)\n\n具体例: sin(120°) = sin(180° - 60°) = sin(60°) = √3/2\ncos(120°) = cos(180° - 60°) = -cos(60°) = -0.5\n\n単位円上で確認すると、すべて幾何学的に明らかです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
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
        '対称性を使って考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(150°) の値は？',
        options: [
          { id: 'a', label: '-1/2', correct: false },
          { id: 'b', label: '1/2', correct: true },
          { id: 'c', label: '√3/2', correct: false },
          { id: 'd', label: '-√3/2', correct: false },
        ],
        explanation:
          'sin(150°) = sin(180° - 30°) = sin(30°) = 1/2\n\n補角の性質 sin(180° - θ) = sin(θ) を使います。',
      },
    },
    {
      id: 'alternate',
      title: '単位円で見る4つの象限',
      content:
        '単位円の各象限でsin/cosの符号が決まります:\n\n第1象限(0°～90°): sin > 0, cos > 0\n第2象限(90°～180°): sin > 0, cos < 0\n第3象限(180°～270°): sin < 0, cos < 0\n第4象限(270°～360°): sin < 0, cos > 0\n\n覚え方:「All Students Take Calculus」\n全部・Sin・Tan・Cos の順に正。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
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
        'sin/cosの対称性:\n\n・cosは偶関数: cos(-θ) = cos(θ)\n・sinは奇関数: sin(-θ) = -sin(θ)\n・余角: sin(90° - θ) = cos(θ)\n・補角: sin(180° - θ) = sin(θ)\n\nこれらの性質はすべて単位円の幾何学から自然に導かれます。公式を暗記するより、単位円をイメージしましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'symmetry-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
