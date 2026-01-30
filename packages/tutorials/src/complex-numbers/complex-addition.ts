import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const complexAdditionTutorial: Tutorial = {
  id: 'complex-addition',
  title: '複素数の足し算',
  description: '複素数の加法をベクトルの足し算として視覚的に理解する',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '実部どうし、虚部どうし',
      content:
        '複素数の足し算はとてもシンプルです。\n\n(a + bi) + (c + di) = (a + c) + (b + d)i\n\n実部どうし、虚部どうしを足すだけです。\n\n例: (3 + 2i) + (1 + 4i) = 4 + 6i',
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
      id: 'vector-view',
      title: 'ベクトルの足し算',
      content:
        '複素平面で見ると、複素数の足し算はベクトルの足し算と同じです。\n\nz₁ = 3 + 2i と z₂ = 1 + 4i を足すと、平行四辺形の対角線が和 z₁ + z₂ = 4 + 6i になります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z1', vector: new Vector3(3, 2, 0), color: '#ff4444', label: 'z₁ = 3+2i' },
          { id: 'z2', vector: new Vector3(1, 4, 0), color: '#4444ff', label: 'z₂ = 1+4i' },
          { id: 'sum', vector: new Vector3(4, 6, 0), color: '#ffff44', label: 'z₁+z₂ = 4+6i' },
        ],
        cameraPosition: [0, 0, 9],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'subtraction',
      title: '引き算',
      content:
        '引き算も同様です。\n\n(a + bi) - (c + di) = (a - c) + (b - d)i\n\n例: (5 + 3i) - (2 + i) = 3 + 2i\n\n複素平面では、z₂ を反転して足すことに相当します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'z1', vector: new Vector3(5, 3, 0), color: '#ff4444', label: 'z₁ = 5+3i' },
          { id: 'z2', vector: new Vector3(2, 1, 0), color: '#4444ff', label: 'z₂ = 2+i' },
          { id: 'diff', vector: new Vector3(3, 2, 0), color: '#44ff44', label: 'z₁-z₂ = 3+2i' },
        ],
        cameraPosition: [0, 0, 8],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '足し算を体験',
      content:
        '2つの複素数のベクトルをドラッグして動かし、和がどう変わるか観察してみましょう。\n\n平行四辺形の法則が成り立つことを確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 7],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: { type: 'drag-unit-circle' },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '複素数の足し算を練習しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(2 - 3i) + (-1 + 5i) = ?',
        options: [
          { id: 'a', label: '1 + 2i', correct: true },
          { id: 'b', label: '3 + 2i', correct: false },
          { id: 'c', label: '1 - 8i', correct: false },
          { id: 'd', label: '-3 + 2i', correct: false },
        ],
        explanation:
          '実部: 2 + (-1) = 1、虚部: -3 + 5 = 2 なので、答えは 1 + 2i です。',
      },
    },
    {
      id: 'properties',
      title: '加法の性質',
      content:
        '複素数の足し算には実数と同じ性質があります:\n\n・交換法則: z₁ + z₂ = z₂ + z₁\n・結合法則: (z₁ + z₂) + z₃ = z₁ + (z₂ + z₃)\n・単位元: z + 0 = z\n・逆元: z + (-z) = 0\n\nこれらの性質は、複素数が「体」という代数構造を持つことを意味します。',
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
      title: 'まとめ',
      content:
        '複素数の足し算:\n\n・(a+bi) + (c+di) = (a+c) + (b+d)i\n・複素平面ではベクトルの足し算（平行四辺形の法則）\n・引き算も同様に実部・虚部ごとに計算\n・実数の加法と同じ性質（交換・結合法則など）を持つ\n\n次は、もっと面白い「掛け算」を学びましょう。',
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
