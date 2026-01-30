import { Tutorial } from '../types';

export const concavityTutorial: Tutorial = {
  id: 'concavity',
  title: '凹凸と変曲点',
  description: '二次導関数から曲線の凹凸（上に凸・下に凸）と変曲点を理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '曲がり方の向き',
      content:
        'グラフには「下に凸（お椀型）」と「上に凸（山型）」の2種類の曲がり方があります。その切り替わり点が「変曲点」。二次導関数 f\'\'(x) がこれを教えてくれます。',
      customScene: 'concavity-animation',
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
        'x を動かして、接線の傾きが増えている区間と減っている区間を観察してください。傾きが増加中＝下に凸、傾きが減少中＝上に凸です。',
      customScene: 'concavity-interactive',
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
      title: 'f\'\'の符号と凹凸',
      content:
        'f\'\'(x) > 0 → 下に凸（concave up）。傾きが増加中。\nf\'\'(x) < 0 → 上に凸（concave down）。傾きが減少中。\nf\'\'(x) = 0 で符号が変わる点が変曲点です。',
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
      title: '具体例：f(x) = x³',
      content:
        "f'(x) = 3x²、f''(x) = 6x。f''=0 のとき x=0。x<0 で f''<0（上に凸）、x>0 で f''>0（下に凸）。x=0 が変曲点。S字型カーブの切り替わり地点です。",
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
        'f(x) = x⁴ − 6x² の変曲点の x 座標は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x) = x⁴−6x² の変曲点の x は？',
        options: [
          { id: 'a', label: 'x = 0', correct: false },
          { id: 'b', label: 'x = ±1', correct: true },
          { id: 'c', label: 'x = ±√3', correct: false },
          { id: 'd', label: 'x = ±2', correct: false },
        ],
        explanation:
          'f\'\'(x) = 12x²−12 = 12(x²−1)。f\'\'=0 のとき x=±1。前後で符号が変わるので変曲点です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：加速度',
      content:
        '位置 s(t) の一次導関数が速度 v、二次導関数が加速度 a。加速度が正なら「加速中」（下に凸）、負なら「減速中」（上に凸）。凹凸は物理では加速度に対応します。',
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
        'f\'\'> 0 → 下に凸、f\'\' < 0 → 上に凸。f\'\'=0 で凹凸が切り替わる点が変曲点。増減表に凹凸情報を加えれば、グラフの概形を完全に描けます。\n\n次は「近似の力」。微分を使った一次近似を学びましょう。',
      customScene: 'concavity-summary',
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
