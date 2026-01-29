import { Vector3, Matrix3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const eigenvaluesTutorial: Tutorial = {
  id: 'eigenvalues',
  title: '固有値と固有ベクトル',
  description: '線形変換で方向が変わらないベクトル（固有ベクトル）と、その伸縮率（固有値）を理解する',
  category: 'linear-algebra',
  prerequisites: ['basis-vectors', 'linear-transforms', 'matrix-meaning'],
  steps: [
    {
      id: 'eigen-motivation',
      title: 'なぜ「特別な方向」があるのか？',
      content:
        '線形変換を適用すると、ほとんどのベクトルは方向も長さも変わります。\n\n' +
        'しかし、稀に「方向が変わらない」特別なベクトルが存在します。' +
        '変換しても同じ直線上に留まり、伸びるか縮むだけ。\n\n' +
        'なぜそんなベクトルが重要なのでしょうか？\n\n' +
        '例えば、地震の揺れを分析するとき。建物は複雑に揺れますが、' +
        'ある特定の方向に分解すると、各方向は単純な伸び縮みだけになります。' +
        'その「特定の方向」が固有ベクトルであり、伸び縮みの倍率が固有値です。\n\n' +
        '固有ベクトルを見つければ、複雑な変換を「各方向の伸縮」に分解できるのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-sample',
            vector: new Vector3(1, 1, 0),
            color: '#ffaa00',
            label: 'v',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'eigen-concrete-stretch',
      title: '具体例: X方向に伸ばす変換',
      content:
        'まず分かりやすい例から始めましょう。X方向に2倍に伸ばす変換です。\n\n' +
        '行列: M = | 2  0  0 |\n' +
        '          | 0  1  0 |\n' +
        '          | 0  0  1 |\n\n' +
        'いくつかのベクトルが変換でどうなるか見てみましょう：\n\n' +
        '  (1, 0, 0) → (2, 0, 0)  ... 同じ方向に2倍（方向は同じ！）\n' +
        '  (0, 1, 0) → (0, 1, 0)  ... まったく変化なし（方向は同じ！）\n' +
        '  (1, 1, 0) → (2, 1, 0)  ... 方向が変わった！（元は45°、変換後は約27°）\n\n' +
        '(1,0,0) は方向が変わらず2倍に伸びました。(0,1,0) は方向も長さも不変。' +
        '(1,1,0) は方向が変わりました。\n\n' +
        '方向が変わらなかったベクトルが「固有ベクトル」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-eigen-x',
            vector: Vector3.i(),
            color: '#ff4444',
            label: '(1,0,0) → (2,0,0)',
            showComponents: true,
          },
          {
            id: 'vec-eigen-y',
            vector: Vector3.j(),
            color: '#44ff44',
            label: '(0,1,0) → (0,1,0)',
            showComponents: true,
          },
          {
            id: 'vec-non-eigen',
            vector: new Vector3(1, 1, 0),
            color: '#ffaa00',
            label: '(1,1,0) → (2,1,0)',
            showComponents: true,
          },
        ],
        transform: new Matrix3([2, 0, 0, 0, 1, 0, 0, 0, 1]),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'eigen-equation',
      title: '固有値方程式 Av = λv',
      content:
        '固有ベクトルと固有値の関係を数式で表しましょう。\n\n' +
        '行列 A による変換で、ベクトル v の方向が変わらないとき：\n\n' +
        '  Av = λv\n\n' +
        '左辺「Av」は変換後のベクトル。右辺「λv」は元のベクトルのλ倍。\n' +
        'つまり「変換した結果 = 元のベクトルを何倍かしたもの」という意味です。\n\n' +
        '先ほどの例で確認：\n' +
        '  M * (1,0,0) = (2,0,0) = 2 * (1,0,0)  → λ = 2\n' +
        '  M * (0,1,0) = (0,1,0) = 1 * (0,1,0)  → λ = 1\n' +
        '  M * (0,0,1) = (0,0,1) = 1 * (0,0,1)  → λ = 1\n\n' +
        'v が固有ベクトル、λ が固有値です。' +
        'この行列の固有値は 2, 1, 1 の3つです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'v₁: λ = 2',
            showComponents: true,
          },
          {
            id: 'eigen-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'v₂: λ = 1',
            showComponents: true,
          },
          {
            id: 'eigen-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'v₃: λ = 1',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'eigen-scale-all',
      title: 'スケーリングの固有ベクトル',
      content:
        '各軸方向に異なるスケーリングをする行列を見てみましょう。\n\n' +
        '  M = | 2  0  0 |\n' +
        '      | 0  3  0 |\n' +
        '      | 0  0  1 |\n\n' +
        '変換前 → 変換後：\n' +
        '  i = (1,0,0) → (2,0,0) = 2*i  ... 固有ベクトル、固有値 λ = 2\n' +
        '  j = (0,1,0) → (0,3,0) = 3*j  ... 固有ベクトル、固有値 λ = 3\n' +
        '  k = (0,0,1) → (0,0,1) = 1*k  ... 固有ベクトル、固有値 λ = 1\n\n' +
        'スケーリング行列では、各軸方向がすべて固有ベクトルになります。' +
        'これは直感的にも当然で、軸方向のベクトルは伸び縮みするだけで方向は変わりません。\n\n' +
        '固有値は各方向の伸縮率そのものです。λ=2は「2倍に伸びる」、λ=3は「3倍に伸びる」。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'λ=2',
            showComponents: true,
          },
          {
            id: 'eigen-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'λ=3',
            showComponents: true,
          },
          {
            id: 'eigen-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'λ=1',
          },
        ],
        transform: new Matrix3([2, 0, 0, 0, 3, 0, 0, 0, 1]),
        animateTransform: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'eigen-rotation-example',
      title: '回転の固有ベクトル（2D）',
      content:
        '回転変換はどうでしょうか？ Z軸周りに90度回転させてみます。\n\n' +
        '  R = | 0  -1  0 |\n' +
        '      | 1   0  0 |\n' +
        '      | 0   0  1 |\n\n' +
        '2D平面（XY平面）上のベクトルを考えると：\n' +
        '  (1, 0, 0) → (0, 1, 0)  ... 方向が変わった！固有ベクトルではない\n' +
        '  (0, 1, 0) → (-1, 0, 0)  ... 方向が変わった！固有ベクトルではない\n' +
        '  (1, 1, 0) → (-1, 1, 0)  ... 方向が変わった！\n\n' +
        'XY平面内には固有ベクトルが存在しません。\n' +
        '回転ではすべての方向が回ってしまうので、「方向が変わらない」ベクトルがないのです。\n\n' +
        'ただし、k = (0, 0, 1) は固有ベクトルです（固有値 λ = 1）。' +
        '回転軸の方向は回転しても動かないからです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i → (0,1,0)',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j → (-1,0,0)',
          },
          {
            id: 'eigen-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k = 固有ベクトル (λ=1)',
          },
        ],
        transform: new Matrix3([0, -1, 0, 1, 0, 0, 0, 0, 1]),
        animateTransform: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'eigen-shear-example',
      title: 'せん断の固有ベクトル',
      content:
        'せん断変換も見てみましょう。\n\n' +
        '  S = | 1  1  0 |\n' +
        '      | 0  1  0 |\n' +
        '      | 0  0  1 |\n\n' +
        '変換前 → 変換後：\n' +
        '  i = (1,0,0) → (1,0,0) = 1*(1,0,0)  ... 方向不変！固有ベクトル（λ=1）\n' +
        '  j = (0,1,0) → (1,1,0)  ... 方向が変わった！\n' +
        '  (1,1,0) → (2,1,0)  ... 方向が変わった！\n\n' +
        'X軸方向 (1,0,0) だけが固有ベクトルです。固有値は1（大きさも不変）。\n\n' +
        'なぜ i だけが特別なのか？ この「せん断」は「Y座標に比例してX方向にずらす」変換です。' +
        'Y成分が0のベクトル、つまりX軸上のベクトルだけは、ずらされる分がゼロなので動かないのです。\n\n' +
        '黄色のベクトルがせん断で方向が変わる様子を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-vec',
            vector: Vector3.i(),
            color: '#ff4444',
            label: '固有ベクトル (λ=1)',
          },
          {
            id: 'non-eigen',
            vector: new Vector3(0, 1, 0),
            color: '#ffaa00',
            label: 'j → (1,1,0) 方向が変化',
          },
        ],
        transform: new Matrix3([1, 1, 0, 0, 1, 0, 0, 0, 1]),
        animateTransform: true,
        highlightElements: ['eigenvector'],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'eigen-geometric-meaning',
      title: '固有値の幾何学的意味',
      content:
        '固有値 λ の値によって、固有ベクトル方向に何が起きるかが決まります。\n\n' +
        '  λ > 1: その方向に伸びる\n' +
        '    例: λ = 2 → 2倍に引き伸ばされる\n\n' +
        '  0 < λ < 1: その方向に縮む\n' +
        '    例: λ = 0.5 → 半分に縮む\n\n' +
        '  λ = 1: その方向は完全に不変\n\n' +
        '  λ = 0: その方向が潰れる（原点に吸い込まれる）\n\n' +
        '  λ < 0: その方向が反転する（鏡像のように）\n' +
        '    例: λ = -1 → 向きが逆になるが長さは同じ\n\n' +
        'この行列では (1,1,0) 方向が λ = 2（伸びる）、' +
        '(1,-1,0) 方向が λ = 0.5（縮む）です。\n' +
        '斜め方向に伸び縮みする様子を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-stretch',
            vector: new Vector3(1, 1, 0).normalize(),
            color: '#ff4444',
            label: 'λ=2 (伸びる)',
            showComponents: true,
          },
          {
            id: 'eigen-shrink',
            vector: new Vector3(1, -1, 0).normalize(),
            color: '#44aaff',
            label: 'λ=0.5 (縮む)',
            showComponents: true,
          },
        ],
        transform: Matrix3.fromColumns(
          new Vector3(1.25, 0.75, 0),
          new Vector3(0.75, 1.25, 0),
          Vector3.k()
        ),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'eigen-why-important',
      title: 'なぜ固有値が重要なのか？',
      content:
        '固有値と固有ベクトルは、変換の「本質」を明らかにします。\n\n' +
        '複雑な行列も、固有ベクトルの方向から見れば「各方向の伸縮」に分解できます。' +
        'これは変換を理解する最も深い方法です。\n\n' +
        '応用例：\n\n' +
        '  物理学: 振動する物体の「固有振動モード」を見つける\n' +
        '    → 複雑な振動を単純な振動の重ね合わせに分解\n\n' +
        '  データ分析（主成分分析・PCA）: データのばらつきが最大の方向を見つける\n' +
        '    → 高次元データの本質的な構造を抽出\n\n' +
        '  機械学習: ニューラルネットワークの最適化で勾配の方向を理解\n\n' +
        '  Google PageRank: ウェブページの重要度を固有ベクトルで計算\n\n' +
        'どの分野でも「変換の本質的な方向と強度」を知ることが鍵なのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-1',
            vector: new Vector3(1, 1, 0).normalize(),
            color: '#ff4444',
            label: '固有ベクトル 1',
          },
          {
            id: 'eigen-2',
            vector: new Vector3(1, -1, 0).normalize(),
            color: '#44aaff',
            label: '固有ベクトル 2',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'eigen-summary',
      title: 'まとめ',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 固有ベクトル: 変換しても方向が変わらない特別なベクトル\n' +
        '   - Av = λv が成り立つ v のこと\n\n' +
        '2. 固有値 λ: その方向の伸縮率\n' +
        '   - λ > 1: 伸びる、0 < λ < 1: 縮む、λ < 0: 反転\n\n' +
        '3. 変換の種類と固有ベクトル：\n' +
        '   - スケーリング: 各軸方向がすべて固有ベクトル\n' +
        '   - 回転: 回転軸方向のみが固有ベクトル（2D回転には実数固有ベクトルなし）\n' +
        '   - せん断: 「ずれない」方向が固有ベクトル\n\n' +
        '4. 固有値は変換の「本質」を表し、物理、データ分析、機械学習で広く活用される\n\n' +
        '固有ベクトルで見れば、どんな変換も「各方向の伸縮」に過ぎません。' +
        'これが線形代数の最も深い洞察のひとつです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'eigen-1',
            vector: new Vector3(1, 1, 0).normalize(),
            color: '#ff4444',
            label: '固有ベクトル 1',
          },
          {
            id: 'eigen-2',
            vector: new Vector3(1, -1, 0).normalize(),
            color: '#44aaff',
            label: '固有ベクトル 2',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
  ],
};
