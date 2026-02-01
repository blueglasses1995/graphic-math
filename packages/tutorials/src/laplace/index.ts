import { CategoryWithTutorials } from '../types';
import { whyLaplaceTutorial } from './why-laplace';
import { laplaceDefinitionTutorial } from './laplace-definition';
import { basicTransformTableTutorial } from './basic-transform-table';
import { linearityLaplaceTutorial } from './linearity-laplace';
import { derivativeTransformTutorial } from './derivative-transform';
import { integralTransformTutorial } from './integral-transform';
import { inverseLaplaceTutorial } from './inverse-laplace';
import { solveIvpTutorial } from './solve-ivp';
import { transferFunctionTutorial } from './transfer-function';
import { poleZerosTutorial } from './poles-zeros';
import { stepResponseTutorial } from './step-response';
import { impulseResponseTutorial } from './impulse-response';
import { convolutionTheoremTutorial } from './convolution-theorem';
import { heavisideFunctionTutorial } from './heaviside-function';
import { periodicTransformTutorial } from './periodic-transform';
import { sDomainStabilityTutorial } from './s-domain-stability';
import { routhHurwitzTutorial } from './routh-hurwitz';
import { bodePlotTutorial } from './bode-plot';
import { nyquistPlotTutorial } from './nyquist-plot';
import { laplaceBasicsSummaryTutorial } from './laplace-basics-summary';
import { pidControlTutorial } from './pid-control';
import { servoMotorTutorial } from './servo-motor';
import { circuitSDomainTutorial } from './circuit-s-domain';
import { robotControlTutorial } from './robot-control';
import { feedbackDesignTutorial } from './feedback-design';
import { delaySystemTutorial } from './delay-system';
import { digitalControlTutorial } from './digital-control';
import { aircraftStabilityTutorial } from './aircraft-stability';
import { chemicalProcessTutorial } from './chemical-process';
import { laplaceOverviewTutorial } from './laplace-overview';

export {
  whyLaplaceTutorial,
  laplaceDefinitionTutorial,
  basicTransformTableTutorial,
  linearityLaplaceTutorial,
  derivativeTransformTutorial,
  integralTransformTutorial,
  inverseLaplaceTutorial,
  solveIvpTutorial,
  transferFunctionTutorial,
  poleZerosTutorial,
  stepResponseTutorial,
  impulseResponseTutorial,
  convolutionTheoremTutorial,
  heavisideFunctionTutorial,
  periodicTransformTutorial,
  sDomainStabilityTutorial,
  routhHurwitzTutorial,
  bodePlotTutorial,
  nyquistPlotTutorial,
  laplaceBasicsSummaryTutorial,
  pidControlTutorial,
  servoMotorTutorial,
  circuitSDomainTutorial,
  robotControlTutorial,
  feedbackDesignTutorial,
  delaySystemTutorial,
  digitalControlTutorial,
  aircraftStabilityTutorial,
  chemicalProcessTutorial,
  laplaceOverviewTutorial,
};

export const laplaceCategory: CategoryWithTutorials = {
  id: 'laplace',
  name: 'ラプラス解析',
  description: 's領域変換・伝達関数・制御を視覚的に理解する',
  tutorials: [
    whyLaplaceTutorial,
    laplaceDefinitionTutorial,
    basicTransformTableTutorial,
    linearityLaplaceTutorial,
    derivativeTransformTutorial,
    integralTransformTutorial,
    inverseLaplaceTutorial,
    solveIvpTutorial,
    transferFunctionTutorial,
    poleZerosTutorial,
    stepResponseTutorial,
    impulseResponseTutorial,
    convolutionTheoremTutorial,
    heavisideFunctionTutorial,
    periodicTransformTutorial,
    sDomainStabilityTutorial,
    routhHurwitzTutorial,
    bodePlotTutorial,
    nyquistPlotTutorial,
    laplaceBasicsSummaryTutorial,
    pidControlTutorial,
    servoMotorTutorial,
    circuitSDomainTutorial,
    robotControlTutorial,
    feedbackDesignTutorial,
    delaySystemTutorial,
    digitalControlTutorial,
    aircraftStabilityTutorial,
    chemicalProcessTutorial,
    laplaceOverviewTutorial,
  ],
};
