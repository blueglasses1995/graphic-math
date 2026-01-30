import { Tutorial } from '../types';

export const automatonIntroTutorial: Tutorial = {
  id: 'automaton-intro',
  title: 'オートマトン入門',
  description: '有限オートマトンの基本概念と状態遷移を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '機械が「読む」とは',
      content:
        '自動販売機にお金を入れると、状態が変わります。\n\n100円 → 200円 → 商品選択可能…\n\nこのような「状態の変化」を数学的にモデル化したものがオートマトンです。\n\n文字列を1文字ずつ読み、状態を遷移させる抽象的な機械を見てみましょう。',
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
      title: '状態遷移を操作しよう',
      content:
        '有限オートマトン (DFA) は5つ組 (Q, Σ, δ, q₀, F) で定義されます。\n\nQ: 状態の有限集合\nΣ: 入力アルファベット\nδ: 遷移関数 Q × Σ → Q\nq₀: 初期状態\nF: 受理状態の集合\n\n入力文字を選んで状態遷移を体験してください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '偶数個の1を受理するDFA',
      content:
        '入力アルファベット Σ = {0, 1} で、1の個数が偶数の文字列を受理するDFAを考えます。\n\n状態: q₀（偶数個）, q₁（奇数個）\n遷移: 0を読む → 状態変わらず、1を読む → もう一方の状態へ\n\n例: "1010" → q₀→q₁→q₁→q₀→q₀ → 受理！\n"111" → q₀→q₁→q₀→q₁ → 拒否！',
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
      id: 'example-2',
      title: 'DFAとNFA',
      content:
        'DFA（決定性）は各状態から各入力に対して遷移先が一つだけです。\n\nNFA（非決定性）は複数の遷移先やε遷移（入力なしの遷移）を許します。\n\n驚くべきことに、NFAで表現できる言語はDFAでも表現でき、両者の能力は等価です。\n\nただしDFAに変換すると状態数が指数的に増える場合があります。',
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
      title: 'クイズ：オートマトン',
      content: '有限オートマトンについての理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'DFAとNFAの関係として正しいのはどれですか？',
        options: [
          { id: 'a', label: 'NFAはDFAより強力である', correct: false },
          { id: 'b', label: 'DFAはNFAより強力である', correct: false },
          { id: 'c', label: 'DFAとNFAの受理言語クラスは等価である', correct: true },
          { id: 'd', label: 'DFAとNFAは全く異なる概念である', correct: false },
        ],
        explanation:
          '正解は「等価」です。部分集合構成法により任意のNFAをDFAに変換できます。',
      },
    },
    {
      id: 'alternate',
      title: '正規言語の限界',
      content:
        '有限オートマトンが受理できる言語を「正規言語」と呼びます。\n\nしかし正規言語には限界があります。例えば「aⁿbⁿ（aとbが同数）」は正規言語ではありません。\n\nこれはポンピング補題で証明でき、有限の状態では「数を数える」能力に限界があることを示しています。',
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
      title: 'まとめ：オートマトン入門',
      content:
        '有限オートマトンは最も基本的な計算モデルです。\n\n・DFAは決定的、NFAは非決定的だが表現力は同じ\n・正規言語を受理する\n・メモリが有限なため「数える」ことに限界がある\n\nオートマトンは正規表現やコンパイラの字句解析など、実用的にも重要な概念です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
