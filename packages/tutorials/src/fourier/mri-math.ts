import { Tutorial } from '../types';

export const mriMathTutorial: Tutorial = {
  id: 'mri-math',
  title: 'MRIの仕組み',
  description: 'MRI画像がフーリエ変換によって生成される仕組みを学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '体の中を数学で見る',
      content:
        'MRI（磁気共鳴画像法）は体を切らずに内部を画像化します。\n\nMRIが直接測定するのは画像ではなく、\nk空間（周波数空間）のデータです。\n\nk空間のデータを2次元逆フーリエ変換すると画像が得られます。\n\nMRIはフーリエ変換そのものの応用です。',
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
      title: 'k空間を探索',
      content:
        'k空間のデータ範囲を変えて、再構成画像の品質がどう変わるか確認しましょう。\n\nk空間の中心は低周波（コントラスト）、周辺は高周波（詳細）です。',
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
          { name: 'kRadius', min: 1, max: 50, step: 1, initial: 25 },
          { name: 'showKSpace', min: 0, max: 1, step: 1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'MRIの基本原理',
      content:
        'MRIの手順:\n\n1. 強磁場中に体を置く → 水素原子核が整列\n2. RFパルスで核磁気共鳴を誘起\n3. 傾斜磁場で空間的に位相・周波数を符号化\n4. 信号を受信 → k空間のデータ\n5. 2D逆FFTで画像を再構成\n\n傾斜磁場が空間位置を周波数に変換する役割を持ちます。\n位置 x の信号周波数: f = γ·G·x\n（γ: 磁気回転比、G: 傾斜磁場強度）',
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
      title: 'k空間と画像の関係',
      content:
        'k空間のデータ S(kx, ky) と画像 ρ(x,y) の関係:\n\nS(kx, ky) = ∫∫ ρ(x,y) e^(-i2π(kx·x + ky·y)) dx dy\n\nこれはまさに2次元フーリエ変換！\n\nk空間の中心（低周波）: 画像のコントラスト\nk空間の周辺（高周波）: 画像の細部・エッジ\n\nk空間の中心のみ → ぼやけた画像\nk空間全体 → 鮮明な画像',
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
      content: 'MRIの仕組みについて考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'MRIのk空間の中心部のデータだけを使って画像を再構成するとどうなる？',
        options: [
          { id: 'a', label: '高解像度だがコントラストが低い', correct: false },
          { id: 'b', label: '低解像度だがコントラストは保たれる', correct: true },
          { id: 'c', label: '何も映らない', correct: false },
          { id: 'd', label: 'エッジだけが見える', correct: false },
        ],
        explanation:
          'k空間の中心は低周波成分（コントラスト情報）を含むため、画像の大まかな構造は見えますが、高周波成分（細部）が欠けるため解像度が低くなります。',
      },
    },
    {
      id: 'alternate',
      title: '高速MRIとフーリエの活用',
      content:
        'MRIの課題は撮影時間。k空間を全て埋めるには時間がかかります。\n\n高速化技術:\n1. パラレルイメージング（GRAPPA, SENSE）:\n   複数コイルでk空間を部分的に取得\n\n2. 圧縮センシング:\n   ランダムにk空間をサンプリングし、\n   スパース性を利用して画像を復元\n\n3. EPI（Echo Planar Imaging）:\n   1回の励起でk空間全体を走査\n\n全てフーリエ変換の性質を巧みに利用しています。',
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
      title: 'まとめ：MRIの仕組み',
      content:
        'MRIはk空間のデータを2次元逆フーリエ変換して画像を生成します。\n\nk空間のデータ範囲を調整して画像品質の変化を確認しましょう。',
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
          { name: 'kRadius', min: 1, max: 50, step: 1, initial: 25 },
          { name: 'samplingPattern', min: 0, max: 2, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
