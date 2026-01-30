import { Tutorial } from '../types';

export const eigenvalueNumericalTutorial: Tutorial = {
  id: 'eigenvalue-numerical',
  title: '固有値の数値計算',
  description: '固有値を実際にコンピュータで計算するアルゴリズムを学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '特性多項式は使えない',
      content:
        '固有値は det(A-λI)=0 で定義されますが、\n' +
        '実際の数値計算では特性多項式を使いません。\n\n' +
        '理由：n次多項式の根の計算は数値的に不安定で、\n' +
        '小さな係数の誤差が固有値に大きな誤差を生みます。\n\n' +
        'ウィルキンソンの例：20次多項式の係数を10⁻⁷変えるだけで\n' +
        '根が大きく移動してしまいます。\n\n' +
        'では実際にはどうやって固有値を計算するのでしょうか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '冪乗法を体感',
      content:
        '最大固有値を求める最も簡単な方法が冪乗法です。\n\n' +
        'アルゴリズム：\n' +
        '1. ランダムなベクトル v₀ から開始\n' +
        '2. vₖ₊₁ = Avₖ / |Avₖ| を繰り返す\n' +
        '3. vₖは最大固有値の固有ベクトルに収束\n' +
        '4. 固有値 ≈ vₖ^T A vₖ / vₖ^T vₖ\n\n' +
        '収束速度は |λ₂/λ₁| に依存します。\n' +
        'λ₁とλ₂が近いと収束が遅くなります。\n\n' +
        'Google PageRankは本質的にこの冪乗法です！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'QRアルゴリズム',
      content:
        '全固有値を求める標準的な方法がQRアルゴリズムです。\n\n' +
        '1. A₀ = A\n' +
        '2. Aₖ = QₖRₖ（QR分解）\n' +
        '3. Aₖ₊₁ = RₖQₖ\n' +
        '4. 繰り返すとAₖが上三角（or対角）行列に収束\n\n' +
        '改良：\n' +
        '・シフト付きQR法：収束を加速\n' +
        '  μ = Aₖの右下要素に近い値\n' +
        '  Aₖ - μI = QₖRₖ, Aₖ₊₁ = RₖQₖ + μI\n\n' +
        '・事前にヘッセンベルグ形に変換して\n' +
        '  各QR分解をO(n²)に高速化',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '大規模行列の固有値',
      content:
        '巨大な疎行列では全固有値を求めるのは非現実的で、\n' +
        '上位k個の固有値だけが必要な場合がほとんどです。\n\n' +
        'ランチョス法（対称行列）：\n' +
        'クリロフ部分空間を使い、小さな三重対角行列の\n' +
        '固有値問題に帰着します。\n\n' +
        'アーノルディ法（非対称行列）：\n' +
        'ランチョス法の一般化。\n\n' +
        '計算量は O(kn)（k:求める固有値数、n:行列サイズ）\n' +
        '100万×100万の行列でも上位10固有値は現実的に計算可能です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：固有値の数値計算',
      content: '数値計算手法を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '固有値の数値計算で特性多項式を使わない主な理由は？',
        options: [
          { id: 'a', label: '計算が遅いから', correct: false },
          { id: 'b', label: '多項式の根の計算が数値的に不安定だから', correct: true },
          { id: 'c', label: '特性多項式が存在しない場合があるから', correct: false },
          { id: 'd', label: 'プログラムが複雑になるから', correct: false },
        ],
        explanation:
          '多項式の係数のわずかな誤差が根に大きな誤差を生む「悪条件性」があるため、特性多項式経由の固有値計算は数値的に不安定です。QR法等の直接的な行列操作が使われます。',
      },
    },
    {
      id: 'alternate',
      title: '逆反復法',
      content:
        '近似固有値 μ が既知のとき、\n' +
        '対応する固有ベクトルを高速に求める方法が逆反復法です。\n\n' +
        'vₖ₊₁ = (A - μI)⁻¹vₖ / |(A - μI)⁻¹vₖ|\n\n' +
        'μに最も近い固有値の固有ベクトルに急速に収束します。\n' +
        '収束速度は |λᵢ - μ|/|λⱼ - μ| に依存し、\n' +
        'μが正確なら1回の反復でほぼ収束します。\n\n' +
        '実際にはLU分解を使って効率的に計算し、\n' +
        'QRアルゴリズムで固有値を求めた後の\n' +
        '固有ベクトル計算に使われます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：固有値の数値計算',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 特性多項式は数値的に不安定で使わない\n' +
        '2. 冪乗法は最大固有値を簡単に求める\n' +
        '3. QRアルゴリズムが全固有値計算の標準\n' +
        '4. ランチョス/アーノルディ法で大規模疎行列に対応\n' +
        '5. 逆反復法で固有ベクトルを高速計算\n\n' +
        '数値線形代数は理論と実装の両面の知識が重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
