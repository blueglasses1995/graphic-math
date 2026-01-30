export { rubberGeometryTutorial } from './rubber-geometry';
export { openSetTutorial } from './open-set';
export { closedSetTutorial } from './closed-set';
export { neighborhoodTutorial } from './neighborhood';
export { topologicalSpaceTutorial } from './topological-space';
export { continuousMapTutorial } from './continuous-map';
export { homeomorphismTutorial } from './homeomorphism';
export { connectednessTutorial } from './connectedness';
export { pathConnectednessTutorial } from './path-connectedness';
export { compactnessTutorial } from './compactness';
export { hausdorffTutorial } from './hausdorff';
export { genusTutorial } from './genus';
export { eulerCharacteristicTutorial } from './euler-characteristic';
export { mobiusStripTutorial } from './mobius-strip';
export { kleinBottleTutorial } from './klein-bottle';
export { fundamentalGroupTutorial } from './fundamental-group';
export { fixedPointTutorial } from './fixed-point';
export { ivtTopologyTutorial } from './ivt-topology';
export { metricSpaceTutorial } from './metric-space';
export { topologySummaryTutorial } from './topology-summary';
export { fourColorTutorial } from './four-color';
export { konigsbergTutorial } from './konigsberg';
export { knotTheoryTutorial } from './knot-theory';
export { tdaTutorial } from './tda';
export { borsukUlamTutorial } from './borsuk-ulam';
export { hairyBallTutorial } from './hairy-ball';
export { fractalTutorial } from './fractal';
export { torusWorldTutorial } from './torus-world';
export { projectivePlaneTutorial } from './projective-plane';
export { topologyMlTutorial } from './topology-ml';

import { TutorialCategory } from '../types';
import { rubberGeometryTutorial } from './rubber-geometry';
import { openSetTutorial } from './open-set';
import { closedSetTutorial } from './closed-set';
import { neighborhoodTutorial } from './neighborhood';
import { topologicalSpaceTutorial } from './topological-space';
import { continuousMapTutorial } from './continuous-map';
import { homeomorphismTutorial } from './homeomorphism';
import { connectednessTutorial } from './connectedness';
import { pathConnectednessTutorial } from './path-connectedness';
import { compactnessTutorial } from './compactness';
import { hausdorffTutorial } from './hausdorff';
import { genusTutorial } from './genus';
import { eulerCharacteristicTutorial } from './euler-characteristic';
import { mobiusStripTutorial } from './mobius-strip';
import { kleinBottleTutorial } from './klein-bottle';
import { fundamentalGroupTutorial } from './fundamental-group';
import { fixedPointTutorial } from './fixed-point';
import { ivtTopologyTutorial } from './ivt-topology';
import { metricSpaceTutorial } from './metric-space';
import { topologySummaryTutorial } from './topology-summary';
import { fourColorTutorial } from './four-color';
import { konigsbergTutorial } from './konigsberg';
import { knotTheoryTutorial } from './knot-theory';
import { tdaTutorial } from './tda';
import { borsukUlamTutorial } from './borsuk-ulam';
import { hairyBallTutorial } from './hairy-ball';
import { fractalTutorial } from './fractal';
import { torusWorldTutorial } from './torus-world';
import { projectivePlaneTutorial } from './projective-plane';
import { topologyMlTutorial } from './topology-ml';

export const topologyCategory: TutorialCategory = {
  id: 'topology',
  name: '位相',
  description: '連続変形・開集合・位相空間を視覚的に理解する',
  tutorials: [
    // 基礎編
    rubberGeometryTutorial,
    openSetTutorial,
    closedSetTutorial,
    neighborhoodTutorial,
    topologicalSpaceTutorial,
    continuousMapTutorial,
    homeomorphismTutorial,
    connectednessTutorial,
    pathConnectednessTutorial,
    compactnessTutorial,
    hausdorffTutorial,
    genusTutorial,
    eulerCharacteristicTutorial,
    mobiusStripTutorial,
    kleinBottleTutorial,
    fundamentalGroupTutorial,
    fixedPointTutorial,
    ivtTopologyTutorial,
    metricSpaceTutorial,
    topologySummaryTutorial,
    // 実践編
    fourColorTutorial,
    konigsbergTutorial,
    knotTheoryTutorial,
    tdaTutorial,
    borsukUlamTutorial,
    hairyBallTutorial,
    fractalTutorial,
    torusWorldTutorial,
    projectivePlaneTutorial,
    topologyMlTutorial,
  ],
};
