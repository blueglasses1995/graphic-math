import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import TutorialPage from './pages/TutorialPage';
import SandboxPage from './pages/SandboxPage';
import TutorialTreeView from './components/TutorialTreeView';
import SearchFilter from './components/SearchFilter';
import Dashboard from './pages/Dashboard';
import AppLayout from './layouts/AppLayout';
import { useUserProgressStore } from './store/userProgressStore';

/**
 * Main App component with React Router v6 configuration
 * Provides complete routing structure with layout wrapper
 */
export default function App() {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<'grid' | 'tree' | 'search'>('grid');
  const tutorialProgress = useUserProgressStore((state) => state.tutorialProgress);

  // Calculate total progress percentage
  const completedCount = Object.values(tutorialProgress).filter(
    (p) => p.status === 'completed'
  ).length;
  const totalTutorials = 690; // Approximate total tutorials
  const progressPercentage = Math.round((completedCount / totalTutorials) * 100);

  // Don't show layout for tutorial page (immersive view)
  const shouldShowLayout = !location.pathname.startsWith('/tutorial') &&
                            !location.pathname.startsWith('/sandbox');

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {shouldShowLayout && (
        <AppLayout
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          userProgress={progressPercentage}
        />
      )}

      <main className={shouldShowLayout ? 'flex-1' : 'flex-1 h-screen'}>
        <Routes>
          {/* Home Page - Category Grid */}
          <Route path="/" element={<HomePage />} />

          {/* Category View - Tree view filtered by category */}
          <Route path="/category/:id" element={<TutorialTreeView />} />

          {/* Tutorial Page - Immersive view */}
          <Route path="/tutorial/:id" element={<TutorialPage />} />

          {/* Search Page */}
          <Route path="/search" element={<SearchFilter />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Sandbox Page */}
          <Route path="/sandbox" element={<SandboxPage />} />

          {/* 404 - Not Found */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">404</h1>
                  <p className="text-xl text-gray-400 mb-6">Page not found</p>
                  <a
                    href="/"
                    className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      {shouldShowLayout && <Footer />}
    </div>
  );
}

/**
 * Footer component displayed on all pages except tutorial and sandbox
 */
function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">LearnMath</h3>
            <p className="text-gray-400 text-sm">
              Learn mathematics visually through interactive tutorials and
              simulations.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/sandbox"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Sandbox
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 LearnMath. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
