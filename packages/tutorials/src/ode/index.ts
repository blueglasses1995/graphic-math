export { whatIsOdeTutorial } from './what-is-ode';
export { directionFieldTutorial } from './direction-field';
export { separationVariablesTutorial } from './separation-variables';
export { exponentialGrowthDecayTutorial } from './exponential-growth-decay';
export { logisticEquationTutorial } from './logistic-equation';
export { firstOrderLinearTutorial } from './first-order-linear';
export { exactEquationTutorial } from './exact-equation';
export { secondOrderLinearTutorial } from './second-order-linear';
export { dampedOscillationTutorial } from './damped-oscillation';
export { forcedResonanceTutorial } from './forced-resonance';
export { laplaceSolveOdeTutorial } from './laplace-solve-ode';
export { coupledOdeMatrixTutorial } from './coupled-ode-matrix';
export { phasePlaneTutorial } from './phase-plane';
export { equilibriumStabilityTutorial } from './equilibrium-stability';
export { lyapunovStabilityTutorial } from './lyapunov-stability';
export { nonlinearLinearizationTutorial } from './nonlinear-linearization';
export { limitCycleTutorial } from './limit-cycle';
export { bifurcationIntroTutorial } from './bifurcation-intro';
export { chaosIntroTutorial } from './chaos-intro';
export { odeBasicsSummaryTutorial } from './ode-basics-summary';
export { pendulumMotionTutorial } from './pendulum-motion';
export { lotkaVolterraTutorial } from './lotka-volterra';
export { sirModelTutorial } from './sir-model';
export { rlcCircuitTutorial } from './rlc-circuit';
export { eulerMethodTutorial } from './euler-method';
export { rungeKuttaTutorial } from './runge-kutta';
export { doublePendulumTutorial } from './double-pendulum';
export { climateModelTutorial } from './climate-model';
export { neuronModelTutorial } from './neuron-model';
export { odeOverviewTutorial } from './ode-overview';

import { CategoryWithTutorials } from '../types';
import { whatIsOdeTutorial } from './what-is-ode';
import { directionFieldTutorial } from './direction-field';
import { separationVariablesTutorial } from './separation-variables';
import { exponentialGrowthDecayTutorial } from './exponential-growth-decay';
import { logisticEquationTutorial } from './logistic-equation';
import { firstOrderLinearTutorial } from './first-order-linear';
import { exactEquationTutorial } from './exact-equation';
import { secondOrderLinearTutorial } from './second-order-linear';
import { dampedOscillationTutorial } from './damped-oscillation';
import { forcedResonanceTutorial } from './forced-resonance';
import { laplaceSolveOdeTutorial } from './laplace-solve-ode';
import { coupledOdeMatrixTutorial } from './coupled-ode-matrix';
import { phasePlaneTutorial } from './phase-plane';
import { equilibriumStabilityTutorial } from './equilibrium-stability';
import { lyapunovStabilityTutorial } from './lyapunov-stability';
import { nonlinearLinearizationTutorial } from './nonlinear-linearization';
import { limitCycleTutorial } from './limit-cycle';
import { bifurcationIntroTutorial } from './bifurcation-intro';
import { chaosIntroTutorial } from './chaos-intro';
import { odeBasicsSummaryTutorial } from './ode-basics-summary';
import { pendulumMotionTutorial } from './pendulum-motion';
import { lotkaVolterraTutorial } from './lotka-volterra';
import { sirModelTutorial } from './sir-model';
import { rlcCircuitTutorial } from './rlc-circuit';
import { eulerMethodTutorial } from './euler-method';
import { rungeKuttaTutorial } from './runge-kutta';
import { doublePendulumTutorial } from './double-pendulum';
import { climateModelTutorial } from './climate-model';
import { neuronModelTutorial } from './neuron-model';
import { odeOverviewTutorial } from './ode-overview';

export const odeCategory: CategoryWithTutorials = {
  id: 'ode',
  name: '常微分方程式',
  description: '変化の法則・力学系・安定性を視覚的に理解する',
  tutorials: [
    whatIsOdeTutorial,
    directionFieldTutorial,
    separationVariablesTutorial,
    exponentialGrowthDecayTutorial,
    logisticEquationTutorial,
    firstOrderLinearTutorial,
    exactEquationTutorial,
    secondOrderLinearTutorial,
    dampedOscillationTutorial,
    forcedResonanceTutorial,
    laplaceSolveOdeTutorial,
    coupledOdeMatrixTutorial,
    phasePlaneTutorial,
    equilibriumStabilityTutorial,
    lyapunovStabilityTutorial,
    nonlinearLinearizationTutorial,
    limitCycleTutorial,
    bifurcationIntroTutorial,
    chaosIntroTutorial,
    odeBasicsSummaryTutorial,
    pendulumMotionTutorial,
    lotkaVolterraTutorial,
    sirModelTutorial,
    rlcCircuitTutorial,
    eulerMethodTutorial,
    rungeKuttaTutorial,
    doublePendulumTutorial,
    climateModelTutorial,
    neuronModelTutorial,
    odeOverviewTutorial,
  ],
};
