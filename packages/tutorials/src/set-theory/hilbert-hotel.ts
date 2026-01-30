import { Tutorial } from '../types';

export const hilbertHotelTutorial: Tutorial = {
  id: 'hilbert-hotel',
  title: '【実践】無限ホテルのパラドクス',
  description: 'ヒルベルトの無限ホテルで可算無限の不思議な性質を体験する',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '満室なのに泊まれる？',
      content:
        '無限に部屋があるホテルが満室です。\n\nそこに新しいお客さんが来ました。\n\n有限のホテルなら断るしかありません。でも無限ホテルでは......',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'hilbert-hotel-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'お客さんを移動させよう',
      content:
        '各部屋の客を1つ隣の部屋に移動させてみましょう。\n\nn号室の客を n+1 号室へ。すると1号室が空きます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'hilbert-hotel-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-one-guest',
      title: '1人の新しい客',
      content:
        '解決策: 全員を1つ隣の部屋に移す。\nn号室 → n+1 号室\n\n1号室が空くので、新しい客が入れます。\n\n集合論的に: ℕ と ℕ∪{0} は同じ濃度。\nf(n) = n+1 で ℕ → {2,3,4,...} の全単射を作り、1を空ける。\n\nこれが「部分が全体と同じ大きさ」の具体例です。',
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
      id: 'example-infinite-guests',
      title: '無限人の新しい客',
      content:
        '可算無限人の客が新たに来たらどうする？\n\n解決策: 全員を偶数番の部屋に移す。\nn号室 → 2n号室\n\n奇数番の部屋がすべて空くので、無限人入れます。\n\nℵ₀ + ℵ₀ = ℵ₀\n\nさらに、可算無限台のバスが来ても大丈夫！\n素数のべき乗を使って部屋を割り当てられます。',
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
      title: '考えてみよう',
      content: '全員を2n号室に移すと、何号室が空く？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'n号室 → 2n号室に移した後、空く部屋は？',
        options: [
          { id: 'a', label: '偶数番の部屋すべて', correct: false },
          { id: 'b', label: '奇数番の部屋すべて', correct: true },
          { id: 'c', label: '1号室だけ', correct: false },
          { id: 'd', label: '空く部屋はない', correct: false },
        ],
        explanation:
          '正解は奇数番の部屋すべてです。\n\n1→2, 2→4, 3→6, ... で偶数番だけが埋まります。\n奇数番（1, 3, 5, 7, ...）が全部空きます。無限個の空き部屋ができました。',
      },
    },
    {
      id: 'alternate',
      title: '泊まれない場合',
      content:
        '非可算無限人が来たら、さすがに泊まれません！\n\n部屋番号は自然数（可算無限）なので、実数の個数（非可算無限）の客は収容不可能です。\n\nこれがカントールの定理の直感的な意味です。\n「部屋に番号をつける」= 「自然数と対応させる」\n非可算集合には番号がつけられない → 泊まれない。',
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
        'ヒルベルトのホテルのポイント：\n\n・無限ホテルは満室でも新客を泊められる\n・1人: n→n+1 で1号室を空ける\n・無限人: n→2n で奇数番をすべて空ける\n・非可算無限人は泊められない\n\n次は「カントールの集合」を探検します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'hilbert-hotel-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
