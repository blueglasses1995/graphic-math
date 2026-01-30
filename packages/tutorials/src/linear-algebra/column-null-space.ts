import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const columnNullSpaceTutorial: Tutorial = {
  id: 'column-null-space',
  title: '列空間と零空間',
  description: '行列の列空間（像）と零空間（核）を理解し、次元定理を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '行列が「到達できる場所」と「消える場所」',
      content:
        '行列Aによる変換で、すべての出力を集めた空間 → 列空間\n' +
        '行列Aによる変換で、ゼロに潰される入力の集合 → 零空間\n\n' +
        '列空間は「行ける場所」、零空間は「消える方向」です。\n' +
        'この2つを知れば、行列の性質がほぼわかります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'col-v1',
            vector: new Vector3(1, 2, 0),
            color: '#ff4444',
            label: '列1',
          },
          {
            id: 'col-v2',
            vector: new Vector3(3, 1, 0),
            color: '#44ff44',
            label: '列2',
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
      title: '列空間を確認しよう',
      content:
        '行列A = [[1, 3], [2, 1]] の列空間を考えましょう。\n\n' +
        'Ax = x₁(1,2) + x₂(3,1)\n\n' +
        'つまり列空間 = 列ベクトルの線形結合で作れる空間です。\n\n' +
        '(1,2) と (3,1) は線形独立なので、スパンは2次元平面全体。\n' +
        '→ 列空間 = R² 全体\n' +
        '→ Ax = b は任意の b に対して解を持ちます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'cs-col1',
            vector: new Vector3(1, 2, 0),
            color: '#ff4444',
            label: '列1 = (1, 2)',
            showComponents: true,
          },
          {
            id: 'cs-col2',
            vector: new Vector3(3, 1, 0),
            color: '#44ff44',
            label: '列2 = (3, 1)',
            showComponents: true,
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
      title: '零空間とは',
      content:
        '零空間（カーネル）は Ax = 0 を満たす x の集合です。\n\n' +
        '可逆行列（det ≠ 0）の零空間 = {0} のみ。\n' +
        '消えるベクトルは零ベクトルだけです。\n\n' +
        '特異行列（det = 0）の零空間は大きくなります。\n' +
        'A = [[1, 2], [2, 4]] のとき：\n' +
        'Ax = 0 → x₁ + 2x₂ = 0 → x₁ = -2x₂\n' +
        '零空間 = {t(-2, 1) | t ∈ R} → 直線\n\n' +
        'これは「変換で消える方向」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'null-dir',
            vector: new Vector3(-2, 1, 0),
            color: '#ff44ff',
            label: '零空間の方向',
          },
        ],
        cameraPosition: [0, 0, 7],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '次元定理（ランク・ナリティ定理）',
      content:
        '行列Aが n列の場合、美しい等式が成り立ちます：\n\n' +
        'rank(A) + nullity(A) = n\n\n' +
        'rank = 列空間の次元（独立な列の数）\n' +
        'nullity = 零空間の次元（消える方向の数）\n\n' +
        '2列の行列なら：rank 2 + nullity 0 = 2（可逆）\n' +
        'または：rank 1 + nullity 1 = 2（特異）\n\n' +
        '「行ける方向」と「消える方向」の数を足すと、' +
        '元の空間の次元になるのです。パーフェクトなバランスです。',
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
      id: 'predict',
      title: 'クイズ：列空間と零空間',
      content: '列空間と零空間の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3×3行列のランクが2のとき、零空間の次元はいくつですか？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '1', correct: true },
          { id: 'c', label: '2', correct: false },
          { id: 'd', label: '3', correct: false },
        ],
        explanation:
          'ランク・ナリティ定理より：rank + nullity = 列数。2 + nullity = 3 なので nullity = 1 です。',
      },
    },
    {
      id: 'alternate',
      title: 'Ax = b の解の構造',
      content:
        '列空間と零空間がわかると、Ax = b の解の構造が見えます。\n\n' +
        'bが列空間に含まれない → 解なし\n' +
        'bが列空間に含まれる → 解あり\n' +
        '  - 零空間 = {0} → 解は1つ（特殊解のみ）\n' +
        '  - 零空間が大きい → 無数の解\n' +
        '    一般解 = 特殊解 + 零空間の要素\n\n' +
        'つまり：\n' +
        '「解があるか？」→ 列空間が答える\n' +
        '「解は何個？」→ 零空間が答える',
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
      title: 'まとめ：列空間と零空間',
      content:
        'この章のポイント：\n\n' +
        '1. 列空間 = Axで到達できる全ての点の集合\n' +
        '2. 零空間 = Ax = 0 を満たす x の集合\n' +
        '3. ランク = 列空間の次元 = 独立な列の数\n' +
        '4. 次元定理：rank + nullity = 列数\n' +
        '5. 解の判定：列空間（存在性）+ 零空間（一意性）\n\n' +
        '次はドット積の幾何学を学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
