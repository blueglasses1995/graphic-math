import { Tutorial } from '../types';

export const bitcoinEllipticTutorial: Tutorial = {
  id: 'bitcoin-elliptic',
  title: '楕円曲線とBitcoin',
  description: 'Bitcoinで使われるsecp256k1楕円曲線の数学を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'Bitcoinの心臓部',
      content:
        'Bitcoinの全てのトランザクションは数学で守られています。\n\nその心臓部が楕円曲線 secp256k1:\ny² = x³ + 7 (mod p)\n\np = 2²⁵⁶ - 2³² - 977（巨大な素数）\n\nこの曲線上の離散対数問題が、あなたのBitcoinを守ります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'アドレス生成の仕組み',
      content:
        'Bitcoinアドレスの生成:\n\n1. 秘密鍵: ランダムな256ビット整数 d\n2. 公開鍵: Q = dG（楕円曲線上のスカラー倍算）\n3. アドレス: Hash(Q) の一部\n\n秘密鍵 → 公開鍵は一瞬で計算可能\n公開鍵 → 秘密鍵は（事実上）不可能\n\nスカラー値を変えて公開鍵の変化を見ましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'secp256k1の詳細',
      content:
        'secp256k1 のパラメータ:\n\n曲線: y² = x³ + 7 (mod p)\np = FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF\n    FFFFFFFF FFFFFFFF FFFFFFFE FFFFFC2F\n\n生成元 G の位数: n ≈ 1.16 × 10⁷⁷\n\n位数が素数 → 群は巡回群 → すべての非零元が生成元\n\nsecp256k1 は「コーベッツ予想」が成立する効率的な曲線です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'トランザクション署名',
      content:
        'BitcoinのECDSA署名:\n\n1. トランザクションデータのハッシュ z = SHA256d(tx)\n2. ランダム k を選び、R = kG の x座標を r とする\n3. s = k⁻¹(z + rd) mod n\n4. 署名 (r, s) をトランザクションに添付\n\n検証:\nu₁ = zs⁻¹, u₂ = rs⁻¹\nu₁G + u₂Q の x座標が r と一致するか確認\n\n秘密鍵 d なしには署名を偽造できません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'BitcoinのECCを確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'Bitcoinの秘密鍵は何ビットですか？',
        options: [
          { id: 'a', label: '128ビット', correct: false },
          { id: 'b', label: '256ビット', correct: true },
          { id: 'c', label: '512ビット', correct: false },
          { id: 'd', label: '2048ビット', correct: false },
        ],
        explanation:
          'Bitcoinの秘密鍵は256ビットのランダムな整数です。secp256k1 の群の位数が約 2²⁵⁶ なので、256ビットで十分な安全性を確保できます。',
      },
    },
    {
      id: 'alternate',
      title: 'シュノア署名とTaproot',
      content:
        'Bitcoin の進化:\n\nシュノア署名（Taproot アップグレード, 2021）:\n• ECDSAより数学的にシンプル\n• 線形性: 複数の署名を集約可能\n• マルチシグが単一署名と区別不能 → プライバシー向上\n\n数学的には:\n署名 s = k + ex（eはチャレンジ）\n検証: sG = R + eP\n\nシュノアプロトコルの楕円曲線版です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：楕円曲線とBitcoin',
      content:
        '楕円曲線とBitcoin:\n\n• secp256k1: y² = x³ + 7 がBitcoinの基盤\n• 秘密鍵(256bit) → 公開鍵 → アドレス\n• ECDSA署名でトランザクションを認証\n• シュノア署名で進化（Taproot）\n• ECDLPの困難性が安全性を保証\n\n暗号通貨は代数学の実践的応用です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
