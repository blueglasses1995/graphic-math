import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface AppLayoutProps {
  viewMode: 'grid' | 'tree' | 'search';
  onViewModeChange: (mode: 'grid' | 'tree' | 'search') => void;
  userProgress: number;
}

/**
 * AppLayout component provides:
 * - Header with logo and navigation menu
 * - View mode switcher
 * - User progress indicator
 * - Mobile responsive design with hamburger menu
 */
export default function AppLayout({
  viewMode,
  onViewModeChange,
  userProgress,
}: AppLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menus when route changes
  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-800 border-b border-slate-700 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
            >
              <div className="text-2xl">π</div>
              <span>LearnMath</span>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink
                href="/"
                label="Home"
                isActive={isActive('/')}
              />
              <NavLink
                href="/search"
                label="Search"
                isActive={isActive('/search')}
              />
              <NavLink
                href="/dashboard"
                label="Dashboard"
                isActive={isActive('/dashboard')}
              />
            </nav>

            {/* Right side: Progress, View Mode Switcher, Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Progress Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-full">
                <div className="w-20 h-2 bg-slate-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${userProgress}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-300 whitespace-nowrap">
                  {userProgress}%
                </span>
              </div>

              {/* Desktop View Mode Switcher */}
              <div className="hidden lg:flex items-center gap-1 bg-slate-700 rounded-lg p-1">
                <ViewModeButton
                  mode="grid"
                  icon="◈"
                  label="Grid"
                  isActive={viewMode === 'grid'}
                  onClick={() => onViewModeChange('grid')}
                />
                <ViewModeButton
                  mode="tree"
                  icon="🌳"
                  label="Tree"
                  isActive={viewMode === 'tree'}
                  onClick={() => onViewModeChange('tree')}
                />
                <ViewModeButton
                  mode="search"
                  icon="🔍"
                  label="Search"
                  isActive={viewMode === 'search'}
                  onClick={() => onViewModeChange('search')}
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-slate-700 pt-4">
              <MobileNavLink
                href="/"
                label="Home"
                isActive={isActive('/')}
                onClick={() => handleNavigation('/')}
              />
              <MobileNavLink
                href="/search"
                label="Search"
                isActive={isActive('/search')}
                onClick={() => handleNavigation('/search')}
              />
              <MobileNavLink
                href="/dashboard"
                label="Dashboard"
                isActive={isActive('/dashboard')}
                onClick={() => handleNavigation('/dashboard')}
              />

              {/* Mobile View Mode Selector */}
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-xs font-semibold text-gray-400 uppercase mb-3 px-4">
                  View Mode
                </p>
                <div className="flex gap-2 px-4">
                  <button
                    onClick={() => {
                      onViewModeChange('grid');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => {
                      onViewModeChange('tree');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      viewMode === 'tree'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    Tree
                  </button>
                  <button
                    onClick={() => {
                      onViewModeChange('search');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      viewMode === 'search'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Mobile Progress Indicator */}
              <div className="mt-4 pt-4 border-t border-slate-700 px-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-gray-400">Overall Progress</p>
                  <span className="text-sm font-bold text-indigo-400">{userProgress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${userProgress}%` }}
                  />
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

/**
 * Desktop navigation link component
 */
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      to={href}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? 'text-indigo-400 border-b-2 border-indigo-400'
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
}

/**
 * Mobile navigation link component
 */
interface MobileNavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function MobileNavLink({ label, isActive, onClick }: MobileNavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
        isActive
          ? 'bg-slate-700 text-indigo-400'
          : 'text-gray-300 hover:bg-slate-700'
      }`}
    >
      {label}
    </button>
  );
}

/**
 * View mode button component for mode switcher
 */
interface ViewModeButtonProps {
  mode: 'grid' | 'tree' | 'search';
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function ViewModeButton({
  icon,
  label,
  isActive,
  onClick,
}: ViewModeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
        isActive
          ? 'bg-indigo-600 text-white'
          : 'text-gray-400 hover:text-white'
      }`}
      title={label}
    >
      <span>{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
