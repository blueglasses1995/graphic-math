// ── 基礎編 ──
export { vectorsIntroTutorial } from './vectors-intro';
export { vectorAdditionTutorial } from './vector-addition';
export { scalarMultiplyTutorial } from './scalar-multiply';
export { basisVectorsTutorial } from './basis-vectors';
export { linearCombinationTutorial } from './linear-combination';
export { linearIndependenceTutorial } from './linear-independence';
export { linearTransformsTutorial } from './linear-transforms';
export { matrixMeaningTutorial } from './matrix-meaning';
export { matrixProductTutorial } from './matrix-product';
export { determinantAreaTutorial } from './determinant-area';
export { determinantZeroTutorial } from './determinant-zero';
export { inverseMatrixTutorial } from './inverse-matrix';
export { solvingSystemsTutorial } from './solving-systems';
export { columnNullSpaceTutorial } from './column-null-space';
export { dotProductTutorial } from './dot-product';
export { crossProductTutorial } from './cross-product';
export { eigenvaluesTutorial } from './eigenvalues';
export { changeOfBasisTutorial } from './change-of-basis';
export { threeDimensionsTutorial } from './three-dimensions';
export { laSummaryTutorial } from './la-summary';

// ── 実践編 ──
export { rotationMatrixTutorial } from './rotation-matrix';
export { reflectionTutorial } from './reflection';
export { shearTransformTutorial } from './shear-transform';
export { imageTransformTutorial } from './image-transform';
export { systemGeometryTutorial } from './system-geometry';
export { leastSquaresTutorial } from './least-squares';
export { eigenDecompositionTutorial } from './eigen-decomposition';
export { pcaIntroTutorial } from './pca-intro';
export { markovChainsTutorial } from './markov-chains';
export { pagerankTutorial } from './pagerank';

import { TutorialCategory } from '../types';

// ── 基礎編 ──
import { vectorsIntroTutorial } from './vectors-intro';
import { vectorAdditionTutorial } from './vector-addition';
import { scalarMultiplyTutorial } from './scalar-multiply';
import { basisVectorsTutorial } from './basis-vectors';
import { linearCombinationTutorial } from './linear-combination';
import { linearIndependenceTutorial } from './linear-independence';
import { linearTransformsTutorial } from './linear-transforms';
import { matrixMeaningTutorial } from './matrix-meaning';
import { matrixProductTutorial } from './matrix-product';
import { determinantAreaTutorial } from './determinant-area';
import { determinantZeroTutorial } from './determinant-zero';
import { inverseMatrixTutorial } from './inverse-matrix';
import { solvingSystemsTutorial } from './solving-systems';
import { columnNullSpaceTutorial } from './column-null-space';
import { dotProductTutorial } from './dot-product';
import { crossProductTutorial } from './cross-product';
import { eigenvaluesTutorial } from './eigenvalues';
import { changeOfBasisTutorial } from './change-of-basis';
import { threeDimensionsTutorial } from './three-dimensions';
import { laSummaryTutorial } from './la-summary';

// ── 実践編 ──
import { rotationMatrixTutorial } from './rotation-matrix';
import { reflectionTutorial } from './reflection';
import { shearTransformTutorial } from './shear-transform';
import { imageTransformTutorial } from './image-transform';
import { systemGeometryTutorial } from './system-geometry';
import { leastSquaresTutorial } from './least-squares';
import { eigenDecompositionTutorial } from './eigen-decomposition';
import { pcaIntroTutorial } from './pca-intro';
import { markovChainsTutorial } from './markov-chains';
import { pagerankTutorial } from './pagerank';

export const linearAlgebraCategory: TutorialCategory = {
  id: 'linear-algebra',
  name: '線形代数',
  description: 'ベクトル、行列、線形変換を3Dで視覚的に理解する',
  tutorials: [
    // ── 基礎編 ──
    vectorsIntroTutorial,
    vectorAdditionTutorial,
    scalarMultiplyTutorial,
    basisVectorsTutorial,
    linearCombinationTutorial,
    linearIndependenceTutorial,
    linearTransformsTutorial,
    matrixMeaningTutorial,
    matrixProductTutorial,
    determinantAreaTutorial,
    determinantZeroTutorial,
    inverseMatrixTutorial,
    solvingSystemsTutorial,
    columnNullSpaceTutorial,
    dotProductTutorial,
    crossProductTutorial,
    eigenvaluesTutorial,
    changeOfBasisTutorial,
    threeDimensionsTutorial,
    laSummaryTutorial,
    // ── 実践編 ──
    rotationMatrixTutorial,
    reflectionTutorial,
    shearTransformTutorial,
    imageTransformTutorial,
    systemGeometryTutorial,
    leastSquaresTutorial,
    eigenDecompositionTutorial,
    pcaIntroTutorial,
    markovChainsTutorial,
    pagerankTutorial,
  ],
};
