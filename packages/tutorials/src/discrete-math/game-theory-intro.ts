import { Tutorial } from '../types';

export const gameTheoryIntroTutorial: Tutorial = {
  id: 'game-theory-intro',
  title: 'ゲーム理論入門',
  description: '戦略的意思決定の数学であるゲーム理論の基礎を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '合理的な選択のジレンマ',
      content:
        '2人の容疑者が別々に取り調べを受けています。\n\n黙秘すれば2人とも軽い刑。しかし相手が裏切ったら自分だけ重罪。\n\n「合理的」に考えると…両者とも裏切る。でもそれは最悪の結果。\n\nこれが「囚人のジレンマ」── ゲーム理論の最も有名な問題です。',
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
      title: '利得行列で考えよう',
      content:
        'ゲームを利得行列で表現します。\n\n          相手:協力  相手:裏切\n自分:協力  (-1,-1)  (-3, 0)\n自分:裏切  ( 0,-3)  (-2,-2)\n\n各プレイヤーは自分の利得を最大化したい。\n\n戦略の選択を操作して、結果を確認してみましょう。',
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
      title: 'ナッシュ均衡',
      content:
        'ナッシュ均衡：どのプレイヤーも一方的に戦略を変えても利得が改善しない状態。\n\n囚人のジレンマでは「両者裏切」がナッシュ均衡です。\n\n重要な定理（ナッシュ, 1950）：\n有限ゲームには必ず混合戦略のナッシュ均衡が存在する。\n\nジョン・ナッシュはこの業績で1994年ノーベル経済学賞を受賞しました。',
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
      title: 'ゲーム木と後ろ向き帰納法',
      content:
        '展開形ゲーム（順番に行動するゲーム）はゲーム木で表現します。\n\nチェスやオセロもゲーム木です。\n\n後ろ向き帰納法：末端から遡り、各ノードで最適な選択を決定。\n\n2人零和ゲームではミニマックス定理が成り立ちます：\nmax_x min_y f(x,y) = min_y max_x f(x,y)\n\nこれがαβ剪定の理論的基盤です。',
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
      title: 'クイズ：ゲーム理論',
      content: 'ゲーム理論の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ナッシュ均衡とは何ですか？',
        options: [
          { id: 'a', label: '全プレイヤーの利得が最大になる状態', correct: false },
          { id: 'b', label: 'どのプレイヤーも一方的に戦略を変えても得しない状態', correct: true },
          { id: 'c', label: '全プレイヤーが協力する状態', correct: false },
          { id: 'd', label: 'ゲームが終了する状態', correct: false },
        ],
        explanation:
          'ナッシュ均衡は「一方的な逸脱が得にならない」戦略の組です。全体最適とは限りません（囚人のジレンマが好例）。',
      },
    },
    {
      id: 'alternate',
      title: 'オークションとメカニズムデザイン',
      content:
        'ゲーム理論の応用「メカニズムデザイン」は、望ましい結果を誘導するルール設計です。\n\nVickreyオークション（第2価格封印入札）：\n・各人が価値を正直に入札するのがナッシュ均衡\n・最高入札者が2番目の価格で落札\n\nGoogleの広告オークション、周波数帯オークションなど実社会で広く活用。\n\n2020年のノーベル経済学賞はオークション理論に授与されました。',
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
      title: 'まとめ：ゲーム理論入門',
      content:
        'ゲーム理論は戦略的相互作用の数学です。\n\n・利得行列とゲーム木で意思決定をモデル化\n・ナッシュ均衡は安定的な戦略の組\n・囚人のジレンマ：個人の合理性と集団の最適の乖離\n・メカニズムデザイン：望ましい結果を誘導するルール設計\n\n経済学、政治学、CS、生物学で幅広く応用されています。',
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
