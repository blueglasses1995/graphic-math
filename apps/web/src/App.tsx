import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialPage from './pages/TutorialPage';
import SandboxPage from './pages/SandboxPage';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorial/:id" element={<TutorialPage />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </div>
  );
}
