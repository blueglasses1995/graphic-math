import { Tutorial } from '../types';

export const matrixFactorizationRecTutorial: Tutorial = {
  id: 'matrix-factorization-rec',
  title: '推薦システムの行列分解',
  description: 'Netflixなどの推薦システムで使われる行列分解手法を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'なぜNetflixはあなたの好みを知っているのか',
      content:
        'Netflix、Amazon、Spotifyの推薦エンジンは\n' +
        '行列分解に基づいています。\n\n' +
        'ユーザー×アイテムの評価行列 R（ほとんどが空欄）を\n' +
        '低ランク行列の積 R ≈ UV^T に分解します。\n\n' +
        'U の各行はユーザーの「好みベクトル」\n' +
        'V の各行はアイテムの「特徴ベクトル」\n\n' +
        '空欄（未評価）の予測値 = u_i · v_j\n' +
        'これが「あなたへのおすすめ」になるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '行列分解を体感',
      content:
        '3ユーザー×4映画の評価行列を考えます。\n\n' +
        'R = [[5,3,?,1],[4,?,?,1],[1,1,?,5]]\n' +
        '?は未評価。\n\n' +
        'ランク2で分解：R ≈ UV^T\n' +
        'U (3×2)：各ユーザーの好みを2次元で表現\n' +
        'V (4×2)：各映画の特徴を2次元で表現\n\n' +
        '例えば2次元の意味が「アクション度」と「ロマンス度」なら\n' +
        'アクション好きユーザーとアクション映画の内積が大きくなります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '最適化問題としての定式化',
      content:
        '行列分解は最適化問題として解きます。\n\n' +
        'min_{U,V} Σ_{(i,j)∈Ω} (R_ij - u_i·v_j)² + λ(|U|²+|V|²)\n\n' +
        'Ω：評価済みのペア集合\n' +
        'λ項：過学習防止の正則化（L2）\n\n' +
        '解法：\n' +
        '・交互最小化（ALS）：UとVを交互に更新\n' +
        '・確率的勾配降下法（SGD）\n\n' +
        'ALSではVを固定してUの最適化は最小二乗問題になり、\n' +
        '線形代数の正規方程式で解けます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'Netflix Prize',
      content:
        '2006-2009年のNetflix Prizeコンペティションは\n' +
        '行列分解手法の発展に大きく貢献しました。\n\n' +
        '100万ドルの賞金をかけて\n' +
        '推薦精度を10%改善する課題が出されました。\n\n' +
        '勝利チームは行列分解の発展形である\n' +
        'SVD++やTimeSVD++を使いました。\n\n' +
        '・SVD++：暗黙的フィードバック（閲覧履歴等）を追加\n' +
        '・時間的な好みの変化もモデル化\n\n' +
        '現代ではディープラーニングとの組み合わせも研究されていますが、\n' +
        '行列分解は依然としてベースラインとして重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：推薦の行列分解',
      content: '推薦システムの行列分解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '推薦システムの行列分解 R≈UV^T で、未評価アイテムjのユーザーiへの予測評価はどう計算しますか？',
        options: [
          { id: 'a', label: 'U_i + V_j', correct: false },
          { id: 'b', label: 'u_i · v_j（内積）', correct: true },
          { id: 'c', label: 'det(U) × det(V)', correct: false },
          { id: 'd', label: 'R_ij そのもの', correct: false },
        ],
        explanation:
          '行列分解 R≈UV^T の(i,j)要素は u_i と v_j の内積です。ユーザーの好みベクトルとアイテムの特徴ベクトルの内積が予測評価値になります。',
      },
    },
    {
      id: 'alternate',
      title: '非負値行列分解（NMF）',
      content:
        '非負値行列分解 R ≈ WH（W≥0, H≥0）は\n' +
        '要素を非負に制約する行列分解です。\n\n' +
        '非負制約により「足し合わせ」の解釈が自然になります。\n' +
        '・文書分析：各トピックの「混合」として文書を表現\n' +
        '・画像分析：パーツの「重ね合わせ」として顔を表現\n' +
        '・音声分析：音源の「混合」として信号を分離\n\n' +
        'SVDは負の値を許すため引き算が入りますが、\n' +
        'NMFは足し算のみで直感的な分解を与えます。\n' +
        '解釈可能性が求められる場面で有用です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：推薦システムの行列分解',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 推薦は評価行列の低ランク分解 R≈UV^T\n' +
        '2. 未評価の予測値はベクトルの内積\n' +
        '3. ALS, SGDで最適化\n' +
        '4. Netflix Prizeが手法発展を加速\n' +
        '5. NMFは非負制約で解釈性を向上\n\n' +
        '行列分解は推薦システムの数学的基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
