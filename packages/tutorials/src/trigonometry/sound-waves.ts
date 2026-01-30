import { Tutorial } from '../types';

export const soundWavesTutorial: Tutorial = {
  id: 'sound-waves',
  title: '【実践】音の正体',
  description: '音波を三角関数で表現し周波数と音の高さの関係を体験する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '音は波',
      content:
        '空気を叩くと振動が伝わる。それが音。\n\n純粋な音（純音）は y = A·sin(2πft) で表せます。f = 周波数（Hz）、A = 振幅。\n\n440 Hz の「ラ」の音を波形で見てみましょう。1秒に440回振動しています。',
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
      title: '周波数を変えてみよう',
      content:
        '周波数と振幅を変えて波形の変化を確認しましょう。\n\n周波数が高い → 波が細かい → 音が高い\n振幅が大きい → 波が高い → 音が大きい',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'frequency', min: 100, max: 1000, step: 10, initial: 440 },
          { name: 'amplitude', min: 0.1, max: 2, step: 0.1, initial: 1 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'ドレミと周波数',
      content:
        'ピアノの鍵盤と周波数:\n\nド(C4): 261.6 Hz\nレ(D4): 293.7 Hz\nミ(E4): 329.6 Hz\nファ(F4): 349.2 Hz\nソ(G4): 392.0 Hz\nラ(A4): 440.0 Hz\nシ(B4): 493.9 Hz\nド(C5): 523.3 Hz\n\n1オクターブ上がると周波数は2倍。隣の半音は × 2^(1/12) ≈ × 1.059 の関係です。',
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
      title: '和音は波の重ね合わせ',
      content:
        '「ドミソ」の和音:\nド: sin(2π × 261.6 × t)\nミ: sin(2π × 329.6 × t)\nソ: sin(2π × 392.0 × t)\n\n3つのsin波を足し合わせると和音の波形になります。\n\nきれいな和音 = 周波数比が単純な整数比\nドミソ = 4:5:6 → 心地よく響く\n\n波の重ね合わせ原理が音楽の和声の基礎です。',
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
        '音と周波数の関係を考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ラ(440Hz)の1オクターブ下の音の周波数は？',
        options: [
          { id: 'a', label: '880 Hz', correct: false },
          { id: 'b', label: '220 Hz', correct: true },
          { id: 'c', label: '330 Hz', correct: false },
          { id: 'd', label: '110 Hz', correct: false },
        ],
        explanation:
          '1オクターブ下 = 周波数が半分。440 / 2 = 220 Hz。\n\n1オクターブ上なら 440 × 2 = 880 Hz です。',
      },
    },
    {
      id: 'alternate',
      title: '倍音と音色',
      content:
        '実際の楽器の音は純粋なsinではありません。\n\n基本波 f に対して 2f, 3f, 4f... の倍音が重なります:\ny = sin(2πft) + 0.5·sin(4πft) + 0.3·sin(6πft) + ...\n\n倍音の強さの比率が「音色」を決めます。フルートはほぼ純音、バイオリンは倍音が豊か。\n\n同じ「ラ」でも楽器ごとに音色が違うのは、倍音構成が違うからです。',
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
        '音の正体は空気の振動 = sin波:\n\n・周波数 f: 音の高さ（Hz）\n・振幅 A: 音の大きさ\n・和音: 複数のsin波の重ね合わせ\n・音色: 倍音の比率\n\nすべての音はsin波の足し合わせで表現できます。これがフーリエの偉大な発見です。',
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
