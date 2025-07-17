import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { route as ziggyRoute } from 'ziggy-js';
import { AppColors } from './lib/utils';

// Declare globals to avoid TS errors
declare global {
  interface Window {
    Ziggy: any;
    route: typeof ziggyRoute;
  }
}

// Override global `route` function to use Ziggy config from Blade
window.route = (name: string, params: object = {}, absolute = false) => {
  if (window.Ziggy) {
    return ziggyRoute(name, params, absolute, window.Ziggy);
  }
  return ziggyRoute(name, params, absolute);
};

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
  progress: {
    color: AppColors.primary,
  },
});










// import '../css/app.css';

// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { createRoot } from 'react-dom/client';
// import { route as routeFn } from 'ziggy-js';
// import { AppColors } from './lib/utils';

// declare global {
//     const route: typeof routeFn;
// }

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
//     setup({ el, App, props }) {
//         const root = createRoot(el);

//         root.render(<App {...props} />);
//     },
//     progress: {
//         color: AppColors.primary,
//     },
// });
