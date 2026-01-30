import { Tutorial } from '../types';

export const pointIntervalTutorial: Tutorial = {
  id: 'point-interval',
  title: '点推定と区間推定',
  description: '母数を一つの値で推測するか範囲で推測するかの違いを理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '「だいたい170cm」vs「168〜172cm」',
      content:
        '日本人男性の平均身長は？\n\n「170cm」と答えるのが点推定。\n「168〜172cmの間」と答えるのが区間推定。\n\n点推定はシンプルですが不確実性がわかりません。\n区間推定は不確実性も含めて伝えることができます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'point-interval-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '標本サイズを変えて、信頼区間の幅がどう変わるか観察しましょう。\n\nサイズが大きいほど区間は狭くなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'point-interval-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '点推定の例',
      content:
        '100人の標本から平均身長を計算: x̄ = 170.5cm\n\nこの170.5が母平均μの「点推定値」です。\n\n最も良い点推定値は標本平均です（不偏推定量）。\n\nでもこの一つの数値には「どれだけ信頼できるか」の情報がありません。',
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
      title: '区間推定の考え方',
      content:
        '「170.5 ± 1.5cm」つまり「169.0〜172.0cm」と答えれば、\n不確実性の幅も伝えられます。\n\nこの区間を「信頼区間」と呼びます。\n\n95%信頼区間なら「同じ方法で100回標本を取ると、95回はこの区間に母平均が含まれる」ことを意味します。\n\n区間の幅は標本サイズとデータのばらつきで決まります。',
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
        '95%信頼区間と99%信頼区間、どちらが幅が広いでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '95%信頼区間と99%信頼区間、幅が広いのは？',
        options: [
          { id: 'a', label: '95%信頼区間', correct: false },
          { id: 'b', label: '99%信頼区間', correct: true },
          { id: 'c', label: '同じ幅', correct: false },
          { id: 'd', label: 'データによる', correct: false },
        ],
        explanation:
          '正解は「99%信頼区間」です。\n\n信頼度を上げるほど、区間は広くなります。\n\n「99%の確率で当たる」ためには、より広い網を張る必要があるからです。\n\n信頼度と精度（区間の狭さ）はトレードオフの関係にあります。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：推定の精度',
      content:
        '区間の幅を狭くするには:\n\n1. 標本サイズを増やす（最も効果的）\n2. 信頼度を下げる（95% → 90%）\n3. ばらつきの小さい母集団を選ぶ\n\n実務では「必要な精度」から逆算して「必要な標本サイズ」を決めます。\n\n例えば「誤差±2%以内、95%信頼度」なら n ≈ 2,401 が必要です。',
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
        '点推定: 母数を一つの値で推測（例: μ ≈ 170.5）\n区間推定: 母数を範囲で推測（例: 169.0〜172.0）\n\n区間推定は不確実性を定量化できる利点があります。\n\n信頼度を上げると区間は広くなり、標本を増やすと狭くなります。\n\n次は信頼区間の正確な意味を深堀りします。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'point-interval-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
