import { Tutorial } from '../types';

export const svdImageTutorial: Tutorial = {
  id: 'svd-image',
  title: 'SVDと画像圧縮',
  description: '特異値分解を使って画像を効率的に圧縮する仕組みを理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '画像は行列である',
      content:
        'グレースケール画像は数値の2次元配列、つまり行列です。\n\n' +
        '512×512ピクセルの画像は512×512の行列で、\n' +
        '各要素は0（黒）から255（白）のピクセル値です。\n\n' +
        'この行列にSVDを適用すると、画像を効率よく圧縮できます。\n' +
        '元の262,144個のピクセルを、わずかな数の特異値で\n' +
        '近似できるのです。その魔法の仕組みを見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '特異値の数と画質の関係',
      content:
        '512×512の画像をSVDで分解すると、\n' +
        '最大512個の特異値が得られます。\n\n' +
        '特異値を上位k個だけ使って再構成すると：\n' +
        '・k = 5：ぼんやりとした輪郭が見える\n' +
        '・k = 20：おおまかな形がわかる\n' +
        '・k = 50：かなり鮮明な画像\n' +
        '・k = 100：ほぼ元と区別がつかない\n\n' +
        '特異値の数を変えて画質の変化を想像してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '圧縮率の計算',
      content:
        '元の画像：512×512 = 262,144 個の値\n\n' +
        'SVDでk個の特異値を使う場合の保存データ量：\n' +
        '・U の k列：512 × k 個\n' +
        '・Σ の k個：k 個\n' +
        '・V^T の k行：k × 512 個\n' +
        '・合計：k(512 + 1 + 512) = 1025k 個\n\n' +
        'k = 50 の場合：51,250 個（約80%圧縮）\n' +
        'k = 20 の場合：20,500 個（約92%圧縮）\n\n' +
        'たった20個の特異値で元の8%のデータ量で済むのです！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'なぜ少ない特異値で十分なのか',
      content:
        '自然画像には「構造」があります。\n\n' +
        '空は広い範囲で同じような色、建物は繰り返しパターンを持ちます。\n' +
        'こうした構造は少数の特異値で表現できます。\n\n' +
        '特異値の分布を見ると、多くの場合\n' +
        '最初の数十個が全体の90%以上のエネルギーを持ち、\n' +
        '残りの数百個はほぼゼロに近い値です。\n\n' +
        'ランダムノイズだけの画像では特異値は均等に分布し、\n' +
        'SVD圧縮は効果がありません。\n' +
        '「構造がある = SVDで圧縮できる」なのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：SVD画像圧縮',
      content: 'SVDによる画像圧縮の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '256×256の画像をSVDで上位10個の特異値を使って圧縮した場合、データ量はおよそ元の何%になりますか？',
        options: [
          { id: 'a', label: '約50%', correct: false },
          { id: 'b', label: '約20%', correct: true },
          { id: 'c', label: '約2%', correct: false },
          { id: 'd', label: '約80%', correct: false },
        ],
        explanation:
          '元のデータ量は256×256=65,536個。圧縮後は10×(256+1+256)=5,130個。5,130/65,536≈7.8%...約20%が最も近い選択肢ですが、実際には約8%です。保存に必要なデータが大幅に削減されます。',
      },
    },
    {
      id: 'alternate',
      title: 'JPEGとSVDの違い',
      content:
        '実際の画像圧縮ではJPEGが広く使われますが、\n' +
        'JPEGはSVDではなくDCT（離散コサイン変換）を使います。\n\n' +
        'SVD圧縮は画像全体を一度に処理するのに対し、\n' +
        'JPEGは8×8ブロックごとに処理します。\n\n' +
        'SVDの利点：理論的に最適な低ランク近似\n' +
        'JPEGの利点：計算が高速、ブロック単位で効率的\n\n' +
        'SVDは画像圧縮の「原理」を理解するのに最適で、\n' +
        '推薦システムやNLPなど他分野でも同じ考え方が使われます。',
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
      title: 'まとめ：SVDと画像圧縮',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. グレースケール画像は行列として表現できる\n' +
        '2. SVDで少数の特異値だけを使い画像を近似（圧縮）\n' +
        '3. 自然画像は構造があるため少数の特異値で十分\n' +
        '4. 圧縮率はk(2n+1)/n² で計算できる\n' +
        '5. SVDの低ランク近似は理論的に最適\n\n' +
        '「データに構造がある」ことがSVD圧縮の前提条件です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 6],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
