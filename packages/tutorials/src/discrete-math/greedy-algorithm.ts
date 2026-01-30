import { Tutorial } from '../types';

export const greedyAlgorithmTutorial: Tutorial = {
  id: 'greedy-algorithm',
  title: '貪欲法',
  description: '局所最適な選択を繰り返す貪欲法の考え方と適用条件を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '今、一番良いものを選ぶ',
      content:
        'お釣りを最少枚数の硬貨で返したい。\n\n470円のお釣り → 500円玉は使えない → 100円×4 + 50円×1 + 10円×2\n\n「一番大きな硬貨から順に使う」── この直感的な方法が貪欲法です。\n\nしかし、いつでも正しいとは限りません。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'greedy-algorithm-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '貪欲法を試してみよう',
      content:
        '貪欲法のアプローチ：\n\n1. 候補の中から「局所的に最良」の選択をする\n2. その選択を確定する（後戻りしない）\n3. 残りの問題に対して繰り返す\n\n「今この瞬間の最善」を選び続けるだけ。シンプルで高速です。\n\n実際に貪欲な選択を操作してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'greedy-algorithm-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '区間スケジューリング',
      content:
        '会議室を最大数の会議に使いたい。各会議には開始・終了時刻がある。\n\n貪欲戦略：終了時刻が早い順に選ぶ\n\n会議: [1,3], [2,5], [3,4], [5,7], [6,8]\n選択: [1,3] → [3,4] → [5,7] → 3つ\n\nこの貪欲法は最適解を保証します！\n証明：交換論法により、どの最適解もこの解以上にはならないことが示せます。',
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
      title: 'クラスカルの最小全域木',
      content:
        'グラフの最小全域木を求めるクラスカル法も貪欲法です。\n\n戦略：辺を重みの小さい順に選び、閉路ができなければ追加\n\nなぜ最適？\n・カットの性質：任意のカットで最小重みの辺は最小全域木に含まれる\n・マトロイドの理論が貪欲法の最適性を保証\n\n時間計算量：O(E log E)（辺のソートがボトルネック）',
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
      title: 'クイズ：貪欲法',
      content: '貪欲法の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '貪欲法が最適解を保証しない問題はどれですか？',
        options: [
          { id: 'a', label: '区間スケジューリング問題', correct: false },
          { id: 'b', label: '最小全域木（クラスカル法）', correct: false },
          { id: 'c', label: '0-1ナップサック問題', correct: true },
          { id: 'd', label: 'ダイクストラの最短経路', correct: false },
        ],
        explanation:
          '0-1ナップサック問題では貪欲法（価値/重さの比率順）は最適を保証しません。動的計画法が必要です。',
      },
    },
    {
      id: 'alternate',
      title: 'マトロイドと貪欲法',
      content:
        '貪欲法が最適になる数学的条件はマトロイドの理論で説明できます。\n\nマトロイド (E, I) は独立集合の族で、以下を満たします：\n1. 空集合は独立\n2. 独立集合の部分集合は独立\n3. 交換公理：|A| < |B| なら、B\\AからAに加えても独立な要素が存在\n\n重み最大の独立集合を求める問題で、貪欲法が最適になります。',
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
      title: 'まとめ：貪欲法',
      content:
        '貪欲法はシンプルかつ高速なアルゴリズム設計手法です。\n\n・局所最適を繰り返し選択\n・後戻りしないため高速\n・区間スケジューリング、最小全域木などで最適を保証\n・ナップサック問題など保証しない場合も\n・マトロイドの理論が適用条件を数学的に特徴づける\n\n「なぜ貪欲で正しいか」の証明が重要です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'greedy-algorithm-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
