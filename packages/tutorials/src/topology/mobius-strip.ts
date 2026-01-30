import { Tutorial } from '../types';

export const mobiusStripTutorial: Tutorial = {
  id: 'mobius-strip',
  title: 'メビウスの帯',
  description: '表も裏もない不思議な曲面――メビウスの帯の位相',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '片面しかない帯',
      content:
        '紙の帯を半回転ひねって端を貼り合わせます。するとアリが帯の上を歩くと、裏側に回ることなく出発点に戻れます。不思議なメビウスの帯のアニメーションです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-mobius-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'メビウスの帯を回転させて、表と裏が1つにつながっていることを確認しましょう。帯の上を辿ることもできます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-mobius-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '非向き付け可能',
      content:
        'メビウスの帯は「非向き付け可能」な曲面です。表と裏の区別がつかない。法線ベクトルを連続的に定義できません。',
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
      title: '真ん中を切ると',
      content:
        'メビウスの帯を中央で切ると、バラバラにならず1本の長い帯になります（2回ひねったリング）。さらに切ると2本の絡まった帯に。普通のリングとは全く違う振る舞いです。',
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
        'メビウスの帯の辺（境界）は何本？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'メビウスの帯の辺は何本？',
        options: [
          { id: 'a', label: '0本', correct: false },
          { id: 'b', label: '1本', correct: true },
          { id: 'c', label: '2本', correct: false },
          { id: 'd', label: '3本', correct: false },
        ],
        explanation:
          '普通の帯は辺が2本ですが、メビウスの帯はひねりによって辺が1本につながります。指で辺を辿ると一周して戻ってきます。',
      },
    },
    {
      id: 'alternate',
      title: 'ベルトコンベアで考える',
      content:
        'メビウスの帯のベルトコンベアがあったら、ベルトの両面が均等に摩耗します（片面しかないから）。実際にメビウスの帯を応用したコンベアベルトやリサイクルマークのデザインがあります。',
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
        'メビウスの帯＝片面・辺1本の非向き付け可能な曲面。\n\nポイント：\n- 半回転ひねって貼り合わせ\n- 表裏の区別がない\n- 中央で切ると1本の帯になる\n\n3Dモデルを回転させて確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-mobius-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
