import { Tutorial } from '../types';

export const pathCycleTutorial: Tutorial = {
  id: 'path-cycle',
  title: 'パスとサイクル',
  description: 'グラフ上の歩道・パス・サイクルの違いを理解する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '道をたどる',
      content:
        'グラフの頂点から頂点へ辺をたどって移動することを考えます。\n\n駅から駅へ電車を乗り継ぐようなものです。\n\nこの「たどり方」にはいくつかの種類があり、それぞれ違う名前がついています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'path-cycle-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'walk',
      title: '歩道（ウォーク）',
      content:
        '歩道（walk）：頂点と辺を交互にたどる列です。\n\n同じ頂点や辺を何度通ってもOKです。\n\n例：A → B → C → B → D\n\nBを2回通っていますが、歩道としては問題ありません。',
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
      id: 'path',
      title: 'パス（道）',
      content:
        'パス（path）：同じ頂点を2度通らない歩道です。\n\n例：A → B → C → D はパス\n例：A → B → C → B → D はパスではない（Bを2回通る）\n\nパスの長さは、通った辺の数で数えます。\n上の例では長さ3のパスです。',
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
      id: 'cycle',
      title: 'サイクル（閉路）',
      content:
        'サイクル（cycle）：出発点に戻ってくるパスです。\n\n例：A → B → C → A は長さ3のサイクル\n\n同じ頂点を通らず（出発点を除く）、最後に出発点に戻ります。\n\n最小のサイクルは三角形（長さ3）です。',
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
      id: 'quiz',
      title: 'クイズ',
      content: 'パスとサイクルの違いを確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A→B→C→D→B の列は何と呼ばれますか？',
        options: [
          { id: 'a', label: 'パス', correct: false },
          { id: 'b', label: 'サイクル', correct: false },
          { id: 'c', label: '歩道（ウォーク）', correct: true },
          { id: 'd', label: 'オイラー路', correct: false },
        ],
        explanation:
          '正解は歩道です。Bを2回通っているのでパスではありません。また出発点Aに戻っていないのでサイクルでもありません。',
      },
    },
    {
      id: 'hamilton',
      title: 'ハミルトンパスとサイクル',
      content:
        'ハミルトンパス：すべての頂点をちょうど1回ずつ通るパス\nハミルトンサイクル：すべての頂点を1回ずつ通って出発点に戻る\n\nオイラー路がすべての「辺」を通るのに対し、ハミルトンパスはすべての「頂点」を通ります。\n\nハミルトンパスの存在判定は非常に難しい問題（NP完全）です。',
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
        '・歩道：自由にたどる列（繰り返しOK）\n・パス：同じ頂点を2度通らない\n・サイクル：出発点に戻るパス\n・ハミルトンパス/サイクル：すべての頂点を訪問\n\nこれらの概念は、ナビゲーションや回路設計など実世界の問題に直結します。\n\n次は、グラフの「つながり」── 連結グラフを学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'path-cycle-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
