import { Tutorial } from '../types';

export const fourierOverviewTutorial: Tutorial = {
  id: 'fourier-overview',
  title: 'フーリエ解析の全体像',
  description: 'フーリエ解析の歴史・理論・応用の全体像を俯瞰する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '200年の旅',
      content:
        '1807年、ジョゼフ・フーリエは大胆な主張をしました。\n\n「任意の関数は三角関数の和で表せる」\n\n当時の数学者たちは懐疑的でしたが、\nこのアイデアは200年以上を経て\n現代技術の根幹を支えています。\n\nフーリエ解析の全体像を俯瞰しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'fourier-overview-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '概念マップを探索',
      content:
        'フーリエ解析の各トピックの関係を探索しましょう。\n\nトピックを選んで、その概要と関連するトピックを確認できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'fourier-overview-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'topic', min: 0, max: 9, step: 1, initial: 0 },
          { name: 'depth', min: 0, max: 2, step: 1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '理論の体系',
      content:
        'フーリエ解析の理論体系:\n\n基礎:\n・三角関数の直交性\n・フーリエ級数（周期関数 → 離散スペクトル）\n・フーリエ変換（非周期関数 → 連続スペクトル）\n\n重要定理:\n・パーセバルの等式（エネルギー保存）\n・畳み込み定理（畳み込み ↔ 掛け算）\n・サンプリング定理（アナログ ↔ デジタル）\n・不確定性原理（分解能の限界）\n\n計算手法:\n・DFT/FFT → STFT → ウェーブレット',
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
      title: '応用の広がり',
      content:
        '音声・音楽: スペクトル分析、MP3、音声認識\n画像: JPEG、フィルタリング、エッジ検出\n医療: MRI、CT、超音波\n通信: AM/FM、OFDM、5G\n物理: 量子力学、光学、結晶学\n工学: 振動解析、制御、信号処理\n地球科学: 地震波、気象データ\n金融: 時系列の周期性分析\n\nフーリエ解析は「周波数で世界を見る」レンズです。',
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
      title: '総合クイズ',
      content: 'フーリエ解析の全体像を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'フーリエ解析の核心となる考え方は何？',
        options: [
          { id: 'a', label: '全ての関数を多項式で近似する', correct: false },
          { id: 'b', label: '全ての信号を周波数成分に分解する', correct: true },
          { id: 'c', label: '微分方程式を数値的に解く', correct: false },
          { id: 'd', label: 'ランダムな現象を統計的に分析する', correct: false },
        ],
        explanation:
          'フーリエ解析の核心は「任意の信号（関数）を異なる周波数の正弦波の重ね合わせとして表現する」ことです。この周波数分解により、信号の構造が明らかになり、フィルタリング、圧縮、解析が可能になります。',
      },
    },
    {
      id: 'alternate',
      title: 'フーリエ解析の未来',
      content:
        'フーリエ解析の発展は続いています。\n\n現在の研究トピック:\n・スパースフーリエ変換: ビッグデータの高速処理\n・圧縮センシング: 少ないサンプルからの信号復元\n・非一様FFT: 不規則なサンプリングへの対応\n・量子フーリエ変換: 量子コンピュータの基本ゲート\n\nショアのアルゴリズム（素因数分解）は\n量子フーリエ変換を核としています。\n\n量子コンピュータの時代にもフーリエ変換は中心的役割を果たします。',
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
      title: 'まとめ：フーリエ解析の全体像',
      content:
        'フーリエ解析は「周波数で世界を見る」普遍的なツールです。\n\n各トピックの関係を探索して、全体像を把握しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'fourier-overview-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'category', min: 0, max: 3, step: 1, initial: 0 },
          { name: 'detail', min: 0, max: 2, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
