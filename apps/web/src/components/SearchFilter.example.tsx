/**
 * Example usage of SearchFilter component
 *
 * This file demonstrates how to integrate SearchFilter into your application
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import TutorialPage from '../pages/TutorialPage';

// Example: Basic usage in a route
export function SearchRoute() {
  return <SearchFilter />;
}

// Example: Full application with routing
export function AppWithSearch() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchFilter />} />
        <Route path="/search" element={<SearchFilter />} />
        <Route path="/tutorial/:id" element={<TutorialPage />} />
      </Routes>
    </Router>
  );
}

// Example: Search page with header
export function SearchPageWithLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">LearnMath</h1>
        </div>
      </header>
      <main>
        <SearchFilter />
      </main>
    </div>
  );
}

// Example: Embedded in a dashboard
export function DashboardWithSearch() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <nav>
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li>
            <li><a href="/search" className="hover:text-gray-300">Search</a></li>
            <li><a href="/progress" className="hover:text-gray-300">Progress</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <SearchFilter />
      </main>
    </div>
  );
}

// Example: Accessing filter state externally (advanced)
// If you need to control filters from outside the component,
// you would need to lift state up or use a shared store:

import { create } from 'zustand';

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
}));

// Then modify SearchFilter to optionally accept external control:
// <SearchFilter initialQuery={searchStore.query} />
