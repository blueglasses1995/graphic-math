export { bridgesTutorial } from './bridges';
export { graphIntroTutorial } from './graph-intro';
export { degreeHandshakeTutorial } from './degree-handshake';
export { pathCycleTutorial } from './path-cycle';
export { connectedGraphTutorial } from './connected-graph';
export { treeTutorial } from './tree';
export { spanningTreeTutorial } from './spanning-tree';
export { shortestPathTutorial } from './shortest-path';
export { graphColoringTutorial } from './graph-coloring';
export { planarGraphTutorial } from './planar-graph';
export { bipartiteMatchingTutorial } from './bipartite-matching';
export { countingBasicsTutorial } from './counting-basics';
export { permCombTutorial } from './perm-comb';
export { binomialPascalTutorial } from './binomial-pascal';
export { inclusionExclusionTutorial } from './inclusion-exclusion';
export { propositionalLogicTutorial } from './propositional-logic';
export { predicateLogicTutorial } from './predicate-logic';
export { mathematicalInductionTutorial } from './mathematical-induction';
export { proofByContradictionTutorial } from './proof-by-contradiction';
export { discreteSummaryTutorial } from './discrete-summary';
export { networkOptimizationTutorial } from './network-optimization';
export { snsAnalysisTutorial } from './sns-analysis';
export { schedulingTutorial } from './scheduling';
export { maxFlowTutorial } from './max-flow';
export { tspTutorial } from './tsp';
export { cryptoHashTutorial } from './crypto-hash';
export { booleanCircuitsTutorial } from './boolean-circuits';
export { recursionFibonacciTutorial } from './recursion-fibonacci';
export { pigeonholeAppTutorial } from './pigeonhole-app';
export { ramseyTheoryTutorial } from './ramsey-theory';

import { TutorialCategory } from '../types';
import { bridgesTutorial } from './bridges';
import { graphIntroTutorial } from './graph-intro';
import { degreeHandshakeTutorial } from './degree-handshake';
import { pathCycleTutorial } from './path-cycle';
import { connectedGraphTutorial } from './connected-graph';
import { treeTutorial } from './tree';
import { spanningTreeTutorial } from './spanning-tree';
import { shortestPathTutorial } from './shortest-path';
import { graphColoringTutorial } from './graph-coloring';
import { planarGraphTutorial } from './planar-graph';
import { bipartiteMatchingTutorial } from './bipartite-matching';
import { countingBasicsTutorial } from './counting-basics';
import { permCombTutorial } from './perm-comb';
import { binomialPascalTutorial } from './binomial-pascal';
import { inclusionExclusionTutorial } from './inclusion-exclusion';
import { propositionalLogicTutorial } from './propositional-logic';
import { predicateLogicTutorial } from './predicate-logic';
import { mathematicalInductionTutorial } from './mathematical-induction';
import { proofByContradictionTutorial } from './proof-by-contradiction';
import { discreteSummaryTutorial } from './discrete-summary';
import { networkOptimizationTutorial } from './network-optimization';
import { snsAnalysisTutorial } from './sns-analysis';
import { schedulingTutorial } from './scheduling';
import { maxFlowTutorial } from './max-flow';
import { tspTutorial } from './tsp';
import { cryptoHashTutorial } from './crypto-hash';
import { booleanCircuitsTutorial } from './boolean-circuits';
import { recursionFibonacciTutorial } from './recursion-fibonacci';
import { pigeonholeAppTutorial } from './pigeonhole-app';
import { ramseyTheoryTutorial } from './ramsey-theory';

export const discreteMathCategory: TutorialCategory = {
  id: 'discrete-math',
  name: '離散数学',
  description: 'グラフ・組合せ・論理を視覚的に理解する',
  tutorials: [
    // 基礎編
    bridgesTutorial,
    graphIntroTutorial,
    degreeHandshakeTutorial,
    pathCycleTutorial,
    connectedGraphTutorial,
    treeTutorial,
    spanningTreeTutorial,
    shortestPathTutorial,
    graphColoringTutorial,
    planarGraphTutorial,
    bipartiteMatchingTutorial,
    countingBasicsTutorial,
    permCombTutorial,
    binomialPascalTutorial,
    inclusionExclusionTutorial,
    propositionalLogicTutorial,
    predicateLogicTutorial,
    mathematicalInductionTutorial,
    proofByContradictionTutorial,
    discreteSummaryTutorial,
    // 実践編
    networkOptimizationTutorial,
    snsAnalysisTutorial,
    schedulingTutorial,
    maxFlowTutorial,
    tspTutorial,
    cryptoHashTutorial,
    booleanCircuitsTutorial,
    recursionFibonacciTutorial,
    pigeonholeAppTutorial,
    ramseyTheoryTutorial,
  ],
};
