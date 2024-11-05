// src/utils/preloadRouteComponent.js

export default function preloadRouteComponent(route) {
  // This assumes you're using React.lazy for code splitting
  // If not, you'll need to adjust this based on how you're importing your components
  const componentImport = {
    '/': () => import('../pages/Home'),
    '/destination': () => import('../pages/Destination'),
    '/crew': () => import('../pages/Crew'),
    '/technology': () => import('../pages/Technology'),
    // Add other routes as needed
  }[route];

  if (componentImport) {
    componentImport();
  }
}
