import { Tutorial } from '../types';

export const halfLifeTutorial: Tutorial = {
  id: 'half-life',
  title: '半減期',
  description: '量が半分になるまでの時間「半減期」の概念と計算方法を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '半分になるまでの時間',
      content:
        '放射性物質は一定の時間ごとに半分に減っていきます。100g → 50g → 25g → 12.5g → ...。この「半分になる時間」が半減期です。物質が段階的に半減していくアニメーションを見てみましょう。',
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
      title: '半減期を変えてみよう',
      content:
        '半減期の長さを変えて、減衰のペースがどう変わるか観察しましょう。半減期が短いほど急速に減り、長いほどゆっくり減ります。',
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
      title: '半減期の数式',
      content:
        'N(t) = N₀ · (1/2)^(t/T)\n\n• T: 半減期\n• t/T: 経過した半減期の回数\n\n1半減期後: N₀/2\n2半減期後: N₀/4\n3半減期後: N₀/8\nn半減期後: N₀/2ⁿ\n\n減衰定数kとの関係：k = ln2/T ≈ 0.693/T',
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
      title: '実際の半減期',
      content:
        '身近な半減期の例：\n• カフェイン（体内）：約5時間\n• 炭素14：約5,730年\n• ラジウム226：約1,600年\n• ウラン238：約45億年\n• ポロニウム214：約0.00016秒\n\n物質によって秒単位から億年単位まで幅広い半減期があります。',
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
      content: '半減期10年の物質が、元の量の1/8になるのは何年後？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '半減期10年で1/8になるのは？',
        options: [
          { id: 'a', label: '20年後', correct: false },
          { id: 'b', label: '30年後', correct: true },
          { id: 'c', label: '40年後', correct: false },
          { id: 'd', label: '80年後', correct: false },
        ],
        explanation:
          '1/8 = 1/2³ なので3回の半減期が必要。3×10年 = 30年後です。半減期の回数で考えるとシンプルです。',
      },
    },
    {
      id: 'alternate',
      title: '炭素年代測定',
      content:
        '炭素14の半減期（5,730年）を利用して遺跡の年代を推定できます。生きている間は大気中の炭素14を取り込むため一定量を維持しますが、死後は減り続けます。残っている炭素14の割合から、いつ頃のものかがわかるのです。',
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
        '半減期：\n• 量が半分になるまでの時間\n• N(t) = N₀·(1/2)^(t/T)\n• k = ln2/T で減衰定数と関連\n• n回の半減期で 1/2ⁿ に減少\n• 炭素年代測定など実用的な応用がある\n\n次は成長の逆、「倍増時間」を学びます。',
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
