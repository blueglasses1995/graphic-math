import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface ContentRendererProps {
  content: string;
  sectionType: string;
}

const SECTION_LABELS: Record<string, string> = {
  hook: 'フック',
  concept: '概念',
  visualization: 'ビジュアライゼーション',
  examples: '例題',
  exercises: '練習問題',
  summary: 'まとめ',
};

const SECTION_COLORS: Record<string, string> = {
  hook: 'bg-purple-600/20 text-purple-300 border-purple-500/50',
  concept: 'bg-blue-600/20 text-blue-300 border-blue-500/50',
  visualization: 'bg-green-600/20 text-green-300 border-green-500/50',
  examples: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/50',
  exercises: 'bg-orange-600/20 text-orange-300 border-orange-500/50',
  summary: 'bg-indigo-600/20 text-indigo-300 border-indigo-500/50',
};

export function ContentRenderer({ content, sectionType }: ContentRendererProps) {
  return (
    <div className="prose prose-invert prose-slate max-w-none">
      {/* Section label badge */}
      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold uppercase rounded-full border ${
            SECTION_COLORS[sectionType] || SECTION_COLORS.concept
          }`}
        >
          {SECTION_LABELS[sectionType] || sectionType}
        </span>
      </div>

      {/* Markdown content with KaTeX support */}
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-white mt-6 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-white mt-5 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">{children}</h3>
          ),
          // Paragraphs
          p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
          ),
          // Lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="ml-4">{children}</li>,
          // Code
          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="px-1.5 py-0.5 bg-slate-900 text-indigo-300 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            return (
              <code className="block bg-slate-900 text-gray-300 p-4 rounded-lg overflow-x-auto font-mono text-sm">
                {children}
              </code>
            );
          },
          // Strong/Bold
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),
          // Emphasis/Italic
          em: ({ children }) => <em className="italic text-gray-200">{children}</em>,
          // Blockquote
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-400 my-4">
              {children}
            </blockquote>
          ),
          // Horizontal rule
          hr: () => <hr className="border-slate-700 my-6" />,
          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-indigo-400 hover:text-indigo-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
