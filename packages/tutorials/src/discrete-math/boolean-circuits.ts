import { Tutorial } from '../types';

export const booleanCircuitsTutorial: Tutorial = {
  id: 'boolean-circuits',
  title: '【実践】ブール代数と回路',
  description: 'ブール代数が論理回路の設計に使われる仕組みを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'コンピュータの心臓部',
      content:
        'コンピュータのCPUは数十億個の論理ゲートで構成されています。\n\n各ゲートは AND, OR, NOT などの論理演算を行います。\n\nこの設計の基盤がブール代数です。\n\n命題論理の知識がそのまま回路設計に応用されます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'boolean-circuits-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'boolean-algebra',
      title: 'ブール代数の法則',
      content:
        'ブール代数では変数が 0（偽）か 1（真）のみを取ります。\n\n基本法則：\n・交換法則：A∧B = B∧A、A∨B = B∨A\n・結合法則：(A∧B)∧C = A∧(B∧C)\n・分配法則：A∧(B∨C) = (A∧B)∨(A∧C)\n・ド・モルガン：¬(A∧B) = ¬A∨¬B\n・吸収法則：A∨(A∧B) = A',
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
      id: 'gates',
      title: '論理ゲート',
      content:
        '基本的な論理ゲート：\n\n・AND ゲート：両方1のとき1\n・OR ゲート：少なくとも一方が1のとき1\n・NOT ゲート：入力を反転\n・NAND ゲート：AND + NOT（万能ゲート）\n・XOR ゲート：異なるとき1\n\nNANDゲートだけで任意の論理回路を構成できます（完全性）。',
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
      id: 'simplification',
      title: '論理式の簡略化',
      content:
        '回路の効率化にはブール式の簡略化が重要です。\n\n例：F = A∧B∨A∧¬B = A∧(B∨¬B) = A∧1 = A\n\nカルノー図：2〜4変数の論理式を視覚的に簡略化する方法\n\n隣接する1のセルをまとめることで、最小の論理式が得られます。\n\nゲート数を減らすことは、チップの消費電力と面積の削減に直結します。',
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
      id: 'quiz',
      title: 'クイズ',
      content: 'ブール代数の知識を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '任意の論理回路を構成できる万能ゲートは？',
        options: [
          { id: 'a', label: 'AND', correct: false },
          { id: 'b', label: 'OR', correct: false },
          { id: 'c', label: 'NAND', correct: true },
          { id: 'd', label: 'XOR', correct: false },
        ],
        explanation:
          '正解はNANDです。NANDゲートだけで NOT, AND, OR をすべて構成でき、したがって任意の論理関数を実現できます。これを機能的完全性と呼びます。',
      },
    },
    {
      id: 'adder',
      title: '加算器の設計',
      content:
        '半加算器：2つの1ビットの和を計算\n・Sum = A XOR B\n・Carry = A AND B\n\n全加算器：繰り上がりも含めた3入力の和\n\nこれを n 個連結すると n ビット加算器になります。\n\nCPUの演算ユニットはこのような回路の集合体です。\n\nブール代数の知識だけで足し算の回路が設計できるのです。',
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
        '・ブール代数：0と1の代数\n・論理ゲート：AND, OR, NOT, NAND, XOR\n・NANDの万能性\n・論理式の簡略化 → 回路の効率化\n・加算器：ブール代数だけで算術演算を実現\n\nすべてのデジタル機器の根底にブール代数と離散数学があります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'boolean-circuits-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
