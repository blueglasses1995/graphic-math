import { Tutorial } from '../types';

export const wallpaperGroupTutorial: Tutorial = {
  id: 'wallpaper-group',
  title: '【実践】壁紙群',
  description: '平面の繰り返しパターンを群論で分類する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '繰り返し模様の数学',
      content:
        '壁紙、タイル、布の模様 ── 平面を埋め尽くす繰り返しパターンは身近にあります。\n\n驚くべきことに、平面の繰り返しパターンの対称性は「17種類」しかありません。\n\nこの分類を可能にしたのが群論です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wallpaper-group-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'symmetry-operations',
      title: '平面の対称操作',
      content:
        '壁紙パターンに現れる対称操作:\n\n並進: パターンをずらす（2方向）\n回転: 1, 2, 3, 4, 6 回のみ可能\n鏡映: 線に沿った反射\nすべり鏡映: 反射 + 並進\n\n注目: 5回回転対称は平面充填では不可能！\n正五角形では平面を隙間なく敷き詰められないためです。',
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
      id: 'seventeen-groups',
      title: '17の壁紙群',
      content:
        '対称操作の組み合わせにより、ちょうど17種類の壁紙群があります。\n\n回転のみ: p1, p2, p3, p4, p6\n鏡映あり: pm, pg, cm, pmm, pmg, pgg, cmm, p3m1, p31m, p4m, p4g, p6m\n\nこの分類は1891年にフョードロフによって完成しました。\n\nイスラムの幾何学模様（アルハンブラ宮殿）には17種類すべてが現れます！',
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
      id: 'crystallographic-restriction',
      title: '結晶学的制約',
      content:
        'なぜ回転は 1, 2, 3, 4, 6 回だけなのか？\n\n「結晶学的制約定理」:\n平面の格子と両立する回転は 360°/n で n = 1, 2, 3, 4, 6 のみ。\n\n証明の本質: cos(360°/n) が有理数になる n は上記のみ。\n\n5回対称は準結晶（2011年ノーベル化学賞）という特殊な構造で初めて現れます。',
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
      id: 'escher',
      title: 'エッシャーの芸術',
      content:
        '画家M.C.エッシャーは壁紙群を芸術に昇華しました。\n\n彼のテセレーション（平面充填）作品には:\n  鳥や魚が隙間なく敷き詰められた模様\n  回転対称と鏡映対称の巧みな利用\n  数学的に正確な壁紙群の構造\n\nエッシャーは独学で群論の本質を理解し、芸術として表現した稀有な例です。',
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
      content: '壁紙群について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '平面の壁紙群は何種類ありますか？',
        options: [
          { id: 'a', label: '5', correct: false },
          { id: 'b', label: '14', correct: false },
          { id: 'c', label: '17', correct: true },
          { id: 'd', label: '230', correct: false },
        ],
        explanation:
          '正解は 17 です。平面の繰り返しパターンの対称性は、ちょうど17種類に分類されます。230は3次元の空間群の数です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '壁紙群のポイント:\n\n1. 平面の繰り返しパターンは17種類のみ\n2. 許される回転: 1, 2, 3, 4, 6 回（結晶学的制約）\n3. アルハンブラ宮殿に17種類すべてが存在\n4. エッシャーの芸術は壁紙群の視覚化\n\n群論は芸術と科学を結びつける美しい理論です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wallpaper-group-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
