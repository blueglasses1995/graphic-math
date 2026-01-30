import { Tutorial } from '../types';

export const pVsNpTutorial: Tutorial = {
  id: 'p-vs-np',
  title: 'P≠NP問題',
  description: 'コンピュータサイエンス最大の未解決問題を理解する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '100万ドルの問い',
      content:
        '「効率よく検証できる問題は、効率よく解けるか？」\n\nこのシンプルな問いが、クレイ数学研究所のミレニアム懸賞問題の一つです。\n\n賞金100万ドル。2000年の発表以来、未だ未解決。\n\nP ≠ NP であると多くの研究者が信じていますが、証明されていません。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'p-vs-np-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'PとNPの境界を探ろう',
      content:
        'もしP = NPなら：\n・暗号が無意味になる（因数分解が簡単に）\n・最適化問題がすべて効率的に解ける\n・数学の証明を自動生成できる\n\nもしP ≠ NPなら：\n・本質的に「難しい」問題が存在する\n・暗号は安全\n・近似やヒューリスティクスが必要不可欠\n\nどちらが正しいか考えてみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'p-vs-np-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'P = NPの場合の衝撃',
      content:
        'P = NP が証明されたとしましょう。\n\nすると：\n・RSA暗号は多項式時間で破れる\n・タンパク質の折りたたみ問題が効率的に解ける\n・最適なスケジュール、最短ルート、最良の設計がすべて高速に求まる\n\nしかし「解ける」と「実用的」は別です。O(n¹⁰⁰⁰)でも理論上は多項式時間です。',
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
      title: 'なぜ証明が難しいのか',
      content:
        'P ≠ NP を証明するには「どんなアルゴリズムでも解けない」ことを示す必要があります。\n\n既知の困難：\n・相対化の壁：オラクルを使った証明では決着しない（Baker-Gill-Solovay）\n・自然な証明の壁：一定の証明手法では不可能（Razborov-Rudich）\n・代数化の壁：代数的手法にも限界（Aaronson-Wigderson）\n\n新しい数学的手法が必要とされています。',
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
      title: 'クイズ：P≠NP問題',
      content: 'P≠NP問題の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'もしP = NPが証明されたら、最も直接的な影響を受けるのはどれですか？',
        options: [
          { id: 'a', label: 'ソートアルゴリズムの高速化', correct: false },
          { id: 'b', label: '公開鍵暗号の安全性', correct: true },
          { id: 'c', label: 'ハードウェアの製造コスト', correct: false },
          { id: 'd', label: 'インターネットの通信速度', correct: false },
        ],
        explanation:
          'P = NPならRSAなどの公開鍵暗号は多項式時間で破れるため、暗号の安全性が直接的に脅かされます。',
      },
    },
    {
      id: 'alternate',
      title: 'P ≠ NPの現実的な対処',
      content:
        '多くの研究者がP ≠ NPを信じて研究を進めています。\n\n現実的な対処法：\n・近似アルゴリズム（最適に近い解を多項式時間で）\n・ヒューリスティクス（実用的には高速だが保証なし）\n・パラメータ化計算量（特定のパラメータが小さい場合に高速）\n・平均ケース解析（最悪ケースでなく平均を考える）',
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
      title: 'まとめ：P≠NP問題',
      content:
        'P = NP? はコンピュータサイエンスの最深の問いです。\n\n・「検証の容易さ」と「解の容易さ」は同じか？\n・多くの専門家はP ≠ NPを予想\n・証明には根本的に新しい手法が必要\n・暗号、最適化、AI等あらゆる分野に影響\n\nこの問題は数学と計算の本質に触れる、21世紀最大の知的挑戦です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'p-vs-np-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
