export * from './types';
export * from './linear-algebra';

import { TutorialCategory } from './types';
import { linearAlgebraCategory } from './linear-algebra';

export const allCategories: TutorialCategory[] = [linearAlgebraCategory];

export function getTutorialById(id: string) {
  for (const category of allCategories) {
    const tutorial = category.tutorials.find((t) => t.id === id);
    if (tutorial) return tutorial;
  }
  return null;
}
