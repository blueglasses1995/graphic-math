import { Tutorial } from '../types';

export const genusTutorial: Tutorial = {
  id: 'genus',
  title: '穴の数（種数）',
  description: '曲面の穴の数が位相的不変量になる――種数の概念',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '穴を数えよう',
      content:
        '球（穴0）、トーラス（穴1）、二重トーラス（穴2）が順に表示されます。穴の数が増えるたびに形が本質的に変わります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-genus-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'スライダーで種数を変えて、曲面の形がどう変わるか観察しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-genus-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '種数の定義',
      content:
        '閉曲面の種数 g は「穴（ハンドル）の数」。球は g=0、トーラスは g=1。種数が異なる曲面は同相でありません。曲面分類の最も基本的な不変量です。',
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
      title: '日常の種数',
      content:
        'マグカップ: g=1（取っ手に穴1つ）。プレッツェル: g=3（穴3つ）。ストロー: g=1（貫通穴が1つ）。Tシャツ: g=3（首・袖・胴の穴）。',
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
      title: '予測してみよう',
      content:
        'ズボンの種数はいくつ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ズボンの種数は？（開口部を閉じた場合）',
        options: [
          { id: 'a', label: 'g=0', correct: false },
          { id: 'b', label: 'g=1', correct: true },
          { id: 'c', label: 'g=2', correct: false },
          { id: 'd', label: 'g=3', correct: false },
        ],
        explanation:
          'ズボンの開口部（腰・右脚・左脚）を閉じると、2つの脚が合流する部分にハンドルが1つできます。g=1です。',
      },
    },
    {
      id: 'alternate',
      title: '粘土で考える',
      content:
        '粘土の球に指で穴を1つ開けるとトーラス（g=1）。もう1つ開けると二重トーラス（g=2）。穴を増やすたびに位相的に別の曲面になります。逆に穴を埋めない限り元には戻れません。',
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
        '種数＝閉曲面の穴（ハンドル）の数。\n\nポイント：\n- 球: g=0、トーラス: g=1\n- 種数は位相的不変量\n- 種数が違えば同相でない\n\nスライダーで種数を変えてみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-genus-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
