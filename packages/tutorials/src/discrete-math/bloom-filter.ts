import { Tutorial } from '../types';

export const bloomFilterTutorial: Tutorial = {
  id: 'bloom-filter',
  title: 'ブルームフィルター',
  description: '確率的データ構造ブルームフィルターの仕組みと応用を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '「たぶん含まれている」',
      content:
        '10億個のURLの中に、あるURLが含まれているか高速に判定したい。\n\n全URLを保存するとメモリが膨大に。\n\nブルームフィルターは少ないメモリで「含まれていない」を確実に、「含まれている」をほぼ正確に判定します。\n\n偽陽性はあるが偽陰性はない、確率的データ構造です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bloom-filter-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ブルームフィルターに要素を追加しよう',
      content:
        '仕組み：\n1. mビットの配列（初期値すべて0）\n2. k個のハッシュ関数 h₁, h₂, ..., hₖ\n\n追加：要素xに対し h₁(x), h₂(x), ..., hₖ(x) のビットを1にする\n検索：すべてのビットが1なら「おそらく含まれる」、一つでも0なら「含まれない」\n\n実際に操作してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bloom-filter-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '偽陽性率の計算',
      content:
        'n個の要素を追加後の偽陽性率：\n\np ≈ (1 - e^(-kn/m))^k\n\n最適なk: k = (m/n) ln 2\n\n例：m=10n（要素1つあたり10ビット）、k=7\np ≈ 0.82%（100回に1回未満の誤判定）\n\n要素1つあたり10ビット（1.25バイト）で1%未満の誤り率！\nURLを完全に保存するより遥かにコンパクトです。',
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
      title: '実用例',
      content:
        'ブルームフィルターの実用例：\n\n・Chrome：悪意あるURLのチェック\n・Cassandra/HBase：SSTに要素が存在するか事前判定\n・Bitcoin：SPVノードのトランザクション検証\n・スペルチェッカー：辞書にない単語の検出\n\n削除ができない欠点は「カウンティングブルームフィルター」で解消できます。',
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
      title: 'クイズ：ブルームフィルター',
      content: 'ブルームフィルターの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ブルームフィルターの特徴として正しいのはどれですか？',
        options: [
          { id: 'a', label: '偽陰性がある（含まれるのに「含まれない」と判定）', correct: false },
          { id: 'b', label: '偽陽性がある（含まれないのに「含まれる」と判定）', correct: true },
          { id: 'c', label: '偽陽性も偽陰性もない', correct: false },
          { id: 'd', label: '要素の削除が簡単にできる', correct: false },
        ],
        explanation:
          'ブルームフィルターは偽陽性のみ発生します。「含まれない」の判定は100%正確ですが、「含まれる」は誤る可能性があります。',
      },
    },
    {
      id: 'alternate',
      title: 'カッコウフィルター',
      content:
        'ブルームフィルターの改良版であるカッコウフィルター：\n\n利点：\n・要素の削除が可能\n・同等のメモリで偽陽性率が低い\n・検索が高速（2箇所のみ確認）\n\n仕組み：カッコウハッシュに基づき、各要素のフィンガープリントを2箇所のいずれかに格納。\n\n衝突時は既存要素を「追い出す」（カッコウの托卵に由来）。',
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
      title: 'まとめ：ブルームフィルター',
      content:
        'ブルームフィルターは空間効率の良い確率的データ構造です。\n\n・偽陽性はあるが偽陰性はない\n・ビット配列とハッシュ関数だけで実現\n・偽陽性率は数学的に制御可能\n・Web、DB、暗号通貨など幅広い応用\n\n確率論と離散数学の組合せが生んだ実用的な発明です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'bloom-filter-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
