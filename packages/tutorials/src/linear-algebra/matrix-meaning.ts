import { Vector3, Matrix3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const matrixMeaningTutorial: Tutorial = {
  id: 'matrix-meaning',
  title: '行列の意味',
  description: '行列の各列が基底ベクトルの行き先を表すことを理解する',
  category: 'linear-algebra',
  prerequisites: ['basis-vectors', 'linear-transforms'],
  steps: [
    {
      id: 'matrix-is-transformation',
      title: '行列 = 変換を数字で書いたもの',
      content:
        '行列とは何でしょうか？ 一見すると数字が並んだ表ですが、' +
        '本質は「線形変換を数字で記録したもの」です。\n\n' +
        '前の章で学んだように、線形変換は基底ベクトルの行き先で完全に決まります。' +
        '行列は、まさにその「行き先」を書き記す道具なのです。\n\n' +
        '3x3行列には9個の数字が入りますが、これは3つの基底ベクトル i, j, k の' +
        '行き先（各3成分）を並べたものです。\n\n' +
        '行列を見たら「どんな変換か？」と考える習慣をつけましょう。' +
        '数字の羅列ではなく、空間を変形させる「指令書」として読むのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'matrix-identity',
      title: '単位行列：何もしない変換',
      content:
        'まず最も単純な行列、単位行列 I を見ましょう。\n\n' +
        '  I = | 1  0  0 |\n' +
        '      | 0  1  0 |\n' +
        '      | 0  0  1 |\n\n' +
        '各列を読み取ります：\n' +
        '  第1列 (1,0,0) = i の行き先 → i はそのまま i に留まる\n' +
        '  第2列 (0,1,0) = j の行き先 → j はそのまま j に留まる\n' +
        '  第3列 (0,0,1) = k の行き先 → k はそのまま k に留まる\n\n' +
        'すべての基底ベクトルが元の位置に留まるので、空間は何も変化しません。' +
        'だから「単位」行列と呼ぶのです。掛け算の「1」のようなものです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i → (1,0,0)',
            showComponents: true,
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j → (0,1,0)',
            showComponents: true,
          },
          {
            id: 'vec-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k → (0,0,1)',
            showComponents: true,
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'matrix-columns-read',
      title: '列を読む: スケーリング行列',
      content:
        '次にこの行列を「列で読む」練習をしましょう。\n\n' +
        '  M = | 2  0  0 |\n' +
        '      | 0  1  0 |\n' +
        '      | 0  0  1 |\n\n' +
        '各列は基底ベクトルの行き先です：\n' +
        '  第1列 (2,0,0): i = (1,0,0) → i\' = (2,0,0)  ... X方向に2倍\n' +
        '  第2列 (0,1,0): j = (0,1,0) → j\' = (0,1,0)  ... 変化なし\n' +
        '  第3列 (0,0,1): k = (0,0,1) → k\' = (0,0,1)  ... 変化なし\n\n' +
        'i だけが2倍に伸び、j と k は動かない。' +
        'つまりこれは「X方向に2倍のスケーリング」です。\n\n' +
        '行列の数字を見ただけで、変換の意味がわかるようになりましたね！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i-dest',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: "i' = (2,0,0)",
            showComponents: true,
          },
          {
            id: 'vec-j-dest',
            vector: Vector3.j(),
            color: '#44ff44',
            label: "j' = (0,1,0)",
          },
          {
            id: 'vec-k-dest',
            vector: Vector3.k(),
            color: '#4444ff',
            label: "k' = (0,0,1)",
          },
        ],
        transform: new Matrix3([2, 0, 0, 0, 1, 0, 0, 0, 1]),
        animateTransform: true,
        highlightElements: ['column-1'],
        cameraPosition: [3, 3, 3],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'matrix-rotation-90',
      title: '回転行列を列で読む',
      content:
        'Z軸周りに90度回転する行列を見てみましょう。\n\n' +
        '  R = | 0  -1  0 |\n' +
        '      | 1   0  0 |\n' +
        '      | 0   0  1 |\n\n' +
        '各列を読みます：\n' +
        '  第1列 (0,1,0): i = (1,0,0) が (0,1,0) に移動\n' +
        '    → 右を向いていた i が、上を向く j の位置に移動した！\n\n' +
        '  第2列 (-1,0,0): j = (0,1,0) が (-1,0,0) に移動\n' +
        '    → 上を向いていた j が、左を向く -i の位置に移動した！\n\n' +
        '  第3列 (0,0,1): k = (0,0,1) は (0,0,1) のまま\n' +
        '    → k は変わらない（Z軸周りの回転なので当然）\n\n' +
        'i → j の位置、j → -i の位置。確かに反時計回りに90度回転していますね！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i-dest',
            vector: new Vector3(0, 1, 0),
            color: '#ff4444',
            label: "i' = (0,1,0)",
            showComponents: true,
          },
          {
            id: 'vec-j-dest',
            vector: new Vector3(-1, 0, 0),
            color: '#44ff44',
            label: "j' = (-1,0,0)",
            showComponents: true,
          },
          {
            id: 'vec-k-dest',
            vector: Vector3.k(),
            color: '#4444ff',
            label: "k' = (0,0,1)",
          },
        ],
        transform: new Matrix3([0, -1, 0, 1, 0, 0, 0, 0, 1]),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'matrix-vector-multiply-concept',
      title: '行列×ベクトルの意味',
      content:
        '行列とベクトルの掛け算は、実は「変換を適用する」ことです。\n\n' +
        'ベクトル v = (1, 2, 0) を考えます。' +
        'これは v = 1*i + 2*j + 0*k という線形結合でした。\n\n' +
        '変換後、基底の行き先がわかっているとします：\n' +
        '  i → i\'、j → j\'、k → k\'\n\n' +
        'すると変換後のベクトルは：\n' +
        '  v\' = 1*i\' + 2*j\' + 0*k\'\n\n' +
        'つまり「元の組み合わせ比率はそのまま、基底だけ新しいものに差し替える」のです！\n\n' +
        'これが行列×ベクトル = 変換の正体です。' +
        '行列の各列（新しい基底）を、ベクトルの各成分で重み付けして足すだけ。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-v',
            vector: new Vector3(1, 2, 0),
            color: '#ffaa00',
            label: 'v = 1i + 2j',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'matrix-vector-multiply-example',
      title: '行列×ベクトルを計算してみよう',
      content:
        '90度回転行列 R に v = (1, 2, 0) を掛けてみましょう。\n\n' +
        '  R = | 0  -1  0 |     v = | 1 |\n' +
        '      | 1   0  0 |         | 2 |\n' +
        '      | 0   0  1 |         | 0 |\n\n' +
        '手順:\n' +
        '  v = 1*i + 2*j + 0*k\n\n' +
        '  変換後の i\' = (0, 1, 0)、j\' = (-1, 0, 0)、k\' = (0, 0, 1) なので：\n\n' +
        '  v\' = 1*(0,1,0) + 2*(-1,0,0) + 0*(0,0,1)\n' +
        '     = (0,1,0) + (-2,0,0) + (0,0,0)\n' +
        '     = (-2, 1, 0)\n\n' +
        '確認: v = (1,2,0) が v\' = (-2,1,0) に移動。' +
        '元は右上を向いていたベクトルが、左上を向くようになりました。' +
        '確かに反時計回りに90度回転しています！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-v-before',
            vector: new Vector3(1, 2, 0),
            color: '#ffaa00',
            label: 'v = (1,2,0)',
            showComponents: true,
          },
          {
            id: 'vec-v-after',
            vector: new Vector3(-2, 1, 0),
            color: '#ff44ff',
            label: "v' = (-2,1,0)",
            showComponents: true,
          },
        ],
        transform: new Matrix3([0, -1, 0, 1, 0, 0, 0, 0, 1]),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'matrix-determinant-concept',
      title: '行列式：面積の変化率',
      content:
        '行列にはもうひとつ大切な情報が隠れています。「行列式」（determinant）です。\n\n' +
        '行列式は、変換による面積（3Dでは体積）の変化率を表します。\n\n' +
        '具体例で見てみましょう：\n\n' +
        '  スケーリング行列 | 2  0  0 | の行列式 = 2*1*1 = 2\n' +
        '                   | 0  1  0 |\n' +
        '                   | 0  0  1 |\n' +
        '  → 面積が2倍になる（X方向に2倍伸びるので）\n\n' +
        '  回転行列 | 0  -1  0 | の行列式 = 1\n' +
        '           | 1   0  0 |\n' +
        '           | 0   0  1 |\n' +
        '  → 面積は変わらない（回転は形を保つので）\n\n' +
        '行列式 = 0 なら、空間がぺしゃんこに潰れます（次元が下がる）。' +
        '行列式 < 0 なら、空間の「向き」が反転します（鏡像のように裏返る）。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'matrix-general-example',
      title: '応用: 複合的な行列を読む',
      content:
        '最後に、少し複雑な行列を読んでみましょう。\n\n' +
        '  M = | 1    -0.5  0 |\n' +
        '      | 0.5   1    0 |\n' +
        '      | 0     0    1 |\n\n' +
        '各列を読みます：\n' +
        '  i = (1,0,0) → (1, 0.5, 0)  ... 少し上にずれた\n' +
        '  j = (0,1,0) → (-0.5, 1, 0)  ... 少し左にずれた\n' +
        '  k = (0,0,1) → (0, 0, 1)  ... 変化なし\n\n' +
        'これは「少し回転 + 少しせん断」が混ざったような変換です。' +
        'グリッドが少し傾いて変形する様子を観察してください。\n\n' +
        '行列を列で読む力がつけば、どんな行列でも変換の意味を直感的に理解できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        transform: Matrix3.fromColumns(
          new Vector3(1, 0.5, 0),
          new Vector3(-0.5, 1, 0),
          Vector3.k()
        ),
        animateTransform: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'matrix-summary',
      title: 'まとめ: 行列を視覚的に理解する',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 行列は「線形変換を数字で記録したもの」\n' +
        '2. 各列 = 基底ベクトルの行き先\n' +
        '   - 第1列 = i の行き先\n' +
        '   - 第2列 = j の行き先\n' +
        '   - 第3列 = k の行き先\n' +
        '3. 行列×ベクトル = 変換の適用\n' +
        '   - v = ai + bj + ck → v\' = a*i\' + b*j\' + c*k\'\n' +
        '   - 比率はそのまま、基底だけ差し替え\n' +
        '4. 行列式 = 面積（体積）の変化率\n' +
        '   - det = 0: 空間が潰れる\n' +
        '   - det < 0: 向きが反転\n\n' +
        '行列を見たら、まず列を読む。' +
        '列を読めば変換が見える。変換が見えれば行列がわかる。' +
        'これが線形代数の核心です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
  ],
};
