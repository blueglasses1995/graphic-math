export { rateOfChangeTutorial } from './rate-of-change';
export { secantToTangentTutorial } from './secant-to-tangent';
export { limitImageTutorial } from './limit-image';
export { derivativeIntroTutorial } from './derivative-intro';
export { xSquaredDerivativeTutorial } from './x-squared-derivative';
export { xCubedDerivativeTutorial } from './x-cubed-derivative';
export { constantLinearDerivativeTutorial } from './constant-linear-derivative';
export { sumDerivativeTutorial } from './sum-derivative';
export { productRuleTutorial } from './product-rule';
export { chainRuleTutorial } from './chain-rule';
export { sinDerivativeTutorial } from './sin-derivative';
export { cosDerivativeTutorial } from './cos-derivative';
export { expDerivativeTutorial } from './exp-derivative';
export { quotientRuleTutorial } from './quotient-rule';
export { extremaTutorial } from './extrema';
export { concavityTutorial } from './concavity';
export { linearApproximationTutorial } from './linear-approximation';
export { implicitDiffTutorial } from './implicit-diff';
export { meanValueTheoremTutorial } from './mean-value-theorem';
export { diffSummaryTutorial } from './diff-summary';
export { velocityAccelerationTutorial } from './velocity-acceleration';
export { optimizationTutorial } from './optimization';
export { newtonMethodTutorial } from './newton-method';
export { relatedRatesTutorial } from './related-rates';
export { taylorIntroTutorial } from './taylor-intro';
export { lhopitalTutorial } from './lhopital';
export { diffEqIntroTutorial } from './diff-eq-intro';
export { curvatureTutorial } from './curvature';
export { partialDerivativeTutorial } from './partial-derivative';
export { gradientVectorTutorial } from './gradient-vector';

import { CategoryWithTutorials } from '../types';
import { rateOfChangeTutorial } from './rate-of-change';
import { secantToTangentTutorial } from './secant-to-tangent';
import { limitImageTutorial } from './limit-image';
import { derivativeIntroTutorial } from './derivative-intro';
import { xSquaredDerivativeTutorial } from './x-squared-derivative';
import { xCubedDerivativeTutorial } from './x-cubed-derivative';
import { constantLinearDerivativeTutorial } from './constant-linear-derivative';
import { sumDerivativeTutorial } from './sum-derivative';
import { productRuleTutorial } from './product-rule';
import { chainRuleTutorial } from './chain-rule';
import { sinDerivativeTutorial } from './sin-derivative';
import { cosDerivativeTutorial } from './cos-derivative';
import { expDerivativeTutorial } from './exp-derivative';
import { quotientRuleTutorial } from './quotient-rule';
import { extremaTutorial } from './extrema';
import { concavityTutorial } from './concavity';
import { linearApproximationTutorial } from './linear-approximation';
import { implicitDiffTutorial } from './implicit-diff';
import { meanValueTheoremTutorial } from './mean-value-theorem';
import { diffSummaryTutorial } from './diff-summary';
import { velocityAccelerationTutorial } from './velocity-acceleration';
import { optimizationTutorial } from './optimization';
import { newtonMethodTutorial } from './newton-method';
import { relatedRatesTutorial } from './related-rates';
import { taylorIntroTutorial } from './taylor-intro';
import { lhopitalTutorial } from './lhopital';
import { diffEqIntroTutorial } from './diff-eq-intro';
import { curvatureTutorial } from './curvature';
import { partialDerivativeTutorial } from './partial-derivative';
import { gradientVectorTutorial } from './gradient-vector';

export const differentialCalculusCategory: CategoryWithTutorials = {
  id: 'differential-calculus',
  name: '微分',
  description: '変化率・傾き・導関数を視覚的に理解する',
  tutorials: [
    // 基礎編
    rateOfChangeTutorial,
    secantToTangentTutorial,
    limitImageTutorial,
    derivativeIntroTutorial,
    xSquaredDerivativeTutorial,
    xCubedDerivativeTutorial,
    constantLinearDerivativeTutorial,
    sumDerivativeTutorial,
    productRuleTutorial,
    chainRuleTutorial,
    sinDerivativeTutorial,
    cosDerivativeTutorial,
    expDerivativeTutorial,
    quotientRuleTutorial,
    extremaTutorial,
    concavityTutorial,
    linearApproximationTutorial,
    implicitDiffTutorial,
    meanValueTheoremTutorial,
    diffSummaryTutorial,
    // 実践編
    velocityAccelerationTutorial,
    optimizationTutorial,
    newtonMethodTutorial,
    relatedRatesTutorial,
    taylorIntroTutorial,
    lhopitalTutorial,
    diffEqIntroTutorial,
    curvatureTutorial,
    partialDerivativeTutorial,
    gradientVectorTutorial,
  ],
};
