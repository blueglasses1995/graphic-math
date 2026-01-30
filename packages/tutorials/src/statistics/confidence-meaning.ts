import { Tutorial } from '../types';

export const confidenceMeaningTutorial: Tutorial = {
  id: 'confidence-meaning',
  title: '信頼区間の意味',
  description: '95%信頼区間が本当に意味することを正しく理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: 'よくある誤解',
      content:
        '「95%信頼区間」と聞いて、こう思いませんか？\n\n「母平均がこの区間に入る確率が95%」\n\nこれは実は正確ではありません。\n\n母平均は固定された値で、確率的に動くのは区間の方なのです。\n\nこの微妙だけど重要な違いを理解しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'confidence-meaning-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '何度も標本を取って、毎回信頼区間を計算してみましょう。\n\n100回中何回、母平均が区間に含まれるか数えてみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'confidence-meaning-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '正しい解釈',
      content:
        '95%信頼区間の正しい意味:\n\n「同じ方法で標本を繰り返し取り、毎回信頼区間を作ると、そのうち約95%の区間が母平均を含む」\n\n100回実験すれば、約95回は当たり、約5回は外れる。\n\n手元の1つの区間が「当たり」か「外れ」かはわからない。でも方法全体としては95%の的中率がある、ということです。',
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
      title: '具体例で理解',
      content:
        '母平均μ = 170cm（これは神様しか知らない値）\n\n100人の標本を取って95%信頼区間を計算: [168.5, 171.5]\nこれは「当たり」（170が含まれている）\n\nもう一度: [170.2, 173.2]\nこれも「当たり」\n\nさらにもう一度: [171.5, 174.5]\nこれは「外れ」（170が含まれていない）\n\n長期的に見ると、約95%が「当たり」になります。',
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
        '次のうち、95%信頼区間の正しい解釈はどれですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '95%信頼区間の正しい解釈は？',
        options: [
          { id: 'a', label: '母平均がこの区間にある確率が95%', correct: false },
          { id: 'b', label: 'データの95%がこの区間に入る', correct: false },
          { id: 'c', label: '同じ手法を繰り返すと約95%の区間が母平均を含む', correct: true },
          { id: 'd', label: '次の観測値がこの区間に入る確率が95%', correct: false },
        ],
        explanation:
          '正解は「同じ手法を繰り返すと約95%の区間が母平均を含む」です。\n\n母平均は固定値なので「確率」を持ちません。確率的に変動するのは区間の方です。\n\nこの区別は統計学で最もよく誤解されるポイントの一つです。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：信頼度と実用性',
      content:
        '実用的には「95%信頼区間に母平均が含まれると信じて行動する」で問題ありません。\n\n厳密な解釈は哲学的に重要ですが、実務では:\n・区間が狭いほど推定が精確\n・区間が特定の値を含むかどうかで意思決定する\n\nベイズ統計では「母平均がこの区間にある確率が95%」と解釈できる「信用区間」もあります。',
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
        '95%信頼区間 = 「この方法で作った区間は、長期的に95%の確率で母平均を含む」\n\n母平均は固定値、動くのは区間。\n\n手元の一つの区間が当たりかどうかはわからないが、方法への信頼度が95%ということ。\n\n次は「仮説検定の考え方」── もう一つの推論の柱を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'confidence-meaning-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
