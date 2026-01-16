import { fileURLToPath } from 'node:url';
// eslint-disable-next-line import/no-unresolved
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    server: {
      https: false,
    },
    test: {
      environment: 'jsdom',
      globals: true,
      reporters: ['junit', 'default'],
      outputFile: 'testReport/junit.xml',
      coverage: {
        reporter: ['text', 'cobertura', 'html', 'lcov'],
        reportsDirectory: 'testReport/coverage',
      },
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
    esbuild: {
      loader: {
        '.css': 'text',
      },
    },
  }),
);
