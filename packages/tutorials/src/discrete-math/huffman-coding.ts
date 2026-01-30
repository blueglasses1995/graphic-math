import { Tutorial } from '../types';

export const huffmanCodingTutorial: Tutorial = {
  id: 'huffman-coding',
  title: 'ハフマン符号',
  description: '最適な接頭辞符号を貪欲法で構成するハフマン符号を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'データ圧縮の数学',
      content:
        'ZIP、JPEG、MP3…日常的に使う圧縮技術。\n\n頻出する文字に短い符号、稀な文字に長い符号を割り当てれば、全体のデータ量が減ります。\n\nハフマン符号は、この「最適な割り当て」を自動的に見つけるアルゴリズムです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'huffman-coding-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ハフマン木を構築しよう',
      content:
        '文字の出現頻度からハフマン木を構築します。\n\n1. 各文字をノードとし、頻度を重みとする\n2. 重み最小の2ノードを結合して新ノードを作る\n3. 新ノードの重みは2つの合計\n4. ノードが1つになるまで繰り返す\n\nこの貪欲な手順を操作してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'huffman-coding-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '具体例',
      content:
        '文字と頻度：A(45), B(13), C(12), D(16), E(9), F(5)\n\n構築過程：\n{E:9, F:5} → EF:14\n{C:12, B:13} → BC:25\n{EF:14, D:16} → EFD:30\n{BC:25, EFD:30} → BCEFD:55\n{A:45, BCEFD:55} → root:100\n\n符号：A=0, B=101, C=100, D=111, E=1101, F=1100\n\n頻出するAが1ビット、稀なFが4ビットです。',
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
      title: '最適性の証明',
      content:
        'ハフマン符号が最適（平均符号長が最小）である証明のスケッチ：\n\n1. 最適符号木では、頻度最小の2文字は最深の兄弟ノードにある\n2. この2文字を結合しても最適性は保たれる\n3. 帰納法により、ハフマン法は各ステップで最適な選択をしている\n\nこれは貪欲法が最適になる美しい例です。\n\n平均符号長はエントロピー H = -Σ pᵢ log₂ pᵢ に近づきます。',
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
      title: 'クイズ：ハフマン符号',
      content: 'ハフマン符号の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ハフマン符号で頻度が最も高い文字の符号長はどうなりますか？',
        options: [
          { id: 'a', label: '最も長い', correct: false },
          { id: 'b', label: '最も短い', correct: true },
          { id: 'c', label: 'すべて同じ長さ', correct: false },
          { id: 'd', label: '頻度に関係なく決まる', correct: false },
        ],
        explanation:
          '頻度が高い文字ほど木の根に近く、短い符号が割り当てられます。これにより全体の平均符号長が最小化されます。',
      },
    },
    {
      id: 'alternate',
      title: '接頭辞符号の重要性',
      content:
        'ハフマン符号は「接頭辞符号（prefix code）」です。\n\nどの符号語も他の符号語の接頭辞にならないため、区切りなしで復号できます。\n\n例：0, 100, 101, 110 → 010011001010 を\n 0|100|110|0|101|0 と一意に復号可能\n\nもし 0 と 01 が同時にあると復号が曖昧になります。\n\n接頭辞符号の最適なものがハフマン符号です。',
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
      title: 'まとめ：ハフマン符号',
      content:
        'ハフマン符号は最適な接頭辞符号を構成する貪欲アルゴリズムです。\n\n・頻度の低いものから順に結合\n・接頭辞符号のため一意に復号可能\n・平均符号長が最小（エントロピーに漸近）\n・ZIP, DEFLATE, JPEGなどの基盤技術\n\n離散数学と情報理論の美しい交差点です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'huffman-coding-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
