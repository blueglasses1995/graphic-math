export { dataOverviewTutorial } from './data-overview';
export { meanMedianModeTutorial } from './mean-median-mode';
export { varianceStdDevTutorial } from './variance-std-dev';
export { histogramTutorial } from './histogram';
export { boxPlotTutorial } from './box-plot';
export { scatterCorrelationTutorial } from './scatter-correlation';
export { regressionLineTutorial } from './regression-line';
export { samplePopulationTutorial } from './sample-population';
export { samplingDistTutorial } from './sampling-dist';
export { cltStatisticsTutorial } from './clt-statistics';
export { pointIntervalTutorial } from './point-interval';
export { confidenceMeaningTutorial } from './confidence-meaning';
export { hypothesisTestingTutorial } from './hypothesis-testing';
export { pValueTutorial } from './p-value';
export { typeErrorsTutorial } from './type-errors';
export { tTestTutorial } from './t-test';
export { chiSquareTutorial } from './chi-square';
export { correlationCausationTutorial } from './correlation-causation';
export { regressionDiagnosisTutorial } from './regression-diagnosis';
export { statsSummaryTutorial } from './stats-summary';
export { abTestingTutorial } from './ab-testing';
export { electionForecastTutorial } from './election-forecast';
export { falsePositiveTrapTutorial } from './false-positive-trap';
export { simpsonParadoxTutorial } from './simpson-paradox';
export { survivorshipBiasTutorial } from './survivorship-bias';
export { pcaPracticeTutorial } from './pca-practice';
export { clusteringTutorial } from './clustering';
export { regressionPracticeTutorial } from './regression-practice';
export { multipleTestingTutorial } from './multiple-testing';
export { bayesianStatsTutorial } from './bayesian-stats';

import { TutorialCategory } from '../types';
import { dataOverviewTutorial } from './data-overview';
import { meanMedianModeTutorial } from './mean-median-mode';
import { varianceStdDevTutorial } from './variance-std-dev';
import { histogramTutorial } from './histogram';
import { boxPlotTutorial } from './box-plot';
import { scatterCorrelationTutorial } from './scatter-correlation';
import { regressionLineTutorial } from './regression-line';
import { samplePopulationTutorial } from './sample-population';
import { samplingDistTutorial } from './sampling-dist';
import { cltStatisticsTutorial } from './clt-statistics';
import { pointIntervalTutorial } from './point-interval';
import { confidenceMeaningTutorial } from './confidence-meaning';
import { hypothesisTestingTutorial } from './hypothesis-testing';
import { pValueTutorial } from './p-value';
import { typeErrorsTutorial } from './type-errors';
import { tTestTutorial } from './t-test';
import { chiSquareTutorial } from './chi-square';
import { correlationCausationTutorial } from './correlation-causation';
import { regressionDiagnosisTutorial } from './regression-diagnosis';
import { statsSummaryTutorial } from './stats-summary';
import { abTestingTutorial } from './ab-testing';
import { electionForecastTutorial } from './election-forecast';
import { falsePositiveTrapTutorial } from './false-positive-trap';
import { simpsonParadoxTutorial } from './simpson-paradox';
import { survivorshipBiasTutorial } from './survivorship-bias';
import { pcaPracticeTutorial } from './pca-practice';
import { clusteringTutorial } from './clustering';
import { regressionPracticeTutorial } from './regression-practice';
import { multipleTestingTutorial } from './multiple-testing';
import { bayesianStatsTutorial } from './bayesian-stats';

export const statisticsCategory: TutorialCategory = {
  id: 'statistics',
  name: '統計',
  description: 'データの要約・推定・検定を視覚的に理解する',
  tutorials: [
    // 基礎編
    dataOverviewTutorial,
    meanMedianModeTutorial,
    varianceStdDevTutorial,
    histogramTutorial,
    boxPlotTutorial,
    scatterCorrelationTutorial,
    regressionLineTutorial,
    samplePopulationTutorial,
    samplingDistTutorial,
    cltStatisticsTutorial,
    pointIntervalTutorial,
    confidenceMeaningTutorial,
    hypothesisTestingTutorial,
    pValueTutorial,
    typeErrorsTutorial,
    tTestTutorial,
    chiSquareTutorial,
    correlationCausationTutorial,
    regressionDiagnosisTutorial,
    statsSummaryTutorial,
    // 実践編
    abTestingTutorial,
    electionForecastTutorial,
    falsePositiveTrapTutorial,
    simpsonParadoxTutorial,
    survivorshipBiasTutorial,
    pcaPracticeTutorial,
    clusteringTutorial,
    regressionPracticeTutorial,
    multipleTestingTutorial,
    bayesianStatsTutorial,
  ],
};
