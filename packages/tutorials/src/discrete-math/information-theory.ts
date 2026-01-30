import { Tutorial } from '../types';

export const informationTheoryTutorial: Tutorial = {
  id: 'information-theory',
  title: '情報理論と離散数学',
  description: 'シャノンの情報理論と離散数学の深い繋がりを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '情報を測る',
      content:
        '「明日太陽が昇る」と「明日雪が降る」、どちらが多くの情報を持つでしょう？\n\n珍しい出来事ほど情報量が大きい。\n\nシャノン（1948年）は情報の量を数学的に定義しました。\n\nエントロピー H = -Σ pᵢ log₂ pᵢ\n\nこれが現代の通信・圧縮・暗号の数学的基盤です。',
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
      title: 'エントロピーを計算しよう',
      content:
        '公平なコインのエントロピー：\nH = -1/2 log₂(1/2) - 1/2 log₂(1/2) = 1ビット\n\n偏ったコイン（表90%）：\nH = -0.9 log₂(0.9) - 0.1 log₂(0.1) ≈ 0.47ビット\n\n確率分布を変えてエントロピーの変化を確認してみましょう。',
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
      title: 'ソース符号化定理',
      content:
        'シャノンのソース符号化定理：\n\n情報源のデータを圧縮する限界はエントロピーで決まる。\n\n平均符号長 L ≥ H（下界）\nハフマン符号で L ≤ H + 1（上界）\n\nつまりエントロピーは圧縮の理論的限界です。\n\n例：英語テキストのエントロピー ≈ 1.0-1.5 bits/文字\n→ ASCII（8 bits）から5-8倍の圧縮が理論的に可能。',
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
      title: '通信路符号化定理',
      content:
        'ノイズのある通信路で確実にデータを送れる限界速度（通信路容量）：\n\nC = max_{p(x)} I(X;Y)\n\nI(X;Y)は相互情報量。\n\nシャノンの定理：\n・送信レート < C ならエラー率0に近づく符号が存在\n・送信レート > C なら不可能\n\nこの定理は「存在」を示しただけで、具体的な符号は示していません。\n60年後にLDPC符号やターボ符号が限界に迫りました。',
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
      title: 'クイズ：情報理論',
      content: '情報理論の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '公平な6面サイコロのエントロピーは約何ビットですか？',
        options: [
          { id: 'a', label: '1ビット', correct: false },
          { id: 'b', label: '2ビット', correct: false },
          { id: 'c', label: '約2.58ビット', correct: true },
          { id: 'd', label: '6ビット', correct: false },
        ],
        explanation:
          'H = log₂(6) ≈ 2.585ビットです。均一分布のエントロピーは log₂(選択肢数) で計算できます。',
      },
    },
    {
      id: 'alternate',
      title: 'KLダイバージェンスと機械学習',
      content:
        'カルバック・ライブラー・ダイバージェンス（KLダイバージェンス）：\n\nD_KL(P||Q) = Σ P(x) log(P(x)/Q(x))\n\n2つの確率分布の「距離」（正確には距離ではない：非対称）。\n\n機械学習での応用：\n・交差エントロピー損失 = H(P) + D_KL(P||Q)\n・VAEの変分推論\n・方策勾配法のKLペナルティ\n\n情報理論はAIの数学的基盤でもあります。',
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
      title: 'まとめ：情報理論と離散数学',
      content:
        '情報理論は離散数学と深く結びついています。\n\n・エントロピー：情報量の数学的定義\n・ソース符号化定理：圧縮の限界\n・通信路符号化定理：通信の限界\n・KLダイバージェンス：機械学習の基盤\n\nシャノンの情報理論は「20世紀で最も重要な数学的業績の一つ」と評されています。',
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
