import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const pagerankAdvancedTutorial: Tutorial = {
  id: 'pagerank-advanced',
  title: 'PageRank深化',
  description: 'PageRankの数学的構造と収束性を深く理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'PageRankの数学を深掘り',
      content:
        'PageRankの基本は前のチュートリアルで学びました。\n' +
        'ここではその数学的構造をより深く理解します。\n\n' +
        'Google行列 G = αS + (1-α)(1/n)ee^T\n\n' +
        'S：確率的隣接行列（列和=1）\n' +
        'α：減衰因子（通常0.85）\n' +
        'e：全成分1のベクトル\n\n' +
        'このGは確率行列（列和=1、要素≥0）であり\n' +
        'ペロン・フロベニウスの定理が適用できます。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'pagerank-advanced-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ペロン・フロベニウスの定理',
      content:
        '正行列（全要素>0）の重要な性質：\n\n' +
        'ペロン・フロベニウスの定理：\n' +
        '1. 最大固有値は正の実数（ペロン根）\n' +
        '2. 対応する固有ベクトルの成分はすべて正\n' +
        '3. この固有値は単純（重複しない）\n\n' +
        'Google行列は正行列なので、\n' +
        'PageRankベクトル（最大固有値の固有ベクトル）は\n' +
        '一意に存在し、すべての成分が正です。\n\n' +
        'つまり全てのページに正のランクが付きます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'pagerank-advanced-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '収束速度の解析',
      content:
        '冪乗法の収束速度は第2固有値で決まります。\n\n' +
        'Google行列の場合：\n' +
        'λ₁ = 1（最大固有値）\n' +
        '|λ₂| ≤ α（第2固有値の絶対値）\n\n' +
        'α = 0.85 のとき、|λ₂| ≤ 0.85\n' +
        'k回反復後の誤差 ≈ 0.85^k\n\n' +
        '50回の反復で 0.85^50 ≈ 0.00003\n' +
        '十分な精度が得られます。\n\n' +
        '数十億ページのWebでも50〜100回の反復で\n' +
        'PageRankが計算できるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ダングリングノードの処理',
      content:
        '外向きリンクがないページ（ダングリングノード）は\n' +
        '確率行列の列和が0になる問題があります。\n\n' +
        '解決策：ダングリングノードから全ページに\n' +
        '均等にリンクがあると仮定します。\n\n' +
        'S = H + a(1/n)e^T\n' +
        'H：元のハイパーリンク行列\n' +
        'a：ダングリングノードのインジケータベクトル\n\n' +
        'さらにテレポーテーション（ランダムジャンプ）を加えて\n' +
        'G = αS + (1-α)(1/n)ee^T\n\n' +
        'これで全ての数学的性質が保証されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：PageRank深化',
      content: 'PageRankの数学を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '減衰因子α=0.85のとき、冪乗法の収束速度を支配する|λ₂|の上界は？',
        options: [
          { id: 'a', label: '0.15', correct: false },
          { id: 'b', label: '0.85', correct: true },
          { id: 'c', label: '1.0', correct: false },
          { id: 'd', label: '0.5', correct: false },
        ],
        explanation:
          'Google行列の第2固有値の絶対値は |λ₂| ≤ α = 0.85 で抑えられます。αが小さいほど収束は速くなりますが、ランキングの品質とのトレードオフがあります。',
      },
    },
    {
      id: 'alternate',
      title: 'PersonalizedPageRank',
      content:
        'パーソナライズドPageRankはテレポーテーション先を\n' +
        '均等ではなくユーザーの好みに応じて設定します。\n\n' +
        'π = αSπ + (1-α)v\n' +
        'v：パーソナライズベクトル（好みのページに大きな値）\n\n' +
        'これにより各ユーザーに異なるPageRankが計算され、\n' +
        'Twitterの「おすすめユーザー」や\n' +
        'Pinterestの画像推薦に使われています。\n\n' +
        'グラフニューラルネットワーク（GNN）の\n' +
        'メッセージパッシングもPageRankの一般化と見なせます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：PageRank深化',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. Google行列は正行列でペロン・フロベニウスの定理が適用\n' +
        '2. PageRankベクトルは一意で全成分正\n' +
        '3. 収束速度は|λ₂|≤αで保証される\n' +
        '4. ダングリングノードの数学的処理\n' +
        '5. パーソナライズドPageRankで個別推薦\n\n' +
        '線形代数の理論が検索エンジンの品質を支えています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'pagerank-advanced-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
