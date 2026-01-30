import { Tutorial } from '../types';

export const algebraCryptoOverviewTutorial: Tutorial = {
  id: 'algebra-crypto-overview',
  title: '代数学と暗号の全体像',
  description: '代数学と暗号理論の関係を俯瞰し、全体像を把握する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '代数学と暗号の壮大な物語',
      content:
        'ガロアが方程式の対称性を群で捉えてから約200年。\n\n群・環・体の理論は、予想もしなかった場所で花開きました。\n\nインターネット通信、暗号通貨、プライバシー保護、量子安全性。\n\n代数学と暗号の関係の全体像を俯瞰しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'algebra-crypto-overview-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '代数構造と暗号のマップ',
      content:
        '代数構造から暗号への対応を探索しましょう:\n\n群 → DH鍵交換、ElGamal暗号、デジタル署名\n環 → 格子暗号、AES、多項式暗号\n体 → RSA(Z/nZ)、楕円曲線暗号、秘密分散\n\n各構造がどの暗号を支えているか確認してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'algebra-crypto-overview-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '群論と暗号',
      content:
        '群論が暗号に与えた影響:\n\n• 巡回群 → 離散対数問題 → DH, ElGamal\n• 楕円曲線群 → ECDLP → ECDH, ECDSA\n• 対称群 → 置換暗号の分析\n• ユニタリ群 → 量子計算・量子暗号\n\n群の「一方向性」（g^x は簡単、x の復元は困難）が\n公開鍵暗号を可能にしました。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '環論・体論と暗号',
      content:
        '環と体の暗号への貢献:\n\n• Z/nZ の乗法群 → RSA暗号\n• 有限体 GF(2⁸) → AES の内部構造\n• 多項式環 Z_q[x]/(x^n+1) → 格子暗号\n• 有限体上の多項式補間 → 秘密分散\n• 楕円曲線（体上の代数多様体）→ ECC\n\nイデアル、商環、拡大体の概念が\n暗号の設計と解析に不可欠です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '総合クイズ',
      content: '代数学と暗号の全体像を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち、量子コンピュータに対して安全と考えられている暗号方式は？',
        options: [
          { id: 'a', label: 'RSA暗号', correct: false },
          { id: 'b', label: '楕円曲線暗号', correct: false },
          { id: 'c', label: '格子暗号', correct: true },
          { id: 'd', label: 'ディフィー・ヘルマン鍵交換', correct: false },
        ],
        explanation:
          '格子暗号はショアのアルゴリズムでは破れず、量子コンピュータに対しても安全と考えられています。RSA、ECC、DHはいずれもショアのアルゴリズムで破られます。',
      },
    },
    {
      id: 'alternate',
      title: '未来への展望',
      content:
        '代数学と暗号の未来:\n\n• ポスト量子暗号の本格導入\n• 完全準同型暗号の実用化 → プライバシー保護AI\n• ゼロ知識証明の進化 → Web3・分散ID\n• 多者間秘密計算 → 安全なデータ共有\n• 新しい代数的構造の発見 → 新暗号方式\n\n代数学の発展が暗号の可能性を広げ、\n暗号の課題が代数学の新しい問題を生み出します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：代数学と暗号の全体像',
      content:
        '代数学と暗号理論の全体像:\n\n• 群論: 離散対数問題 → DH, ECC\n• 環論: 多項式環 → 格子暗号, AES\n• 体論: 有限体 → RSA, 秘密分散\n• ガロア理論 → 方程式の可解性\n• ポスト量子暗号 → 未来の安全性\n\n純粋数学と応用の美しい融合。\n代数学の旅はまだまだ続きます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'algebra-crypto-overview-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
