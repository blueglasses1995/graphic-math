import { Tutorial } from '../types';

export const aStarTutorial: Tutorial = {
  id: 'a-star',
  title: 'A*アルゴリズム',
  description: 'ヒューリスティクスを用いた効率的な経路探索を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '賢い探索',
      content:
        'ダイクストラ法は全方向に均等に探索します。\n\nしかしゴールが東にあるなら、西に探索するのは無駄では？\n\nA*は「ゴールへの推定距離」を加味して探索の優先順位を決めます。\n\n結果：探索範囲が劇的に減少し、同じ最短経路をずっと速く見つけられます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'a-star-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'A*の探索を見てみよう',
      content:
        'A*の評価関数：f(n) = g(n) + h(n)\n\ng(n): 始点からnまでの実コスト\nh(n): nからゴールまでの推定コスト（ヒューリスティクス）\n\nf(n)が最小のノードを優先的に展開します。\n\nダイクストラとA*の探索範囲の違いを比較してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'a-star-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '許容的ヒューリスティクス',
      content:
        'A*が最短経路を保証するには、h(n)が「許容的」である必要があります。\n\n許容的: h(n) ≤ 実際の最短距離（過大評価しない）\n\n例：\n・ユークリッド距離: 直線距離 ≤ 実際の経路 → 許容的\n・マンハッタン距離: 格子状マップで許容的\n・h(n) = 0: ダイクストラと同じ → 許容的だが効率が悪い\n\nh(n)が実際に近いほど効率的な探索になります。',
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
      title: '整合的ヒューリスティクス',
      content:
        'より強い条件「整合性（一貫性）」があります。\n\n整合的: h(n) ≤ c(n,n\') + h(n\')（三角不等式）\n\n整合的なら許容的です。さらに、展開済みノードの再探索が不要になります。\n\nユークリッド距離は整合的です。\n\n整合性により、A*はダイクストラのように各ノードを1回だけ展開すれば十分になります。',
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
      title: 'クイズ：A*アルゴリズム',
      content: 'A*の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A*で h(n) = 0 とした場合、どのアルゴリズムと同等になりますか？',
        options: [
          { id: 'a', label: 'BFS', correct: false },
          { id: 'b', label: 'DFS', correct: false },
          { id: 'c', label: 'ダイクストラ法', correct: true },
          { id: 'd', label: '貪欲最良優先探索', correct: false },
        ],
        explanation:
          'h(n) = 0 なら f(n) = g(n) となり、始点からの実コストのみで優先順位を決めるダイクストラ法と同等です。',
      },
    },
    {
      id: 'alternate',
      title: 'ゲームAIでのA*',
      content:
        'A*はゲーム開発で最も広く使われる経路探索アルゴリズムです。\n\n応用例：\n・RTS（リアルタイム戦略）ゲームのユニット移動\n・RPGのNPC経路探索\n・パズルゲームの解法（15パズルなど）\n\n改良版：\n・JPS（Jump Point Search）：格子マップでA*を高速化\n・HPA*：階層的にグラフを分割して高速化\n・D* Lite：動的環境での再計画',
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
      title: 'まとめ：A*アルゴリズム',
      content:
        'A*はヒューリスティクスを活用した知的な経路探索です。\n\n・f(n) = g(n) + h(n) で評価\n・許容的ヒューリスティクスで最短経路を保証\n・整合性で効率を最大化\n・ゲーム、ロボティクス、ナビゲーションに広く応用\n\nダイクストラの一般化であり、現代の経路探索の標準アルゴリズムです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'a-star-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
