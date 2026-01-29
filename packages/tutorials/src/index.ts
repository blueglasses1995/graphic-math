export * from './types';
export * from './linear-algebra';
export * from './trigonometry';
export * from './glossary';

import { TutorialCategory } from './types';
import { linearAlgebraCategory } from './linear-algebra';
import { trigonometryCategory } from './trigonometry';

export const allCategories: TutorialCategory[] = [trigonometryCategory, linearAlgebraCategory];

export function getTutorialById(id: string) {
  for (const category of allCategories) {
    const tutorial = category.tutorials.find((t) => t.id === id);
    if (tutorial) return tutorial;
  }
  return null;
}
