import { Tutorial } from '../types';

export const entropyTutorial: Tutorial = {
  id: 'entropy',
  title: 'エントロピーと対数',
  description: '情報量やエントロピーに対数が使われる理由を理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '驚きを数値化する',
      content:
        'コイン投げの結果は「表か裏」で1ビット。サイコロの結果は log₂(6) ≈ 2.58ビット。可能性が多いほど「驚き」が大きく、情報量も増えます。対数はこの驚きを測る道具です。',
      customScene: 'entropy-animation',
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
      title: '触ってみよう',
      content:
        '選択肢の数を変えて、情報量（ビット数）がどう変わるか観察してください。',
      customScene: 'entropy-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'なぜ対数なのか',
      content:
        '2つの独立な事象を同時に観測する場合、全パターン数はかけ算（N₁ × N₂）。情報量は足し算にしたい。かけ算を足し算に変えるのは対数の得意技です。log(N₁ × N₂) = log(N₁) + log(N₂)。',
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
      title: 'シャノンのエントロピー',
      content:
        'H = -Σ p_i × log₂(p_i)。各事象の確率 p_i と情報量 -log₂(p_i) の加重平均がエントロピー。すべて等確率のとき最大になります。',
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
      content:
        '8つの等確率な選択肢がある場合、1回の結果の情報量は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '8つの等確率な選択肢の情報量は何ビット？',
        options: [
          { id: 'a', label: '2ビット', correct: false },
          { id: 'b', label: '3ビット', correct: true },
          { id: 'c', label: '4ビット', correct: false },
          { id: 'd', label: '8ビット', correct: false },
        ],
        explanation:
          'log₂(8) = 3 なので3ビット。3回のYes/No質問で8択を特定できます。',
      },
    },
    {
      id: 'alternate',
      title: '熱力学のエントロピー',
      content:
        'ボルツマンのエントロピー: S = k_B × ln(W)\n\nW は微視的状態の数。状態が多いほど（乱雑さが大きいほど）エントロピーが大きい。ここでも対数が「状態数を足し算可能な量」に変換しています。',
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
        'エントロピーに対数が使われる理由は「かけ算を足し算に変える」から。情報量もエントロピーも対数で測ることで加法性を持ちます。\n\n確率分布を変えてエントロピーの変化を確認してください。',
      customScene: 'entropy-summary',
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
