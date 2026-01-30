import { Tutorial } from '../types';

export const fourierBasicsSummaryTutorial: Tutorial = {
  id: 'fourier-basics-summary',
  title: 'フーリエ解析の基本まとめ',
  description: 'フーリエ級数・変換・DFTの基本概念を総復習する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'フーリエ解析の全体像',
      content:
        'フーリエ級数、フーリエ変換、DFT、FFT…\n多くの概念が登場しました。\n\nそれぞれがどう関係しているのか？\nどんな場面で使うのか？\n\nここで全体を整理しましょう。',
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
      title: '各手法を切り替えて比較',
      content:
        'フーリエ級数、フーリエ変換、DFTを切り替えて、同じ信号に対する結果の違いを比較しましょう。',
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
          { name: 'method', min: 0, max: 2, step: 1, initial: 0 },
          { name: 'terms', min: 1, max: 30, step: 1, initial: 10 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '4つのフーリエ変換',
      content:
        '          連続    離散\n周期   フーリエ  離散フーリエ\n       級数(FS)  変換(DFT)\n\n非周期 フーリエ  離散時間\n       変換(FT)  フーリエ変換(DTFT)\n\nFS: 周期 + 連続 → 離散スペクトル\nFT: 非周期 + 連続 → 連続スペクトル\nDTFT: 非周期 + 離散 → 連続・周期スペクトル\nDFT: 周期 + 離散 → 離散・周期スペクトル',
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
      title: '重要な定理と性質',
      content:
        '基本定理:\n1. パーセバルの等式: エネルギー保存\n2. 畳み込み定理: 畳み込み ↔ 掛け算\n3. サンプリング定理: fs ≥ 2fmax\n4. 不確定性原理: Δt·Δω ≥ 1/2\n\n重要性質:\n・線形性、時間シフト、スケーリング\n・微分 → iω倍\n・実関数のスペクトルの共役対称性',
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
      title: '総復習クイズ',
      content: 'フーリエ解析の基本概念を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'コンピュータで実際に計算できるフーリエ変換はどれ？',
        options: [
          { id: 'a', label: 'フーリエ級数（無限和）', correct: false },
          { id: 'b', label: '連続フーリエ変換（積分）', correct: false },
          { id: 'c', label: '離散フーリエ変換（有限和）', correct: true },
          { id: 'd', label: 'DTFT（無限和）', correct: false },
        ],
        explanation:
          'コンピュータで扱えるのは有限個の離散データのみです。DFTは有限和なのでそのまま計算可能で、FFTで効率的に実行できます。他は近似計算になります。',
      },
    },
    {
      id: 'alternate',
      title: '応用分野のマップ',
      content:
        '音声処理: STFT, スペクトログラム, FFT\n画像処理: 2D-FFT, DCT, ウェーブレット\n通信: 変調/復調, OFDM, フィルタ設計\n制御: 周波数応答, ボード線図\n物理: 量子力学, 光学, 結晶構造\n医療: MRI（k空間→画像のフーリエ変換）\nデータ分析: スペクトル分析, 周期性検出\n\nフーリエ解析は現代技術の基盤です。',
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
      title: 'まとめ：フーリエ解析の基本',
      content:
        'フーリエ解析の基本概念を整理しました。\n\n各手法の結果を比較して理解を確かめましょう。',
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
          { name: 'method', min: 0, max: 3, step: 1, initial: 0 },
          { name: 'signalType', min: 0, max: 2, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
