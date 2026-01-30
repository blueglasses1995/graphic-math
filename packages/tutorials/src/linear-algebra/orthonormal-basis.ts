import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const orthonormalBasisTutorial: Tutorial = {
  id: 'orthonormal-basis',
  title: '正規直交基底',
  description: '互いに直交し長さ1のベクトルからなる基底の重要性と構成法を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '最も扱いやすい基底',
      content:
        '基底には色々な選び方がありますが、\n' +
        '計算が最も楽になる基底があります。\n\n' +
        'それが正規直交基底（Orthonormal Basis）です。\n' +
        '各ベクトルの長さが1で、互いに垂直。\n\n' +
        '標準基底 e₁=(1,0,0), e₂=(0,1,0), e₃=(0,0,1) は\n' +
        '最も馴染みのある正規直交基底です。\n' +
        'なぜこの性質が便利なのか見ていきましょう。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'orthonormal-basis-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '直交基底の座標を体感',
      content:
        '正規直交基底 {q₁, q₂} があるとき、\n' +
        '任意のベクトル v の座標は内積で簡単に求まります。\n\n' +
        'v = (v·q₁)q₁ + (v·q₂)q₂\n\n' +
        '逆行列を計算する必要がありません！\n' +
        '内積を取るだけで座標が出るのです。\n\n' +
        'これが正規直交基底の最大の利点です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'orthonormal-basis-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'グラム・シュミットの直交化法',
      content:
        '任意の基底から正規直交基底を作る方法が\n' +
        'グラム・シュミットの直交化法です。\n\n' +
        '手順（2次元の場合）：\n' +
        '1. q₁ = v₁ / |v₁|（最初のベクトルを正規化）\n' +
        '2. v₂からq₁方向の成分を引く：w₂ = v₂ - (v₂·q₁)q₁\n' +
        '3. q₂ = w₂ / |w₂|（正規化）\n\n' +
        '例：v₁=(3,1), v₂=(2,2) から\n' +
        'q₁ = (3,1)/√10, w₂ = (2,2) - (8/√10)(3,1)/√10\n' +
        'として直交基底が得られます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '直交行列の性質',
      content:
        '正規直交基底を列に並べた行列 Q を直交行列といいます。\n\n' +
        '直交行列の素晴らしい性質：\n' +
        '・Q^T Q = I（転置が逆行列）\n' +
        '・|Qx| = |x|（長さを保存）\n' +
        '・det(Q) = ±1\n\n' +
        '回転行列と反射行列は直交行列の代表例です。\n\n' +
        '逆行列の計算が転置だけで済むため、\n' +
        '数値計算で非常に効率的です。\n' +
        'さらに数値的に安定で誤差が蓄積しにくい利点もあります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：正規直交基底',
      content: '正規直交基底の性質を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '直交行列Qの逆行列Q⁻¹はどれに等しいですか？',
        options: [
          { id: 'a', label: 'Q自身', correct: false },
          { id: 'b', label: 'Qの転置 Q^T', correct: true },
          { id: 'c', label: '単位行列 I', correct: false },
          { id: 'd', label: '-Q', correct: false },
        ],
        explanation:
          '直交行列の定義より Q^T Q = I が成り立つので、Q⁻¹ = Q^T です。転置するだけで逆行列が得られるのは計算上非常に便利です。',
      },
    },
    {
      id: 'alternate',
      title: 'フーリエ基底も正規直交',
      content:
        '三角関数 sin(nx), cos(nx) は実は正規直交基底を形成します。\n\n' +
        'フーリエ級数では任意の周期関数を\n' +
        'sin と cos の和として表しますが、\n' +
        'これは関数空間での正規直交基底への射影です。\n\n' +
        'フーリエ係数 aₙ = ∫f(x)cos(nx)dx は\n' +
        '内積 f·cos(nx) に他なりません。\n\n' +
        '有限次元の正規直交基底と全く同じ原理が\n' +
        '無限次元の関数空間でも成り立つのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：正規直交基底',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 正規直交基底：各ベクトルが長さ1で互いに直交\n' +
        '2. 座標計算が内積だけで可能（逆行列不要）\n' +
        '3. グラム・シュミット法で任意の基底から構成できる\n' +
        '4. 直交行列の逆行列は転置（Q⁻¹ = Q^T）\n' +
        '5. フーリエ解析など幅広い分野の基礎\n\n' +
        '正規直交基底は数値計算の安定性にも貢献します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'orthonormal-basis-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
