import { Tutorial } from '../types';

export const ellipticCurveCryptoTutorial: Tutorial = {
  id: 'elliptic-curve-crypto',
  title: '楕円曲線暗号',
  description: '楕円曲線上の群構造を利用した効率的な暗号方式を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '曲線が守る秘密',
      content:
        'y² = x³ + ax + b\n\nこの美しい曲線の上で「足し算」を定義すると、群が生まれます。\n\nこの群上の離散対数問題は非常に難しく、\nRSAより遥かに短い鍵で同等の安全性を実現できます。\n\nスマートフォンからBitcoinまで、幅広く使われています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'elliptic-curve-crypto-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '楕円曲線上の加法',
      content:
        '楕円曲線上の2点 P, Q を結ぶ直線は、曲線と第3の点 R で交わります。\n\nP + Q = -R（Rのx軸対称点）と定義します。\n\nこの「加法」で楕円曲線上の点は群を成します。\n\n点を選んで加法の幾何学的意味を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'elliptic-curve-crypto-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '有限体上の楕円曲線',
      content:
        '暗号では有限体 F_p 上の楕円曲線を使います:\n\nE(F_p): y² ≡ x³ + ax + b (mod p)\n\n点の集合は有限で、アーベル群を成します。\n\n例: y² = x³ + x + 1 over F₂₃\n点の数は Hasse の定理で制約:\n|#E(F_p) - (p+1)| ≤ 2√p',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ECDH と ECDSA',
      content:
        'ECDH（楕円曲線DH鍵交換）:\nアリス: aP を公開、ボブ: bP を公開\n共有鍵: abP\n\nECDSA（楕円曲線デジタル署名）:\n秘密鍵 d、公開鍵 Q = dG で署名を生成・検証\n\nビット数比較（同等の安全性）:\nRSA: 3072ビット ↔ ECC: 256ビット\n\n12倍も短い鍵で同じ安全性！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '楕円曲線暗号について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '楕円曲線暗号がRSAより効率的な主な理由は？',
        options: [
          { id: 'a', label: '計算が単純だから', correct: false },
          { id: 'b', label: 'より短い鍵長で同等の安全性を達成できるから', correct: true },
          { id: 'c', label: '量子コンピュータに耐性があるから', correct: false },
          { id: 'd', label: '素因数分解を使わないから', correct: false },
        ],
        explanation:
          '楕円曲線上のDLPには準指数時間アルゴリズムが知られていないため、256ビットの鍵でRSA 3072ビット相当の安全性を実現できます。',
      },
    },
    {
      id: 'alternate',
      title: '標準曲線と実用',
      content:
        '実用で使われる楕円曲線:\n\n• secp256k1: Bitcoin で使用\n• P-256 (secp256r1): TLS で広く使用\n• Curve25519: 高速で安全な鍵交換\n• Ed25519: 高速な署名方式\n\n曲線のパラメータ選択は安全性に直結します。\n「バックドアのない」曲線の選択が重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：楕円曲線暗号',
      content:
        '楕円曲線暗号:\n\n• 楕円曲線上の点が成すアーベル群を利用\n• ECDLP の困難性が安全性の基盤\n• RSAより短い鍵で同等の安全性\n• ECDH, ECDSA が広く使用\n• Bitcoin, TLS 等で実用化\n\n現代暗号の主流技術です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'elliptic-curve-crypto-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
