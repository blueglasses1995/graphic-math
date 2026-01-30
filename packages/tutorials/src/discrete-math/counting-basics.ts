import { Tutorial } from '../types';

export const countingBasicsTutorial: Tutorial = {
  id: 'counting-basics',
  title: '数え上げの基本',
  description: '和の法則と積の法則で場合の数を数える方法を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '何通りあるか？',
      content:
        'パスワードを4桁の数字で作るとき、何通りあるでしょうか？\n\nメニューから前菜・メイン・デザートを1つずつ選ぶと何通り？\n\n「場合の数を数える」ことは、確率や情報理論の基礎であり、\n日常生活でも驚くほど役に立ちます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'counting-basics-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'sum-rule',
      title: '和の法則',
      content:
        '和の法則：互いに排反な選択肢がある場合、場合の数は合計です。\n\n例：赤いシャツ3枚と青いシャツ5枚から1枚選ぶ → 3 + 5 = 8通り\n\n「AまたはB」のケースを数えるときに使います。\n\nただし、AとBに重複がある場合は包除原理が必要です（後の単元で学びます）。',
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
      id: 'product-rule',
      title: '積の法則',
      content:
        '積の法則：独立な選択を順に行う場合、場合の数は積です。\n\n例：前菜4種 × メイン5種 × デザート3種 = 4 × 5 × 3 = 60通り\n\n4桁の数字パスワード：10 × 10 × 10 × 10 = 10,000通り\n\n「AかつB」の組み合わせを数えるときに使います。',
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
      id: 'pigeonhole',
      title: '鳩の巣原理',
      content:
        '鳩の巣原理：n+1個のものをn個の箱に入れると、少なくとも1つの箱に2個以上入る。\n\n当たり前に聞こえますが、驚くほど強力な原理です。\n\n例：367人の中には必ず同じ誕生日の人がいる（366日しかないから）。\n\n例：5人から3人を選ぶ委員会を何度も作ると、必ず同じ2人が一緒になる回がある。',
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
      title: 'クイズ',
      content: '数え上げの基本を使って解きましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '英大文字26種と数字10種から成る3文字のパスワードは何通り？',
        options: [
          { id: 'a', label: '36 × 3 = 108', correct: false },
          { id: 'b', label: '36³ = 46,656', correct: true },
          { id: 'c', label: '36 × 35 × 34 = 42,840', correct: false },
          { id: 'd', label: '26³ + 10³ = 18,576', correct: false },
        ],
        explanation:
          '正解は36³ = 46,656通りです。各位置で36種の文字が使え、繰り返し使用可能なので、積の法則で 36 × 36 × 36 = 46,656 です。',
      },
    },
    {
      id: 'complement',
      title: '余事象で数える',
      content:
        '「少なくとも1つは～」という条件は直接数えにくいことがあります。\n\n余事象：(全体の数) - (条件を満たさない数)\n\n例：6桁パスワードで少なくとも1つ数字を含むもの\n= 36⁶ - 26⁶（全体から「文字のみ」を引く）\n\n直接数えるより圧倒的に簡単です。',
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
      id: 'summary',
      title: 'まとめ',
      content:
        '・和の法則：「または」→ 足す\n・積の法則：「かつ」→ 掛ける\n・鳩の巣原理：物がある限り重複は避けられない\n・余事象：全体から引く方が楽な場合がある\n\nこれらは数え上げのすべての基盤です。\n\n次は、順列と組合せを学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'counting-basics-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
