import { Tutorial } from '../types';

export const fundamentalGroupTutorial: Tutorial = {
  id: 'fundamental-group',
  title: '基本群の入口',
  description: 'ループを使って空間の「穴」を検出する――基本群入門',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: 'ループで穴を見つける',
      content:
        '平面上のループは縮めて1点にできます。でもトーラスの穴を囲むループは縮められません。ループの振る舞いで穴がわかるのです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fundamental-group-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'ループを描いて、それが縮められるか確認しましょう。穴を囲むループと囲まないループの違いを体感してください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fundamental-group-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '基本群とは',
      content:
        '基点からのループ（閉曲線）を「連続変形で同一視」して集めたものが基本群 π₁(X)。ループの合成が群の演算になります。穴がなければ自明群、穴があれば非自明な群。',
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
      title: '具体例',
      content:
        '円 S¹ の基本群は Z（整数群）。ループが穴を何周するかで分類。トーラスの基本群は Z×Z（2方向の穴）。球 S² の基本群は自明群（穴なし）。',
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
        '8の字の基本群は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '8の字の基本群は？',
        options: [
          { id: 'a', label: 'Z（整数群）', correct: false },
          { id: 'b', label: 'Z×Z', correct: false },
          { id: 'c', label: '自由群 F₂', correct: true },
          { id: 'd', label: '自明群', correct: false },
        ],
        explanation:
          '8の字には2つの穴があり、それぞれを回るループ a, b が生成元。しかし ab≠ba なので自由群 F₂ になります。',
      },
    },
    {
      id: 'alternate',
      title: '犬のリードで考える',
      content:
        '公園の木にリードが巻きついた犬を想像しましょう。木の周りを1周、2周…とカウント。これが基本群の元です。右回りと左回りでは符号が違い、1周して戻せば「何もしない」と同じ。',
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
        '基本群 π₁(X)＝ループの同値類が作る群。\n\nポイント：\n- ループで空間の穴を検出\n- 球: 自明群、円: Z、トーラス: Z×Z\n- 位相的不変量として強力\n\nループを描いて基本群を体感しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fundamental-group-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
