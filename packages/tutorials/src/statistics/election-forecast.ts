import { Tutorial } from '../types';

export const electionForecastTutorial: Tutorial = {
  id: 'election-forecast',
  title: '【実践】選挙予測',
  description: '世論調査から選挙結果を予測する統計的手法を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '選挙を予測する',
      content:
        '「候補Aの支持率は52% ± 3%」\n\nニュースでよく見るこの数字、どう読めばよいのでしょう？\n\n選挙予測は標本調査、信頼区間、誤差の読み方を実践的に学ぶ最良の題材です。',
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
        '世論調査をシミュレーションしましょう。\n\n調査サンプル数を変えて、誤差の幅がどう変わるか観察してください。',
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
      title: '世論調査の誤差',
      content:
        '1000人に聞いて52%がA候補を支持。\n\n誤差 = 1.96 × √(0.52×0.48/1000) ≈ 3.1%\n\n95%信頼区間: 48.9% 〜 55.1%\n\n50%を含んでいるので「A候補が勝つとは断言できない」。\n\nこの「± 3%」の意味を正しく理解することが選挙報道の読み解きに不可欠です。',
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
      title: '予測が外れる理由',
      content:
        '2016年の米国大統領選挙では多くの予測が外れました。なぜ？\n\n・サンプリングバイアス（特定の層が回答しない）\n・恥ずかしがり有権者効果（支持を隠す人がいる）\n・投票率の予測ミス\n・接戦州での小さな誤差の累積\n\n統計モデルの前提が現実と合わないと、予測は外れます。',
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
        '支持率52%±3%の調査。この候補の勝利確率は約何%？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '支持率52%±3%（95%CI: 49-55%）の勝利確率は？',
        options: [
          { id: 'a', label: '52%', correct: false },
          { id: 'b', label: '95%', correct: false },
          { id: 'c', label: '約75%', correct: true },
          { id: 'd', label: '100%', correct: false },
        ],
        explanation:
          '正解は「約75%」です。\n\n支持率が正規分布に従うとすると、50%を超える確率は約75%です。\n\n52%は「勝つ可能性が高い」ですが「確実」ではありません。\n\n誤差の範囲に50%が含まれている場合、結果は不確実です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：集約モデル',
      content:
        '現代の選挙予測は1つの調査ではなく、複数の調査を統合します。\n\nFiveThirtyEightのようなサイトは:\n・複数の調査を重み付けで統合\n・過去の調査精度で調査会社を評価\n・経済指標など他の要因も加味\n・シミュレーションで確率を算出\n\nこれは統計学の多くの概念（加重平均、ベイズ更新、モンテカルロ法）の総合応用です。',
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
        '選挙予測は統計の実践的応用です。\n\n・世論調査の「± X%」は信頼区間\n・支持率の点推定だけでなく不確実性も読む\n・サンプリングバイアスに注意\n・予測は確率であり確定ではない\n\n統計リテラシーがあれば、選挙報道をより深く理解できます。',
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
