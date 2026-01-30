import { Tutorial } from '../types';

export const representationTheoryTutorial: Tutorial = {
  id: 'representation-theory',
  title: '群の表現論入門',
  description: '群を行列で表現し、その構造を線形代数で分析する方法を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '群を「見える化」する',
      content:
        '抽象的な群の元を、具体的な行列として表現できたら？\n\n群の表現論は、群の元を行列（線形変換）に対応させることで、\n抽象代数を線形代数の道具で分析する強力な手法です。\n\n物理学では素粒子の分類に使われています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'Z₃の行列表現',
      content:
        'Z₃ = {0, 1, 2} の2次元表現を見てみましょう。\n\nω = e^{2πi/3} として:\n0 → 単位行列\n1 → 回転行列(120°)\n2 → 回転行列(240°)\n\n群の演算が行列の積に対応することを確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '表現の定義',
      content:
        '群 G の（有限次元）表現とは:\n\n準同型 ρ: G → GL(V)\n\nつまり ρ(gh) = ρ(g)ρ(h) を満たす\n群から正則行列への写像です。\n\n次元: V の次元を表現の次元と呼ぶ\n1次元表現は群から C* への準同型',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '既約表現と完全可約性',
      content:
        '不変部分空間を持たない表現を「既約表現」と呼びます。\n\nマシュケの定理:\n有限群の複素表現は既約表現の直和に分解できる。\n\n既約表現の個数 = 共役類の個数\n\nこれにより群の構造が「既約表現のセット」で完全に記述されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '表現論の基礎を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'S₃ の共役類は3つです。既約表現はいくつありますか？',
        options: [
          { id: 'a', label: '2つ', correct: false },
          { id: 'b', label: '3つ', correct: true },
          { id: 'c', label: '6つ', correct: false },
          { id: 'd', label: '1つ', correct: false },
        ],
        explanation:
          '既約表現の個数は共役類の個数と一致します。S₃ の3つの既約表現は: 自明表現(1次元)、符号表現(1次元)、標準表現(2次元) です。',
      },
    },
    {
      id: 'alternate',
      title: '指標理論',
      content:
        '表現 ρ の指標（キャラクター）: χ(g) = tr(ρ(g))\n\n指標は共役類上で一定値を取る関数です。\n\n指標表を作ることで、群の構造が一目でわかります。\n\n直交関係: Σ χᵢ(g)χⱼ(g)* = |G|δᵢⱼ\n\n表現論は量子力学や化学でも大活躍します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：表現論の世界',
      content:
        '表現論:\n\n• 群の元を行列として実現\n• 既約表現に分解して分析\n• 既約表現の数 = 共役類の数\n• 指標で表現を簡潔に記述\n• 物理学・化学で広く応用\n\n抽象と具体を橋渡しする美しい理論です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
