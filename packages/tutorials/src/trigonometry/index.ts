export { unitCircleTutorial } from './unit-circle';

import { TutorialCategory } from '../types';
import { unitCircleTutorial } from './unit-circle';

export const trigonometryCategory: TutorialCategory = {
  id: 'trigonometry',
  name: '三角関数',
  description: '単位円、波形、回転を使って三角関数を視覚的に理解する',
  tutorials: [unitCircleTutorial]
};
