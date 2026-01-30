import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const vectorsIntroTutorial: Tutorial = {
  id: 'vectors-intro',
  title: 'ベクトルとは',
  description: 'ベクトルの概念を直感的に理解し、大きさと方向を持つ量としてのベクトルを学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '矢印が世界を動かす',
      content:
        '風が吹いています。どちらの方向に、どれくらいの強さで？\n\n' +
        'サッカーボールを蹴りました。どの方向に、どれくらいの力で？\n\n' +
        'これらすべてに共通するのは「方向」と「大きさ」の2つの情報です。' +
        '数学では、この2つの情報をひとまとめにした概念を「ベクトル」と呼びます。\n\n' +
        '画面の矢印を見てください。矢印の向きが「方向」、長さが「大きさ」を表しています。' +
        'ベクトルは、数学だけでなく物理学やコンピュータグラフィックスなど、' +
        'あらゆる分野の基礎となる重要な概念です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'intro-vec',
            vector: new Vector3(3, 2, 0),
            color: '#ff6644',
            label: 'ベクトル',
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
      title: 'ベクトルを動かしてみよう',
      content:
        'ベクトルは「始点」をどこに置いても同じベクトルです。\n\n' +
        '大切なのは「方向」と「大きさ」だけ。画面上のベクトルを観察してみましょう。' +
        '同じ方向、同じ長さの矢印は、位置が違っても同じベクトルを表しています。\n\n' +
        'これは「自由ベクトル」と呼ばれる考え方です。' +
        '風速3m/sの北風は、東京でも大阪でも同じ「ベクトル」なのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'free-vec-1',
            vector: new Vector3(2, 1, 0),
            color: '#ff6644',
            label: 'v',
          },
          {
            id: 'free-vec-2',
            vector: new Vector3(2, 1, 0),
            color: '#44aaff',
            label: 'v（同じベクトル）',
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
      title: '2次元のベクトル',
      content:
        '最もシンプルなベクトルは2次元ベクトルです。\n\n' +
        '例えば v = (3, 2) は「右に3、上に2」を意味します。\n' +
        '成分表示では、最初の数字がX方向（横）、次の数字がY方向（縦）です。\n\n' +
        'ベクトルの大きさ（長さ）は三平方の定理で計算できます：\n' +
        '|v| = √(3² + 2²) = √(9 + 4) = √13 ≈ 3.61\n\n' +
        'つまり v = (3, 2) は、長さ約3.61で、右上方向を指すベクトルです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-2d',
            vector: new Vector3(3, 2, 0),
            color: '#ff6644',
            label: 'v = (3, 2)',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '3次元のベクトル',
      content:
        '3次元ベクトルは3つの成分を持ちます。\n\n' +
        'w = (2, 3, 1) は「右に2、上に3、手前に1」です。\n\n' +
        '大きさは：|w| = √(2² + 3² + 1²) = √(4 + 9 + 1) = √14 ≈ 3.74\n\n' +
        '2次元から3次元への拡張はとても自然です。' +
        '成分が1つ増えるだけで、平面から空間へと世界が広がります。\n\n' +
        'さらに4次元、5次元、n次元のベクトルも考えられます。' +
        '目で見ることはできませんが、数学的には同じルールが適用されます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-3d',
            vector: new Vector3(2, 3, 1),
            color: '#44aaff',
            label: 'w = (2, 3, 1)',
            showComponents: true,
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：ベクトルの大きさ',
      content: 'ベクトルの基本を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ベクトル (4, 3, 0) の大きさはいくつですか？',
        options: [
          { id: 'a', label: '7', correct: false },
          { id: 'b', label: '5', correct: true },
          { id: 'c', label: '√7', correct: false },
          { id: 'd', label: '12', correct: false },
        ],
        explanation:
          '|v| = √(4² + 3²+ 0²) = √(16 + 9) = √25 = 5 です。有名な3-4-5の直角三角形ですね！',
      },
    },
    {
      id: 'alternate',
      title: 'ベクトルの別の見方：数のリスト',
      content:
        'ベクトルには「矢印」以外の見方もあります。\n\n' +
        'コンピュータサイエンスでは、ベクトルは「順序付きの数のリスト」です。\n' +
        '例えば、ある生徒のテスト成績 (数学: 85, 英語: 72, 理科: 90) も' +
        '3次元ベクトル (85, 72, 90) と見なせます。\n\n' +
        '機械学習では、画像の各ピクセルの色を並べた巨大なベクトルを扱います。' +
        '100×100ピクセルの画像は30000次元のベクトルです！\n\n' +
        '矢印としてのベクトルと、データとしてのベクトル。' +
        '両方の視点を持つことが、線形代数を深く理解するカギです。',
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
      title: 'まとめ：ベクトルとは',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. ベクトルは「方向」と「大きさ」を持つ量\n' +
        '2. 成分表示：(x, y) や (x, y, z) で表す\n' +
        '3. 大きさ：√(x² + y² + z²) で計算\n' +
        '4. 位置に依存しない（自由ベクトル）\n' +
        '5. 「矢印」としても「数のリスト」としても理解できる\n\n' +
        '次の章では、ベクトル同士の足し算を学びます。' +
        '2つの力を合わせるとどうなるか？ ベクトルの足し算が答えてくれます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'summary-vec',
            vector: new Vector3(3, 2, 0),
            color: '#ff6644',
            label: 'v = (3, 2)',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
