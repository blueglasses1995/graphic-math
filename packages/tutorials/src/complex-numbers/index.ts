import { TutorialCategory } from '../types';
import { xSquaredNegativeTutorial } from './x-squared-negative';
import { imaginaryUnitTutorial } from './imaginary-unit';
import { complexDefinitionTutorial } from './complex-definition';
import { complexPlaneTutorial } from './complex-plane';
import { complexAdditionTutorial } from './complex-addition';
import { complexMultiplicationTutorial } from './complex-multiplication';
import { conjugateTutorial } from './conjugate';
import { modulusTutorial } from './modulus';
import { argumentTutorial } from './argument';
import { polarFormTutorial } from './polar-form';
import { polarMultiplyTutorial } from './polar-multiply';
import { polarDivideTutorial } from './polar-divide';
import { deMoivreTutorial } from './de-moivre';
import { nthRootTutorial } from './nth-root';
import { eulerFormulaComplexTutorial } from './euler-formula-complex';
import { eulerIdentityTutorial } from './euler-identity';
import { complexExponentialTutorial } from './complex-exponential';
import { complexQuadraticTutorial } from './complex-quadratic';
import { fundamentalTheoremTutorial } from './fundamental-theorem';
import { complexSummaryTutorial } from './complex-summary';
import { mandelbrotTutorial } from './mandelbrot';
import { juliaSetTutorial } from './julia-set';
import { acCircuitTutorial } from './ac-circuit';
import { signalProcessingTutorial } from './signal-processing';
import { quantumIntroTutorial } from './quantum-intro';
import { conformalMappingTutorial } from './conformal-mapping';
import { complexRotationTutorial } from './complex-rotation';
import { controlTheoryTutorial } from './control-theory';
import { zetaFunctionTutorial } from './zeta-function';
import { piFromComplexTutorial } from './pi-from-complex';

export {
  xSquaredNegativeTutorial,
  imaginaryUnitTutorial,
  complexDefinitionTutorial,
  complexPlaneTutorial,
  complexAdditionTutorial,
  complexMultiplicationTutorial,
  conjugateTutorial,
  modulusTutorial,
  argumentTutorial,
  polarFormTutorial,
  polarMultiplyTutorial,
  polarDivideTutorial,
  deMoivreTutorial,
  nthRootTutorial,
  eulerFormulaComplexTutorial,
  eulerIdentityTutorial,
  complexExponentialTutorial,
  complexQuadraticTutorial,
  fundamentalTheoremTutorial,
  complexSummaryTutorial,
  mandelbrotTutorial,
  juliaSetTutorial,
  acCircuitTutorial,
  signalProcessingTutorial,
  quantumIntroTutorial,
  conformalMappingTutorial,
  complexRotationTutorial,
  controlTheoryTutorial,
  zetaFunctionTutorial,
  piFromComplexTutorial,
};

export const complexNumbersCategory: TutorialCategory = {
  id: 'complex-numbers',
  name: '複素数',
  description: '複素平面・オイラーの公式・回転を視覚的に理解する',
  tutorials: [
    xSquaredNegativeTutorial,
    imaginaryUnitTutorial,
    complexDefinitionTutorial,
    complexPlaneTutorial,
    complexAdditionTutorial,
    complexMultiplicationTutorial,
    conjugateTutorial,
    modulusTutorial,
    argumentTutorial,
    polarFormTutorial,
    polarMultiplyTutorial,
    polarDivideTutorial,
    deMoivreTutorial,
    nthRootTutorial,
    eulerFormulaComplexTutorial,
    eulerIdentityTutorial,
    complexExponentialTutorial,
    complexQuadraticTutorial,
    fundamentalTheoremTutorial,
    complexSummaryTutorial,
    mandelbrotTutorial,
    juliaSetTutorial,
    acCircuitTutorial,
    signalProcessingTutorial,
    quantumIntroTutorial,
    conformalMappingTutorial,
    complexRotationTutorial,
    controlTheoryTutorial,
    zetaFunctionTutorial,
    piFromComplexTutorial,
  ],
};
