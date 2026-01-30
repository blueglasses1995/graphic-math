import { Tutorial } from '../types';

export const hausdorffTutorial: Tutorial = {
  id: 'hausdorff',
  title: 'ハウスドルフ空間',
  description: '異なる2点を開集合で分離できる――ハウスドルフ条件の意味',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '2点を分離する',
      content:
        '異なる2点の周りにそれぞれ開集合が現れ、重ならないことが示されます。これがハウスドルフ空間の条件です。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-hausdorff-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '2つの点を動かして、それぞれの周りに交わらない近傍が取れるか確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-hausdorff-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'T2公理',
      content:
        'ハウスドルフ空間（T2空間）の定義：任意の異なる2点 x, y に対し、x∈U, y∈V かつ U∩V=∅ となる開集合 U, V が存在する。「点を区別できる」空間です。',
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
      title: 'ハウスドルフでない例',
      content:
        '密着位相（開集合が空集合と全体だけ）はハウスドルフではありません。どの2点も分離できない。日常的な空間（R^n など）はすべてハウスドルフです。',
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
      id: 'predict',
      title: '予測してみよう',
      content:
        '離散位相の空間はハウスドルフ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '離散位相はハウスドルフ？',
        options: [
          { id: 'a', label: 'ハウスドルフ', correct: true },
          { id: 'b', label: 'ハウスドルフでない', correct: false },
          { id: 'c', label: '集合による', correct: false },
          { id: 'd', label: '判断できない', correct: false },
        ],
        explanation:
          '離散位相ではすべての部分集合が開集合なので、{x}と{y}で簡単に分離できます。',
      },
    },
    {
      id: 'alternate',
      title: '座席で考える',
      content:
        '映画館で2人の客が別々の席に座れるなら、その空間はハウスドルフ的。もし全員が同じ席にしか座れない映画館があったら、それはハウスドルフでない空間です。',
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
        'ハウスドルフ空間＝異なる2点を開集合で分離できる空間。\n\nポイント：\n- 日常的な空間はすべてハウスドルフ\n- 極限の一意性が保証される\n- 密着位相は典型的な非ハウスドルフ空間\n\n点の分離を体験しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-hausdorff-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
