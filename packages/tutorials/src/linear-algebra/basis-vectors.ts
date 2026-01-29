import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const basisVectorsTutorial: Tutorial = {
  id: 'basis-vectors',
  title: '基底ベクトル',
  description: '標準基底ベクトル i, j, k を理解し、任意のベクトルが基底の線形結合であることを学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'coordinate-system',
      title: '座標系とは何か？',
      content:
        '空間の中で「位置」を表すには、基準が必要です。\n\n' +
        '日常生活で考えてみましょう。「駅から東に300m、北に200m」と言えば、場所を特定できます。' +
        'ここで「駅」が原点、「東」と「北」が方向の基準です。\n\n' +
        '3D空間でも同じです。原点（0, 0, 0）を基準にして、3つの方向（X, Y, Z）を決めれば、' +
        'あらゆる点の位置を3つの数字で表せます。これが座標系です。\n\n' +
        'では、この「方向の基準」とは何でしょうか？ それが次に学ぶ「基底ベクトル」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'why-basis',
      title: 'なぜ基底ベクトルが必要か？',
      content:
        '空間の中の任意の点を表現するには、「ものさし」と「方向」が必要です。\n\n' +
        '基底ベクトルは、各軸方向の「1目盛り分」の長さと方向を定義します。' +
        'ちょうど地図のスケールバーのようなものです。\n\n' +
        '3D空間では3つの独立した方向が必要です。なぜ3つかというと、' +
        '空間が3次元だからです。2つでは平面しか表せず、4つ目は最初の3つの組み合わせで作れてしまいます。\n\n' +
        '標準基底では、X軸・Y軸・Z軸の正の方向にそれぞれ長さ1のベクトルを置きます。' +
        'これらを i, j, k と呼びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'basis-i',
      title: '基底ベクトル i',
      content:
        'i = (1, 0, 0) はX軸方向の単位ベクトルです。\n\n' +
        '「単位」とは長さが1という意味です。このベクトルはX軸の正の方向を指し、' +
        '空間の「右方向」の基準になります。\n\n' +
        '座標 (3, 0, 0) は「iを3倍に伸ばしたもの」と解釈できます。' +
        '同様に (-2, 0, 0) は「iを反対方向に2倍伸ばしたもの」です。\n\n' +
        'つまり、i はX軸上のすべての点を表現するための「基本単位」なのです。' +
        '赤い矢印で表示されています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i = (1,0,0)',
            showComponents: true,
          },
        ],
        cameraPosition: [3, 2, 2],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'basis-j',
      title: '基底ベクトル j',
      content:
        'j = (0, 1, 0) はY軸方向の単位ベクトルです。\n\n' +
        'iが「右」の基準だとすれば、jは「上」（または「奥」）の基準です。' +
        'iとjは互いに垂直で、長さも同じ1です。\n\n' +
        '例えば (0, 4, 0) は「jを4倍に伸ばしたもの」です。' +
        'そして (3, 4, 0) は「iを3倍 + jを4倍」、つまり右に3、上に4進んだ地点です。\n\n' +
        '緑の矢印がjを表しています。iとjの2つだけで、XY平面上のすべての点が表現できます。',
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
            label: 'j = (0,1,0)',
            showComponents: true,
          },
        ],
        cameraPosition: [3, 2, 2],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'basis-k',
      title: '基底ベクトル k',
      content:
        'k = (0, 0, 1) はZ軸方向の単位ベクトルです。\n\n' +
        'kは空間の「高さ」方向の基準です。iとjだけでは平面しか表せませんでしたが、' +
        'kを加えることで3次元空間のすべての点にアクセスできるようになります。\n\n' +
        '例えば (0, 0, 5) は「kを5倍に伸ばした」地点です。' +
        '地上から5階分の高さ、とイメージするとわかりやすいかもしれません。\n\n' +
        '青い矢印がkです。これで3つの標準基底 i, j, k が揃いました。' +
        'この3本のベクトルが、3D空間の「座標のものさし」です。',
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
            label: 'k = (0,0,1)',
            showComponents: true,
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'linear-combination-concept',
      title: '線形結合という考え方',
      content:
        '「線形結合」とは、複数のベクトルをそれぞれスカラー倍して足し合わせることです。\n\n' +
        '具体的に考えましょう。ベクトル v = (2, 3, 1) があるとします。これは：\n\n' +
        '  v = 2 * i + 3 * j + 1 * k\n' +
        '    = 2 * (1,0,0) + 3 * (0,1,0) + 1 * (0,0,1)\n' +
        '    = (2,0,0) + (0,3,0) + (0,0,1)\n' +
        '    = (2, 3, 1)\n\n' +
        'つまり「右に2、上に3、手前に1」進むという意味です。' +
        '座標の各成分は、対応する基底ベクトルを何倍するかを示しているのです。',
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
        cameraPosition: [4, 4, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'linear-combination-visual',
      title: '線形結合を目で確認する',
      content:
        'v = (2, 3, 1) を実際に分解して見てみましょう。\n\n' +
        '赤い矢印: 2i = (2, 0, 0) ... X方向に2\n' +
        '緑の矢印: 3j = (0, 3, 0) ... Y方向に3\n' +
        '青い矢印: 1k = (0, 0, 1) ... Z方向に1\n\n' +
        'オレンジの矢印が、これらを足し合わせた結果 v = (2, 3, 1) です。\n\n' +
        '各成分の矢印を「積み重ねる」と、ちょうど v に到達することが確認できます。' +
        'どんなベクトルでも、この方法で i, j, k の組み合わせとして表現できるのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-2i',
            vector: Vector3.i().scale(2),
            color: '#ff4444',
            label: '2i = (2,0,0)',
            showComponents: true,
          },
          {
            id: 'vec-3j',
            vector: Vector3.j().scale(3),
            color: '#44ff44',
            label: '3j = (0,3,0)',
            showComponents: true,
          },
          {
            id: 'vec-1k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: '1k = (0,0,1)',
            showComponents: true,
          },
          {
            id: 'vec-v',
            vector: new Vector3(2, 3, 1),
            color: '#ffaa00',
            label: 'v = (2,3,1)',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'spanning',
      title: '「張る」とは？',
      content:
        '基底ベクトル i, j, k は3D空間を「張る」（span する）と言います。\n\n' +
        'これはどういう意味でしょうか？ i, j, k のスカラー倍と足し算だけで、' +
        '3D空間のあらゆる点 (x, y, z) に到達できるということです。\n\n' +
        '逆に言えば、i, j, k の線形結合では到達できない点は3D空間に存在しません。' +
        'これが「空間を張る」ことの意味です。\n\n' +
        '比喩で言えば、3本の基底ベクトルは「住所を書くための3つの軸」です。' +
        'どんな場所でも「X丁目Y番地Z階」のように3つの数字で表現できるのと同じです。\n\n' +
        'もし基底が2つしかなければ平面しか表現できず、空間全体を「張る」ことはできません。',
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
          {
            id: 'vec-example1',
            vector: new Vector3(1, 2, 1),
            color: '#ffaa00',
            label: '(1,2,1)',
          },
          {
            id: 'vec-example2',
            vector: new Vector3(-1, 1, 2),
            color: '#ff44ff',
            label: '(-1,1,2)',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'basis-summary',
      title: 'まとめ',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 座標系は「原点」と「方向の基準」から成り立つ\n' +
        '2. 基底ベクトル i, j, k は各軸方向の長さ1のベクトル\n' +
        '   - i = (1, 0, 0): X軸方向\n' +
        '   - j = (0, 1, 0): Y軸方向\n' +
        '   - k = (0, 0, 1): Z軸方向\n' +
        '3. 任意のベクトル (x, y, z) = x*i + y*j + z*k（線形結合）\n' +
        '4. i, j, k は3D空間を「張る」：すべての点に到達できる\n\n' +
        'この概念は線形代数の土台です。次の章では、基底ベクトルを「動かす」こと、' +
        'つまり線形変換について学びます。基底の行き先がわかれば、' +
        '空間全体の変換がわかるのです。',
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
