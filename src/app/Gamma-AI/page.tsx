import GammaClient from './GammaClient';

// This is the main page component. It's a Server Component.
// It does not have "use client" at the top.
export default function GammaPage() {
  // This component's only job is to import and render the Client Component.
  // The initial HTML will be rendered on the server, making it visible to crawlers.
  return <GammaClient />;
}
