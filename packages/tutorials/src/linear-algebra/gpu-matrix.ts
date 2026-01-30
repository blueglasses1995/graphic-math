import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const gpuMatrixTutorial: Tutorial = {
  id: 'gpu-matrix',
  title: 'GPUと行列演算',
  description: 'GPUが行列演算を高速に処理する仕組みとその応用を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'なぜGPUは行列計算が速いのか',
      content:
        'CPUは数コアで逐次的に処理しますが、\n' +
        'GPUは数千コアで並列に処理します。\n\n' +
        '行列演算は各要素を独立に計算できるため、\n' +
        'GPUの並列処理と相性が抜群です。\n\n' +
        'NVIDIA A100 GPUは行列演算で\n' +
        '毎秒312兆回の浮動小数点演算が可能。\n' +
        'これが深層学習の爆発的進化を支えています。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'gpu-matrix-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'GPU並列処理を体感',
      content:
        'n×n行列積 C = AB を考えます。\n\n' +
        'CPU（逐次）：n²個の要素を1つずつ計算\n' +
        '→ O(n³) ステップ\n\n' +
        'GPU（並列）：n²個の要素を同時に計算\n' +
        '→ 各スレッドがO(n)の内積を計算\n' +
        '→ 理想的にはO(n)ステップ\n\n' +
        '実際にはメモリ転送やスレッド管理のオーバーヘッドがありますが、\n' +
        '大きな行列では100倍以上の高速化が得られます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'gpu-matrix-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'Tensorコア',
      content:
        '最新のGPUにはTensorコアと呼ばれる\n' +
        '行列演算専用ハードウェアが搭載されています。\n\n' +
        'Tensorコアは4×4行列の積和演算（D = AB + C）を\n' +
        '1クロックで実行できます。\n\n' +
        '半精度（FP16）や混合精度演算を使うことで\n' +
        'さらに2〜4倍の高速化が可能です。\n\n' +
        '深層学習では完全な精度は不要なことが多く、\n' +
        '低精度演算でも学習結果にほぼ影響しません。\n' +
        'これが実用的に大きな高速化をもたらします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'CUDA/cuBLASの世界',
      content:
        'NVIDIAのCUDAプラットフォームと\n' +
        'cuBLASライブラリが行列演算の標準です。\n\n' +
        'PyTorch: tensor.cuda() でGPUに転送\n' +
        'torch.matmul(A, B) で自動的にcuBLASを使用\n\n' +
        '注意点：\n' +
        '・GPU⇔CPUのデータ転送は遅い\n' +
        '・小さな行列ではGPUのオーバーヘッドが大きい\n' +
        '・メモリ容量に制限がある（A100で80GB）\n\n' +
        '大きなバッチ処理でGPUの真価が発揮されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：GPUと行列演算',
      content: 'GPUの行列計算を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'GPUが行列演算に適している主な理由は何ですか？',
        options: [
          { id: 'a', label: 'クロック周波数がCPUより高い', correct: false },
          { id: 'b', label: '数千のコアで並列計算できる', correct: true },
          { id: 'c', label: 'メモリ容量がCPUより大きい', correct: false },
          { id: 'd', label: '消費電力が少ない', correct: false },
        ],
        explanation:
          'GPUの最大の強みは数千のコアによる大規模並列計算です。行列演算は各要素を独立に計算でき、並列処理に最適です。クロック周波数はCPUの方が高いことが多いです。',
      },
    },
    {
      id: 'alternate',
      title: 'TPUと専用チップ',
      content:
        'GoogleのTPU（Tensor Processing Unit）は\n' +
        '行列演算にさらに特化した専用チップです。\n\n' +
        'TPUはシストリックアレイと呼ばれる構造で\n' +
        '128×128や256×256の行列積を効率的に実行します。\n\n' +
        'Apple Neural Engine、Intel Habana等も\n' +
        '行列演算に最適化された専用ハードウェアです。\n\n' +
        '線形代数（行列演算）の効率的な実行は\n' +
        '半導体設計の主要な設計目標になっており、\n' +
        '「行列計算がコンピュータの未来を形作る」と言えます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：GPUと行列演算',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. GPUは数千コアで行列演算を並列処理\n' +
        '2. Tensorコアが行列積を専用ハードウェアで高速化\n' +
        '3. 低精度演算でさらなる高速化が可能\n' +
        '4. CUDA/cuBLASが行列計算の標準プラットフォーム\n' +
        '5. TPU等の専用チップも進化中\n\n' +
        '行列演算のハードウェア最適化がAIの発展を支えています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'gpu-matrix-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
