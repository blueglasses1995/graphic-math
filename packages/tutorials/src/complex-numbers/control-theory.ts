import { Tutorial } from '../types';

export const controlTheoryTutorial: Tutorial = {
  id: 'control-theory',
  title: '【実践】制御理論',
  description: '複素数による系の安定性解析と伝達関数',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '安定な系、不安定な系',
      content:
        '制御理論では、システムの「安定性」が最も重要です。\n\n・エアコンの温度制御: 設定温度に収束する（安定）\n・マイクのハウリング: 音が際限なく大きくなる（不安定）\n\nこの安定性を判定するのに、複素数が決定的な役割を果たします。',
      customScene: 'control-theory-animation',
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
      id: 'transfer-function',
      title: '伝達関数',
      content:
        'ラプラス変換を使うと、微分方程式が代数方程式になります。\n\n伝達関数 G(s) = 出力/入力（s は複素数！）\n\n例: G(s) = 1/(s² + 2s + 5)\n\ns = σ + iω は複素周波数。実部σが減衰、虚部ωが振動に対応します。',
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
      id: 'poles',
      title: '極と安定性',
      content:
        '伝達関数の分母 = 0 の解を「極」と呼びます。\n\nG(s) = 1/(s² + 2s + 5) の極:\ns = -1 ± 2i\n\n安定性の判定:\n・すべての極の実部 < 0 → 安定（減衰する）\n・極の実部 > 0 があれば → 不安定（発散する）\n\n上の例では Re(s) = -1 < 0 なので安定です。',
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
      title: '極と安定性を体験',
      content:
        '極の位置（実部と虚部）を変えて、システムの応答がどう変わるか観察しましょう。\n\n実部が負なら減衰、正なら発散。虚部が振動の周波数を決めます。',
      customScene: 'control-theory-interactive',
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
          { name: '実部σ', min: -3, max: 3, step: 0.1, initial: -1 },
          { name: '虚部ω', min: 0, max: 5, step: 0.1, initial: 2 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '極と安定性の関係を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '極が s = 2 + 3i にあるシステムは？',
        options: [
          { id: 'a', label: '安定（減衰する）', correct: false },
          { id: 'b', label: '不安定（発散する）', correct: true },
          { id: 'c', label: '臨界安定（振動し続ける）', correct: false },
          { id: 'd', label: '判定不能', correct: false },
        ],
        explanation:
          '極の実部が Re(s) = 2 > 0 なので不安定です。応答は e^(2t) のように指数的に増大し、振動しながら発散します。',
      },
    },
    {
      id: 'nyquist',
      title: 'ナイキスト線図',
      content:
        'ナイキスト線図は、G(iω)（ω: 0→∞）を複素平面にプロットしたものです。\n\nこの曲線が点 (-1, 0) を囲む回数で、閉ループ系の安定性を判定できます。\n\nナイキストの安定判別法は、複素関数論の「偏角の原理」に基づいています。\n\n複素平面上の幾何が、現実のシステムの安定性を決定するのです。',
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
        '制御理論と複素数:\n\n・伝達関数 G(s) の s は複素数\n・極（分母=0の解）が安定性を決定\n・Re(s) < 0 → 安定、Re(s) > 0 → 不安定\n・虚部は振動周波数を決める\n・ナイキスト線図で安定判別\n\n複素数は制御工学の安定性解析に不可欠なツールです。',
      customScene: 'control-theory-summary',
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
