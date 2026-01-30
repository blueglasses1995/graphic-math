import { Tutorial } from '../types';

export const optimizationTutorial: Tutorial = {
  id: 'optimization',
  title: '【実践】最適化問題',
  description: '微分を使って最大値・最小値を求める実践的な問題に取り組む',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '最もお得な箱の形',
      content:
        '段ボールから箱を作るとき、体積を最大にするにはどう折ればいい？こうした「最適な値を見つける問題」が最適化問題です。微分がその答えを教えてくれます。',
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
        '箱の高さ h をスライダーで変えて、体積がどう変わるか観察してください。最大体積はどの h で実現されるでしょう？',
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
      title: '手順',
      content:
        '最適化の手順: ①変数を決める ②目的関数を立てる ③微分してゼロとおく ④解を確認する。例: 周の長さ20の長方形で面積最大 → f(x) = x(10−x)、f\' = 10−2x = 0 より x=5。正方形が最大。',
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
      title: '缶の最適設計',
      content:
        '体積 V = πr²h を固定して、表面積 S = 2πr²+2πrh を最小化。V=πr²h より h=V/(πr²)。S = 2πr²+2V/r。dS/dr=4πr−2V/r²=0 より r=∛(V/(2π))。高さと直径が等しいとき表面積最小。',
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
        '正の数 x と y の和が 10 のとき、積 xy の最大値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'x + y = 10、x,y > 0 のとき xy の最大値は？',
        options: [
          { id: 'a', label: '20', correct: false },
          { id: 'b', label: '25', correct: true },
          { id: 'c', label: '30', correct: false },
          { id: 'd', label: '100', correct: false },
        ],
        explanation:
          'y = 10−x より xy = x(10−x) = 10x−x²。微分して 10−2x=0 → x=5。xy = 5·5 = 25。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：端点も確認',
      content:
        'f\'=0 の点だけでなく、定義域の端点でも最大・最小が起こりえます。閉区間 [a,b] では、f\'=0 の点と端点 a,b の値をすべて比較して最大・最小を決定します。',
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
        '最適化 = 微分してゼロとおく + 端点チェック。実社会で最もよく使われる微分の応用です。コスト最小化、利益最大化、設計の最適化すべてに使えます。\n\n次は「ニュートン法」。方程式の解を微分で見つける手法です。',
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
