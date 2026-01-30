import { Tutorial } from '../types';

export const metricSpaceTutorial: Tutorial = {
  id: 'metric-space',
  title: '距離空間',
  description: '「距離」を正確に定義する――距離空間から位相空間へ',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '距離のルール',
      content:
        '2点間の距離を表す円が広がり、様々な距離の測り方（ユークリッド、マンハッタン、チェビシェフ）が切り替わります。距離の概念は1つではありません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-metric-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '距離の種類を切り替えて、「距離1の円」がどう変わるか観察しましょう。ユークリッド距離では円、マンハッタン距離ではひし形になります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-metric-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '距離の公理',
      content:
        '距離関数 d(x,y) は3つの条件を満たす：(1) d(x,y)≥0 で等号は x=y のときだけ。(2) d(x,y)=d(y,x)（対称性）。(3) d(x,z)≤d(x,y)+d(y,z)（三角不等式）。',
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
      title: '距離空間から位相空間へ',
      content:
        '距離があれば開球を定義でき、開球から開集合を定義できます。つまり距離空間は自然に位相空間になります。しかし位相空間のすべてが距離から来るわけではありません。',
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
        '離散距離 d(x,y) = (x≠yなら1, x=yなら0) では、すべての部分集合が開集合？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '離散距離で全部分集合が開集合？',
        options: [
          { id: 'a', label: 'はい', correct: true },
          { id: 'b', label: 'いいえ', correct: false },
          { id: 'c', label: '有限集合のみ', correct: false },
          { id: 'd', label: '空集合のみ', correct: false },
        ],
        explanation:
          '各点 x の半径 0.5 の開球は {x} だけ。よって一点集合が開集合になり、すべての部分集合が開集合（離散位相）になります。',
      },
    },
    {
      id: 'alternate',
      title: 'タクシーで考える',
      content:
        '直線距離（ユークリッド）とタクシー距離（マンハッタン）。東京の碁盤の目を走るタクシーは斜めに進めないので、マンハッタン距離の方が実際の移動距離に近い。距離の選び方で「近さ」の意味が変わります。',
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
        '距離空間＝距離関数が定義された集合。\n\nポイント：\n- 3つの公理：非負性、対称性、三角不等式\n- 距離から位相が自然に導かれる\n- 距離の選び方で空間の性質が変わる\n\n様々な距離を試しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-metric-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
