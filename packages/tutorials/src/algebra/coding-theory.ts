import { Tutorial } from '../types';

export const codingTheoryTutorial: Tutorial = {
  id: 'coding-theory',
  title: '【実践】符号理論',
  description: '有限体と線形代数を使ったエラー訂正符号を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'エラーを自動で直す',
      content:
        'CDの傷、通信ノイズ、宇宙線 ── データは常にエラーの危険にさらされています。\n\nしかし、CDは多少の傷でも音が途切れません。QRコードは一部が隠れても読めます。\n\nこれは「エラー訂正符号」のおかげです。その数学的基盤は有限体と線形代数です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'coding-theory-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'parity-check',
      title: 'パリティ検査',
      content:
        '最もシンプルなエラー検出: パリティビット\n\nデータ: 1011 → パリティ付き: 10111（1の個数を偶数に）\n\n受信: 10011 → 1の個数 = 3（奇数）→ エラー検出！\n\nしかし、これだけではエラーの「位置」はわかりません。\n\nエラーを「訂正」するには、もっと洗練された符号が必要です。',
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
      id: 'hamming-code',
      title: 'ハミング符号',
      content:
        'ハミング符号 [7, 4]: 4ビットのデータを7ビットに符号化\n\n追加の3ビットで、1ビットのエラーを訂正できます。\n\nGF(2) 上の線形代数として定式化:\n  生成行列 G: 4ビット → 7ビット\n  検査行列 H: エラーの位置を特定\n\nHx = 0 なら正しい、Hx ≠ 0 なら Hx がエラーの位置を示す。',
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
      id: 'reed-solomon',
      title: 'リード・ソロモン符号',
      content:
        'QRコードやCDで使われるリード・ソロモン符号:\n\n有限体 GF(2⁸) = GF(256) 上の多項式を使います。\n\nデータをGF(256)の要素の列として表し、多項式として解釈。\n\n冗長な評価点を追加して、エラー訂正能力を持たせます。\n\nQRコードは約30%まで欠損しても読み取れます！',
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
      id: 'deep-space',
      title: '深宇宙通信',
      content:
        'NASAの深宇宙通信では符号理論が不可欠です。\n\nボイジャー探査機（1977年打ち上げ）:\n  地球から200億km以上離れた位置から信号を送信\n  信号は極めて弱く、ノイズまみれ\n  ゴレイ符号やリード・ソロモン符号で画像を復元\n\n有限体の理論がなければ、木星や土星の鮮明な画像は得られませんでした。',
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
      id: 'quiz',
      title: '確認クイズ',
      content: '符号理論について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'QRコードで使われるリード・ソロモン符号はどの有限体を使いますか？',
        options: [
          { id: 'a', label: 'GF(2)', correct: false },
          { id: 'b', label: 'GF(7)', correct: false },
          { id: 'c', label: 'GF(256)', correct: true },
          { id: 'd', label: 'GF(1024)', correct: false },
        ],
        explanation:
          '正解は GF(256) = GF(2⁸) です。1バイト（8ビット）が GF(256) の1つの要素に対応するため、データ処理に適しています。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '符号理論と代数学:\n\n1. エラー訂正は有限体上の線形代数\n2. ハミング符号: GF(2) 上の線形符号\n3. リード・ソロモン符号: GF(256) 上の多項式符号\n4. QRコード、CD、深宇宙通信で実用\n\n有限体の理論が、現代の情報通信を支えています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'coding-theory-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
