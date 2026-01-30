import { Tutorial } from '../types';

export const hashFunctionTutorial: Tutorial = {
  id: 'hash-function',
  title: 'ハッシュ関数の仕組み',
  description: '暗号学的ハッシュ関数の数学的構造と安全性を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'デジタル指紋',
      content:
        'どんな長さのデータも固定長の「指紋」に変換する。\nそれがハッシュ関数です。\n\nファイルが改竄されていないか確認したり、\nパスワードを安全に保存したり。\n\nその数学的仕組みを見ていきましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ハッシュ値の計算',
      content:
        '簡単なハッシュ関数を体験しましょう。\n\nH(x) = x² mod 17 として:\nH(3) = 9, H(5) = 8, H(7) = 15\n\n1文字変えるだけで全く違うハッシュ値に。\nこれが「雪崩効果（アバランシェ効果）」です。\n\n入力を変えてハッシュ値の変化を観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ハッシュ関数の安全性要件',
      content:
        '暗号学的ハッシュ関数 H に求められる性質:\n\n1. 原像耐性: H(x) = y から x を求めるのが困難\n2. 第二原像耐性: H(x₁) = H(x₂) となる x₂ を見つけるのが困難\n3. 衝突耐性: H(x₁) = H(x₂) となる任意の (x₁, x₂) を見つけるのが困難\n\n誕生日パラドックスにより、nビットハッシュの衝突は約 2^{n/2} で発見可能。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'SHA-256の構造',
      content:
        'SHA-256はメルクル・ダムガード構成を使用:\n\nメッセージをブロックに分割し、\n圧縮関数を繰り返し適用します。\n\nH₀ → f(H₀, M₁) = H₁ → f(H₁, M₂) = H₂ → ...\n\n圧縮関数 f 内部ではビット演算（AND, XOR, NOT, 回転）と\nmod 2³² の加算が使われます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'ハッシュ関数について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '256ビットのハッシュ関数で衝突を見つけるには約何回の計算が必要？',
        options: [
          { id: 'a', label: '2²⁵⁶ 回', correct: false },
          { id: 'b', label: '2¹²⁸ 回', correct: true },
          { id: 'c', label: '2⁶⁴ 回', correct: false },
          { id: 'd', label: '256 回', correct: false },
        ],
        explanation:
          '誕生日パラドックスにより、nビットのハッシュ関数では約 2^{n/2} 回の計算で衝突が見つかる確率が50%を超えます。256ビットなら約 2¹²⁸ 回です。',
      },
    },
    {
      id: 'alternate',
      title: 'ハッシュ関数と代数',
      content:
        'ハッシュ関数と代数構造の関係:\n\n• SHA系: Z/(2³²Z) 上の演算（環の構造）\n• Keccak(SHA-3): ビット列上の置換群\n• ペデルセンハッシュ: 楕円曲線群を利用\n\n代数的攻撃:\n関数の構造を代数方程式系として解く攻撃手法も研究されています。\n代数的性質が安全性の分析に不可欠です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ハッシュ関数',
      content:
        'ハッシュ関数:\n\n• 任意長データを固定長に圧縮\n• 原像耐性・衝突耐性が重要\n• 誕生日パラドックスで衝突計算量は 2^{n/2}\n• SHA-256 等が広く使用\n• 代数的構造が設計と分析の基盤\n\nデジタル社会の信頼を支える技術です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
