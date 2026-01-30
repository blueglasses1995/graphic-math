/**
 * Category definitions and metadata for LearnMath curriculum
 * 19 categories with complete metadata including difficulty, estimated hours, and foundational status
 */

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  baseDifficulty: number;
  estimatedHours: number;
  isFoundational: boolean;
}

export const categories: Category[] = [
  {
    id: 'set-theory',
    name: 'Set Theory',
    description: 'Foundation of modern mathematics - sets, functions, cardinality, and infinite collections',
    icon: '∅',
    color: '#FF6B6B',
    order: 1,
    baseDifficulty: 2,
    estimatedHours: 8,
    isFoundational: true,
  },
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    description: 'Trigonometric functions, angles, periodic functions, and applications in waves and oscillations',
    icon: '∿',
    color: '#4ECDC4',
    order: 2,
    baseDifficulty: 3,
    estimatedHours: 12,
    isFoundational: false,
  },
  {
    id: 'exponential',
    name: 'Exponential Functions',
    description: 'Growth and decay models, exponential equations, applications in biology, finance, and physics',
    icon: '⇧',
    color: '#FFE66D',
    order: 3,
    baseDifficulty: 3,
    estimatedHours: 10,
    isFoundational: false,
  },
  {
    id: 'logarithmic',
    name: 'Logarithmic Functions',
    description: 'Inverse of exponentials, logarithmic scales, applications in measuring information and intensity',
    icon: '⇩',
    color: '#95E1D3',
    order: 4,
    baseDifficulty: 3,
    estimatedHours: 10,
    isFoundational: false,
  },
  {
    id: 'complex-numbers',
    name: 'Complex Numbers',
    description: 'Complex plane, polar form, operations, roots of unity, applications in signal processing and quantum mechanics',
    icon: 'ℂ',
    color: '#A8E6CF',
    order: 5,
    baseDifficulty: 4,
    estimatedHours: 12,
    isFoundational: false,
  },
  {
    id: 'linear-algebra',
    name: 'Linear Algebra',
    description: 'Vectors, matrices, linear transformations, eigenvalues, SVD - essential for machine learning and graphics',
    icon: '𝐀',
    color: '#FFD3B6',
    order: 6,
    baseDifficulty: 4,
    estimatedHours: 25,
    isFoundational: true,
  },
  {
    id: 'probability',
    name: 'Probability',
    description: 'Probability theory, random variables, distributions, conditional probability, and Bayes theorem',
    icon: '🎲',
    color: '#FFAAA5',
    order: 7,
    baseDifficulty: 4,
    estimatedHours: 15,
    isFoundational: false,
  },
  {
    id: 'statistics',
    name: 'Statistics',
    description: 'Data analysis, hypothesis testing, confidence intervals, regression, and statistical inference',
    icon: '📊',
    color: '#FF8B94',
    order: 8,
    baseDifficulty: 4,
    estimatedHours: 15,
    isFoundational: false,
  },
  {
    id: 'differential-calculus',
    name: 'Differential Calculus',
    description: 'Limits, derivatives, rates of change, optimization, and applications to motion and physics',
    icon: 'd/dx',
    color: '#AA96DA',
    order: 9,
    baseDifficulty: 5,
    estimatedHours: 15,
    isFoundational: true,
  },
  {
    id: 'integral-calculus',
    name: 'Integral Calculus',
    description: 'Integrals, antiderivatives, definite and improper integrals, applications to area, volume, and work',
    icon: '∫',
    color: '#FCBAD3',
    order: 10,
    baseDifficulty: 6,
    estimatedHours: 18,
    isFoundational: true,
  },
  {
    id: 'discrete-math',
    name: 'Discrete Mathematics',
    description: 'Combinatorics, counting, graph algorithms, logic, automata, and computational complexity',
    icon: '⊢',
    color: '#A0C4FF',
    order: 11,
    baseDifficulty: 5,
    estimatedHours: 25,
    isFoundational: false,
  },
  {
    id: 'graph-theory',
    name: 'Graph Theory',
    description: 'Graphs, connectivity, paths, algorithms, applications in networks, social systems, and optimization',
    icon: '⊗',
    color: '#CAFFBF',
    order: 12,
    baseDifficulty: 5,
    estimatedHours: 25,
    isFoundational: false,
  },
  {
    id: 'algebra',
    name: 'Abstract Algebra',
    description: 'Groups, rings, fields, Galois theory - mathematical structures underlying modern cryptography and algebra',
    icon: '⊙',
    color: '#FFB4B4',
    order: 13,
    baseDifficulty: 6,
    estimatedHours: 30,
    isFoundational: true,
  },
  {
    id: 'fourier',
    name: 'Fourier Analysis',
    description: 'Fourier series, transforms, wavelets, signal processing, and frequency domain analysis',
    icon: '~',
    color: '#E0BBE4',
    order: 14,
    baseDifficulty: 7,
    estimatedHours: 20,
    isFoundational: false,
  },
  {
    id: 'laplace',
    name: 'Laplace Transforms',
    description: 'Laplace transforms, s-domain analysis, control theory, and applications to system modeling',
    icon: 'ℒ',
    color: '#D4A5FF',
    order: 15,
    baseDifficulty: 7,
    estimatedHours: 18,
    isFoundational: false,
  },
  {
    id: 'ode',
    name: 'Ordinary Differential Equations',
    description: 'ODE solving methods, phase planes, stability analysis, and applications to dynamical systems',
    icon: 'dy/dt',
    color: '#FFDDC1',
    order: 16,
    baseDifficulty: 7,
    estimatedHours: 20,
    isFoundational: false,
  },
  {
    id: 'pde',
    name: 'Partial Differential Equations',
    description: 'PDE classification, separation of variables, boundary value problems, and physical applications',
    icon: '∂',
    color: '#F7CAC9',
    order: 17,
    baseDifficulty: 8,
    estimatedHours: 22,
    isFoundational: false,
  },
  {
    id: 'category-theory',
    name: 'Category Theory',
    description: 'Categories, functors, natural transformations, limits - the language of modern mathematics',
    icon: '◇',
    color: '#B5EAD7',
    order: 18,
    baseDifficulty: 8,
    estimatedHours: 25,
    isFoundational: false,
  },
  {
    id: 'topology',
    name: 'Topology',
    description: 'Topological spaces, continuity, compactness, connectedness, manifolds, and algebraic topology',
    icon: '⊥',
    color: '#C7CEEA',
    order: 19,
    baseDifficulty: 9,
    estimatedHours: 28,
    isFoundational: false,
  },
];

/**
 * Get a category by its ID
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

/**
 * Get all foundational categories
 */
export function getFoundationalCategories(): Category[] {
  return categories.filter((cat) => cat.isFoundational);
}

/**
 * Get categories sorted by order (recommended learning sequence)
 */
export function getCategoriesByOrder(): Category[] {
  return [...categories].sort((a, b) => a.order - b.order);
}

/**
 * Get categories sorted by difficulty
 */
export function getCategoriesByDifficulty(): Category[] {
  return [...categories].sort((a, b) => a.baseDifficulty - b.baseDifficulty);
}

export default categories;
