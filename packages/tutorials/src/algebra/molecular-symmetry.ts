import { Tutorial } from '../types';

export const molecularSymmetryTutorial: Tutorial = {
  id: 'molecular-symmetry',
  title: '【実践】分子の対称性',
  description: '分子の対称性を群論で分析し、化学的性質との関係を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '分子の形と群論',
      content:
        '水分子 H₂O はV字型、メタン CH₄ は正四面体型。\n\n分子の形の「対称性」は、その化学的性質を決定します。\n\n赤外線吸収、ラマン散乱、分子軌道 ── これらはすべて対称性で予測できます。\n\nそのツールが「分子の点群」です。',
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
      id: 'symmetry-elements',
      title: '分子の対称要素',
      content:
        '分子に現れる対称操作:\n\nE: 恒等操作\nCₙ: n回回転軸\nσ: 鏡映面（σₕ: 水平, σᵥ: 垂直, σd: 二面角）\ni: 反転中心\nSₙ: 回映軸\n\nH₂O: E, C₂, σᵥ, σᵥ\' → 点群 C₂ᵥ\nNH₃: E, 2C₃, 3σᵥ → 点群 C₃ᵥ\nCH₄: E, 8C₃, 3C₂, 6S₄, 6σd → 点群 Td',
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
      id: 'character-table',
      title: '指標表',
      content:
        '群の表現理論の核心が「指標表」です。\n\n各対称操作が行列でどう表されるかを分析します。\n\n指標（キャラクター）= 表現行列のトレース（対角和）\n\n指標表を使って:\n  分子軌道の種類を分類\n  振動モードの対称性を判定\n  選択則（どの遷移が許されるか）を予測\n\n群論が化学の予測ツールになるのです。',
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
      id: 'vibrations',
      title: '振動モードと赤外吸収',
      content:
        '分子の振動は対称性で分類されます。\n\nH₂O（C₂ᵥ）の振動モード:\n  対称伸縮 ν₁: A₁ 対称\n  変角振動 ν₂: A₁ 対称\n  逆対称伸縮 ν₃: B₂ 対称\n\n選択則: 双極子モーメントが変化する振動のみ赤外活性\n\nこの判定は指標表から機械的に行えます。\n群論を使えば、実験前に赤外スペクトルのピーク数を予測できます。',
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
      id: 'molecular-orbitals',
      title: '分子軌道と対称性',
      content:
        '分子軌道も対称性で分類されます。\n\n対称性が同じ原子軌道同士のみが混ざって分子軌道を作ります。\n\nベンゼンの π 電子:\n  D₆ₕ の対称性を持つ6つの分子軌道\n  群論により、エネルギー準位の縮退が予測できる\n\n対称性が高い分子ほど、縮退した軌道が多くなります。\n\nこれが分子の色や磁性を決定します。',
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
      id: 'quiz',
      title: '確認クイズ',
      content: '分子の対称性について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '水分子 H₂O の点群はどれですか？',
        options: [
          { id: 'a', label: 'C₂ᵥ', correct: true },
          { id: 'b', label: 'C₃ᵥ', correct: false },
          { id: 'c', label: 'D₂ₕ', correct: false },
          { id: 'd', label: 'Td', correct: false },
        ],
        explanation:
          '正解は C₂ᵥ です。H₂O は1つの C₂ 軸（O原子を通る）と2つの鏡映面（σᵥ と σᵥ\'）を持ち、C₂ᵥ 点群に属します。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '分子の対称性と群論:\n\n1. 分子の対称操作が点群を構成\n2. 指標表で振動モード・分子軌道を分類\n3. 選択則: 許される遷移を予測\n4. 赤外・ラマンスペクトルの解析\n5. 分子軌道のエネルギー準位を予測\n\n群論は分子の性質を系統的に理解する強力なツールです。',
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
