export { unitCircleTutorial } from './unit-circle';
export { cosineTutorial } from './cosine';
export { sineTutorial } from './sine';
export { shadowJourneyTutorial } from './shadow-journey';
export { cosWaveTutorial } from './cos-wave';
export { sinWaveTutorial } from './sin-wave';
export { periodicityTutorial } from './periodicity';
export { pendulumTutorial } from './pendulum';
export { tanFunctionTutorial } from './tan-function';
export { pythagoreanIdentityTutorial } from './pythagorean-identity';
export { radianTutorial } from './radian';
export { specialAnglesTutorial } from './special-angles';
export { inverseTrigTutorial } from './inverse-trig';
export { symmetryTutorial } from './symmetry';
export { additionTheoremTutorial } from './addition-theorem';
export { cosSinRelationTutorial } from './cos-sin-relation';
export { amplitudeTutorial } from './amplitude';
export { periodWidthTutorial } from './period-width';
export { phaseShiftTutorial } from './phase-shift';
export { trigSummaryTutorial } from './trig-summary';
export { waveSuperpositionTutorial } from './wave-superposition';
export { circularMotionTutorial } from './circular-motion';
export { springVibrationTutorial } from './spring-vibration';
export { doubleAngleTutorial } from './double-angle';
export { halfAngleTutorial } from './half-angle';
export { tripleAngleTutorial } from './triple-angle';
export { soundWavesTutorial } from './sound-waves';
export { fourierIntroTutorial } from './fourier-intro';
export { polarArtTutorial } from './polar-art';
export { triangulationTutorial } from './triangulation';

import { CategoryWithTutorials } from '../types';
import { unitCircleTutorial } from './unit-circle';
import { cosineTutorial } from './cosine';
import { sineTutorial } from './sine';
import { shadowJourneyTutorial } from './shadow-journey';
import { cosWaveTutorial } from './cos-wave';
import { sinWaveTutorial } from './sin-wave';
import { periodicityTutorial } from './periodicity';
import { pendulumTutorial } from './pendulum';
import { tanFunctionTutorial } from './tan-function';
import { pythagoreanIdentityTutorial } from './pythagorean-identity';
import { radianTutorial } from './radian';
import { specialAnglesTutorial } from './special-angles';
import { inverseTrigTutorial } from './inverse-trig';
import { symmetryTutorial } from './symmetry';
import { additionTheoremTutorial } from './addition-theorem';
import { cosSinRelationTutorial } from './cos-sin-relation';
import { amplitudeTutorial } from './amplitude';
import { periodWidthTutorial } from './period-width';
import { phaseShiftTutorial } from './phase-shift';
import { trigSummaryTutorial } from './trig-summary';
import { waveSuperpositionTutorial } from './wave-superposition';
import { circularMotionTutorial } from './circular-motion';
import { springVibrationTutorial } from './spring-vibration';
import { doubleAngleTutorial } from './double-angle';
import { halfAngleTutorial } from './half-angle';
import { tripleAngleTutorial } from './triple-angle';
import { soundWavesTutorial } from './sound-waves';
import { fourierIntroTutorial } from './fourier-intro';
import { polarArtTutorial } from './polar-art';
import { triangulationTutorial } from './triangulation';

export const trigonometryCategory: CategoryWithTutorials = {
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
    // 基礎編 — 関数と性質
    tanFunctionTutorial,
    pythagoreanIdentityTutorial,
    radianTutorial,
    specialAnglesTutorial,
    inverseTrigTutorial,
    symmetryTutorial,
    additionTheoremTutorial,
    cosSinRelationTutorial,
    // 基礎編 — 波のパラメータ
    amplitudeTutorial,
    periodWidthTutorial,
    phaseShiftTutorial,
    trigSummaryTutorial,
    // 実践編 — 物理応用
    waveSuperpositionTutorial,
    circularMotionTutorial,
    springVibrationTutorial,
    // 実践編 — 公式の視覚化
    doubleAngleTutorial,
    halfAngleTutorial,
    tripleAngleTutorial,
    // 実践編 — 応用トピック
    soundWavesTutorial,
    fourierIntroTutorial,
    polarArtTutorial,
    triangulationTutorial,
  ],
};
