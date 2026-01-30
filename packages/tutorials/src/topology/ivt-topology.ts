import { Tutorial } from '../types';

export const ivtTopologyTutorial: Tutorial = {
  id: 'ivt-topology',
  title: '中間値の定理（位相版）',
  description: '連続関数は「飛ばない」――中間値の定理を位相の言葉で理解する',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '連続なら必ず通る',
      content:
        '連続関数のグラフが描かれます。f(a)<0 で f(b)>0 なら、途中で必ず f(c)=0 となる点を通ります。グラフが0を横切る瞬間を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-ivt-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '関数の形を変えて、中間値が必ず実現されることを確認しましょう。不連続にすると定理が破れます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-ivt-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '位相的な証明の骨子',
      content:
        '連結空間の連続像は連結。[a,b]は連結で、f は連続なので f([a,b]) も連結。R の連結部分集合は区間。だから f(a) と f(b) の間のすべての値を通ります。',
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
      title: '応用：方程式の解の存在',
      content:
        'x⁵ + x - 1 = 0 の解はあるか？ f(0)=-1<0, f(1)=1>0。f は連続なので中間値の定理より (0,1) に解が存在。解の具体的な値はわからなくても「存在する」ことがわかります。',
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
        '地球の赤道上で、ちょうど反対側の地点と温度が同じ場所は必ずある？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '赤道上の対蹠点で温度が等しい点は必ず存在する？',
        options: [
          { id: 'a', label: '必ず存在する', correct: true },
          { id: 'b', label: '存在しないこともある', correct: false },
          { id: 'c', label: '温度による', correct: false },
          { id: 'd', label: '季節による', correct: false },
        ],
        explanation:
          'g(θ) = f(θ) - f(θ+180°) とおくと g(0) と g(180°) は符号が逆。中間値の定理より g(c)=0 となる c が存在し、f(c)=f(c+180°) です。',
      },
    },
    {
      id: 'alternate',
      title: '山登りで考える',
      content:
        '海面（0m）から山頂（3000m）まで連続的に登れば、標高1500mの地点を必ず通ります。ジャンプ（不連続）しない限り、すべての中間の高さを経験するのです。',
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
        '中間値の定理＝連結空間の連続像は連結。\n\nポイント：\n- 連続関数は値を「飛ばさない」\n- 位相的には連結性の保存\n- 方程式の解の存在証明に威力\n\n関数を変形して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-ivt-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
