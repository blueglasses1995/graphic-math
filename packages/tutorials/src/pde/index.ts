import { CategoryWithTutorials } from '../types';
import { whatIsPdeTutorial } from './what-is-pde';
import { partialDerivativeReviewTutorial } from './partial-derivative-review';
import { heatEquationTutorial } from './heat-equation';
import { waveEquationTutorial } from './wave-equation';
import { laplaceEquationTutorial } from './laplace-equation';
import { boundaryConditionsTutorial } from './boundary-conditions';
import { separationPdeTutorial } from './separation-pde';
import { fourierSeriesSolutionTutorial } from './fourier-series-solution';
import { eigenvalueProblemTutorial } from './eigenvalue-problem';
import { maximumPrincipleTutorial } from './maximum-principle';
import { greenFunctionTutorial } from './green-function';
import { twoDimensionalTutorial } from './two-dimensional';
import { advectionEquationTutorial } from './advection-equation';
import { burgersEquationTutorial } from './burgers-equation';
import { diffusionConvectionTutorial } from './diffusion-convection';
import { numericalPdeIntroTutorial } from './numerical-pde-intro';
import { finiteDifferenceTutorial } from './finite-difference';
import { cflConditionTutorial } from './cfl-condition';
import { finiteElementIntroTutorial } from './finite-element-intro';
import { pdeBasicsSummaryTutorial } from './pde-basics-summary';
import { instrumentSoundTutorial } from './instrument-sound';
import { seismicWaveTutorial } from './seismic-wave';
import { heatSimulationTutorial } from './heat-simulation';
import { fluidDynamicsTutorial } from './fluid-dynamics';
import { blackScholesTutorial } from './black-scholes';
import { imageProcessingPdeTutorial } from './image-processing-pde';
import { schrodingerTutorial } from './schrodinger';
import { reactionDiffusionTutorial } from './reaction-diffusion';
import { weatherMathTutorial } from './weather-math';
import { pdeOverviewTutorial } from './pde-overview';

export {
  whatIsPdeTutorial,
  partialDerivativeReviewTutorial,
  heatEquationTutorial,
  waveEquationTutorial,
  laplaceEquationTutorial,
  boundaryConditionsTutorial,
  separationPdeTutorial,
  fourierSeriesSolutionTutorial,
  eigenvalueProblemTutorial,
  maximumPrincipleTutorial,
  greenFunctionTutorial,
  twoDimensionalTutorial,
  advectionEquationTutorial,
  burgersEquationTutorial,
  diffusionConvectionTutorial,
  numericalPdeIntroTutorial,
  finiteDifferenceTutorial,
  cflConditionTutorial,
  finiteElementIntroTutorial,
  pdeBasicsSummaryTutorial,
  instrumentSoundTutorial,
  seismicWaveTutorial,
  heatSimulationTutorial,
  fluidDynamicsTutorial,
  blackScholesTutorial,
  imageProcessingPdeTutorial,
  schrodingerTutorial,
  reactionDiffusionTutorial,
  weatherMathTutorial,
  pdeOverviewTutorial,
};

export const pdeCategory: CategoryWithTutorials = {
  id: 'pde',
  name: '偏微分方程式',
  description: '波動・熱伝導・流体の数学を視覚的に理解する',
  tutorials: [
    whatIsPdeTutorial,
    partialDerivativeReviewTutorial,
    heatEquationTutorial,
    waveEquationTutorial,
    laplaceEquationTutorial,
    boundaryConditionsTutorial,
    separationPdeTutorial,
    fourierSeriesSolutionTutorial,
    eigenvalueProblemTutorial,
    maximumPrincipleTutorial,
    greenFunctionTutorial,
    twoDimensionalTutorial,
    advectionEquationTutorial,
    burgersEquationTutorial,
    diffusionConvectionTutorial,
    numericalPdeIntroTutorial,
    finiteDifferenceTutorial,
    cflConditionTutorial,
    finiteElementIntroTutorial,
    pdeBasicsSummaryTutorial,
    instrumentSoundTutorial,
    seismicWaveTutorial,
    heatSimulationTutorial,
    fluidDynamicsTutorial,
    blackScholesTutorial,
    imageProcessingPdeTutorial,
    schrodingerTutorial,
    reactionDiffusionTutorial,
    weatherMathTutorial,
    pdeOverviewTutorial,
  ],
};
