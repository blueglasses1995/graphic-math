export { unitCircleTutorial } from './unit-circle';
export { cosineTutorial } from './cosine';
export { sineTutorial } from './sine';
export { shadowJourneyTutorial } from './shadow-journey';
export { cosWaveTutorial } from './cos-wave';
export { sinWaveTutorial } from './sin-wave';
export { periodicityTutorial } from './periodicity';
export { pendulumTutorial } from './pendulum';
export { waveSuperpositionTutorial } from './wave-superposition';
export { circularMotionTutorial } from './circular-motion';
export { springVibrationTutorial } from './spring-vibration';
export { doubleAngleTutorial } from './double-angle';
export { halfAngleTutorial } from './half-angle';
export { tripleAngleTutorial } from './triple-angle';

import { TutorialCategory } from '../types';
import { unitCircleTutorial } from './unit-circle';
import { cosineTutorial } from './cosine';
import { sineTutorial } from './sine';
import { shadowJourneyTutorial } from './shadow-journey';
import { cosWaveTutorial } from './cos-wave';
import { sinWaveTutorial } from './sin-wave';
import { periodicityTutorial } from './periodicity';
import { pendulumTutorial } from './pendulum';
import { waveSuperpositionTutorial } from './wave-superposition';
import { circularMotionTutorial } from './circular-motion';
import { springVibrationTutorial } from './spring-vibration';
import { doubleAngleTutorial } from './double-angle';
import { halfAngleTutorial } from './half-angle';
import { tripleAngleTutorial } from './triple-angle';

export const trigonometryCategory: TutorialCategory = {
  id: 'trigonometry',
  name: '三角関数',
  description: '単位円、波形、回転を使って三角関数を視覚的に理解する',
  tutorials: [
    // 基礎編
    unitCircleTutorial,
    cosineTutorial,
    sineTutorial,
    shadowJourneyTutorial,
    cosWaveTutorial,
    sinWaveTutorial,
    periodicityTutorial,
    pendulumTutorial,
    // 実践編 — 物理応用
    waveSuperpositionTutorial,
    circularMotionTutorial,
    springVibrationTutorial,
    // 実践編 — 公式の視覚化
    doubleAngleTutorial,
    halfAngleTutorial,
    tripleAngleTutorial,
  ],
};
