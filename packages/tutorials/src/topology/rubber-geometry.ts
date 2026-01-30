import { Tutorial } from '../types';

export const rubberGeometryTutorial: Tutorial = {
  id: 'rubber-geometry',
  title: 'ゴムの幾何学',
  description: '位相幾何学の基本的な考え方――形を伸ばしたり曲げたりしても変わらない性質を探る',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: 'ゴムのように伸ばす',
      content:
        '三角形がゆっくりと円に変形していきます。切ったり貼ったりせず、ただ伸ばすだけ。位相幾何学（トポロジー）では、この2つは「同じ形」です。再生して変形を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-rubber-morph',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '頂点をドラッグして自由に形を変えてみましょう。どんなに変形しても「穴がない閉じた曲線」という性質は変わりません。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-rubber-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'コーヒーカップとドーナツ',
      content:
        '有名な例え話：位相幾何学者はコーヒーカップとドーナツの区別がつかない。どちらも穴が1つだけの立体だからです。取っ手の穴＝ドーナツの穴。',
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
      title: '変形していいこと・ダメなこと',
      content:
        '許される操作：伸ばす、曲げる、ねじる。禁止される操作：切る、穴を開ける、くっつける。この制約が位相幾何学の本質です。破ったり貼ったりしなければ、どんな変形もOK。',
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
        'ボールとサイコロ。位相幾何学的に「同じ」でしょうか？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ボールとサイコロは位相的に同じ？',
        options: [
          { id: 'a', label: '同じ（穴がないから）', correct: true },
          { id: 'b', label: '違う（角があるから）', correct: false },
          { id: 'c', label: '違う（面の数が違うから）', correct: false },
          { id: 'd', label: '判断できない', correct: false },
        ],
        explanation:
          '角や面の数は位相的には関係ありません。どちらも穴のない閉じた曲面なので、ゴムのように変形すれば一致します。',
      },
    },
    {
      id: 'alternate',
      title: '粘土で考える',
      content:
        '粘土の塊を想像してください。ちぎらず穴を開けず、こねるだけでどんな形にでもなれます。球、立方体、ピラミッド――全部「同じ」。でも指でドーナツ型に穴を開けた瞬間、別の分類に移ります。',
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
        '位相幾何学＝ゴムの幾何学。切らず・貼らず変形しても変わらない性質を研究する分野です。\n\n大事なポイント：\n- 距離や角度は気にしない\n- 穴の数が最も基本的な不変量\n- 「同じ形」の定義が普段と違う\n\n自由に形を変形して感覚をつかみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-rubber-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
