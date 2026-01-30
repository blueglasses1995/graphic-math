import { Tutorial } from '../types';

export const backtrackingTutorial: Tutorial = {
  id: 'backtracking',
  title: 'バックトラッキング',
  description: '試行錯誤で解を探索するバックトラッキングの仕組みを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '迷路を解くように',
      content:
        '迷路で行き止まりに当たったら、戻って別の道を試します。\n\nこの「進む → 行き詰まる → 戻る → 別の道を試す」がバックトラッキングです。\n\n全探索を体系的に行いつつ、明らかに不要な探索を枝刈りして効率化します。',
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
      title: 'N-Queensを解いてみよう',
      content:
        'N-Queens問題：N×Nのチェス盤にN個のクイーンを互いに攻撃し合わないよう配置する。\n\nバックトラッキングのアプローチ：\n1. 1行目にクイーンを置く\n2. 2行目で衝突しない列にクイーンを置く\n3. 置けなければ前の行に戻る（バックトラック）\n\n実際に配置を試してみましょう。',
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
      title: '数独の解法',
      content:
        '数独もバックトラッキングで解けます。\n\n1. 空きマスを見つける\n2. 1-9を順に試す\n3. 行・列・3×3ブロックに違反しなければ確定して次へ\n4. どの数字も置けなければバックトラック\n\n枝刈りの工夫：\n・候補が少ないマスから埋める\n・制約伝播で候補を減らす\n\nこれで人間が解けない数独も高速に解けます。',
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
      title: '部分集合の列挙',
      content:
        '集合 {1,2,3} のすべての部分集合を列挙するバックトラッキング：\n\n各要素について「含む/含まない」を選択する木を探索\n\n        {}\n      /    \\\n    {1}     {}\n   /  \\   /  \\\n {1,2} {1} {2} {}\n  ...   ...  ... ...\n\n結果：{}, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}\n\n2ⁿ個の部分集合を体系的に生成できます。',
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
      title: 'クイズ：バックトラッキング',
      content: 'バックトラッキングの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'バックトラッキングの「枝刈り」とは何ですか？',
        options: [
          { id: 'a', label: '解が見つかったら即座に終了すること', correct: false },
          { id: 'b', label: '明らかに解に至らない探索を早期に打ち切ること', correct: true },
          { id: 'c', label: '探索木の深さを制限すること', correct: false },
          { id: 'd', label: 'ランダムに探索パスを選ぶこと', correct: false },
        ],
        explanation:
          '枝刈り（pruning）は、制約違反が確定した時点で探索を打ち切り、無駄な計算を省く技法です。',
      },
    },
    {
      id: 'alternate',
      title: '分枝限定法',
      content:
        'バックトラッキングの発展形が分枝限定法（Branch and Bound）です。\n\n各ノードで「この先の最良の解の上界/下界」を計算し、現在の暫定最良解より悪ければ枝刈り。\n\n最適化問題（最小コスト巡回路など）に特に有効です。\n\nバックトラッキング：実行可能性による枝刈り\n分枝限定法：最適性による枝刈り',
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
      title: 'まとめ：バックトラッキング',
      content:
        'バックトラッキングは体系的な試行錯誤の手法です。\n\n・探索木を深さ優先で辿り、行き詰まったら戻る\n・枝刈りで不要な探索を削減\n・N-Queens、数独、組合せ列挙など幅広い応用\n・分枝限定法で最適化問題にも拡張可能\n\n指数時間でも、枝刈りにより実用的に高速に解けることが多いです。',
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
