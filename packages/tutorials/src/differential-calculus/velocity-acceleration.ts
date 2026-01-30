import { Tutorial } from '../types';

export const velocityAccelerationTutorial: Tutorial = {
  id: 'velocity-acceleration',
  title: '【実践】速度と加速度',
  description: '位置・速度・加速度の関係を微分で理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '位置を微分すると速度になる',
      content:
        'ボールの位置 s(t) を時間 t で微分すると速度 v(t) = s\'(t)。さらに微分すると加速度 a(t) = v\'(t) = s\'\'(t)。微分を繰り返すと運動の情報が次々と現れます。',
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
        '時刻 t を動かして、位置・速度・加速度の3つのグラフが同時にどう変わるか観察してください。',
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
      title: '自由落下',
      content:
        '重力下の自由落下: s(t) = −(1/2)gt²。v(t) = s\'(t) = −gt。a(t) = v\'(t) = −g ≈ −9.8 m/s²。加速度が一定（重力加速度）なのが自由落下の特徴です。',
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
      title: '等速円運動',
      content:
        'x(t) = cos(t)、y(t) = sin(t) のとき、速度は (−sin t, cos t)、加速度は (−cos t, −sin t)。加速度は常に中心を向いています（向心加速度）。これがニュートン力学の出発点です。',
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
        's(t) = t³ − 6t のとき、物体が一瞬止まる（v=0）のはいつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 's(t) = t³−6t で v(t) = 0 となる t > 0 は？',
        options: [
          { id: 'a', label: 't = 1', correct: false },
          { id: 'b', label: 't = √2', correct: true },
          { id: 'c', label: 't = 2', correct: false },
          { id: 'd', label: 't = √6', correct: false },
        ],
        explanation:
          'v(t) = 3t²−6 = 0 より t² = 2、t = √2 ≈ 1.414。t > 0 の解は t = √2 です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：ジャーク',
      content:
        '加速度をさらに微分したものを「ジャーク（躍度）」と呼びます。j(t) = a\'(t) = s\'\'\'(t)。ジャークが大きいと乗り心地が悪くなります。エレベーターの設計ではジャークを最小化します。',
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
        '位置→速度→加速度は微分の連鎖。s\'=v、v\'=a。物理学における微分の最も基本的な応用です。\n\n速度・加速度の感覚を使って、次は「最適化問題」に挑戦しましょう。',
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
