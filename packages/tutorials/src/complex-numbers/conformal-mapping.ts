import { Tutorial } from '../types';

export const conformalMappingTutorial: Tutorial = {
  id: 'conformal-mapping',
  title: '【実践】等角写像',
  description: '複素関数による角度を保存する変換の美しさ',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '形を変えても角度を守る',
      content:
        '等角写像（conformal mapping）とは、局所的な角度を保存する変換です。\n\n複素関数 w = f(z) が正則（微分可能）なら、f\'(z) ≠ 0 の点で等角写像になります。\n\n2つの曲線が交わる角度が、写像後も保存されます。',
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
      id: 'examples',
      title: '基本的な等角写像',
      content:
        '・w = z²: 角度を2倍にする\n・w = 1/z: 反転（円を円に写す）\n・w = e^z: 水平帯を扇形に写す\n・w = log z: 扇形を水平帯に写す\n・w = (z-a)/(1-āz): メビウス変換（円板を円板に写す）\n\n各写像が格子線をどう変形するか想像してみてください。',
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
      id: 'z-squared',
      title: 'w = z² の効果',
      content:
        'z = re^(iθ) に w = z² を適用すると:\n\nw = r²e^(i2θ)\n\n・距離は2乗される（r → r²）\n・角度は2倍される（θ → 2θ）\n\n正方形の格子は、放物線の格子に変形されます。\n\nしかし交わる角度は保存されます！',
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
      id: 'interactive',
      title: '等角写像を体験',
      content:
        'パラメータを変化させて、写像がどのように平面を変形するか観察しましょう。\n\n格子線が曲がっても、交差する角度（90°）が保存されることに注目してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: '変換パラメータ', min: 0, max: 2, step: 0.1, initial: 1 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '等角写像の性質を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '等角写像が「保存」するものは？',
        options: [
          { id: 'a', label: '線分の長さ', correct: false },
          { id: 'b', label: '面積', correct: false },
          { id: 'c', label: '局所的な角度', correct: true },
          { id: 'd', label: '直線の直線性', correct: false },
        ],
        explanation:
          '等角（conformal）写像は局所的な角度を保存します。長さや面積は変わりますし、直線は曲線になることもあります。',
      },
    },
    {
      id: 'applications',
      title: '等角写像の応用',
      content:
        '等角写像は多くの分野で活躍します:\n\n・流体力学: 翼周りの気流の計算\n・静電気学: 複雑な形状の電場計算\n・地図学: メルカトル図法は等角写像\n・熱伝導: 複雑な形状の温度分布\n\n複雑な領域の問題を、単純な領域に変換して解くことができます。',
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
      title: 'まとめ',
      content:
        '等角写像:\n\n・複素関数による角度保存変換\n・正則関数 f(z) で f\'(z)≠0 なら等角\n・格子が変形しても交差角は保存\n・流体力学、電磁気学、地図学に応用\n・複雑な問題を単純な領域に変換する強力なツール\n\n複素関数論の美しさと実用性を体現した概念です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
