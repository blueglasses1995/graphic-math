import React from 'react';
import { TutorialTreeView } from './TutorialTreeView';
import { BrowserRouter } from 'react-router-dom';

/**
 * Example usage of TutorialTreeView component
 *
 * This component displays an interactive tree visualization of all tutorials
 * with their prerequisite relationships.
 */
export const TutorialTreeViewExample: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ width: '100vw', height: '100vh' }}>
        <h1 style={{ padding: '20px', margin: 0 }}>Tutorial Dependency Tree</h1>
        <TutorialTreeView />
      </div>
    </BrowserRouter>
  );
};

/**
 * Features:
 *
 * 1. Node Visualization
 *    - Node size based on estimatedMinutes (larger = more time)
 *    - Background color gradient by difficulty:
 *      - Green (1-3): Beginner
 *      - Yellow/Orange (4-6): Intermediate
 *      - Red (7-10): Advanced
 *
 * 2. Status Indicators
 *    - ✓ (checkmark): Tutorial completed
 *    - ◉ (filled circle): Tutorial in progress
 *    - ○ (empty circle): Tutorial available to start
 *    - ◌ (dotted circle): Tutorial locked (prerequisites not met)
 *
 * 3. Interactive Features
 *    - Click on available/in-progress/completed nodes to navigate to tutorial
 *    - Locked nodes cannot be clicked
 *    - Hover to see node enlargement animation
 *    - Pan and zoom controls
 *
 * 4. Prerequisite Relationships
 *    - Solid arrows: Required prerequisites (must complete first)
 *    - Dashed arrows: Suggested prerequisites (recommended but optional)
 *    - Animated arrows: Prerequisites not yet completed
 *    - Static arrows: Prerequisites already completed
 *
 * 5. Category Filter
 *    - Dropdown to filter by category
 *    - "All" option to see entire curriculum
 *    - Updates graph layout automatically
 *
 * 6. Auto Layout
 *    - Uses Dagre algorithm for hierarchical layout
 *    - Top-to-bottom flow (prerequisites at top)
 *    - Automatic node positioning
 *    - Optimized spacing for readability
 *
 * 7. Tooltip Information (displayed on node)
 *    - Tutorial title
 *    - Difficulty level (1-10)
 *    - Time estimate in minutes
 *
 * 8. User Progress Tracking
 *    - Automatically loads saved progress from localStorage
 *    - Updates visual status based on completion
 *    - Locks tutorials with unmet prerequisites
 */

export default TutorialTreeViewExample;
