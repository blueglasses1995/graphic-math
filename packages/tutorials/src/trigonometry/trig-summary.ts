import { Tutorial } from '../types';

export const trigSummaryTutorial: Tutorial = {
  id: 'trig-summary',
  title: '三角関数のまとめ',
  description: '三角関数の全体像を振り返り知識を整理する',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '旅の振り返り',
      content:
        '単位円から始まり、sin/cosの波、公式、そして応用まで。三角関数の世界を旅してきました。\n\nここでは学んできたことを整理して、全体像を把握しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#4fc3f7', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'trig-summary-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '全パラメータを操作',
      content:
        'y = A·sin(Bθ + φ) + D の全パラメータを自由に変えてみましょう。\n\nA: 振幅（高さ）\nB: 周波数（速さ）\nφ: 位相（ずれ）\nD: 上下シフト\n\nこの4つで任意のsin波を表現できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'trig-summary-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'A', min: -3, max: 3, step: 0.1, initial: 1 },
          { name: 'B', min: 0.5, max: 5, step: 0.1, initial: 1 },
          { name: 'phi', min: 0, max: 6.28, step: 0.1, initial: 0 },
          { name: 'D', min: -2, max: 2, step: 0.1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '基礎のまとめ',
      content:
        '単位円と三角関数:\n・cosθ = x座標、sinθ = y座標、tanθ = y/x\n・sin²θ + cos²θ = 1（ピタゴラスの恒等式）\n・ラジアン: 1周 = 2π\n\n特殊角:\n・30° → sin = 1/2, cos = √3/2\n・45° → sin = cos = √2/2\n・60° → sin = √3/2, cos = 1/2\n\n対称性:\n・sin(-θ) = -sinθ（奇関数）\n・cos(-θ) = cosθ（偶関数）',
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
      title: '公式と応用のまとめ',
      content:
        '加法定理:\nsin(α±β) = sinαcosβ ± cosαsinβ\ncos(α±β) = cosαcosβ ∓ sinαsinβ\n\n倍角:\nsin(2θ) = 2sinθcosθ\ncos(2θ) = cos²θ − sin²θ\n\n波のパラメータ:\ny = A sin(Bθ + φ) + D\n・A = 振幅、B = 周波数\n・φ = 位相、D = 上下シフト\n・周期 T = 2π/B',
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
      title: '総合問題',
      content:
        '学んだ知識を総合して答えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = 2sin(3θ + π/2) の振幅と周期は？',
        options: [
          { id: 'a', label: '振幅 2、周期 2π/3', correct: true },
          { id: 'b', label: '振幅 3、周期 2π/2', correct: false },
          { id: 'c', label: '振幅 2、周期 3π', correct: false },
          { id: 'd', label: '振幅 2、周期 2π', correct: false },
        ],
        explanation:
          'y = A sin(Bθ + φ) で A = 2, B = 3。\n\n振幅 = |A| = 2\n周期 = 2π/B = 2π/3\n\nφ = π/2 は位相シフト（横のずれ）で、振幅・周期には影響しません。',
      },
    },
    {
      id: 'alternate',
      title: '三角関数はどこにいる？',
      content:
        '三角関数は数学だけでなく、あらゆる場所に現れます:\n\n・音楽: 音波の基本波形\n・電気: 交流の電圧・電流\n・光: 電磁波の振動\n・建築: 屋根の角度計算\n・GPS: 三角測量で位置特定\n・医療: CTスキャン（フーリエ変換）\n・ゲーム: 回転・振動の表現\n\n三角関数は「繰り返し」と「回転」の言語です。',
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
      title: '三角関数マスターへ',
      content:
        '三角関数の本質:\n\n1. 「円の影」= sinとcos\n2. 「傾き」= tan\n3. 「波」= 振幅 × sin(周波数 × θ + 位相)\n4. すべての公式は「回転」から導ける\n\nここから先は、フーリエ変換、微分方程式、信号処理など、より深い世界が広がっています。三角関数はそのすべての土台です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'trig-summary-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
