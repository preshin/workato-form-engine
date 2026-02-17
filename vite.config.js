import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  // Dev server mode: serve the example/ demo app
  if (command === 'serve') {
    return {
      plugins: [react()],
      // optimizeDeps needed because formiojs is CJS
      optimizeDeps: {
        include: ['formiojs', 'formiojs/Form', 'formiojs/FormBuilder',
                  'formiojs/components', 'formiojs/components/Components',
                  'formiojs/components/_classes/field/Field'],
      },
    };
  }

  // Build mode: library output
  return {
    plugins: [react()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'FormEngine',
        formats: ['es', 'umd'],
        fileName: (format) => `form-engine.${format}.js`,
      },
      rollupOptions: {
        // Externalize react, react-dom, and all formiojs imports
        // formiojs is a dependency - consumer's bundler resolves it from node_modules
        external: (id) => {
          if (id === 'react' || id === 'react-dom' || id.startsWith('react-dom/')) return true;
          if (id === 'formiojs' || id.startsWith('formiojs/')) return true;
          if (id === 'eventemitter2') return true;
          return false;
        },
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-dom/client': 'ReactDOMClient',
            formiojs: 'Formio',
          },
        },
      },
    },
  };
});
