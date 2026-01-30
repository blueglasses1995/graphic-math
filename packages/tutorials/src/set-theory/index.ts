import { TutorialCategory } from '../types';

import { whatIsSetTutorial } from './what-is-set';
import { elementMembershipTutorial } from './element-membership';
import { subsetTutorial } from './subset';
import { unionTutorial } from './union';
import { intersectionTutorial } from './intersection';
import { differenceTutorial } from './difference';
import { complementTutorial } from './complement';
import { deMorganTutorial } from './de-morgan';
import { cartesianProductTutorial } from './cartesian-product';
import { powerSetTutorial } from './power-set';
import { finiteInfiniteTutorial } from './finite-infinite';
import { countableInfinityTutorial } from './countable-infinity';
import { uncountableInfinityTutorial } from './uncountable-infinity';
import { functionSetTutorial } from './function-set';
import { injectionSurjectionTutorial } from './injection-surjection';
import { equivalenceRelationTutorial } from './equivalence-relation';
import { orderRelationTutorial } from './order-relation';
import { axiomOfChoiceTutorial } from './axiom-of-choice';
import { russellParadoxTutorial } from './russell-paradox';
import { setSummaryTutorial } from './set-summary';
import { inclusionExclusion2Tutorial } from './inclusion-exclusion-2';
import { inclusionExclusion3Tutorial } from './inclusion-exclusion-3';
import { setBuilderTutorial } from './set-builder';
import { databaseSetsTutorial } from './database-sets';
import { probabilitySetsTutorial } from './probability-sets';
import { logicSetsTutorial } from './logic-sets';
import { hilbertHotelTutorial } from './hilbert-hotel';
import { cantorSetTutorial } from './cantor-set';
import { pigeonholeTutorial } from './pigeonhole';
import { cardinalityTutorial } from './cardinality';

export {
  whatIsSetTutorial,
  elementMembershipTutorial,
  subsetTutorial,
  unionTutorial,
  intersectionTutorial,
  differenceTutorial,
  complementTutorial,
  deMorganTutorial,
  cartesianProductTutorial,
  powerSetTutorial,
  finiteInfiniteTutorial,
  countableInfinityTutorial,
  uncountableInfinityTutorial,
  functionSetTutorial,
  injectionSurjectionTutorial,
  equivalenceRelationTutorial,
  orderRelationTutorial,
  axiomOfChoiceTutorial,
  russellParadoxTutorial,
  setSummaryTutorial,
  inclusionExclusion2Tutorial,
  inclusionExclusion3Tutorial,
  setBuilderTutorial,
  databaseSetsTutorial,
  probabilitySetsTutorial,
  logicSetsTutorial,
  hilbertHotelTutorial,
  cantorSetTutorial,
  pigeonholeTutorial,
  cardinalityTutorial,
};

export const setTheoryCategory: TutorialCategory = {
  id: 'set-theory',
  name: '集合',
  description: 'ベン図・集合演算・論理の基礎を視覚的に理解する',
  tutorials: [
    whatIsSetTutorial,
    elementMembershipTutorial,
    subsetTutorial,
    unionTutorial,
    intersectionTutorial,
    differenceTutorial,
    complementTutorial,
    deMorganTutorial,
    cartesianProductTutorial,
    powerSetTutorial,
    finiteInfiniteTutorial,
    countableInfinityTutorial,
    uncountableInfinityTutorial,
    functionSetTutorial,
    injectionSurjectionTutorial,
    equivalenceRelationTutorial,
    orderRelationTutorial,
    axiomOfChoiceTutorial,
    russellParadoxTutorial,
    setSummaryTutorial,
    inclusionExclusion2Tutorial,
    inclusionExclusion3Tutorial,
    setBuilderTutorial,
    databaseSetsTutorial,
    probabilitySetsTutorial,
    logicSetsTutorial,
    hilbertHotelTutorial,
    cantorSetTutorial,
    pigeonholeTutorial,
    cardinalityTutorial,
  ],
};
