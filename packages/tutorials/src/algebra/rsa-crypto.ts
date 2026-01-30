import { Tutorial } from '../types';

export const rsaCryptoTutorial: Tutorial = {
  id: 'rsa-crypto',
  title: '【実践】RSA暗号の仕組み',
  description: '群論と数論を使ったRSA暗号の原理を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '暗号と数学',
      content:
        'インターネットでの通信は暗号で守られています。\n\nRSA暗号は1977年に発明され、現在も広く使われています。\n\nその安全性は「大きな数の素因数分解は難しい」という事実に基づいています。\n\nそして、その仕組みの核心には群論があります。',
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
      id: 'key-generation',
      title: '鍵の生成',
      content:
        'RSAの鍵生成:\n\n1. 大きな素数 p, q を選ぶ\n2. n = p × q を計算\n3. φ(n) = (p-1)(q-1) を計算（オイラーのφ関数）\n4. gcd(e, φ(n)) = 1 となる e を選ぶ\n5. ed ≡ 1 (mod φ(n)) となる d を求める\n\n公開鍵: (n, e)\n秘密鍵: d',
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
      id: 'encryption',
      title: '暗号化と復号',
      content:
        '暗号化: c = mᵉ mod n\n復号: m = cᵈ mod n\n\n小さな例: p=3, q=11, n=33, φ(n)=20\n  e=7, d=3（7×3=21≡1 mod 20）\n\n平文 m=5 を暗号化:\n  c = 5⁷ mod 33 = 78125 mod 33 = 14\n\n復号:\n  m = 14³ mod 33 = 2744 mod 33 = 5 ✓',
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
      id: 'why-it-works',
      title: 'なぜ復号できるのか',
      content:
        '復号が成功する理由:\n\ncᵈ = (mᵉ)ᵈ = mᵉᵈ mod n\n\ned ≡ 1 (mod φ(n)) より ed = 1 + kφ(n)\n\nよって mᵉᵈ = m¹⁺ᵏᶲ⁽ⁿ⁾ = m · (mᶲ⁽ⁿ⁾)ᵏ\n\nオイラーの定理より mᶲ⁽ⁿ⁾ ≡ 1 (mod n)\n\nしたがって mᵉᵈ ≡ m (mod n)\n\n群論（オイラーの定理）が復号の正当性を保証しています。',
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
      id: 'security',
      title: '安全性の根拠',
      content:
        'RSAの安全性:\n\n公開鍵 (n, e) から秘密鍵 d を求めるには φ(n) が必要。\n\nφ(n) = (p-1)(q-1) を計算するには n の素因数分解 n = pq が必要。\n\n大きな数の素因数分解は計算量的に困難！\n\n現在のRSAでは n は2048ビット以上（約617桁）の数を使います。\n\nこの大きさの数の素因数分解は、現在のコンピュータでは事実上不可能です。',
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
      content: 'RSA暗号について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'RSA暗号でオイラーの定理が使われるのはどの場面ですか？',
        options: [
          { id: 'a', label: '素数の生成', correct: false },
          { id: 'b', label: '復号が正しく機能する証明', correct: true },
          { id: 'c', label: '鍵のサイズの決定', correct: false },
          { id: 'd', label: '素因数分解の実行', correct: false },
        ],
        explanation:
          '正解は「復号が正しく機能する証明」です。mᵉᵈ ≡ m (mod n) を示すためにオイラーの定理 mᶲ⁽ⁿ⁾ ≡ 1 (mod n) を使います。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'RSA暗号と群論:\n\n1. 剰余算（mod）が暗号の舞台\n2. オイラーの定理が復号の正当性を保証\n3. 素因数分解の困難さが安全性の根拠\n4. フェルマーの小定理の一般化が核心\n\n代数学の理論が、現代社会のセキュリティを支えています。',
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
