import { Matrix3, Vector3 } from '@learnmath/core';

export type StepType = 'explanation' | 'interactive' | 'quiz' | 'animation';

export interface QuizOption {
  id: string;
  label: string;
  correct: boolean;
}

export interface QuizConfig {
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface InteractiveConfig {
  type: 'drag-unit-circle' | 'angle-slider' | 'parameter-sliders';
  initialAngle?: number;
  parameters?: { name: string; min: number; max: number; step: number; initial: number }[];
}

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  sceneConfig: SceneConfig;
  interactive: boolean;
  nextCondition?: 'click' | 'timeout' | 'interaction';
  duration?: number;
  customScene?: string;
  stepType?: StepType;
  quiz?: QuizConfig;
  interactiveConfig?: InteractiveConfig;
}

export interface CircleConfig {
  radius?: number;
  color?: string;
  plane?: 'xy' | 'xz' | 'yz';
}

export interface SceneConfig {
  showGrid: boolean;
  showAxes: boolean;
  vectors?: VectorConfig[];
  circles?: CircleConfig[];
  transform?: Matrix3;
  animateTransform?: boolean;
  highlightElements?: string[];
  cameraPosition?: [number, number, number];
}

export interface VectorConfig {
  id: string;
  vector: Vector3;
  color: string;
  label?: string;
  showComponents?: boolean;
}

/**
 * Section type for new curriculum structure
 * Represents a component of the structured tutorial format
 */
export interface Section {
  /** Content in MDX format, may include LaTeX math expressions */
  content: string;
  /** Configuration for 3D visualization scenes */
  sceneConfig?: SceneConfig;
  /** Whether this section includes interactive elements */
  interactive?: boolean;
}

/**
 * Tutorial sections structure following the new curriculum design
 * Each section serves a specific educational purpose
 */
export interface TutorialSections {
  /** Hook: Motivational introduction (100-200 chars) */
  hook: Section;
  /** Concept: Definition and theory (300-500 chars) */
  concept: Section;
  /** Visualization: 3D/interactive visualization */
  visualization: Section;
  /** Examples: Concrete examples (2+ required) */
  examples: Section;
  /** Exercises: Practice problems (optional) */
  exercises?: Section;
  /** Summary: Key points and next steps (100-150 chars) */
  summary: Section;
}

/**
 * Category type constant for type safety
 */
export type TutorialCategory =
  | 'trigonometry'
  | 'linear-algebra'
  | 'differential-calculus'
  | 'integral-calculus'
  | 'exponential'
  | 'logarithmic'
  | 'set-theory'
  | 'topology'
  | 'probability'
  | 'statistics'
  | 'algebra'
  | 'discrete-math'
  | 'complex-numbers'
  | 'graph-theory'
  | 'category-theory'
  | 'ode'
  | 'pde'
  | 'laplace'
  | 'fourier';

/**
 * Migration status for tracking curriculum redesign progress
 */
export type MigrationStatus = 'legacy' | 'partial' | 'complete';

/**
 * Core tutorial interface following the new curriculum schema
 * Represents a complete learning unit with structured sections and metadata
 */
export interface TutorialNew {
  // Basic information
  /** Unique identifier (e.g., 'group-definition') */
  id: string;
  /** Display title */
  title: string;
  /** Short description of the tutorial */
  description: string;
  /** Category this tutorial belongs to */
  category: TutorialCategory;

  // Curriculum structure
  /** Difficulty level 1-10 (based on depth of prerequisite knowledge) */
  difficulty: number;
  /** ID of single mandatory prerequisite tutorial (within same category) */
  prerequisite?: string;
  /** IDs of suggested optional prerequisites (can be cross-category) */
  suggestedPrerequisites?: string[];
  /** Estimated learning time in minutes */
  estimatedMinutes: number;

  // Content sections
  /** New structured section format */
  sections: TutorialSections;

  // Metadata
  /** Search and categorization tags */
  tags: string[];
  /** IDs of related tutorials for discovery */
  relatedTutorials: string[];
  /** Status of migration from legacy format */
  migrationStatus: MigrationStatus;
}

/**
 * Transition tutorial for backward compatibility
 * Allows both old (steps) and new (sections) formats during migration
 * One of 'steps' or 'sections' should be present; both are optional to support transition period
 */
export interface TransitionTutorial {
  // Basic information
  id: string;
  title: string;
  description: string;
  category: TutorialCategory;

  // Curriculum structure (optional during migration)
  difficulty?: number;
  prerequisite?: string;
  suggestedPrerequisites?: string[];
  estimatedMinutes?: number;

  // Content (legacy or new format)
  /** Legacy step-based format (optional, for backward compatibility) */
  steps?: TutorialStep[];
  /** New section-based format (optional, for new tutorials) */
  sections?: TutorialSections;

  // Metadata (optional during migration)
  tags?: string[];
  relatedTutorials?: string[];

  // Migration tracking
  /** Status of migration from legacy format */
  migrationStatus?: MigrationStatus;

  // Legacy fields (optional)
  prerequisites?: string[];
}

/**
 * Main Tutorial type - currently aliased to TransitionTutorial for backward compatibility
 * Will eventually be replaced with TutorialNew once migration is complete
 */
export type Tutorial = TransitionTutorial;

/**
 * Category metadata for curriculum organization
 */
export interface CategoryMetadata {
  /** Unique category identifier */
  id: string;
  /** Display name */
  name: string;
  /** Category description */
  description: string;
  /** Icon (3D asset or emoji) */
  icon: string;
  /** UI color identifier */
  color: string;
  /** Recommended learning order */
  order: number;
  /** Base difficulty level (1-10) for tutorials in this category */
  baseDifficulty: number;
  /** Estimated hours to complete all tutorials in category */
  estimatedHours: number;
  /** Whether this is a foundational category */
  isFoundational: boolean;
}
