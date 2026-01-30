import { Tutorial } from '../types';

export const coolingLawTutorial: Tutorial = {
  id: 'cooling-law',
  title: '【実践】冷却の法則',
  description: 'ニュートンの冷却法則を指数関数で理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: 'コーヒーはなぜゆっくり冷める？',
      content:
        '熱いコーヒー（90℃）は最初は速く冷め、室温（20℃）に近づくとゆっくりになります。温度差が大きいほど速く冷める。この法則も指数関数で記述できます。冷却のアニメーションを見てみましょう。',
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
      title: '冷却をシミュレーション',
      content:
        '初期温度、室温、冷却定数を変えて、温度変化のグラフを観察しましょう。室温が変わると漸近線が変わることに注目してください。',
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
      title: 'ニュートンの冷却法則',
      content:
        'T(t) = Tₑ + (T₀ - Tₑ)·e⁻ᵏᵗ\n\n• T₀: 初期温度\n• Tₑ: 環境温度（室温）\n• k: 冷却定数\n\n温度差 (T-Tₑ) が指数的に減衰します。\n\n微分方程式：dT/dt = -k(T - Tₑ)\n「温度差に比例して冷める」',
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
      title: '実際の計算例',
      content:
        '90℃のコーヒーが室温20℃の部屋で冷える。k=0.05/分のとき：\n\n10分後: T = 20 + 70·e⁻⁰·⁵ ≈ 20 + 42.5 = 62.5℃\n30分後: T = 20 + 70·e⁻¹·⁵ ≈ 20 + 15.6 = 35.6℃\n60分後: T = 20 + 70·e⁻³ ≈ 20 + 3.5 = 23.5℃\n\n室温20℃に漸近的に近づきます。',
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
      title: '計算してみよう',
      content: '80℃の物体が室温20℃で冷却。温度差が半分（50℃）になるのは何分後？（k=0.1/分）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '温度差60℃が30℃になるのは？（k=0.1/分）',
        options: [
          { id: 'a', label: '約5分後', correct: false },
          { id: 'b', label: '約7分後', correct: true },
          { id: 'c', label: '約10分後', correct: false },
          { id: 'd', label: '約15分後', correct: false },
        ],
        explanation:
          '温度差が半分 → e⁻ᵏᵗ = 1/2 → kt = ln2 → t = ln2/k = 0.693/0.1 ≈ 6.93分。温度差の「半減期」と同じ考え方です。',
      },
    },
    {
      id: 'alternate',
      title: '犯罪捜査での応用',
      content:
        '冷却法則は法医学でも使われます。遺体の温度を測定し、冷却法則を逆算することで死亡推定時刻を求めます。T₀（体温37℃）、Tₑ（室温）、現在の体温T(t)がわかれば、tを計算できます。指数関数が犯罪捜査に役立っているのです。',
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
        '冷却の法則：\n• T(t) = Tₑ + (T₀-Tₑ)·e⁻ᵏᵗ\n• 温度差が指数的に減衰\n• 環境温度に漸近的に近づく\n• 温度差の「半減期」で考えられる\n• 法医学など実用的な応用あり\n\n指数的減衰の身近で重要な応用例です。',
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
