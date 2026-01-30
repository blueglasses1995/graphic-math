import { Tutorial } from '../types';

export const proofByContradictionTutorial: Tutorial = {
  id: 'proof-by-contradiction',
  title: '背理法と対偶',
  description: '間接的な証明方法の力を理解する',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '直接証明できないとき',
      content:
        '「√2は無理数である」── この命題を直接証明するのは難しそうです。\n\n「もし有理数だったら…」と仮定してみると矛盾が生じます。\n\nこのように「否定を仮定して矛盾を導く」方法が背理法です。\n\n数学で最も強力な証明技法の一つです。',
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
      id: 'contradiction',
      title: '背理法の構造',
      content:
        '命題 P を証明したいとき：\n\n1. ¬P（Pの否定）を仮定する\n2. 論理的推論を進める\n3. 矛盾を導く（例：Q ∧ ¬Q の形）\n4. よって仮定 ¬P が誤り → P が真\n\n「背理」の名前通り、理に背く結論から元の命題の正しさを示します。',
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
      id: 'sqrt2',
      title: '例：√2の無理性',
      content:
        '√2が有理数と仮定：√2 = p/q（p, qは互いに素な整数）\n\n両辺を2乗：2 = p²/q² → p² = 2q²\np²は偶数 → pも偶数 → p = 2m とおける\n(2m)² = 2q² → 4m² = 2q² → q² = 2m²\nq²も偶数 → qも偶数\n\np, q がともに偶数 → 互いに素に矛盾！\n\nよって√2は無理数。',
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
      id: 'contrapositive',
      title: '対偶による証明',
      content:
        '対偶：「P → Q」の対偶は「¬Q → ¬P」で、両者は論理的に同値です。\n\n例：「n²が偶数ならnは偶数」を証明\n\n対偶：「nが奇数ならn²は奇数」\nn = 2k+1 とおくと n² = 4k²+4k+1 = 2(2k²+2k)+1（奇数）✓\n\n直接よりも対偶の方が証明しやすい場合があります。',
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
      content: '対偶について確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '「雨が降れば地面が濡れる」の対偶は？',
        options: [
          { id: 'a', label: '地面が濡れれば雨が降る', correct: false },
          { id: 'b', label: '雨が降らなければ地面は濡れない', correct: false },
          { id: 'c', label: '地面が濡れていなければ雨は降っていない', correct: true },
          { id: 'd', label: '地面が濡れれば雨は降っていない', correct: false },
        ],
        explanation:
          '正解は「地面が濡れていなければ雨は降っていない」です。「P→Q」の対偶は「¬Q→¬P」です。aは逆、bは裏で、どちらも元の命題と同値ではありません。',
      },
    },
    {
      id: 'comparison',
      title: '逆・裏・対偶',
      content:
        '命題 P → Q に対して：\n\n・逆：Q → P（同値とは限らない）\n・裏：¬P → ¬Q（同値とは限らない）\n・対偶：¬Q → ¬P（常に同値）\n\n逆と裏は互いに対偶の関係にあるので同値です。\n\nしかし元の命題とは独立です。「逆は必ずしも真ならず」です。',
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
        '・背理法：否定を仮定→矛盾→元の命題が真\n・対偶：P→Q と ¬Q→¬P は同値\n・逆と裏は元の命題と同値ではない\n・√2の無理性は背理法の古典的な例\n\n直接証明が難しい命題でも、間接的な方法で美しく証明できます。\n\n次は、離散数学全体のまとめです。',
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
