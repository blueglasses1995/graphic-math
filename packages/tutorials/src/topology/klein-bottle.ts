import { Tutorial } from '../types';

export const kleinBottleTutorial: Tutorial = {
  id: 'klein-bottle',
  title: 'クラインの壺',
  description: '内側も外側もない閉曲面――クラインの壺の不思議',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '内も外もない壺',
      content:
        'チューブの一端を曲げて自分自身を貫通させ、もう一端とつなぎます。3次元では自己交差しますが、4次元なら交差なしに作れます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-klein-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'クラインの壺の3Dモデルを回転させて、自己交差の部分を観察しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-klein-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'メビウスの帯との関係',
      content:
        'クラインの壺は2枚のメビウスの帯を辺で貼り合わせたものと同じです。メビウスの帯の「境界なし版」とも言えます。どちらも非向き付け可能な曲面です。',
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
      id: 'example-2',
      title: '4次元の住人',
      content:
        'クラインの壺は4次元空間では自己交差なしに存在できます。3次元の私たちには完全な形を見ることができません。ちょうど3次元の結び目を2次元の紙に描くと交差が生じるのと同じです。',
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
      title: '予測してみよう',
      content:
        'クラインの壺のオイラー標数は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'クラインの壺の χ は？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '1', correct: false },
          { id: 'c', label: '0', correct: true },
          { id: 'd', label: '-1', correct: false },
        ],
        explanation:
          'クラインの壺のオイラー標数は0です。トーラスと同じ χ=0 ですが、非向き付け可能という点で異なります。',
      },
    },
    {
      id: 'alternate',
      title: '靴下で考える',
      content:
        '靴下を裏返すことを考えましょう。普通の靴下は内と外があります。クラインの壺は「裏返しても同じ」――そもそも内外の区別がないのです。4次元の靴下と言えるかもしれません。',
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
        'クラインの壺＝内外の区別がない閉曲面。\n\nポイント：\n- 非向き付け可能\n- 4次元でのみ自己交差なしに存在\n- メビウスの帯2枚を貼り合わせた構造\n\n3Dモデルを観察しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-klein-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
