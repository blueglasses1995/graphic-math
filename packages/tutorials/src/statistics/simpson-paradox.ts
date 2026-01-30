import { Tutorial } from '../types';

export const simpsonParadoxTutorial: Tutorial = {
  id: 'simpson-paradox',
  title: '【実践】シンプソンのパラドクス',
  description: '集団を分割すると結論が逆転する統計の罠を理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '結論が逆転する',
      content:
        '病院Aは病院Bより全体の生存率が低い。\n\nでも軽症患者だけ見るとAの方が良く、重症患者だけ見てもAの方が良い。\n\n全体ではBが良いのに、どの部分をとってもAが良い？\n\nこれがシンプソンのパラドクスです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'simpson-paradox-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'データの構成比を変えて、パラドクスが起きる条件を探りましょう。\n\nどんなとき全体と部分で結論が逆転しますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'simpson-paradox-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '具体例',
      content:
        '病院A: 軽症100人中90人回復(90%), 重症100人中30人回復(30%)\n全体: 200人中120人回復(60%)\n\n病院B: 軽症10人中9人回復(90%), 重症90人中27人回復(30%)\n全体: 100人中36人回復(36%)\n\nあれ？ 各カテゴリでは同じなのに、Aの全体成績(60%)がBより良い。\n\nからくり: Aは軽症患者が多いので全体の率が持ち上がった。Bは重症患者が多い。',
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
      title: 'なぜ起きるか',
      content:
        'シンプソンのパラドクスは「交絡変数」が原因です。\n\n病院の例では「患者の重症度」が交絡変数。\n\n重症度の分布が病院AとBで異なるため、全体の数字が歪みます。\n\nグループの構成比が異なるとき、全体の率を単純比較するのは危険です。\n\n常にサブグループごとに見る、または交絡変数を調整する必要があります。',
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
        'シンプソンのパラドクスが起きたとき、全体とサブグループ、どちらの結論を信じるべき？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '全体とサブグループの結論が矛盾するとき、どうすべき？',
        options: [
          { id: 'a', label: '常に全体の結論を信じる', correct: false },
          { id: 'b', label: '常にサブグループの結論を信じる', correct: false },
          { id: 'c', label: '因果構造を考えて判断する', correct: true },
          { id: 'd', label: 'データを捨てる', correct: false },
        ],
        explanation:
          '正解は「因果構造を考えて判断する」です。\n\n交絡変数が原因を歪めているなら、サブグループの結論が正しい。\nしかし常にそうとは限りません。\n\n「何が何に影響しているか」という因果のメカニズムを考えることが重要です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：実世界の例',
      content:
        'シンプソンのパラドクスは至るところに現れます:\n\n・大学入試の男女差別に見える数字\n・新薬の臨床試験結果\n・打率の高い選手の成績比較\n\nUCバークレーの入学審査では、全体では男性が有利に見えたが、学科別では女性が有利でした。\n\nデータを「正しいレベル」で分析することの重要性を示す好例です。',
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
        'シンプソンのパラドクス: 全体の傾向とサブグループの傾向が逆転する現象。\n\n原因: グループ間で交絡変数の分布が異なる。\n\n対策:\n・データを適切なレベルで分析する\n・交絡変数を特定して調整する\n・因果構造を考慮して解釈する\n\n「数字は嘘をつかないが、嘘つきは数字を使う」── データの裏を読む力が大切です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'simpson-paradox-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
