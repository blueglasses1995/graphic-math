import { Tutorial } from '../types';

export const qrDecompositionTutorial: Tutorial = {
  id: 'qr-decomposition',
  title: 'QR分解',
  description: '行列を直交行列Qと上三角行列Rの積に分解するQR分解を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '行列を直交＋三角に分解',
      content:
        'QR分解は行列 A を直交行列 Q と上三角行列 R の積に分解します。\n' +
        'A = QR\n\n' +
        'グラム・シュミット法で A の列ベクトルを直交化すると、\n' +
        '自然にQR分解が得られます。\n\n' +
        'QR分解は最小二乗法や固有値計算のアルゴリズム（QR法）の\n' +
        '基礎となる重要な分解です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'QR分解の手順を体感',
      content:
        '行列 A = [a₁ a₂] の列ベクトルを直交化します。\n\n' +
        '1. a₁を正規化 → q₁\n' +
        '2. a₂からq₁成分を引いて正規化 → q₂\n' +
        '3. Q = [q₁ q₂]\n' +
        '4. R = Q^T A（上三角行列になる）\n\n' +
        'Rの対角成分は各ベクトルの直交化後の長さ、\n' +
        '上三角の成分は射影の大きさを表します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '具体的なQR分解',
      content:
        'A = [[1,1],[1,0],[0,1]] を QR分解してみましょう。\n\n' +
        'a₁ = (1,1,0)、|a₁| = √2\n' +
        'q₁ = (1/√2, 1/√2, 0)\n\n' +
        'a₂ = (1,0,1)、a₂·q₁ = 1/√2\n' +
        'w₂ = a₂ - (1/√2)q₁ = (1/2, -1/2, 1)\n' +
        '|w₂| = √(1/4+1/4+1) = √(3/2)\n' +
        'q₂ = w₂/|w₂|\n\n' +
        'R = [[√2, 1/√2],[0, √(3/2)]]\n\n' +
        'A = QR が確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'QR法による固有値計算',
      content:
        'QR分解の最も重要な応用の一つがQR法です。\n\n' +
        'QRアルゴリズム：\n' +
        '1. A₀ = A\n' +
        '2. Aₖ = QₖRₖ（QR分解）\n' +
        '3. Aₖ₊₁ = RₖQₖ（逆順に掛ける）\n' +
        '4. ステップ2-3を繰り返す\n\n' +
        '驚くべきことに、Aₖは対角行列（または上三角行列）に収束し、\n' +
        '対角成分が固有値になります。\n\n' +
        'これは現代の数値計算で固有値を求める標準的な方法です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：QR分解',
      content: 'QR分解の理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'QR分解 A = QR における R はどのような行列ですか？',
        options: [
          { id: 'a', label: '対角行列', correct: false },
          { id: 'b', label: '下三角行列', correct: false },
          { id: 'c', label: '上三角行列', correct: true },
          { id: 'd', label: '直交行列', correct: false },
        ],
        explanation:
          'QR分解では Q が直交行列、R が上三角行列です。グラム・シュミット法の過程から、R の上三角構造が自然に現れます。',
      },
    },
    {
      id: 'alternate',
      title: 'ハウスホルダー変換',
      content:
        'グラム・シュミット法以外にも QR分解を計算する方法があります。\n\n' +
        'ハウスホルダー変換は鏡映（反射）を使う方法で、\n' +
        '数値的により安定です。\n\n' +
        '各ステップでベクトルを反射して\n' +
        'e₁方向に揃えることで、Aを上三角に変換します。\n' +
        'Q = H₁H₂...Hₙ（各Hₖはハウスホルダー行列）\n\n' +
        '実用的なソフトウェア（LAPACK等）では\n' +
        'ハウスホルダー法が標準的に使われています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：QR分解',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. QR分解：A = QR（Q:直交, R:上三角）\n' +
        '2. グラム・シュミット法で構成可能\n' +
        '3. QR法で固有値を数値的に計算できる\n' +
        '4. 最小二乗問題にも応用できる\n' +
        '5. ハウスホルダー法はより数値的に安定\n\n' +
        'QR分解は数値線形代数の中核をなす技法です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
