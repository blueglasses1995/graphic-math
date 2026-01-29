export { basisVectorsTutorial } from './basis-vectors';
export { linearTransformsTutorial } from './linear-transforms';
export { matrixMeaningTutorial } from './matrix-meaning';
export { eigenvaluesTutorial } from './eigenvalues';

import { TutorialCategory } from '../types';
import { basisVectorsTutorial } from './basis-vectors';
import { linearTransformsTutorial } from './linear-transforms';
import { matrixMeaningTutorial } from './matrix-meaning';
import { eigenvaluesTutorial } from './eigenvalues';

export const linearAlgebraCategory: TutorialCategory = {
  id: 'linear-algebra',
  name: '線形代数',
  description: 'ベクトル、行列、線形変換を3Dで視覚的に理解する',
  tutorials: [
    basisVectorsTutorial,
    linearTransformsTutorial,
    matrixMeaningTutorial,
    eigenvaluesTutorial,
  ],
};
