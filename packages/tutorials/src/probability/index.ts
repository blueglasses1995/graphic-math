import { TutorialCategory } from '../types';
import { whatIsProbabilityTutorial } from './what-is-probability';
import { sampleSpaceTutorial } from './sample-space';
import { additionRuleTutorial } from './addition-rule';
import { complementEventTutorial } from './complement-event';
import { conditionalProbTutorial } from './conditional-prob';
import { independenceTutorial } from './independence';
import { bayesTheoremTutorial } from './bayes-theorem';
import { permutationTutorial } from './permutation';
import { combinationTutorial } from './combination';
import { expectedValueTutorial } from './expected-value';
import { varianceStdTutorial } from './variance-std';
import { binomialDistTutorial } from './binomial-dist';
import { normalDistTutorial } from './normal-dist';
import { lawLargeNumbersTutorial } from './law-large-numbers';
import { centralLimitTutorial } from './central-limit';
import { poissonDistTutorial } from './poisson-dist';
import { geometricDistTutorial } from './geometric-dist';
import { jointMarginalTutorial } from './joint-marginal';
import { covarianceCorrTutorial } from './covariance-corr';
import { probSummaryTutorial } from './prob-summary';
import { montyHallTutorial } from './monty-hall';
import { birthdayProblemTutorial } from './birthday-problem';
import { gamblersFallacyTutorial } from './gamblers-fallacy';
import { insuranceMathTutorial } from './insurance-math';
import { markovChainTutorial } from './markov-chain';
import { randomWalkTutorial } from './random-walk';
import { monteCarloTutorial } from './monte-carlo';
import { bayesianUpdateTutorial } from './bayesian-update';
import { conditionalIndepTutorial } from './conditional-indep';
import { confidenceIntervalTutorial } from './confidence-interval';

export {
  whatIsProbabilityTutorial,
  sampleSpaceTutorial,
  additionRuleTutorial,
  complementEventTutorial,
  conditionalProbTutorial,
  independenceTutorial,
  bayesTheoremTutorial,
  permutationTutorial,
  combinationTutorial,
  expectedValueTutorial,
  varianceStdTutorial,
  binomialDistTutorial,
  normalDistTutorial,
  lawLargeNumbersTutorial,
  centralLimitTutorial,
  poissonDistTutorial,
  geometricDistTutorial,
  jointMarginalTutorial,
  covarianceCorrTutorial,
  probSummaryTutorial,
  montyHallTutorial,
  birthdayProblemTutorial,
  gamblersFallacyTutorial,
  insuranceMathTutorial,
  markovChainTutorial,
  randomWalkTutorial,
  monteCarloTutorial,
  bayesianUpdateTutorial,
  conditionalIndepTutorial,
  confidenceIntervalTutorial,
};

export const probabilityCategory: TutorialCategory = {
  id: 'probability',
  name: '確率',
  description: '偶然の法則・確率分布を視覚的に理解する',
  tutorials: [
    whatIsProbabilityTutorial,
    sampleSpaceTutorial,
    additionRuleTutorial,
    complementEventTutorial,
    conditionalProbTutorial,
    independenceTutorial,
    bayesTheoremTutorial,
    permutationTutorial,
    combinationTutorial,
    expectedValueTutorial,
    varianceStdTutorial,
    binomialDistTutorial,
    normalDistTutorial,
    lawLargeNumbersTutorial,
    centralLimitTutorial,
    poissonDistTutorial,
    geometricDistTutorial,
    jointMarginalTutorial,
    covarianceCorrTutorial,
    probSummaryTutorial,
    montyHallTutorial,
    birthdayProblemTutorial,
    gamblersFallacyTutorial,
    insuranceMathTutorial,
    markovChainTutorial,
    randomWalkTutorial,
    monteCarloTutorial,
    bayesianUpdateTutorial,
    conditionalIndepTutorial,
    confidenceIntervalTutorial,
  ],
};
