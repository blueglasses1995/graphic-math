import { Tutorial } from '../types';

export const neuralNetMatrixTutorial: Tutorial = {
  id: 'neural-net-matrix',
  title: 'ニューラルネットと行列',
  description: 'ニューラルネットワークの計算が行列演算で表現できることを学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'AIの心臓部は行列演算',
      content:
        'ニューラルネットワークの各層は本質的に\n' +
        '行列の掛け算と活性化関数の組み合わせです。\n\n' +
        'y = f(Wx + b)\n\n' +
        'W：重み行列、x：入力、b：バイアス、f：活性化関数\n\n' +
        'ChatGPTのような大規模言語モデルは\n' +
        '何千億ものパラメータを持つ巨大な行列の\n' +
        '連鎖的な掛け算として動作しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '全結合層を行列で体感',
      content:
        '3入力→2出力の全結合層を考えます。\n\n' +
        'W = [[w₁₁,w₁₂,w₁₃],[w₂₁,w₂₂,w₂₃]]（2×3行列）\n' +
        'x = [x₁,x₂,x₃]^T（3次元ベクトル）\n' +
        'b = [b₁,b₂]^T（2次元バイアス）\n\n' +
        'y = Wx + b\n' +
        'y₁ = w₁₁x₁ + w₁₂x₂ + w₁₃x₃ + b₁\n' +
        'y₂ = w₂₁x₁ + w₂₂x₂ + w₂₃x₃ + b₂\n\n' +
        '行列の各行が一つのニューロンに対応し、\n' +
        '重み付き和を計算しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'バッチ処理と行列積',
      content:
        'N個の入力を同時に処理（バッチ処理）するとき、\n' +
        '入力を行列 X（N×d）として並べます。\n\n' +
        'Y = XW^T + B（各行が1つの入力に対応）\n\n' +
        'N=32, d=768, 出力=768 の場合：\n' +
        'X: 32×768、W: 768×768\n' +
        'Y = XW^T: 32×768\n\n' +
        '一つの行列積で32個の入力を同時に処理！\n' +
        'これがGPUの並列性と相まって高速な推論を実現します。\n\n' +
        'バッチサイズを大きくするほどGPU利用効率が上がります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'Transformerの注意機構',
      content:
        'Transformer（GPT等の基盤モデル）の核心は\n' +
        '自己注意（Self-Attention）機構です。\n\n' +
        'Q = XW_Q, K = XW_K, V = XW_V\n' +
        'Attention(Q,K,V) = softmax(QK^T/√d)V\n\n' +
        'すべて行列積で表現されています！\n\n' +
        'QK^T は「どの単語がどの単語に注目するか」の\n' +
        '注意スコア行列（T×T）を計算します。\n\n' +
        'T=1000トークンなら1000×1000の行列が\n' +
        '各層・各ヘッドで計算されます。\n' +
        '行列演算の効率がモデルの速度を左右します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：ニューラルネットと行列',
      content: 'ニューラルネットの行列表現を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '入力が5次元、出力が3次元の全結合層の重み行列Wのサイズは？',
        options: [
          { id: 'a', label: '5×5', correct: false },
          { id: 'b', label: '3×3', correct: false },
          { id: 'c', label: '3×5', correct: true },
          { id: 'd', label: '5×3', correct: false },
        ],
        explanation:
          'y = Wx で y が3次元、x が5次元なので、W は 3×5 行列です。各行が1つの出力ニューロンに対応し、5つの入力の重み付き和を計算します。',
      },
    },
    {
      id: 'alternate',
      title: '畳み込みも行列演算',
      content:
        '画像処理のCNN（畳み込みニューラルネット）も\n' +
        '実は行列演算に帰着できます。\n\n' +
        'im2col変換：画像のパッチを列として並べ、\n' +
        'カーネルを行として並べると、\n' +
        '畳み込みが行列積になります。\n\n' +
        'これにより、畳み込みをGPUの行列積ルーチン\n' +
        '（cuBLAS）で高速に実行できます。\n\n' +
        'どんなニューラルネットの演算も\n' +
        '最終的に行列演算に帰着される、\n' +
        'それが深層学習の数学的本質です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ニューラルネットと行列',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 全結合層は y = f(Wx + b) の行列演算\n' +
        '2. バッチ処理で複数入力を行列積で同時処理\n' +
        '3. TransformerのAttentionも行列積\n' +
        '4. 畳み込みもim2colで行列積に変換\n' +
        '5. AIの速度は行列演算の効率に依存\n\n' +
        '線形代数はAIの最も基本的な数学的基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
