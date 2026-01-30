export { unitCircleTutorial } from './unit-circle';
export { cosineTutorial } from './cosine';
export { sineTutorial } from './sine';
export { shadowJourneyTutorial } from './shadow-journey';
export { cosWaveTutorial } from './cos-wave';
export { sinWaveTutorial } from './sin-wave';
export { periodicityTutorial } from './periodicity';
export { pendulumTutorial } from './pendulum';

import { TutorialCategory } from '../types';
import { unitCircleTutorial } from './unit-circle';
import { cosineTutorial } from './cosine';
import { sineTutorial } from './sine';
import { shadowJourneyTutorial } from './shadow-journey';
import { cosWaveTutorial } from './cos-wave';
import { sinWaveTutorial } from './sin-wave';
import { periodicityTutorial } from './periodicity';
import { pendulumTutorial } from './pendulum';

export const trigonometryCategory: TutorialCategory = {
  id: 'trigonometry',
  name: '三角関数',
  description: '単位円、波形、回転を使って三角関数を視覚的に理解する',
  tutorials: [
    unitCircleTutorial,
    cosineTutorial,
    sineTutorial,
    shadowJourneyTutorial,
    cosWaveTutorial,
    sinWaveTutorial,
    periodicityTutorial,
    pendulumTutorial,
  ],
};
