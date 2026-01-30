import { Tutorial } from '../types';

export const pigeonholeTutorial: Tutorial = {
  id: 'pigeonhole',
  title: '【実践】鳩の巣原理',
  description: 'n+1個のものをn個の箱に入れると必ず相部屋になる原理を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '鳩が巣に入る',
      content:
        '5つの巣に6羽の鳩が入ろうとしています。\n\nどう頑張っても、少なくとも1つの巣には2羽以上入ります。\n\nこの当たり前の事実が、驚くほど強力な証明道具になります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'pigeonhole-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '鳩を配置してみよう',
      content:
        '鳩を巣に入れてみましょう。\n\n巣の数より鳩が多いとき、相部屋を避けられないことを確認してください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pigeonhole-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-principle',
      title: '鳩の巣原理',
      content:
        '鳩の巣原理（ディリクレの原理）：\n\nn+1個のものをn個の箱に入れると、少なくとも1つの箱に2個以上入る。\n\n集合論的に: |A| > |B| のとき、f: A → B が単射であることはありえない。\n\n証明: 背理法。すべての箱に1個以下なら、ものは最大n個。しかしn+1個ある。矛盾。',
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
      id: 'example-applications',
      title: '応用例',
      content:
        '意外な応用がたくさんあります。\n\n1. 東京に同じ本数の髪の毛の人が2人いる\n   （髪の毛 ≤ 15万本、東京人口 ≈ 1400万人）\n\n2. 367人いれば、同じ誕生日の人が必ずいる\n   （366日 + 1人）\n\n3. 任意の5つの整数から、和が3の倍数の2数がある\n   （余りは0,1,2の3通り、5人なのでペア確定）',
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
      title: '練習問題',
      content: '引き出しに赤・青・白の靴下がたくさんある。確実に同色ペアを得るには最低何足取る？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3色の靴下から同色ペアを確実に得るために必要な最小本数は？',
        options: [
          { id: 'a', label: '3本', correct: false },
          { id: 'b', label: '4本', correct: true },
          { id: 'c', label: '5本', correct: false },
          { id: 'd', label: '6本', correct: false },
        ],
        explanation:
          '正解は4本です。\n\n3色（3つの巣）に4本（4羽）を分けるので、鳩の巣原理により少なくとも1色は2本以上。\n\n3本では赤1・青1・白1の可能性があり、ペアが保証されません。',
      },
    },
    {
      id: 'alternate',
      title: '一般化された鳩の巣原理',
      content:
        '一般化: kn+1個のものをn個の箱に入れると、少なくとも1つの箱にk+1個以上入る。\n\n例: 13人を4つの血液型に分けると、少なくとも1つの型に4人以上。\n（3×4+1 = 13）\n\n無限版: 可算無限個のものを有限個の箱に入れると、少なくとも1つの箱に無限個入る。\n\nシンプルなのに奥が深い原理です。',
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
        '鳩の巣原理のポイント：\n\n・n+1個 → n箱 で必ず相部屋が発生\n・集合論的: |A| > |B| なら A→B の単射は存在しない\n・驚くほど多くの定理の証明に使える\n・一般化版: kn+1個 → n箱 で k+1個以上\n\n次は最後のトピック「集合のカーディナリティ」です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pigeonhole-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
