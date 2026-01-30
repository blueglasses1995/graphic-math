import { Tutorial } from '../types';

export const groupPuzzleTutorial: Tutorial = {
  id: 'group-puzzle',
  title: '群とパズル',
  description: '群論でパズルを分析し、解法の代数的構造を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'パズルの中の群論',
      content:
        'ルービックキューブ、15パズル、ハノイの塔。\n\nこれらのパズルの状態空間は群を成します。\n\n「操作の合成」が群の演算、\n「操作の取り消し」が逆元、\n「何もしない」が単位元。\n\n群論でパズルの構造を完全に理解できるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'group-puzzle-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'スライドパズルの群',
      content:
        '3×3の8パズル（スライドパズル）を考えましょう。\n\n状態の総数: 9!/2 = 181,440（到達可能な配置）\n\nなぜ半分？偶置換しか到達できないからです。\nパズルの群 ≅ A₉ の部分群\n\nタイルを動かして群の構造を体感しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'group-puzzle-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ルービックキューブの群',
      content:
        'ルービックキューブの群:\n\n位数: 43,252,003,274,489,856,000 ≈ 4.3 × 10¹⁹\n\n生成元: 6つの面の回転 {U, D, L, R, F, B}\n\n群の構造:\nG ≤ (S₈ × S₁₂) ⋉ (Z₃⁸ × Z₂¹²)\n\n角の置換 × 辺の置換 × 角の向き × 辺の向き\n\n「神の数」= 20（どの状態からも20手以内で解ける）',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'パズルの可解性',
      content:
        '群論でパズルの可解性を判定:\n\n15パズル: 偶置換のみ到達可能 → 14-15入替は不可能\n\nルービックキューブの制約:\n• 角と辺の置換の偶奇が一致\n• 角の向きの和 ≡ 0 (mod 3)\n• 辺の向きの和 ≡ 0 (mod 2)\n\nこれらは群の準同型で記述されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '群とパズルの関係を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '15パズルで到達できない配置がある理由は？',
        options: [
          { id: 'a', label: 'パズルの物理的な制約のため', correct: false },
          { id: 'b', label: '操作で生成されるのが偶置換のみだから', correct: true },
          { id: 'c', label: '空きマスが1つしかないから', correct: false },
          { id: 'd', label: '16個のタイルが多すぎるから', correct: false },
        ],
        explanation:
          '15パズルの操作は偶置換のみを生成するため、奇置換に対応する配置（例: 14と15の入替）には到達できません。交代群 A₁₅ の性質です。',
      },
    },
    {
      id: 'alternate',
      title: 'ケイリーグラフと最短解',
      content:
        'パズルの状態空間をケイリーグラフで視覚化:\n\n• 頂点: 群の各元（パズルの各状態）\n• 辺: 生成元による変換（1手の操作）\n\n最短解 = ケイリーグラフ上の最短経路\n\n直径 = 「神の数」= 最も遠い状態までの距離\n\nルービックキューブ: 直径20（2010年に証明）\n群論 + 計算機科学の勝利です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：群とパズル',
      content:
        '群とパズル:\n\n• パズルの状態空間は群を成す\n• 置換群・対称群で状態を記述\n• 可解性は群の構造で判定\n• ケイリーグラフで最短解を分析\n• ルービックキューブの群は ≈ 4.3 × 10¹⁹\n\n群論の直感的で楽しい応用です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'group-puzzle-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
