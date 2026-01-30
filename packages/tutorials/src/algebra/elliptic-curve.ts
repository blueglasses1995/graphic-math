import { Tutorial } from '../types';

export const ellipticCurveTutorial: Tutorial = {
  id: 'elliptic-curve',
  title: '【実践】楕円曲線群',
  description: '楕円曲線上の点が群をなすことを理解し、暗号への応用を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '曲線の上の足し算',
      content:
        '楕円曲線: y² = x³ + ax + b\n\nこの曲線の上の点に「足し算」を定義できます。\n\n2つの点を結ぶ直線が曲線と交わる3番目の点を使って定義します。\n\nこの足し算で、楕円曲線上の点全体が群をなすのです。\n\nこの群は暗号理論で革命を起こしました。',
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
      id: 'point-addition',
      title: '点の加法',
      content:
        '楕円曲線上の2点 P, Q の和 P + Q の求め方:\n\n1. P と Q を結ぶ直線を引く\n2. 直線と曲線の3番目の交点 R を求める\n3. R の x 軸に関する対称点が P + Q\n\nP = Q の場合（倍加）:\n  P での接線を使って同様に計算\n\n無限遠点 O が単位元: P + O = P',
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
      id: 'group-structure',
      title: '群としての構造',
      content:
        '楕円曲線上の点は可換群をなします:\n\n閉性: P + Q は曲線上の点\n結合法則: (P + Q) + R = P + (Q + R)\n単位元: 無限遠点 O\n逆元: -P は P の x 軸対称点\n可換: P + Q = Q + P\n\n直線と3次曲線の交点という幾何学的操作が、群の公理を満たすのは驚くべきことです。',
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
      id: 'ecc',
      title: '楕円曲線暗号（ECC）',
      content:
        '楕円曲線暗号は、有限体上の楕円曲線を使います。\n\n離散対数問題:\n  Q = nP（P を n 回足す）が与えられたとき、n を求めよ\n\n楕円曲線上では、この問題は非常に難しい！\n\nRSAの2048ビットと同等の安全性を、ECCは256ビットで達成。\n\n鍵が短い → 高速 → スマートフォンやICカードに最適。',
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
      id: 'fermat',
      title: 'フェルマーの最終定理',
      content:
        '楕円曲線はフェルマーの最終定理の証明にも決定的な役割を果たしました。\n\nフェルマーの最終定理: xⁿ + yⁿ = zⁿ は n ≥ 3 で非自明な整数解を持たない\n\n1995年、アンドリュー・ワイルズが証明:\n  「すべての楕円曲線はモジュラーである」（谷山-志村予想）を示すことで、\n  フェルマーの最終定理を導出。\n\n楕円曲線は数論の中心にあります。',
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
      content: '楕円曲線について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '楕円曲線群の単位元は何ですか？',
        options: [
          { id: 'a', label: '原点 (0, 0)', correct: false },
          { id: 'b', label: '無限遠点 O', correct: true },
          { id: 'c', label: '点 (1, 1)', correct: false },
          { id: 'd', label: '単位元は存在しない', correct: false },
        ],
        explanation:
          '正解は無限遠点 O です。任意の点 P に対して P + O = P が成り立ち、O が群の単位元の役割を果たします。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '楕円曲線群:\n\n1. y² = x³ + ax + b 上の点が群をなす\n2. 幾何学的な「点の加法」で群構造を定義\n3. 楕円曲線暗号: 短い鍵で高い安全性\n4. フェルマーの最終定理の証明に不可欠\n\n楕円曲線は代数学・幾何学・数論を結ぶ、現代数学の主役です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
