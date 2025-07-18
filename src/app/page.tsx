import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import React from 'react'; // React is implicitly available in Next.js App Router

// --- Server-side logic to find pages ---
function getPageMetadata(filePath:string) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Use regex to find an exported title or description. This is an advanced, optional step.
    // For now, we'll keep it simple and just use the folder name.
    return {
      // Example: title: content.match(/export const pageTitle = "(.*)"/)?.[1] || ''
    };
  } catch {
    return {};
  }
}

function findPageRoutes(dir) {
  let routes = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'api' || entry.name.startsWith('_') || entry.name.startsWith('(')) {
        continue;
      }
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);
        if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
          const routePath = fullPath.replace(path.join(process.cwd(), 'src', 'app'), '').replace(/\\/g, '/');
          routes.push({
            name: entry.name.charAt(0).toUpperCase() + entry.name.slice(1).replace(/-/g, ' '),
            path: routePath,
            description: `Explore the ${entry.name.replace(/-/g, ' ')} section for more details.`
          });
        } else {
          routes = routes.concat(findPageRoutes(fullPath));
        }
      }
    }
  } catch (error) {
    console.error("Could not read app directory:", error);
  }
  return routes;
}
// --- End of Server-side logic ---


// --- UI Components ---

const Header = () => (
  <header className="text-center py-16 px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-3">
      AI Training Resources
    </h1>
    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
      Your gateway to AI learning and tools. All pages are automatically discovered and listed below.
    </p>
  </header>
);

const ResourceCard = ({ title, description, link }) => (
  <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col group">
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
      {description}
    </p>
    {/* This div ensures the button is always at the bottom */}
    <div className="mt-auto">
      <div className="inline-flex items-center font-semibold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
        Explore {title}
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="text-center p-8 mt-16 border-t border-slate-200 dark:border-slate-800">
    <p className="text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} AI Training Resources. Empowering learning through artificial intelligence.</p>
  </footer>
);


// --- Main Page Component ---
export default function HomePage() {
  const appDirectory = path.join(process.cwd(), 'src', 'app');
  const pages = findPageRoutes(appDirectory);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
      <div className="container mx-auto px-4">
        <Header />
        <main className="pb-16">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map((page) => (
              // Using Next.js's Link component for optimized client-side navigation
              <Link 
key={page.path}
  href={page.path}
  className="block">
  <ResourceCard
    title={page.name}
    description={page.description}
    link={page.path}
  />
              </Link>
            ))}
            {pages.length === 0 && (
                <p className="col-span-full text-center text-slate-500 text-lg">
                    No pages found. Create a new folder with a page.tsx inside `src/app` to get started.
                </p>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}