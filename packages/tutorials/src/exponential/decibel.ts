import { Tutorial } from '../types';

export const decibelTutorial: Tutorial = {
  id: 'decibel',
  title: '【実践】デシベル',
  description: '音の大きさを対数スケール（デシベル）で理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '10dB上がるとどれだけうるさい？',
      content:
        'ささやき声（30dB）とジェット機（130dB）の差は100dB。しかしエネルギーの差は10¹⁰ = 100億倍！人間の耳が扱う音のエネルギー範囲は膨大で、それを扱いやすくするのがデシベルです。',
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
      title: '音の大きさを比較してみよう',
      content:
        'デシベル値を変えて、実際の音の強さがどれだけ変わるか体感しましょう。10dBの変化が感覚的にどう感じるか確認してください。',
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
      title: 'デシベルの定義',
      content:
        'L = 10·log₁₀(I/I₀) [dB]\n\n• I: 音の強さ（W/m²）\n• I₀: 基準値（10⁻¹² W/m²、聞こえる最小の音）\n\n逆に：I = I₀ · 10^(L/10)\n\n10dB増 → 強さ10倍\n20dB増 → 強さ100倍\n30dB増 → 強さ1,000倍\n\n対数スケール（指数の逆）で圧縮しています。',
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
      title: '身近な音のデシベル',
      content:
        '身近な音の目安：\n• 0 dB：聞こえる限界\n• 20 dB：木の葉のそよぎ\n• 40 dB：図書館\n• 60 dB：普通の会話\n• 80 dB：電車の中\n• 100 dB：工事現場\n• 120 dB：ジェット機近く（痛みの閾値）\n\n20dBごとにエネルギーが100倍になっています。',
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
      title: '計算してみよう',
      content: '60dBの音を2つ同時に鳴らすと何dBになる？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '60dBの音を2つ同時に鳴らすと？',
        options: [
          { id: 'a', label: '120 dB', correct: false },
          { id: 'b', label: '63 dB', correct: true },
          { id: 'c', label: '66 dB', correct: false },
          { id: 'd', label: '60 dB', correct: false },
        ],
        explanation:
          'エネルギーが2倍になるので 10·log₁₀(2) ≈ 3dB 増。60+3 = 63dB。デシベルは対数スケールなので、単純に足し算してはいけません。120dBにはなりません！',
      },
    },
    {
      id: 'alternate',
      title: 'なぜ対数スケールを使うのか',
      content:
        '人間の感覚は対数的です。ウェーバー・フェヒナーの法則によると、刺激の強さが2倍、4倍、8倍と指数的に変わるとき、感覚は1、2、3と等間隔に感じます。デシベルは人間の知覚に合った尺度なのです。指数関数の逆＝対数がここで活躍します。',
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
        'デシベル：\n• L = 10·log₁₀(I/I₀)\n• 10dB増で強さ10倍\n• 対数スケールで広い範囲を圧縮\n• 同じ音2つで+3dB（2倍のエネルギー）\n• 人間の感覚が対数的であることに対応\n\n指数関数と対数のつながりを実感できる例です。',
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
