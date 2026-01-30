import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const imageTransformTutorial: Tutorial = {
  id: 'image-transform',
  title: '【実践】画像変換',
  description: '回転・拡大・せん断を組み合わせた画像変換の仕組みを理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '写真を自由自在に変形',
      content:
        'スマートフォンの写真編集。回転、拡大、傾き補正…\n\n' +
        'これらすべてが行列の掛け算1つで実現されています。\n\n' +
        '複数の変換を組み合わせても、最終的には1つの行列に' +
        'まとめられる。これが線形代数の力です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'img-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'img-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '変換を組み合わせよう',
      content:
        '画像を「2倍に拡大してから30度回転」するには：\n\n' +
        '拡大：S = [[2, 0], [0, 2]]\n' +
        '回転：R = [[cos30°, -sin30°], [sin30°, cos30°]]\n' +
        '      ≈ [[0.87, -0.5], [0.5, 0.87]]\n\n' +
        '合成：M = R × S = [[1.73, -1], [1, 1.73]]\n\n' +
        '1つの行列Mをすべてのピクセルに適用するだけで、' +
        '拡大と回転が同時に行われます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'combo-i',
            vector: new Vector3(1.73, 1, 0),
            color: '#ff4444',
            label: 'M × i',
          },
          {
            id: 'combo-j',
            vector: new Vector3(-1, 1.73, 0),
            color: '#44ff44',
            label: 'M × j',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'アフィン変換',
      content:
        '線形変換では原点は動きません。\n' +
        '画像を「平行移動」するにはアフィン変換が必要です。\n\n' +
        '3×3行列で2D変換+平行移動を表現：\n' +
        '[[a, b, tx], [c, d, ty], [0, 0, 1]]\n\n' +
        '(x, y, 1) → (ax+by+tx, cx+dy+ty, 1)\n\n' +
        '余分な「1」を追加することで、平行移動も行列の掛け算で扱えます。\n' +
        'これを「同次座標」と呼びます。CG業界の標準技法です。',
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
      id: 'example-2',
      title: 'SVD：究極の分解',
      content:
        '任意の行列は SVD（特異値分解）で分解できます：\n\n' +
        'M = UΣV*\n\n' +
        '意味：\n' +
        '1. V*：まず回転（or 鏡映）\n' +
        '2. Σ：軸方向に拡大縮小\n' +
        '3. U：もう一度回転（or 鏡映）\n\n' +
        'つまり、どんな複雑な変換も「回転→拡大→回転」に分解できます！\n\n' +
        '画像圧縮では、Σの小さい特異値を切り捨てることで、' +
        '情報を落としつつ画像を小さく保存できます。',
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
      title: 'クイズ：画像変換',
      content: '画像変換の知識を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '「2倍拡大してから90度回転」と「90度回転してから2倍拡大」の結果は？',
        options: [
          { id: 'a', label: '異なる結果になる', correct: false },
          { id: 'b', label: '同じ結果になる', correct: true },
          { id: 'c', label: '計算できない', correct: false },
          { id: 'd', label: '片方は定義されない', correct: false },
        ],
        explanation:
          'スカラー行列（cI）は全ての行列と可換です。2倍拡大 = 2I なので、R(2I) = (2I)R = 2R。順序に関わらず結果は同じです。',
      },
    },
    {
      id: 'alternate',
      title: 'GPUと行列演算',
      content:
        'ゲームやCGでは毎秒数百万の頂点を変換します。\n\n' +
        'GPU（グラフィックスプロセッサ）は行列演算に特化したハードウェアです。\n' +
        '数千の演算ユニットが並列に行列の掛け算を実行します。\n\n' +
        '4×4行列（3D変換 + 透視投影）が基本単位で、\n' +
        'モデル変換 → ビュー変換 → 投影変換 を順に適用します。\n\n' +
        '線形代数なしにはコンピュータグラフィックスは存在し得ません。\n' +
        'そしてこれが、近年のAI計算にもGPUが使われる理由です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：画像変換',
      content:
        'この章のポイント：\n\n' +
        '1. 画像変換 = 行列の掛け算\n' +
        '2. 複数変換の合成 = 行列の積\n' +
        '3. アフィン変換：同次座標で平行移動も行列化\n' +
        '4. SVD：任意の変換 = 回転→拡大→回転\n' +
        '5. GPUが行列演算を高速実行\n\n' +
        '次は連立方程式の幾何学を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-i',
            vector: new Vector3(1.73, 1, 0),
            color: '#ff4444',
            label: '変換後i',
          },
          {
            id: 'sum-j',
            vector: new Vector3(-1, 1.73, 0),
            color: '#44ff44',
            label: '変換後j',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
