import { Tutorial } from '../types';

export const conditionalIndepTutorial: Tutorial = {
  id: 'conditional-indep',
  title: '【実践】条件付き独立',
  description: '条件を加えると独立になる/依存になる不思議な関係',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '独立が崩れる瞬間',
      content:
        '2人の学生のテスト結果は独立に見えますが、「同じ先生に教わった」と知ったら？共通の原因を知ることで関係が見えたり消えたりします。これが条件付き独立です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'conditional-indep-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '条件付き独立の定義',
      content:
        'XとYがZのもとで条件付き独立:\n\nP(X, Y | Z) = P(X | Z) × P(Y | Z)\n\nZを知ったとき、XはYについて追加情報を与えない。\n\n注意: 無条件で独立でも条件付きで依存になりうるし、その逆もあります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'explaining-away',
      title: 'Explaining Away',
      content:
        '例: 地面が濡れている(W)。原因は雨(R)かスプリンクラー(S)。\n\nRとSは独立。しかしWを観測すると:\n• 雨が降ったと分かれば、スプリンクラーが原因である確率は下がる\n• RとSはWのもとで条件付き依存になる\n\nこれがExplaining Away（説明の排除）です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '条件による独立性の変化',
      content:
        '条件をつけたり外したりして、2つの事象の独立性がどう変化するか確認しましょう。ベイジアンネットワークの構造が直感的に分かります。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'conditional-indep-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '条件付き独立について正しいのは？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '条件付き独立について正しいのは？',
        options: [
          { id: 'a', label: '独立なら条件付きでも独立', correct: false },
          { id: 'b', label: '条件付き独立なら無条件でも独立', correct: false },
          { id: 'c', label: '独立と条件付き独立は別の概念', correct: true },
          { id: 'd', label: '条件付き独立は常に独立より強い', correct: false },
        ],
        explanation:
          '独立と条件付き独立はどちらも他方を含意しません。共通の原因や結果を知ることで関係が変わります。',
      },
    },
    {
      id: 'bayesian-network',
      title: 'ベイジアンネットワーク',
      content:
        '条件付き独立はベイジアンネットワークの基礎です。\n\n• 連鎖: A→B→C（Bで条件付けるとAとCは独立）\n• 分岐: A←B→C（Bで条件付けるとAとCは独立）\n• 合流: A→B←C（Bで条件付けるとAとCは依存）\n\nグラフ構造から条件付き独立が読み取れます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '条件付き独立:\n\n• P(X,Y|Z) = P(X|Z)P(Y|Z)\n• 無条件独立とは別の概念\n• Explaining Away: 結果を知ると原因が依存\n• ベイジアンネットワークの基礎\n\n確率モデルの構造を理解する鍵概念です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'conditional-indep-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
