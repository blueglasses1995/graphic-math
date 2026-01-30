import { Tutorial } from '../types';

export const identityInverseTutorial: Tutorial = {
  id: 'identity-inverse',
  title: '単位元と逆元',
  description: '単位元の一意性と逆元の性質を深く理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '「何もしない」の重要性',
      content:
        '単位元 e は「何もしない操作」です。\n\n一見つまらないようですが、単位元なしでは代数学は成り立ちません。\n\n単位元があるからこそ「元に戻す」操作（逆元）を定義できるのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'identity-inverse-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'identity-uniqueness',
      title: '単位元は一つだけ',
      content:
        '重要な定理: 群の単位元はただ一つしか存在しない。\n\n証明: もし e と e\' がどちらも単位元だとすると\n  e = e ∗ e\'（e\' が単位元だから）\n  e ∗ e\' = e\'（e が単位元だから）\n  よって e = e\'\n\nわずか2行の証明ですが、群の公理だけから導かれる美しい結果です。',
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
      id: 'inverse-uniqueness',
      title: '逆元も一つだけ',
      content:
        '各要素の逆元もただ一つしか存在しません。\n\n証明: a の逆元が b と c の2つあるとすると\n  b = b ∗ e = b ∗ (a ∗ c) = (b ∗ a) ∗ c = e ∗ c = c\n  よって b = c\n\nここで結合法則が本質的に使われています。\n\n逆元が一意なので、a⁻¹ という記法が確定します。',
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
      id: 'inverse-of-inverse',
      title: '逆元の逆元',
      content:
        '逆元の逆元は元に戻ります。\n\n(a⁻¹)⁻¹ = a\n\n直感的に: 「取り消す操作」を取り消せば元に戻る。\n\n例:\n  足し算: -(-3) = 3\n  回転: 240°回転の逆は120°回転 → 120°回転の逆は240°回転',
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
      id: 'inverse-of-product',
      title: '積の逆元',
      content:
        '2つの要素の積の逆元は:\n\n(a ∗ b)⁻¹ = b⁻¹ ∗ a⁻¹\n\n順序が逆になります！\n\n靴下を履いてから靴を履く。脱ぐときは靴を先に脱いでから靴下を脱ぐ。\n\nこの「逆順」の法則は、非可換群で特に重要です。',
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
      content: '逆元について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(a ∗ b ∗ c)⁻¹ はどうなりますか？',
        options: [
          { id: 'a', label: 'a⁻¹ ∗ b⁻¹ ∗ c⁻¹', correct: false },
          { id: 'b', label: 'c⁻¹ ∗ b⁻¹ ∗ a⁻¹', correct: true },
          { id: 'c', label: 'c⁻¹ ∗ a⁻¹ ∗ b⁻¹', correct: false },
          { id: 'd', label: 'b⁻¹ ∗ c⁻¹ ∗ a⁻¹', correct: false },
        ],
        explanation:
          '正解は c⁻¹ ∗ b⁻¹ ∗ a⁻¹ です。積の逆元は逆順にそれぞれの逆元を取ります。靴下→靴→コートの順に着たら、コート→靴→靴下の順に脱ぎます。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '単位元と逆元の重要な性質:\n\n1. 単位元は群に一つだけ存在する\n2. 各要素の逆元も一つだけ存在する\n3. (a⁻¹)⁻¹ = a\n4. (a ∗ b)⁻¹ = b⁻¹ ∗ a⁻¹（逆順）\n\nこれらは群の公理から論理的に導かれる定理です。\n\n次は「巡回群」── 1つの要素から生成される群を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'identity-inverse-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
