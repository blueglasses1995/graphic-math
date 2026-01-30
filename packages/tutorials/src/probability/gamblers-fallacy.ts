import { Tutorial } from '../types';

export const gamblersFallacyTutorial: Tutorial = {
  id: 'gamblers-fallacy',
  title: '【実践】ギャンブラーの誤謬',
  description: '独立な試行における直感の罠を理解する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '10回連続裏、次は表？',
      content:
        'コインを投げて10回連続で裏が出ました。「そろそろ表が出るはず」と思いませんか？しかしコインに記憶はありません。次も表の確率は変わらず1/2です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'gamblers-fallacy-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: 'ギャンブラーの誤謬とは',
      content:
        '独立な試行で、過去の結果が将来の結果に影響すると誤って信じること。\n\n「赤が5回続いたから次は黒」→ 誤り\n「この宝くじ売り場は最近当たりが出ていないから、そろそろ出る」→ 誤り\n\n各試行は独立です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'lln-misunderstanding',
      title: '大数の法則の誤解',
      content:
        '大数の法則は「偏りが修正される」とは言っていません。\n\n10回裏の後: 偏りは将来の結果で「薄まる」だけ\n• 100回後の表の割合: 50/100 ではなく 45/100 かも\n• 10000回後: 4995/10000 → ほぼ50%に見える\n\n修正ではなく希釈です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'コイン投げシミュレーション',
      content:
        '連続で裏が出た後、次の結果を大量にシミュレーションしてみましょう。表が出やすくなっていないことを確認できます。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'gamblers-fallacy-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'ルーレットで赤が8回連続。次の賭けはどうすべき？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '赤が8回連続の後、次に正しい考え方は？',
        options: [
          { id: 'a', label: '黒に賭けるべき', correct: false },
          { id: 'b', label: '赤に賭けるべき', correct: false },
          { id: 'c', label: '確率は変わらない', correct: true },
          { id: 'd', label: 'もう賭けるべきでない', correct: false },
        ],
        explanation:
          'ルーレットの各回は独立。過去の結果は次の結果に影響しません。どちらに賭けても期待値は同じです。',
      },
    },
    {
      id: 'real-world',
      title: '現実世界での例',
      content:
        '1913年のモンテカルロカジノで、ルーレットの黒が26回連続で出ました。ギャンブラーたちは赤に大金を賭け続け、巨額の損失を出しました。\n\n人間の脳は「パターン」を見出そうとしますが、ランダムなプロセスにパターンはありません。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'ギャンブラーの誤謬:\n\n• 独立な試行では過去の結果は無関係\n• 大数の法則は「修正」ではなく「希釈」\n• 人間の脳はパターンを求めてしまう\n• 確率的思考で直感を超えることが大切\n\n「コインに記憶はない」を肝に銘じましょう。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'gamblers-fallacy-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
