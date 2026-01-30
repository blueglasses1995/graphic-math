import { Tutorial } from '../types';

export const fixedPointTutorial: Tutorial = {
  id: 'fixed-point',
  title: '固定点定理',
  description: 'どんなかき混ぜ方にも「動かない点」がある――ブラウワーの固定点定理',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '必ず動かない点がある',
      content:
        '円盤上の点がぐるぐる混ぜられますが、どんな連続変形でも少なくとも1点は元の位置に留まります。その点が光ります。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fixed-point-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '変形のパラメータを変えて、固定点がどこに現れるか探しましょう。どんな変形でも固定点が存在することを確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fixed-point-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ブラウワーの固定点定理',
      content:
        'n次元閉球体 Dⁿ から Dⁿ への任意の連続写像には固定点が存在する。1次元なら中間値の定理の帰結、2次元なら「コーヒーをかき混ぜても動かない点がある」。',
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
      title: '地図の例',
      content:
        '東京の地図を東京の地面の上に置くと、地図上のちょうど1点が実際のその場所の真上に来ます。地図と実際の地面の対応に固定点が存在するのです。',
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
        '球面 S²→S² の連続写像にも必ず固定点はある？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '球面の連続写像に固定点は必ずある？',
        options: [
          { id: 'a', label: '必ずある', correct: false },
          { id: 'b', label: '必ずしもない（対蹠写像など）', correct: true },
          { id: 'c', label: '2点以上ある', correct: false },
          { id: 'd', label: '定義域による', correct: false },
        ],
        explanation:
          '対蹠写像（各点を反対側に移す）は固定点を持ちません。ブラウワーの定理は球体（中身あり）に対するもので、球面（表面のみ）には適用できません。',
      },
    },
    {
      id: 'alternate',
      title: 'コーヒーで考える',
      content:
        'コーヒーカップの中身をスプーンでかき混ぜます。どんなに複雑にかき混ぜても、液体の少なくとも1点は元の位置に留まっています。これがブラウワーの固定点定理の直感的な意味です。',
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
        'ブラウワーの固定点定理＝閉球体の連続写像には固定点がある。\n\nポイント：\n- コンパクト凸集合で成立\n- 経済学のナッシュ均衡の証明にも使われる\n- 位相的手法の威力を示す定理\n\n固定点を探してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-fixed-point-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
