import { Tutorial } from '../types';

export const crystalSymmetryTutorial: Tutorial = {
  id: 'crystal-symmetry',
  title: '【実践】結晶構造と対称群',
  description: '結晶の対称性を群論で分類する方法を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '結晶の美しさの秘密',
      content:
        '雪の結晶はなぜ六角形なのか？\nダイヤモンドはなぜあの形なのか？\n\n結晶の形は、原子配列の「対称性」で決まります。\n\nこの対称性を数学的に記述するのが「点群」と「空間群」です。',
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
      id: 'point-groups',
      title: '点群',
      content:
        '結晶の対称操作（1点を固定したもの）:\n\n回転 Cₙ: n回回転対称（360°/n 回転）\n鏡映 σ: 鏡面での反射\n反転 i: 中心を通る点対称\n回映 Sₙ: 回転 + 鏡映の組み合わせ\n\nこれらの操作が作る群を「点群」と呼びます。\n\n3次元では32種類の結晶点群があります。',
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
      id: 'crystal-systems',
      title: '7つの結晶系',
      content:
        '32の点群は7つの結晶系に分類されます:\n\n三斜晶系: 対称性が最も低い\n単斜晶系: 2回回転対称\n斜方晶系: 3つの直交する2回軸\n正方晶系: 4回回転対称\n三方晶系: 3回回転対称\n六方晶系: 6回回転対称\n立方晶系: 対称性が最も高い\n\nダイヤモンドは立方晶系、雪は六方晶系です。',
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
      id: 'space-groups',
      title: '空間群',
      content:
        '点群に並進対称性を加えると「空間群」になります。\n\n並進: 一定方向に一定距離だけずらす操作\nらせん軸: 回転 + 並進\nすべり面: 鏡映 + 並進\n\n3次元の空間群は全部で230種類あります。\n\nすべての結晶構造は、この230種類のどれかに分類されます。\n\nこの分類は1890年代に群論を使って完成しました。',
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
      id: 'applications',
      title: 'X線結晶解析への応用',
      content:
        'X線を結晶に当てると回折パターンが得られます。\n\n回折パターンの対称性 → 結晶の空間群を決定\n空間群 → 原子配置を推定\n\nDNAの二重らせん構造も、X線結晶解析で発見されました。\n\n群論は物質の構造を解き明かす道具として、物理学・化学・生物学で活躍しています。',
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
      content: '結晶の対称性について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3次元の空間群は何種類ありますか？',
        options: [
          { id: 'a', label: '32', correct: false },
          { id: 'b', label: '14', correct: false },
          { id: 'c', label: '230', correct: true },
          { id: 'd', label: '7', correct: false },
        ],
        explanation:
          '正解は 230 です。32は点群の数、14はブラベー格子の数、7は結晶系の数です。空間群は230種類あり、すべての結晶構造を分類します。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '結晶構造と対称群:\n\n1. 結晶の対称性は群論で記述される\n2. 32の結晶点群、7つの結晶系\n3. 並進を含めて230の空間群\n4. X線結晶解析に群論が応用\n5. 物質科学の基盤となる理論\n\n群論は結晶の美しさの数学的本質を明らかにしています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
