import { Tutorial } from '../types';

export const approximationAlgorithmTutorial: Tutorial = {
  id: 'approximation-algorithm',
  title: '近似アルゴリズム',
  description: 'NP困難問題に対する近似保証付きアルゴリズムを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '完璧でなくても十分',
      content:
        'NP困難な問題は効率的に最適解を求められません。\n\nしかし「最適の2倍以内」で解ければ実用上は十分かもしれません。\n\n近似アルゴリズムは「最適解にどれだけ近いか」を数学的に保証しつつ、多項式時間で動作します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'approximation-algorithm-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '近似比を確認しよう',
      content:
        '近似比 ρ：アルゴリズムの解 ≤ ρ × 最適解\n\nρ = 1 なら最適、ρ = 2 なら最適の2倍以内。\n\n具体的な問題で近似アルゴリズムの解と最適解を比較してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'approximation-algorithm-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '頂点被覆の2-近似',
      content:
        '頂点被覆：すべての辺の少なくとも一端を含む最小の頂点集合。\n\n2-近似アルゴリズム：\n1. 任意の辺(u,v)を選ぶ\n2. uとvの両方を被覆に追加\n3. u,vに接続するすべての辺を削除\n4. 辺がなくなるまで繰り返す\n\n結果は最適の2倍以内を保証。\n証明：選んだ辺の集合はマッチングで、最適解はその各辺から1つ以上含む。',
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
      title: 'TSPの近似',
      content:
        '三角不等式を満たすTSP（計量TSP）には1.5-近似が存在します。\n\nクリストフィデスのアルゴリズム（1976年）：\n1. 最小全域木Tを求める\n2. Tの奇数次頂点に最小重み完全マッチングMを追加\n3. T∪Mのオイラー閉路を求める\n4. ショートカットでハミルトン閉路に変換\n\n近似比 3/2。約50年間、計量TSPの最良近似比でした。',
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
      title: 'クイズ：近似アルゴリズム',
      content: '近似アルゴリズムの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '近似比2のアルゴリズムは最適解と比べてどうですか？',
        options: [
          { id: 'a', label: '常に最適解と同じ', correct: false },
          { id: 'b', label: '最適解の2倍以内を保証', correct: true },
          { id: 'c', label: '50%の確率で最適', correct: false },
          { id: 'd', label: '最適解の半分以上を保証', correct: false },
        ],
        explanation:
          '近似比2は「アルゴリズムの解のコスト ≤ 2 × 最適解のコスト」を保証します（最小化問題の場合）。',
      },
    },
    {
      id: 'alternate',
      title: '近似不可能性',
      content:
        '近似にも限界があります。ある問題は特定の比率を超えて近似できないことが証明されています。\n\n例：\n・集合被覆：(1-ε)ln n 未満の近似比は不可能（P≠NPなら）\n・一般TSP（三角不等式なし）：定数近似不可能\n・最大独立集合：n^(1-ε) 未満の近似比は不可能\n\nPCP定理がこれらの結果の基盤です。',
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
      title: 'まとめ：近似アルゴリズム',
      content:
        '近似アルゴリズムはNP困難問題への実践的アプローチです。\n\n・近似比で解の品質を数学的に保証\n・頂点被覆の2-近似、TSPの1.5-近似\n・近似不可能性：PCP定理による限界\n・PTAS/FPTAS：任意の精度で近似可能な問題も\n\n「解けない問題にどこまで迫れるか」── これが近似アルゴリズムの挑戦です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'approximation-algorithm-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
