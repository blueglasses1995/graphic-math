import { Tutorial } from '../types';

export const abTestingTutorial: Tutorial = {
  id: 'ab-testing',
  title: '【実践】A/Bテスト',
  description: 'ウェブサイトや製品の改善にA/Bテストを設計・分析する方法を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: 'どちらのボタンが効果的？',
      content:
        'ウェブサイトのボタンを赤にするか青にするか。\n\n「感覚」で決めるのではなく「データ」で決める。\n\nA/Bテストは、2つの選択肢をランダムにユーザーに見せて、どちらが効果的かを統計的に判定する手法です。\n\nこれは仮説検定の最も身近な応用です。',
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
        'A/Bテストをシミュレーションしてみましょう。\n\nサンプルサイズと効果の大きさを変えて、検出力がどう変わるか観察してください。',
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
      title: 'テストの設計',
      content:
        'A/Bテストの設計手順:\n\n1. 仮説を立てる（H₀: 差がない, H₁: Bの方が良い）\n2. 指標を決める（クリック率、購入率など）\n3. 必要なサンプルサイズを計算する\n4. ランダムに振り分けて実施する\n5. 統計的に判定する\n\n事前にサンプルサイズを決めておくことが重要です。途中で「有意になったら止める」はNG！',
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
      title: '比率の差の検定',
      content:
        'A群: 1000人中50人がクリック（5.0%）\nB群: 1000人中65人がクリック（6.5%）\n\n1.5%の差は有意か？\n\nz検定を使って:\nz = (p_B - p_A) / SE ≈ 1.47 / 0.71 ≈ 2.07\np値 ≈ 0.038\n\np < 0.05 なので「B群の方がクリック率が高い」と結論できます。',
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
        'A/Bテストで途中経過を見て「有意になったらすぐ止める」とどうなる？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'テストを「有意になったら止める」とどうなりますか？',
        options: [
          { id: 'a', label: '効率が良くなる', correct: false },
          { id: 'b', label: '偽陽性率が上がる', correct: true },
          { id: 'c', label: '結果の精度が上がる', correct: false },
          { id: 'd', label: '特に問題ない', correct: false },
        ],
        explanation:
          '正解は「偽陽性率が上がる」です。\n\n何度もチェックすると、偶然有意になるタイミングで止めてしまう可能性があります。\n\nこれを「peeking問題」と呼びます。事前にサンプルサイズを決めるか、逐次検定法を使いましょう。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：実務上の注意点',
      content:
        'A/Bテストの落とし穴:\n\n・新奇性効果: 新しいデザインは最初だけ注目される\n・セグメントの違い: 全体では差がなくても特定のユーザー層では差がある場合\n・複数指標の矛盾: クリック率は上がったが売上は下がった\n・外部要因: 季節、曜日、イベントの影響\n\n統計的有意性だけでなく、ビジネス上の意味も考慮しましょう。',
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
        'A/Bテストは仮説検定のビジネス応用です。\n\n設計: 仮説 → 指標 → サンプルサイズ → 実施 → 判定\n\n注意点:\n・事前にサンプルサイズを決める\n・途中で覗き見しない（peeking問題）\n・統計的有意性と実務的重要性を区別する\n\nデータドリブンな意思決定の最も基本的な手法です。',
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
