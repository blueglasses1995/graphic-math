import { Tutorial } from '../types';

export const matrixCompletionTutorial: Tutorial = {
  id: 'matrix-completion',
  title: '行列補完',
  description: '欠損値を持つ行列を低ランク性を活用して補完する手法を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '穴だらけの行列を埋める',
      content:
        'ユーザー×映画の評価行列の99%は空欄です。\n' +
        'センサーデータの一部が欠損しています。\n' +
        'アンケートの未回答があります。\n\n' +
        'これらの欠損値を推定する問題が「行列補完」です。\n\n' +
        'カギは「低ランク性」：実世界のデータ行列は\n' +
        '見た目は大きくても、本質的なランクは低いことが多い。\n' +
        'この性質を使って欠損値を埋められるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '低ランク行列補完を体感',
      content:
        'ランク1の行列の例：\n' +
        '[[2,4,6],[3,6,9],[1,2,3]]\n\n' +
        '各行は (2,4,6) のスカラー倍なので、\n' +
        '1要素が欠損しても他から復元できます。\n\n' +
        '[[2,?,6],[3,6,9],[1,2,3]]\n' +
        '→ ? = 4（パターンから明らか）\n\n' +
        '実際の行列は完全に低ランクではありませんが、\n' +
        '「近似的に低ランク」なので補完が可能です。\n' +
        '推薦システムの行列分解はまさにこの応用です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '核ノルム最小化',
      content:
        '行列補完を最適化問題として定式化：\n\n' +
        'min rank(X)\n' +
        's.t. X_ij = M_ij for (i,j) ∈ Ω\n\n' +
        'ランク最小化はNP困難なので、凸緩和として\n' +
        '核ノルム（特異値の和）を最小化します：\n\n' +
        'min |X|_* = Σσᵢ(X)\n' +
        's.t. X_ij = M_ij for (i,j) ∈ Ω\n\n' +
        'カンデス&レヒトの定理：O(rn log²n) 個の\n' +
        'ランダムに観測されたエントリから、\n' +
        'ランクrのn×n行列を正確に復元可能！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '実用的なアルゴリズム',
      content:
        '核ノルム最小化は半正定値計画として解けますが、\n' +
        '大規模問題には以下の手法が実用的です。\n\n' +
        '・ソフトインピュテーション（Soft-Impute）：\n' +
        '  反復的にSVDの特異値を縮小\n\n' +
        '・交互最小化（ALS）：\n' +
        '  X ≈ UV^T としてUとVを交互に更新\n\n' +
        '・確率的勾配降下法（SGD）：\n' +
        '  観測データからミニバッチで学習\n\n' +
        'Netflix推薦もこれらの手法の発展形です。\n' +
        '行列補完は推薦、センサー、医療データなど幅広く応用されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：行列補完',
      content: '行列補完の基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '行列補完が可能になる重要な仮定は何ですか？',
        options: [
          { id: 'a', label: '行列が正方行列である', correct: false },
          { id: 'b', label: '行列が近似的に低ランクである', correct: true },
          { id: 'c', label: '欠損値が50%未満である', correct: false },
          { id: 'd', label: '行列の要素が全て正である', correct: false },
        ],
        explanation:
          '行列が低ランク（またはその近似）であれば、少数の観測値から全体を復元できます。推薦システムでは「ユーザーの好みは少数の因子で説明できる」ことが低ランク性に対応します。',
      },
    },
    {
      id: 'alternate',
      title: 'ロバストPCAとの関係',
      content:
        'ロバストPCA（Robust PCA）は行列を\n' +
        '低ランク行列 + スパース行列に分解します。\n\n' +
        'M = L + S\n' +
        'L：低ランク（正常なパターン）\n' +
        'S：スパース（異常値・外れ値）\n\n' +
        'min |L|_* + λ|S|₁\n' +
        's.t. L + S = M\n\n' +
        '監視カメラ映像から背景（低ランク）と\n' +
        '前景の動体（スパース）を分離する応用があります。\n\n' +
        '行列補完とロバストPCAは\n' +
        '核ノルム最小化という共通の数学的基盤を持っています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：行列補完',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 行列補完は欠損値を低ランク性で推定\n' +
        '2. ランク最小化の凸緩和が核ノルム最小化\n' +
        '3. O(rn log²n) 個の観測で正確な復元が可能\n' +
        '4. ALS, SGD等の実用的アルゴリズム\n' +
        '5. ロバストPCAは低ランク+スパース分解\n\n' +
        '低ランク構造の発見は現代データ科学の中心テーマです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
