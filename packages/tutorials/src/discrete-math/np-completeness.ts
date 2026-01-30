import { Tutorial } from '../types';

export const npCompletenessTutorial: Tutorial = {
  id: 'np-completeness',
  title: 'NP完全性',
  description: 'NP完全問題の概念と帰着を理解する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '最も難しいNP問題',
      content:
        'NP問題の中に「最も難しい」グループがあります。\n\nもしその中の一つでも効率的に解ければ、NP問題すべてが効率的に解けます。\n\nこの特別なグループを「NP完全」と呼びます。\n\nクック・レヴィンの定理（1971年）がその存在を初めて証明しました。',
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
      title: '帰着を体験しよう',
      content:
        '問題AをBに「帰着」するとは、Aの任意の入力を多項式時間でBの入力に変換し、Bの答えからAの答えが得られることです。\n\nA ≤ₚ B（AはBに帰着可能）\n\nBが解ければAも解ける。AがBより「簡単」ということです。\n\n帰着の仕組みを操作してみましょう。',
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
      title: 'クック・レヴィンの定理',
      content:
        '充足可能性問題（SAT）がNP完全であることを証明した歴史的定理です。\n\nSAT：論理式を真にする変数の割当は存在するか？\n\n証明のアイデア：\n任意のNP問題は非決定性TMで解ける → TMの動作を論理式で符号化 → SATに帰着\n\nこれにより、SATはNPの中で「最も難しい」問題であることが示されました。',
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
      title: 'NP完全問題の例',
      content:
        'SATからの帰着により、多くの問題がNP完全と証明されています。\n\n・3-SAT（各節が3リテラル）\n・頂点被覆\n・ハミルトン閉路\n・グラフ彩色（3色以上）\n・部分和問題\n・巡回セールスマン問題（判定版）\n\nカープの21のNP完全問題（1972年）が有名です。',
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
      title: 'クイズ：NP完全性',
      content: 'NP完全性の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '問題LがNP完全であるための条件として正しいのはどれですか？',
        options: [
          { id: 'a', label: 'LがPに属する', correct: false },
          { id: 'b', label: 'LがNPに属し、すべてのNP問題がLに帰着可能', correct: true },
          { id: 'c', label: 'Lが指数時間でしか解けない', correct: false },
          { id: 'd', label: 'Lが決定不能である', correct: false },
        ],
        explanation:
          'NP完全の定義：(1) NP に属する、(2) すべてのNP問題がLに多項式時間帰着可能。この両方を満たす必要があります。',
      },
    },
    {
      id: 'alternate',
      title: 'NP困難との違い',
      content:
        'NP困難（NP-hard）：すべてのNP問題が帰着可能だが、NP自体に属するとは限らない。\n\nNP完全 = NP ∩ NP困難\n\n例：停止問題はNP困難だがNPに属さない（決定不能）。\n最適化版TSP（最短経路を求める）もNP困難だが判定問題ではないのでNPの定義に合わない場合があります。',
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
      title: 'まとめ：NP完全性',
      content:
        'NP完全問題はNPの中で最も難しい問題群です。\n\n・多項式時間帰着により問題の難しさを比較\n・SATが最初のNP完全問題（クック・レヴィンの定理）\n・何百もの問題がNP完全と判明\n・一つでもPで解ければP = NP\n\nNP完全性は「この問題は本質的に難しい」という重要なシグナルです。',
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
