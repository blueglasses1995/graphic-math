import { Tutorial } from '../types';

export const inclusionExclusion2Tutorial: Tutorial = {
  id: 'inclusion-exclusion-2',
  title: '【実践】ベン図で数える',
  description: '包除原理を使って2つの集合の要素数を数える',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '重複を数えない工夫',
      content:
        '2つの円が重なるベン図が表示されています。\n\n各領域の人数が変わっていきます。\n\n重なった部分を二重に数えてしまう問題、どう解決する？',
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
      title: '数えてみよう',
      content:
        'ベン図の各領域に数を入れて、全体の人数を計算してみましょう。\n\n和集合の人数は単純な足し算ではありません。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-formula',
      title: '包除原理（2集合）',
      content:
        '|A ∪ B| = |A| + |B| - |A ∩ B|\n\n例: クラス30人で\n・数学好き 18人\n・英語好き 15人\n・両方好き 8人\n\n数学か英語の少なくとも一方が好き:\n|A ∪ B| = 18 + 15 - 8 = 25人\n\n「両方好き」を引かないと、8人を二重に数えてしまいます。',
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
      id: 'example-regions',
      title: 'ベン図の4領域',
      content:
        '2つの集合のベン図には4つの領域があります。\n\n① Aだけ: |A| - |A ∩ B| = 18 - 8 = 10人\n② Bだけ: |B| - |A ∩ B| = 15 - 8 = 7人\n③ 両方: |A ∩ B| = 8人\n④ どちらでもない: 30 - 25 = 5人\n\n合計: 10 + 7 + 8 + 5 = 30人 ✓\n\nすべての領域を把握できることがベン図の強みです。',
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
      title: '練習問題',
      content: '100人に調査。犬好き60人、猫好き45人、どちらも好き25人。どちらも好きでない人は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '犬好き60人、猫好き45人、両方25人。100人中どちらも好きでない人は？',
        options: [
          { id: 'a', label: '15人', correct: false },
          { id: 'b', label: '20人', correct: true },
          { id: 'c', label: '25人', correct: false },
          { id: 'd', label: '30人', correct: false },
        ],
        explanation:
          '正解は20人です。\n\n|A ∪ B| = 60 + 45 - 25 = 80人\nどちらも好きでない = 100 - 80 = 20人',
      },
    },
    {
      id: 'alternate',
      title: '補集合を使う方法',
      content:
        '「少なくとも1つ」の否定は「1つもない」です。\n\n|Aᶜ ∩ Bᶜ| = |U| - |A ∪ B|（ド・モルガン）\n\n「犬も猫も好きでない」= 全体 - 「犬か猫の少なくとも一方が好き」\n\nこの考え方は確率の計算でも頻出です。\n「少なくとも1つ起きる確率」= 1 - 「1つも起きない確率」',
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
        'ベン図で数えるポイント：\n\n・|A ∪ B| = |A| + |B| - |A ∩ B|\n・ベン図は4つの排反な領域に分かれる\n・「どちらでもない」= 全体 - |A ∪ B|\n・ド・モルガンの法則が役立つ\n\n次は3つの集合でのベン図に挑戦します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
