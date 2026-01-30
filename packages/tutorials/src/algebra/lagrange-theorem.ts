import { Tutorial } from '../types';

export const lagrangeTheoremTutorial: Tutorial = {
  id: 'lagrange-theorem',
  title: 'ラグランジュの定理',
  description: '部分群の位数が群の位数を割り切ることを理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '位数の不思議な制約',
      content:
        '6人のグループで「チーム分け」をするとき、\n全員が同じ大きさのチームに入るには、チームの人数は1, 2, 3, 6人のいずれかです。\n\n群にも同じ法則が成り立ちます。\n部分群の大きさは、群全体の大きさの約数でなければなりません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '剰余類による分割を観察',
      content:
        'S₃（位数6）の部分群 H = {e, (12)}（位数2）を考えます。\n\n左剰余類で S₃ を分割すると:\nH, (13)H, (23)H の3つに分かれます。\n\n各剰余類の大きさは |H| = 2 で、6 = 2 × 3 です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ラグランジュの定理',
      content:
        '定理: 有限群 G の部分群 H に対して\n\n|G| = |H| · [G : H]\n\nここで [G : H] は H の G における指数（剰余類の個数）です。\n\n系: |H| は |G| の約数である。\n系: 元 g の位数は |G| の約数である。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '応用例',
      content:
        '応用1: 位数が素数 p の群は巡回群しかない\n（単位元以外の元の位数は p の約数で、1 か p。e でないから p）\n\n応用2: フェルマーの小定理\naᵖ ≡ a (mod p)\nは Z_p* の位数 p-1 からの帰結。\n\n応用3: 位数15の群に位数7の部分群は存在しない（7∤15）',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'ラグランジュの定理を適用しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '位数20の群に位数6の部分群は存在し得ますか？',
        options: [
          { id: 'a', label: '存在し得る', correct: false },
          { id: 'b', label: '存在し得ない（6は20の約数ではない）', correct: true },
          { id: 'c', label: '常に存在する', correct: false },
          { id: 'd', label: '群が可換なら存在する', correct: false },
        ],
        explanation:
          '6は20の約数ではないため（20 = 2² × 5）、ラグランジュの定理により位数6の部分群は存在できません。',
      },
    },
    {
      id: 'alternate',
      title: '逆は成立するか？',
      content:
        'ラグランジュの定理の逆は一般に成立しません。\n\n例: A₄（位数12）には位数6の部分群が存在しません。\n6は12の約数なのに！\n\nただし特定の場合には逆が成立します:\n• コーシーの定理: 素数 p が |G| を割るなら位数 p の元が存在\n• シローの定理: さらに強い存在定理を与える',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：位数の整除性',
      content:
        'ラグランジュの定理:\n\n• |H| は |G| の約数（部分群の位数は群の位数を割る）\n• 剰余類による分割が証明の鍵\n• フェルマーの小定理など重要な結果の基礎\n• 逆は一般に不成立だが、シローの定理で部分的に回復\n\n群論で最初に学ぶ強力な定理です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
