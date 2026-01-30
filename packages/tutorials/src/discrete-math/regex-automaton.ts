import { Tutorial } from '../types';

export const regexAutomatonTutorial: Tutorial = {
  id: 'regex-automaton',
  title: '正規表現とオートマトン',
  description: '正規表現と有限オートマトンの等価性を理解する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '検索パターンの裏側',
      content:
        'プログラミングで使う正規表現 /ab*c/ は、実は数学的な裏付けを持っています。\n\n正規表現は有限オートマトンと等価であり、どちらも「正規言語」を表現します。\n\nこの美しい対応関係をアニメーションで見てみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '正規表現を組み立てよう',
      content:
        '正規表現の基本演算は3つです。\n\n1. 連結 (ab): aの後にb\n2. 和集合 (a|b): aまたはb\n3. 閉包 (a*): aの0回以上の繰り返し\n\nこれらを組み合わせて正規表現を構成してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '正規表現からNFAへ',
      content:
        'トンプソンの構成法を使えば、任意の正規表現をNFAに変換できます。\n\n例: (a|b)*abb\n\n各演算子に対応するNFAの部品を用意し、組み合わせます。\n・文字 a → 2状態のNFA\n・R|S → 両方のNFAをε遷移で並列接続\n・R* → ε遷移でループを作成',
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
      id: 'example-2',
      title: 'DFAから正規表現へ',
      content:
        '逆に、DFAから正規表現を導くことも可能です。状態除去法を使います。\n\n1. DFAの各辺に正規表現ラベルを付ける\n2. 中間状態を一つずつ除去し、辺のラベルを更新\n3. 最終的に初期状態から受理状態への一つの正規表現が得られる\n\nこれにより、正規表現とオートマトンの等価性が証明されます。',
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
      id: 'predict',
      title: 'クイズ：正規表現',
      content: '正規表現とオートマトンの関係を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '正規表現 (0|1)*1 が受理する文字列はどれですか？',
        options: [
          { id: 'a', label: '001', correct: true },
          { id: 'b', label: '010', correct: false },
          { id: 'c', label: '100', correct: false },
          { id: 'd', label: '000', correct: false },
        ],
        explanation:
          '正解は「001」です。(0|1)*は0と1の任意の列を受理し、最後が1で終わる必要があります。',
      },
    },
    {
      id: 'alternate',
      title: 'クリーネの定理',
      content:
        '正規表現、DFA、NFAの等価性は「クリーネの定理」として知られます。\n\n正規表現 → NFA（トンプソン構成）\nNFA → DFA（部分集合構成）\nDFA → 正規表現（状態除去法）\n\nこの循環的な等価性により、正規言語を3つの異なる視点から理解できます。',
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
      title: 'まとめ：正規表現とオートマトン',
      content:
        '正規表現とオートマトンは同じ「正規言語」を異なる形で表現します。\n\n・正規表現：宣言的（何を受理するか）\n・オートマトン：操作的（どう処理するか）\n\nプログラミングの正規表現エンジンは、内部でオートマトンに変換して動作しています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
