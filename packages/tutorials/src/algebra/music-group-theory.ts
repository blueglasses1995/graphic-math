import { Tutorial } from '../types';

export const musicGroupTheoryTutorial: Tutorial = {
  id: 'music-group-theory',
  title: '【実践】音楽と群論',
  description: '音楽の構造を群論で分析する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '音楽は数学でできている',
      content:
        'ピアノの鍵盤には12の音があります（C, C#, D, ..., B）。\n\nオクターブ上がると「同じ」音に戻ります。\n\nこれは mod 12 の世界 ── つまり ℤ/12ℤ の構造です！\n\n音楽の多くの概念は、群論で美しく記述できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'music-group-theory-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'transposition',
      title: '移調は群の作用',
      content:
        '移調（キーを変える）は ℤ/12ℤ の加法です。\n\n半音上げる: すべての音に +1 (mod 12)\n  C → C#, D → D#, ...\n\n完全5度上げる: +7 (mod 12)\n  C → G, D → A, ...\n\n12種類の移調が巡回群 C₁₂ を構成します。\n\n移調しても曲の「構造」は変わりません ── これが群作用の本質です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'inversion',
      title: '転回と二面体群',
      content:
        '転回（音程を裏返す）: n → -n (mod 12)\n\nC(0) → C(0), D(2) → A#(10), E(4) → G#(8)\n\n移調と転回を合わせると、24個の操作が得られます。\n\nこれは二面体群 D₁₂ と同型です！\n\n12面正多角形の回転（移調）と反射（転回）に対応しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'twelve-tone',
      title: '十二音技法',
      content:
        'シェーンベルクの十二音技法（1920年代）:\n\n12の音をすべて1回ずつ使う「音列」を基本とする作曲法。\n\n音列の操作:\n  原型 P: そのまま\n  逆行 R: 逆順にする\n  反行 I: 音程を反転\n  逆行反行 RI: 両方適用\n\nこの4つの操作はクラインの四元群 V₄ ≅ ℤ/2ℤ × ℤ/2ℤ を構成します。\n\n移調を加えると 48 の変形が得られます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'chord-theory',
      title: '和音の群論',
      content:
        '和音も群論で分析できます。\n\n長三和音（メジャーコード）: {0, 4, 7}\nC major = {C, E, G}\n\n12の移調で12種類の長三和音が得られます。\n\nこれは ℤ/12ℤ の {0, 4, 7} への作用です。\n\n和音進行のパターンも、群の準同型として研究されています。\n\nフーリエ解析（群上の）が和音の「響き」を数学的に説明します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '音楽と群論について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '12音の移調が作る群はどれですか？',
        options: [
          { id: 'a', label: 'S₁₂', correct: false },
          { id: 'b', label: 'C₁₂ ≅ ℤ/12ℤ', correct: true },
          { id: 'c', label: 'D₆', correct: false },
          { id: 'd', label: 'A₁₂', correct: false },
        ],
        explanation:
          '正解は C₁₂ ≅ ℤ/12ℤ です。12段階の移調は巡回群 C₁₂ を構成します。半音上げる操作を生成元として、12回繰り返すと元に戻ります。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '音楽と群論:\n\n1. 12音体系は ℤ/12ℤ の構造\n2. 移調は巡回群 C₁₂ の作用\n3. 移調 + 転回 = 二面体群 D₁₂\n4. 十二音技法にクラインの四元群が出現\n5. 和音理論にも群作用が応用\n\n音楽という感性の世界にも、群論の構造が深く根づいています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'music-group-theory-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
