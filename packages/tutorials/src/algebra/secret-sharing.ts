import { Tutorial } from '../types';

export const secretSharingTutorial: Tutorial = {
  id: 'secret-sharing',
  title: '秘密分散',
  description: '秘密を複数人で分散管理するシャミアの秘密分散法を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '秘密を分けて守る',
      content:
        '核ミサイルの発射には複数の鍵が必要です。\n1人では発射できず、全員揃わなくても一定数以上なら発射可能。\n\nこれを数学的に実現するのが「秘密分散」です。\n\n(k, n) 閾値法: n人に分散し、k人以上で復元可能。\nk-1人以下では情報が一切漏れない。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'シャミアの方法を体験',
      content:
        '秘密 s = 42 を (3, 5) 閾値法で分散しましょう。\n\nランダムな2次多項式: f(x) = 42 + 3x + 7x² (mod p)\n\nシェア: f(1), f(2), f(3), f(4), f(5)\n\n任意の3つのシェアからラグランジュ補間で s = f(0) を復元。\n2つ以下では情報ゼロ。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'シャミアの秘密分散法',
      content:
        '(k, n) 閾値秘密分散:\n\n1. 秘密 s を定数項に持つ (k-1) 次多項式 f を選ぶ:\n   f(x) = s + a₁x + a₂x² + ... + a_{k-1}x^{k-1}\n\n2. n個のシェア (i, f(i)) を配布\n\n3. k個のシェアからラグランジュ補間で f(0) = s を復元\n\nk-1次多項式は k 点で一意に決まる\n→ k-1点では多項式が特定できない → 情報理論的に安全',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ラグランジュ補間',
      content:
        'k個の点 (x₁,y₁), ..., (xₖ,yₖ) から多項式を復元:\n\nf(x) = Σᵢ yᵢ · Lᵢ(x)\n\nLᵢ(x) = Π_{j≠i} (x - xⱼ)/(xᵢ - xⱼ)\n\n特に f(0) = Σᵢ yᵢ · Π_{j≠i} (-xⱼ)/(xᵢ - xⱼ)\n\nすべて有限体 F_p 上で計算します。\n体の構造が補間を可能にしているのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '秘密分散について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(3, 5) 閾値秘密分散で使う多項式の次数は？',
        options: [
          { id: 'a', label: '1次', correct: false },
          { id: 'b', label: '2次', correct: true },
          { id: 'c', label: '3次', correct: false },
          { id: 'd', label: '5次', correct: false },
        ],
        explanation:
          '(k, n) = (3, 5) 閾値法では (k-1) = 2 次多項式を使います。2次多項式は3点で一意に決まるため、3つのシェアで秘密を復元でき、2つ以下では復元できません。',
      },
    },
    {
      id: 'alternate',
      title: '秘密分散の応用',
      content:
        '秘密分散の現代的応用:\n\n• マルチシグウォレット: 暗号資産の安全管理\n• 分散型鍵管理: クラウド上の鍵の安全な保管\n• MPC（秘密計算）: 秘密を明かさず共同計算\n• 秘密分散 + 準同型暗号 = プライバシー保護AI\n\n有限体上の多項式補間という\nシンプルな代数が強力なセキュリティを実現します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：秘密分散',
      content:
        '秘密分散:\n\n• (k, n) 閾値法: k人以上で復元、k-1人以下で情報ゼロ\n• シャミアの方法: 多項式補間を利用\n• 有限体上のラグランジュ補間が数学的基盤\n• 情報理論的に安全\n• MPC等の先端技術の基礎\n\n代数学がセキュリティを支える好例です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
