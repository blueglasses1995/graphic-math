import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const pendulumTutorial: Tutorial = {
  id: 'pendulum',
  title: '振り子とsin',
  description: '振り子の動きはsin関数そのもの。数学と物理の接点',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '振り子が描く波',
      content:
        '振り子が揺れています。その横方向の変位をグラフにすると...sinのグラフが現れます。再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pendulum',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '振り子を観察しよう',
      content:
        '再生と一時停止を切り替えて、振り子の位置とグラフの関係をじっくり観察してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pendulum',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-peak',
      title: '右端 = sinの山',
      content:
        '振り子が右端にいるとき、横方向の変位は最大です。これがsinの山にあたります。中央を通過するとき変位はゼロ。sinのグラフでもゼロを横切る瞬間です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'peak',
            vector: new Vector3(1, 0, 0),
            color: '#44ff44',
            label: '右端: 変位 = 最大',
            showComponents: true,
          },
          {
            id: 'center',
            vector: new Vector3(0, -1, 0),
            color: '#888888',
            label: '中央: 変位 = 0',
          },
        ],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-trough',
      title: '左端 = sinの谷',
      content:
        '左端に到達すると変位は最小（マイナス）になります。sinの谷です。右が正、左が負。振り子はsinの波をそのまま体現しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'trough',
            vector: new Vector3(-1, 0, 0),
            color: '#ff4444',
            label: '左端: 変位 = 最小',
            showComponents: true,
          },
          {
            id: 'center',
            vector: new Vector3(0, -1, 0),
            color: '#888888',
            label: '中央: 変位 = 0',
          },
        ],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict-length',
      title: '予測してみよう',
      content:
        '振り子の長さを変えると、揺れ方が変わります。\n\n振り子を長くすると波はどう変わるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pendulum',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '振り子を長くすると波はどう変わる？',
        options: [
          { id: 'a', label: '波の高さ（振幅）が大きくなる', correct: false },
          { id: 'b', label: '周期が長くなる（ゆっくり揺れる）', correct: true },
          { id: 'c', label: '波の形がギザギザになる', correct: false },
          { id: 'd', label: '何も変わらない', correct: false },
        ],
        explanation:
          '振り子を長くすると、1往復にかかる時間（周期）が長くなります。ゆったりとした波になるのです。これが sin の周期が伸びることに対応します。',
      },
    },
    {
      id: 'alternate-swing',
      title: 'ブランコで考える',
      content:
        'ブランコに乗っている自分を想像してください。前に行って、戻って、後ろに行って、戻る。あなたの高さの変化はsinです。\n\n友達があなたの位置を1秒ごとにメモしたら、sinのグラフが完成します。\n\nブランコの鎖が長いほど、ゆっくり揺れる。これが周期の長さです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pendulum',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '振り子、ブランコ、波、心拍...身の回りの往復運動はすべてsinで記述できます。数学と物理の接点がここにあります。\n\nよくある誤解: sinは数学だけの話だと思うこと。実は物理現象を記述するために生まれた関数です。\n\n振り子の動きをもう一度見て、sinの波と重ねてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pendulum',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
