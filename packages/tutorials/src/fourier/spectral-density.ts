import { Tutorial } from '../types';

export const spectralDensityTutorial: Tutorial = {
  id: 'spectral-density',
  title: 'スペクトル密度',
  description: '信号のパワーが周波数にどう分布するかを理解する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '周波数ごとのエネルギー',
      content:
        '音楽を聴くとき、低音・中音・高音のバランスが音の印象を決めます。\n\nスペクトル密度は「どの周波数にどれだけエネルギーがあるか」を示す関数です。\n\nイコライザーの棒グラフの連続版と考えてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spectral-density-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'スペクトルを観察',
      content:
        '信号の周波数成分を変えて、パワースペクトル密度がどう変化するか確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spectral-density-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'freq', min: 1, max: 20, step: 1, initial: 5 },
          { name: 'noise', min: 0, max: 1, step: 0.05, initial: 0.1 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'パワースペクトル密度',
      content:
        'パワースペクトル密度（PSD）:\nS(ω) = |F(ω)|²\n\nF(ω) はフーリエ変換の結果（複素数）。\nその絶対値の二乗がパワースペクトル密度です。\n\n位相情報は捨てて、各周波数のエネルギー量だけに注目します。\n\n全周波数の積分がパーセバルの等式で信号の全エネルギーに等しくなります。',
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
      title: 'ホワイトノイズとピンクノイズ',
      content:
        'ホワイトノイズ: S(ω) = 定数\n全ての周波数に均等にエネルギーが分布。「シャー」という音。\n\nピンクノイズ: S(ω) ∝ 1/ω\n低周波ほどエネルギーが大きい。「ザー」という音。\n自然界に多い（滝の音、心拍のゆらぎ）。\n\nブラウンノイズ: S(ω) ∝ 1/ω²\nさらに低周波寄り。「ゴー」という深い音。',
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
      content: 'スペクトル密度について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ホワイトノイズのパワースペクトル密度の特徴は？',
        options: [
          { id: 'a', label: '低周波で大きい', correct: false },
          { id: 'b', label: '高周波で大きい', correct: false },
          { id: 'c', label: '全周波数で一定', correct: true },
          { id: 'd', label: '特定の周波数にピークがある', correct: false },
        ],
        explanation:
          'ホワイトノイズは全ての周波数で均等なパワーを持ちます。白色光が全ての可視光周波数を含むのと同じ理由でこの名前がついています。',
      },
    },
    {
      id: 'alternate',
      title: 'ウィーナー＝ヒンチンの定理',
      content:
        'ウィーナー＝ヒンチンの定理:\n\nパワースペクトル密度は自己相関関数のフーリエ変換に等しい。\n\nS(ω) = F{R(τ)}\n\nR(τ) = lim[T→∞] (1/2T) ∫₋ᵀᵀ f(t)f(t+τ) dt\n\nこれにより、統計的な信号解析とフーリエ解析が結びつきます。\n確率的な信号にもスペクトル解析を適用できるのです。',
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
      title: 'まとめ：スペクトル密度',
      content:
        'スペクトル密度は信号のエネルギーの周波数分布を示します。\n\n異なる種類のノイズのスペクトルを比較しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spectral-density-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'noiseType', min: 0, max: 2, step: 1, initial: 0 },
          { name: 'bandwidth', min: 1, max: 100, step: 1, initial: 50 },
        ],
      },
    },
  ],
};
