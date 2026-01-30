import { Tutorial } from '../types';

export const waveSuperpositionTutorial: Tutorial = {
  id: 'wave-superposition',
  title: '【実践】波の足し算',
  description: '2つのsin波を足すと、強め合ったり弱め合ったりする',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '2つの波が出会うとき',
      content:
        '2つのsin波が同時に存在するとき、何が起こるでしょうか？\n\n上のパネルに赤と緑の2つの波が見えます。下のパネルはその合計です。\n\n再生して、波が徐々にずれていく様子を見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '強め合いと弱め合い',
      content:
        '再生と一時停止を切り替えて、合成波の変化をじっくり観察してください。\n\n波が「大きくなる瞬間」と「消える瞬間」があるはずです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-constructive',
      title: '山 + 山 = 大きな山',
      content:
        '2つの波の山が重なると、合成波の山は2倍の高さになります。\n\nsin(x) + sin(x) = 2sin(x)\n\nこれを「強め合い（constructive interference）」と呼びます。\n\nスピーカーを2つ並べて同じ音を出すと音が大きくなるのはこの原理です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-destructive',
      title: '山 + 谷 = 消える',
      content:
        '一方の山がもう一方の谷と重なると、打ち消し合って合成波はゼロに近づきます。\n\nsin(x) + sin(x + π) = 0\n\nこれを「弱め合い（destructive interference）」と呼びます。\n\nノイズキャンセリングヘッドフォンはまさにこの原理。外の音波に逆位相の波をぶつけて消しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        '2つの波の位相差がπ/2（90°）のとき、合成波はどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '位相差π/2のとき、合成波は？',
        options: [
          { id: 'a', label: '完全に消える', correct: false },
          { id: 'b', label: '元の√2倍の振幅になる', correct: true },
          { id: 'c', label: '元の2倍の振幅になる', correct: false },
          { id: 'd', label: '波の形が崩れる', correct: false },
        ],
        explanation:
          '位相差π/2では、sin(x) + sin(x+π/2) = sin(x) + cos(x) = √2 · sin(x + π/4)。振幅は√2倍（約1.41倍）になり、位相がπ/4だけずれます。完全な強め合い（2倍）でも弱め合い（0）でもない、中間の状態です。',
      },
    },
    {
      id: 'alternate',
      title: '身近な波の重ね合わせ',
      content:
        '水面に石を2つ投げると、波紋が重なって複雑な模様ができます。あれも波の足し算です。\n\nギターの弦を弾くとき、基本音と倍音（周波数が2倍、3倍...）が同時に鳴り、それぞれの楽器特有の「音色」が生まれます。\n\nこのように、複雑に見える波も「sinの足し算」で分解できます。これがフーリエ解析の出発点です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '波の重ね合わせ: 2つのsin波を足すと、位相差によって強め合い（大きくなる）や弱め合い（消える）が起きます。\n\nよくある誤解: 波は足すと必ず大きくなると思うこと。逆位相なら完全に消えます。\n\n音、光、電波、水面波...すべての波にこの法則が適用されます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
