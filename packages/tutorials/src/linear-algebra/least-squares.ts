import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const leastSquaresTutorial: Tutorial = {
  id: 'least-squares',
  title: '【実践】最小二乗法',
  description: '最小二乗法を線形代数の視点から理解し、データフィッティングの原理を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'データに「一番近い」直線',
      content:
        'バラバラなデータ点に、最もよく当てはまる直線を引きたい。\n\n' +
        'すべての点を通る直線は（普通は）存在しません。\n' +
        'でも「最も近い」直線は見つけられます。\n\n' +
        'その方法が最小二乗法。「誤差の二乗和を最小にする」という意味です。\n' +
        'そしてその数学的な正体は、射影（プロジェクション）なのです。',
      customScene: 'least-squares-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'data-1',
            vector: new Vector3(1, 2, 0),
            color: '#ff4444',
            label: '(1, 2)',
          },
          {
            id: 'data-2',
            vector: new Vector3(2, 3, 0),
            color: '#ff4444',
            label: '(2, 3)',
          },
          {
            id: 'data-3',
            vector: new Vector3(3, 5, 0),
            color: '#ff4444',
            label: '(3, 5)',
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
      title: '解のない方程式の「最善解」',
      content:
        'Ax = b に解がないとき（bが列空間の外にあるとき）、\n' +
        '「bに最も近い列空間の点」を見つけるのが最小二乗法です。\n\n' +
        '正規方程式：AᵀAx̂ = Aᵀb\n\n' +
        'x̂ = (AᵀA)⁻¹Aᵀb\n\n' +
        'これは bを列空間に「射影」しています。\n' +
        '射影した先のベクトルなら、方程式が解けるのです。',
      customScene: 'least-squares-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'ls-b',
            vector: new Vector3(2, 3, 1),
            color: '#ff4444',
            label: 'b（列空間外）',
          },
          {
            id: 'ls-proj',
            vector: new Vector3(2, 3, 0),
            color: '#44ff44',
            label: 'b の射影',
          },
        ],
        cameraPosition: [3, 3, 3],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '直線フィッティング',
      content:
        'データ：(1,2), (2,3), (3,5) に直線 y = a + bx を当てはめます。\n\n' +
        '行列形式：\n' +
        'A = [[1,1],[1,2],[1,3]], x = [[a],[b]], b = [[2],[3],[5]]\n\n' +
        'AᵀA = [[3, 6], [6, 14]]\n' +
        'Aᵀb = [[10], [23]]\n\n' +
        '正規方程式を解くと：\n' +
        'a = 1/3, b = 3/2\n\n' +
        '最小二乗直線：y = 1/3 + (3/2)x ≈ 0.33 + 1.5x',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'fit-1',
            vector: new Vector3(1, 2, 0),
            color: '#ff4444',
            label: '(1, 2)',
          },
          {
            id: 'fit-2',
            vector: new Vector3(2, 3, 0),
            color: '#ff4444',
            label: '(2, 3)',
          },
          {
            id: 'fit-3',
            vector: new Vector3(3, 5, 0),
            color: '#ff4444',
            label: '(3, 5)',
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
      title: '残差と射影',
      content:
        '残差ベクトル r = b - Ax̂ には重要な性質があります。\n\n' +
        'r ⊥ 列空間  （残差は列空間に直交する）\n' +
        'Aᵀr = 0\n\n' +
        'これはドット積の言葉で言えば：\n' +
        '「誤差がデータのどの方向にも偏っていない」ということです。\n\n' +
        '幾何学的に、列空間への垂直射影が最短距離を実現します。\n' +
        '斜めに射影したら、もっと遠くなりますよね。\n\n' +
        '最小二乗法 = 列空間への直交射影。美しい結論です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'residual-b',
            vector: new Vector3(2, 3, 2),
            color: '#ff4444',
            label: 'b',
          },
          {
            id: 'residual-proj',
            vector: new Vector3(2, 3, 0),
            color: '#44ff44',
            label: '射影',
          },
          {
            id: 'residual-r',
            vector: new Vector3(0, 0, 2),
            color: '#ff44ff',
            label: '残差 r',
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
      title: 'クイズ：最小二乗法',
      content: '最小二乗法の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '最小二乗解 x̂ の残差 r = b - Ax̂ はどんな性質を持ちますか？',
        options: [
          { id: 'a', label: 'r = 0（常にゼロ）', correct: false },
          { id: 'b', label: 'r はAの列空間に含まれる', correct: false },
          { id: 'c', label: 'r はAの列空間に直交する', correct: true },
          { id: 'd', label: 'r はAの零空間に含まれる', correct: false },
        ],
        explanation:
          '残差 r は列空間に直交します（Aᵀr = 0）。これが最小二乗法が「最も近い解」を与える理由です。',
      },
    },
    {
      id: 'alternate',
      title: '応用：回帰分析',
      content:
        '最小二乗法はデータサイエンスの基盤技術です。\n\n' +
        '線形回帰：データに直線（超平面）を当てはめる\n' +
        '多項式回帰：列に x², x³ を追加（それでも「線形」代数！）\n' +
        '重回帰：複数の説明変数を同時に扱う\n\n' +
        '機械学習の多くのアルゴリズムの根底に、\n' +
        'この「列空間への射影」という考え方があります。\n\n' +
        'ニューラルネットワークも、最終的には行列演算の繰り返しです。',
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
      title: 'まとめ：最小二乗法',
      content:
        'この章のポイント：\n\n' +
        '1. Ax = b に解がないとき → 最小二乗解\n' +
        '2. 正規方程式：AᵀAx̂ = Aᵀb\n' +
        '3. 幾何学的意味：列空間への直交射影\n' +
        '4. 残差は列空間に直交\n' +
        '5. 応用：線形回帰、データフィッティング\n\n' +
        '次は固有値分解を学びます。',
      customScene: 'least-squares-summary',
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
