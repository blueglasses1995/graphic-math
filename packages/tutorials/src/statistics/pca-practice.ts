import { Tutorial } from '../types';

export const pcaPracticeTutorial: Tutorial = {
  id: 'pca-practice',
  title: '【実践】主成分分析',
  description: '高次元データの次元削減と可視化の手法を実践的に学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '100次元のデータを見る',
      content:
        '100個の特徴量を持つデータ。人間には可視化できません。\n\nでも、実際の変動は数個の方向に集中していることが多いのです。\n\n主成分分析（PCA）は、データの「最も重要な方向」を見つけ出し、次元を減らす手法です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '2次元のデータ点を回転させて、分散が最大になる方向を探しましょう。\n\nその方向が第1主成分です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '主成分の意味',
      content:
        '第1主成分 = データの分散が最大になる方向\n第2主成分 = 第1と直交する方向で分散が最大\n\n例えば身長と体重のデータで:\n第1主成分 ≈ 「体格の大きさ」（身長も体重も増える方向）\n第2主成分 ≈ 「体型の違い」（身長の割に体重が重い/軽い方向）\n\n元の変数を「より意味のある方向」に変換するのがPCAです。',
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
      id: 'example-2',
      title: '寄与率と次元削減',
      content:
        '各主成分が全体の分散の何%を説明するかが「寄与率」です。\n\n例: 第1主成分の寄与率 = 80%、第2主成分 = 15%\n→ 2つの主成分で95%の情報を保持\n→ 100次元を2次元に圧縮しても95%の情報が残る\n\n累積寄与率が80〜90%になるまでの主成分を使うのが一般的です。',
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
      title: '予測してみよう',
      content:
        'データ点が完全な円形に分布しているとき、PCAはうまく機能しますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '完全な円形分布にPCAを適用すると？',
        options: [
          { id: 'a', label: 'うまく次元削減できる', correct: false },
          { id: 'b', label: '全方向の分散が等しいので次元削減の効果がない', correct: true },
          { id: 'c', label: 'エラーになる', correct: false },
          { id: 'd', label: '1次元に完全に圧縮できる', correct: false },
        ],
        explanation:
          '正解は「次元削減の効果がない」です。\n\nPCAは分散が大きい方向を選びますが、円形分布では全方向の分散が等しいため、特別な方向がありません。\n\nPCAはデータに「楕円的な構造」があるとき最も効果的です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：固有値と線形代数',
      content:
        'PCAの数学的本質は、共分散行列の固有値分解です。\n\n固有ベクトル = 主成分の方向\n固有値 = その方向の分散の大きさ\n\nこれは線形代数で学んだ固有値の実用的な応用です。\n\n行列の固有値分解が「データの本質的な構造を明らかにする」ことを体感できます。',
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
        'PCA（主成分分析）は次元削減と可視化の基本手法です。\n\n・データの分散が最大な方向を順番に見つける\n・寄与率で何次元に圧縮するか決める\n・高次元データを2〜3次元で可視化できる\n\n共分散行列の固有値分解という線形代数の応用。\n\n機械学習の前処理や探索的データ分析で広く使われています。',
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
