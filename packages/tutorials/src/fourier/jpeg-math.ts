import { Tutorial } from '../types';

export const jpegMathTutorial: Tutorial = {
  id: 'jpeg-math',
  title: 'JPEG圧縮の数学',
  description: 'JPEG画像圧縮におけるDCT（離散コサイン変換）の役割を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '画像を100分の1に縮める',
      content:
        'デジタルカメラの写真は数十MBですが、\nJPEGに圧縮すると数百KB〜数MBに。\n\nこの驚異的な圧縮を可能にしているのが\nDCT（離散コサイン変換）です。\n\n人間の目が気づかない情報を数学的に除去します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'jpeg-math-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '圧縮品質を調整',
      content:
        '圧縮品質を変えて、画像の劣化とファイルサイズの関係を確認しましょう。\n\n品質を下げるほどDCT係数が多く切り捨てられます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'jpeg-math-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'quality', min: 1, max: 100, step: 1, initial: 75 },
          { name: 'blockX', min: 0, max: 7, step: 1, initial: 0 },
          { name: 'blockY', min: 0, max: 7, step: 1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'JPEG圧縮の手順',
      content:
        'JPEG圧縮の流れ:\n\n1. 色空間変換: RGB → YCbCr\n   Y: 輝度（人間の目が敏感）\n   Cb, Cr: 色差（あまり敏感でない）\n\n2. ブロック分割: 8×8ピクセルのブロックに分割\n\n3. DCT: 各ブロックに2D-DCTを適用\n   空間 → 周波数の変換\n\n4. 量子化: DCT係数を粗く丸める\n   高周波成分ほど大きく丸める → 情報損失\n\n5. エントロピー符号化: ハフマン符号で圧縮',
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
      title: 'DCTの数学',
      content:
        '8×8ブロックの2D-DCT:\n\nF(u,v) = (1/4) C(u)C(v) Σₓ Σᵧ f(x,y)\n  · cos((2x+1)uπ/16) · cos((2y+1)vπ/16)\n\nC(k) = 1/√2 (k=0), 1 (k≠0)\n\nF(0,0): DC成分（ブロックの平均輝度）\nF(u,v): 周波数(u,v)の成分\n\n自然画像ではエネルギーが低周波に集中するため、\n高周波のDCT係数はゼロに近く、量子化で削除できます。',
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
      title: '予測してみよう',
      content: 'JPEG圧縮について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'JPEG圧縮で画質が劣化する主な原因は？',
        options: [
          { id: 'a', label: 'DCT自体の誤差', correct: false },
          { id: 'b', label: 'DCT係数の量子化による情報損失', correct: true },
          { id: 'c', label: 'ブロック分割による情報損失', correct: false },
          { id: 'd', label: '色空間変換の誤差', correct: false },
        ],
        explanation:
          'DCT自体は可逆変換で情報は失われません。画質劣化の主因はDCT係数の量子化（丸め）です。特に高周波係数の量子化ステップが大きく、ここで情報が失われます。',
      },
    },
    {
      id: 'alternate',
      title: 'JPEG 2000とウェーブレット',
      content:
        'JPEG 2000はDCTの代わりにウェーブレット変換を使います。\n\n利点:\n1. ブロックノイズが出ない（全体にウェーブレットを適用）\n2. 低ビットレートでの画質が優秀\n3. スケーラブル圧縮（段階的復号可能）\n4. ロスレス圧縮もサポート\n\nただし計算量が多く、JPEGほど普及していません。\n\n医療画像（DICOM）や映画（Digital Cinema）では\nJPEG 2000が標準的に使われています。',
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
      title: 'まとめ：JPEG圧縮の数学',
      content:
        'JPEG圧縮はDCTで画像を周波数成分に分解し、人間の目に不要な成分を除去します。\n\n圧縮品質を変えてDCT係数の変化を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'jpeg-math-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'quality', min: 1, max: 100, step: 1, initial: 50 },
          { name: 'showDCT', min: 0, max: 1, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
