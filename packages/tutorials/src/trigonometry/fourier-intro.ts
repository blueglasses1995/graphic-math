import { Tutorial } from '../types';

export const fourierIntroTutorial: Tutorial = {
  id: 'fourier-intro',
  title: '【実践】フーリエの入口',
  description: '任意の波形をsin波の重ね合わせで表現するフーリエ級数の入門',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: 'すべてはsinでできている',
      content:
        '四角い波、三角の波、ギザギザの波。どんな形の波もsin波の足し算で作れる。\n\nこれがフーリエの発見です。\n\n矩形波（四角い波）をsin波で近似していく様子を見てみましょう。',
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
      title: '項数を増やしてみよう',
      content:
        'sin波の足し合わせる数（項数）を変えてみましょう。\n\n項数1: 1つのsin波（なめらか）\n項数3: 少し四角く\n項数10: かなり四角く\n項数50: ほぼ完璧な矩形波\n\n多くのsin波を足すほど、目標の波形に近づきます。',
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
          { name: 'terms', min: 1, max: 50, step: 1, initial: 1 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '矩形波のフーリエ級数',
      content:
        '矩形波は奇数次の倍音だけで構成されます:\n\ny = sin(θ) + sin(3θ)/3 + sin(5θ)/5 + sin(7θ)/7 + ...\n\n一般項: sin((2n-1)θ) / (2n-1)\n\n各項の振幅は1, 1/3, 1/5, 1/7... と減少。高い倍音ほど弱くなりますが、完全になくなることはありません。\n\n無限に足し合わせて初めて完全な矩形波になります。',
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
      title: '三角波と鋸波',
      content:
        '三角波:\ny = sin(θ) − sin(3θ)/9 + sin(5θ)/25 − ...\n振幅が1/n²で減少 → なめらかな形\n\n鋸波:\ny = sin(θ) − sin(2θ)/2 + sin(3θ)/3 − ...\n偶数次も含む → 非対称な形\n\n波形ごとに「どの倍音をどれだけ含むか」が違います。これが波形の個性を決めます。',
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
        'フーリエ級数の性質を考えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '矩形波のフーリエ級数に含まれない倍音は？',
        options: [
          { id: 'a', label: '3次倍音', correct: false },
          { id: 'b', label: '5次倍音', correct: false },
          { id: 'c', label: '4次倍音', correct: true },
          { id: 'd', label: '7次倍音', correct: false },
        ],
        explanation:
          '矩形波は奇数次(1, 3, 5, 7, ...)の倍音のみで構成されます。\n\n偶数次(2, 4, 6, ...)は含まれません。これは矩形波が上下対称（奇関数）であることに対応しています。',
      },
    },
    {
      id: 'alternate',
      title: 'フーリエの革命',
      content:
        'ジョゼフ・フーリエは1807年に「任意の関数はsin/cosの和で表せる」と主張しました。\n\n当時の数学者たちは信じませんでした。でもこれは正しかった。\n\n現代での応用:\n・MP3: 音をフーリエ変換 → 聞こえない周波数を削除 → 圧縮\n・JPEG: 画像を周波数成分に分解 → 圧縮\n・MRI: 体内の信号をフーリエ変換 → 画像化\n\nフーリエ変換なしには現代技術は成り立ちません。',
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
        'フーリエ級数:\nどんな周期関数もsin/cosの重ね合わせで表現できる。\n\n・矩形波 = 奇数次倍音の和\n・三角波 = 振幅が1/n²で減衰\n・項数を増やすほど精度が上がる\n\nこの考え方は音声処理、画像圧縮、信号解析など、現代テクノロジーの根幹をなしています。',
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
