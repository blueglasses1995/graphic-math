import { Tutorial } from '../types';

export const bayesianUpdateTutorial: Tutorial = {
  id: 'bayesian-update',
  title: '【実践】ベイズ更新',
  description: 'データが増えるたびに信念を更新するベイズ推論',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: 'コインは公平か？',
      content:
        '拾ったコインは公平（表50%）でしょうか？3回投げて全部表でした。まだ公平かもしれないし、偏ったコインかもしれない。データが増えるたびに信念を更新するのがベイズ更新です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'bayesian-update-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'prior',
      title: '事前分布',
      content:
        'まず「コインの表の確率θ」についての事前信念を設定します。\n\n何も知らなければ θ は 0〜1 で一様分布（Beta(1,1)）と仮定:\n「どの確率も同じくらいありえる」\n\nこれが事前分布です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'update',
      title: '更新の仕組み',
      content:
        'データ（表k回、裏n-k回）を観測したら:\n\n事後分布 = Beta(1+k, 1+n-k)\n\n3回表0回裏 → Beta(4, 1)\n→ θの期待値 = 4/5 = 0.8\n\n「おそらく偏ったコイン」と更新されました。しかし確信度は低いです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'コインを投げて更新しよう',
      content:
        'コインを投げるたびに事後分布がどう変化するか観察しましょう。データが増えるほど分布は狭くなり、真の確率に集中していきます。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'bayesian-update-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '事前分布Beta(1,1)で、表5回裏5回を観測。事後分布は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '事後分布はどれ？',
        options: [
          { id: 'a', label: 'Beta(5, 5)', correct: false },
          { id: 'b', label: 'Beta(6, 6)', correct: true },
          { id: 'c', label: 'Beta(1, 1)', correct: false },
          { id: 'd', label: 'Beta(10, 10)', correct: false },
        ],
        explanation:
          'Beta(1+5, 1+5) = Beta(6, 6)。期待値は6/12 = 0.5。公平なコインという信念が強まりました。',
      },
    },
    {
      id: 'sequential',
      title: '逐次更新',
      content:
        'ベイズ更新は逐次的に行えます:\n\n1回目表 → Beta(2,1) → 期待値0.67\n2回目裏 → Beta(2,2) → 期待値0.50\n3回目表 → Beta(3,2) → 期待値0.60\n\n今日の事後分布は、明日の事前分布になります。データが来るたびに学習し続けます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'ベイズ更新:\n\n• 事後 ∝ 尤度 × 事前\n• データが増えるほど事後分布は鋭くなる\n• 逐次的に更新可能\n• 事前分布の影響はデータ増加で薄れる\n\n不確実性の中で合理的に学習する枠組みです。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'bayesian-update-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
