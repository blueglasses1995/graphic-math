import { Tutorial } from '../types';

export const graphLaplacianTutorial: Tutorial = {
  id: 'graph-laplacian',
  title: 'グラフラプラシアン',
  description: 'グラフ構造を行列で表現するラプラシアンの性質と応用を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'グラフの振動を行列で表す',
      content:
        'ネットワーク（グラフ）の構造を行列で表現する\n' +
        '最も重要な方法がグラフラプラシアンです。\n\n' +
        'L = D - A\n' +
        'D：次数行列（対角に各ノードの次数）\n' +
        'A：隣接行列\n\n' +
        'ラプラシアンの固有値はグラフの\n' +
        '「連結性」「クラスタ構造」「拡散速度」を表し、\n' +
        'スペクトラルクラスタリングやGNNの基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ラプラシアンの固有値を体感',
      content:
        '簡単なグラフの例（4頂点のパスグラフ 1-2-3-4）：\n\n' +
        'A = [[0,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,0]]\n' +
        'D = diag(1,2,2,1)\n' +
        'L = D-A = [[1,-1,0,0],[-1,2,-1,0],[0,-1,2,-1],[0,0,-1,1]]\n\n' +
        'Lの性質：\n' +
        '・対称半正定値\n' +
        '・各行の和 = 0（最小固有値λ₁=0）\n' +
        '・λ₁=0の固有ベクトル = (1,1,1,1)\n' +
        '・0の固有値の重複度 = 連結成分の数',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'スペクトラルクラスタリング',
      content:
        'グラフラプラシアンの固有ベクトルを使って\n' +
        'グラフを自然にクラスタ分割できます。\n\n' +
        'アルゴリズム：\n' +
        '1. 正規化ラプラシアン L_norm = D^(-1/2)LD^(-1/2) を計算\n' +
        '2. 最小のk個の固有ベクトルを求める\n' +
        '3. 固有ベクトルを行に並べた行列でk-meansクラスタリング\n\n' +
        'フィードラーベクトル（λ₂の固有ベクトル）は\n' +
        'グラフの2分割を与えます。\n' +
        '正の成分と負の成分でノードを分けるのです。\n\n' +
        '画像セグメンテーションにも応用されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'グラフ信号処理',
      content:
        'グラフ上の信号（各ノードの値）にフーリエ変換を拡張できます。\n\n' +
        'グラフフーリエ変換：f̂ = U^T f\n' +
        'U：ラプラシアンの固有ベクトル行列\n\n' +
        '固有値が小さい → 「低周波」（滑らかな変化）\n' +
        '固有値が大きい → 「高周波」（急激な変化）\n\n' +
        'グラフ畳み込み：\n' +
        'h * f = U diag(ĥ) U^T f\n\n' +
        'これがGraph Convolutional Network（GCN）の\n' +
        '理論的基盤です。ラプラシアンの多項式で\n' +
        '効率的にグラフ畳み込みが計算できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：グラフラプラシアン',
      content: 'ラプラシアンの性質を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'グラフラプラシアンの最小固有値0の重複度は何を意味しますか？',
        options: [
          { id: 'a', label: 'グラフの辺の数', correct: false },
          { id: 'b', label: 'グラフの連結成分の数', correct: true },
          { id: 'c', label: 'グラフの直径', correct: false },
          { id: 'd', label: 'グラフの最大次数', correct: false },
        ],
        explanation:
          '固有値0の重複度はグラフの連結成分の数に等しいです。連結グラフではλ₁=0は単純（重複度1）で、非連結なら分離した部分の数だけ0の固有値があります。',
      },
    },
    {
      id: 'alternate',
      title: 'チーガー不等式',
      content:
        'チーガー不等式はグラフの「ボトルネック」と\n' +
        'ラプラシアンの第2固有値λ₂を結びつけます。\n\n' +
        'h²/2 ≤ λ₂ ≤ 2h\n\n' +
        'h：チーガー定数（グラフの最小カット比率）\n\n' +
        'λ₂が小さい → グラフに強いボトルネックがある\n' +
        'λ₂が大きい → グラフは良く連結されている\n\n' +
        'ランダムウォークの混合時間もλ₂で評価でき、\n' +
        'λ₂が大きいほどランダムウォークは速く混合します。\n\n' +
        'グラフの構造がスペクトル（固有値）に反映される\n' +
        '美しい対応関係です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：グラフラプラシアン',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. グラフラプラシアン L = D - A は半正定値対称行列\n' +
        '2. 固有値0の重複度 = 連結成分数\n' +
        '3. スペクトラルクラスタリングで自然な分割\n' +
        '4. グラフフーリエ変換でGCNの理論を構築\n' +
        '5. チーガー不等式でグラフの連結性を評価\n\n' +
        'グラフラプラシアンはネットワーク解析の中心です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
