import { Tutorial } from '../types';

export const turingMachineTutorial: Tutorial = {
  id: 'turing-machine',
  title: 'チューリングマシン',
  description: '計算の最も基本的なモデル、チューリングマシンを理解する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '究極の計算機械',
      content:
        '1936年、アラン・チューリングは「計算とは何か」を定義するために、ある抽象的な機械を考案しました。\n\n無限に長いテープ、読み書きヘッド、そして有限の状態。\n\nこのシンプルな機械が、現代のすべてのコンピュータと同等の計算能力を持つのです。',
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
      title: 'チューリングマシンを動かそう',
      content:
        'チューリングマシン (Q, Σ, Γ, δ, q₀, q_accept, q_reject)：\n\n・無限テープに入力が書かれている\n・ヘッドが1マスずつ読み書き\n・遷移関数 δ(状態, 読んだ記号) = (新状態, 書く記号, 移動方向)\n\nヘッドの動きを操作してみましょう。',
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
      title: '回文の判定',
      content:
        '文字列が回文かどうかを判定するチューリングマシン：\n\n1. 先頭の文字を読んで記憶（状態に保存）、マークを書く\n2. 右端まで移動\n3. 末尾の文字と比較\n4. 一致したらマーク、左端に戻る\n5. 繰り返し、すべて一致なら受理\n\n有限オートマトンやPDAでは不可能だった処理です。',
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
      title: '万能チューリングマシン',
      content:
        '万能チューリングマシンは「プログラムを読んで実行する」チューリングマシンです。\n\n入力：別のチューリングマシンMの記述 + 入力w\n出力：Mがwに対して出す結果と同じ\n\nこれはまさに現代のコンピュータの概念です。\n「ハードウェアは固定、ソフトウェアで動作を変える」という考え方の原点です。',
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
      title: 'クイズ：チューリングマシン',
      content: 'チューリングマシンの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'チューリングマシンがPDAと異なる最大の特徴は何ですか？',
        options: [
          { id: 'a', label: '状態数が無限である', correct: false },
          { id: 'b', label: 'テープに読み書きでき、左右に移動できる', correct: true },
          { id: 'c', label: '入力を並列に処理できる', correct: false },
          { id: 'd', label: '非決定性を持つ', correct: false },
        ],
        explanation:
          '正解は「テープに読み書きでき、左右に移動できる」です。PDAのスタックと違い、テープは任意の位置にアクセスできます。',
      },
    },
    {
      id: 'alternate',
      title: '停止問題',
      content:
        '「任意のプログラムが停止するかどうかを判定するアルゴリズムは存在しない」\n\nこれがチューリングの停止問題です。対角線論法を用いて証明されます。\n\n仮に停止判定器Hが存在すると仮定し、自分自身に適用すると矛盾が生じます。\n\nこれは計算の原理的な限界を示す重要な結果です。',
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
      title: 'まとめ：チューリングマシン',
      content:
        'チューリングマシンは計算可能性の基礎を与えます。\n\n・無限テープと読み書きヘッドからなるシンプルな機械\n・現代のコンピュータと同等の計算能力\n・万能チューリングマシン＝プログラム内蔵型コンピュータの概念\n・停止問題により計算の限界が存在する\n\nチャーチ＝チューリングの提唱：計算可能＝チューリングマシンで計算可能',
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
