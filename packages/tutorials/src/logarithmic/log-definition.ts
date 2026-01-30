import { Tutorial } from '../types';

export const logDefinitionTutorial: Tutorial = {
  id: 'log-definition',
  title: '対数の定義',
  description: 'log_a(b) = c ⇔ a^c = b という対数の定義を理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '指数の逆演算',
      content:
        'a^c = b のとき、c = log_a(b) と書きます。指数の「答え」を求めるのではなく「指数そのもの」を求める演算が対数です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '底 a と真数 b を変えて、対数の値がどう変わるか確認してください。底が大きいほど対数は小さくなります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'log₂(8) = 3',
      content:
        '定義に当てはめましょう。2³ = 8 だから log₂(8) = 3。底は2、真数は8、対数の値は3です。',
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
      id: 'example-2',
      title: 'log₃(81) = 4',
      content:
        '3⁴ = 81 だから log₃(81) = 4。底が3の場合、3を4回かけると81になります。対数の定義はどの底でも同じ構造です。',
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
      id: 'predict',
      title: '予測してみよう',
      content:
        'log₅(125) の値を求めてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₅(125) はいくつ？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '3', correct: true },
          { id: 'c', label: '4', correct: false },
          { id: 'd', label: '5', correct: false },
        ],
        explanation:
          '5³ = 125 なので log₅(125) = 3 です。',
      },
    },
    {
      id: 'alternate',
      title: '真数の条件',
      content:
        '対数には条件があります。\n\n1. 底 a > 0 かつ a ≠ 1\n2. 真数 b > 0\n\n負の数や0の対数は定義できません。なぜなら、正の数を何回かけても負や0にはならないからです。',
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
      id: 'summary',
      title: 'まとめ',
      content:
        'log_a(b) = c ⇔ a^c = b。対数は指数の逆演算です。底 > 0（≠1）、真数 > 0 が条件。\n\n自由に値を変えて定義を体感してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
