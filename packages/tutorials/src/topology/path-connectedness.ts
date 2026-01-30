import { Tutorial } from '../types';

export const pathConnectednessTutorial: Tutorial = {
  id: 'path-connectedness',
  title: '弧状連結',
  description: '任意の2点を道でつなげる――弧状連結の概念',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '2点をつなぐ道',
      content:
        '空間上の2点を結ぶ連続な道がアニメーションで描かれます。道が途切れなければ弧状連結です。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-path-connected-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '2点を自由に配置して、それらを結ぶ道が存在するか確認しましょう。障害物を配置して道が塞がれる場合も試してみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-path-connected-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '弧状連結の定義',
      content:
        '空間 X が弧状連結とは、任意の2点 a, b に対して連続な道 γ: [0,1]→X で γ(0)=a, γ(1)=b となるものが存在すること。歩いて行けるということです。',
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
      title: '連結と弧状連結の関係',
      content:
        '弧状連結ならば連結ですが、逆は必ずしも成り立ちません。ただし多くの「普通の」空間では両者は一致します。トポロジストの正弦曲線が反例として有名です。',
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
        '原点を除いた平面 R²\\{0} は弧状連結？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'R²\\{0} は弧状連結？',
        options: [
          { id: 'a', label: '弧状連結', correct: true },
          { id: 'b', label: '弧状連結でない', correct: false },
          { id: 'c', label: '連結だが弧状連結でない', correct: false },
          { id: 'd', label: '非連結', correct: false },
        ],
        explanation:
          '原点を避けて迂回すればどの2点もつなげます。2次元なら穴が1つあっても回り道できるのです。',
      },
    },
    {
      id: 'alternate',
      title: '迷路で考える',
      content:
        '迷路のスタートからゴールまで道があれば弧状連結。壁で完全に区切られていたら非弧状連結。弧状連結＝「通路が確保されている」ということです。',
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
        '弧状連結＝どの2点も連続な道でつなげる。\n\nポイント：\n- 弧状連結⇒連結（逆は必ずしも成り立たない）\n- 道＝[0,1]からの連続写像\n- 日常的な空間では連結≒弧状連結\n\n道を描いて確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-path-connected-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
