import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const scalarMultiplyTutorial: Tutorial = {
  id: 'scalar-multiply',
  title: 'スカラー倍',
  description: 'ベクトルのスカラー倍を理解し、伸縮と反転の概念を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '矢印を伸ばしたり縮めたり',
      content:
        '同じ方向にもっと速く走りたい。力を2倍にしたい。\n\n' +
        'ベクトルの「方向はそのまま」で「大きさだけ変える」操作、' +
        'それがスカラー倍です。\n\n' +
        '数字（スカラー）をかけるだけで、矢印が伸びたり縮んだり、' +
        '反転したりします。シンプルだけど奥が深い操作です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'original',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'v',
          },
          {
            id: 'scaled',
            vector: new Vector3(4, 2, 0),
            color: '#ffaa00',
            label: '2v',
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
      title: 'スカラー倍を体験しよう',
      content:
        'v = (2, 1) を色々なスカラーで倍してみましょう。\n\n' +
        '2v = (4, 2) → 同じ方向に2倍の長さ\n' +
        '0.5v = (1, 0.5) → 同じ方向に半分の長さ\n' +
        '-1v = (-2, -1) → 反対方向に同じ長さ\n\n' +
        'スカラーが正なら同じ方向、負なら反対方向になります。' +
        'スカラーの絶対値が長さの倍率です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'v-original',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'v = (2, 1)',
          },
          {
            id: 'v-double',
            vector: new Vector3(4, 2, 0),
            color: '#ffaa00',
            label: '2v',
          },
          {
            id: 'v-half',
            vector: new Vector3(1, 0.5, 0),
            color: '#44aaff',
            label: '0.5v',
          },
          {
            id: 'v-neg',
            vector: new Vector3(-2, -1, 0),
            color: '#ff44ff',
            label: '-v',
          },
        ],
        cameraPosition: [0, 0, 8],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '計算方法：各成分にかける',
      content:
        'スカラー倍は各成分にスカラーをかけるだけです。\n\n' +
        'v = (3, -1, 2) を 4倍すると：\n' +
        '4v = (4×3, 4×(-1), 4×2) = (12, -4, 8)\n\n' +
        'シンプルなルールですが、重要な性質があります：\n' +
        '- 方向は変わらない（負のスカラーなら反転）\n' +
        '- 大きさは |c| 倍になる：|cv| = |c| × |v|\n' +
        '- 0倍すると零ベクトル：0v = (0, 0, 0)',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ex1-v',
            vector: new Vector3(3, -1, 2),
            color: '#ff4444',
            label: 'v = (3, -1, 2)',
            showComponents: true,
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '単位ベクトル：長さを1にする',
      content:
        '特に重要なスカラー倍の使い方：単位ベクトルの作成です。\n\n' +
        'v = (3, 4, 0) の大きさは |v| = √(9+16) = 5\n\n' +
        'v を |v| で割ると（= 1/5 倍すると）：\n' +
        'v/|v| = (3/5, 4/5, 0) = (0.6, 0.8, 0)\n\n' +
        'この結果は大きさ1のベクトル（単位ベクトル）です。\n' +
        '方向はvと同じまま、長さだけ1になりました。\n\n' +
        '「方向だけ知りたい」とき、単位ベクトルが役立ちます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ex2-v',
            vector: new Vector3(3, 4, 0),
            color: '#ff4444',
            label: 'v = (3, 4)',
          },
          {
            id: 'ex2-unit',
            vector: new Vector3(0.6, 0.8, 0),
            color: '#44ff44',
            label: 'v/|v| = (0.6, 0.8)',
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
      title: 'クイズ：スカラー倍',
      content: 'スカラー倍の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'v = (2, -3, 1) を -3倍した -3v はどれですか？',
        options: [
          { id: 'a', label: '(-6, -9, -3)', correct: false },
          { id: 'b', label: '(-6, 9, -3)', correct: true },
          { id: 'c', label: '(6, -9, 3)', correct: false },
          { id: 'd', label: '(-6, 9, 3)', correct: false },
        ],
        explanation:
          '-3 × (2, -3, 1) = (-3×2, -3×(-3), -3×1) = (-6, 9, -3) です。負×負=正に注意！',
      },
    },
    {
      id: 'alternate',
      title: '物理での意味',
      content:
        '物理学ではスカラー倍が頻繁に登場します。\n\n' +
        'ニュートンの第二法則：F = ma\n' +
        '力ベクトル F は、加速度ベクトル a を質量 m でスカラー倍したもの。\n\n' +
        '質量が2倍なら、同じ加速度でも必要な力は2倍。\n' +
        '質量が半分なら、同じ力でも加速度は2倍。\n\n' +
        'スカラー倍は「比例関係」を表す最も基本的な道具なのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'force',
            vector: new Vector3(4, 0, 0),
            color: '#ff4444',
            label: 'F = ma',
          },
          {
            id: 'accel',
            vector: new Vector3(2, 0, 0),
            color: '#44aaff',
            label: 'a',
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
      title: 'まとめ：スカラー倍',
      content:
        'この章のポイント：\n\n' +
        '1. スカラー倍 = 各成分にスカラーをかける\n' +
        '2. 正のスカラー → 同じ方向に伸縮\n' +
        '3. 負のスカラー → 反対方向に伸縮\n' +
        '4. |cv| = |c| × |v|（大きさの倍率）\n' +
        '5. 単位ベクトル = v / |v|（方向だけ取り出す）\n\n' +
        '足し算とスカラー倍。この2つの操作を組み合わせた' +
        '「線形結合」が次のテーマです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-v',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'v',
          },
          {
            id: 'sum-2v',
            vector: new Vector3(4, 2, 0),
            color: '#ffaa00',
            label: '2v',
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
