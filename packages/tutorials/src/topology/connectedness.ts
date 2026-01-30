import { Tutorial } from '../types';

export const connectednessTutorial: Tutorial = {
  id: 'connectedness',
  title: '連結性',
  description: '空間が「ひとつながり」であること――連結性の直感と定義',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: 'つながっている？切れている？',
      content:
        '2つの領域が近づき、くっついて1つになります。バラバラだった空間が連結に変わる瞬間を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-connectedness-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '領域をドラッグして分離したりくっつけたりしましょう。連結かどうかがリアルタイムで表示されます。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-connectedness-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '連結の定義',
      content:
        '位相空間 X が連結とは、X を2つの空でない開集合の和に分解できないこと。直感的には「空間が1つの塊」ということです。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '非連結の例',
      content:
        '(0,1) ∪ (2,3) は連結ではありません。2つの開区間に分解できるからです。一方 (0,3) は連結です。区間は常に連結。',
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
        '有理数全体 Q は連結？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '有理数全体 Q は連結？',
        options: [
          { id: 'a', label: '連結', correct: false },
          { id: 'b', label: '非連結', correct: true },
          { id: 'c', label: '条件による', correct: false },
          { id: 'd', label: '定義できない', correct: false },
        ],
        explanation:
          'Qは非連結です。例えば Q = (Q ∩ (-∞, √2)) ∪ (Q ∩ (√2, ∞)) と2つの開集合に分けられます。隙間だらけだからです。',
      },
    },
    {
      id: 'alternate',
      title: '島で考える',
      content:
        '本州は1つの島で連結。日本列島全体は複数の島なので非連結。橋（連続な道）で繋がっていれば連結になります。連結成分＝個々の島です。',
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
        '連結＝空間が1つの塊であること。\n\nポイント：\n- 2つの開集合に分解できなければ連結\n- 区間は常に連結\n- 連結成分で非連結空間を分析できる\n\n領域を操作して連結性を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-connectedness-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
