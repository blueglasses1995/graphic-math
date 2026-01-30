import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const modulusTutorial: Tutorial = {
  id: 'modulus',
  title: '絶対値（モジュラス）',
  description: '複素数の絶対値の定義と幾何学的意味',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '原点からの距離',
      content:
        '複素数 z = a + bi の絶対値（モジュラス）は:\n\n|z| = √(a² + b²)\n\nこれは複素平面上で原点から点 z までの距離です。\n\n例: |3 + 4i| = √(9 + 16) = √25 = 5',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'z',
            vector: new Vector3(3, 4, 0),
            color: '#ff4444',
            label: '|3+4i| = 5',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 8],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'pythagoras',
      title: 'ピタゴラスの定理',
      content:
        '|z| = √(a² + b²) はまさにピタゴラスの定理です。\n\n実部 a と虚部 b を直角三角形の2辺とすると、|z| は斜辺の長さになります。\n\n|z|² = a² + b² = z × z̄ という関係も覚えておきましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z', vector: new Vector3(3, 4, 0), color: '#ffffff', label: '|z| = 5' },
          { id: 'real', vector: new Vector3(3, 0, 0), color: '#ff4444', label: 'a = 3' },
          { id: 'imag', vector: new Vector3(0, 4, 0), color: '#44ff44', label: 'b = 4' },
        ],
        cameraPosition: [0, 0, 8],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'properties',
      title: '絶対値の性質',
      content:
        '・|z| ≧ 0（常に非負）\n・|z| = 0 ⟺ z = 0\n・|z̄| = |z|（共役の絶対値は同じ）\n・|z₁ × z₂| = |z₁| × |z₂|（積の絶対値 = 絶対値の積）\n・|z₁ + z₂| ≦ |z₁| + |z₂|（三角不等式）\n\n特に積の性質は、掛け算が「拡大」を表すことと一致します。',
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
      id: 'circle',
      title: '|z| = r の意味',
      content:
        '|z| = r を満たす複素数の集合は、原点を中心とする半径 r の円です。\n\n|z| = 1 は単位円。ここが三角関数と複素数のつながるポイントです。\n\n単位円上の点は |z| = 1 を満たし、cos θ + i sin θ と書けます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: { type: 'drag-unit-circle' },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '絶対値の計算を練習しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '|1 + i| = ?',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '2', correct: false },
          { id: 'c', label: '√2', correct: true },
          { id: 'd', label: 'i', correct: false },
        ],
        explanation:
          '|1+i| = √(1² + 1²) = √2 ≈ 1.414 です。1+i は単位円の外にあります。',
      },
    },
    {
      id: 'triangle-inequality',
      title: '三角不等式',
      content:
        '|z₁ + z₂| ≦ |z₁| + |z₂|\n\nこれは「2辺の和は第3辺より長い」という三角形の性質の一般化です。\n\n等号成立は z₁ と z₂ が同じ方向を向いているとき。\n\nつまり偏角が等しいときだけ等号が成り立ちます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z1', vector: new Vector3(2, 1, 0), color: '#ff4444', label: 'z₁' },
          { id: 'z2', vector: new Vector3(1, 2, 0), color: '#4444ff', label: 'z₂' },
          { id: 'sum', vector: new Vector3(3, 3, 0), color: '#ffff44', label: 'z₁+z₂' },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '絶対値（モジュラス）のポイント:\n\n・|z| = √(a² + b²)（原点からの距離）\n・|z|² = z × z̄\n・|z₁z₂| = |z₁||z₂|\n・|z| = r は半径rの円\n・三角不等式が成り立つ\n\n次は偏角（アーギュメント）を学びましょう。',
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
