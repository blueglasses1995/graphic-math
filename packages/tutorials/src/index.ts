export * from './types';
export * from './categories';
export { linearAlgebraCategory } from './linear-algebra';
export { trigonometryCategory } from './trigonometry';
export { differentialCalculusCategory } from './differential-calculus';
export { integralCalculusCategory } from './integral-calculus';
export { exponentialCategory } from './exponential';
export { logarithmicCategory } from './logarithmic';
export { setTheoryCategory } from './set-theory';
export { topologyCategory } from './topology';
export { probabilityCategory } from './probability';
export { statisticsCategory } from './statistics';
export { algebraCategory } from './algebra';
export { discreteMathCategory } from './discrete-math';
export { complexNumbersCategory } from './complex-numbers';
export { graphTheoryCategory } from './graph-theory';
export { categoryTheoryCategory } from './category-theory';
export { odeCategory } from './ode';
export { pdeCategory } from './pde';
export { laplaceCategory } from './laplace';
export { fourierCategory } from './fourier';
export * from './glossary';

import { CategoryWithTutorials } from './types';
import { trigonometryCategory } from './trigonometry';
import { linearAlgebraCategory } from './linear-algebra';
import { differentialCalculusCategory } from './differential-calculus';
import { integralCalculusCategory } from './integral-calculus';
import { exponentialCategory } from './exponential';
import { logarithmicCategory } from './logarithmic';
import { setTheoryCategory } from './set-theory';
import { topologyCategory } from './topology';
import { probabilityCategory } from './probability';
import { statisticsCategory } from './statistics';
import { algebraCategory } from './algebra';
import { discreteMathCategory } from './discrete-math';
import { complexNumbersCategory } from './complex-numbers';
import { graphTheoryCategory } from './graph-theory';
import { categoryTheoryCategory } from './category-theory';
import { odeCategory } from './ode';
import { pdeCategory } from './pde';
import { laplaceCategory } from './laplace';
import { fourierCategory } from './fourier';

export const allCategories: CategoryWithTutorials[] = [
  trigonometryCategory,
  linearAlgebraCategory,
  differentialCalculusCategory,
  integralCalculusCategory,
  exponentialCategory,
  logarithmicCategory,
  setTheoryCategory,
  topologyCategory,
  probabilityCategory,
  statisticsCategory,
  algebraCategory,
  discreteMathCategory,
  complexNumbersCategory,
  graphTheoryCategory,
  categoryTheoryCategory,
  odeCategory,
  pdeCategory,
  laplaceCategory,
  fourierCategory,
];

export function getTutorialById(id: string) {
  for (const category of allCategories) {
    const tutorial = category.tutorials.find((t: { id: string }) => t.id === id);
    if (tutorial) return tutorial;
  }
  return null;
}
