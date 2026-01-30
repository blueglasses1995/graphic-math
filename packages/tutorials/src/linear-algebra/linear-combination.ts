import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const linearCombinationTutorial: Tutorial = {
  id: 'linear-combination',
  title: '線形結合とスパン',
  description: '線形結合の概念とベクトルが「張る」空間（スパン）を理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '2つのベクトルでどこまで行ける？',
      content:
        '2つのベクトルがあります。それぞれを好きなだけ伸ばして足し合わせると、' +
        'どの点に到達できるでしょうか？\n\n' +
        'すべての到達可能な点の集合、これが「スパン」です。\n\n' +
        '2つの矢印の伸縮と合成だけで、実は平面全体をカバーできるのです。' +
        '…ただし条件があります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'span-a',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'span-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '線形結合を作ってみよう',
      content:
        '線形結合とは：c₁a + c₂b（c₁, c₂は任意のスカラー）\n\n' +
        'a = (2, 1), b = (1, 3) のとき：\n' +
        '・1a + 1b = (3, 4)\n' +
        '・2a + 0b = (4, 2)\n' +
        '・0a + 1b = (1, 3)\n' +
        '・-1a + 2b = (0, 5)\n\n' +
        'c₁とc₂を色々変えることで、平面上のあらゆる点に到達できます。' +
        'この「到達可能な全ての点の集合」を span{a, b} と書きます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'lc-a',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'lc-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b',
          },
          {
            id: 'lc-result',
            vector: new Vector3(3, 4, 0),
            color: '#ffaa00',
            label: '1a + 1b',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '1つのベクトルのスパン',
      content:
        'まず1つのベクトルだけで考えましょう。\n\n' +
        'v = (1, 2) のスパンは何でしょうか？\n' +
        'cv = c(1, 2) = (c, 2c) ← cは任意の実数\n\n' +
        'これは原点を通り、vの方向に伸びる直線です。\n\n' +
        'c = 0 → 原点\n' +
        'c = 1 → (1, 2)\n' +
        'c = -2 → (-2, -4)\n' +
        'c = 0.5 → (0.5, 1)\n\n' +
        '1つのベクトルのスパンは「直線」。2つなら？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'span1-v',
            vector: new Vector3(1, 2, 0),
            color: '#ff4444',
            label: 'v',
          },
          {
            id: 'span1-2v',
            vector: new Vector3(2, 4, 0),
            color: '#ff8888',
            label: '2v',
          },
          {
            id: 'span1-neg',
            vector: new Vector3(-1, -2, 0),
            color: '#ff8888',
            label: '-v',
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
      title: '2つのベクトルのスパン',
      content:
        'a = (1, 0) と b = (0, 1) のスパンを考えます。\n\n' +
        'c₁a + c₂b = c₁(1,0) + c₂(0,1) = (c₁, c₂)\n\n' +
        'c₁とc₂に任意の実数を入れると、2次元平面のすべての点 (x, y) が作れます！\n\n' +
        '2つの独立なベクトルのスパンは「平面」です。\n\n' +
        'ただし a = (1, 0) と b = (2, 0) のように同じ方向のベクトルだと、' +
        'スパンは直線のまま。平面全体には広がりません。\n' +
        'これが「線形独立」の重要性につながります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'span2-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'a = (1, 0)',
          },
          {
            id: 'span2-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'b = (0, 1)',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：スパン',
      content: 'スパンの理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'a = (1, 2) と b = (3, 6) のスパンはどんな図形？',
        options: [
          { id: 'a', label: '平面全体', correct: false },
          { id: 'b', label: '原点を通る直線', correct: true },
          { id: 'c', label: '点（原点のみ）', correct: false },
          { id: 'd', label: '3次元空間全体', correct: false },
        ],
        explanation:
          'b = 3a なので、bはaの3倍です。同じ方向のベクトルなので、スパンは直線になります。',
      },
    },
    {
      id: 'alternate',
      title: 'スパンの次元',
      content:
        'スパンの「広がり」は次元で測れます。\n\n' +
        '・ゼロベクトルだけ → 0次元（点）\n' +
        '・1本のベクトル → 1次元（直線）\n' +
        '・2本の独立なベクトル → 2次元（平面）\n' +
        '・3本の独立なベクトル → 3次元（空間全体）\n\n' +
        '独立なベクトルを1本追加するごとに、次元が1つ上がります。\n' +
        '「独立でない」ベクトルを追加しても、次元は増えません。\n\n' +
        'つまり、スパンの次元 = 独立なベクトルの本数 なのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'dim-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: '1本目',
          },
          {
            id: 'dim-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: '2本目',
          },
          {
            id: 'dim-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: '3本目',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：線形結合とスパン',
      content:
        'この章のポイント：\n\n' +
        '1. 線形結合 = スカラー倍して足す（c₁v₁ + c₂v₂ + ...）\n' +
        '2. スパン = 線形結合で到達できる全ての点の集合\n' +
        '3. 1ベクトルのスパン → 直線\n' +
        '4. 2つの独立なベクトルのスパン → 平面\n' +
        '5. 3つの独立なベクトルのスパン → 3D空間全体\n\n' +
        '次は「独立」とは何かを正確に学びます。線形独立と線形従属の違いです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-a',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'sum-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
