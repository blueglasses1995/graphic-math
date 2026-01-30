import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  category: string;
  categoryId: string;
  tutorialTitle: string;
}

export function Breadcrumb({ category, categoryId, tutorialTitle }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
      <Link to="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <Link to={`/?category=${categoryId}`} className="hover:text-white transition-colors">
        {category}
      </Link>
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-white font-medium">{tutorialTitle}</span>
    </nav>
  );
}
