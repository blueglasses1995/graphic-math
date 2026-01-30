import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const linearIndependenceTutorial: Tutorial = {
  id: 'linear-independence',
  title: '線形独立と線形従属',
  description: 'ベクトルの線形独立・従属の概念を理解し、その幾何学的意味を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '余計なベクトルを見抜け',
      content:
        '3つのベクトルがあります。でも実は1つは「余計」かもしれません。\n\n' +
        'もし3つ目が最初の2つの組み合わせで作れるなら、' +
        '3つ目は新しい情報を何も追加していません。\n\n' +
        'これが「線形従属」です。逆に、どのベクトルも他から作れないとき' +
        '「線形独立」と言います。情報の冗長性を見抜く概念です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'dep-a',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'dep-b',
            vector: new Vector3(0, 1, 0),
            color: '#44ff44',
            label: 'b',
          },
          {
            id: 'dep-c',
            vector: new Vector3(1, 1, 0),
            color: '#ffaa00',
            label: 'c = a + b ?',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '独立か従属か確認しよう',
      content:
        'a = (1, 0) と b = (0, 1) と c = (1, 1) を見てみましょう。\n\n' +
        'c = 1×a + 1×b なので、cはaとbから作れます。\n' +
        '→ {a, b, c} は線形従属\n\n' +
        'でも {a, b} だけなら？ aの何倍でもbにはなりません。' +
        'bの何倍でもaにはなりません。\n' +
        '→ {a, b} は線形独立\n\n' +
        '独立なベクトルは、それぞれが「新しい方向」を指しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'check-a',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: 'a = (1, 0)',
          },
          {
            id: 'check-b',
            vector: new Vector3(0, 1, 0),
            color: '#44ff44',
            label: 'b = (0, 1)',
          },
          {
            id: 'check-c',
            vector: new Vector3(1, 1, 0),
            color: '#ffaa00',
            label: 'c = a + b',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '線形従属の例',
      content:
        'a = (1, 2) と b = (2, 4) は線形従属です。\n\n' +
        'なぜなら b = 2a だからです。bはaの2倍に過ぎません。\n\n' +
        '別の言い方：2a - 1b = (0, 0) → ゼロでない係数の組み合わせで' +
        '零ベクトルが作れてしまう。これが線形従属の定義です。\n\n' +
        '幾何学的には、従属なベクトルは同じ直線上にあります。' +
        '新しい方向を追加しないので、スパンは直線のままです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'dep-ex-a',
            vector: new Vector3(1, 2, 0),
            color: '#ff4444',
            label: 'a = (1, 2)',
          },
          {
            id: 'dep-ex-b',
            vector: new Vector3(2, 4, 0),
            color: '#44aaff',
            label: 'b = (2, 4) = 2a',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '線形独立の例',
      content:
        'a = (1, 0, 0), b = (0, 1, 0), c = (0, 0, 1) は線形独立です。\n\n' +
        'c₁a + c₂b + c₃c = (0, 0, 0) となるのは、\n' +
        'c₁ = c₂ = c₃ = 0 のときだけ。\n\n' +
        'つまり、どのベクトルも他の2つの組み合わせでは作れません。\n' +
        'それぞれが異なる軸方向を指しており、3つ合わせて3D空間全体を張ります。\n\n' +
        'n次元空間では、最大n本のベクトルが線形独立になれます。' +
        'n+1本以上は必ず従属になります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ind-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'ind-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'b',
          },
          {
            id: 'ind-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'c',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：線形独立',
      content: '線形独立の判定に挑戦しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち、線形独立なベクトルの組はどれですか？',
        options: [
          { id: 'a', label: '(1,2) と (2,4)', correct: false },
          { id: 'b', label: '(1,0) と (3,0)', correct: false },
          { id: 'c', label: '(1,1) と (1,-1)', correct: true },
          { id: 'd', label: '(0,0) と (1,2)', correct: false },
        ],
        explanation:
          '(1,1)と(1,-1)は同じ直線上にないので線形独立です。(1,2)と(2,4)は比例関係、(1,0)と(3,0)も同じ方向、零ベクトルを含む組は常に従属です。',
      },
    },
    {
      id: 'alternate',
      title: '行列のランクとの関係',
      content:
        '線形独立の概念は行列の「ランク（階数）」につながります。\n\n' +
        '行列の列ベクトルのうち、線形独立なものの最大本数 = ランク\n\n' +
        '例：[[1,2],[2,4]] のランクは1（2列あるが独立なのは1本）\n' +
        '　　[[1,0],[0,1]] のランクは2（2列とも独立）\n\n' +
        'ランクは行列が「実質的に持つ次元数」を表します。\n' +
        '後の章で連立方程式の解の個数を調べるとき、ランクが重要な役割を果たします。',
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
      title: 'まとめ：線形独立と線形従属',
      content:
        'この章のポイント：\n\n' +
        '1. 線形従属 = あるベクトルが他の組み合わせで作れる\n' +
        '2. 線形独立 = どのベクトルも他から作れない\n' +
        '3. 従属の判定：ゼロでない係数で零ベクトルが作れるか？\n' +
        '4. 幾何学的：独立 → 異なる方向、従属 → 同一直線/平面上\n' +
        '5. n次元空間で独立なベクトルは最大n本\n\n' +
        '線形独立なベクトルの集合が空間を張るとき、それを「基底」と呼びます。' +
        '次は基底ベクトルを深く学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'sum-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
