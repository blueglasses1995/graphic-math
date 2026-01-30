export { howManyTimesTutorial } from './how-many-times';
export { logDefinitionTutorial } from './log-definition';
export { logGraphTutorial } from './log-graph';
export { commonLogTutorial } from './common-log';
export { naturalLogTutorial } from './natural-log';
export { logProductTutorial } from './log-product';
export { logQuotientTutorial } from './log-quotient';
export { logPowerTutorial } from './log-power';
export { changeOfBaseTutorial } from './change-of-base';
export { logScaleTutorial } from './log-scale';
export { semiLogTutorial } from './semi-log';
export { logLogTutorial } from './log-log';
export { logEquationTutorial } from './log-equation';
export { expEquationTutorial } from './exp-equation';
export { logGrowthRateTutorial } from './log-growth-rate';
export { lnDerivativeTutorial } from './ln-derivative';
export { lnIntegralTutorial } from './ln-integral';
export { logDigitsTutorial } from './log-digits';
export { entropyTutorial } from './entropy';
export { logSummaryTutorial } from './log-summary';
export { slideRuleTutorial } from './slide-rule';
export { richterScaleTutorial } from './richter-scale';
export { musicOctaveTutorial } from './music-octave';
export { informationTheoryTutorial } from './information-theory';
export { logEquationAppTutorial } from './log-equation-app';
export { stirlingTutorial } from './stirling';
export { benfordTutorial } from './benford';
export { zipfTutorial } from './zipf';
export { logAlgorithmTutorial } from './log-algorithm';
export { sigmoidTutorial } from './sigmoid';

import { TutorialCategory } from '../types';
import { howManyTimesTutorial } from './how-many-times';
import { logDefinitionTutorial } from './log-definition';
import { logGraphTutorial } from './log-graph';
import { commonLogTutorial } from './common-log';
import { naturalLogTutorial } from './natural-log';
import { logProductTutorial } from './log-product';
import { logQuotientTutorial } from './log-quotient';
import { logPowerTutorial } from './log-power';
import { changeOfBaseTutorial } from './change-of-base';
import { logScaleTutorial } from './log-scale';
import { semiLogTutorial } from './semi-log';
import { logLogTutorial } from './log-log';
import { logEquationTutorial } from './log-equation';
import { expEquationTutorial } from './exp-equation';
import { logGrowthRateTutorial } from './log-growth-rate';
import { lnDerivativeTutorial } from './ln-derivative';
import { lnIntegralTutorial } from './ln-integral';
import { logDigitsTutorial } from './log-digits';
import { entropyTutorial } from './entropy';
import { logSummaryTutorial } from './log-summary';
import { slideRuleTutorial } from './slide-rule';
import { richterScaleTutorial } from './richter-scale';
import { musicOctaveTutorial } from './music-octave';
import { informationTheoryTutorial } from './information-theory';
import { logEquationAppTutorial } from './log-equation-app';
import { stirlingTutorial } from './stirling';
import { benfordTutorial } from './benford';
import { zipfTutorial } from './zipf';
import { logAlgorithmTutorial } from './log-algorithm';
import { sigmoidTutorial } from './sigmoid';

export const logarithmicCategory: TutorialCategory = {
  id: 'logarithmic',
  name: '対数関数',
  description: '指数の逆・スケールの変換を視覚的に理解する',
  tutorials: [
    // 基礎編
    howManyTimesTutorial,
    logDefinitionTutorial,
    logGraphTutorial,
    commonLogTutorial,
    naturalLogTutorial,
    logProductTutorial,
    logQuotientTutorial,
    logPowerTutorial,
    changeOfBaseTutorial,
    logScaleTutorial,
    semiLogTutorial,
    logLogTutorial,
    logEquationTutorial,
    expEquationTutorial,
    logGrowthRateTutorial,
    lnDerivativeTutorial,
    lnIntegralTutorial,
    logDigitsTutorial,
    entropyTutorial,
    logSummaryTutorial,
    // 実践編
    slideRuleTutorial,
    richterScaleTutorial,
    musicOctaveTutorial,
    informationTheoryTutorial,
    logEquationAppTutorial,
    stirlingTutorial,
    benfordTutorial,
    zipfTutorial,
    logAlgorithmTutorial,
    sigmoidTutorial,
  ],
};
