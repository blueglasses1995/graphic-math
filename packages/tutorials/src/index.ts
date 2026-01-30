export * from './types';
export * from './linear-algebra';
export * from './trigonometry';
export * from './differential-calculus';
export * from './integral-calculus';
export * from './exponential';
export * from './logarithmic';
export * from './set-theory';
export * from './topology';
export * from './probability';
export * from './statistics';
export * from './algebra';
export * from './discrete-math';
export * from './complex-numbers';
export * from './glossary';

import { TutorialCategory } from './types';
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

export const allCategories: TutorialCategory[] = [
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
];

export function getTutorialById(id: string) {
  for (const category of allCategories) {
    const tutorial = category.tutorials.find((t) => t.id === id);
    if (tutorial) return tutorial;
  }
  return null;
}
