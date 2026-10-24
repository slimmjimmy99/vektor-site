import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://vektorgis.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
});
