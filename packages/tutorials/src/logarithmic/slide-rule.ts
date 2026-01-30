import { Tutorial } from '../types';

export const slideRuleTutorial: Tutorial = {
  id: 'slide-rule',
  title: '【実践】計算尺',
  description: '対数の積→和の法則を利用した計算尺の仕組みを体験する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '棒をスライドしてかけ算',
      content:
        '計算尺は対数目盛の定規を2本重ねた道具。一方をスライドさせるだけでかけ算ができます。log(A) + log(B) = log(AB) の原理です。',
      customScene: 'slide-rule-animation',
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
        '仮想の計算尺をスライドさせて、2 × 3 = 6 を求めてみてください。対数目盛上で2の位置に3を合わせると6が読めます。',
      customScene: 'slide-rule-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '対数目盛の構造',
      content:
        '1から10までの対数目盛では、2の位置は log₁₀(2) ≈ 0.301 の場所。3は 0.477、5は 0.699。等間隔ではなく、大きい数ほど詰まっています。',
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
      title: '割り算もできる',
      content:
        '割り算は引き算。log(A) - log(B) = log(A/B) なので、計算尺を逆方向にスライドすれば割り算もできます。一本の道具でかけ算と割り算の両方が可能です。',
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
        '計算尺で 4 × 5 を求めるとき、目盛り上で4の位置に合わせる値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '4 × 5 を計算尺で求めるとき、答えは目盛りのどこに現れる？',
        options: [
          { id: 'a', label: '9の位置', correct: false },
          { id: 'b', label: '20の位置（次の桁の2）', correct: true },
          { id: 'c', label: '4.5の位置', correct: false },
          { id: 'd', label: '1の位置', correct: false },
        ],
        explanation:
          'log(4) + log(5) = 0.602 + 0.699 = 1.301。1を超えるので次の桁に入り、10^0.301 ≈ 2 → 答えは20です。',
      },
    },
    {
      id: 'alternate',
      title: '計算尺の歴史',
      content:
        '1620年代にガンターが対数目盛を発明し、1630年代にオートレッドが計算尺を考案。以来約350年間、科学者・技術者の必携品でした。\n\nアポロ計画でも計算尺が使われました。電卓の普及で1970年代に役目を終えましたが、対数の原理は今も健在です。',
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
        '計算尺は log(AB) = log A + log B を物理的に実現した道具。スライドするだけでかけ算・割り算ができます。\n\n仮想計算尺で自由に計算を試してみてください。',
      customScene: 'slide-rule-summary',
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
