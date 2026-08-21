import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'en',
  title: 'MangaPDF',
  icon: '/logo.png',
  logo: '/logo.png',
  base: '/',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/MangaPDForg/mangapdforg.github.io',
      },
    ],
  },
});
