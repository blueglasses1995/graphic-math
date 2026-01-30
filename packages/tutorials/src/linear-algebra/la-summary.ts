import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const laSummaryTutorial: Tutorial = {
  id: 'la-summary',
  title: '線形代数の全体像',
  description: '線形代数の基礎概念を俯瞰し、各概念の関係を理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'すべてがつながる',
      content:
        'ベクトル、行列、行列式、固有値…たくさんの概念を学んできました。\n\n' +
        'これらは実はすべて「線形変換」という1つのテーマでつながっています。\n\n' +
        '行列 = 変換の記述\n' +
        '行列式 = 変換の「伸縮率」\n' +
        '固有値 = 変換の「本質的な伸縮」\n' +
        '逆行列 = 変換の「巻き戻し」\n\n' +
        'すべてが1つの物語を構成しているのです。',
      customScene: 'la-summary-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'overview-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'overview-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'overview-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ベクトルと空間',
      content:
        '線形代数の主役はベクトルです。\n\n' +
        '・ベクトル：方向と大きさを持つ量（矢印 or 数のリスト）\n' +
        '・足し算とスカラー倍：ベクトル空間の2つの基本操作\n' +
        '・線形結合とスパン：操作で到達できる空間\n' +
        '・線形独立：冗長でないベクトルの集合\n' +
        '・基底：空間を張る線形独立なベクトルの集合\n' +
        '・次元：基底のベクトル数\n\n' +
        'これらが「舞台」を作ります。',
      customScene: 'la-summary-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'space-v1',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: 'v₁',
          },
          {
            id: 'space-v2',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'v₂',
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '行列と変換',
      content:
        '行列は線形変換を「数値化」したものです。\n\n' +
        '・線形変換：直線を直線に、原点を原点に保つ\n' +
        '・行列の列 = 基底ベクトルの行き先\n' +
        '・行列積 = 変換の合成\n' +
        '・逆行列 = 変換の巻き戻し\n' +
        '・行列式 = 面積/体積の変化率\n\n' +
        '行列式 > 0：向き保存\n' +
        '行列式 < 0：向き反転\n' +
        '行列式 = 0：次元が潰れる（情報の損失）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '固有値と固有ベクトル',
      content:
        '変換の「本質」を捉える概念です。\n\n' +
        '固有ベクトル：変換しても方向が変わらないベクトル\n' +
        '固有値：そのベクトルがどれだけ伸縮するか\n\n' +
        'Av = λv\n\n' +
        '固有値分解により：\n' +
        '・行列の累乗が簡単になる\n' +
        '・安定性の解析ができる\n' +
        '・データの主成分がわかる（PCA）\n\n' +
        '固有値は行列の「性格」を表す数値です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：総合理解',
      content: '線形代数の全体像を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '行列Aについて det(A) = 0 のとき、正しくないのはどれですか？',
        options: [
          { id: 'a', label: '列ベクトルが線形従属', correct: false },
          { id: 'b', label: '逆行列が存在しない', correct: false },
          { id: 'c', label: 'Ax = b が常に解を持つ', correct: true },
          { id: 'd', label: '零空間が非自明', correct: false },
        ],
        explanation:
          'det(A) = 0 では逆行列が存在せず、Ax = b は b によって解なし or 無数の解になります。「常に解を持つ」は誤りです。',
      },
    },
    {
      id: 'alternate',
      title: '応用の広がり',
      content:
        '線形代数は純粋数学を超えて、あらゆる分野で活躍します。\n\n' +
        '・コンピュータグラフィックス：3D描画、アニメーション\n' +
        '・機械学習：ニューラルネットワーク、PCA\n' +
        '・物理学：量子力学、相対性理論\n' +
        '・経済学：入出力分析、ポートフォリオ最適化\n' +
        '・工学：制御理論、信号処理\n' +
        '・データサイエンス：推薦システム、画像圧縮\n\n' +
        '「線形」な構造が見えるところ、すべてが線形代数の応用領域です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：線形代数の全体像',
      content:
        '線形代数の基礎概念マップ：\n\n' +
        '【空間の構造】\n' +
        'ベクトル → 線形結合 → スパン → 基底 → 次元\n\n' +
        '【変換の記述】\n' +
        '線形変換 → 行列 → 行列積 → 逆行列\n\n' +
        '【変換の性質】\n' +
        '行列式 → ランク → 列空間・零空間\n\n' +
        '【変換の本質】\n' +
        '固有値 → 固有ベクトル → 対角化\n\n' +
        'おめでとうございます！ これで基礎編は完了です。\n' +
        '実践編で、具体的な応用を体験しましょう。',
      customScene: 'la-summary-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'final-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'final-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'final-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
