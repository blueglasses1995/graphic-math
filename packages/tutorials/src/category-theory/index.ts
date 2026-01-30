import { TutorialCategory } from '../types';

export { whyCategoryTutorial } from './why-category';
export { categoryDefinitionTutorial } from './category-definition';
export { morphismCompositionTutorial } from './morphism-composition';
export { identityMorphismTutorial } from './identity-morphism';
export { isomorphismCatTutorial } from './isomorphism-cat';
export { monoEpiTutorial } from './mono-epi';
export { initialTerminalTutorial } from './initial-terminal';
export { productCoproductTutorial } from './product-coproduct';
export { functorIntroTutorial } from './functor-intro';
export { covariantContravariantTutorial } from './covariant-contravariant';
export { naturalTransformationTutorial } from './natural-transformation';
export { functorCategoryTutorial } from './functor-category';
export { yonedaLemmaTutorial } from './yoneda-lemma';
export { adjointFunctorTutorial } from './adjoint-functor';
export { limitColimitTutorial } from './limit-colimit';
export { pullbackPushoutTutorial } from './pullback-pushout';
export { monadIntroTutorial } from './monad-intro';
export { kleisliCategoryTutorial } from './kleisli-category';
export { abelianCategoryTutorial } from './abelian-category';
export { categorySummaryTutorial } from './category-summary';
export { setCategoryTutorial } from './set-category';
export { groupCategoryTutorial } from './group-category';
export { typeHaskellTutorial } from './type-haskell';
export { monadProgrammingTutorial } from './monad-programming';
export { functorProgrammingTutorial } from './functor-programming';
export { toposIntroTutorial } from './topos-intro';
export { homologicalAlgebraTutorial } from './homological-algebra';
export { databaseFunctorTutorial } from './database-functor';
export { quantumCategoryTutorial } from './quantum-category';
export { categoryOutlookTutorial } from './category-outlook';

import { whyCategoryTutorial } from './why-category';
import { categoryDefinitionTutorial } from './category-definition';
import { morphismCompositionTutorial } from './morphism-composition';
import { identityMorphismTutorial } from './identity-morphism';
import { isomorphismCatTutorial } from './isomorphism-cat';
import { monoEpiTutorial } from './mono-epi';
import { initialTerminalTutorial } from './initial-terminal';
import { productCoproductTutorial } from './product-coproduct';
import { functorIntroTutorial } from './functor-intro';
import { covariantContravariantTutorial } from './covariant-contravariant';
import { naturalTransformationTutorial } from './natural-transformation';
import { functorCategoryTutorial } from './functor-category';
import { yonedaLemmaTutorial } from './yoneda-lemma';
import { adjointFunctorTutorial } from './adjoint-functor';
import { limitColimitTutorial } from './limit-colimit';
import { pullbackPushoutTutorial } from './pullback-pushout';
import { monadIntroTutorial } from './monad-intro';
import { kleisliCategoryTutorial } from './kleisli-category';
import { abelianCategoryTutorial } from './abelian-category';
import { categorySummaryTutorial } from './category-summary';
import { setCategoryTutorial } from './set-category';
import { groupCategoryTutorial } from './group-category';
import { typeHaskellTutorial } from './type-haskell';
import { monadProgrammingTutorial } from './monad-programming';
import { functorProgrammingTutorial } from './functor-programming';
import { toposIntroTutorial } from './topos-intro';
import { homologicalAlgebraTutorial } from './homological-algebra';
import { databaseFunctorTutorial } from './database-functor';
import { quantumCategoryTutorial } from './quantum-category';
import { categoryOutlookTutorial } from './category-outlook';

export const categoryTheoryCategory: TutorialCategory = {
  id: 'category-theory',
  name: '圏論',
  description: '対象・射・関手・自然変換を視覚的に理解する',
  tutorials: [
    whyCategoryTutorial,
    categoryDefinitionTutorial,
    morphismCompositionTutorial,
    identityMorphismTutorial,
    isomorphismCatTutorial,
    monoEpiTutorial,
    initialTerminalTutorial,
    productCoproductTutorial,
    functorIntroTutorial,
    covariantContravariantTutorial,
    naturalTransformationTutorial,
    functorCategoryTutorial,
    yonedaLemmaTutorial,
    adjointFunctorTutorial,
    limitColimitTutorial,
    pullbackPushoutTutorial,
    monadIntroTutorial,
    kleisliCategoryTutorial,
    abelianCategoryTutorial,
    categorySummaryTutorial,
    setCategoryTutorial,
    groupCategoryTutorial,
    typeHaskellTutorial,
    monadProgrammingTutorial,
    functorProgrammingTutorial,
    toposIntroTutorial,
    homologicalAlgebraTutorial,
    databaseFunctorTutorial,
    quantumCategoryTutorial,
    categoryOutlookTutorial,
  ],
};
