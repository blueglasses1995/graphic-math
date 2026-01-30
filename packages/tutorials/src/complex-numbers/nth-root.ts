import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const nthRootTutorial: Tutorial = {
  id: 'nth-root',
  title: '複素数のn乗根',
  description: '1のn乗根と一般のn乗根が正多角形を形成することを理解する',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: 'n乗根とは',
      content:
        'zⁿ = w を満たす z を w の n乗根と言います。\n\n実数では √4 = 2 のように1つ（正の方）ですが、複素数ではちょうど n 個の解があります。\n\nこれらの解は複素平面上で美しいパターンを描きます。',
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
      id: 'formula',
      title: 'n乗根の公式',
      content:
        'w = r∠θ のn乗根は:\n\nzₖ = r^(1/n) ∠((θ + 2kπ)/n)\n\nk = 0, 1, 2, ..., n-1\n\n絶対値は r^(1/n)（n乗根）、偏角は n等分されます。\n\nこれにより n 個の異なる解が得られます。',
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
      id: 'cube-roots',
      title: '1の3乗根',
      content:
        'z³ = 1 の解は:\n\nz₀ = 1∠0° = 1\nz₁ = 1∠120° = -1/2 + (√3/2)i\nz₂ = 1∠240° = -1/2 - (√3/2)i\n\n3つの解は単位円上に正三角形を形成します！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z0', vector: new Vector3(1, 0, 0), color: '#ff4444', label: 'z₀ = 1' },
          {
            id: 'z1',
            vector: new Vector3(Math.cos(2 * Math.PI / 3), Math.sin(2 * Math.PI / 3), 0),
            color: '#44ff44',
            label: 'z₁',
          },
          {
            id: 'z2',
            vector: new Vector3(Math.cos(4 * Math.PI / 3), Math.sin(4 * Math.PI / 3), 0),
            color: '#4444ff',
            label: 'z₂',
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'fourth-roots',
      title: '1の4乗根',
      content:
        'z⁴ = 1 の解は:\n\n1, i, -1, -i\n\n単位円上に正方形を形成します。\n\n一般に、1のn乗根は単位円上に正n角形の頂点として並びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z0', vector: new Vector3(1, 0, 0), color: '#ff4444', label: '1' },
          { id: 'z1', vector: new Vector3(0, 1, 0), color: '#44ff44', label: 'i' },
          { id: 'z2', vector: new Vector3(-1, 0, 0), color: '#4444ff', label: '-1' },
          { id: 'z3', vector: new Vector3(0, -1, 0), color: '#ffff44', label: '-i' },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: 'n乗根について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1の5乗根は複素平面上にどんな図形を描く？',
        options: [
          { id: 'a', label: '正三角形', correct: false },
          { id: 'b', label: '正方形', correct: false },
          { id: 'c', label: '正五角形', correct: true },
          { id: 'd', label: '正六角形', correct: false },
        ],
        explanation:
          '1のn乗根は単位円上に正n角形を形成します。n=5 なら正五角形です。5つの頂点は72°ずつ等間隔に並びます。',
      },
    },
    {
      id: 'general-root',
      title: '一般のn乗根',
      content:
        '1でない複素数のn乗根も同様に正n角形を形成しますが、中心は原点のまま、半径と回転角が変わります。\n\n例: 8のn=3乗根は半径2の円上に正三角形を描きます。\nz₀ = 2, z₁ = 2∠120°, z₂ = 2∠240°',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 2, color: '#8888ff33', plane: 'xy' }],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'n乗根のポイント:\n\n・複素数のn乗根はちょうどn個ある\n・zₖ = r^(1/n)∠((θ+2kπ)/n)\n・1のn乗根は単位円上に正n角形を形成\n・一般のn乗根も正n角形を形成（半径が変わる）\n\n次はオイラーの公式を学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
