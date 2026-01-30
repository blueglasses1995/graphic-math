import { Tutorial } from '../types';

export const dijkstraAdvancedTutorial: Tutorial = {
  id: 'dijkstra-advanced',
  title: 'ダイクストラ法深化',
  description: 'ダイクストラ法の正当性証明と最適化手法を深く学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '最短経路の数学的保証',
      content:
        'カーナビが示す最短ルートは本当に最短でしょうか？\n\nダイクストラ法は「最短距離が確定した頂点から拡張する」ことで正しさを保証します。\n\nその正当性の数学的証明と、さらなる高速化を学びましょう。',
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
      title: '優先度付きキューで高速化',
      content:
        '基本ダイクストラ：O(V²)\n\n毎回「未確定で距離最小の頂点」を線形探索するためです。\n\n優先度付きキュー（二分ヒープ）を使うと：O((V+E) log V)\nフィボナッチヒープでは：O(E + V log V)\n\n探索の過程を操作してみましょう。',
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
      title: '正当性の証明',
      content:
        'ダイクストラ法の正当性を帰納法で証明します。\n\n帰納仮定：k番目に確定した頂点の距離は正しい\n帰納ステップ：k+1番目の頂点vについて\n・d[v]が最小 → 確定済み頂点のみを経由してvに到達\n・未確定頂点を経由するパスはd[v]以上（辺の重みが非負だから）\n\n重要：負の辺があるとこの議論が成り立たない！',
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
      title: 'ベルマン・フォード法との比較',
      content:
        '負の辺がある場合はベルマン・フォード法を使います。\n\nベルマン・フォード：\n・V-1回全辺を緩和（relax）\n・計算量 O(VE)\n・負閉路の検出も可能\n\nダイクストラ：高速だが非負辺限定\nベルマン・フォード：遅いが負辺に対応\n\n全頂点対はフロイド・ワーシャル O(V³) も選択肢です。',
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
      title: 'クイズ：ダイクストラ法',
      content: 'ダイクストラ法の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ダイクストラ法が正しく動作しない場合はどれですか？',
        options: [
          { id: 'a', label: '非連結グラフ', correct: false },
          { id: 'b', label: '負の重みの辺がある場合', correct: true },
          { id: 'c', label: '有向グラフ', correct: false },
          { id: 'd', label: '頂点数が多い場合', correct: false },
        ],
        explanation:
          '負の辺があると「確定した頂点の距離は最短」という前提が崩れます。この場合はベルマン・フォード法を使います。',
      },
    },
    {
      id: 'alternate',
      title: '双方向ダイクストラ',
      content:
        '始点と終点の両方からダイクストラを実行する最適化手法です。\n\n2つの探索が「出会う」と最短経路が見つかります。\n\n探索空間が約半分になり、実用的に大きな高速化になります。\n\nGoogleマップなどの実際の経路探索では、さらに前処理（コントラクションハイアラキー等）で高速化しています。',
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
      title: 'まとめ：ダイクストラ法深化',
      content:
        'ダイクストラ法の正当性と最適化を学びました。\n\n・帰納法による正当性証明\n・優先度付きキューで O((V+E) log V)\n・負辺には対応不可 → ベルマン・フォード\n・双方向探索や前処理で実用的に高速化\n\n最短経路アルゴリズムはCSの基盤であり、あらゆるナビゲーションに使われています。',
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
