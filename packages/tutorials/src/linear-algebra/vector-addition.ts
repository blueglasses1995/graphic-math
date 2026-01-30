import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const vectorAdditionTutorial: Tutorial = {
  id: 'vector-addition',
  title: 'ベクトルの足し算',
  description: 'ベクトルの加法を視覚的に理解し、平行四辺形の法則を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '2つの力を合わせると？',
      content:
        '綱引きを想像してください。右に3の力、上に4の力。同時に引っ張ったらどうなる？\n\n' +
        'ベクトルの足し算は、まさにこの「力の合成」です。\n\n' +
        '2つの矢印を「つなげる」と、合計の矢印が見えてきます。' +
        'この直感的な操作が、線形代数の最も基本的な演算です。',
      customScene: 'vector-addition-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'force-1',
            vector: new Vector3(3, 0, 0),
            color: '#ff4444',
            label: 'a = (3, 0)',
          },
          {
            id: 'force-2',
            vector: new Vector3(0, 4, 0),
            color: '#44ff44',
            label: 'b = (0, 4)',
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
      title: 'ベクトルをつなげてみよう',
      content:
        'ベクトルの足し算は「しっぽから頭へ」つなげることです。\n\n' +
        'a = (3, 0) の先端から b = (0, 4) を描くと、' +
        '原点から最終地点までの矢印が a + b = (3, 4) になります。\n\n' +
        '成分ごとに足すだけ：(3+0, 0+4) = (3, 4)\n\n' +
        'シンプルですが、これがベクトル演算の基本中の基本です。',
      customScene: 'vector-addition-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-a',
            vector: new Vector3(3, 0, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'vec-b',
            vector: new Vector3(0, 4, 0),
            color: '#44ff44',
            label: 'b',
          },
          {
            id: 'vec-sum',
            vector: new Vector3(3, 4, 0),
            color: '#ffaa00',
            label: 'a + b = (3, 4)',
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
      title: '具体例：散歩の経路',
      content:
        '公園を散歩しましょう。まず東に2歩、北に1歩 → a = (2, 1)\n' +
        '次に東に1歩、北に3歩 → b = (1, 3)\n\n' +
        '合計でどこにいますか？\n' +
        'a + b = (2+1, 1+3) = (3, 4)\n\n' +
        '東に3歩、北に4歩の地点です。\n\n' +
        '途中の経路は関係ありません。最終的な位置（結果のベクトル）は、' +
        '各方向ごとの移動量を合計するだけで求められます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'walk-a',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'a = (2, 1)',
            showComponents: true,
          },
          {
            id: 'walk-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b = (1, 3)',
            showComponents: true,
          },
          {
            id: 'walk-sum',
            vector: new Vector3(3, 4, 0),
            color: '#ffaa00',
            label: 'a + b = (3, 4)',
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
      title: '平行四辺形の法則',
      content:
        'ベクトルの足し算には美しい幾何学的解釈があります。\n\n' +
        'a と b を2辺とする平行四辺形を作ると、' +
        '対角線が a + b になります。\n\n' +
        'a = (2, 1) と b = (1, 3) で平行四辺形を作ると、' +
        '対角線は (3, 4) を指します。\n\n' +
        'また、足し算の順序を変えても結果は同じです：\n' +
        'a + b = b + a = (3, 4)\n\n' +
        'これを「交換法則」と呼びます。どちらの辺から出発しても、' +
        '平行四辺形の同じ対角線に到達するのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'para-a',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'para-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b',
          },
          {
            id: 'para-sum',
            vector: new Vector3(3, 4, 0),
            color: '#ffaa00',
            label: 'a + b',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：ベクトルの足し算',
      content: 'ベクトルの足し算を練習しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'a = (1, -2, 3) と b = (4, 5, -1) の和 a + b は？',
        options: [
          { id: 'a', label: '(5, 3, 2)', correct: true },
          { id: 'b', label: '(5, 7, 2)', correct: false },
          { id: 'c', label: '(3, 3, 4)', correct: false },
          { id: 'd', label: '(5, -7, 4)', correct: false },
        ],
        explanation:
          '各成分を足します：(1+4, -2+5, 3+(-1)) = (5, 3, 2) です。',
      },
    },
    {
      id: 'alternate',
      title: '引き算は「逆方向の足し算」',
      content:
        'ベクトルの引き算 a - b は、a + (-b) と同じです。\n\n' +
        '-b は b の逆ベクトル（方向が逆、長さは同じ）です。\n\n' +
        'a = (3, 2) と b = (1, 3) のとき：\n' +
        'a - b = (3-1, 2-3) = (2, -1)\n\n' +
        '幾何学的には、a - b は「bの先端からaの先端へ向かうベクトル」です。\n' +
        '2点間の差（距離と方向）を表すので、物理学で相対速度を求めるときなどに使います。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sub-a',
            vector: new Vector3(3, 2, 0),
            color: '#ff4444',
            label: 'a = (3, 2)',
          },
          {
            id: 'sub-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b = (1, 3)',
          },
          {
            id: 'sub-diff',
            vector: new Vector3(2, -1, 0),
            color: '#ff44ff',
            label: 'a - b = (2, -1)',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ベクトルの足し算',
      content:
        'この章のポイント：\n\n' +
        '1. ベクトルの足し算 = 成分ごとに足す\n' +
        '2. 幾何学的には「矢印をつなげる」\n' +
        '3. 平行四辺形の法則：2辺から対角線が求まる\n' +
        '4. 交換法則が成り立つ：a + b = b + a\n' +
        '5. 引き算は逆ベクトルの足し算\n\n' +
        '次はベクトルを「伸ばしたり縮めたり」するスカラー倍を学びます。',
      customScene: 'vector-addition-summary',
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
          {
            id: 'sum-result',
            vector: new Vector3(3, 4, 0),
            color: '#ffaa00',
            label: 'a + b',
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
