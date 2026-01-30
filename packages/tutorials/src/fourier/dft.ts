import { Tutorial } from '../types';

export const dftTutorial: Tutorial = {
  id: 'dft',
  title: '離散フーリエ変換',
  description: 'コンピュータで扱える離散フーリエ変換の仕組みを学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'コンピュータとフーリエ',
      content:
        'コンピュータは連続信号を直接扱えません。\n離散的なサンプル点でのみ値を持ちます。\n\n離散フーリエ変換（DFT）は\nN個の離散値 → N個の周波数成分\nに変換する計算です。',
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
      title: 'DFTを視覚化',
      content:
        'サンプル数Nを変えて、DFTの結果がどう変わるか確認しましょう。\n\nNが大きいほど周波数分解能が上がります。',
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
          { name: 'N', min: 4, max: 64, step: 4, initial: 16 },
          { name: 'signalFreq', min: 1, max: 10, step: 1, initial: 3 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'DFTの定義',
      content:
        'N個のデータ x[0], x[1], …, x[N-1] に対して:\n\nX[k] = Σ[n=0→N-1] x[n] · e^(-i2πkn/N)\n\nk = 0, 1, …, N-1\n\n逆DFT:\nx[n] = (1/N) Σ[k=0→N-1] X[k] · e^(i2πkn/N)\n\nWₙ = e^(-i2π/N) とおくと:\nX[k] = Σ x[n] · Wₙ^(kn)\n\nWₙ はN乗根（回転因子）です。',
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
      title: 'DFT行列の構造',
      content:
        'DFTは行列の掛け算で表せます:\n\nX = F · x\n\nF は N×N のDFT行列:\nF[k,n] = Wₙ^(kn) = e^(-i2πkn/N)\n\nN=4の場合（w = e^(-iπ/2) = -i）:\n⎡1  1  1  1⎤\n⎢1  w  w² w³⎥\n⎢1  w² w⁴ w⁶⎥\n⎣1  w³ w⁶ w⁹⎦\n\nこの行列はユニタリ行列（直交行列の複素版）です。',
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
      content: 'DFTの計算量について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'N点DFTの直接計算に必要な複素乗算の回数は？',
        options: [
          { id: 'a', label: 'O(N)', correct: false },
          { id: 'b', label: 'O(N log N)', correct: false },
          { id: 'c', label: 'O(N²)', correct: true },
          { id: 'd', label: 'O(N³)', correct: false },
        ],
        explanation:
          'DFTの定義式では各X[k]の計算にN回の掛け算が必要で、kがN通りあるため合計N²回です。FFTはこれをO(N log N)に削減します。',
      },
    },
    {
      id: 'alternate',
      title: '周波数分解能と零詰め',
      content:
        'DFTの周波数分解能: Δf = fs/N\n\nfsはサンプリング周波数、Nはデータ点数。\n\n分解能を上げるには:\n1. Nを大きくする（データを長く取る）\n2. 零詰め（zero-padding）: データの後ろにゼロを追加\n\n注意: 零詰めは見かけの分解能を上げますが、\n本当の周波数分離能は元のデータ長で決まります。\n補間効果で滑らかなスペクトルが得られます。',
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
      title: 'まとめ：離散フーリエ変換',
      content:
        'DFTは有限個の離散データを周波数成分に分解します。\n\nデータ点数と信号周波数を変えてDFTの結果を観察しましょう。',
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
          { name: 'N', min: 8, max: 128, step: 8, initial: 32 },
          { name: 'freq', min: 1, max: 15, step: 1, initial: 5 },
        ],
      },
    },
  ],
};
