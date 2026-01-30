import { Tutorial } from '../types';

export const seismicAnalysisTutorial: Tutorial = {
  id: 'seismic-analysis',
  title: '地震波の解析',
  description: '地震波のフーリエ解析と地球内部構造の探査を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '地球の中を見る',
      content:
        '地震波は地球内部を伝わる振動です。\n\n地震波のフーリエ解析により:\n・地震の規模とメカニズムの解明\n・地球内部の構造の推定\n・建物の耐震設計\n\nが可能になります。周波数分析が地球科学を支えています。',
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
      title: '地震波のスペクトルを観察',
      content:
        '地震の規模と距離を変えて、地震波のスペクトル特性がどう変わるか確認しましょう。',
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
          { name: 'magnitude', min: 3, max: 9, step: 0.5, initial: 6 },
          { name: 'distance', min: 10, max: 1000, step: 10, initial: 100 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '地震波の周波数特性',
      content:
        '地震波の種類と周波数帯:\n\nP波（縦波）: 0.01-10Hz、最も速く到達\nS波（横波）: 0.01-10Hz、P波の次に到達\n表面波: 0.001-1Hz、被害の主因\n\n地震の規模と周波数の関係:\n・小さい地震: 高周波が卓越\n・大きい地震: 低周波が卓越\n\n応答スペクトル:\n建物の固有周期と地震波の周期が一致すると共振が起き、\n被害が大きくなります。',
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
      title: '応答スペクトル',
      content:
        '応答スペクトルは耐震設計の基本ツールです。\n\n1自由度系の運動方程式:\nmẍ + cẋ + kx = -mÿ(t)\n\nここで ÿ(t) は地震の加速度波形。\n\n固有周期 T の系の最大応答を計算し、\nTの関数としてプロットしたものが応答スペクトル。\n\nフーリエ変換を使うと:\nX(ω) = -Ÿ(ω) · H(ω)\nH(ω) は系の周波数応答関数。\n\n周波数領域での掛け算で効率的に計算できます。',
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
      content: '地震波の解析について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '固有周期0.5秒の建物が最も影響を受ける地震波の周波数は？',
        options: [
          { id: 'a', label: '0.5Hz', correct: false },
          { id: 'b', label: '1Hz', correct: false },
          { id: 'c', label: '2Hz', correct: true },
          { id: 'd', label: '10Hz', correct: false },
        ],
        explanation:
          '固有周期0.5秒 = 固有周波数2Hz。地震波の2Hz成分と共振して、応答が最大になります。f = 1/T = 1/0.5 = 2Hz。',
      },
    },
    {
      id: 'alternate',
      title: '地球内部構造の探査',
      content:
        '反射法地震探査:\n\n人工的な振動源（ダイナマイト等）の反射波を\n多数の受振器で記録し、FFTで処理。\n\n手順:\n1. 振動データの前処理（フィルタリング）\n2. デコンボリューション（波源の影響を除去）\n3. 速度解析（各層の伝搬速度推定）\n4. マイグレーション（反射点の正確な位置特定）\n\n全ての段階でフーリエ変換が使われます。\n石油・天然ガスの探査に不可欠な技術です。',
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
      title: 'まとめ：地震波の解析',
      content:
        '地震波のフーリエ解析は防災と地球科学の基盤です。\n\n地震の規模と建物の固有周期を変えて応答スペクトルを確認しましょう。',
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
          { name: 'magnitude', min: 3, max: 9, step: 0.5, initial: 6 },
          { name: 'naturalPeriod', min: 0.1, max: 5, step: 0.1, initial: 1.0 },
        ],
      },
    },
  ],
};
