import { Tutorial } from '../types';

export const equationSolvabilityTutorial: Tutorial = {
  id: 'equation-solvability',
  title: '【実践】方程式の可解性',
  description: 'ガロア理論による方程式の可解性の判定を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '方程式は解けるのか？',
      content:
        '2次方程式の解の公式は誰もが知っています。\n3次、4次にも解の公式があります。\n\nでは5次以上は？\n\n1824年、アーベルが証明しました:\n「5次以上の一般の方程式には、四則演算と冪根で表せる解の公式が存在しない」\n\nなぜ5次で壁にぶつかるのか？ その答えは群論にあります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'equation-solvability-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'history',
      title: '解の公式の歴史',
      content:
        '方程式の解の公式:\n\n2次（紀元前）: x = (-b ± √(b²-4ac)) / 2a\n3次（1545年, カルダノ）: 3乗根を含む公式\n4次（1545年, フェラーリ）: 4次を3次に帰着\n5次以上（1824年, アーベル）: 一般の公式は不可能！\n\n約3000年間の探求が、群論によって決着しました。',
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
      id: 'galois-group',
      title: 'ガロア群',
      content:
        'ガロアのアイデア:\n\n方程式の解の間の「対称性」を群で表す。\n\nf(x) = x⁵ - 2 の解は 5つ:\n  ⁵√2, ⁵√2·ω, ⁵√2·ω², ⁵√2·ω³, ⁵√2·ω⁴\n  （ω = e²πi/⁵）\n\nこれらの解を入れ替える操作が「ガロア群」を構成します。\n\nガロア群の構造が、方程式の解きやすさを決定します。',
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
      id: 'solvable-groups',
      title: '可解群',
      content:
        '鍵となる概念: 「可解群」\n\n群 G が可解 ⟺ 正規列が存在して、各商が巡回群\n  G = G₀ ⊃ G₁ ⊃ ... ⊃ Gₙ = {e}\n  各 Gᵢ/Gᵢ₊₁ が巡回群\n\nガロア理論の核心定理:\n  方程式がべき根で解ける ⟺ ガロア群が可解群\n\nS₅（5次の対称群）は可解群ではない！\nだから5次方程式の一般解は存在しないのです。',
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
      id: 'galois-story',
      title: 'ガロアの物語',
      content:
        'エヴァリスト・ガロア（1811-1832）:\n\n20歳で決闘により命を落とした天才数学者。\n\n決闘の前夜、彼は友人に宛てた手紙に理論を書き残しました。\n\nその理論は14年後にようやく理解され、数学を根本的に変えました。\n\nガロア理論は「なぜ解けないか」を説明した、人類の知性の偉大な成果です。',
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
      content: 'ガロア理論について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '5次以上の一般方程式がべき根で解けない理由は？',
        options: [
          { id: 'a', label: '解が複素数になるから', correct: false },
          { id: 'b', label: 'ガロア群 S₅ が可解群でないから', correct: true },
          { id: 'c', label: '係数が大きすぎるから', correct: false },
          { id: 'd', label: '解が無限個あるから', correct: false },
        ],
        explanation:
          '正解は「ガロア群 S₅ が可解群でないから」です。S₅ の中に含まれる交代群 A₅ が単純群であり、可解群の条件を満たしません。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '方程式の可解性:\n\n1. 2-4次: 解の公式が存在する\n2. 5次以上: 一般の解の公式は存在しない\n3. ガロア群: 解の対称性を表す群\n4. 可解群 ⟺ べき根で解ける\n5. S₅ が非可解 → 5次方程式は解けない\n\n群論が「なぜ解けないか」という深い問いに答えを与えました。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'equation-solvability-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
