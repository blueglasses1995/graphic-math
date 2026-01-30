/**
 * Difficulty Calculation Utility
 *
 * Implements the automatic difficulty calculation algorithm from the curriculum design.
 * Traverses prerequisite chains and applies category-specific bonuses to determine
 * appropriate difficulty levels (1-10) for tutorials.
 *
 * Algorithm:
 * 1. Calculate base difficulty from prerequisite chain depth
 * 2. Apply adjustment factors (suggested prerequisites, exercises, category bonus)
 * 3. Clamp final result to 1-10 range
 */

import { Tutorial, TutorialCategory } from '../types';

/**
 * Difficulty level thresholds with learning expectations
 */
export interface DifficultyLevel {
  level: number;
  range: [number, number];
  label: string;
  description: string;
  prerequisiteDepth: string;
  examples: string[];
}

/**
 * Difficulty levels guide (1-10 scale)
 */
export const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  {
    level: 1,
    range: [1, 1],
    label: 'Beginner (1)',
    description: 'Introductory concepts, requires only middle school mathematics',
    prerequisiteDepth: 'No prerequisites',
    examples: ['Set basics', 'Vector addition'],
  },
  {
    level: 2,
    range: [2, 2],
    label: 'Beginner (2)',
    description: 'Entry-level topics, single prerequisite',
    prerequisiteDepth: 'Depth: 1',
    examples: ['Basic group properties', 'Matrix operations'],
  },
  {
    level: 3,
    range: [3, 3],
    label: 'Foundational (3)',
    description: 'Core category concepts with 1-2 prerequisites',
    prerequisiteDepth: 'Depth: 1-2',
    examples: ['Group definition', 'Eigenvalues'],
  },
  {
    level: 4,
    range: [4, 4],
    label: 'Foundational (4)',
    description: 'Multiple foundational prerequisites combined',
    prerequisiteDepth: 'Depth: 2-3',
    examples: ['Normal subgroups', 'Complex integration'],
  },
  {
    level: 5,
    range: [5, 5],
    label: 'Intermediate (5)',
    description: 'Combination of multiple foundational concepts',
    prerequisiteDepth: 'Depth: 3-4',
    examples: ['Quotient groups', 'Fourier series'],
  },
  {
    level: 6,
    range: [6, 6],
    label: 'Intermediate (6)',
    description: 'Building complex structures from basics',
    prerequisiteDepth: 'Depth: 4-5',
    examples: ['Galois correspondence', 'Representation theory'],
  },
  {
    level: 7,
    range: [7, 7],
    label: 'Advanced (7)',
    description: 'Abstract thinking and cross-field synthesis',
    prerequisiteDepth: 'Depth: 5-6',
    examples: ['Galois theory', 'Laplace transforms'],
  },
  {
    level: 8,
    range: [8, 8],
    label: 'Advanced (8)',
    description: 'Higher abstraction with multiple integrated concepts',
    prerequisiteDepth: 'Depth: 6-7',
    examples: ['Category theory', 'Partial differential equations'],
  },
  {
    level: 9,
    range: [9, 9],
    label: 'Expert (9)',
    description: 'Deep integration across multiple mathematical domains',
    prerequisiteDepth: 'Depth: 7-8',
    examples: ['Topos theory', 'Advanced topology'],
  },
  {
    level: 10,
    range: [10, 10],
    label: 'Expert (10)',
    description: 'Frontier topics requiring mastery of multiple fields',
    prerequisiteDepth: 'Depth: 8+',
    examples: ['Advanced category theory', 'Derived algebraic geometry'],
  },
];

/**
 * Category bonus table - difficulty adjustment per category
 *
 * Bonuses reflect the intrinsic difficulty of concepts in each category,
 * independent of prerequisite chain depth. Categories with more abstract
 * concepts or requiring more advanced mathematical maturity have higher bonuses.
 *
 * Ranges: 0 (fundamental, intuitive) to 2 (highly abstract, theoretical)
 */
export const CATEGORY_BONUSES: Record<TutorialCategory, number> = {
  // Foundational categories (0 bonus)
  'exponential': 0,          // Intuitive growth/decay
  'trigonometry': 0,         // Visual, circle-based
  'set-theory': 0,           // Foundation of all math

  // Semi-foundational (0.5 bonus)
  'linear-algebra': 0.5,     // Visual via vectors/matrices
  'differential-calculus': 0.5,  // Intuitive rate of change
  'discrete-math': 0.5,      // Algorithmic thinking
  'probability': 0.5,        // Intuitive once understood
  'statistics': 0.5,         // Applied probability
  'logarithmic': 0.5,        // Inverse of exponential
  'graph-theory': 1,         // Visual but requires more abstraction

  // Intermediate (1 bonus)
  'complex-numbers': 1,      // 2D visualization helps
  'algebra': 1,              // Abstract structures
  'fourier': 1.5,            // Multiple field integration
  'ode': 1.5,                // Dynamic systems
  'integral-calculus': 1,    // Extension of differential

  // Advanced (1.5-2 bonus)
  'laplace': 1.5,            // Engineering abstraction
  'pde': 2,                  // Highly abstract systems
  'topology': 2,             // High-level abstraction
  'category-theory': 2,      // Most abstract, foundational
};

/**
 * Traverses the prerequisite chain and calculates depth
 *
 * @param tutorial - The tutorial to analyze
 * @param allTutorials - Map of all tutorials indexed by ID for lookup
 * @returns The depth of the prerequisite chain (0 = no prerequisites)
 *
 * @throws Will not throw, but silently stops if prerequisite not found (data integrity issue)
 */
export function calculatePrerequisiteDepth(
  tutorial: Tutorial,
  allTutorials: Map<string, Tutorial>
): number {
  let depth = 0;
  let current = tutorial.prerequisite;

  while (current) {
    depth++;
    const prereq = allTutorials.get(current);
    if (!prereq) {
      console.warn(
        `[calculatePrerequisiteDepth] Prerequisite not found: "${current}" (referenced by "${tutorial.id}")`
      );
      break;
    }
    current = prereq.prerequisite;
  }

  return depth;
}

/**
 * Gets the difficulty bonus for a given category
 *
 * Bonuses account for the intrinsic difficulty of mathematical concepts
 * within each category, independent of prerequisite depth.
 *
 * @param category - The tutorial category
 * @returns Bonus difficulty modifier (0-2)
 */
export function getCategoryBonus(category: TutorialCategory): number {
  return CATEGORY_BONUSES[category] ?? 0;
}

/**
 * Calculates the difficulty level of a tutorial (1-10)
 *
 * Algorithm:
 * 1. Traverse prerequisite chain to get depth
 * 2. Map depth to base difficulty (depth * 1.5 + 1, clamped to 10)
 * 3. Add adjustment factors:
 *    - Suggested prerequisites: 0.5 per item
 *    - Has exercises section: 0.5
 *    - Category bonus: 0-2
 * 4. Clamp final result to 1-10
 *
 * Rationale:
 * - Base difficulty is depth-driven (prerequisite knowledge is primary driver)
 * - Suggested prerequisites add complexity (multiple concepts needed)
 * - Exercises add depth (content requires practice to master)
 * - Category bonuses account for intrinsic abstraction level
 * - Final clamping ensures 1-10 validity
 *
 * @param tutorial - The tutorial to analyze
 * @param allTutorials - Map of all tutorials indexed by ID
 * @returns Difficulty level from 1 to 10
 *
 * @example
 * ```typescript
 * const tutorials = new Map([
 *   ['closure', { id: 'closure', prerequisite: undefined, ...}],
 *   ['group-def', { id: 'group-def', prerequisite: 'closure', ...}],
 *   ['subgroup', { id: 'subgroup', prerequisite: 'group-def', ...}]
 * ]);
 *
 * calculateDifficulty(tutorials.get('closure'), tutorials);  // → 1
 * calculateDifficulty(tutorials.get('group-def'), tutorials);  // → 2-3
 * calculateDifficulty(tutorials.get('subgroup'), tutorials);   // → 3-4
 * ```
 */
export function calculateDifficulty(
  tutorial: Tutorial,
  allTutorials: Map<string, Tutorial>
): number {
  // Step 1: Calculate prerequisite chain depth
  const depth = calculatePrerequisiteDepth(tutorial, allTutorials);

  // Step 2: Map depth to base difficulty (depth * 1.5 + 1, max 10)
  const baseDifficulty = Math.min(Math.ceil(depth * 1.5) + 1, 10);

  // Step 3: Calculate adjustment factors
  const suggestedCount = (tutorial.suggestedPrerequisites?.length ?? 0) * 0.5;
  const hasExercises = tutorial.sections?.exercises ? 0.5 : 0;
  const categoryBonus = getCategoryBonus(tutorial.category);

  // Step 4: Combine factors and clamp to valid range
  const finalDifficulty = Math.max(
    1,
    Math.min(10, baseDifficulty + suggestedCount + hasExercises + categoryBonus)
  );

  // Return rounded integer
  return Math.round(finalDifficulty);
}

/**
 * Batch calculates difficulty for multiple tutorials
 *
 * Useful for initialization or recalculation of entire categories.
 * Maintains efficiency by using a single Map lookup.
 *
 * @param tutorials - Array of tutorials to calculate difficulty for
 * @param allTutorials - Map of all tutorials indexed by ID
 * @returns Array of difficulty values in same order as input
 */
export function calculateDifficultiesBatch(
  tutorials: Tutorial[],
  allTutorials: Map<string, Tutorial>
): number[] {
  return tutorials.map((tutorial) => calculateDifficulty(tutorial, allTutorials));
}

/**
 * Validates the difficulty of a tutorial against its prerequisites
 *
 * Checks that a tutorial's difficulty is >= its prerequisites' difficulties,
 * adjusted for category bonuses. This helps identify potential issues where
 * a tutorial is marked as easier than its prerequisites.
 *
 * @param tutorial - Tutorial to validate
 * @param allTutorials - Map of all tutorials indexed by ID
 * @returns Validation result object
 */
export interface DifficultyValidationResult {
  isValid: boolean;
  tutorial: string;
  difficulty: number;
  prerequisiteDifficulty?: number;
  message: string;
}

export function validateTutorialDifficulty(
  tutorial: Tutorial,
  allTutorials: Map<string, Tutorial>
): DifficultyValidationResult {
  const tutorial_id = tutorial.id;
  const difficulty = calculateDifficulty(tutorial, allTutorials);

  if (!tutorial.prerequisite) {
    return {
      isValid: true,
      tutorial: tutorial_id,
      difficulty,
      message: 'No prerequisite - validation passed',
    };
  }

  const prereq = allTutorials.get(tutorial.prerequisite);
  if (!prereq) {
    return {
      isValid: false,
      tutorial: tutorial_id,
      difficulty,
      message: `Prerequisite not found: "${tutorial.prerequisite}"`,
    };
  }

  const prereqDifficulty = calculateDifficulty(prereq, allTutorials);

  const isValid = difficulty >= prereqDifficulty;
  return {
    isValid,
    tutorial: tutorial_id,
    difficulty,
    prerequisiteDifficulty: prereqDifficulty,
    message: isValid
      ? `Valid: ${tutorial_id} (${difficulty}) >= prerequisite (${prereqDifficulty})`
      : `Invalid: ${tutorial_id} (${difficulty}) < prerequisite (${prereqDifficulty})`,
  };
}

/**
 * Validates difficulty for a batch of tutorials
 *
 * @param tutorials - Array of tutorials to validate
 * @param allTutorials - Map of all tutorials indexed by ID
 * @returns Array of validation results
 */
export function validateTutorialDifficultiesBatch(
  tutorials: Tutorial[],
  allTutorials: Map<string, Tutorial>
): DifficultyValidationResult[] {
  return tutorials.map((tutorial) => validateTutorialDifficulty(tutorial, allTutorials));
}

/**
 * Analyzes difficulty distribution across tutorials
 *
 * Useful for curriculum analysis to ensure good distribution across difficulty levels.
 * Returns statistics about how tutorials are distributed across the 1-10 scale.
 *
 * @param tutorials - Array of tutorials to analyze
 * @param allTutorials - Map of all tutorials indexed by ID
 * @returns Distribution statistics
 */
export interface DifficultyDistribution {
  total: number;
  byLevel: Record<number, number>;
  byCategory: Record<string, { count: number; averageDifficulty: number }>;
  statistics: {
    min: number;
    max: number;
    mean: number;
    median: number;
    standardDeviation: number;
  };
}

export function analyzeDifficultyDistribution(
  tutorials: Tutorial[],
  allTutorials: Map<string, Tutorial>
): DifficultyDistribution {
  const difficulties = calculateDifficultiesBatch(tutorials, allTutorials);

  // By level
  const byLevel: Record<number, number> = {};
  for (let i = 1; i <= 10; i++) {
    byLevel[i] = 0;
  }
  difficulties.forEach((d) => {
    byLevel[d]++;
  });

  // By category
  const byCategory: Record<string, { count: number; difficulties: number[] }> = {};
  tutorials.forEach((tutorial, index) => {
    if (!byCategory[tutorial.category]) {
      byCategory[tutorial.category] = { count: 0, difficulties: [] };
    }
    byCategory[tutorial.category].count++;
    byCategory[tutorial.category].difficulties.push(difficulties[index]);
  });

  const byCategorySummary: Record<
    string,
    { count: number; averageDifficulty: number }
  > = {};
  Object.entries(byCategory).forEach(([cat, data]) => {
    const avg =
      data.difficulties.reduce((a, b) => a + b, 0) / data.difficulties.length;
    byCategorySummary[cat] = {
      count: data.count,
      averageDifficulty: Math.round(avg * 100) / 100,
    };
  });

  // Statistics
  const sorted = [...difficulties].sort((a, b) => a - b);
  const sum = difficulties.reduce((a, b) => a + b, 0);
  const mean = sum / difficulties.length;
  const median = sorted[Math.floor(sorted.length / 2)];
  const variance =
    difficulties.reduce((acc, d) => acc + Math.pow(d - mean, 2), 0) /
    difficulties.length;
  const standardDeviation = Math.sqrt(variance);

  return {
    total: tutorials.length,
    byLevel,
    byCategory: byCategorySummary,
    statistics: {
      min: Math.min(...difficulties),
      max: Math.max(...difficulties),
      mean: Math.round(mean * 100) / 100,
      median,
      standardDeviation: Math.round(standardDeviation * 100) / 100,
    },
  };
}
