import { Tutorial } from '../types';

export const digitalSignatureTutorial: Tutorial = {
  id: 'digital-signature',
  title: 'デジタル署名',
  description: 'デジタル署名の数学的仕組みと代数的構造を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '電子的な「印鑑」',
      content:
        '紙の文書には手書き署名や印鑑を押します。\n\nデジタル文書では？数学が「印鑑」の役割を果たします。\n\n• 本人だけが署名できる（偽造不可能）\n• 誰でも検証できる（公開検証）\n• 文書が改竄されていないことを保証\n\nその仕組みの核心は群論にあります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'digital-signature-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'RSA署名を体験',
      content:
        'RSA署名の仕組み:\n\n署名生成: s = H(m)^d mod n（秘密鍵dで署名）\n署名検証: s^e mod n = H(m)?（公開鍵eで検証）\n\nメッセージを選んで署名を生成・検証してみましょう。\n秘密鍵を知らない人は署名を作れないことを確認してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'digital-signature-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '署名方式の種類',
      content:
        '主要なデジタル署名方式:\n\n• RSA署名: 素因数分解の困難性に基づく\n• DSA: 離散対数問題に基づく\n• ECDSA: 楕円曲線上の離散対数に基づく\n• EdDSA (Ed25519): 高速で安全な楕円曲線署名\n\nいずれも「一方向性」のある数学的問題を利用しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ECDSAの数学',
      content:
        'ECDSA署名（Bitcoin等で使用）:\n\n秘密鍵: d（整数）、公開鍵: Q = dG\n\n署名生成:\n1. ランダムな k を選び、R = kG の x座標を r とする\n2. s = k⁻¹(H(m) + rd) mod n\n署名: (r, s)\n\n署名検証:\nu₁G + u₂Q の x座標が r に一致するか確認',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'デジタル署名について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'デジタル署名で「秘密鍵」を使うのはどの操作？',
        options: [
          { id: 'a', label: '署名の検証', correct: false },
          { id: 'b', label: '署名の生成', correct: true },
          { id: 'c', label: 'ハッシュの計算', correct: false },
          { id: 'd', label: '公開鍵の配布', correct: false },
        ],
        explanation:
          '署名の生成には秘密鍵が必要です。これにより本人だけが署名を作成できます。検証には公開鍵を使うため、誰でも検証可能です。',
      },
    },
    {
      id: 'alternate',
      title: '署名と準同型',
      content:
        'デジタル署名を群論の視点で見ると:\n\n署名は群の準同型的性質を利用しています。\n\nRSA: (Z/nZ)* の構造\nECDSA: 楕円曲線群 E(F_p) の構造\n\n「秘密鍵で署名、公開鍵で検証」は\n群の準同型の「逆方向」の困難性に対応します。\n\n群論が暗号の安全性を支えているのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：デジタル署名',
      content:
        'デジタル署名:\n\n• 秘密鍵で生成、公開鍵で検証\n• RSA, DSA, ECDSA, EdDSA 等の方式\n• 一方向性のある数学的問題に基づく\n• 改竄検出・本人認証・否認防止\n• 群論の構造が安全性を保証\n\nデジタル社会の信頼基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'digital-signature-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
