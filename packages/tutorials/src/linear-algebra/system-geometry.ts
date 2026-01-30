import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const systemGeometryTutorial: Tutorial = {
  id: 'system-geometry',
  title: '【実践】連立方程式の幾何',
  description: '連立方程式を幾何学的に解釈し、解の存在と一意性を視覚的に理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '方程式は図形である',
      content:
        '2x + y = 4 は数式ですが、同時にXY平面上の「直線」でもあります。\n\n' +
        '連立方程式を解くとは、複数の直線（または平面）の「交点」を見つけることです。\n\n' +
        '交わる？ 平行？ 一致する？\n' +
        '幾何学的な視点で見ると、解の構造が一目瞭然になります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'line-normal-1',
            vector: new Vector3(2, 1, 0),
            color: '#ff4444',
            label: '2x + y = 4 の法線',
          },
          {
            id: 'line-normal-2',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'x + 3y = 7 の法線',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '交点を見つけよう',
      content:
        '2x + y = 4\n' +
        'x + 3y = 7\n\n' +
        '2本の直線が交わる点が解です。\n\n' +
        'det(A) = 2×3 - 1×1 = 5 ≠ 0\n' +
        '→ 2本の直線は平行ではない → 交点が1つある\n\n' +
        '解：x = (4×3-1×7)/5 = 1, y = (2×7-4×1)/5 = 2\n\n' +
        '(1, 2) が交点です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'solution',
            vector: new Vector3(1, 2, 0),
            color: '#ffaa00',
            label: '交点 (1, 2)',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '解なし：平行線',
      content:
        '2x + y = 4\n' +
        '4x + 2y = 10\n\n' +
        'det(A) = 2×2 - 1×4 = 0\n\n' +
        '2番目の式は1番目の「2倍」ですが、右辺は 4×2 = 8 ≠ 10。\n' +
        '→ 2本の直線は平行で交わらない → 解なし（不能）\n\n' +
        '幾何学的に：同じ傾きだが切片が異なる平行線。\n' +
        'いくら延長しても交わりません。\n\n' +
        '代数的に：det = 0 かつ b が列空間に含まれない。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '無数の解：直線の一致',
      content:
        '2x + y = 4\n' +
        '4x + 2y = 8\n\n' +
        'det(A) = 0\n\n' +
        '2番目の式は1番目のちょうど2倍（右辺も2倍）。\n' +
        '→ 2本の直線は完全に一致 → 無数の解（不定）\n\n' +
        '直線上のすべての点が解です：\n' +
        '(0, 4), (1, 2), (2, 0), ... すべてOK。\n\n' +
        '一般解：x = t, y = 4 - 2t（tは任意の実数）\n' +
        '自由度1の解空間（直線）です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'inf-sol-1',
            vector: new Vector3(0, 4, 0),
            color: '#ffaa00',
            label: '(0, 4)',
          },
          {
            id: 'inf-sol-2',
            vector: new Vector3(1, 2, 0),
            color: '#ffaa00',
            label: '(1, 2)',
          },
          {
            id: 'inf-sol-3',
            vector: new Vector3(2, 0, 0),
            color: '#ffaa00',
            label: '(2, 0)',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：連立方程式の幾何',
      content: '連立方程式の幾何学的解釈を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3次元の連立方程式（3式3変数）で、解が1本の直線になるのはどんな場合？',
        options: [
          { id: 'a', label: '3つの平面が1点で交わる', correct: false },
          { id: 'b', label: '3つの平面が1本の直線で交わる', correct: true },
          { id: 'c', label: '3つの平面が平行', correct: false },
          { id: 'd', label: '2つの平面が一致する', correct: false },
        ],
        explanation:
          '3つの平面が共通の1本の直線で交わるとき、その直線上の全ての点が解になります。ランク2の場合です。',
      },
    },
    {
      id: 'alternate',
      title: '行と列の視点',
      content:
        'Ax = b には2つの幾何学的解釈があります。\n\n' +
        '【行の視点】\n' +
        '各方程式 = 超平面。解 = 超平面の交点。\n' +
        '2D: 直線の交点、3D: 平面の交点\n\n' +
        '【列の視点】\n' +
        'bは列ベクトルの線形結合で表せるか？\n' +
        'x₁(列1) + x₂(列2) + ... = b\n\n' +
        '行の視点は「交差」、列の視点は「合成」。\n' +
        '同じ問題を異なる角度から見ています。',
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
      title: 'まとめ：連立方程式の幾何',
      content:
        'この章のポイント：\n\n' +
        '1. 方程式 = 図形（直線、平面、超平面）\n' +
        '2. 解 = 図形の交点\n' +
        '3. det ≠ 0 → 1つの交点（唯一解）\n' +
        '4. det = 0 → 平行（解なし）or 一致（無数の解）\n' +
        '5. 行の視点（交差）と列の視点（合成）\n\n' +
        '次は最小二乗法を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
