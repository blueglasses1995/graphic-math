import { Tutorial } from '../types';

export const meanValueTheoremTutorial: Tutorial = {
  id: 'mean-value-theorem',
  title: '平均値の定理',
  description: '平均変化率と等しい瞬間変化率を持つ点が必ず存在することを理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '必ずどこかで平均と一致する',
      content:
        '東京から大阪まで平均時速100kmで走ったら、途中のどこかで「ちょうど時速100km」の瞬間が必ずあります。これが平均値の定理の直感的な意味です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '区間 [a,b] の端点を動かして、割線と平行な接線がどこに現れるか探してみてください。必ず少なくとも1つ見つかります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '定理の内容',
      content:
        'f が [a,b] で連続、(a,b) で微分可能なら、f\'(c) = [f(b)−f(a)]/(b−a) を満たす c が (a,b) に少なくとも1つ存在します。接線の傾き = 割線の傾きとなる点が必ずあるのです。',
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
      title: '具体例：f(x) = x² on [1,3]',
      content:
        '平均変化率 = (9−1)/(3−1) = 4。f\'(x) = 2x = 4 を解くと x = 2。確かに 1 < 2 < 3 で、x=2 で接線の傾きが割線の傾きと一致します。',
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
        'f(x) = x³ の [0,2] で平均値の定理を満たす c の値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x)=x³ の [0,2] で f\'(c) = 平均変化率 を満たす c は？',
        options: [
          { id: 'a', label: '2/√3', correct: true },
          { id: 'b', label: '1', correct: false },
          { id: 'c', label: '√2', correct: false },
          { id: 'd', label: '4/3', correct: false },
        ],
        explanation:
          '平均変化率 = (8−0)/2 = 4。f\'(c) = 3c² = 4 より c² = 4/3、c = 2/√3 ≈ 1.155。0 < c < 2 を満たします。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：ロールの定理',
      content:
        'f(a) = f(b) のとき、平均変化率は 0 なので f\'(c) = 0 となる点が存在します。これが「ロールの定理」。平均値の定理の特殊ケースで、「端が同じ高さなら途中に水平な点がある」という意味です。',
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
        '平均値の定理：滑らかな曲線では、平均変化率と等しい瞬間変化率を持つ点が必ず存在する。微分学の多くの定理の土台になる重要定理です。\n\n次は基礎編のまとめです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
