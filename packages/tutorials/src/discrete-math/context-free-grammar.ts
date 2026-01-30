import { Tutorial } from '../types';

export const contextFreeGrammarTutorial: Tutorial = {
  id: 'context-free-grammar',
  title: '文脈自由文法',
  description: 'プログラミング言語の構文解析に使われる文脈自由文法を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '言語の構造を記述する',
      content:
        'プログラミング言語の文法はどう定義されるのでしょうか？\n\nif (条件) { 処理 } という構文は、正規表現では表現できません。\n\n括弧の対応など「入れ子構造」を扱うには、より強力な文法が必要です。\n\nそれが文脈自由文法（CFG）です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'context-free-grammar-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '導出木を作ろう',
      content:
        'CFGは4つ組 (V, Σ, R, S) で定義されます。\n\nV: 変数（非終端記号）の集合\nΣ: 終端記号の集合\nR: 生成規則の集合\nS: 開始記号\n\n生成規則を適用して文字列を導出してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'context-free-grammar-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '括弧の対応',
      content:
        '正しい括弧列を生成するCFGの例：\n\nS → (S) | SS | ε\n\n導出例：\nS → (S) → ((S)) → (()) ✓\nS → SS → (S)S → ()S → ()(S) → ()() ✓\n\n正規言語では不可能だった「括弧の対応」が表現できます。',
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
      title: 'プッシュダウンオートマトン',
      content:
        'CFGに対応する計算モデルがプッシュダウンオートマトン（PDA）です。\n\n有限オートマトンにスタック（LIFO）を追加したものです。\n\n例：aⁿbⁿの認識\n1. aを読むたびにスタックにpush\n2. bを読むたびにスタックからpop\n3. 入力終了時にスタックが空なら受理\n\nスタックにより「数える」能力を獲得しています。',
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
      title: 'クイズ：文脈自由文法',
      content: '文脈自由文法の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'S → aSb | ε という文法が生成する言語はどれですか？',
        options: [
          { id: 'a', label: 'aとbが交互に並ぶ文字列', correct: false },
          { id: 'b', label: 'aⁿbⁿ（n≥0）', correct: true },
          { id: 'c', label: 'aとbの数が異なる文字列', correct: false },
          { id: 'd', label: '任意のaとbの文字列', correct: false },
        ],
        explanation:
          '正解は aⁿbⁿ です。Sを展開するたびにaが前、bが後に追加され、同数のa,bが生成されます。',
      },
    },
    {
      id: 'alternate',
      title: 'チョムスキー階層',
      content:
        '言語は計算能力の階層で分類されます（チョムスキー階層）。\n\nType 3: 正規言語（有限オートマトン）\nType 2: 文脈自由言語（PDA）\nType 1: 文脈依存言語（線形有界オートマトン）\nType 0: 帰納的可算言語（チューリングマシン）\n\n各レベルは上のレベルの真部分集合です。',
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
      title: 'まとめ：文脈自由文法',
      content:
        '文脈自由文法は正規言語より強力な言語クラスです。\n\n・入れ子構造を表現可能\n・プッシュダウンオートマトンと等価\n・プログラミング言語の構文定義に不可欠\n\nコンパイラの構文解析は、CFGの理論に基づいて設計されています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'context-free-grammar-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
