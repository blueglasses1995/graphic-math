import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const laCsOverviewTutorial: Tutorial = {
  id: 'la-cs-overview',
  title: '線形代数とCSの全体像',
  description: 'コンピュータサイエンス全体における線形代数の役割を俯瞰する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'CSの至るところに線形代数',
      content:
        '60のチュートリアルを通じて、\n' +
        '線形代数がCSのあらゆる分野に浸透していることを\n' +
        '見てきました。\n\n' +
        '・AI/機械学習：行列演算が計算の中心\n' +
        '・コンピュータグラフィックス：変換行列\n' +
        '・データサイエンス：次元削減、推薦\n' +
        '・科学計算：連立方程式、最適化\n' +
        '・情報検索：PageRank、Word2Vec\n\n' +
        'ここでは全体像を振り返りましょう。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'la-cs-overview-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '学んだ概念の地図',
      content:
        '基礎概念（チュートリアル1-20）：\n' +
        '・ベクトル、行列、線形変換\n' +
        '・行列式、逆行列、連立方程式\n' +
        '・固有値、固有ベクトル\n' +
        '・基底変換、内積、外積\n\n' +
        '応用I（チュートリアル21-30）：\n' +
        '・幾何変換（回転、反射、せん断）\n' +
        '・最小二乗法、PCA、マルコフ連鎖\n\n' +
        '応用II（チュートリアル31-60）：\n' +
        '・行列分解（SVD, QR, LU）\n' +
        '・数値計算、AI、CG、データサイエンス',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'la-cs-overview-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'AI時代の線形代数',
      content:
        '現代AIの3本柱と線形代数：\n\n' +
        '1. 深層学習：\n' +
        '   全結合層 = 行列積、Attention = QK^T\n' +
        '   学習 = 勾配降下（ベクトル微分）\n\n' +
        '2. 自然言語処理：\n' +
        '   Word2Vec = 行列分解、Transformer = 行列積の連鎖\n\n' +
        '3. コンピュータビジョン：\n' +
        '   畳み込み = im2colで行列積\n' +
        '   画像生成 = 潜在空間（ベクトル空間）での操作\n\n' +
        'GPT-4の推論は本質的に巨大な行列の連鎖的な積です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '次のステップ',
      content:
        '線形代数の先に広がる数学：\n\n' +
        '・多様体学習（微分幾何）\n' +
        '  曲がった空間での線形代数\n\n' +
        '・凸最適化\n' +
        '  正定値行列、半正定値計画\n\n' +
        '・ランダム行列理論\n' +
        '  大規模データの統計的性質\n\n' +
        '・量子コンピューティング\n' +
        '  ユニタリ行列、テンソル積\n\n' +
        '・圏論（Category Theory）\n' +
        '  線形写像の抽象化\n\n' +
        'どの方向に進んでも、線形代数の基礎が活きます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：総まとめ',
      content: '全体の理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '線形代数がコンピュータサイエンスで最も基本的な数学である理由として最も適切なのは？',
        options: [
          { id: 'a', label: '計算が簡単だから', correct: false },
          { id: 'b', label: '行列演算がGPUで並列化でき、データの構造を自然に表現するから', correct: true },
          { id: 'c', label: '他の数学が不要になるから', correct: false },
          { id: 'd', label: '最も古い数学だから', correct: false },
        ],
        explanation:
          '線形代数はデータ（ベクトル）と変換（行列）を統一的に扱え、GPUで大規模並列計算が可能です。AI、CG、データサイエンスのすべてがこの性質を活用しています。',
      },
    },
    {
      id: 'alternate',
      title: '実践へのアドバイス',
      content:
        '線形代数を実務で使うためのアドバイス：\n\n' +
        '1. NumPy/PyTorchで手を動かす\n' +
        '   理論を実装に変換する練習\n\n' +
        '2. 可視化を活用する\n' +
        '   matplotlib, Three.jsで変換を見る\n\n' +
        '3. 計算量を意識する\n' +
        '   O(n²) vs O(n³)の違いは実務で致命的\n\n' +
        '4. 数値的安定性を考える\n' +
        '   条件数、丸め誤差に注意\n\n' +
        '5. 論文を読む\n' +
        '   最新のAI論文は行列表記で書かれている\n\n' +
        '理論と実践の両輪が、真の理解をもたらします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：線形代数とCSの全体像',
      content:
        '60のチュートリアルで学んだこと：\n\n' +
        '1. ベクトルと行列は数学の基本言語\n' +
        '2. 線形変換は行列で表現・合成できる\n' +
        '3. 固有値分解・SVDが行列の本質を明らかにする\n' +
        '4. 行列分解はデータ解析と計算の基盤\n' +
        '5. AI、CG、データサイエンスの全てに線形代数\n\n' +
        '線形代数はコンピュータサイエンスの\n' +
        '最も普遍的で強力な数学的ツールです。\n\n' +
        'この知識を武器に、さらなる学びの旅へ出発しましょう！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'la-cs-overview-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
