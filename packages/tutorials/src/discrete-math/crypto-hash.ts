import { Tutorial } from '../types';

export const cryptoHashTutorial: Tutorial = {
  id: 'crypto-hash',
  title: '【実践】暗号とハッシュ',
  description: '離散数学がセキュリティの基盤となる仕組みを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'なぜ暗号が安全か',
      content:
        'インターネットでクレジットカード情報を送れるのはなぜでしょうか？\n\n暗号の安全性は「ある数学的問題が計算上困難である」ことに基づいています。\n\n大きな数の素因数分解や離散対数問題 ── 離散数学が暗号の土台です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'modular',
      title: '合同算術',
      content:
        '暗号の基本は「mod（剰余）演算」です。\n\na ≡ b (mod n)：aをnで割った余りとbをnで割った余りが等しい\n\n時計の算術と同じ：15時 ≡ 3時 (mod 12)\n\nmod演算の重要な性質：\n(a + b) mod n = ((a mod n) + (b mod n)) mod n\n(a × b) mod n = ((a mod n) × (b mod n)) mod n',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'rsa',
      title: 'RSA暗号の仕組み',
      content:
        'RSA暗号の原理（簡略版）：\n\n1. 大きな素数 p, q を選び、n = p × q\n2. 公開鍵 e と秘密鍵 d を計算\n3. 暗号化：c = m^e mod n\n4. 復号：m = c^d mod n\n\n安全性の根拠：nの素因数分解が計算上困難\n（数百桁の数の素因数分解は現在のコンピュータで不可能）',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'hash',
      title: 'ハッシュ関数',
      content:
        'ハッシュ関数：任意の入力を固定長の値に変換する関数\n\n重要な性質：\n・一方向性：ハッシュ値から元の入力を復元できない\n・衝突耐性：同じハッシュ値を持つ異なる入力を見つけにくい\n\nパスワードの保存、ファイルの改ざん検出、ブロックチェーンに使われます。\n\n鳩の巣原理より衝突は必ず存在しますが、見つけるのが困難です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '暗号の基礎知識を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'RSA暗号の安全性の根拠は？',
        options: [
          { id: 'a', label: '大きな数の加算が困難', correct: false },
          { id: 'b', label: '大きな数の素因数分解が困難', correct: true },
          { id: 'c', label: '乱数の生成が困難', correct: false },
          { id: 'd', label: 'mod演算が困難', correct: false },
        ],
        explanation:
          '正解は「大きな数の素因数分解が困難」です。2つの大きな素数の積 n を公開しても、元の素数 p, q を見つけるのは計算上非常に困難です。',
      },
    },
    {
      id: 'birthday',
      title: '誕生日攻撃',
      content:
        '誕生日のパラドックス：23人で同じ誕生日のペアが50%以上の確率で存在。\n\nこれはハッシュの衝突攻撃に応用されます。\n\n出力がnビットのハッシュ関数では、2^(n/2) 回の計算で衝突が見つかる期待値です。\n\n256ビットハッシュなら 2^128 回 ── 十分に安全です。\n\n組合せ論と確率論が暗号の安全性評価に直結します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '・合同算術が暗号の基本演算\n・RSA暗号：素因数分解の困難性に依存\n・ハッシュ関数：一方向性と衝突耐性\n・誕生日攻撃：組合せ論的な安全性評価\n\n離散数学はサイバーセキュリティの根幹を支える学問です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
