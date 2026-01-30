import { Tutorial } from '../types';

export const fourier2dTutorial: Tutorial = {
  id: 'fourier-2d',
  title: '2次元フーリエ変換',
  description: '画像処理の基礎となる2次元フーリエ変換を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '画像を周波数で見る',
      content:
        '画像は2次元信号です。\n\n2次元フーリエ変換を使うと、画像を空間周波数成分に分解できます。\n\n低周波: なだらかな変化（背景）\n高周波: 急激な変化（エッジ、細部）\n\nこれが画像圧縮やフィルタリングの基礎です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'fourier-2d-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '空間周波数を操作',
      content:
        '2次元正弦波のx方向・y方向の周波数を変えて、パターンの変化を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'fourier-2d-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'freqX', min: 0, max: 10, step: 1, initial: 3 },
          { name: 'freqY', min: 0, max: 10, step: 1, initial: 2 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '2次元フーリエ変換の定義',
      content:
        'F(u, v) = ∫∫ f(x, y) e^(-i2π(ux+vy)) dx dy\n\n逆変換:\nf(x, y) = ∫∫ F(u, v) e^(i2π(ux+vy)) du dv\n\nu: x方向の空間周波数\nv: y方向の空間周波数\n\n1次元フーリエ変換の自然な拡張です。\nx方向に変換 → y方向に変換と逐次的に計算可能。',
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
      title: '画像のフーリエ変換',
      content:
        '画像の2D-DFT:\n\nF[k,l] = ΣₘΣₙ f[m,n] · e^(-i2π(km/M + ln/N))\n\nスペクトルの見方:\n・中心 (0,0): DC成分（画像の平均輝度）\n・中心からの距離: 周波数の大きさ\n・角度: エッジの方向に垂直\n\n例: 横縞 → 縦方向にスペクトルが集中\n　　斜め縞 → 垂直方向にスペクトルが集中',
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
      content: '2次元フーリエ変換について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '画像からエッジ（輪郭）を検出するには、2Dフーリエ変換のどの成分を使う？',
        options: [
          { id: 'a', label: '低周波成分のみ', correct: false },
          { id: 'b', label: '高周波成分のみ', correct: true },
          { id: 'c', label: 'DC成分のみ', correct: false },
          { id: 'd', label: '全成分を均等に', correct: false },
        ],
        explanation:
          'エッジは輝度の急激な変化なので高周波成分に対応します。高周波成分だけを残す（ハイパスフィルタ）ことでエッジを検出できます。',
      },
    },
    {
      id: 'alternate',
      title: 'DCT（離散コサイン変換）',
      content:
        'JPEG画像圧縮にはDFTではなくDCT（離散コサイン変換）が使われます。\n\nDCTの利点:\n1. 実数のみで計算できる（虚部がない）\n2. エネルギー集中性が高い（少ない係数で表現可能）\n3. ブロック境界での不連続が起きにくい\n\nJPEGは8×8ブロックごとにDCTを適用し、\n人間の目に見えにくい高周波成分を削減します。',
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
      title: 'まとめ：2次元フーリエ変換',
      content:
        '画像を空間周波数成分に分解することで、フィルタリングや圧縮が可能になります。\n\n空間周波数を調整して2次元パターンを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'fourier-2d-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'freqX', min: 0, max: 10, step: 1, initial: 3 },
          { name: 'freqY', min: 0, max: 10, step: 1, initial: 2 },
          { name: 'cutoff', min: 1, max: 15, step: 1, initial: 10 },
        ],
      },
    },
  ],
};
