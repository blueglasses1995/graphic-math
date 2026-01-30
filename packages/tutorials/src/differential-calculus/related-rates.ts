import { Tutorial } from '../types';

export const relatedRatesTutorial: Tutorial = {
  id: 'related-rates',
  title: '【実践】関連変化率',
  description: '複数の変量が同時に変化するとき、微分でそれらの変化率を関連づける',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '風船が膨らむ速さ',
      content:
        '風船に空気を入れると半径が増えます。半径の増加率がわかれば、体積の増加率もわかる。2つの変化率を結びつけるのが「関連変化率（Related Rates）」の問題です。',
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
        '風船の半径をスライダーで変えて、体積の変化率がどう変わるか観察してください。半径が大きいほど、同じ Δr でも体積の増え方が激しくなります。',
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
      title: '風船の問題',
      content:
        'V = (4/3)πr³ を t で微分: dV/dt = 4πr²·(dr/dt)。dr/dt = 2 cm/s、r = 5 cm のとき dV/dt = 4π(25)(2) = 200π cm³/s。半径の変化率から体積の変化率が求まります。',
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
      title: 'はしごの問題',
      content:
        '壁に立てかけた5mのはしごの下端が壁から離れていく。x²+y²=25 を t で微分: 2x(dx/dt)+2y(dy/dt)=0。x=3, dx/dt=1 のとき y=4 なので dy/dt = −3/4 m/s。上端は下がっていきます。',
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
        '円の面積 A = πr²。dr/dt = 3 のとき、r = 10 での dA/dt は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A=πr², dr/dt=3, r=10 のとき dA/dt は？',
        options: [
          { id: 'a', label: '30π', correct: false },
          { id: 'b', label: '60π', correct: true },
          { id: 'c', label: '100π', correct: false },
          { id: 'd', label: '6π', correct: false },
        ],
        explanation:
          'dA/dt = 2πr·(dr/dt) = 2π(10)(3) = 60π です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：暗黙の微分の応用',
      content:
        '関連変化率は「暗黙の微分の時間バージョン」です。等式の両辺を t で微分し、既知の変化率を代入して未知の変化率を求める。陰関数微分のスキルがそのまま活きます。',
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
        '関連変化率: 等式を時間で微分して、変化率同士を結びつける。物理・工学の問題で頻出のテクニックです。\n\n次は「テイラー展開」の入口を覗いてみましょう。',
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
