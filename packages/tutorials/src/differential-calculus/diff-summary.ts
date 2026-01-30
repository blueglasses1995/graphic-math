import { Tutorial } from '../types';

export const diffSummaryTutorial: Tutorial = {
  id: 'diff-summary',
  title: '微分のまとめ',
  description: '微分の基礎で学んだ内容を総復習する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '19のステップを振り返る',
      content:
        '変化率から始まり、極限、導関数の定義、基本公式、そして応用まで。微分の世界を駆け抜けてきました。ここで全体像を整理しましょう。',
      customScene: 'diff-summary-animation',
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
        '好きな関数を選んで微分を確認してください。パワールール、積の微分、連鎖律を組み合わせて、どんな式でも微分できるようになりましたか？',
      customScene: 'diff-summary-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '基本公式一覧',
      content:
        '(xⁿ)\' = nxⁿ⁻¹、(sin x)\' = cos x、(cos x)\' = −sin x、(eˣ)\' = eˣ。和の微分、積の微分 (fg)\' = f\'g+fg\'、連鎖律 [f(g)]\' = f\'(g)·g\'。これが微分のツールキットです。',
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
      title: '応用のまとめ',
      content:
        '増減表で極値を求める。二次導関数で凹凸を判定する。線形近似で関数値を見積もる。陰関数微分で曲線の傾きを求める。平均値の定理で存在を保証する。微分は分析の万能ナイフです。',
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
      title: '総合クイズ',
      content:
        'f(x) = x²·eˣ の導関数は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(x²·eˣ)\' = ?',
        options: [
          { id: 'a', label: '2x·eˣ', correct: false },
          { id: 'b', label: 'x²·eˣ + 2x·eˣ', correct: true },
          { id: 'c', label: '2x·eˣ + x²', correct: false },
          { id: 'd', label: 'x²·eˣ·2x', correct: false },
        ],
        explanation:
          '積の微分: (x²)\'·eˣ + x²·(eˣ)\' = 2x·eˣ + x²·eˣ = (2x+x²)eˣ = x(2+x)eˣ。',
      },
    },
    {
      id: 'alternate',
      title: '全体像：微分の位置づけ',
      content:
        '微分は「瞬間の変化率」を扱う数学。物理では速度と加速度、経済では限界費用と限界利益、工学では制御と最適化。あらゆる分野で「変化を定量化する」基盤です。',
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
        '基礎編はここまで。微分の定義・計算法・基本応用を学びました。\n\n実践編では、速度・加速度、最適化、ニュートン法、テイラー展開など、微分を使った具体的な問題解決に挑戦します。',
      customScene: 'diff-summary-summary',
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
