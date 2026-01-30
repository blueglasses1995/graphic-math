import { TutorialCategory } from '../types';
import { doublingGameTutorial } from './doubling-game';
import { exponentIntroTutorial } from './exponent-intro';
import { baseComparisonTutorial } from './base-comparison';
import { exponentMultiplyTutorial } from './exponent-multiply';
import { exponentPowerTutorial } from './exponent-power';
import { zeroNegativeExpTutorial } from './zero-negative-exp';
import { fractionalExpTutorial } from './fractional-exp';
import { expGraphTutorial } from './exp-graph';
import { eulerNumberTutorial } from './euler-number';
import { expSpecialTutorial } from './exp-special';
import { exponentialGrowthTutorial } from './exponential-growth';
import { exponentialDecayTutorial } from './exponential-decay';
import { halfLifeTutorial } from './half-life';
import { doublingTimeTutorial } from './doubling-time';
import { compoundSimpleTutorial } from './compound-simple';
import { populationModelTutorial } from './population-model';
import { logisticGrowthTutorial } from './logistic-growth';
import { eulerFormulaTutorial } from './euler-formula';
import { expTrigConnectionTutorial } from './exp-trig-connection';
import { expSummaryTutorial } from './exp-summary';
import { bacteriaGrowthTutorial } from './bacteria-growth';
import { radioactiveDecayTutorial } from './radioactive-decay';
import { coolingLawTutorial } from './cooling-law';
import { epidemicSpreadTutorial } from './epidemic-spread';
import { compoundCalculatorTutorial } from './compound-calculator';
import { decibelTutorial } from './decibel';
import { phScaleTutorial } from './ph-scale';
import { earthquakeMagnitudeTutorial } from './earthquake-magnitude';
import { mooresLawTutorial } from './moores-law';
import { ruleOf72Tutorial } from './rule-of-72';

export {
  doublingGameTutorial,
  exponentIntroTutorial,
  baseComparisonTutorial,
  exponentMultiplyTutorial,
  exponentPowerTutorial,
  zeroNegativeExpTutorial,
  fractionalExpTutorial,
  expGraphTutorial,
  eulerNumberTutorial,
  expSpecialTutorial,
  exponentialGrowthTutorial,
  exponentialDecayTutorial,
  halfLifeTutorial,
  doublingTimeTutorial,
  compoundSimpleTutorial,
  populationModelTutorial,
  logisticGrowthTutorial,
  eulerFormulaTutorial,
  expTrigConnectionTutorial,
  expSummaryTutorial,
  bacteriaGrowthTutorial,
  radioactiveDecayTutorial,
  coolingLawTutorial,
  epidemicSpreadTutorial,
  compoundCalculatorTutorial,
  decibelTutorial,
  phScaleTutorial,
  earthquakeMagnitudeTutorial,
  mooresLawTutorial,
  ruleOf72Tutorial,
};

export const exponentialCategory: TutorialCategory = {
  id: 'exponential',
  name: '指数関数',
  description: '倍々に増える世界を視覚的に理解する',
  tutorials: [
    doublingGameTutorial,
    exponentIntroTutorial,
    baseComparisonTutorial,
    exponentMultiplyTutorial,
    exponentPowerTutorial,
    zeroNegativeExpTutorial,
    fractionalExpTutorial,
    expGraphTutorial,
    eulerNumberTutorial,
    expSpecialTutorial,
    exponentialGrowthTutorial,
    exponentialDecayTutorial,
    halfLifeTutorial,
    doublingTimeTutorial,
    compoundSimpleTutorial,
    populationModelTutorial,
    logisticGrowthTutorial,
    eulerFormulaTutorial,
    expTrigConnectionTutorial,
    expSummaryTutorial,
    bacteriaGrowthTutorial,
    radioactiveDecayTutorial,
    coolingLawTutorial,
    epidemicSpreadTutorial,
    compoundCalculatorTutorial,
    decibelTutorial,
    phScaleTutorial,
    earthquakeMagnitudeTutorial,
    mooresLawTutorial,
    ruleOf72Tutorial,
  ],
};
