import { Tutorial } from '../types';

export const konigsbergTutorial: Tutorial = {
  id: 'konigsberg',
  title: '【実践】ケーニヒスベルクの橋',
  description: 'すべての橋を一度ずつ渡れるか――オイラーの橋問題',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '7つの橋を渡れるか',
      content:
        'ケーニヒスベルクの街にある7つの橋。すべてを一度だけ渡って一筆書きできるか？オイラーが1736年に解いたこの問題がグラフ理論の始まりです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-konigsberg-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '橋をクリックして渡り、すべての橋を一度だけ渡るルートを探してみましょう。成功できるでしょうか？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-konigsberg-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'オイラーの解法',
      content:
        'オイラーは街をグラフに抽象化しました。陸地→頂点、橋→辺。一筆書きできる条件は「奇数次の頂点が0個または2個」。ケーニヒスベルクでは4つとも奇数次なので不可能です。',
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
      title: '位相的な視点',
      content:
        '橋の長さや形は関係ありません。つながり方だけが本質――これはまさに位相的な考え方です。グラフ理論は位相幾何学の離散版と言えます。',
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
      title: '予測してみよう',
      content:
        '橋を1本追加したら一筆書きできるようになる？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '橋を1本追加して一筆書き可能にできる？',
        options: [
          { id: 'a', label: 'できる（適切な場所に追加すれば）', correct: true },
          { id: 'b', label: 'できない', correct: false },
          { id: 'c', label: '2本必要', correct: false },
          { id: 'd', label: '不可能', correct: false },
        ],
        explanation:
          '奇数次の頂点が4つあるので、その2つを結ぶ橋を追加すれば奇数次の頂点が2つになり、一筆書き（オイラー路）が可能になります。',
      },
    },
    {
      id: 'alternate',
      title: '現代の応用',
      content:
        '郵便配達員の巡回、ネットワーク設計、回路設計。すべての辺（道路や配線）を効率よく通る問題は、現代でもオイラーの考え方が基礎になっています。',
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
        'ケーニヒスベルクの橋問題＝グラフ理論と位相の原点。\n\nポイント：\n- 一筆書き可能⟺奇数次頂点が0個か2個\n- 形ではなくつながり方が本質\n- 位相的思考の最初の応用\n\n自分で橋を渡ってみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-konigsberg-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
