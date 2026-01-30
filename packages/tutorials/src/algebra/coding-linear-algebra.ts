import { Tutorial } from '../types';

export const codingLinearAlgebraTutorial: Tutorial = {
  id: 'coding-linear-algebra',
  title: '符号理論と線形代数',
  description: '線形符号の代数的構造と誤り訂正の仕組みを学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'エラーを直す代数学',
      content:
        'CDの傷、通信ノイズ、宇宙からの信号。\nデータは常にエラーの危険にさらされています。\n\n符号理論は「余分な情報」を加えてエラーを検出・訂正します。\n\nその基盤は線形代数と有限体です。\nベクトル空間の構造がデータを守るのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ハミング符号を体験',
      content:
        'ハミング(7,4)符号: 4ビットのデータを7ビットに符号化。\n\n生成行列 G で符号化: c = mG\nパリティ検査行列 H で誤り検出: Hcᵀ = 0?\n\nシンドローム s = Hrᵀ ≠ 0 なら誤りあり。\nsの値から誤り位置が特定できます。\n\nデータを入力して符号化・誤り訂正を試しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '線形符号の定義',
      content:
        '[n, k, d] 線形符号 C:\n\n• F_q^n の k 次元部分空間\n• n: 符号語長、k: 情報ビット数、d: 最小距離\n• t = ⌊(d-1)/2⌋ 個の誤りを訂正可能\n\n生成行列: G (k×n) → 符号化 c = mG\nパリティ検査行列: H ((n-k)×n) → 検査 Hcᵀ = 0\n\nベクトル空間の部分空間が符号を定義します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '双対符号とシングルトン限界',
      content:
        '双対符号: C⊥ = {v ∈ F_q^n | v·c = 0, ∀c ∈ C}\n\nCが [n,k] 符号なら C⊥ は [n, n-k] 符号。\n\nシングルトン限界: d ≤ n - k + 1\n等号が成立する符号を MDS 符号と呼びます。\n\n例: リード・ソロモン符号は MDS 符号\n→ QRコードやCD/DVDで使用されています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '符号理論を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '最小距離 d = 5 の線形符号で訂正できる誤りの数は？',
        options: [
          { id: 'a', label: '1個', correct: false },
          { id: 'b', label: '2個', correct: true },
          { id: 'c', label: '3個', correct: false },
          { id: 'd', label: '5個', correct: false },
        ],
        explanation:
          't = ⌊(d-1)/2⌋ = ⌊(5-1)/2⌋ = 2 個の誤りを訂正できます。最小距離が大きいほど訂正能力が高くなります。',
      },
    },
    {
      id: 'alternate',
      title: 'リード・ソロモン符号',
      content:
        'リード・ソロモン符号は有限体上の多項式評価で構成:\n\nk-1次多項式 f(x) を n 点で評価:\nc = (f(α₁), f(α₂), ..., f(αₙ))\n\nMDS符号: d = n - k + 1（最大の訂正能力）\n\n応用:\n• QRコード: 汚れても読める\n• CD/DVD/Blu-ray: 傷があっても再生\n• 深宇宙通信: ボイジャー探査機\n\n有限体の代数が実用技術を支えています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：符号理論と線形代数',
      content:
        '符号理論と線形代数:\n\n• 線形符号 = 有限体上のベクトル空間の部分空間\n• 生成行列・パリティ検査行列で符号を記述\n• 最小距離が訂正能力を決定\n• リード・ソロモン符号: 多項式評価で最適な符号\n• QRコード等で広く実用化\n\n代数学が情報を守ります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
