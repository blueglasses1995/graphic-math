import { Tutorial } from '../types';

export const permutationAlternatingTutorial: Tutorial = {
  id: 'permutation-alternating',
  title: '置換群と交代群',
  description: '対称群の構造と交代群の役割を深く理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'カードシャッフルの数学',
      content:
        '3枚のカードを並び替える方法は 3! = 6 通り。\nこれが対称群 S₃ です。\n\nでは「偶数回の交換」で達成できる並び替えだけを集めたら？\nそれが交代群 A₃ ── 対称群の半分の大きさを持つ重要な部分群です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '置換の偶奇を判定',
      content:
        '置換を互換の積に分解し、偶置換か奇置換かを判定しましょう。\n\n(1 2 3) = (1 3)(1 2) → 互換2つ → 偶置換\n(1 2) → 互換1つ → 奇置換\n\n置換を選んで分解を確認してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '交代群の定義',
      content:
        '交代群 Aₙ は対称群 Sₙ の偶置換全体からなる部分群です。\n\n|Aₙ| = n!/2\n\nAₙ は Sₙ の正規部分群です（指数2の部分群は常に正規）。\n\n商群: Sₙ/Aₙ ≅ Z₂\n\n符号準同型 sgn: Sₙ → {±1} の核が Aₙ です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'A₅ の特別さ',
      content:
        'A₅（位数60）は非可換な単純群（正規部分群が自明なもののみ）です。\n\nn ≥ 5 のとき Aₙ は単純群。\n\nこの事実が「5次以上の方程式に解の公式がない」\n（アーベル＝ルフィニの定理）の本質的な理由です。\n\nガロア理論との深い繋がりがあります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '交代群について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A₄ の位数はいくつですか？',
        options: [
          { id: 'a', label: '6', correct: false },
          { id: 'b', label: '12', correct: true },
          { id: 'c', label: '24', correct: false },
          { id: 'd', label: '4', correct: false },
        ],
        explanation:
          '|A₄| = 4!/2 = 24/2 = 12 です。A₄ は位数12の群で、位数6の部分群を持たないことでも有名です。',
      },
    },
    {
      id: 'alternate',
      title: '15パズルと偶置換',
      content:
        '15パズル（4×4スライドパズル）で到達できる配置は全体の半分だけです。\n\nこれは交代群の概念で説明できます:\n正当な操作で得られる置換は偶置換のみ。\n\n14と15を入れ替えた配置（奇置換）には絶対に到達できません。\n\n交代群は身近なパズルにも現れるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：置換群と交代群',
      content:
        '• 対称群 Sₙ: n個の元の全置換（位数 n!）\n• 交代群 Aₙ: 偶置換の全体（位数 n!/2）\n• Aₙ ◁ Sₙ（正規部分群）\n• A₅ 以上は単純群 → 方程式の可解性に関係\n• パズルの到達可能性にも関連\n\n群論の中核をなす概念です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
