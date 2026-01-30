import { Tutorial } from '../types';

export const bezierMatrixTutorial: Tutorial = {
  id: 'bezier-matrix',
  title: 'ベジエ曲線と行列',
  description: 'ベジエ曲線の行列表現とコンピュータグラフィックスでの応用を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '滑らかな曲線を行列で描く',
      content:
        'フォント、アイコン、アニメーションの曲線は\n' +
        '「ベジエ曲線」で表現されています。\n\n' +
        'イラレやFigmaのペンツールで描く曲線も\n' +
        'すべてベジエ曲線です。\n\n' +
        'ベジエ曲線は制御点と行列の掛け算で定義され、\n' +
        '線形代数が美しい曲線を生み出しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ベジエ曲線を体感',
      content:
        '3次ベジエ曲線は4つの制御点 P₀,P₁,P₂,P₃ で定義されます。\n\n' +
        'B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃\n' +
        '（0 ≤ t ≤ 1）\n\n' +
        'P₀とP₃は曲線の始点と終点\n' +
        'P₁とP₂は曲線の「引っ張り方」を制御\n\n' +
        '制御点を動かすと曲線が直感的に変形します。\n' +
        'これがデザインツールの使いやすさの秘密です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '行列形式',
      content:
        'ベジエ曲線を行列で表すと：\n\n' +
        'B(t) = [1,t,t²,t³] × M × [P₀,P₁,P₂,P₃]^T\n\n' +
        '3次ベジエの基底行列M：\n' +
        'M = [[ 1, 0, 0, 0],\n' +
        '     [-3, 3, 0, 0],\n' +
        '     [ 3,-6, 3, 0],\n' +
        '     [-1, 3,-3, 1]]\n\n' +
        '行列形式のメリット：\n' +
        '・GPUで効率的に計算可能\n' +
        '・微分（接線）が行列演算で簡単に求まる\n' +
        '・他のスプライン曲線との統一的な扱い',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ベジエ曲面とパッチ',
      content:
        'ベジエ曲線を2次元に拡張するとベジエ曲面になります。\n\n' +
        'S(u,v) = Σᵢ Σⱼ Bᵢ(u)Bⱼ(v)Pᵢⱼ\n\n' +
        '4×4 = 16個の制御点で滑らかな曲面パッチを定義。\n\n' +
        '行列形式：S(u,v) = U^T M P M^T V\n' +
        'U = [1,u,u²,u³]、V = [1,v,v²,v³]\n' +
        'Pは4×4の制御点行列\n\n' +
        '3Dモデリング、自動車の車体設計、\n' +
        'フォントレンダリングなどで広く使われています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：ベジエ曲線',
      content: 'ベジエ曲線の基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3次ベジエ曲線の制御点はいくつですか？',
        options: [
          { id: 'a', label: '2個', correct: false },
          { id: 'b', label: '3個', correct: false },
          { id: 'c', label: '4個', correct: true },
          { id: 'd', label: '6個', correct: false },
        ],
        explanation:
          'n次ベジエ曲線はn+1個の制御点を持ちます。3次ベジエ曲線は4個の制御点（始点P₀、制御点P₁,P₂、終点P₃）で定義されます。',
      },
    },
    {
      id: 'alternate',
      title: 'B-スプラインとNURBS',
      content:
        'ベジエ曲線の発展形としてB-スプラインとNURBSがあります。\n\n' +
        'B-スプライン：\n' +
        '複数の曲線を自動的に滑らかにつなぐ。\n' +
        '局所的な制御が可能（1点を動かしても遠くに影響しない）。\n\n' +
        'NURBS（非均一有理Bスプライン）：\n' +
        '重みを付けて円や楕円も正確に表現可能。\n' +
        'CAD/CAMの標準曲線形式。\n\n' +
        'すべて基底行列を変えるだけで統一的に表現でき、\n' +
        '行列の「基底変換」の考え方そのものです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ベジエ曲線と行列',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. ベジエ曲線は制御点で定義される滑らかな曲線\n' +
        '2. 行列形式 B(t) = T·M·P で効率的に計算\n' +
        '3. 3次ベジエは4個の制御点\n' +
        '4. ベジエ曲面は16個の制御点\n' +
        '5. B-スプライン、NURBSへと発展\n\n' +
        '曲線・曲面の表現は行列の基底変換の応用です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
