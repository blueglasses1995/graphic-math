import { Tutorial } from '../types';

export const rsaMathTutorial: Tutorial = {
  id: 'rsa-math',
  title: 'RSA暗号の数学',
  description: 'RSA暗号を支える整数論と群論の数学的基盤を深く理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '素因数分解の難しさ',
      content:
        '15 = 3 × 5 は一瞬で分かります。\n\nでは 2,773 = ? × ? は？\n答えは 47 × 59 ですが、見つけるのは簡単ではありません。\n\n数百桁の数の素因数分解は、現代のスーパーコンピュータでも不可能。\nこの困難さがRSA暗号の安全性を保証します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'RSA暗号を体験',
      content:
        '小さい数でRSAを体験しましょう。\n\np=11, q=13 → n=143, φ(n)=120\n公開鍵 e=7（gcd(7,120)=1）\n秘密鍵 d=103（7×103 ≡ 1 mod 120）\n\n暗号化: c = m^7 mod 143\n復号: m = c^103 mod 143\n\nメッセージを暗号化・復号してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'RSAの数学的構造',
      content:
        'RSAの正しさは以下に基づきます:\n\nオイラーの定理: gcd(a,n)=1 なら a^{φ(n)} ≡ 1 (mod n)\n\ned ≡ 1 (mod φ(n)) より ed = 1 + kφ(n)\n\n(m^e)^d = m^{ed} = m^{1+kφ(n)} = m · (m^{φ(n)})^k ≡ m (mod n)\n\nつまり暗号化して復号すると元に戻ります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '群論から見たRSA',
      content:
        'RSAは (Z/nZ)* 上の演算です。\n\nn = pq のとき |(Z/nZ)*| = φ(n) = (p-1)(q-1)\n\n暗号化: σ_e(m) = m^e は (Z/nZ)* の自己同型\n復号: σ_d = σ_e^{-1}\n\n中国剰余定理により:\n(Z/nZ)* ≅ (Z/pZ)* × (Z/qZ)*\n\nこの分解を知るには p, q を知る必要があります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'RSAの数学を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'RSA暗号の安全性が破られるのはどの場合？',
        options: [
          { id: 'a', label: '離散対数問題が解かれたとき', correct: false },
          { id: 'b', label: 'nの素因数分解が求められたとき', correct: true },
          { id: 'c', label: '公開鍵eが発見されたとき', correct: false },
          { id: 'd', label: 'nが非常に大きいとき', correct: false },
        ],
        explanation:
          'n = pq の素因数分解がわかれば φ(n) = (p-1)(q-1) が計算でき、秘密鍵 d = e^{-1} mod φ(n) を求められます。eとnは元々公開情報です。',
      },
    },
    {
      id: 'alternate',
      title: 'RSAの実装上の注意',
      content:
        '理論だけでなく実装も重要です:\n\n• パディング: 同じ平文が同じ暗号文にならないようにする（OAEP）\n• 鍵長: 2048ビット以上推奨（量子対策なら4096以上）\n• 中国剰余定理による高速復号\n• タイミング攻撃への対策\n\n「教科書RSA」そのままでは安全ではありません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：RSA暗号の数学',
      content:
        'RSA暗号の数学:\n\n• 素因数分解の困難性が安全性の基盤\n• オイラーの定理が正しさを保証\n• (Z/nZ)* の群構造上で動作\n• 実装にはパディング等の工夫が必要\n• 量子コンピュータで破られる可能性あり\n\n数論と暗号の最も有名な結びつきです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
