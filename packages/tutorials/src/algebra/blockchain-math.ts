import { Tutorial } from '../types';

export const blockchainMathTutorial: Tutorial = {
  id: 'blockchain-math',
  title: 'ブロックチェーンの数学',
  description: 'ブロックチェーンを支える暗号学的ハッシュと代数的構造を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '信頼不要の仕組み',
      content:
        '銀行なしで送金。管理者なしで記録を保持。\n\nブロックチェーンは「信頼」を「数学」で置き換えます。\n\nその数学とは:\n• 暗号学的ハッシュ関数\n• デジタル署名（楕円曲線暗号）\n• マークルツリー\n\nすべて代数学の応用です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ハッシュチェーンを構築',
      content:
        'ブロックチェーンの核心はハッシュチェーン:\n\nBlock₁: data₁, H₀\nBlock₂: data₂, H(Block₁)\nBlock₃: data₃, H(Block₂)\n\n前のブロックのハッシュを含むことで、\n過去のデータの改竄を検出できます。\n\nブロックを追加してチェーンを体験しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'マークルツリー',
      content:
        'マークルツリー: トランザクションのハッシュの木構造\n\n       H(AB|CD)\n      /        \\\n   H(A|B)    H(C|D)\n   /   \\     /   \\\n  H(A) H(B) H(C) H(D)\n   |    |    |    |  \n   A    B    C    D\n\n任意のトランザクションの存在を O(log n) で証明可能。\n全データを持たなくても検証できる（SPV）。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'コンセンサスの数学',
      content:
        'Proof of Work（PoW）の数学:\n\nH(block || nonce) < target\n\nハッシュの原像耐性により、条件を満たす nonce を見つけるには\n総当たりしかない → 計算量で「努力」を証明。\n\n確率: P(成功) = target / 2²⁵⁶\n期待試行回数: 2²⁵⁶ / target\n\nポアソン過程でモデル化されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'ブロックチェーンの数学を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ブロックチェーンで過去のデータの改竄が困難な理由は？',
        options: [
          { id: 'a', label: 'データが暗号化されているから', correct: false },
          { id: 'b', label: '各ブロックが前のブロックのハッシュを含むから', correct: true },
          { id: 'c', label: 'データが分散保存されているだけだから', correct: false },
          { id: 'd', label: '管理者が監視しているから', correct: false },
        ],
        explanation:
          '各ブロックが前のブロックのハッシュを含むため、過去のデータを変更するとハッシュが変わり、以降の全ブロックの再計算が必要になります。ハッシュ関数の一方向性がこれを困難にします。',
      },
    },
    {
      id: 'alternate',
      title: 'スマートコントラクトと代数',
      content:
        'スマートコントラクトの数学的側面:\n\n• 形式検証: 契約の正しさを数学的に証明\n• 状態遷移: 有限オートマトンとして記述\n• ガス計算: 計算量の測定と制限\n\nDeFi（分散型金融）の数学:\n• 自動マーケットメーカー: x × y = k（双曲線）\n• 流動性プール: 多変数関数の最適化\n\n代数学がブロックチェーンの可能性を広げます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ブロックチェーンの数学',
      content:
        'ブロックチェーンの数学:\n\n• ハッシュチェーンでデータの整合性を保証\n• マークルツリーで効率的な検証\n• PoWはハッシュの原像耐性を利用\n• 楕円曲線暗号でトランザクションを署名\n• スマートコントラクトの形式検証\n\n代数学がWeb3の基盤を支えています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
