import { Tutorial } from '../types';

export const montyHallTutorial: Tutorial = {
  id: 'monty-hall',
  title: '【実践】モンティ・ホール問題',
  description: '直感と確率がぶつかる有名なパラドックス',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '3つのドア',
      content:
        'テレビ番組で3つのドアがあり、1つに車、2つにヤギが隠されています。あなたがドアを選んだ後、司会者が残り2つのうちヤギのドアを1つ開けます。「ドアを変えますか？」',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'intuition',
      title: '直感 vs 確率',
      content:
        '多くの人は「変えても変えなくても1/2」と思います。しかし、変えた方が有利です！\n\n• 変えない: 当たる確率 = 1/3\n• 変える: 当たる確率 = 2/3\n\nなぜでしょう？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'explanation',
      title: '条件付き確率で理解',
      content:
        '最初に選んだドアが正解の確率は1/3。つまりハズレの確率は2/3。\n\n司会者がヤギのドアを開けても、あなたの最初の選択が正解だった確率は変わりません。変えれば、残りの2/3を手に入れられるのです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'シミュレーション',
      content:
        '実際にモンティ・ホール問題をシミュレーションしてみましょう。「変える」と「変えない」それぞれの勝率を100回試行で比較します。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'ドアが100個で98個開けられた場合、変えるべき？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '100個のドアで98個開けられたら、変えたときの当選確率は？',
        options: [
          { id: 'a', label: '1/2', correct: false },
          { id: 'b', label: '1/100', correct: false },
          { id: 'c', label: '99/100', correct: true },
          { id: 'd', label: '98/100', correct: false },
        ],
        explanation:
          '最初の選択が正解の確率は1/100。変えれば99/100の確率で当たります。ドアを増やすと直感的にも分かりやすくなります。',
      },
    },
    {
      id: 'key-point',
      title: '重要なポイント',
      content:
        'この問題のカギは「司会者は必ずヤギのドアを開ける」という条件です。\n\nもし司会者がランダムにドアを開けて、たまたまヤギだった場合は、変えても変えなくても1/2になります。情報の非対称性が確率を変えるのです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'モンティ・ホール問題の教訓:\n\n• 変えた方が2/3で有利\n• 条件付き確率の直感的でない結果\n• 司会者の「知識」が情報を生む\n• シミュレーションで直感と理論を照合できる\n\n確率の直感がいかに当てにならないかを示す好例です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
