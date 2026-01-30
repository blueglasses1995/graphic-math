import { Tutorial } from '../types';

export const satProblemTutorial: Tutorial = {
  id: 'sat-problem',
  title: 'SAT問題',
  description: '充足可能性問題とSATソルバーの仕組みを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '論理式を満たせるか？',
      content:
        '(x₁ ∨ ¬x₂) ∧ (¬x₁ ∨ x₃) ∧ (x₂ ∨ ¬x₃)\n\nこの論理式を真にする変数の割当は存在するでしょうか？\n\nこれがSAT（充足可能性）問題です。\n\n最初に証明されたNP完全問題であり、実用上も極めて重要です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sat-problem-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '変数を割り当ててみよう',
      content:
        'CNF（連言標準形）：節（clause）のAND\n各節はリテラル（変数または否定）のOR\n\n例：(x₁ ∨ ¬x₂) ∧ (¬x₁ ∨ x₃)\n\n変数に真偽値を割り当てて、すべての節を満たす組合せを探してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sat-problem-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'DPLLアルゴリズム',
      content:
        '最も基本的なSATソルバーはDPLL（1962年）です。\n\nバックトラッキング + 2つの規則：\n\n1. 単位伝播（Unit Propagation）：\n   1つのリテラルだけの節があれば、そのリテラルを真にする\n\n2. 純リテラル除去：\n   否定でしか現れないリテラルを偽にする\n\nこれだけで劇的に探索空間が減ります。',
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
      title: 'CDCLとモダンSATソルバー',
      content:
        '現代のSATソルバー（MiniSat, CryptoMiniSat等）はCDCL（衝突駆動節学習）を使います。\n\n1. 変数を決定し単位伝播\n2. 矛盾が発生したら原因を分析\n3. 矛盾の原因を「学習節」として追加\n4. 適切なレベルまでバックジャンプ\n\n数百万変数のSATインスタンスを実用的に解けます。\n\nハードウェア検証やAI計画に不可欠な技術です。',
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
      title: 'クイズ：SAT問題',
      content: 'SAT問題の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'SAT問題の計算量クラスはどれですか？',
        options: [
          { id: 'a', label: 'P', correct: false },
          { id: 'b', label: 'NP完全', correct: true },
          { id: 'c', label: '決定不能', correct: false },
          { id: 'd', label: 'PSPACE完全', correct: false },
        ],
        explanation:
          'SATはクック・レヴィンの定理により最初に証明されたNP完全問題です。すべてのNP問題がSATに帰着可能です。',
      },
    },
    {
      id: 'alternate',
      title: '2-SATは簡単',
      content:
        '各節のリテラル数を2に制限した2-SATは、実はPに属します！\n\n(x₁ ∨ x₂) は含意 ¬x₁ → x₂ と ¬x₂ → x₁ と等価。\n\n含意グラフを構築し、強連結成分分解（SCC）で解けます。\n\nx と ¬x が同じSCCにあれば充足不可能。\n\n3-SATはNP完全なのに2-SATはP。リテラル数1つの差が計算量を劇的に変えます。',
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
      title: 'まとめ：SAT問題',
      content:
        'SAT問題はNP完全問題の原型であり、実用的にも重要です。\n\n・最初のNP完全問題（クック・レヴィンの定理）\n・DPLLとCDCLによるモダンソルバー\n・ハードウェア検証、AI、暗号解析に応用\n・2-SATはP、3-SATはNP完全（臨界現象）\n\n理論と実践が見事に融合した分野です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'sat-problem-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
