import { Tutorial } from '../types';

export const voiceSpectrumTutorial: Tutorial = {
  id: 'voice-spectrum',
  title: '音声のスペクトル分析',
  description: '人の声の周波数特性をフーリエ変換で分析する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '声の指紋',
      content:
        '人の声は一人ひとり異なる周波数パターンを持っています。\n\n同じ「あ」でも、声の高さ（基本周波数）と\nフォルマント（共鳴周波数）の組み合わせが個人差を生みます。\n\nフーリエ変換でこの「声の指紋」を見てみましょう。',
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
      title: '母音のスペクトルを比較',
      content:
        '基本周波数とフォルマント周波数を変えて、母音のスペクトルの違いを確認しましょう。',
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
          { name: 'fundamentalFreq', min: 80, max: 300, step: 10, initial: 120 },
          { name: 'formant1', min: 200, max: 900, step: 50, initial: 500 },
          { name: 'formant2', min: 800, max: 2500, step: 50, initial: 1500 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '声の構造',
      content:
        '声は声帯の振動（音源）と声道の共鳴（フィルタ）で生成されます。\n\n音源: 声帯が生む基本周波数 f₀ とその倍音\n男性: f₀ ≈ 100-150Hz\n女性: f₀ ≈ 200-300Hz\n\nフィルタ: 口腔・鼻腔の形状による共鳴\nフォルマント F1, F2, F3 の位置が母音を決定\n\n「あ」: F1≈800Hz, F2≈1200Hz\n「い」: F1≈300Hz, F2≈2300Hz',
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
      title: 'スペクトル包絡とケプストラム',
      content:
        'スペクトルの概形（包絡）がフォルマント情報を含みます。\n\nスペクトル包絡の抽出法:\n1. 対数スペクトルのフーリエ変換 → ケプストラム\n2. 低次のケプストラム係数 → スペクトル包絡\n3. 高次のケプストラム係数 → 基本周波数情報\n\nケプストラム = cepstrum（spectrumの前半を逆綴り）\n\n音声認識ではMFCC（メル周波数ケプストラム係数）が特徴量として広く使われます。',
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
      content: '音声のスペクトルについて考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '母音「あ」と「い」を区別するのに重要な周波数特性は？',
        options: [
          { id: 'a', label: '基本周波数の違い', correct: false },
          { id: 'b', label: 'フォルマント周波数の違い', correct: true },
          { id: 'c', label: '倍音の数', correct: false },
          { id: 'd', label: '音の大きさ', correct: false },
        ],
        explanation:
          '母音の区別はフォルマント（声道の共鳴周波数）の位置で決まります。基本周波数は声の高さ（個人差）に対応し、母音の種類とは独立です。',
      },
    },
    {
      id: 'alternate',
      title: '音声認識への応用',
      content:
        '音声認識のパイプライン:\n\n1. プリエンファシス: 高周波を強調\n2. フレーム分割: 20-30msの窓で切り出し\n3. FFT: 各フレームのスペクトル計算\n4. メルフィルタバンク: 人間の聴覚特性で重み付け\n5. MFCC: ケプストラム係数の抽出\n6. 認識モデル: ディープラーニング等\n\n全ての段階でフーリエ変換が活躍しています。',
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
      title: 'まとめ：音声のスペクトル分析',
      content:
        '声のスペクトルは基本周波数とフォルマントで特徴づけられます。\n\nパラメータを変えて音声スペクトルの変化を確認しましょう。',
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
          { name: 'vowel', min: 0, max: 4, step: 1, initial: 0 },
          { name: 'pitch', min: 80, max: 300, step: 10, initial: 150 },
        ],
      },
    },
  ],
};
