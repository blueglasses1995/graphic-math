export { symmetryIntroTutorial } from './symmetry-intro';
export { triangleRotationTutorial } from './triangle-rotation';
export { clockArithmeticTutorial } from './clock-arithmetic';
export { modularArithmeticTutorial } from './modular-arithmetic';
export { closureTutorial } from './closure';
export { groupDefinitionTutorial } from './group-definition';
export { identityInverseTutorial } from './identity-inverse';
export { cyclicGroupTutorial } from './cyclic-group';
export { symmetricGroupTutorial } from './symmetric-group';
export { subgroupTutorial } from './subgroup';
export { groupOrderTutorial } from './group-order';
export { homomorphismTutorial } from './homomorphism';
export { isomorphismTutorial } from './isomorphism';
export { abelianNonabelianTutorial } from './abelian-nonabelian';
export { ringDefinitionTutorial } from './ring-definition';
export { integerPolynomialRingTutorial } from './integer-polynomial-ring';
export { idealQuotientTutorial } from './ideal-quotient';
export { fieldDefinitionTutorial } from './field-definition';
export { finiteFieldTutorial } from './finite-field';
export { algebraSummaryTutorial } from './algebra-summary';
export { rubikGroupTutorial } from './rubik-group';
export { rsaCryptoTutorial } from './rsa-crypto';
export { crystalSymmetryTutorial } from './crystal-symmetry';
export { wallpaperGroupTutorial } from './wallpaper-group';
export { codingTheoryTutorial } from './coding-theory';
export { equationSolvabilityTutorial } from './equation-solvability';
export { burnsideTutorial } from './burnside';
export { ellipticCurveTutorial } from './elliptic-curve';
export { molecularSymmetryTutorial } from './molecular-symmetry';
export { musicGroupTheoryTutorial } from './music-group-theory';

import { TutorialCategory } from '../types';
import { symmetryIntroTutorial } from './symmetry-intro';
import { triangleRotationTutorial } from './triangle-rotation';
import { clockArithmeticTutorial } from './clock-arithmetic';
import { modularArithmeticTutorial } from './modular-arithmetic';
import { closureTutorial } from './closure';
import { groupDefinitionTutorial } from './group-definition';
import { identityInverseTutorial } from './identity-inverse';
import { cyclicGroupTutorial } from './cyclic-group';
import { symmetricGroupTutorial } from './symmetric-group';
import { subgroupTutorial } from './subgroup';
import { groupOrderTutorial } from './group-order';
import { homomorphismTutorial } from './homomorphism';
import { isomorphismTutorial } from './isomorphism';
import { abelianNonabelianTutorial } from './abelian-nonabelian';
import { ringDefinitionTutorial } from './ring-definition';
import { integerPolynomialRingTutorial } from './integer-polynomial-ring';
import { idealQuotientTutorial } from './ideal-quotient';
import { fieldDefinitionTutorial } from './field-definition';
import { finiteFieldTutorial } from './finite-field';
import { algebraSummaryTutorial } from './algebra-summary';
import { rubikGroupTutorial } from './rubik-group';
import { rsaCryptoTutorial } from './rsa-crypto';
import { crystalSymmetryTutorial } from './crystal-symmetry';
import { wallpaperGroupTutorial } from './wallpaper-group';
import { codingTheoryTutorial } from './coding-theory';
import { equationSolvabilityTutorial } from './equation-solvability';
import { burnsideTutorial } from './burnside';
import { ellipticCurveTutorial } from './elliptic-curve';
import { molecularSymmetryTutorial } from './molecular-symmetry';
import { musicGroupTheoryTutorial } from './music-group-theory';

export const algebraCategory: TutorialCategory = {
  id: 'algebra',
  name: '代数学',
  description: '群・環・体の構造を視覚的に理解する',
  tutorials: [
    // 基礎編
    symmetryIntroTutorial,
    triangleRotationTutorial,
    clockArithmeticTutorial,
    modularArithmeticTutorial,
    closureTutorial,
    groupDefinitionTutorial,
    identityInverseTutorial,
    cyclicGroupTutorial,
    symmetricGroupTutorial,
    subgroupTutorial,
    groupOrderTutorial,
    homomorphismTutorial,
    isomorphismTutorial,
    abelianNonabelianTutorial,
    ringDefinitionTutorial,
    integerPolynomialRingTutorial,
    idealQuotientTutorial,
    fieldDefinitionTutorial,
    finiteFieldTutorial,
    algebraSummaryTutorial,
    // 実践編
    rubikGroupTutorial,
    rsaCryptoTutorial,
    crystalSymmetryTutorial,
    wallpaperGroupTutorial,
    codingTheoryTutorial,
    equationSolvabilityTutorial,
    burnsideTutorial,
    ellipticCurveTutorial,
    molecularSymmetryTutorial,
    musicGroupTheoryTutorial,
  ],
};
