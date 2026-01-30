import { Tutorial } from '../types';

export const phScaleTutorial: Tutorial = {
  id: 'ph-scale',
  title: '【実践】pH',
  description: '水溶液の酸性度を指数関数と対数で理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: 'レモンと石鹸水の違い',
      content:
        'レモン汁（pH 2）と石鹸水（pH 10）。pHの差はたった8ですが、水素イオン濃度の差は10⁸ = 1億倍！pHスケールは指数的な差を対数で圧縮しています。そのしくみをアニメーションで見てみましょう。',
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
      title: 'pHと水素イオン濃度を確認しよう',
      content:
        'pHスライダーを動かして、対応する水素イオン濃度[H⁺]がどう変わるか確認しましょう。pHが1変わると濃度は10倍変わります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'pHの定義',
      content:
        'pH = -log₁₀[H⁺]\n\n逆に：[H⁺] = 10⁻ᵖᴴ\n\n例：\npH 1: [H⁺] = 10⁻¹ = 0.1 mol/L\npH 7: [H⁺] = 10⁻⁷ = 0.0000001 mol/L\npH 14: [H⁺] = 10⁻¹⁴ mol/L\n\npHが1上がるごとに[H⁺]は1/10になります。',
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
      title: '身近な液体のpH',
      content:
        '• 胃酸：pH 1〜2（強酸性）\n• レモン汁：pH 2\n• コーラ：pH 2.5\n• コーヒー：pH 5\n• 純水：pH 7（中性）\n• 血液：pH 7.4\n• 海水：pH 8.1\n• 石鹸水：pH 10\n• 漂白剤：pH 12〜13\n\n生命活動はpH 7付近の狭い範囲で維持されています。',
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
      title: '計算してみよう',
      content: 'pH 3の溶液をpH 5にするには、水で何倍に薄める必要がある？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'pH 3をpH 5にするための希釈倍率は？',
        options: [
          { id: 'a', label: '2倍', correct: false },
          { id: 'b', label: '10倍', correct: false },
          { id: 'c', label: '100倍', correct: true },
          { id: 'd', label: '1000倍', correct: false },
        ],
        explanation:
          'pHが2上がる = [H⁺]が1/100になる = 10² = 100倍に希釈。pH差が指数の差に対応するのが対数スケールの特徴です。',
      },
    },
    {
      id: 'alternate',
      title: '海洋酸性化',
      content:
        '大気中のCO₂が増えると海水に溶け込み、海のpHが下がります。産業革命前のpH 8.2から現在のpH 8.1へ。たった0.1の変化ですが、[H⁺]は約26%増加。サンゴや貝類に深刻な影響を与えます。小さなpH変化が大きな影響を持つことを指数的スケールで理解できます。',
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
        'pH：\n• pH = -log₁₀[H⁺]\n• pH 1変化で濃度10倍\n• pH 0〜14のスケールに10¹⁴倍の範囲を圧縮\n• 生命はpH 7付近で機能\n• 海洋酸性化のように小さな変化が大きな影響\n\n対数スケールの重要な実用例です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
