import { Tutorial } from '../types';

export const positiveDefiniteTutorial: Tutorial = {
  id: 'positive-definite',
  title: '正定値行列',
  description: '正定値行列の定義・判定法・応用を理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'お椀の底を数学で表す',
      content:
        '二次関数 f(x) = ax² は a > 0 のとき下に凸で最小値を持ちます。\n\n' +
        '多変数に拡張すると f(x) = x^T A x となり、\n' +
        'この関数が「常に正」（x≠0で f(x)>0）になる条件が\n' +
        '行列 A が正定値であることです。\n\n' +
        '最適化問題で「最小値が存在する」ことの保証として\n' +
        '正定値行列は極めて重要な役割を果たします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '正定値の条件を体感',
      content:
        '対称行列 A が正定値であるための同値条件：\n\n' +
        '1. すべての固有値が正\n' +
        '2. すべての首座小行列式が正\n' +
        '3. A = R^T R と分解できる（Rは正則）\n' +
        '4. x^T A x > 0（x≠0のすべてのxに対して）\n\n' +
        '例：A = [[2,1],[1,2]]\n' +
        '固有値：3, 1（両方正）→ 正定値！\n' +
        '首座小行列式：2 > 0, det = 3 > 0 → 正定値！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '正定値行列の例と反例',
      content:
        '正定値の例：\n' +
        '・単位行列 I（固有値すべて1）\n' +
        '・A^T A（Aが正則のとき）\n' +
        '・共分散行列（データが退化していないとき）\n\n' +
        '正定値でない例：\n' +
        '・[[1,2],[2,1]]（固有値 3, -1 → 負がある）\n' +
        '・[[0,0],[0,0]]（固有値すべて0 → 半正定値）\n\n' +
        '半正定値：x^T A x ≥ 0（0を許容）\n' +
        '機械学習のカーネル行列は半正定値です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '最適化における正定値',
      content:
        '関数 f(x) の極値を判定するとき、\n' +
        'ヘッセ行列 H（二次偏微分の行列）の正定値性を調べます。\n\n' +
        '・H が正定値 → 極小値\n' +
        '・H が負定値 → 極大値\n' +
        '・H が不定値 → 鞍点\n\n' +
        'ニュートン法では H⁻¹ を使って最適化しますが、\n' +
        'H が正定値でないと方向が合わないため、\n' +
        '正定値に修正する技法が重要です。\n\n' +
        '機械学習の損失関数の最小化にも関わります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：正定値行列',
      content: '正定値行列の判定を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '行列 [[3,1],[1,3]] は正定値ですか？',
        options: [
          { id: 'a', label: '正定値', correct: true },
          { id: 'b', label: '半正定値だが正定値でない', correct: false },
          { id: 'c', label: '負定値', correct: false },
          { id: 'd', label: '不定値', correct: false },
        ],
        explanation:
          '固有値は 3+1=4 と 3-1=2 で、両方正です。また首座小行列式も 3>0, 9-1=8>0 で正です。よって正定値です。',
      },
    },
    {
      id: 'alternate',
      title: '共分散行列と正定値',
      content:
        '統計学の共分散行列は（データが退化していなければ）正定値です。\n\n' +
        'Σ = (1/n) Σᵢ (xᵢ - μ)(xᵢ - μ)^T\n\n' +
        'これは X^T X の形をしているので半正定値が保証され、\n' +
        'ランクが十分なら正定値になります。\n\n' +
        'マハラノビス距離 d(x) = √((x-μ)^T Σ⁻¹ (x-μ)) は\n' +
        'Σ が正定値であることを前提とします。\n\n' +
        'ガウス分布の確率密度関数にも Σ⁻¹ が登場し、\n' +
        '正定値性が数学的に不可欠です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：正定値行列',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 正定値：x^T A x > 0（x≠0）\n' +
        '2. 同値条件：全固有値正、首座小行列式正、コレスキー分解可能\n' +
        '3. 幾何的には「お椀形」の二次形式\n' +
        '4. 最適化でヘッセ行列の正定値性が極小の条件\n' +
        '5. 共分散行列は正定値（退化しない場合）\n\n' +
        '正定値行列は最適化と統計の基礎です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
