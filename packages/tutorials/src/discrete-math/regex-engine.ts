import { Tutorial } from '../types';

export const regexEngineTutorial: Tutorial = {
  id: 'regex-engine',
  title: '正規表現エンジン',
  description: '正規表現エンジンの内部動作とNFA/DFA実装を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'パターンマッチングの裏側',
      content:
        'プログラミングで /[a-z]+@[a-z]+\\.[a-z]+/ と書いてメールアドレスを検索するとき、内部では何が起きているのでしょう？\n\n正規表現エンジンは、パターンをオートマトンに変換して文字列をスキャンしています。\n\nその仕組みを覗いてみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'NFAベースのマッチング',
      content:
        'NFAベースエンジンの動作：\n\n1. 正規表現をNFAに変換（トンプソン構成）\n2. 入力文字列を1文字ずつ読む\n3. 現在いる可能性のある状態集合を管理\n4. 受理状態に到達したらマッチ成功\n\n状態集合の遷移を操作してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'NFAエンジン vs DFAエンジン',
      content:
        'NFAエンジン（Python, Java, Perl等）：\n・バックトラッキングで実装\n・後方参照、先読み等の拡張が容易\n・最悪 O(2ⁿ) の場合あり（ReDoS脆弱性）\n\nDFAエンジン（grep, awk等）：\n・NFA→DFAに変換して実行\n・常に O(n) で文字列長に線形\n・後方参照は不可\n\n用途によって使い分けが必要です。',
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
      id: 'example-2',
      title: 'ReDoS：正規表現の脆弱性',
      content:
        'ReDoS（Regular Expression Denial of Service）：\n\n悪意ある入力で正規表現の処理時間が指数的に増大する攻撃。\n\n例：/(a+)+$/ に対して "aaaaaaaaaaaaaX" を入力\n→ バックトラッキングが爆発し、処理が停止\n\n対策：\n・DFAベースのエンジンを使う\n・タイムアウトを設定\n・正規表現を簡素化\n\nオートマトン理論の理解が安全なコードに直結します。',
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
      id: 'predict',
      title: 'クイズ：正規表現エンジン',
      content: '正規表現エンジンの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'DFAベースの正規表現エンジンの利点はどれですか？',
        options: [
          { id: 'a', label: '後方参照が使える', correct: false },
          { id: 'b', label: '文字列長に対して常に線形時間で動作する', correct: true },
          { id: 'c', label: '実装が簡単', correct: false },
          { id: 'd', label: '先読み/後読みが可能', correct: false },
        ],
        explanation:
          'DFAベースエンジンは各文字を1回だけ処理するため O(n) を保証します。バックトラッキングによる指数的爆発がありません。',
      },
    },
    {
      id: 'alternate',
      title: 'RE2エンジン',
      content:
        'GoogleのRE2は安全な正規表現エンジンの実装です。\n\n特徴：\n・NFAシミュレーション（バックトラッキングなし）\n・最悪でもO(mn)（m: パターン長、n: 文字列長）\n・ReDoSの心配がない\n・後方参照は非サポート（意図的にCFLの機能を排除）\n\n理論に基づいた設計が安全性と性能を両立させています。',
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
      title: 'まとめ：正規表現エンジン',
      content:
        '正規表現エンジンはオートマトン理論の実践的応用です。\n\n・NFAベース：柔軟だが最悪指数時間\n・DFAベース：線形時間だが機能制限\n・ReDoS：バックトラッキングの脆弱性\n・RE2等の安全なエンジンが存在\n\n理論を知ることで安全で効率的なコードが書けます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
