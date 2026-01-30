import { Tutorial } from '../types';

export const fftTutorial: Tutorial = {
  id: 'fft',
  title: '高速フーリエ変換',
  description: 'FFTのアルゴリズムと計算量削減の仕組みを理解する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '20世紀最重要アルゴリズム',
      content:
        'FFT（高速フーリエ変換）は20世紀で最も重要なアルゴリズムの一つです。\n\nDFTのO(N²)をO(N log N)に削減。\n\nN = 1,048,576 の場合:\nDFT: 約1兆回の演算\nFFT: 約2000万回の演算\n\n50,000倍の高速化がデジタル信号処理を実現可能にしました。',
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
      title: '分割統治を体験',
      content:
        'FFTの分割統治法を視覚的に追ってみましょう。\n\nデータ点数Nを2の冪に設定して、再帰的な分割を確認してください。',
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
          { name: 'logN', min: 2, max: 8, step: 1, initial: 3 },
          { name: 'stage', min: 0, max: 8, step: 1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'クーリー・テューキーのアルゴリズム',
      content:
        'N点DFTを偶数番目と奇数番目に分割:\n\nX[k] = Σ[m=0→N/2-1] x[2m]·Wₙ^(2mk) + Wₙ^k · Σ[m=0→N/2-1] x[2m+1]·Wₙ^(2mk)\n\n= E[k] + Wₙ^k · O[k]\n\nE[k]: 偶数番目のN/2点DFT\nO[k]: 奇数番目のN/2点DFT\n\nN点DFT → 2つのN/2点DFT + N回の演算\nT(N) = 2T(N/2) + O(N) → T(N) = O(N log N)',
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
      title: 'バタフライ演算',
      content:
        'FFTの基本演算単位「バタフライ」:\n\na\' = a + Wₙ^k · b\nb\' = a - Wₙ^k · b\n\n2つの入力から2つの出力を計算する。\n名前の由来は信号の流れ図が蝶の形に見えるから。\n\n8点FFTの場合:\nステージ1: 4つのバタフライ（2点DFT）\nステージ2: 4つのバタフライ（4点DFT合成）\nステージ3: 4つのバタフライ（8点DFT合成）\n\n合計 (N/2)·log₂N = 12回のバタフライ演算。',
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
      content: 'FFTについて考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1024点FFTに必要なバタフライ演算の回数は？',
        options: [
          { id: 'a', label: '1024回', correct: false },
          { id: 'b', label: '5120回', correct: true },
          { id: 'c', label: '10240回', correct: false },
          { id: 'd', label: '1048576回', correct: false },
        ],
        explanation:
          'バタフライ演算の回数は (N/2)·log₂N = (1024/2)·10 = 5120回です。直接DFTのN² = 1,048,576回と比較すると約200倍高速です。',
      },
    },
    {
      id: 'alternate',
      title: 'FFTの歴史と変種',
      content:
        '1965年: クーリーとテューキーがFFTを発表。\n（実はガウスが1805年に同様のアルゴリズムを発見していた）\n\n変種:\n・基数2 FFT: N = 2^m のみ\n・基数4 FFT: 乗算がさらに少ない\n・混合基数 FFT: 任意の N に対応\n・素数長 FFT: ラダーのアルゴリズム\n\n現代のCPUにはFFT専用命令が搭載されています。',
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
      title: 'まとめ：高速フーリエ変換',
      content:
        'FFTは分割統治法によりDFTをO(N log N)で計算します。\n\nバタフライ演算の各ステージを操作して確認しましょう。',
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
          { name: 'logN', min: 2, max: 6, step: 1, initial: 3 },
          { name: 'stage', min: 1, max: 6, step: 1, initial: 1 },
        ],
      },
    },
  ],
};
