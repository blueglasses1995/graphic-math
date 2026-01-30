import { Tutorial } from '../types';

export const tspTutorial: Tutorial = {
  id: 'tsp',
  title: '【実践】巡回セールスマン問題',
  description: '最適な巡回路を求めるNP困難問題に挑む',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'すべての都市を回る',
      content:
        'セールスマンがn個の都市をすべて1回ずつ訪問して出発地に戻りたい。\n\n移動距離が最小の巡回路はどれでしょうか？\n\nこれが「巡回セールスマン問題（TSP）」── 計算科学で最も有名な問題の一つです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'tsp-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'complexity',
      title: '組合せ爆発',
      content:
        'n都市のTSPで可能な巡回路の数は (n-1)!/2 通りです。\n\n・10都市：181,440通り（全探索可能）\n・20都市：約6×10¹⁶通り（全探索不可能）\n・30都市：約4×10³⁰通り（宇宙の寿命でも足りない）\n\nこれが「組合せ爆発」です。NP困難問題の典型例です。',
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
      id: 'greedy',
      title: '貪欲法と近似',
      content:
        '最適解が求められないなら、「そこそこ良い解」を素早く見つけましょう。\n\n最近傍法：今いる都市から最も近い未訪問の都市へ行く\n→ 高速だが最適解の1.5〜2倍程度の距離になることが多い\n\n2-opt改善法：2本の辺を入れ替えて距離が短くなったら採用\n→ 局所最適解に改善できる',
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
      id: 'dp',
      title: '動的計画法による厳密解',
      content:
        'ビットDP（Held-Karpアルゴリズム）で厳密解が求められます。\n\n状態：(訪問済み都市の集合, 現在地)\nをビットマスクで表現し、O(2ⁿ × n²) で計算。\n\nn=20程度なら現実的な時間で解けます。\n\n全探索の O(n!) に比べると劇的な改善です。',
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
      content: 'TSPの計算量について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '15都市のTSPで可能な巡回路の数は(n-1)!/2。これはおよそ？',
        options: [
          { id: 'a', label: '約1000通り', correct: false },
          { id: 'b', label: '約100万通り', correct: false },
          { id: 'c', label: '約430億通り', correct: true },
          { id: 'd', label: '約1兆通り', correct: false },
        ],
        explanation:
          '正解は約430億通りです。14!/2 = 87,178,291,200/2 ≈ 43,589,145,600。全探索は現実的ではありませんが、ビットDPなら解けるサイズです。',
      },
    },
    {
      id: 'metaheuristics',
      title: 'メタヒューリスティクス',
      content:
        '大規模なTSPには確率的手法が使われます：\n\n・焼きなまし法：温度パラメータで悪い解も確率的に受け入れ\n・遺伝的アルゴリズム：巡回路を「個体」として進化させる\n・蟻コロニー最適化：蟻のフェロモンを模倣\n\nこれらは最適解の保証はありませんが、実用上十分な解を高速に見つけます。',
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
        '・TSP：全都市を最短で巡回する問題\n・NP困難：多項式時間の厳密解法は（おそらく）存在しない\n・貪欲法・2-opt：高速な近似\n・ビットDP：中規模の厳密解\n・メタヒューリスティクス：大規模の近似\n\nTSPは理論と実践の両面で離散最適化の象徴的な問題です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'tsp-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
