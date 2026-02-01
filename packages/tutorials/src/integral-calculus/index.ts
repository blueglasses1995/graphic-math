export { countingAreaTutorial } from './counting-area';
export { rectangleApproxTutorial } from './rectangle-approx';
export { riemannSumTutorial } from './riemann-sum';
export { definiteIntegralTutorial } from './definite-integral';
export { signedAreaTutorial } from './signed-area';
export { ftcTutorial } from './ftc';
export { antiderivativeTutorial } from './antiderivative';
export { powerIntegralTutorial } from './power-integral';
export { linearityTutorial } from './linearity';
export { trigIntegralTutorial } from './trig-integral';
export { expIntegralTutorial } from './exp-integral';
export { substitutionTutorial } from './substitution';
export { integrationByPartsTutorial } from './integration-by-parts';
export { partialFractionsTutorial } from './partial-fractions';
export { improperIntegralTutorial } from './improper-integral';
export { integralMvtTutorial } from './integral-mvt';
export { cumulativeDistributionTutorial } from './cumulative-distribution';
export { volumeRevolutionTutorial } from './volume-revolution';
export { arcLengthTutorial } from './arc-length';
export { integralSummaryTutorial } from './integral-summary';
export { velocityToDistanceTutorial } from './velocity-to-distance';
export { workEnergyTutorial } from './work-energy';
export { probabilityDensityTutorial } from './probability-density';
export { numericalIntegrationTutorial } from './numerical-integration';
export { solveOdeTutorial } from './solve-ode';
export { areaBetweenTutorial } from './area-between';
export { centerOfMassTutorial } from './center-of-mass';
export { pappusTheoremTutorial } from './pappus-theorem';
export { gammaFunctionTutorial } from './gamma-function';
export { fourierIntegralTutorial } from './fourier-integral';

import { CategoryWithTutorials } from '../types';
import { countingAreaTutorial } from './counting-area';
import { rectangleApproxTutorial } from './rectangle-approx';
import { riemannSumTutorial } from './riemann-sum';
import { definiteIntegralTutorial } from './definite-integral';
import { signedAreaTutorial } from './signed-area';
import { ftcTutorial } from './ftc';
import { antiderivativeTutorial } from './antiderivative';
import { powerIntegralTutorial } from './power-integral';
import { linearityTutorial } from './linearity';
import { trigIntegralTutorial } from './trig-integral';
import { expIntegralTutorial } from './exp-integral';
import { substitutionTutorial } from './substitution';
import { integrationByPartsTutorial } from './integration-by-parts';
import { partialFractionsTutorial } from './partial-fractions';
import { improperIntegralTutorial } from './improper-integral';
import { integralMvtTutorial } from './integral-mvt';
import { cumulativeDistributionTutorial } from './cumulative-distribution';
import { volumeRevolutionTutorial } from './volume-revolution';
import { arcLengthTutorial } from './arc-length';
import { integralSummaryTutorial } from './integral-summary';
import { velocityToDistanceTutorial } from './velocity-to-distance';
import { workEnergyTutorial } from './work-energy';
import { probabilityDensityTutorial } from './probability-density';
import { numericalIntegrationTutorial } from './numerical-integration';
import { solveOdeTutorial } from './solve-ode';
import { areaBetweenTutorial } from './area-between';
import { centerOfMassTutorial } from './center-of-mass';
import { pappusTheoremTutorial } from './pappus-theorem';
import { gammaFunctionTutorial } from './gamma-function';
import { fourierIntegralTutorial } from './fourier-integral';

export const integralCalculusCategory: CategoryWithTutorials = {
  id: 'integral-calculus',
  name: '積分',
  description: '面積・累積・逆微分を視覚的に理解する',
  tutorials: [
    // 基礎編
    countingAreaTutorial,
    rectangleApproxTutorial,
    riemannSumTutorial,
    definiteIntegralTutorial,
    signedAreaTutorial,
    ftcTutorial,
    antiderivativeTutorial,
    powerIntegralTutorial,
    linearityTutorial,
    trigIntegralTutorial,
    expIntegralTutorial,
    substitutionTutorial,
    integrationByPartsTutorial,
    partialFractionsTutorial,
    improperIntegralTutorial,
    integralMvtTutorial,
    cumulativeDistributionTutorial,
    volumeRevolutionTutorial,
    arcLengthTutorial,
    integralSummaryTutorial,
    // 実践編
    velocityToDistanceTutorial,
    workEnergyTutorial,
    probabilityDensityTutorial,
    numericalIntegrationTutorial,
    solveOdeTutorial,
    areaBetweenTutorial,
    centerOfMassTutorial,
    pappusTheoremTutorial,
    gammaFunctionTutorial,
    fourierIntegralTutorial,
  ],
};
