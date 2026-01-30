import { Tutorial } from '../types';

export const borsukUlamTutorial: Tutorial = {
  id: 'borsuk-ulam',
  title: '【実践】ボルスク・ウラムの定理',
  description: '地球の裏側に同じ気温・気圧の点がある――ボルスク・ウラムの定理',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '対蹠点の一致',
      content:
        '地球儀が回転し、対蹠点（正反対の点）のペアが強調されます。連続な関数（例：気温）では必ず値が一致する対蹠点のペアが存在します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-borsuk-ulam-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '球面上の関数を変化させて、対蹠点で値が一致する場所を探しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-borsuk-ulam-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ボルスク・ウラムの定理',
      content:
        'Sⁿ から Rⁿ への連続写像 f に対して f(x)=f(-x) となる点 x が必ず存在する。n=2 なら、地球上に気温と気圧が両方とも一致する対蹠点ペアが存在します。',
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
      title: 'ハム・サンドイッチの定理',
      content:
        'ボルスク・ウラムの帰結：3次元空間の任意の3つの物体を1つの平面で同時に2等分できる。ハム、パン、チーズを1刀両断にする切り方が必ず存在します。',
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
        '円 S¹ から R¹ への連続関数に対蹠点一致はある？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'S¹→R の連続関数に f(x)=f(-x) となる点は？',
        options: [
          { id: 'a', label: '必ず存在する', correct: true },
          { id: 'b', label: '存在しないこともある', correct: false },
          { id: 'c', label: '関数による', correct: false },
          { id: 'd', label: '2点以上存在する', correct: false },
        ],
        explanation:
          'g(x) = f(x) - f(-x) とおくと g(x) = -g(-x)。中間値の定理より g(x₀)=0 となる点が存在し、そこで f(x₀)=f(-x₀) です。',
      },
    },
    {
      id: 'alternate',
      title: '天気予報で考える',
      content:
        '地球上のある瞬間、気温が全く同じ対蹠点のペアが必ず存在します。東京（35°N, 139°E）の対蹠点はアルゼンチン沖（35°S, 41°W）。気温が一致する必然性を位相が保証します。',
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
        'ボルスク・ウラムの定理＝球面上の連続関数には対蹠点で一致する点が存在。\n\nポイント：\n- 地球の裏側に同じ気温の点がある\n- ハム・サンドイッチの定理へ応用\n- 位相的な存在証明の美しい例\n\n対蹠点を探してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-borsuk-ulam-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
