/**
 * Tutorial Utilities
 *
 * Exports utility functions for tutorial management, including difficulty
 * calculation, validation, and analysis functions.
 */

// Main difficulty calculation exports
export {
  calculateDifficulty,
  calculateDifficultiesBatch,
  calculatePrerequisiteDepth,
  getCategoryBonus,
  validateTutorialDifficulty,
  validateTutorialDifficultiesBatch,
  analyzeDifficultyDistribution,
  // Constants
  CATEGORY_BONUSES,
  DIFFICULTY_LEVELS,
  // Types
  type DifficultyLevel,
  type DifficultyValidationResult,
  type DifficultyDistribution,
} from './calculateDifficulty';
