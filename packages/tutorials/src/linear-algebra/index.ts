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

// ── 発展編 ──
export { svdIntroTutorial } from './svd-intro';
export { svdImageTutorial } from './svd-image';
export { orthonormalBasisTutorial } from './orthonormal-basis';
export { qrDecompositionTutorial } from './qr-decomposition';
export { luDecompositionTutorial } from './lu-decomposition';
export { symmetricEigenvalueTutorial } from './symmetric-eigenvalue';
export { positiveDefiniteTutorial } from './positive-definite';
export { tensorIntroTutorial } from './tensor-intro';
export { normsDistancesTutorial } from './norms-distances';
export { projectionDistanceTutorial } from './projection-distance';
export { matrixComplexityTutorial } from './matrix-complexity';
export { sparseMatrixTutorial } from './sparse-matrix';
export { gpuMatrixTutorial } from './gpu-matrix';
export { neuralNetMatrixTutorial } from './neural-net-matrix';
export { gradientDescentTutorial } from './gradient-descent';
export { matrixFactorizationRecTutorial } from './matrix-factorization-rec';
export { word2vecIntroTutorial } from './word2vec-intro';
export { renderingPipelineTutorial } from './rendering-pipeline';
export { quaternionRotationTutorial } from './quaternion-rotation';
export { bezierMatrixTutorial } from './bezier-matrix';
export { iterativeSolverTutorial } from './iterative-solver';
export { eigenvalueNumericalTutorial } from './eigenvalue-numerical';
export { pagerankAdvancedTutorial } from './pagerank-advanced';
export { pcaAdvancedTutorial } from './pca-advanced';
export { kernelPcaTutorial } from './kernel-pca';
export { matrixCompletionTutorial } from './matrix-completion';
export { skinningAnimationTutorial } from './skinning-animation';
export { graphLaplacianTutorial } from './graph-laplacian';
export { compressedSensingTutorial } from './compressed-sensing';
export { laCsOverviewTutorial } from './la-cs-overview';

import { CategoryWithTutorials } from '../types';

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

// ── 発展編 ──
import { svdIntroTutorial } from './svd-intro';
import { svdImageTutorial } from './svd-image';
import { orthonormalBasisTutorial } from './orthonormal-basis';
import { qrDecompositionTutorial } from './qr-decomposition';
import { luDecompositionTutorial } from './lu-decomposition';
import { symmetricEigenvalueTutorial } from './symmetric-eigenvalue';
import { positiveDefiniteTutorial } from './positive-definite';
import { tensorIntroTutorial } from './tensor-intro';
import { normsDistancesTutorial } from './norms-distances';
import { projectionDistanceTutorial } from './projection-distance';
import { matrixComplexityTutorial } from './matrix-complexity';
import { sparseMatrixTutorial } from './sparse-matrix';
import { gpuMatrixTutorial } from './gpu-matrix';
import { neuralNetMatrixTutorial } from './neural-net-matrix';
import { gradientDescentTutorial } from './gradient-descent';
import { matrixFactorizationRecTutorial } from './matrix-factorization-rec';
import { word2vecIntroTutorial } from './word2vec-intro';
import { renderingPipelineTutorial } from './rendering-pipeline';
import { quaternionRotationTutorial } from './quaternion-rotation';
import { bezierMatrixTutorial } from './bezier-matrix';
import { iterativeSolverTutorial } from './iterative-solver';
import { eigenvalueNumericalTutorial } from './eigenvalue-numerical';
import { pagerankAdvancedTutorial } from './pagerank-advanced';
import { pcaAdvancedTutorial } from './pca-advanced';
import { kernelPcaTutorial } from './kernel-pca';
import { matrixCompletionTutorial } from './matrix-completion';
import { skinningAnimationTutorial } from './skinning-animation';
import { graphLaplacianTutorial } from './graph-laplacian';
import { compressedSensingTutorial } from './compressed-sensing';
import { laCsOverviewTutorial } from './la-cs-overview';

export const linearAlgebraCategory: CategoryWithTutorials = {
  id: 'linear-algebra',
  name: '線形代数',
  description: 'ベクトル・行列・変換・CS応用を視覚的に理解する',
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
    // ── 発展編 ──
    svdIntroTutorial,
    svdImageTutorial,
    orthonormalBasisTutorial,
    qrDecompositionTutorial,
    luDecompositionTutorial,
    symmetricEigenvalueTutorial,
    positiveDefiniteTutorial,
    tensorIntroTutorial,
    normsDistancesTutorial,
    projectionDistanceTutorial,
    matrixComplexityTutorial,
    sparseMatrixTutorial,
    gpuMatrixTutorial,
    neuralNetMatrixTutorial,
    gradientDescentTutorial,
    matrixFactorizationRecTutorial,
    word2vecIntroTutorial,
    renderingPipelineTutorial,
    quaternionRotationTutorial,
    bezierMatrixTutorial,
    iterativeSolverTutorial,
    eigenvalueNumericalTutorial,
    pagerankAdvancedTutorial,
    pcaAdvancedTutorial,
    kernelPcaTutorial,
    matrixCompletionTutorial,
    skinningAnimationTutorial,
    graphLaplacianTutorial,
    compressedSensingTutorial,
    laCsOverviewTutorial,
  ],
};
