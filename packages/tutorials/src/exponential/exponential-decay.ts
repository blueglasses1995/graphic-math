import { Tutorial } from '../types';

export const exponentialDecayTutorial: Tutorial = {
  id: 'exponential-decay',
  title: '指数的減衰',
  description: '指数的に減少する現象のモデルと実例を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '消えゆくもの',
      content:
        'コーヒーが冷める。薬が体から消える。放射性物質が崩壊する。これらに共通するのは「残っている量に比例して減る」こと。指数的減衰のアニメーションを見てみましょう。',
      customScene: "exponential-decay-animation",
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
      title: '減衰率を変えてみよう',
      content:
        '減衰率を変えて、N(t) = N₀·e⁻ᵏᵗ のグラフがどう変わるか観察しましょう。kが大きいほど速く減衰します。',
      customScene: "exponential-decay-interactive",
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
      title: '指数的減衰のモデル',
      content:
        'N(t) = N₀ · e⁻ᵏᵗ\n\n• N₀: 初期量\n• k: 減衰定数（k>0）\n• t: 時間\n\n成長モデルと同じ形ですが、指数がマイナス。残量が多いほど減少量も多く、残量が少なくなるほど減り方も緩やかに。理論上は完全に0にはなりません。',
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
      title: '身近な指数的減衰',
      content:
        '具体例：\n• 薬の血中濃度：飲んだ薬は一定の割合で代謝される\n• ビールの泡：最初は急速に減り、やがてゆっくりに\n• 音の残響：大きな音ほど速く減衰する\n• バッテリー残量：使うほど減り方がゆるやかに\n\nどれも「現在の量に比例して減る」パターンです。',
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
      content: '初期量100で減衰定数k=0.1のとき、t=10で残量はおよそ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'N(10) = 100·e⁻¹ はおよそ？',
        options: [
          { id: 'a', label: '約10', correct: false },
          { id: 'b', label: '約27', correct: false },
          { id: 'c', label: '約37', correct: true },
          { id: 'd', label: '約50', correct: false },
        ],
        explanation:
          'e⁻¹ ≈ 0.368 なので 100×0.368 ≈ 36.8。約37%が残ります。e⁻¹ ≈ 0.37 は覚えておくと便利な値です。',
      },
    },
    {
      id: 'alternate',
      title: '成長と減衰は鏡像',
      content:
        '指数的成長 N₀·eʳᵗ と指数的減衰 N₀·e⁻ᵏᵗ はグラフ上で鏡像の関係です。時間軸を反転すると成長は減衰に、減衰は成長になります。同じ数学的構造が正反対の現象を記述するのです。',
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
        '指数的減衰：\n• N(t) = N₀·e⁻ᵏᵗ\n• 残量に比例して減少する\n• 理論上は0にならない\n• 成長モデルの鏡像\n• e⁻¹ ≈ 0.37（約37%が残る）\n\n次は減衰の重要な概念「半減期」を学びます。',
      customScene: "exponential-decay-summary",
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
