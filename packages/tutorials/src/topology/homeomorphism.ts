import { Tutorial } from '../types';

export const homeomorphismTutorial: Tutorial = {
  id: 'homeomorphism',
  title: '同相（ホメオモーフィズム）',
  description: '双方向に連続な変換――位相的に「同じ形」の正確な意味',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '行きも帰りも連続',
      content:
        '正方形が円に、円が正方形に滑らかに変形します。行きも帰りも連続――これが同相写像です。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-homeomorphism-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '形を変形させて、同相な形と同相でない形の違いを体感しましょう。穴を開けない限り同相が保たれます。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-homeomorphism-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '同相の定義',
      content:
        '2つの空間 X, Y が同相とは、連続な全単射 f: X→Y があり、その逆写像 f⁻¹ も連続であること。f を同相写像（ホメオモーフィズム）と呼びます。',
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
      title: '同相でない例',
      content:
        '線分と円は同相ではありません。線分には端点がありますが、円にはありません。端点を取り除くと線分は2つに分かれますが、円のどの1点を除いてもつながったまま。',
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
        '文字の O と D は同相？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'O と D は同相？',
        options: [
          { id: 'a', label: '同相', correct: true },
          { id: 'b', label: '同相でない', correct: false },
          { id: 'c', label: 'Dの形による', correct: false },
          { id: 'd', label: '判断できない', correct: false },
        ],
        explanation:
          'どちらも穴が1つある閉じた曲線です。Dの直線部分を丸く膨らませればOになります。',
      },
    },
    {
      id: 'alternate',
      title: 'アルファベットの分類',
      content:
        'アルファベットを位相で分類してみましょう。C, I, L, Sは「端点2つの曲線」で同相。O, Dは「穴1つ」で同相。B, 8は「穴2つ」で同相。Tは「分岐点1つ」で独特。',
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
        '同相＝双方向に連続な全単射が存在すること。位相的に「同じ形」の正確な定義。\n\nポイント：\n- 行きも帰りも連続が必要\n- 穴の数、端点の数が同相の判定に重要\n- 位相的不変量が一致しなければ同相でない\n\n形の変形を試してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-homeomorphism-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
