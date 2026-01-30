import { Tutorial } from '../types';

export const tdaTutorial: Tutorial = {
  id: 'tda',
  title: '【実践】位相データ分析',
  description: 'データの「形」を読む――TDA（位相データ分析）入門',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: 'データに隠れた形',
      content:
        '点群データの周りに半径を広げていくと、穴やつながりが見えてきます。パーシステントホモロジーがデータの位相的特徴を抽出する過程です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-tda-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'スライダーで半径パラメータを変えて、データの位相的構造がどう変化するか観察しましょう。穴が現れたり消えたりします。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-tda-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'パーシステントホモロジー',
      content:
        'データ点の周りに円盤を描き、半径を0から∞に増やす。途中で穴が生まれ（birth）、大きくなると消える（death）。長く生き残る特徴が本質的な構造です。',
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
      title: 'パーシステンス図',
      content:
        '各特徴の (birth, death) を平面にプロットしたものがパーシステンス図。対角線から離れた点ほど「長く生き残る＝本質的」な特徴。ノイズは対角線付近に集まります。',
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
        '円環状に分布するデータ点のパーシステンス図で目立つ特徴は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '円環状データのパーシステンス図の特徴は？',
        options: [
          { id: 'a', label: '対角線から離れた1次元ホモロジーの点', correct: true },
          { id: 'b', label: '対角線上に集中', correct: false },
          { id: 'c', label: '0次元の点が目立つ', correct: false },
          { id: 'd', label: '特徴的なパターンなし', correct: false },
        ],
        explanation:
          '円環にはH₁（穴）が1つあり、長く生き残るのでパーシステンス図で対角線から離れた点として現れます。',
      },
    },
    {
      id: 'alternate',
      title: '実世界への応用',
      content:
        'TDAは画像認識、脳科学、材料科学、金融データ分析に応用されています。データの「形」が意味を持つ場面で威力を発揮します。例：脳の神経ネットワークの穴の検出。',
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
        'TDA＝位相の道具でデータの形を分析する手法。\n\nポイント：\n- パーシステントホモロジーが中核\n- birth/deathで特徴の重要度を測る\n- ノイズに強く、座標に依存しない\n\nパラメータを変えて実験しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-tda-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
