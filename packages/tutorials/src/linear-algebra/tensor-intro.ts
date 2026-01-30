import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const tensorIntroTutorial: Tutorial = {
  id: 'tensor-intro',
  title: 'テンソルとは',
  description: 'スカラー・ベクトル・行列を一般化したテンソルの概念を理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'ベクトルと行列のその先',
      content:
        'スカラーは0階テンソル、ベクトルは1階テンソル、\n' +
        '行列は2階テンソルです。\n\n' +
        'では3階テンソル、4階テンソルとは？\n\n' +
        'テンソルは多次元配列として理解でき、\n' +
        '深層学習フレームワーク（PyTorch, TensorFlow）で\n' +
        '扱うデータは全てテンソルです。\n\n' +
        'カラー画像は3階テンソル（高さ×幅×チャンネル）、\n' +
        '動画は4階テンソル（時間×高さ×幅×チャンネル）です。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'tensor-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'テンソルの階数を体感',
      content:
        '各階のテンソルを具体例で見てみましょう。\n\n' +
        '0階（スカラー）：温度 25℃\n' +
        '1階（ベクトル）：風速 (3, -1, 0) m/s\n' +
        '2階（行列）：応力テンソル [[σxx,τxy],[τyx,σyy]]\n' +
        '3階：圧電テンソル dᵢⱼₖ\n' +
        '4階：弾性テンソル Cᵢⱼₖₗ\n\n' +
        '階数が上がるほどインデックスが増えます。\n' +
        'n階テンソルはn個のインデックスを持ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'tensor-intro-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'テンソルの演算',
      content:
        'テンソルには特有の演算があります。\n\n' +
        'テンソル積：A⊗B は階数が足し算される\n' +
        '例：ベクトル(1階) ⊗ ベクトル(1階) = 行列(2階)\n\n' +
        '縮約（contraction）：インデックスを1つ潰す\n' +
        '行列の積 C_ij = Σ_k A_ik B_kj は2つの2階テンソルを\n' +
        'kについて縮約しています。\n\n' +
        'アインシュタインの縮約記法では\n' +
        '繰り返し現れるインデックスは自動的に和を取ります。\n' +
        'C_ij = A_ik B_kj（Σを省略）',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '深層学習のテンソル',
      content:
        'PyTorchやTensorFlowで扱うテンソルの例：\n\n' +
        '・バッチ画像データ：(B, C, H, W) = 4階テンソル\n' +
        '  B=バッチ, C=チャンネル, H=高さ, W=幅\n\n' +
        '・畳み込みカーネル：(C_out, C_in, kH, kW) = 4階\n\n' +
        '・Transformerの注意行列：(B, H, T, T)\n' +
        '  B=バッチ, H=ヘッド数, T=系列長\n\n' +
        '深層学習はまさに「テンソル計算」であり、\n' +
        'GPUはテンソル演算の高速化に特化したハードウェアです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：テンソル',
      content: 'テンソルの基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'カラー画像（高さ×幅×RGB3チャンネル）は何階のテンソルですか？',
        options: [
          { id: 'a', label: '1階', correct: false },
          { id: 'b', label: '2階', correct: false },
          { id: 'c', label: '3階', correct: true },
          { id: 'd', label: '4階', correct: false },
        ],
        explanation:
          'カラー画像は3つのインデックス（高さ, 幅, チャンネル）を持つので3階テンソルです。バッチ処理で複数画像をまとめると4階になります。',
      },
    },
    {
      id: 'alternate',
      title: '物理学のテンソル',
      content:
        '物理学でのテンソルは「座標変換に対する変換規則」で定義されます。\n\n' +
        '共変テンソル：座標変換と同じ方向に変換\n' +
        '反変テンソル：座標変換と逆方向に変換\n\n' +
        '一般相対性理論の計量テンソル gμν は\n' +
        '時空の曲がり具合を表す2階テンソルです。\n\n' +
        'リーマン曲率テンソル Rμνρσ は4階テンソルで、\n' +
        '時空がどれだけ曲がっているかを記述します。\n\n' +
        'テンソルは座標系によらない物理法則を記述する言語です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：テンソルとは',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. テンソルはスカラー・ベクトル・行列の一般化\n' +
        '2. n階テンソルはn個のインデックスを持つ\n' +
        '3. テンソル積と縮約が基本演算\n' +
        '4. 深層学習のデータは全てテンソル\n' +
        '5. 物理学では座標変換の規則で定義\n\n' +
        'テンソルは現代科学とAIの共通言語です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'tensor-intro-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
