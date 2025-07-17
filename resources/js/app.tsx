import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { route as ziggyRoute } from 'ziggy-js';
import { AppColors } from './lib/utils';

// Declare global types
declare global {
  interface Window {
    Ziggy: any;
    route: typeof ziggyRoute;
  }
}

// Make `route()` available globally, using Ziggy config from Blade
window.route = (...args) => ziggyRoute(...args, window.Ziggy);

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
  progress: {
    color: AppColors.primary,
  },
});
