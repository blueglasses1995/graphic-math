import { Tutorial } from '../types';

export const matrixComplexityTutorial: Tutorial = {
  id: 'matrix-complexity',
  title: '行列計算の計算量',
  description: '行列演算の計算量とアルゴリズムの効率性を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'なぜ計算量が重要か',
      content:
        'n×n行列の掛け算は素朴にはO(n³)回の演算が必要です。\n\n' +
        'n=1000なら10億回、n=10000なら1兆回の演算！\n\n' +
        '大規模なデータを扱う現代のアプリケーションでは\n' +
        '行列演算の効率化が性能のカギを握ります。\n\n' +
        'より少ない演算で同じ結果を得るアルゴリズムや、\n' +
        '行列の構造を活かした高速化手法を学びましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '基本演算の計算量を体感',
      content:
        'n×n行列の基本演算の計算量：\n\n' +
        '・行列加算：O(n²)\n' +
        '・行列×ベクトル：O(n²)\n' +
        '・行列×行列：O(n³)\n' +
        '・LU分解：O(n³/3)\n' +
        '・QR分解：O(2n³/3)\n' +
        '・固有値計算：O(n³)（反復法）\n' +
        '・SVD：O(n³)\n\n' +
        'n が2倍になると行列積は8倍の時間がかかります。\n' +
        'この壁をどう乗り越えるかが課題です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'シュトラッセンのアルゴリズム',
      content:
        '1969年、シュトラッセンは行列積を\n' +
        'O(n^2.807) で計算するアルゴリズムを発見しました。\n\n' +
        '通常の2×2行列積には8回の乗算が必要ですが、\n' +
        'シュトラッセン法では7回で済みます。\n\n' +
        'これを再帰的に適用することで計算量が改善します。\n\n' +
        '現在の最良アルゴリズムは O(n^2.37...) ですが、\n' +
        '定数が大きく実用的ではありません。\n' +
        '理論上の下限 O(n²) に到達できるかは未解決問題です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'キャッシュとBLAS',
      content:
        '理論的な計算量だけでなく、メモリアクセスパターンも重要です。\n\n' +
        'BLAS（Basic Linear Algebra Subprograms）は\n' +
        '行列演算の標準ライブラリで、\n' +
        'キャッシュ効率を最大化する実装がされています。\n\n' +
        'ブロック行列積：行列をブロックに分割し、\n' +
        'キャッシュに収まるサイズで計算します。\n' +
        '同じO(n³)でも実行時間が10倍以上変わります。\n\n' +
        'NumPy、MATLAB、Julia等はBLASを内部で利用しており、\n' +
        '自分でforループを書くよりはるかに高速です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：行列計算の計算量',
      content: '計算量の基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'n×n行列同士の積の素朴な計算量はどれですか？',
        options: [
          { id: 'a', label: 'O(n)', correct: false },
          { id: 'b', label: 'O(n²)', correct: false },
          { id: 'c', label: 'O(n³)', correct: true },
          { id: 'd', label: 'O(n⁴)', correct: false },
        ],
        explanation:
          '各要素の計算にn回の乗算と加算が必要で、n²個の要素があるため、合計O(n³)です。シュトラッセン法ではO(n^2.807)に改善できます。',
      },
    },
    {
      id: 'alternate',
      title: 'ランダム化アルゴリズム',
      content:
        '近年、ランダム化手法が注目されています。\n\n' +
        'ランダム化SVD：巨大な行列のSVDを\n' +
        '乱数を使って近似的に高速計算します。\n' +
        '計算量はO(mn log k)（m×n行列のランクk近似）\n\n' +
        'ランダム射影：高次元データを低次元に射影する際、\n' +
        'ランダムな行列を使うと距離がほぼ保存されます。\n' +
        '（Johnson-Lindenstrauss補題）\n\n' +
        '確率的な手法で「ほぼ正確」な結果を高速に得る\n' +
        'パラダイムが現代の大規模計算を支えています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：行列計算の計算量',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 行列積はO(n³)、LU分解はO(n³/3)\n' +
        '2. シュトラッセン法でO(n^2.807)に改善可能\n' +
        '3. BLASによるキャッシュ最適化が実用上重要\n' +
        '4. ランダム化手法で大規模計算を高速化\n' +
        '5. 理論と実装の両面からの効率化が必要\n\n' +
        '計算量を意識することがCSでの線形代数応用の第一歩です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
