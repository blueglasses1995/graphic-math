import { Tutorial } from '../types';

export const pythagoreanIdentityTutorial: Tutorial = {
  id: 'pythagorean-identity',
  title: 'ピタゴラスと三角関数',
  description: 'sin²θ + cos²θ = 1 がなぜ成り立つのかを視覚的に理解する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '永遠に成り立つ等式',
      content:
        'どんな角度θでも sin²θ + cos²θ = 1。\n\nこれは偶然ではありません。単位円の半径が1だから成り立つのです。\n\n単位円上の点(cosθ, sinθ)と原点の距離は常に1。ピタゴラスの定理で x² + y² = r² → cos²θ + sin²θ = 1。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#4fc3f7', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pythagorean-identity-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '角度を変えて確認',
      content:
        '角度を自由に変えてみましょう。\n\nsin²θとcos²θの値はそれぞれ変わりますが、足すと必ず1になります。正方形の面積で確認してみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pythagorean-identity-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'drag-unit-circle',
        initialAngle: 0.7,
      },
    },
    {
      id: 'example-1',
      title: '具体例：θ = 30°',
      content:
        'θ = 30° のとき:\nsin(30°) = 1/2, cos(30°) = √3/2\n\nsin²(30°) + cos²(30°)\n= (1/2)² + (√3/2)²\n= 1/4 + 3/4\n= 4/4 = 1 ✓\n\nどんな角度でもこの和が1になります。',
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
      title: '具体例：θ = 37°（きりの悪い角度）',
      content:
        'きりの良い角度だけでなく、任意の角度で成り立ちます。\n\nθ = 37° のとき:\nsin(37°) ≈ 0.6018\ncos(37°) ≈ 0.7986\n\nsin²(37°) + cos²(37°)\n≈ 0.3622 + 0.6378\n= 1.0000 ✓\n\nこれは三平方の定理そのもの。直角三角形の斜辺が1なら、残り2辺の2乗の和は必ず1です。',
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
        'sin²θ + cos²θ = 1 を変形して考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(θ) = 0.6 のとき、cos²(θ) はいくつ？',
        options: [
          { id: 'a', label: '0.4', correct: false },
          { id: 'b', label: '0.8', correct: false },
          { id: 'c', label: '0.64', correct: true },
          { id: 'd', label: '0.36', correct: false },
        ],
        explanation:
          'sin²θ + cos²θ = 1 より\ncos²θ = 1 − sin²θ = 1 − 0.36 = 0.64\n\nsin²θ = 0.6² = 0.36 なので cos²θ = 0.64 です。',
      },
    },
    {
      id: 'alternate',
      title: 'tanへの拡張',
      content:
        'sin²θ + cos²θ = 1 の両辺をcos²θで割ると:\n\ntan²θ + 1 = 1/cos²θ = sec²θ\n\nsin²θで割ると:\n\n1 + cot²θ = 1/sin²θ = csc²θ\n\n1つの等式から、三角関数のすべての恒等式が導けます。ピタゴラスの定理は三角関数の根幹です。',
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
        'sin²θ + cos²θ = 1\n\nこの等式は三平方の定理（ピタゴラスの定理）から来ています。\n\n・単位円の半径が1 → x² + y² = 1\n・(x, y) = (cosθ, sinθ) → cos²θ + sin²θ = 1\n\nこの恒等式は三角関数の計算や変形の基盤です。どんな公式も、これに帰着できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pythagorean-identity-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
