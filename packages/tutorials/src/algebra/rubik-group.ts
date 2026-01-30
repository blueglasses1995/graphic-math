import { Tutorial } from '../types';

export const rubikGroupTutorial: Tutorial = {
  id: 'rubik-group',
  title: '【実践】ルービックキューブの群',
  description: 'ルービックキューブの操作が群をなすことを理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'パズルと群論',
      content:
        'ルービックキューブは世界で最も有名なパズルです。\n\nこのパズルの各操作（面の回転）を群論で分析できます。\n\n「解けるかどうか」「何手で解けるか」── これらは群論の問題なのです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'rubik-group-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'moves-as-permutations',
      title: '操作は置換',
      content:
        'ルービックキューブの各面を回す操作は、小さな面（キュービー）の置換です。\n\n基本操作: U(上), D(下), L(左), R(右), F(前), B(後)\n\n各操作を90°回転として定義します。\n\nU² は上面の180°回転、U⁻¹ は反時計回りの90°回転。\n\nこれらの操作の合成が群の演算です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'rubik-group-structure',
      title: 'ルービックキューブ群',
      content:
        'ルービックキューブ群 G の位数:\n\n|G| = 43,252,003,274,489,856,000\n  ≈ 4.3 × 10¹⁹\n\n約430京通りの状態があります！\n\nしかし群論を使えば、この巨大な群の構造を理解できます。\n\nG は S₈ × S₁₂ の部分群として捉えられます（角と辺の置換）。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'commutators-in-rubik',
      title: 'コミュテータの活用',
      content:
        'キューブを解くときの基本テクニック:\n\n交換子 [A, B] = A B A⁻¹ B⁻¹\n\nこの操作は「少数のピースだけ動かす」効果があります。\n\n例: [R, U] は3つの角ピースを巡回させます。\n\n群論の概念が実際のパズル解法に直結しているのです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'gods-number',
      title: '神の数',
      content:
        '「神の数」= 20\n\nどんな状態からでも、最大20手で解けることが証明されています（2010年）。\n\nこれは群論的には:\n  生成元 {U, D, L, R, F, B} に関する最大語長が20\n\nということを意味します。\n\nコンピュータと群論の力を合わせて証明されました。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: 'ルービックキューブの群について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ルービックキューブの基本操作 U の位数はいくつですか？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '3', correct: false },
          { id: 'c', label: '4', correct: true },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          '正解は 4 です。U を4回繰り返すと元に戻ります（90° × 4 = 360°）。つまり U⁴ = e です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'ルービックキューブと群論:\n\n1. 各面の回転は置換（群の要素）\n2. 操作の合成が群の演算\n3. 約4.3×10¹⁹通りの状態（巨大な群）\n4. 交換子で少数のピースだけ操作\n5. 神の数 = 20（最大20手で解ける）\n\nパズルの裏に群論の美しい構造が隠れています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'rubik-group-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
