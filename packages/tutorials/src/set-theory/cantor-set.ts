import { Tutorial } from '../types';

export const cantorSetTutorial: Tutorial = {
  id: 'cantor-set',
  title: '【実践】カントールの集合',
  description: '無限に削り続けて残る不思議な集合「カントール集合」を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '消えていく区間',
      content:
        '[0, 1] の区間から中央の1/3を取り除きます。\n\n残った2つの区間から、また中央の1/3を取り除きます。\n\nこれを無限に繰り返すと......何が残る？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '削る過程を観察しよう',
      content:
        'ステップ数を増やして、カントール集合がどう変化するか見てみましょう。\n\nステップが進むにつれて、集合はどんどん「隙間だらけ」になります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-construction',
      title: '構成方法',
      content:
        'カントール集合 C の構成：\n\nC₀ = [0, 1]\nC₁ = [0, 1/3] ∪ [2/3, 1]\nC₂ = [0, 1/9] ∪ [2/9, 1/3] ∪ [2/3, 7/9] ∪ [8/9, 1]\n...\nC = C₀ ∩ C₁ ∩ C₂ ∩ ...\n\n各ステップで区間の数が2倍、長さが1/3に。\nn回後: 2ⁿ個の区間、合計の長さは (2/3)ⁿ → 0',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-properties',
      title: '驚くべき性質',
      content:
        'カントール集合の性質：\n\n1. 長さ（測度）は0: (2/3)ⁿ → 0\n2. でも空でない: 0, 1, 1/3, 2/3 などは残る\n3. 非可算無限: 実数と同じ大きさ！\n4. 完全集合: 孤立点がない\n5. 全不連結: 連結成分が各点のみ\n\n「長さ0なのに実数と同じだけ点がある」── 直感に反する驚くべき集合です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '考えてみよう',
      content: 'カントール集合の濃度（大きさ）はどれ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'カントール集合の濃度は？',
        options: [
          { id: 'a', label: '有限', correct: false },
          { id: 'b', label: '可算無限', correct: false },
          { id: 'c', label: '非可算無限（連続体の濃度）', correct: true },
          { id: 'd', label: '0（空集合）', correct: false },
        ],
        explanation:
          '正解は非可算無限です。\n\nカントール集合の点は3進法で「0と2のみ」で表される数と1対1対応します。\nこれは2進法の数（[0,1]の全実数）と同じ濃度です。\n\n長さ0でも、点の数は[0,1]と同じ！',
      },
    },
    {
      id: 'alternate',
      title: 'フラクタルの先駆け',
      content:
        'カントール集合は「フラクタル」の最も古い例の一つです。\n\n・自己相似性: 部分を拡大すると全体と同じ形\n・フラクタル次元: log2/log3 ≈ 0.631（1次元でも0次元でもない）\n\nマンデルブロ集合やコッホ雪片の祖先です。\n\n集合論の抽象的な構成が、自然界のパターンを記述する道具になったのです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        'カントール集合のポイント：\n\n・[0,1]から中央1/3を無限に除去\n・長さ（測度）は0\n・でも非可算無限個の点がある\n・フラクタルの先駆け\n\n次は「鳩の巣原理」── シンプルだが強力な原理を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
