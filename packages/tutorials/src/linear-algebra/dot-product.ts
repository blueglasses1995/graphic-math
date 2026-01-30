import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const dotProductTutorial: Tutorial = {
  id: 'dot-product',
  title: 'ドット積の幾何学',
  description: 'ドット積（内積）の計算方法と幾何学的意味を理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '2つのベクトルの「似ている度」',
      content:
        '2つのベクトルがあります。同じ方向を向いている？ 直角？ 反対方向？\n\n' +
        'ドット積（内積）は、2つのベクトルが「どれだけ同じ方向を向いているか」を' +
        '1つの数値で教えてくれます。\n\n' +
        '正なら同じ方向、0なら直角、負なら反対方向。\n' +
        'シンプルなのに、驚くほど多くの場面で活躍する演算です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'dot-a',
            vector: new Vector3(3, 1, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'dot-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b',
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ドット積を計算してみよう',
      content:
        'ドット積の計算は簡単です：対応する成分をかけて足す。\n\n' +
        'a = (3, 1), b = (1, 3) のとき：\n' +
        'a · b = 3×1 + 1×3 = 3 + 3 = 6\n\n' +
        '正の値なので、2つのベクトルは「おおむね同じ方向」です。\n\n' +
        '3次元でも同じ：\n' +
        'a · b = a₁b₁ + a₂b₂ + a₃b₃',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'calc-a',
            vector: new Vector3(3, 1, 0),
            color: '#ff4444',
            label: 'a = (3, 1)',
          },
          {
            id: 'calc-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b = (1, 3)',
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '角度との関係',
      content:
        'ドット積には美しい幾何学的公式があります：\n\n' +
        'a · b = |a| × |b| × cos(θ)\n\n' +
        'θは2つのベクトルの間の角度です。\n\n' +
        '・θ = 0°（同じ方向）→ cos(0°) = 1 → 正の最大値\n' +
        '・θ = 90°（直角）→ cos(90°) = 0 → ゼロ\n' +
        '・θ = 180°（反対）→ cos(180°) = -1 → 負の最大値\n\n' +
        'つまり a · b = 0 ⟺ a ⊥ b（直交）！\n' +
        'これはドット積の最も重要な性質の1つです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'angle-a',
            vector: new Vector3(3, 0, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'angle-b',
            vector: new Vector3(0, 2, 0),
            color: '#44ff44',
            label: 'b（直交）',
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
      title: '射影（プロジェクション）',
      content:
        'ドット積のもう1つの重要な応用：射影です。\n\n' +
        'ベクトルaのb方向への射影は：\n' +
        'proj_b(a) = (a · b / |b|²) × b\n\n' +
        '影のようなものです。太陽の光がb方向に平行に当たったとき、' +
        'aの影がb上にどれだけ伸びるか。\n\n' +
        '例：a = (3, 2), b = (4, 0) のとき\n' +
        'a · b = 12, |b|² = 16\n' +
        'proj = (12/16) × (4, 0) = (3, 0)\n\n' +
        'aのx成分だけが取り出されました！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'proj-a',
            vector: new Vector3(3, 2, 0),
            color: '#ff4444',
            label: 'a = (3, 2)',
          },
          {
            id: 'proj-b',
            vector: new Vector3(4, 0, 0),
            color: '#44ff44',
            label: 'b = (4, 0)',
          },
          {
            id: 'proj-result',
            vector: new Vector3(3, 0, 0),
            color: '#ffaa00',
            label: '射影 = (3, 0)',
          },
        ],
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：ドット積',
      content: 'ドット積の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 6],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'a = (1, 2, 3) と b = (4, -2, 1) のドット積は？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '3', correct: true },
          { id: 'c', label: '-3', correct: false },
          { id: 'd', label: '9', correct: false },
        ],
        explanation:
          'a · b = 1×4 + 2×(-2) + 3×1 = 4 - 4 + 3 = 3 です。',
      },
    },
    {
      id: 'alternate',
      title: 'ドット積と線形変換',
      content:
        '実はドット積は「1×n行列による線形変換」と見なせます。\n\n' +
        'a · x = [a₁, a₂, a₃] × [[x₁], [x₂], [x₃]] = スカラー\n\n' +
        'つまり、ドット積は「n次元空間から1次元（数直線）への線形変換」です。\n\n' +
        'この視点は、双対空間やリースの表現定理につながる深い話ですが、\n' +
        '今はこう覚えましょう：\n' +
        'ドット積 = ベクトルを数に変換する線形な方法',
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
      title: 'まとめ：ドット積',
      content:
        'この章のポイント：\n\n' +
        '1. ドット積 = 対応する成分の積の和\n' +
        '2. a · b = |a||b|cos(θ)\n' +
        '3. a · b = 0 ⟺ 直交\n' +
        '4. 正 → 同じ方向、負 → 反対方向\n' +
        '5. 射影の計算に使える\n' +
        '6. 1×n行列の線形変換と見なせる\n\n' +
        '次はクロス積を学びます。3D空間特有の美しい演算です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'sum-a',
            vector: new Vector3(3, 1, 0),
            color: '#ff4444',
            label: 'a',
          },
          {
            id: 'sum-b',
            vector: new Vector3(1, 3, 0),
            color: '#44ff44',
            label: 'b',
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
