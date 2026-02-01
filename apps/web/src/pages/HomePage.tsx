import { Link } from 'react-router-dom';
import { allCategories, Tutorial } from '@learnmath/tutorials';

// Type for category objects that include tutorials
interface CategoryWithTutorials {
  id: string;
  name: string;
  description: string;
  tutorials: Tutorial[];
}

export default function HomePage() {
  // Cast allCategories to the correct runtime type
  const categoriesWithTutorials = allCategories as unknown as CategoryWithTutorials[];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">LearnMath</h1>
      <p className="text-xl text-gray-400 text-center mb-12">数学を視覚的に学ぶ</p>
      <div className="grid gap-8">
        {categoriesWithTutorials.map((category) => (
          <div key={category.id} className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <p className="text-gray-400 mb-6">{category.description}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {category.tutorials.map((tutorial) => (
                <Link key={tutorial.id} to={`/tutorial/${tutorial.id}`} className="block bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-colors">
                  <h3 className="text-lg font-medium">{tutorial.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{tutorial.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/sandbox" className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-medium transition-colors">サンドボックスで実験する</Link>
      </div>
    </div>
  );
}
