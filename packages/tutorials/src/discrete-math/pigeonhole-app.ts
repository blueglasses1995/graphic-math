import { Tutorial } from '../types';

export const pigeonholeAppTutorial: Tutorial = {
  id: 'pigeonhole-app',
  title: '【実践】鳩の巣原理の応用',
  description: '鳩の巣原理の驚くべき応用例を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '当たり前だけど強力',
      content:
        '鳩の巣原理：n+1個のものをn個の箱に入れると、少なくとも1つの箱に2個以上入る。\n\n「当たり前じゃないか」と思うかもしれません。\n\nしかしこの原理は、存在証明の強力な道具です。\n\n具体的な例を構成できなくても、存在することを保証できます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pigeonhole-app-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'birthday',
      title: '誕生日の問題',
      content:
        '367人の中には必ず同じ誕生日の人がいます（366日+1人）。\n\nしかし、もっと驚くべきことがあります：\n\n23人で、同じ誕生日のペアがいる確率は50%以上！\n\nこれは「誕生日のパラドックス」と呼ばれますが、パラドックスではありません。\nC(23,2) = 253 組のペアがあるため、直感よりずっと確率が高いのです。',
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
      id: 'subset-sum',
      title: '部分和の一致',
      content:
        '問題：1〜100から10個の数を選ぶと、同じ和を持つ2つの部分集合が必ず存在する。\n\n証明：10個の数の部分集合は 2^10 = 1024 個。\n各部分集合の和は最大でも 91+92+...+100 = 955。\n\n1024個の部分集合を955個の「箱」に入れるので、\n鳩の巣原理より同じ和を持つ2つの部分集合が必ず存在します。',
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
      id: 'friendship',
      title: '友人関係の定理',
      content:
        '定理：6人のパーティーでは、必ず「互いに知り合いの3人組」か「互いに知らない3人組」が存在する。\n\n証明：1人に注目。残り5人との関係は「知人」か「他人」の2択。\n鳩の巣原理で、少なくとも3人が同じ関係（例：知人）。\nその3人同士で知人のペアがあれば知人3人組、なければ他人3人組。\n\nこれはラムゼー理論の入り口です。',
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
      content: '鳩の巣原理を応用してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '13枚のトランプを引くと必ず同じスートが4枚以上ある。これを示すのに使う原理は？',
        options: [
          { id: 'a', label: '包除原理', correct: false },
          { id: 'b', label: '鳩の巣原理', correct: true },
          { id: 'c', label: '二項定理', correct: false },
          { id: 'd', label: '帰納法', correct: false },
        ],
        explanation:
          '正解は鳩の巣原理です。13枚を4つのスート（箱）に分けると、13/4 = 3.25 なので、少なくとも1つのスートに4枚以上入ります。',
      },
    },
    {
      id: 'generalized',
      title: '一般化された鳩の巣原理',
      content:
        '一般化：kn+1個のものをn個の箱に入れると、少なくとも1つの箱にk+1個以上入る。\n\n応用例：\n・27人のクラスで同じ月生まれが3人以上いることの証明（27 > 2×12）\n・整数列から特定のパターンを見つける\n・データ圧縮の理論的限界の証明\n\n鳩の巣原理はシンプルでありながら、数学の至るところで活躍します。',
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
        '・鳩の巣原理：ものの数 > 箱の数 → 重複が存在\n・誕生日のパラドックス\n・部分和の一致の存在証明\n・友人関係の定理\n・一般化：kn+1個 → k+1個以上\n\n「存在すること」を構成なしに証明できる優雅な原理です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pigeonhole-app-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
