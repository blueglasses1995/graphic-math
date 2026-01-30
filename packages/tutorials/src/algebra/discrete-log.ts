import { Tutorial } from '../types';

export const discreteLogTutorial: Tutorial = {
  id: 'discrete-log',
  title: '離散対数問題',
  description: '現代暗号の安全性を支える離散対数問題を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '一方通行の計算',
      content:
        '3⁵ mod 7 = 5 は簡単に計算できます。\n\nでは逆に「3^x ≡ 5 (mod 7) となる x は？」\nこれは小さい数なら試せますが、巨大な数では事実上不可能です。\n\nこの「逆が難しい」性質が暗号の安全性を支えています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '離散対数を体験',
      content:
        'Z₁₃* で g = 2 のべき乗を計算しましょう:\n\n2¹=2, 2²=4, 2³=8, 2⁴=3, 2⁵=6, 2⁶=12, ...\n\nべき乗は簡単。でも「2^x ≡ 9 (mod 13)」の x を見つけるのは？\n\n総当たりで試してみましょう。数が大きくなると途方もなくなります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '離散対数問題の定義',
      content:
        '群 G、生成元 g、元 h に対して:\n\ng^x = h となる x を求める問題\n\nこれが離散対数問題（DLP）です。\n\n巡回群 Z_p* での DLP は計算困難と信じられています。\n（多項式時間アルゴリズムは知られていない）\n\nただし量子コンピュータでは効率的に解けます（ショアのアルゴリズム）。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'DLPの困難性',
      content:
        'なぜ離散対数は難しいのか？\n\nべき乗: g^x mod p は繰り返し二乗法で O(log x) 回の乗算\n→ 高速に計算可能\n\n離散対数: 最良の古典アルゴリズムでも\nベビーステップ・ジャイアントステップ: O(√p)\n数体ふるい法: 準指数時間\n\nこの非対称性が暗号を可能にします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '離散対数問題を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '離散対数問題が暗号に使える理由は？',
        options: [
          { id: 'a', label: '解が存在しないから', correct: false },
          { id: 'b', label: '順方向は簡単だが逆方向が困難だから', correct: true },
          { id: 'c', label: '解が一意でないから', correct: false },
          { id: 'd', label: '群の演算自体が難しいから', correct: false },
        ],
        explanation:
          'g^x の計算（順方向）は高速にできますが、結果から x を求める（逆方向）のは計算困難です。この一方向性が暗号の安全性の基盤です。',
      },
    },
    {
      id: 'alternate',
      title: '様々な群でのDLP',
      content:
        'DLPは様々な群で考えられます:\n\n• Z_p*: 最も古典的。DH鍵交換、ElGamal暗号\n• 楕円曲線群: より短い鍵で同等の安全性\n• 有限体の乗法群: ペアリング暗号\n\n群の選び方で安全性と効率性が大きく変わります。\n楕円曲線は256ビットで、RSA 3072ビット相当の安全性を実現。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：離散対数問題',
      content:
        '離散対数問題:\n\n• g^x = h となる x を求める問題\n• 順方向（べき乗）は高速、逆方向は困難\n• 現代暗号の安全性の基盤\n• 楕円曲線上のDLPがより効率的\n• 量子コンピュータで破られる可能性\n\n暗号理論の出発点となる重要な問題です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
