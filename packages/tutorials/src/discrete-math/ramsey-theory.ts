import { Tutorial } from '../types';

export const ramseyTheoryTutorial: Tutorial = {
  id: 'ramsey-theory',
  title: '【実践】ラムゼー理論',
  description: '無秩序の中に必ず秩序が見つかることを示す理論を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '完全な無秩序は不可能',
      content:
        'ラムゼー理論の核心：\n\n「十分に大きな構造には、必ず何らかの秩序が含まれる」\n\n完全にランダムに見える配置でも、一定以上の大きさがあれば、\n規則的な部分構造が必ず現れるのです。\n\nこれは数学で最も驚くべき発見の一つです。',
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
      id: 'ramsey-number',
      title: 'ラムゼー数',
      content:
        'ラムゼー数 R(s, t) とは：\n\n完全グラフの辺を赤と青で塗り分けるとき、\n赤い完全グラフ K_s か青い完全グラフ K_t が必ず含まれる最小の頂点数。\n\nR(3, 3) = 6：6人のパーティーでは必ず3人の知人グループか3人の他人グループが存在。\n\n前の単元で鳩の巣原理で証明しましたね。',
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
      id: 'known-values',
      title: '既知のラムゼー数',
      content:
        '驚くべきことに、ラムゼー数の計算は極めて困難です。\n\n既知の値は非常に少ない：\nR(3,3) = 6、R(3,4) = 9、R(3,5) = 14\nR(4,4) = 18、R(4,5) = 25\nR(5,5) は 43 ≤ R(5,5) ≤ 46 としか分かっていません。\n\nエルデシュの名言：「宇宙人がR(5,5)を教えろと脅してきたら、全人類で計算に取り組むべきだ」',
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
      id: 'upper-bound',
      title: 'ラムゼー数の上界',
      content:
        'ラムゼーの定理により、R(s,t) は常に有限です。\n\n上界の公式：R(s, t) ≤ C(s+t-2, s-1)\n\nこれは二項係数で表され、パスカルの三角形の漸化式\nR(s,t) ≤ R(s-1,t) + R(s,t-1)\nから導かれます。\n\n組合せ論のさまざまな道具が結合する美しい結果です。',
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
      content: 'ラムゼー理論の基本を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'R(3,3) = 6 の意味として正しいのは？',
        options: [
          { id: 'a', label: '6人の中に必ず3人の友人グループがある', correct: false },
          { id: 'b', label: '6人の中に必ず3人の知人グループまたは3人の他人グループがある', correct: true },
          { id: 'c', label: '6色あれば3頂点のグラフを塗り分けられる', correct: false },
          { id: 'd', label: '6辺あれば3頂点をすべてつなげる', correct: false },
        ],
        explanation:
          '正解はbです。R(3,3) = 6は、6人のパーティーでは「互いに知り合いの3人組」か「互いに知らない3人組」が必ず存在することを意味します。5人では保証されません。',
      },
    },
    {
      id: 'generalizations',
      title: 'ラムゼー理論の広がり',
      content:
        'ラムゼー理論は多くの方向に一般化されています：\n\n・ファン・デル・ヴァールデンの定理：自然数を有限色で塗ると等差数列が現れる\n・ハレス・ジュエットの定理：高次元の三目並べは必ず決着がつく\n・シューアの定理：自然数を有限色で塗ると x+y=z が同色で現れる\n\nいずれも「十分大きければ秩序が存在する」という共通テーマです。',
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
        '・ラムゼー理論：十分大きな構造には秩序が必ず存在\n・ラムゼー数 R(s,t)：赤のK_sか青のK_tが現れる最小頂点数\n・既知の値はごくわずか\n・ファン・デル・ヴァールデン、シューアの定理への一般化\n\n「完全な無秩序は不可能」── 離散数学が教える深遠な真理です。\n\n以上で離散数学の全チュートリアルを終了します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
