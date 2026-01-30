import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const threeDimensionsTutorial: Tutorial = {
  id: 'three-dimensions',
  title: '3Dへの拡張',
  description: '2次元の概念を3次元に拡張し、3D空間の線形代数を理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '平面から空間へ',
      content:
        'ここまで2Dで学んできた概念。それが3Dでもそのまま使えるのが' +
        '線形代数の美しいところです。\n\n' +
        '2×2行列 → 3×3行列\n' +
        '2Dベクトル → 3Dベクトル\n' +
        '面積の変化 → 体積の変化\n\n' +
        '次元が1つ増えるだけで、世界は劇的に豊かになります。',
      customScene: 'three-dimensions-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: '3d-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: '3d-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: '3d-k',
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
      title: '3D空間を探索しよう',
      content:
        '3D空間には3つの基底ベクトルがあります。\n\n' +
        'i = (1, 0, 0) → X軸（右）\n' +
        'j = (0, 1, 0) → Y軸（上）\n' +
        'k = (0, 0, 1) → Z軸（手前）\n\n' +
        '任意のベクトル v = (a, b, c) = ai + bj + ck\n\n' +
        '3Dでの線形変換は3×3行列で表されます。\n' +
        '各列は i, j, k がそれぞれどこに移るかを示します。',
      customScene: 'three-dimensions-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'explore-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'explore-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'explore-k',
            vector: Vector3.k(),
            color: '#4444ff',
            label: 'k',
          },
          {
            id: 'explore-v',
            vector: new Vector3(2, 3, 1),
            color: '#ffaa00',
            label: 'v = (2, 3, 1)',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '3×3行列の行列式',
      content:
        '3×3行列の行列式は体積の変化率を表します。\n\n' +
        'A = [[a,b,c],[d,e,f],[g,h,i]] のとき：\n' +
        'det(A) = a(ei-fh) - b(di-fg) + c(dh-eg)\n\n' +
        '例：A = [[2,0,0],[0,3,0],[0,0,4]]\n' +
        'det(A) = 2(3×4-0) - 0 + 0 = 24\n\n' +
        '各軸方向に2倍、3倍、4倍 → 体積は24倍。直感通りです。\n\n' +
        '対角行列の行列式は対角成分の積になります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'det-i',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: '2i',
          },
          {
            id: 'det-j',
            vector: new Vector3(0, 3, 0),
            color: '#44ff44',
            label: '3j',
          },
          {
            id: 'det-k',
            vector: new Vector3(0, 0, 4),
            color: '#4444ff',
            label: '4k',
          },
        ],
        cameraPosition: [4, 4, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '3Dでの潰れ方',
      content:
        '3Dでは「潰れ方」にバリエーションがあります。\n\n' +
        'ランク3 → 空間全体（潰れない） → det ≠ 0\n' +
        'ランク2 → 平面に潰れる → det = 0\n' +
        'ランク1 → 直線に潰れる → det = 0\n' +
        'ランク0 → 原点に潰れる → det = 0（零行列）\n\n' +
        '2Dでは「直線に潰れる」だけでしたが、\n' +
        '3Dでは中間の「平面に潰れる」もあります。\n\n' +
        '次元が増えると「どれだけ情報が失われるか」に段階が生まれます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'rank-v1',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: 'v₁',
          },
          {
            id: 'rank-v2',
            vector: new Vector3(0, 1, 0),
            color: '#44ff44',
            label: 'v₂',
          },
          {
            id: 'rank-v3',
            vector: new Vector3(1, 1, 0),
            color: '#ffaa00',
            label: 'v₃（平面上）',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：3D線形代数',
      content: '3次元への拡張を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3×3単位行列の行列式はいくつですか？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '1', correct: true },
          { id: 'c', label: '3', correct: false },
          { id: 'd', label: '-1', correct: false },
        ],
        explanation:
          '単位行列は「何もしない変換」なので体積も変わりません。det(I) = 1 です。',
      },
    },
    {
      id: 'alternate',
      title: 'n次元への道',
      content:
        '3Dを理解したら、n次元への拡張は概念的です。\n\n' +
        '目で見ることはできませんが、数学的には全く同じルールが適用されます：\n' +
        '・n個の成分を持つベクトル\n' +
        '・n×n行列による線形変換\n' +
        '・行列式 = 「n次元体積」の変化率\n' +
        '・ランク = 独立な列の数\n\n' +
        '機械学習では数百万次元のベクトルを日常的に扱います。\n' +
        '2D、3Dで培った直感が、高次元でも道しるべになります。',
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
      title: 'まとめ：3Dへの拡張',
      content:
        'この章のポイント：\n\n' +
        '1. 3D = 3つの基底ベクトル i, j, k\n' +
        '2. 3×3行列が線形変換を表す\n' +
        '3. 行列式 = 体積の変化率\n' +
        '4. ランクによる「潰れ方」の段階\n' +
        '5. 概念的にはn次元にも拡張可能\n\n' +
        '次は線形代数の全体像をまとめましょう。',
      customScene: 'three-dimensions-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'sum-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'sum-k',
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
