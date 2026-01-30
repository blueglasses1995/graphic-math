import { Tutorial } from '../types';

export const musicOctaveTutorial: Tutorial = {
  id: 'music-octave',
  title: '【実践】音楽とオクターブ',
  description: '音階が対数的に構成されている理由を理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '周波数が2倍でオクターブ',
      content:
        'ピアノのA4 = 440Hz、A5 = 880Hz。周波数が2倍になると1オクターブ上がります。音階は周波数の対数スケールで等間隔に並んでいます。',
      customScene: 'music-octave-animation',
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
        '鍵盤を押して周波数を確認してください。隣り合う半音の周波数比は常に一定（2^(1/12) ≈ 1.0595）です。',
      customScene: 'music-octave-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '12平均律',
      content:
        '1オクターブを12の半音に等分します。各半音の周波数比は 2^(1/12)。半音 n 個上の音の周波数は f × 2^(n/12)。対数的に等間隔な分割です。',
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
      title: '人間の聴覚',
      content:
        '人間の耳は周波数の「比」を音程として感じます。440Hz→880Hzも、1000Hz→2000Hzも、同じ「1オクターブ」に聞こえます。聴覚は本質的に対数的です。',
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
        'A4 = 440Hz のとき、2オクターブ上の A6 の周波数は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A6 の周波数は何Hz？',
        options: [
          { id: 'a', label: '880Hz', correct: false },
          { id: 'b', label: '1760Hz', correct: true },
          { id: 'c', label: '1320Hz', correct: false },
          { id: 'd', label: '2200Hz', correct: false },
        ],
        explanation:
          '2オクターブ上 = 周波数が 2² = 4倍。440 × 4 = 1760Hz です。',
      },
    },
    {
      id: 'alternate',
      title: 'セントとデシベル',
      content:
        '音楽では音程の微細な差を「セント」で表します。1オクターブ = 1200セント。\n\nセント = 1200 × log₂(f₂/f₁)\n\n半音 = 100セント。これも対数スケールの一種です。',
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
        '音階は周波数の対数スケール。オクターブは周波数2倍、半音は 2^(1/12) 倍。人間の聴覚が比を感じるため、対数的な構成が自然です。\n\n鍵盤を触って周波数と音程の関係を確認してください。',
      customScene: 'music-octave-summary',
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
