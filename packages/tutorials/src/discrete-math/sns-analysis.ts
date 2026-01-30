import { Tutorial } from '../types';

export const snsAnalysisTutorial: Tutorial = {
  id: 'sns-analysis',
  title: '【実践】SNS分析',
  description: 'グラフ理論でソーシャルネットワークを分析する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'SNSはグラフである',
      content:
        'Twitter、Facebook、Instagram ── SNSの人間関係はグラフそのものです。\n\nユーザーが頂点、フォロー/友達関係が辺です。\n\nこのグラフを分析することで、インフルエンサーの発見やコミュニティの検出ができます。',
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
      id: 'centrality',
      title: '中心性',
      content:
        '「最も影響力のあるユーザー」を見つけるための指標が中心性です。\n\n・次数中心性：フォロワー数が多い人\n・近接中心性：全員に最も近い人\n・媒介中心性：多くの最短パスの中継点となる人\n・PageRank：重要な人からフォローされている人（Googleの原理）\n\nそれぞれ異なる「影響力」を測定します。',
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
      id: 'community',
      title: 'コミュニティ検出',
      content:
        'SNSグラフの中で密につながったグループ（コミュニティ）を見つけます。\n\nクリーク：全員が互いに友達のグループ（完全部分グラフ）\n\n実際にはクリークは小さくなりがちなので、\n「内部の辺が密で外部との辺が疎」な部分グラフを探します。\n\nこれが広告のターゲティングに使われます。',
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
      id: 'six-degrees',
      title: '六次の隔たり',
      content:
        '「世界中の誰とでも6人以内の知り合いの連鎖でつながる」\n\nこれは「六次の隔たり」と呼ばれ、グラフの直径に関係します。\n\nFacebookのデータでは、平均的な隔たりは約3.5人でした。\n\nこれはスモールワールド現象と呼ばれ、現実のネットワークの普遍的な特徴です。',
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
      content: 'SNS分析の概念を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '多くの最短パスの中継点となるユーザーの重要性を測る指標は？',
        options: [
          { id: 'a', label: '次数中心性', correct: false },
          { id: 'b', label: '近接中心性', correct: false },
          { id: 'c', label: '媒介中心性', correct: true },
          { id: 'd', label: 'PageRank', correct: false },
        ],
        explanation:
          '正解は媒介中心性です。多くの最短パスが通過する頂点は、情報の流れの「ゲートキーパー」として重要な役割を果たします。',
      },
    },
    {
      id: 'spread',
      title: '情報拡散のモデル',
      content:
        'グラフ上での情報拡散をモデル化できます。\n\n・感染モデル：隣接ノードに確率的に広がる\n・閾値モデル：十分な数の隣人が採用したら自分も採用\n\nバズの発生メカニズムやフェイクニュースの拡散防止に応用されます。\n\n影響最大化問題：k人に初期シードを蒔いて拡散を最大化する。',
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
        '・SNS = ソーシャルグラフ\n・中心性指標でインフルエンサーを発見\n・コミュニティ検出でグループを発見\n・六次の隔たり（スモールワールド）\n・情報拡散モデルで影響を予測\n\nグラフ理論はSNS分析の最も基本的なツールです。',
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
